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
          <BlogPreview id="2023-08-01-1-animperium" />
          <BlogPreview id="2023-08-02-5-square-hackathon" />
          <BlogPreview id="2023-08-02-2-bezier-turning-points" />
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
