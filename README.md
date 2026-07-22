# Personal geometry portfolio

A dark editorial portfolio for a software engineer and computational topology/geometry researcher. Built with Astro and deployed as a static GitHub Pages project site.

## Local development

Requires Node.js 22.12 or newer. If you use `nvm`, the repository's `.nvmrc`
selects a compatible release:

```sh
nvm install
nvm use
npm install
npm run dev
```

Run `npm run build` before publishing. The build includes strict TypeScript and Astro content checks.

If development fails with `EMFILE: too many open files`, raise the descriptor
limit for the current shell and retry:

```sh
ulimit -n 65536
npm run dev
```

If your environment does not permit that change, use the polling fallback with
`npm run dev:poll`. Polling uses more CPU, so it is not the default.

## Personalise before publishing

1. Update identity, research themes, timeline, profile URLs, and encoded email character codes in `src/data/site.ts`.
2. Replace the sample Markdown entries under `src/content/` with verified projects, publications, and talks. Keep the frontmatter fields shown in the samples.
3. Replace the About portrait placeholder in `src/pages/index.astro` with an optimised portrait image and meaningful alternative text.
4. Add a real PDF at `public/cv.pdf`, set `cv.published` to `true` in `src/data/site.ts`, and update `public/og.svg` with your name.
5. Set the repository name in GitHub. Astro and the deployment workflow derive the correct GitHub Pages base path automatically.

Never publish with the visible “representative content” notices in place.

## Content conventions

- Use short, URL-safe lowercase filenames such as `medial-axis-method.md`.
- Project summaries should fit in two sentences; put the full case study in the Markdown body.
- Use absolute `https://` URLs for DOI, arXiv, repository, slides, demos, and recordings.
- Publication author order and spelling should match the canonical citation.
- Images should be AVIF or WebP when possible, include intrinsic dimensions, and stay below 300 KB for editorial images.

## Deployment

Enable **Settings → Pages → Source: GitHub Actions** in the GitHub repository, then push `main`. The workflow validates and deploys `dist/`. The production URL is `https://username.github.io/repository/`.

For a future custom domain, set `SITE_URL` and `BASE_PATH=/`, add a `public/CNAME`, and configure the DNS records described by GitHub Pages.
