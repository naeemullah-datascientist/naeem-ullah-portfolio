"""Create static route entrypoints for the reference style study."""

from pathlib import Path

root = Path(__file__).resolve().parent / "dist"
shell = (root / "index.html").read_text()

routes = [
    "about",
    "portfolio",
    "projects",
    "blog",
    "blog/page/2",
    "blog/page/3",
    "tags",
    "tags/experience",
    "tags/website",
    "tags/devlog",
    "tags/projects",
    "tags/seo",
    "tags/guide",
    "blog/prepping-your-ecomm-site-for-agentic-apocalypse",
    "blog/shopify-metadata-migrator",
    "blog/nanoHabits",
    "blog/nanoHabits-prototype",
    "blog/devlog-6-2-25",
    "blog/CQL",
    "blog/devlog-5-30-25",
    "blog/kfb",
    "blog/merc",
    "blog/devlog-5-26-25",
    "blog/devlog-5-23-25",
]

for route in routes:
    target = root / route / "index.html"
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(shell)

print(f"Prepared {len(routes) + 1} static pages.")
