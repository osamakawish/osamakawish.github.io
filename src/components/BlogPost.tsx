import "./BlogPost.css";

export default function BlogPost() {
  return (
    <>
      <div className="top-images">
        <img className="preview-img" src="./about-bg.webp" />
        <img className="osama-portrait" src="./osama.webp" />
      </div>
      <div className="post-content">
        <h1>This is a blog post.</h1>
      </div>
    </>
  );
}
