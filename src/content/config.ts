import { defineCollection, z } from 'astro:content'

const posts = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      date: z.coerce.date(),
      author: z.object({ name: z.string() }),
      coverImage: image(),
      ogImage: z.object({ url: z.string().optional() }).optional(),
      keywords: z.array(z.string()).optional(),
    }),
})

export const collections = { posts }
