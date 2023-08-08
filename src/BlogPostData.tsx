import blogPostsJson from "./blog-data.json";

export type Links = {
  [name: string]: string;
};

export type BlogPostData = {
  previewImgFile: string;
  title: string;
  category: string;
  tags: string[];
  previewText: string[];
  links: Links;
};

export type BlogPostDictionary = {
  [id: string]: BlogPostData;
};

export const blogPosts: BlogPostDictionary = blogPostsJson;

export function GetDateFromId(postId: string) {
  const [year, month, day] = postId.slice(0, 10).split("-");
  return new Date(+year, +month - 1, +day);
}
