import { ReactNode, useEffect } from "react";
import "./CarouselSlide.css";

type CarouselImageProps = {
  imgFile: string;
  header?: ReactNode;
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
        {header}
        {children}
      </div>
    </>
  );
}

export default CarouselSlide;
