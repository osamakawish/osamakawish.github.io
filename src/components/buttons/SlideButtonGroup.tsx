import React from "react";
import CarouselSlide from "../CarouselSlide";
import "./SlideButtonGroup.css";

type SlideButtonGroupProps = {
  slides: React.ReactElement<typeof CarouselSlide>[];
};

export default function SlideButtonGroup({ slides }: SlideButtonGroupProps) {
  return (
    // This div needs to be positioned where the current button is
    <div>
      {/* The buttons for each slide need to be distributed across the div, which I should test first via App file */}
      {slides.map((slide, i) => {
        // Needs to be a slide button that's shifted for each slide, and transitions to them accordingly
        return <React.Fragment key={i}>{slide}</React.Fragment>;
      })}
    </div>
  );
}
