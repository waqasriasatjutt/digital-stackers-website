import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().default('Digital Stackers'),
    tags: z.array(z.string()).default([]),
    category: z.string().default('Growth'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
