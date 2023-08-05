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
  fileId: postFileName,
}: BlogPreviewProps) {
  return (
    <>
      <Link to={`/blog/post/${postFileName}`} className="noLinkBlock">
        <div className="blog-preview">
          <img className="blog-preview-img" src={previewImgFile} />
          <div className="blog-preview-content">
            <h4 className="blog-preview-header">{title}</h4>
            {children}
          </div>
        </div>
      </Link>
    </>
  );
}
