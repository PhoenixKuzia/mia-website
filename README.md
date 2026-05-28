# MIA Website

Marketing site for MIA (logos, icons, illustrations). Built with Astro 6 and Tailwind CSS 4.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Build

```bash
npm run build
npm run preview
```

## Deploy (Vercel)

This project is deployed from the connected Git repository on Vercel.

- **Framework preset:** Astro
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Node.js:** 22.x (see `engines` in `package.json`)

After connecting GitHub, each push to `main` triggers a production deployment. Pull requests get preview deployments.

### CMS admin

`/admin` serves Decap CMS. Editing via the CMS requires Git-backed storage (GitHub + OAuth or Netlify Identity). Static preview deploys work without CMS auth.

## Repository

GitHub: `PhoenixKuzia/mia-website` (create and push if not yet linked).
