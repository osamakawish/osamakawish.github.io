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
      <div className="text-block">
        <h1 className="slide-header">{header}</h1>
        <p className="text">{children}</p>
      </div>
    </>
  );
}

export default CarouselSlide;
