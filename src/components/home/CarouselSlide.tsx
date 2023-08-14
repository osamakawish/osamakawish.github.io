import { ReactNode, useEffect } from "react";
import "./CarouselSlide.css";

type CarouselImageProps = {
  imgFile: string;
  header?: ReactNode;
  children?: ReactNode;
  className?: string;
};

function CarouselSlide({
  imgFile,
  header,
  children,
  className,
}: CarouselImageProps) {
  useEffect(() => {
    const img = new Image();
    img.src = imgFile;
  }, [imgFile]);

  return (
    <div className={`carousel-slide ${className || ""}`}>
      <img
        src={imgFile}
        className="carousel-image"
        alt="carousel image associated with this slide"
      />
      <div className="text-block">
        {header}
        {children}
      </div>
    </div>
  );
}

export default CarouselSlide;
