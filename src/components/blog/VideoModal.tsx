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
      <div className="play-icon">
        <img src="/icons/youtube-play.png" />
      </div>
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
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
