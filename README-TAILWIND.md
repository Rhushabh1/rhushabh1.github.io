```markdown
Adding Tailwind to this Jekyll portfolio (what I added and how to use it)

Files added
- package.json — dev dependencies and build scripts
- tailwind.config.js — content paths and basic tokens
- postcss.config.js — PostCSS pipeline (Tailwind + autoprefixer)
- assets/src/tailwind.css — Tailwind input file (contains @tailwind directives + small component tokens)
- .github/workflows/build-tailwind.yml — GitHub Actions workflow that builds tailwind and commits the compiled CSS to assets/css/tailwind.css
- _includes/head.html — updated to load /assets/css/tailwind.css before the project's custom assets/css/main.css

How it works
1. The workflow triggers on push to the main branch (or manually via workflow_dispatch).
2. It installs npm dependencies and runs the build script (npm run build:css).
3. The build outputs assets/css/tailwind.css and the workflow commits + pushes it back to the repository if it changed.
4. GitHub Pages will serve the compiled CSS file as part of the site.

Local development
- Install dependencies:
  npm install

- Build the CSS once:
  npm run build:css

- Or watch for changes while developing:
  npm run watch:css

Notes & recommendations
- The workflow commits built CSS to the repository so GitHub Pages can serve the pre-built CSS without requiring a separate build step on the Pages server.
- If you prefer not to commit built assets, you can instead configure the workflow to build the entire site and deploy to the gh-pages branch or use another deployment strategy.
- Tailwind's purge/JIT will scan the paths listed in tailwind.config.js — if you add new directories (.html, .md, .liquid) update the content array accordingly.
- If you want to add Tailwind plugins (forms, line-clamp, aspect-ratio), add them to package.json and to tailwind.config.js plugins.

If you'd like, I can:
- Add a prettier GitHub Actions job that runs a single-build-and-deploy to a gh-pages branch.
- Add a small set of example components converted from the existing CSS to Tailwind utilities for reference.
```