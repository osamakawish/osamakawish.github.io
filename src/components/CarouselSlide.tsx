import "./CarouselSlide.css";

type CarouselImageProps = {
  imgFile: string;
  header?: string;
  children?: string;
};

function CarouselSlide({ imgFile, header, children }: CarouselImageProps) {
  return (
    <>
      <img src={imgFile} className="carousel-image" />
      <div className="rect" />
      <h1 className="slide-header">{header}</h1>
      <p className="text">{children}</p>
    </>
  );
}

export default CarouselSlide;
