# Vesperwood — a wedding invitation

The gilded gates of the palace at evening: a laurel monogram crest,
heavy gold-leaf ornament, an aubusson rug field on crimson-velvet
walls, engraved ivory cards, candlelight and a hall of mirrors. Fully
customisable in the browser with a guided, auto-saving visual editor —
then published live with one click on Cloudflare.

**Live template pieces**

| Piece | Where |
| --- | --- |
| Guest invitation (opening + ten scenes + RSVP) | `index.html` |
| Visual editor ("Invitation Atelier") | `customize.html` |
| Guest submissions page | `replies.html` |
| Static assets + D1 API | `worker.js`, `functions/` |
| Sample content & copy | `js/config.js` |

## Stack

- **Cloudflare Workers** — static assets (`dist/`) + a small JSON API
- **Cloudflare D1** — stores published invitations and guest replies
- **No build framework** — vanilla HTML/CSS/JS; `scripts/build.mjs`
  copies source into `dist/` and cache-busts asset URLs with content
  hashes, and stamps every page with the build version
- GSAP (CDN) for the opening choreography — everything degrades
  gracefully without it

## Quick start (local)

```bash
npm install
npx wrangler d1 migrations apply vesperwood-invitations --local
npm run dev          # http://localhost:8788
```

## Deploy to Cloudflare

See **[DEPLOY.md](DEPLOY.md)** — two paths: dashboard + GitHub
(recommended, no terminal) or the CLI.

## Editing your invitation

1. Open `/customize`
2. Walk the seven steps — everything autosaves
3. Press **Publish invitation** — you get a live guest link
4. Guest replies appear in the editor and at `/replies`

Sample content (names, venue, copy) lives in `js/config.js` and is
marked `SAMPLE`/`EDIT` — or simply change everything in the editor.
