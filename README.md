# Naeem Ullah portfolio

A static portfolio for Naeem Ullah, Full-Stack AI Engineer. The visual direction keeps the dark olive animated background, glass navigation, and clear typography from the reference study. The content and interactions describe Naeem's actual work.

## Pages

- Home, Portfolio, About, Publications, and Contact
- Project case studies for XploitEye, AI-Generated Voice Detection, Cricket Ball Tracking & Delivery Analysis, and three generalized internal/client engagements
- The supplied IEEE manuscript can be read inside the portfolio; the XploitEye video and voice demo are embedded on their case-study pages
- Ten hiring-focused questions addressed directly to Naeem, with first-person answers, concrete ownership examples, and links to supporting work
- A video answer player prepared for reviewed talking-avatar clips, with text fallback and mobile playback controls; video generation is pending the HeyGen connection
- Rotating, hand-written hero taglines
- Route-specific titles and descriptions, canonical links, Person structured data, robots.txt, and an XML sitemap

The header and profile card use an identity-preserving edit of Naeem's supplied portrait. The quick-answer panel currently uses the portrait and written answers; the rejected synthetic narrator and mouth-frame animation are disabled. See VOICE-NOTES.md and avatar-scripts.json for the video production brief and integration contract. Public project visuals use the XploitEye walkthrough thumbnail, a screenshot of the live voice demo, and a source video frame from the cricket repository. The cricket case also includes the original method figure extracted from Naeem's supplied paper. Internal and client cases use clearly labeled workflow diagrams drawn in HTML/CSS; no private code, client names, or customer data are included. Typography pairs Satoshi with Doto accents, falling back to the bundled Space Grotesk font.

The public Sites URL is `https://naeem-ullah-ai-engineer.deep-crumb-6541.chatgpt.site`. Run `python3 build_routes.py` after editing `dist/index.html`, then serve `dist/` with a static HTTP server for local preview.
