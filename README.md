# nazliinthecloud — Portfolio, Blog & Projects (Eleventy)

A classy, understated personal site for blogs, technical projects, and achievements — built with **Eleventy (11ty)**, **Nunjucks**, and hand-crafted **CSS/JS**.  
Theme toggle included: **Light • Dark • N7 (Mass Effect) • Époque (Belle Époque)**.

**Live site:** https://nazliinthecloud.com

---

## ✨ Features

- **Eleventy v2** static site (fast, simple, GitHub Pages–friendly)
- **Markdown** content for blog & projects
- **Categories / Tags** + client-side **search & filter**
- **Series** support (e.g., *Certification Diaries*)
- **Project cards** with tags + **GitHub repo** button
- **Contact form** via **Formspree**
- **SEO basics** (meta + Open Graph; `canonical` supported)
- **Custom domain** (`CNAME`) + **GitHub Actions** deploy

---

## 🧱 Tech Stack

- [Eleventy v2](https://www.11ty.dev/) + **Nunjucks**
- **Node 20 / npm 10**
- Vanilla **CSS & JS**
- **Luxon** for date formatting

---

## 📁 Structure
.
├─ .github/workflows/deploy.yml # GitHub Actions deploy
├─ .eleventy.js # Eleventy config (filters/collections)
├─ package.json
├─ scripts/
│ └─ new-post.mjs # (Optional) Post generator
└─ src/
├─ CNAME # Custom domain (nazliinthecloud.com)
├─ .nojekyll # Disable Jekyll on Pages
├─ _data/site.json # Site config (URLs, socials, Formspree)
├─ _includes/ # Partials
│ ├─ header.njk, footer.njk, seo.njk, card.njk, ornament.njk
├─ _layouts/
│ ├─ base.njk, post.njk, project.njk
├─ assets/
│ ├─ css/styles.css # Styles (Light/Dark/N7/Époque)
│ └─ js/theme.js, filter.js # Theme toggle + search/filter
├─ index.njk # Home
├─ blog/
│ ├─ index.njk # Blog listing (filter/search)
│ └─ posts/ # Blog posts (.md)
├─ projects/
│ ├─ index.njk # Projects listing (filter)
│ └─ posts/ # Project posts (.md)
├─ achievements/index.njk # Achievements grid
└─ contact.njk # Contact (Formspree)


---

## 🧰 Prerequisites

- **Node.js 20** and **npm 10**
```bash
node -v
npm -v
```
 If needed:
 nvm install 20 && nvm use 20

# 🚀 Quick Start (local)

install dependencies
```
npm install
```

## start dev server (http://localhost:8080)
```
npm start
```

## production build to _site
```
npm run build
```
## If you see sh: eleventy: not found:
```
rm -rf node_modules package-lock.json
npm install
```

# ⚙️ Configure the Site
Edit src/_data/site.json:
```
{
  "name": "Your Name — AWS DevOps Engineer",
  "shortName": "Your Name",
  "description": "Blogs, technical projects, achievements.",
  "url": "https://nazliinthecloud.com",
  "base": "",
  "author": "Your Name",
  "twitter": "",
  "github": "https://github.com/<your-username>",
  "linkedin": "https://www.linkedin.com/in/<your-handle>/",
  "formspreeEndpoint": "https://formspree.io/f/<your-form-id>"
}
```

* Custom domain: src/CNAME contains nazliinthecloud.com and is copied automatically.

* Templates use {{ (site.base or '') }} so links work at root or subpath.

# ✍️ Writing Blog Posts
## A) Site-hosted post (content lives on your site)

Create src/blog/posts/2025-08-17-my-title.md:
```
---
layout: post.njk
title: "My Post Title"
description: "One-line summary for cards & SEO."
date: 2025-08-17
category: "tech"          # tech | wellbeing | career
tags: ["aws", "devops"]
series: "Certification Diaries"           # optional
canonical: ""                             # leave blank if your site is canonical
---

Write in **Markdown**. Add images:
![Alt text](/assets/images/diagram.png)
```

## B) Medium link-post (listed on your site, opens Medium)

Create src/blog/posts/2025-08-18-wellbeing-microbreaks.md:
```
---
layout: post.njk
title: "Wellbeing: Microbreaks"
description: "A cadence that helps on-call recovery."
date: 2025-08-18
category: "wellbeing"
tags: ["wellbeing","career"]
externalUrl: "https://medium.com/@your-handle/slug"
canonical: "https://medium.com/@your-handle/slug"  # Medium is canonical
# permalink: false   # optional: list-only; don't create a local page
---
```
(Teaser text is fine. Clicking the card/title goes to Medium.)

### Notes

category drives the filter dropdown: tech, wellbeing, career.

Use identical series: "Certification Diaries" across posts to group them.

Canonical strategy:

Your site canonical → publish on your site first, then Import a story on Medium (Medium will canonicalize to your site).

Medium canonical → set canonical: to your Medium URL (optionally add permalink: false).

# Optional: Post generator
```
npm run new:post "Certification Diaries #2 — VPC & Subnets" -- --category tech --tags aws,networking --series "Certification Diaries"
```
Creates a Markdown file in src/blog/posts/ with front matter.

# 🧪 Projects

Create src/projects/posts/serverless-cost-optimizer.md:
```
---
layout: project.njk
title: "Serverless Cost Optimizer"
description: "Weekly report on cold starts, memory, idle rules."
date: 2025-06-30
repo: "https://github.com/<user>/serverless-cost-optimizer"
tags: ["aws","lambda","cost","observability"]
---
```
Explain the problem, approach, and results. Add screenshots if helpful.
Projects appear on /projects/ with search + tag filtering.

# 🏆 Achievements

Edit src/achievements/index.njk — it’s a simple grid. Add cards as needed.

# 🎨 Themes

Toggle cycles: Light → Dark → N7 → Époque → …

Customize colors in src/assets/css/styles.css under :root, :root.dark, :root.n7, :root.epoque.

Fonts loaded in src/_layouts/base.njk:

Orbitron for N7

Playfair Display / Cormorant for Époque

N7 red stripe removed via a CSS override at the end of styles.css (optional cyan line snippet included there).

# 📦 Deploy (GitHub Pages via Actions)

Workflow file: .github/workflows/deploy.yml (already included).

GitHub → Settings → Pages → Build and deployment = GitHub Actions.

Custom domain: set nazliinthecloud.com and enable Enforce HTTPS.

Push to main → Action builds _site and publishes.

.eleventy.js copies src/CNAME and .nojekyll into the output automatically.

# 🔎 Troubleshooting

sh: eleventy: not found

sh: eleventy: not found

rm -rf node_modules package-lock.json
npm install


Eleventy config error: eleventyConfig is not defined
Ensure .eleventy.js uses:

module.exports = function (eleventyConfig) { /* ... */ };


Nunjucks syntax errors (e.g., expected variable end)
Avoid JS/Liquid ternaries (cond ? a : b). Use inline Nunjucks:

{{ valueA if condition else valueB }}


filter not found: date
date filter is registered in .eleventy.js and uses Luxon. If missing:

npm install -D luxon


GitHub Pages runs Jekyll (e.g., Unknown tag 'set')

Settings → Pages → Source = GitHub Actions (not “Deploy from a branch”).

If you must deploy from a branch, publish compiled _site only and include a root .nojekyll.

Assets 404
Templates use {{ (site.base or '') }}; with your root custom domain, base should be "".
If hosting under a subpath later, set "base": "/your-repo" in site.json.

# 🧑‍💻 VSCode Tips

Install Markdown All in One (preview/TOC).

Add Tasks in .vscode/tasks.json to run dev/build from the palette.

Create a front-matter snippet in .vscode/snippets/markdown.json.

Ensure your terminal is opened at the repo root (where package.json lives).

# ✅ Accessibility & SEO

Use descriptive alt text for images.

Keep strong color contrast (themes are tuned).

Use canonical wisely to avoid duplicate content with Medium.

Keep description under ~160 chars for better search snippets.

# 🪪 License

MIT — adapt freely for your site.

# 🙋 Support

If a build or template error appears, copy the exact message (line & column) and open an issue or ask for help.
