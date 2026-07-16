export type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  url: string;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "Implementing type-checking for your environment variables",
    excerpt:
      "How to secure your environment variables with type safety using T3 Env, with a Next.js and Convex example.",
    date: "Apr 14, 2024",
    readTime: "3 min read",
    url: "https://ignitedev.hashnode.dev/implementing-type-checking-for-your-environment-variables",
  },
  {
    title: "Cloud Functions",
    excerpt:
      "What cloud functions are and how they work, building up from a basic JavaScript function analogy.",
    date: "Mar 5, 2024",
    readTime: "4 min read",
    url: "https://ignitedev.hashnode.dev/cloud-functions",
  },
  {
    title: "JavaScript Virtual Machine: A look into Inline Caching",
    excerpt:
      "How JavaScript VMs like V8, SpiderMonkey, and JavaScriptCore convert code to machine code, focusing on inline caching.",
    date: "Feb 17, 2024",
    readTime: "4 min read",
    url: "https://ignitedev.hashnode.dev",
  },
];
