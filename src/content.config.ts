import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    date: z.date(),
    draft: z.boolean().default(true),
  }),
});

export const collections = {
  blog: blogCollection,
};
