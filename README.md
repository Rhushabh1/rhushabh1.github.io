# PhD Portfolio — Template for Rhushabh1/rhushabh1.github.io

This repository is a multi-file Jekyll + GitHub Pages portfolio template tailored for a PhD student in Computer Science with a Physics background.

Features
- Homepage with a synopsis / profile highlights.
- Dedicated pages for: Resume, Research Interests, Publications, Talks & Conferences, Projects (self & academic), Timeline, About & Contact.
- Modern, attention-grabbing frontend using:
  - Tailwind-like utility styles via CDN + custom CSS variables for quick styling.
  - GSAP-powered scroll animations (via CDN).
  - lightweight Three.js particle/constellation background (via CDN) for an advanced, unique look.
- Jekyll-friendly pages (Markdown files with front matter) so GitHub Pages can build the site automatically.
- Placeholder assets for images, screenshots, and resume PDF.

Hosting on GitHub Pages (Jekyll)
1. Ensure all files are committed to the `main` branch (or whichever branch you use for Pages).
2. In your repository settings -> Pages:
   - Source: set to "main" branch and root (or `/docs` if you placed files there).
   - Theme: Not required since this uses custom layout; disable automatic theme if you prefer.
3. GitHub Pages will automatically build the site with Jekyll. Within a few minutes your site will be published at `https://<your-username>.github.io/<repo-name>/` (or `https://<username>.github.io/` if the repo is named `<username>.github.io`).
4. Optional: If you want faster CSS tooling (Tailwind with build), set up a GitHub Actions workflow to build assets on push (not required for this template since we rely on CDN + custom CSS).

Customizing content
- Edit the Markdown files in the root (index.md, resume.md, research.md, publications.md, talks.md, projects.md, timeline.md, about.md). Each has front matter for title and permalink.
- Replace placeholder images in `assets/images/` and the placeholder resume in `assets/resume/resume.pdf`.
- For academic CV / publications, update `publications.md` (structured bullets included).
- To add screenshots to projects, drop images into `assets/images/projects/` and reference them in the respective project entry.

Structure
- index.md — Homepage (hero, synopsis, quick links, highlights)
- resume.md, research.md, publications.md, talks.md, projects.md, timeline.md, about.md — Content pages
- _layouts/default.html — Jekyll layout template (shared header/footer)
- _includes/head.html, _includes/navbar.html — small partials
- assets/css/main.css — custom CSS (variables, utility helpers, responsive layout)
- assets/js/main.js — page behavior (smooth scrolling, GSAP triggers)
- assets/js/three-bg.js — Three.js constellation/particle background
- assets/images/* — placeholders for images/screenshots
- assets/resume/resume.pdf — placeholder resume
- _config.yml — Jekyll config

Accessibility & SEO
- Semantic HTML structure and meta tags are included in `_includes/head.html`.
- Pages include a `permalink` in front matter to produce friendly URLs.

If you want, I can:
- Add a GitHub Actions workflow that builds a Tailwind + PostCSS pipeline and pushes the compiled CSS into the repo.
- Add a ready-to-deploy CNAME file for a custom domain.
- Help you fill the content with a polished CV, publication entries pulled from BibTeX, or add ORCID / Google Scholar integration.

Start by editing the Markdown pages and replacing the placeholders in `assets/images/` and `assets/resume/`.
