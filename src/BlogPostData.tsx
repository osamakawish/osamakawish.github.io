import blogPostsJson from "./blog-data.json";

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

export function GetDateFromId(postId: string) {
  return new Date(postId.slice(0, 10));
}
