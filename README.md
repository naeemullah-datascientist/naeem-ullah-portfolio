# Naeem Ullah portfolio

A static portfolio preview built around Naeem's supplied master profile. The visual direction keeps the dark olive animated background, glass navigation, and clear typography from the reference study. The content and interactions now describe Naeem's actual work.

## Pages

- Home, Portfolio, About, Publications, and Contact
- Project case studies for XploitEye, AI-Generated Voice Detection, Cricket Ball Tracking & Delivery Analysis, and three generalized internal/client engagements
- The supplied IEEE manuscript can be read inside the portfolio; the XploitEye video and voice demo are embedded on their case-study pages
- Ten curated quick answers, organized for clients and recruiters; no LLM API or key is required
- Rotating, hand-written hero taglines

The header and profile card use an identity-preserving edit of Naeem's supplied portrait. Public project visuals use the XploitEye walkthrough thumbnail, a screenshot of the live voice demo, and a source video frame from the cricket repository. The cricket case also includes the original method figure extracted from Naeem's supplied paper. Internal and client cases use clearly labeled workflow diagrams drawn in HTML/CSS; no private code, client names, or customer data are included. Typography pairs Satoshi with Doto accents, falling back to the bundled Space Grotesk font.

Run `python3 build_routes.py` after editing `dist/index.html`, then serve `dist/` with a static HTTP server for local preview.
