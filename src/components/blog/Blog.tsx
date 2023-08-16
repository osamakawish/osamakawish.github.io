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

const previewBlogs = [
  "2023-08-08-1-euclid-complex-multiplication",
  "2023-08-01-1-animperium",
  "2023-08-02-5-square-hackathon",
  "2023-08-02-2-bezier-turning-points",
];

export default function Blog() {
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
          {previewBlogs.map((id) => (
            <BlogPreview id={id} />
          ))}
        </div>
        <h1 className="blogpage-section-header">Favourite Youtube Videos</h1>
        <div className="x-content-list" id="youtube-video-list">
          {videoIds.map((videoId) => (
            <VideoThumbnail openVideo={openVideo} videoId={videoId} />
          ))}
        </div>
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
