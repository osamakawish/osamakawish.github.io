import { ReactNode, useEffect, useState } from "react";
import "./BlogPost.css";
import { useParams } from "react-router-dom";

export type BlogPostProps = {
  previewImgFile: string;
  title: string;
  showAuthorImg?: boolean;
  date?: Date;
  children?: ReactNode;
  contentFile?: string;
};

export default function BlogPost({
  previewImgFile,
  title,
  showAuthorImg: showAuthor = false,
  date,
  children,
  contentFile,
}: BlogPostProps) {
  const [content, setContent] = useState<string>("");
  const { postId } = useParams();

  useEffect(() => {
    fetch(contentFile || `./blog/${postId}.html`)
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, [postId]);

  const renderedContent = content ? (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  ) : (
    children
  );

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
          <div className="blog-children">{renderedContent}</div>
        </div>
        <div className="spacer-xl" />
      </div>
    </>
  );
}
