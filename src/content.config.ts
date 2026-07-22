import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const link = z.string().url().optional();
const resourceLink = z.string().refine(
  (value) => value.startsWith("/") || URL.canParse(value),
  "Must be an absolute URL or a root-relative asset path",
).optional();

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    role: z.string(),
    technologies: z.array(z.string()),
    category: z.enum(["engineering", "research", "hybrid"]),
    featured: z.boolean().default(false),
    repository: link,
    demo: link,
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/publications" }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number().int(),
    type: z.enum(["journal", "conference", "preprint", "thesis"]),
    doi: link,
    arxiv: link,
    project: link,
    url: link,
    featured: z.boolean().default(false),
  }),
});

const talks = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/talks" }),
  schema: z.object({
    title: z.string(),
    venue: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    summary: z.string(),
    event: link,
    slides: resourceLink,
    recording: resourceLink,
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects, publications, talks };
