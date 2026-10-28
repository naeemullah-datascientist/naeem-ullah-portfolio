# Naeem Ullah portfolio

A static portfolio for Naeem Ullah, Full-Stack AI Engineer. The visual direction keeps the dark olive animated background, glass navigation, and clear typography from the reference study. The content and interactions describe Naeem's actual work.

## Pages

- Home, Portfolio, About, Publications, and Contact
- Project case studies for XploitEye, end-to-end truck dispatch automation, AI-Generated Voice Detection, Cricket Ball Tracking & Delivery Analysis, and three generalized internal/client engagements
- The supplied IEEE manuscript can be read inside the portfolio; the XploitEye video and voice demo are embedded on their case-study pages
- Ten hiring-focused questions addressed directly to Naeem, with first-person answers, concrete ownership examples, and links to supporting work
- An “Ask Naeem” voice experience with ten recruiter-focused questions, written answers, a portrait voice ring, generated English narration, playback controls, and grounded custom-question matching
- Rotating, hand-written hero taglines
- Route-specific titles and descriptions, canonical links, Person structured data, robots.txt, and an XML sitemap

The header and profile card use an identity-preserving edit of Naeem's supplied portrait. Ask Naeem uses reviewed scripts and generated audio stored with the site, so playback needs no browser speech engine or runtime API key. Custom questions are matched to approved answers and fall back safely when the portfolio does not contain the requested information. `profile-data.json` is the verified knowledge source. See `avatar-scripts.json` and `scripts/generate-answer-audio.py` for the narration source and build step. Public project visuals use the XploitEye walkthrough thumbnail, a screenshot of the live voice demo, and a source video frame from the cricket repository. The cricket case also includes the original method figure extracted from Naeem's supplied paper. Internal and client cases use clearly labeled workflow diagrams drawn in HTML/CSS; no private code, client names, or customer data are included. Typography pairs Satoshi with Doto accents, falling back to the bundled Space Grotesk font.

The public Sites URL is `https://naeem-ullah-ai-engineer.deep-crumb-6541.chatgpt.site`. Run `python3 build_routes.py` after editing `dist/index.html`, then serve `dist/` with a static HTTP server for local preview.
