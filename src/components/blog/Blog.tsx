// Blog.js
import PartitionBlock from "./PartitionBlock";
import "./Blog.css";
import BlogPreview from "./BlogPreview";
import { useEffect } from "react";

export default function Blog() {
  useEffect(() => {
    const scrollContainers = document.querySelectorAll(
      ".x-content-list"
    ) as NodeListOf<HTMLElement>;

    const scrollHandler = (e: WheelEvent) => {
      e.preventDefault();
      (e.currentTarget as HTMLElement).scrollLeft += e.deltaY;
    };

    scrollContainers.forEach((scrollContainer) => {
      scrollContainer.addEventListener("wheel", scrollHandler);
    });

    // Cleanup on component unmount
    return () => {
      scrollContainers.forEach((scrollContainer) => {
        scrollContainer.removeEventListener("wheel", scrollHandler);
      });
    };
  }, []);

  return (
    <div id="blog-page">
      <div className="page-content">
        <h1 className="blogpage-section-header">Featured Posts</h1>
        <div className="x-content-list">
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
            <p>
              The future plan for this application is to allow the use of both
              self-made and community-made plugins and scripts to extend its
              functionality.
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
            <p>
              It offers basic manipulation of the business inventory through
              manual means, allowing users to add, remove, and view items in
              their own inventory. In addition, it also allows users to use the
              voice assistant to manipulate the inventory more conveniently.
            </p>
          </BlogPreview>
          <BlogPreview
            title="Bezier Turning Points"
            previewImgFile="/about-bg.webp"
            fileId="2023-08-02-2-bezier-turning-points"
          >
            <p>
              I calculate the turning points of a cubic Bezier to evaluate its
              bounding box.
            </p>
            <p>
              This information is useful for computing the bounding rectangles
              of Bezier Curves, which is useful for making computations for
              collision detection and speeding up computations for graphics
              rendering.
            </p>
            <p>
              Bounding rectangle computations are also used for determining the
              selection rectangles when the Bezier Curves are selected.
            </p>
          </BlogPreview>
          {/* <BlogPreview title="Blog Preview" previewImgFile="/about-bg.webp">
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper.
            </p>
          </BlogPreview> */}
        </div>
        <h1 className="blogpage-section-header">Favourite Youtube Videos</h1>
        <div className="x-content-list" id="youtube-video-list">
          <div className="video-wrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/aVwxzDHniEw"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-wrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/3izFMB91K_Q"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-wrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/p8u_k2LIZyo"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-wrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/AE4yzLCuc3A"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-wrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ltLUadnCyi0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-wrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/x09IsbVZeXo"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* <PartitionBlock>
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
        </PartitionBlock> */}
        <div className="spacer-xl"></div>
      </div>
    </div>
  );
}
