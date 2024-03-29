import { Link } from "react-router-dom";
import "./BlogPreview.css";
import { blogPosts } from "../../../BlogPostData";
import { categoryColors } from "../../../CategoryData";

export default function BlogPreview({ id }: { id: string }) {
  const post = blogPosts[id];

  return (
    <>
      <Link to={`/blog/post/${id}`} className="noLinkBlock">
        <div className="blog-preview">
          <img
            className="blog-preview-img"
            src={post.previewImgFile}
            alt={`cover image for the blog: ${post.title}`}
          />
          <div
            className="category-tag"
            style={{
              borderColor: categoryColors[post.category],
              color: categoryColors[post.category],
            }}
          >
            {post.category}
          </div>
          <div className="blog-preview-content">
            <h4 className="blog-preview-header">{post.title}</h4>
            {post.previewText.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Link>
    </>
  );
}
