"""Render the portfolio's exact Q&A text with a local Piper voice.

Usage: python scripts/generate-narration.py /path/to/en_US-joe-medium.onnx
Dependencies: piper-tts, numpy, lameenc; Node.js extracts the JS content array.
The voice model is a build input and is not shipped to visitors.
"""
import io
import json
import pathlib
import subprocess
import sys
import wave

import lameenc
import numpy as np
from piper import PiperVoice, SynthesisConfig

root = pathlib.Path(__file__).resolve().parents[1]
source = (root / "dist/app.js").read_text()
extractor = "const fs=require('fs'),vm=require('vm');const s=fs.readFileSync(0,'utf8');const b=s.slice(s.indexOf('const questions ='),s.indexOf('const path ='));process.stdout.write(JSON.stringify(vm.runInNewContext(b+';questions')));"
questions = json.loads(subprocess.run(["node", "-e", extractor], input=source, text=True, capture_output=True, check=True).stdout)
output = root / "dist/assets/answers"
output.mkdir(parents=True, exist_ok=True)
voice = PiperVoice.load(sys.argv[1])
config = SynthesisConfig(length_scale=1.04, noise_scale=0.6, noise_w_scale=0.75)
manifest = {"voice": "Piper en_US-joe-medium", "fps": 25, "answers": []}
for index, question in enumerate(questions):
    buffer = io.BytesIO()
    with wave.open(buffer, "wb") as wav:
        voice.synthesize_wav(question["a"], wav, syn_config=config)
    buffer.seek(0)
    with wave.open(buffer, "rb") as wav:
        rate = wav.getframerate()
        pcm = wav.readframes(wav.getnframes())
    samples = np.frombuffer(pcm, dtype=np.int16).astype(np.float32) / 32768.0
    step = round(rate / manifest["fps"])
    levels = np.array([np.sqrt(np.mean(samples[start:start + step] ** 2)) for start in range(0, len(samples), step)])
    scale = max(float(np.percentile(levels, 85)), 0.01)
    levels = np.clip((levels / scale - 0.06) * 1.2, 0, 1)
    encoder = lameenc.Encoder()
    encoder.set_bit_rate(96)
    encoder.set_in_sample_rate(rate)
    encoder.set_channels(1)
    encoder.set_quality(2)
    filename = f"answer-{index + 1}.mp3"
    (output / filename).write_bytes(encoder.encode(pcm) + encoder.flush())
    manifest["answers"].append({"text": question["a"], "file": filename, "duration": round(len(samples) / rate, 2), "levels": [round(float(level), 2) for level in levels]})
    print(f"Rendered {filename}: {len(samples) / rate:.1f}s", flush=True)
(output / "manifest.json").write_text(json.dumps(manifest, separators=(",", ":")))
