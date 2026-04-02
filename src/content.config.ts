import { file, glob } from "astro/loaders";
import { z } from "astro:content";
import { defineCollection } from "astro:content";

const posts = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/posts",
  }),
  schema: z.object({
    title: z.string().max(128),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    category: z.string(),
    tags: z.array(z.string()).optional().default([]),
    summary: z.string().optional().default(""),
    cover: z.string().optional(),   // 改成普通 string，避免 image() 参数问题
    draft: z.boolean().default(false),
    new: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/projects",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    links: z.object({
      homepage: z.string().url().optional(),
      github: z.string().url().optional(),
      demo: z.string().url().optional(),
    }).optional(),
    status: z
      .enum(["planning", "in-progress", "completed", "archived"])
      .default("completed"),
    image: z.string().optional(),
  }),
});

const friends = defineCollection({
  loader: file("./src/content/miscs/friends.json"),
  schema: z.object({
    name: z.string().max(64),
    description: z.string().optional().describe("One line string"),
    link: z.string().url(),
    avatar: z.string(),
  }),
});

const pages = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/pages",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  posts,
  projects,
  friends,
  pages,
};
