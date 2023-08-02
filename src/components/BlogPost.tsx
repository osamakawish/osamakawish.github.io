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
  useKaTeX?: boolean;
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
  const [error, setError] = useState<Error | null>(null);
  const { id } = useParams();

  console.log("id:", id);
  if (id === undefined) {
    return <div>Invalid blog post ID</div>;
  }

  useEffect(() => {
    // Fetch the content as you were doing before
    fetch(contentFile || `/blog/post/${id}.html`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((text) => setContent(text))
      .catch((error) => setError(error));

    // Add this part to reprocess the content with MathJax
    if (window.MathJax) {
      window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub]);
    }
  }, [id, contentFile, content]); // Notice that I added 'content' to the dependencies

  // If there's an error, render an error message
  if (error) {
    return <div>Error loading post: {error.message}</div>;
  }

  const renderedContent = content ? (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  ) : (
    children
  );

  return (
    <>
      <div className="top-images">
        <img className="preview-img" src={previewImgFile} />
        {showAuthor && <img className="osama-portrait" src="/osama.webp" />}
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
