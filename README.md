# MIA Website

Marketing site for MIA (logos, icons, illustrations). Built with Astro 6 and Tailwind CSS 4.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:4321

### Blog CMS (Keystatic)

| Environment | URL | Auth |
|-------------|-----|------|
| Local dev | http://localhost:4321/keystatic | None — edits files in `src/content/blog/` |
| Production | https://mia-website-zeta.vercel.app/keystatic | GitHub (repo write access) |

**First-time production setup** (fixes login HTTP 500): see [docs/keystatic-production-setup.md](docs/keystatic-production-setup.md).

Short version: run `npm run keystatic:setup` locally → create GitHub App with deployed URL `https://mia-website-zeta.vercel.app` → copy `.env` values into Vercel → redeploy.

Set **Entwurf** to off to publish. Saves on production commit to GitHub and trigger a Vercel rebuild.

## Build

```bash
npm run build
npm run preview
```

## Deploy (Vercel)

- **Framework preset:** Astro
- **Build command:** `npm run build`
- **Output:** Vercel serverless (public pages are pre-rendered; `/keystatic` runs on the server)
- **Node.js:** 22.x (see `engines` in `package.json`)

After connecting GitHub, each push to `main` triggers a production deployment.

## Repository

GitHub: `PhoenixKuzia/mia-website`
