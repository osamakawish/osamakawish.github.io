import React from "react";
import CarouselSlide from "../CarouselSlide";
import "./SlideButtonGroup.css";
import CarouselSlideButton from "./CarouselSlideButton";

type SlideButtonGroupProps = {
  slides: React.ReactElement<typeof CarouselSlide>[];
  slideIndex: number;
  setSlideIndex: React.Dispatch<React.SetStateAction<number>>;
};

export default function SlideButtonGroup({
  slides,
  slideIndex,
  setSlideIndex,
}: SlideButtonGroupProps) {
  return (
    <div className="button-block">
      {slides.map((_slide, i) => {
        return (
          <div key={i} onClick={() => setSlideIndex(i)}>
            <CarouselSlideButton slideIndex={slideIndex} currentIndex={i} />
          </div>
        );
      })}
    </div>
  );
}
