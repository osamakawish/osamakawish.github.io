import { ReactNode, useEffect } from "react";
import "./CarouselSlide.css";

type CarouselImageProps = {
  imgFile: string;
  header?: string;
  children?: ReactNode;
};

function CarouselSlide({ imgFile, header, children }: CarouselImageProps) {
  useEffect(() => {
    const img = new Image();
    img.src = imgFile;
  }, [imgFile]);

  return (
    <>
      <img src={imgFile} className="carousel-image" />
      <div className="rect" />
      <div className="text-block">
        <h2 className="slide-header">{header}</h2>
        {children}
      </div>
    </>
  );
}

export default CarouselSlide;
