# MIA Website

Marketing site for MIA (logos, icons, illustrations). Built with Astro 6 and Tailwind CSS 4.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:4321

### Blog CMS (Keystatic)

Edit blog posts at **http://localhost:4321/keystatic** (alias: `/admin`).

- **Local:** no login; changes write directly to `src/content/blog/`.
- **Production (Vercel):** open `/keystatic` — you should see **Log in with GitHub**. Complete the one-time GitHub App setup, then copy the generated env vars into Vercel → Settings → Environment Variables (see `.env.example`) and **redeploy**. Until those vars are set, login may fail after the GitHub redirect.

Create, edit, or delete posts in the **Blog** collection. Set **Entwurf** to off to publish. Each save commits to GitHub and triggers a new Vercel deploy.

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
