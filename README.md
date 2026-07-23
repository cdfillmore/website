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

