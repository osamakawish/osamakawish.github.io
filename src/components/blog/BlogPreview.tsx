import "./BlogPreview.css";

type BlogPreviewProps = {};

export default function BlogPreview({}: BlogPreviewProps) {
  return (
    <>
      <div className="blog-preview">
        <img className="blog-preview-img" src="./about-bg.webp" />
        <div className="blog-preview-content">
          <h4>Blog Preview</h4>
        </div>
      </div>
    </>
  );
}
