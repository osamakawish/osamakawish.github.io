import { ReactNode, useEffect, useState } from "react";
import "./BlogPost.css";
import { useParams } from "react-router-dom";

export type BlogPostProps = {
  previewImgFile: string;
  title: string;
  showAuthorImg?: boolean;
  date?: Date;
  children?: ReactNode;
  // contentFile?: string;
  useKaTeX?: boolean;
};

export default function BlogPost({
  previewImgFile,
  title,
  showAuthorImg: showAuthor = false,
  date,
  children,
}: // contentFile,
BlogPostProps) {
  const [content, setContent] = useState<string>("");
  const [error, setError] = useState<Error | null>(null);
  const { id } = useParams();

  console.log("1: Component mounted.");

  if (id === undefined) {
    return <div>Invalid blog post ID</div>;
  }

  useEffect(() => {
    console.log("2: Initiating fetch request.");
    fetch(`/blog/blog-posts/${id}.html`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((html) => {
        console.log("3: Setting content.");
        setContent(html);
      })
      .catch((error) => setError(error));
  }, [id]);

  useEffect(() => {
    if (!content) return;

    console.log("4: Invoking Prism and MathJax.");

    // Query the document for the specific code blocks you want to highlight
    const codeBlocks = document.querySelectorAll("pre code");
    if (window.Prism) {
      console.log("4.1: Highlighting with Prism.");
      codeBlocks.forEach((element) => window.Prism.highlightElement(element));
    }

    // This will run after the content is set, giving React a chance to render it
    if (window.MathJax) {
      console.log("4.2: Typesetting with MathJax.");
      window.MathJax.typeset();
    }
  }, [content]); // Dependency on content ensures this runs after content changes

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
        <img
          className="preview-img"
          src={previewImgFile}
          alt="a cover image for this blog post"
        />
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
