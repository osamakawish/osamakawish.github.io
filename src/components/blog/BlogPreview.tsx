import { Link } from "react-router-dom";
import "./BlogPreview.css";

type BlogPreviewProps = {
  previewImgFile: string;
  title: string;
  children: React.ReactNode;
  fileId?: string;
};

export default function BlogPreview({
  previewImgFile,
  title,
  children,
  fileId,
}: BlogPreviewProps) {
  return (
    <>
      <Link to={`/blog/post/${fileId}`} className="noLinkBlock">
        <div className="blog-preview">
          <img
            className="blog-preview-img"
            src={previewImgFile}
            alt={`cover image for the blog: ${title}`}
          />
          <div className="blog-preview-content">
            <h4 className="blog-preview-header">{title}</h4>
            {children}
          </div>
        </div>
      </Link>
    </>
  );
}
