// Blog.js
import PartitionBlock from "./PartitionBlock";
import "./Blog.css";
import BlogPreview from "./BlogPreview";

export default function Blog() {
  return (
    <div className="page-content">
      <h1>This is the Blog page.</h1>
      For now, just make a bunch of miniposts here. Later, we'll make a separate
      page for each post.
      <BlogPreview />
      <PartitionBlock />
    </div>
  );
}
