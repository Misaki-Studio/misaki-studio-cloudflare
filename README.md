# misaki-studio-cloudflare

The boilerplate a Misaki Studio project drops into to run as a **static site on
Cloudflare Workers**, on your own Cloudflare account: the exported pages, CMS
content and assets, served from Cloudflare's edge. No server code — Cloudflare
serves `out/` directly, and there is nothing to keep running.

## Run it

```bash
npm install
cp .env.example .env        # SITE_NAME, SITE_URL
```

In Misaki Studio, point an export target at this clone:

| Field | Path |
|---|---|
| React src path | `<clone>/src` |
| Asset path | `<clone>/public` |

Export, then:

```bash
npm run build      # next build → out/   (+ robots/sitemap/llms from the export)
npm run preview    # the built site on http://localhost:8787, via wrangler dev
npm run deploy     # build, then wrangler deploy
```

`npm run deploy` needs a Cloudflare login (`npx wrangler login`), or
`CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID` in the environment for CI —
never on the command line. `npm run check` validates and bundles with no
credentials at all, so CI can prove the shape before anyone signs in.

## What is generated, what is shell

| Where | What | Who writes it |
|---|---|---|
| `src/`, `public/` | the site — pages, components, CMS content, media | **the exporter** |
| `scripts/generate-seo-files.mjs` | robots / sitemap / llms | **the exporter** (`scripts/seo-files.mjs` runs it when it is there, so a fresh clone builds too) |
| `wrangler.jsonc`, `next.config.js` | the deploy shape | this repo |

## The 404 page

Cloudflare serves `404.html` for any path the export does not have
(`not_found_handling: "404-page"` in `wrangler.jsonc`). That holds because this
project has no Worker code: the moment a `main` script is added, unmatched
paths go to it instead and it has to serve the 404 page itself.

## Custom domains

A Workers custom domain is one entry in `wrangler.jsonc`:

```jsonc
"routes": [{ "pattern": "www.example.com", "custom_domain": true }]
```

Set `SITE_URL` to match and rebuild, so the absolute URLs in the sitemap and
`llms.txt` point at it.

## Not here yet

**A project with a `database/` folder.** Its views and actions call the
generated backend, which this target does not host — the site deploys, and
those calls have nowhere to go. Database hosting is the next phase: a hosted
Postgres (yours or Misaki's) and a connection string, and the backend runs in
the same Worker. The adapter for that is already built and tested; it is not
shipped here until the database side exists.

**Env safety.** `next.config.js` inlines only `SITE_NAME`, `SITE_URL`,
`BASE_PATH` and `CDN_URL` into the browser bundle (`PUBLIC_ENV`). Anything else
in `.env` stays out of the site.
