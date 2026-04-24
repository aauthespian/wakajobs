# WakaJobs — Daily Job Search Automation
### Deployment Guide for Paul Anuge

---

## What this is
A personal AI-powered job search dashboard that:
- Searches live job boards daily for product design roles matching your profile
- Renders a scored, tiered dashboard table in your browser
- Runs on a free Netlify URL you can bookmark forever

---

## Step 1 — Get a free Anthropic API key

1. Go to https://console.anthropic.com
2. Sign up or log in
3. Click **API Keys** in the left sidebar
4. Click **Create Key** → copy and save it somewhere safe
   - It looks like: `sk-ant-api03-xxxxxxxxxxxx`
5. Add credits: go to **Billing** → add $5 (enough for ~500 daily searches)

---

## Step 2 — Create a free GitHub account & upload the files

1. Go to https://github.com and sign up (free)
2. Click the **+** icon → **New repository**
3. Name it: `wakajobs`
4. Set to **Public**
5. Click **Create repository**
6. Click **uploading an existing file**
7. Upload ALL files from this folder:
   ```
   wakajobs/
   ├── index.html
   ├── netlify.toml
   └── netlify/
       └── functions/
           └── search.js
   ```
8. Click **Commit changes**

---

## Step 3 — Deploy to Netlify (free forever)

1. Go to https://netlify.com and sign up with your GitHub account (free)
2. Click **Add new site** → **Import an existing project**
3. Choose **GitHub** → select your `wakajobs` repository
4. Leave all build settings as default
5. Click **Deploy site**
6. Wait ~1 minute — Netlify gives you a URL like:
   `https://cheerful-sundae-abc123.netlify.app`
7. **Rename it** (optional): Site settings → Change site name → e.g. `paul-wakajobs`
   → Your URL becomes: `https://paul-wakajobs.netlify.app`

---

## Step 4 — Add your API key (the important step)

1. In Netlify, go to **Site settings** → **Environment variables**
2. Click **Add a variable**
3. Set:
   - **Key:** `ANTHROPIC_API_KEY`
   - **Value:** `sk-ant-api03-xxxxxxxxxxxx` (your actual key from Step 1)
4. Click **Save**
5. Go to **Deploys** → click **Trigger deploy** → **Deploy site**
   (This restarts the site so it picks up your key)

---

## Step 5 — Bookmark & set daily reminder

1. Open your Netlify URL in Chrome
2. Bookmark it (Ctrl+D / Cmd+D)
3. Set up daily Google Calendar reminder:
   - Go to https://calendar.google.com
   - Create event: **"Run WakaJobs Search"** at 8:00 AM
   - Recurrence: **Every day**
   - Notification: **Email** → **0 minutes before**
   - Description: Paste your Netlify URL
   - Save

Every morning at 8 AM you'll get an email. Click → open → hit **Run Today's Search**.

---

## Your live URL (fill in after deploy)
```
https://_______________________.netlify.app
```

---

## Troubleshooting

| Error | Fix |
|-------|-----|
| "API key not configured" | Re-check Step 4 — key must be exact, no spaces |
| "Search failed: 401" | API key is wrong or expired — generate a new one |
| "Search failed: 529" | Anthropic is overloaded — try again in 1 minute |
| Blank results / no jobs | Try again — web search occasionally returns sparse results |
| Site not found | Wait 2 minutes after deploy, then refresh |

---

## Cost estimate
- Netlify hosting: **Free forever** (free tier is more than enough)
- GitHub: **Free forever**
- Anthropic API: ~$0.02–0.05 per search · **$5 lasts ~3–6 months** of daily use

---

Built by Claude · WakaJobs v1.0
