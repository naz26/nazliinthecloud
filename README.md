# nazliinthecloud

A personal portfolio website for **Nazli Singh**, showcasing DevOps, AWS, Cloud Security & AI projects, blog posts, and contact information. This is a fully static, lightweight site built with plain HTML, CSS, and a bit of JavaScript for theme toggling.

[🔗 Live Demo](https://nazliinthecloud.com)

---

## Table of Contents

- [Features](#features)  
- [Site Structure](#site-structure)  
- [Getting Started](#getting-started)  
- [Running Locally](#running-locally)  
- [Deployment](#deployment)  
- [Customization](#customization)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Features

- ✨ **Clean, responsive design** with a cozy twilight-inspired palette  
- 🌙 **Light / Dark mode toggle** (persists in `localStorage`)  
- 🖼️ Hero section with a custom header background and emoji accents  
- 📄 Multi-page layout: Home, About, Projects, Blog, Contact  
- 🔧 Inline CSS using CSS variables for easy theming  
- 🔗 Google Fonts: [Inter](https://fonts.google.com/specimen/Inter) & [Quicksand](https://fonts.google.com/specimen/Quicksand)  
- 🔍 Simple, no-build setup—just static files  

---

## Site Structure
nazliinthecloud/
├── index.html ← Homepage (hero, featured work, blog preview, contact)
├── about.html ← About Me page (bio, skills, certifications)
├── projects.html ← Projects page (detailed portfolio entries)
├── blog.html ← Blog archive (links out to Medium posts)
├── img/
│ ├── header-bg.jpg ← Hero background image
│ ├── ... ← Other site images (profile, screenshots)
└── README.md ← This file

# Getting Started

1. **Clone the repo**  
   ```bash
   git clone https://github.com/naz26/nazliinthecloud.git
   cd nazliinthecloud
   ```

## Add Your Images

Place any custom images in the `img/` folder (e.g. `profile.jpg`, project screenshots).

---

## Edit Content

* Update text in the HTML files (`index.html`, `about.html`, etc.).
* Tweak colors or typography via the CSS variables at the top of each page’s `<style>` block.

---

## Running Locally

There’s no build step—you can serve the static files with any web server. For example, using Python:

```bash
# From project root:
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

---

## Deployment

This site can be hosted anywhere static files are supported. To deploy on GitHub Pages:

1. Push to your repository’s `main` (or `gh-pages`) branch.
2. In GitHub repo **Settings → Pages**, set the source to `/ (root)` or `/docs` if you move your files.
3. Add your custom domain (`nazliinthecloud.com`) under **Custom domain** and configure Route 53 as detailed in `index.html`.

---

## Customization

* **Theme colors**: Edit the `:root { … }` CSS variables at the top of each `<style>` block.
* **Fonts**: Change or add Google Fonts in the `<head>`.
* **Content sections**:

  * Add new `<section id="…">` blocks.
  * Duplicate and modify the `.project-card` or `.blog-post` markup.
* **Dark mode**: The toggle button calls `toggleTheme()`; customize the `[data-theme="dark"]` overrides as needed.

---

## Contributing

Contributions, feedback, and feature requests are welcome!

1. Fork this repo
2. Create a branch:

   ```bash
   git checkout -b feature/my-update
   ```


3. Commit your changes:
    ```bash
      git commit -m "Add my feature"
      ```

4. Push and open a Pull Request

---

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and adapt it for your own portfolio!
