# Naeem Ullah — AI Engineer portfolio

A static, responsive portfolio for Naeem Ullah, an AI Engineer working across AI agents, RAG, workflow automation, computer vision, voice AI, Python backends, and deployment.

## Pages

- Home, Projects, About, Publications, and Contact
- Project case studies for XploitEye, end-to-end truck dispatch automation, AI-Generated Voice Detection, Cricket Ball Tracking & Delivery Analysis, and three generalized internal/client engagements
- The supplied IEEE manuscript can be read inside the portfolio; the XploitEye video and voice demo are embedded on their case-study pages
- Ten hiring-focused questions addressed directly to Naeem, with first-person answers, concrete ownership examples, and links to supporting work
- An “Ask Naeem” voice experience with ten recruiter-focused questions, written answers, a portrait voice ring, generated English narration, playback controls, and grounded custom-question matching
- Rotating, hand-written hero taglines
- Route-specific titles and descriptions, canonical links, Person structured data, robots.txt, and an XML sitemap

The header and profile card use an identity-preserving edit of Naeem's supplied portrait. Ask Naeem uses reviewed scripts and generated audio stored with the site, so playback needs no browser speech engine or runtime API key. Custom questions are matched to approved answers and fall back safely when the portfolio does not contain the requested information. `profile-data.json` is the verified knowledge source. See `avatar-scripts.json` and `scripts/generate-answer-audio.py` for the narration source and build step. Public project visuals use the XploitEye walkthrough thumbnail, a screenshot of the live voice demo, and a source video frame from the cricket repository. The cricket case also includes the original method figure extracted from Naeem's supplied paper. Internal and client cases use clearly labeled workflow diagrams drawn in HTML/CSS; no private code, client names, or customer data are included. Typography pairs Satoshi with Doto accents, falling back to the bundled Space Grotesk font.

## Local development

Run `npm run build` after editing `dist/index.html`, then run `npm start` and open `http://127.0.0.1:4173/`. The responsive suite uses Playwright: `npm run test:responsive`.

## Production deployment

The intended production path is GitHub → Cloudflare Pages. Use the settings in [CLOUDFLARE_PAGES.md](CLOUDFLARE_PAGES.md). Set `SITE_URL` to the active production hostname so generated canonical links, Open Graph URLs, `robots.txt`, and the sitemap stay aligned.
