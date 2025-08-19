# nazliinthecloud

This repository contains the source code for [nazliinthecloud.com](https://nazliinthecloud.com), a personal portfolio, blog, and project showcase built with [Eleventy](https://www.11ty.dev/), Nunjucks, and custom CSS/JS.

## Features
- Personal blog and career reflections
- Cloud, AWS, DevOps, and security projects
- Custom themes (light, dark, N7, Époque)
- Responsive, accessible design
- GitHub Actions for CI/CD

## Directory Structure
- `src/` — All site content and templates
  - `_data/site.json` — Site config (URLs, socials, Formspree)
  - `_includes/` — Partials (header, footer, SEO, cards)
  - `_layouts/` — Page layouts (base, post, project)
  - `blog/posts/` — Blog posts (Markdown)
  - `projects/posts/` — Project writeups (Markdown)
  - `achievements/` — Achievements grid
  - `assets/` — CSS and JS
- `.eleventy.js` — Eleventy config
- `package.json` — Scripts and dependencies
- `.github/workflows/deploy.yml` — GitHub Actions deploy to Pages

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start local dev server:**
   ```bash
   npm start
   ```
3. **Build for production:**
   ```bash
   npm run build
   ```
4. **Edit content:**
   - Blog posts: `src/blog/posts/`
   - Projects: `src/projects/posts/`
   - Achievements: `src/achievements/`
   - Site config: `src/_data/site.json`

## Deployment

- Deploys automatically to GitHub Pages via Actions (`.github/workflows/deploy.yml`).
- Production build output is in `_site/`.

## License

MIT
