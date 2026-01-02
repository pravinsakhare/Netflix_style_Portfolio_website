export interface BlogPost {
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  readingTime: number; // in minutes
  publishedAt: Date;
  updatedAt?: Date;
  featured: boolean;
  views: number;
}

export interface BlogCategory {
  name: string;
  slug: string;
  count: number;
}

export const BLOG_CATEGORIES = [
  "DevOps",
  "Cloud Computing",
  "Kubernetes",
  "Docker",
  "AWS",
  "CI/CD",
  "Infrastructure",
  "Tutorials",
] as const;

export type BlogCategoryType = (typeof BLOG_CATEGORIES)[number];
