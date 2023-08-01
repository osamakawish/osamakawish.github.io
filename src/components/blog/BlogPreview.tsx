import "./BlogPreview.css";

type BlogPreviewProps = {};

export default function BlogPreview({}: BlogPreviewProps) {
  return (
    <>
      <div className="blog-preview">
        <img className="blog-preview-img" src="/about-bg.webp" />
        <div className="blog-preview-content">
          <h4>Blog Preview</h4>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper.
          </p>
        </div>
      </div>
    </>
  );
}
