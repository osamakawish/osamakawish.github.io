import React from "react";
import CarouselSlide from "../CarouselSlide";
import "./SlideButtonGroup.css";
import CarouselSlideButton from "./CarouselSlideButton";

type SlideButtonGroupProps = {
  slides: React.ReactElement<typeof CarouselSlide>[];
  slideIndex?: number;
  setSlideIndex: React.Dispatch<React.SetStateAction<number>>;
};

export default function SlideButtonGroup({
  slides,
  setSlideIndex,
}: SlideButtonGroupProps) {
  return (
    // This div needs to be positioned where the current button is
    <div className="button-block">
      {/* The buttons for each slide need to be distributed across the div, which I should test first via App file */}
      {slides.map((_slide, i) => {
        // Needs to be a slide button that's shifted for each slide, and transitions to them accordingly
        return (
          <div onClick={() => setSlideIndex(i)}>
            <CarouselSlideButton />
          </div>
        );
      })}
    </div>
  );
}
