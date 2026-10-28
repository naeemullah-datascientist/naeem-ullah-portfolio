"""Create static, crawlable entrypoints for Naeem's portfolio routes."""

import html
import os
import re
from datetime import date
from pathlib import Path

root = Path(__file__).resolve().parent / "dist"
shell = (root / "index.html").read_text()
base_url = os.environ.get("SITE_URL", "https://naeem-ullah.pages.dev").rstrip("/")
og_image = f"{base_url}/assets/og-preview.png"
description = "AI Engineer building production systems across AI agents, RAG, workflow automation, computer vision, voice AI, and Python backend engineering. Explore Naeem Ullah's projects, research, and client work."

pages = {
    "": ("Naeem Ullah | AI Engineer", description, "Naeem Ullah is an AI Engineer building production systems across AI agents, RAG, workflow automation, computer vision, voice AI, and Python backend engineering."),
    "about": ("About | Naeem Ullah", "Meet Naeem Ullah, an AI Engineer working across model workflows, Python APIs, interfaces, deployment, AI security, client automation, freelance delivery, and published research.", "I build AI applications and Python backend systems for teams and clients, connecting models to reliable products and deployment workflows."),
    "projects": ("AI Engineering Projects | Naeem Ullah", "Explore Naeem Ullah's AI engineering projects across agents, RAG, workflow automation, cybersecurity, voice AI, computer vision, and client systems.", "Selected projects across AI agents, RAG, workflow automation, cybersecurity, voice AI, computer vision, and client systems."),
    "publications": ("Publications | Naeem Ullah", "IEEE-published computer vision research by Naeem Ullah, including cricket ball tracking and automated delivery analysis.", "Peer-reviewed research and engineering work by Naeem Ullah, including IEEE FIT 2025 computer vision research."),
    "publications/beyond-the-naked-eye": ("Beyond the Naked Eye | Naeem Ullah", "Read Naeem Ullah's IEEE FIT 2025 paper on single-camera cricket ball tracking and automated delivery analysis.", "Read the full IEEE FIT 2025 paper on single-camera cricket ball tracking, pitch mapping, and delivery analysis."),
    "contact": ("Contact | Naeem Ullah", "Contact Naeem Ullah about AI engineering roles, Python backend development, freelance projects, workflow automation, and product collaboration.", "Contact Naeem Ullah about AI engineering roles, Python backend development, freelance projects, and product collaboration."),
    "projects/xploiteye": ("XploitEye | Naeem Ullah", "XploitEye is a multi-agent AI security platform connecting authorized assessment, vulnerability context, remediation, and reporting.", "XploitEye connects authorized security assessment, AI agent workflows, vulnerability context, remediation, and clearer reporting."),
    "projects/truck-dispatch-automation": ("Truck Dispatch Automation | Naeem Ullah", "An end-to-end n8n automation connecting truck dispatch validation, calculations, order tracking, delivery stages, APIs, and WhatsApp updates.", "An end-to-end n8n workflow connecting dispatch validation, business calculations, tracking, delivery stages, APIs, and WhatsApp updates."),
    "projects/deepfake-voice-detection": ("AI-Generated Voice Detection | Naeem Ullah", "An audio AI system for evaluating real and synthetic speech through a Python API and interactive inference workflow.", "A research and engineering prototype for evaluating real and synthetic speech with Python, PyTorch, FastAPI, and an interactive demo."),
    "projects/cricket-ball-tracking": ("Cricket Ball Tracking | Naeem Ullah", "A published computer vision pipeline using YOLOv5s, Kalman filtering, and homography for cricket delivery analysis.", "A published computer vision pipeline using YOLOv5s detection, Kalman tracking, homography, and delivery-length analysis."),
    "projects/legal-ai-document-retrieval": ("Legal AI & Document Retrieval | Naeem Ullah", "A knowledge-grounded legal document assistant using retrieval, document processing, and Python backend services.", "A generalized internal AI system for document processing, retrieval, knowledge relationships, and source-aware answers."),
    "projects/incident-triage-escalation": ("Incident Triage & Escalation | Naeem Ullah", "A client workflow for classifying incidents, tracking acknowledgement, and escalating unresolved cases.", "A client workflow for structured incident intake, severity routing, acknowledgement tracking, and timed escalation."),
    "projects/ai-assisted-fulfillment": ("AI-Assisted Fulfillment | Naeem Ullah", "A client product workflow connecting purchase orders, shipments, tracking, activity history, and AI-assisted changes.", "A client product workflow connecting purchase orders, shipments, tracking, activity history, and controlled AI-assisted changes."),
}

def canonical(route: str) -> str:
    return f"{base_url}/{route + '/' if route else ''}"

def fallback(route: str, title: str, summary: str) -> str:
    href = "/projects/" if route.startswith("projects/") else "/"
    return f'<main class="seo-fallback"><p class="eyebrow">NAEEM ULLAH · AI ENGINEER</p><h1>{html.escape(title)}</h1><p>{html.escape(summary)}</p><p><a href="{href}">Explore the portfolio →</a></p></main>'

def set_meta(document: str, route: str, title: str, page_description: str, summary: str) -> str:
    url = canonical(route)
    replacements = {
        r"<title>.*?</title>": f"<title>{html.escape(title)}</title>",
        r'<meta name="description" content="[^"]*">': f'<meta name="description" content="{html.escape(page_description, quote=True)}">',
        r'<link rel="canonical" href="[^"]*">': f'<link rel="canonical" href="{url}">',
        r'<meta property="og:site_name" content="[^"]*">': '<meta property="og:site_name" content="Naeem Ullah | AI Engineer">',
        r'<meta property="og:title" content="[^"]*">': f'<meta property="og:title" content="{html.escape(title, quote=True)}">',
        r'<meta property="og:description" content="[^"]*">': f'<meta property="og:description" content="{html.escape(page_description, quote=True)}">',
        r'<meta property="og:url" content="[^"]*">': f'<meta property="og:url" content="{url}">',
        r'<meta property="og:image" content="[^"]*">': f'<meta property="og:image" content="{og_image}">',
        r'<meta name="twitter:card" content="[^"]*">': '<meta name="twitter:card" content="summary_large_image">',
        r'<meta name="twitter:title" content="[^"]*">': f'<meta name="twitter:title" content="{html.escape(title, quote=True)}">',
        r'<meta name="twitter:description" content="[^"]*">': f'<meta name="twitter:description" content="{html.escape(page_description, quote=True)}">',
        r'<meta name="twitter:image" content="[^"]*">': f'<meta name="twitter:image" content="{og_image}">',
        r'<div id="app"></div>': f'<div id="app">{fallback(route, title, summary)}</div>',
    }
    for pattern, replacement in replacements.items():
        document = re.sub(pattern, replacement, document, count=1, flags=re.S)
    return document

for route, (title, page_description, summary) in pages.items():
    target = root / route / "index.html" if route else root / "index.html"
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(set_meta(shell, route, title, page_description, summary))

urls = "\n".join(f"  <url><loc>{canonical(route)}</loc><lastmod>{date.today().isoformat()}</lastmod></url>" for route in pages)
(root / "sitemap.xml").write_text('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + f'{urls}\n</urlset>\n')
(root / "robots.txt").write_text(f"User-agent: *\nAllow: /\nSitemap: {base_url}/sitemap.xml\n")

print(f"Prepared {len(pages)} static pages with route metadata, crawlable fallback content, sitemap, and robots.txt for {base_url}.")
