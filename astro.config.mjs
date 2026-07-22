import { defineConfig } from "astro/config";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const [owner, repository] = process.env.GITHUB_REPOSITORY?.split("/") ?? [];
const isUserSite = Boolean(repository?.endsWith(".github.io"));
const isProjectPage = process.env.GITHUB_ACTIONS === "true" && Boolean(repository) && !isUserSite;
const defaultSite = owner
  ? isProjectPage
    ? `https://${owner}.github.io/${repository}`
    : `https://${owner}.github.io`
  : "https://username.github.io";

export default defineConfig({
  site: process.env.SITE_URL ?? defaultSite,
  base: process.env.BASE_PATH ?? (isProjectPage ? `/${repository}` : "/"),
  output: "static",
  trailingSlash: "always",
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
