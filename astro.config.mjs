import { defineConfig } from "astro/config";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isProjectPage = process.env.GITHUB_ACTIONS === "true" && repository;

export default defineConfig({
  site: process.env.SITE_URL ?? "https://username.github.io",
  base: process.env.BASE_PATH ?? (isProjectPage ? `/${repository}` : "/"),
  output: "static",
  trailingSlash: "always",
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
