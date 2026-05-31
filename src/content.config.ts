import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    titleEn: z.string(),
    description: z.string(),
    descriptionEn: z.string(),
    pubDate: z.coerce.date(),
    category: z.string(),
    image: z.string().optional()
  })
});

const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    titleEn: z.string(),
    description: z.string(),
    descriptionEn: z.string(),
    icon: z.string().optional(),
    order: z.number().default(1)
  })
});

const portfolio = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/portfolio" }),
  schema: z.object({
    title: z.string(),
    titleEn: z.string(),
    category: z.string(),
    summary: z.string(),
    summaryEn: z.string(),
    image: z.string().optional(),
    year: z.number()
  })
});

export const collections = { blog, services, portfolio };
