"""Create static entrypoints for Naeem's portfolio routes."""

from pathlib import Path

root = Path(__file__).resolve().parent / "dist"
shell = (root / "index.html").read_text()

routes = [
    "about",
    "portfolio",
    "projects",
    "publications",
    "contact",
    "portfolio/xploiteye",
    "portfolio/voice-authenticity",
    "portfolio/cricket-vision",
]

for route in routes:
    target = root / route / "index.html"
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(shell)

print(f"Prepared {len(routes) + 1} static pages.")
