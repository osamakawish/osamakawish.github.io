import "./CarouselSlideButton.css";

type CarouselSlideButtonProps = {
  slideIndex: number;
  currentIndex: number;
};

function CarouselSlideButton({
  slideIndex,
  currentIndex,
}: CarouselSlideButtonProps) {
  return (
    <svg className="line-svg">
      <line
        x1="0"
        y1="0"
        x2="80"
        y2="0"
        className={
          slideIndex === currentIndex
            ? "horizontalLine-active"
            : "horizontalLine"
        }
      />
    </svg>
  );
}

export default CarouselSlideButton;
