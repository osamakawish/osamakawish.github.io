// Blog.js
import "./Blog.css";
import BlogPreview from "./BlogPreview";
import { useEffect, useState } from "react";
import VideoModal, { VideoThumbnail } from "./VideoModal";
import { PREVIEW_BLOGS, VIDEO_IDS } from "../../constants";

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
        <div className="x-content-list">{PreviewBlogs()}</div>
        <h1 className="blogpage-section-header">Favourite Youtube Videos</h1>
        <div className="x-content-list" id="youtube-video-list">
          {YouTubeVideos()}
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

  function PreviewBlogs() {
    return PREVIEW_BLOGS.map((id) => <BlogPreview id={id} />);
  }

  function YouTubeVideos() {
    return VIDEO_IDS.map((videoId) => (
      <VideoThumbnail openVideo={openVideo} videoId={videoId} />
    ));
  }
}
