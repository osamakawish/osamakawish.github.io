import { ReactNode } from "react";
import "./BlogPost.css";

export type BlogPostProps = {
  previewImgFile: string;
  title: string;
  showAuthorImg?: boolean;
  date?: Date;
  children?: ReactNode;
};

export default function BlogPost({
  previewImgFile,
  title,
  showAuthorImg: showAuthor = false,
  date,
  children,
}: BlogPostProps) {
  return (
    <>
      <div className="top-images">
        <img className="preview-img" src={previewImgFile} />
        {showAuthor && <img className="osama-portrait" src="./osama.webp" />}
      </div>
      <div
        className="post-content-flex"
        style={{ top: showAuthor ? "240px" : "180px" }}
      >
        <div className="post-content">
          <h1>{title}</h1>
          {date && <p className="blog-date">{date.toDateString()}</p>}
          <div className="blog-children">{children}</div>
        </div>
        <div className="spacer-xl" />
      </div>
    </>
  );
}
