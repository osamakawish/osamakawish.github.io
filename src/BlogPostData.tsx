import blogPostsJson from "./components/blog/blog-data.json";

export type BlogPostData = {
  previewImgFile: string;
  title: string;
  previewText: string[];
};

export type BlogPostDictionary = {
  [id: string]: BlogPostData;
};

export const blogPosts: BlogPostDictionary = blogPostsJson;
