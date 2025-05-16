import { defineCollection, z } from 'astro:content';

const journalCollection = defineCollection({
  type: 'content', // for Markdown files
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string().optional(),
    // tags: z.array(z.string()).optional()
  }),
});

export const collections = {
  'journal': journalCollection,
};