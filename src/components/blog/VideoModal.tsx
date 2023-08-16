import { useEffect } from "react";
import "./VideoModal.css";

type VideoThumbnailProps = {
  videoId: string;
  openVideo: (videoId: string) => void;
};

export function VideoThumbnail({ videoId, openVideo }: VideoThumbnailProps) {
  return (
    <div className="video-thumbnail" onClick={() => openVideo(videoId)}>
      <img
        className="thumbnail-image"
        src={`https://img.youtube.com/vi/${videoId}/sddefault.jpg`}
        alt="Video Thumbnail"
      />
    </div>
  );
}

type VideoModalProps = {
  isOpen: boolean;
  videoId: string;
  onClose: () => void;
};

export default function VideoModal({
  isOpen,
  videoId,
  onClose,
}: VideoModalProps) {
  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    function handleOutsideClick(event: Event) {
      const target = event.target as HTMLElement;
      if (
        target.closest(".modal-overlay") &&
        !target.closest(".video-container")
      ) {
        onClose();
      }
    }

    const overlayElement = document.querySelector(".modal-overlay");

    if (isOpen) {
      window.addEventListener("keydown", handleKeydown);
      overlayElement?.addEventListener("click", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("keydown", handleKeydown);
      overlayElement?.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
