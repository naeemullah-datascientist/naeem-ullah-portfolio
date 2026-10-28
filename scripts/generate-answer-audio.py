#!/usr/bin/env python3
"""Generate the reviewed Ask Naeem audio files from avatar-scripts.json."""

import json
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SCRIPTS = ROOT / "avatar-scripts.json"
OUTPUT = ROOT / "dist" / "assets" / "answers"
FALLBACK = "I don’t have enough verified information in my portfolio to answer that accurately, but you can contact me directly and I’d be happy to discuss it."
VOICE = "en-GB-RyanNeural"


def main() -> None:
    data = json.loads(SCRIPTS.read_text(encoding="utf-8"))
    answers = data["answers"] + [{"id": "fallback", "script": FALLBACK}]
    OUTPUT.mkdir(parents=True, exist_ok=True)
    manifest = {"voice": VOICE, "answers": {}}

    for answer in answers:
        destination = OUTPUT / f"{answer['id']}.mp3"
        subprocess.run(
            [
                "uvx", "edge-tts", "--voice", VOICE, "--rate=-4%", "--pitch=-2Hz",
                "--text", answer["script"], "--write-media", str(destination),
            ],
            check=True,
        )
        manifest["answers"][answer["id"]] = {
            "src": f"/assets/answers/{answer['id']}.mp3",
            "text": answer["script"],
        }

    (OUTPUT / "audio.json").write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
