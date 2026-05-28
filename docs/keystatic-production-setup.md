# Keystatic on Vercel — one-time setup

Production URL: **https://mia-website-zeta.vercel.app**

## Why `/api/keystatic/github/login` returns 500

GitHub mode needs four secrets. On Vercel (production), Keystatic **cannot** create them for you — it only writes `.env` when you run setup **locally**. Without those vars, the login API throws HTTP 500.

## Steps (about 10 minutes)

### 1. Create the GitHub App locally

From `MIA_new/06-build`:

```bash
npm run keystatic:setup
```

Open **http://localhost:4321/keystatic**

- If you see **Log in**, click it — you should land on **Keystatic Setup** (not a 500).
- **Deployed App URL:** `https://mia-website-zeta.vercel.app`
- Click **Create GitHub App** and approve on GitHub.
- You are redirected back; Keystatic appends secrets to **`.env`** in this folder.

### 2. Add secrets to Vercel

Vercel → **mia-website-zeta** → Settings → Environment Variables → add all of:

| Variable | Notes |
|----------|--------|
| `KEYSTATIC_GITHUB_CLIENT_ID` | From `.env` |
| `KEYSTATIC_GITHUB_CLIENT_SECRET` | From `.env` |
| `KEYSTATIC_SECRET` | From `.env` (min 32 chars) |
| `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG` | From `.env` |

Enable for **Production** (and Preview if you want CMS on preview URLs).

### 3. Fix GitHub App callback URL (if login still fails)

GitHub → Settings → Developer settings → **GitHub Apps** → your Keystatic app → **Callback URL** must include:

```
https://mia-website-zeta.vercel.app/api/keystatic/github/oauth/callback
```

Save, then redeploy Vercel.

### 4. Redeploy

Deployments → **Redeploy** (or push any commit to `main`).

### 5. Test

Private window → **https://mia-website-zeta.vercel.app/keystatic** → **Log in with GitHub** → you should see blog posts from the repo.

---

**Do not commit `.env`** — it is gitignored.
