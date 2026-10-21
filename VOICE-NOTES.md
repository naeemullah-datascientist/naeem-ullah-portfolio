# Question-and-answer videos

The questions address Naeem directly, and every answer uses his first-person perspective. `dist/app.js` is the source of truth. Run `node scripts/export-avatar-scripts.mjs > avatar-scripts.json` after changing the copy.

The prior Piper narration and expression-frame animation are no longer used by the interface. The panel currently shows the portrait and written answers. Real talking-avatar clips have not yet been generated; the HeyGen connection is pending.

## Production brief

- Use Naeem's supplied likeness and the portrait at `dist/assets/naeem-portrait.png`.
- Create one short answer clip for each stable ID in `avatar-scripts.json`.
- Use one consistent, natural male English voice, relaxed phrasing, measured pauses, and restrained facial movement.
- Preserve identity, suit, framing, and the dark olive setting. Avoid exaggerated gestures or a sales-presenter delivery.
- Generate and inspect one sample for face stability, pronunciation, lip timing, and voice quality before rendering the remaining answers.
- Download final files into `dist/assets/answers/videos/`; use MP4 with broadly supported video/audio codecs. Add English VTT captions where available.
- Use the exact answer script. If the script changes, regenerate that clip.

## Integration

Add each reviewed clip to `dist/assets/answers/videos.json`:

    {
      "version": 1,
      "answers": {
        "fit": {
          "text": "Exact answer from app.js",
          "src": "/assets/answers/videos/fit.mp4",
          "captions": "/assets/answers/videos/fit.vtt",
          "reviewed": true
        }
      }
    }

The player only activates when a reviewed clip matches the displayed answer. It supports inline mobile playback, native media controls, replay, stop, and cancellation when closing or changing questions. The full text stays readable if a clip is missing or cannot load. Avatar disclosure appears with generated video. No browser speech fallback or simulated lip motion is used.
