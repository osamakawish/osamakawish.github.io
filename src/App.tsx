import "./App.css";
import "./components/CarouselSlide";
import CarouselSlide from "./components/CarouselSlide";
import "./components/buttons/CarouselSlideButton";
import LeftArrow from "./components/arrows/LeftArrow";
import RightArrow from "./components/arrows/RightArrow";
import SlideButtonGroup from "./components/buttons/SlideButtonGroup";
import { useState } from "react";

function App() {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    <CarouselSlide key={1} imgFile="arctic.jpg" header="A">
      Afdsvv
    </CarouselSlide>,
    <CarouselSlide key={2} imgFile="trees.jpg" header="A">
      Afdsvv
    </CarouselSlide>,
    <CarouselSlide key={3} imgFile="lightning.jpg" header="A">
      Afdsvv
    </CarouselSlide>,
  ];

  return (
    <>
      {slides[slideIndex]}

      <SlideButtonGroup
        slides={slides}
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
      />

      <LeftArrow
        onClick={() => setSlideIndex((slideIndex - 1) % slides.length)}
      />
      <RightArrow
        onClick={() => setSlideIndex((slideIndex + 1) % slides.length)}
      />
    </>
  );
}

export default App;
