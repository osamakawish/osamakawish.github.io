// Blog.js
import PartitionBlock from "./PartitionBlock";
import "./Blog.css";
import BlogPreview from "./BlogPreview";
import { useEffect } from "react";

export default function Blog() {
  useEffect(() => {
    const scrollContainer = document.querySelector(
      ".latest-blogs-previewed"
    ) as HTMLElement;

    if (scrollContainer) {
      const scrollHandler = (e: WheelEvent) => {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY;
      };

      scrollContainer.addEventListener("wheel", scrollHandler);

      // Cleanup on component unmount
      return () => scrollContainer.removeEventListener("wheel", scrollHandler);
    }
  }, []);

  return (
    <div id="blog-page">
      <div className="page-content">
        <h1>Featured</h1>
        <div className="latest-blogs-previewed">
          <BlogPreview
            title="Animation Application"
            previewImgFile="/about-bg.webp"
            postFileName="2023-08-01-1-animperium"
          >
            <p>
              An animation application with intermedia complexity - not as
              simple as Windows Movie Maker, but not as complex as Blender, with
              the goal of being far more affordable.
            </p>
          </BlogPreview>
          <BlogPreview title="Blog Preview" previewImgFile="/about-bg.webp">
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper.
            </p>
          </BlogPreview>
          <BlogPreview title="Blog Preview" previewImgFile="/about-bg.webp">
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper.
            </p>
          </BlogPreview>
          <BlogPreview title="Blog Preview" previewImgFile="/about-bg.webp">
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper.
            </p>
          </BlogPreview>
        </div>
        <PartitionBlock>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, aaaaaaaaaa
          </p>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.
          </p>
        </PartitionBlock>
        For now, just make a bunch of miniposts here. Later, we'll make a
        separate page for each post.
      </div>
    </div>
  );
}
