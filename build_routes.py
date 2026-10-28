"""Create static, crawlable entrypoints for Naeem's portfolio routes."""

import html
import re
from datetime import date
from pathlib import Path

root = Path(__file__).resolve().parent / "dist"
shell = (root / "index.html").read_text()
base_url = "https://naeem-ullah-ai-engineer.deep-crumb-6541.chatgpt.site"

pages = {
    "": ("Naeem Ullah | Full-Stack AI Engineer", "AI products, Python backends, secure workflows, and deployed systems built across professional, client, freelance, and research work."),
    "about": ("About | Naeem Ullah", "Meet Naeem Ullah, an AI and backend engineer working across model workflows, APIs, interfaces, deployment, AI security, and published research."),
    "portfolio": ("AI & Backend Projects | Naeem Ullah", "Explore production-minded AI, backend, cybersecurity, audio AI, computer vision, and client workflow projects by Naeem Ullah."),
    "projects": ("AI & Backend Projects | Naeem Ullah", "Explore production-minded AI, backend, cybersecurity, audio AI, computer vision, and client workflow projects by Naeem Ullah."),
    "publications": ("Publications | Naeem Ullah", "IEEE-published computer vision research by Naeem Ullah, including cricket ball tracking and automated delivery analysis."),
    "publications/beyond-the-naked-eye": ("Beyond the Naked Eye | Naeem Ullah", "Read Naeem Ullah's IEEE FIT 2025 paper on single-camera cricket ball tracking and automated delivery analysis."),
    "contact": ("Contact | Naeem Ullah", "Contact Naeem Ullah about AI engineering roles, Python backend development, freelance projects, and product collaboration."),
    "portfolio/xploiteye": ("XploitEye | Naeem Ullah", "A multi-agent AI security platform connecting authorized assessment, vulnerability context, remediation, and reporting."),
    "portfolio/truck-dispatch-automation": ("Truck Dispatch Automation | Naeem Ullah", "An end-to-end n8n automation connecting truck dispatch validation, calculations, order tracking, delivery stages, APIs, and WhatsApp updates."),
    "portfolio/voice-authenticity": ("AI-Generated Voice Detection | Naeem Ullah", "An audio AI system for evaluating real and synthetic speech through a Python API and interactive inference workflow."),
    "portfolio/cricket-vision": ("Cricket Ball Tracking | Naeem Ullah", "A published computer vision pipeline using YOLOv5s, Kalman filtering, and homography for cricket delivery analysis."),
    "portfolio/legal-ai": ("Legal AI & Document Retrieval | Naeem Ullah", "A knowledge-grounded legal document assistant using retrieval, document processing, and Python backend services."),
    "portfolio/incident-escalation": ("Incident Triage & Escalation | Naeem Ullah", "A client workflow for classifying incidents, tracking acknowledgement, and escalating unresolved cases."),
    "portfolio/fulfillment-workflows": ("AI-Assisted Fulfillment | Naeem Ullah", "A client product workflow connecting purchase orders, shipments, tracking, activity history, and AI-assisted changes."),
}

def set_meta(document: str, route: str, title: str, description: str) -> str:
    canonical = f"{base_url}/{route + '/' if route else ''}"
    replacements = {
        r"<title>.*?</title>": f"<title>{html.escape(title)}</title>",
        r'<meta name="description" content="[^"]*">': f'<meta name="description" content="{html.escape(description, quote=True)}">',
        r'<link rel="canonical" href="[^"]*">': f'<link rel="canonical" href="{canonical}">',
        r'<meta property="og:title" content="[^"]*">': f'<meta property="og:title" content="{html.escape(title, quote=True)}">',
        r'<meta property="og:description" content="[^"]*">': f'<meta property="og:description" content="{html.escape(description, quote=True)}">',
        r'<meta property="og:url" content="[^"]*">': f'<meta property="og:url" content="{canonical}">',
        r'<meta name="twitter:title" content="[^"]*">': f'<meta name="twitter:title" content="{html.escape(title, quote=True)}">',
        r'<meta name="twitter:description" content="[^"]*">': f'<meta name="twitter:description" content="{html.escape(description, quote=True)}">',
    }
    for pattern, replacement in replacements.items():
        document = re.sub(pattern, replacement, document, count=1)
    return document

for route, (title, description) in pages.items():
    target = root / route / "index.html" if route else root / "index.html"
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(set_meta(shell, route, title, description))

urls = "\n".join(
    f"  <url><loc>{base_url}/{route + '/' if route else ''}</loc><lastmod>{date.today().isoformat()}</lastmod></url>"
    for route in pages
    if route != "projects"
)
(root / "sitemap.xml").write_text(
    '<?xml version="1.0" encoding="UTF-8"?>\n'
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    f'{urls}\n</urlset>\n'
)
(root / "robots.txt").write_text(f"User-agent: *\nAllow: /\nSitemap: {base_url}/sitemap.xml\n")

print(f"Prepared {len(pages)} static pages with route metadata, sitemap, and robots.txt.")
