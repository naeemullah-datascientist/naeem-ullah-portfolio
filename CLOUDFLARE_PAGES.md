# Cloudflare Pages deployment

Use these settings for the Git-integrated Pages project:

- Framework preset: `None`
- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`
- Environment variable: `SITE_URL=https://naeem-ullah.pages.dev`

`SITE_URL` controls canonical links, Open Graph URLs, `robots.txt`, and the XML sitemap. Change it only after the Pages hostname or an approved custom domain is active.

The repository contains no API keys, client credentials, private project data, or deployment tokens. Cloudflare Pages automatically rebuilds on pushes to the connected GitHub repository.
