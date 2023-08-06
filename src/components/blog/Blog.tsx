// Blog.js
import "./Blog.css";
import BlogPreview from "./BlogPreview";
import { useEffect, useState } from "react";
import VideoModal, { VideoThumbnail } from "./VideoModal";

const videoIds = [
  "aVwxzDHniEw",
  "3izFMB91K_Q",
  "p8u_k2LIZyo",
  "AE4yzLCuc3A",
  "ltLUadnCyi0",
  "x09IsbVZeXo",
];

export default function Blog() {
  console.log("Blog rendering");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

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

  function openVideo(videoId: string) {
    setCurrentVideo(videoId);
    setIsModalOpen(true);
  }

  function closeVideo() {
    setIsModalOpen(false);
    setCurrentVideo("");
  }

  return (
    <div id="blog-page">
      <div className="page-content">
        <h1 className="blogpage-section-header">Featured Posts</h1>
        <div className="x-content-list">
          <BlogPreview
            title="Animation Application"
            previewImgFile="/blog/images/2023-08-01-1-animperium.webp"
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
            previewImgFile="/blog/images/2023-08-02-5-square-hackathon.webp"
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
            previewImgFile="/blog/images/2023-08-02-2-bezier-turning-points.webp"
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
        </div>
        <h1 className="blogpage-section-header">Favourite Youtube Videos</h1>
        <div className="x-content-list" id="youtube-video-list">
          {videoIds.map((videoId) => (
            <VideoThumbnail openVideo={openVideo} videoId={videoId} />
          ))}
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
      <VideoModal
        isOpen={isModalOpen}
        videoId={currentVideo}
        onClose={closeVideo}
      />
    </div>
  );
}
