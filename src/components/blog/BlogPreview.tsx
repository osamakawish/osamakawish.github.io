import "./BlogPreview.css";

type BlogPreviewProps = {
  previewImgFile: string;
  title: string;
  children: React.ReactNode;
  postFileName?: string;
};

export default function BlogPreview({
  previewImgFile,
  title,
  children,
  postFileName,
}: BlogPreviewProps) {
  return (
    <>
      <a href={`blog/post/${postFileName}`} className="noLinkBlock">
        <div className="blog-preview">
          <img className="blog-preview-img" src={previewImgFile} />
          <div className="blog-preview-content">
            <h4 className="blog-preview-header">{title}</h4>
            {children}
          </div>
        </div>
      </a>
    </>
  );
}
