import blogPostsJson from "./components/blog/blog-data.json";

export type BlogPostData = {
  previewImgFile: string;
  title: string;
  category: string;
  tags: string[];
  previewText: string[];
};

export type BlogPostDictionary = {
  [id: string]: BlogPostData;
};

export const blogPosts: BlogPostDictionary = blogPostsJson;
