```markdown
Hosting on GitHub Pages with Jekyll (step-by-step)

1. Ensure your repository is named:
   - username.github.io for a user/organization site (will publish to https://username.github.io/)
   - any other name for a project site (will publish to https://username.github.io/repo-name/)

2. Push the provided files to the `main` branch.

3. In GitHub:
   - Go to Settings → Pages.
   - Under "Source" choose "main" and "/" (root).
   - If the build fails, check the repository's "Pages" build log for Jekyll errors.

4. Custom domain (optional):
   - Add `CNAME` file in root with your domain (example.com) and configure DNS to point to GitHub Pages.

5. If you want to use Tailwind with an optimized build:
   - Create a GitHub Actions workflow to run npm install → build CSS → commit `assets/css/main.css` (compiled) on push.
   - Alternatively, use the CDN approach (as in this template) to avoid a build pipeline.

6. Replacing placeholders:
   - Put images in `assets/images/` and reference them from Markdown pages.
   - Replace `assets/resume/resume.pdf` with your PDF resume.

7. Troubleshooting:
   - Jekyll ignores files and folders starting with `_` only for special behavior — pages with front matter are transformed.
   - Make sure all Markdown files have front matter (the `---` header) — otherwise Jekyll might treat them as static files.

```