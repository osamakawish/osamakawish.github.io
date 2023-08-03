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
            fileId="2023-08-01-1-animperium"
          >
            <p>
              An animation application with intermedia complexity - not as
              simple as Windows Movie Maker, but not as complex as Blender, with
              the goal of being far more affordable.
            </p>
          </BlogPreview>
          <BlogPreview
            title="Square Hackathon"
            previewImgFile="/about-bg.webp"
            fileId="2023-08-02-5-square-hackathon"
          >
            <p>
              The Square Hackathon in which I used WPF, Naudio, and Azure Speech
              Services to implement an inventory system combined with the use of
              a voice assistant.
            </p>
          </BlogPreview>
          <BlogPreview
            title="Bezier Turning Points"
            previewImgFile="/about-bg.webp"
            fileId="2023-08-02-2-bezier-turning-points"
          >
            <p>
              I calculate the turning points of a cubic Bezier to evaluate its
              bounding box. This information is useful for computing the
              bounding rectangles of Bezier Curves.
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
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/aVwxzDHniEw"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3izFMB91K_Q"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/p8u_k2LIZyo"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/AE4yzLCuc3A"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ltLUadnCyi0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/x09IsbVZeXo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="spacer-xl"></div>
      </div>
    </div>
  );
}
