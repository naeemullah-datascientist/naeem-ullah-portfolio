# Ask Naeem narration

The questions address Naeem directly, and every answer uses his first-person perspective. `dist/app.js` is the source of truth. Run `node scripts/export-avatar-scripts.mjs > avatar-scripts.json` after changing the copy.

The panel uses Naeem's portrait, a restrained voice-ring animation, written answers, and one reviewed audio file per answer. It does not use a browser speech engine, simulated mouth frames, or a runtime API key.

## Audio brief

- Create one audio file for each stable ID in `avatar-scripts.json`, plus the safe fallback answer.
- Use one consistent, natural male English voice with relaxed phrasing and measured pauses.
- Keep the exact written answer and audio script synchronized.
- Store generated MP3 files in `dist/assets/answers/` so playback is fast and independent of an external service at runtime.
- Use the exact answer script. If the script changes, regenerate that clip.

## Integration

Run:

    node scripts/export-avatar-scripts.mjs > avatar-scripts.json
    python3 scripts/generate-answer-audio.py

The generator writes `dist/assets/answers/audio.json`. The player only activates when a manifest script exactly matches the visible answer. It supports play, pause, replay, mute, stop, cancellation when the panel closes, and a readable fallback when an audio file is unavailable.
