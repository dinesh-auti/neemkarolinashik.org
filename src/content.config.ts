import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Teachers in Maharaj-ji's lineage (Ram Dass, Krishna Das, ...)
const teachers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/teachers' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    years: z.string().optional(),
    order: z.number().default(99),
    summary: z.string(),
    image: z.string().optional(),
    imageCredit: z.string().optional(),
    quote: z.string().optional(),
    links: z
      .array(z.object({ label: z.string(), href: z.string().url() }))
      .default([]),
  }),
});

// Devotee experiences / leelas
const stories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    by: z.string().default('A devotee'),
    place: z.string().optional(),
    date: z.string().optional(),
    excerpt: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { teachers, stories };
