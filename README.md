# WakaJobs — Daily Job Search Automation
### Deployment Guide for Paul Anuge · Powered by Google Gemini (FREE)

---

## What this is
A personal AI-powered job search dashboard that:
- Searches for product design roles matching your profile daily
- Renders a scored, tiered dashboard table in your browser
- Runs completely FREE on Netlify + Google Gemini (no credit card, ever)

---

## Step 1 — Get your FREE Google Gemini API key (2 mins)

1. Go to: https://aistudio.google.com/app/apikey
2. Sign in with your Google account
3. Click **"Create API key"**
4. Copy the key — it looks like: `AIzaSyXXXXXXXXXXXXXXXXXXXXXX`
5. Save it somewhere safe

✅ Completely free · No credit card needed · 1,500 requests/day free

---

## Step 2 — Upload files to GitHub (3 mins)

1. Go to https://github.com and sign up (free)
2. Click **+** → **New repository**
3. Name it: `wakajobs` · set to **Public** · click **Create repository**
4. Click **"uploading an existing file"**
5. Upload ALL files from this zip (keep the folder structure):
   ```
   index.html
   netlify.toml
   netlify/functions/search.js
   ```
6. Click **Commit changes**

---

## Step 3 — Deploy to Netlify (2 mins)

1. Go to https://netlify.com → sign up with GitHub (free)
2. Click **Add new site** → **Import an existing project** → **GitHub**
3. Select your `wakajobs` repository
4. Leave all build settings as default
5. Click **Deploy site**
6. Wait ~1 min — you'll get a URL like:
   `https://cheerful-sundae-abc123.netlify.app`
7. Optional rename: **Site settings** → **Change site name** → e.g. `paul-wakajobs`

---

## Step 4 — Add your Gemini API key to Netlify (1 min)

1. In Netlify → **Site settings** → **Environment variables**
2. Click **Add a variable**
3. Set exactly:
   - **Key:** `GEMINI_API_KEY`
   - **Value:** `AIzaSyXXXXXXXXXXX` (your actual key from Step 1)
4. Click **Save**
5. Go to **Deploys** → **Trigger deploy** → **Deploy site**

---

## Step 5 — Bookmark + set daily reminder

1. Open your Netlify URL in Chrome → **Bookmark it** (Ctrl+D)
2. Set up daily Google Calendar reminder:
   - Go to https://calendar.google.com
   - Create event: **"Run WakaJobs"** at 8:00 AM
   - Recurrence: **Every day**
   - Notification: **Email → 0 minutes before**
   - Description: paste your Netlify URL
   - Save ✅

Every morning you get an email → click → open app → hit **Run Today's Search**.

---

## Cost
| Item | Cost |
|------|------|
| Netlify hosting | Free forever |
| GitHub | Free forever |
| Google Gemini API | Free forever (1,500 req/day) |
| **Total** | **$0** |

---

## Troubleshooting

| Error | Fix |
|-------|-----|
| "API key not configured" | Re-check Step 4 — key name must be `GEMINI_API_KEY` exactly |
| "Search failed: 400" | API key is wrong — re-copy it from aistudio.google.com |
| Blank / empty results | Try again — Gemini occasionally returns sparse results |
| Site not found | Wait 2 mins after deploy, then refresh |

---

Built by Claude · WakaJobs v2.0 · Gemini Edition
