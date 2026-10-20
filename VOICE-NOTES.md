# Portfolio narration

The quick answers use pre-rendered English male narration from Piper's `en_US-joe-medium` voice. The voice model is a development input, not a browser download. The voice model card identifies its source dataset as CC0:

https://huggingface.co/rhasspy/piper-voices/blob/main/en/en_US/joe/medium/MODEL_CARD

Generate the files after changing answer text:

    python scripts/generate-narration.py /path/to/en_US-joe-medium.onnx

The script needs `piper-tts`, `numpy`, `lameenc`, and Node.js. It writes MP3s and a compact amplitude envelope used to animate the portrait. The runtime compares the manifest's text with the displayed answer before using a recording. If the audio is unavailable or stale, it can fall back to the browser's English speech voice.

The portrait uses generated eye and mouth expression frames based on Naeem's supplied photograph. Movement follows speech volume, not phoneme-level lip synchronization. The interface identifies the portrait and voice as synthetic.
