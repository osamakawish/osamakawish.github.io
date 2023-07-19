import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import "./App.css";

const items = [
  {
    src: "lightning.jpg",
    altText: "Slide 1",
    caption: "Some representative placeholder content for the first slide.",
    captionHeader: "First slide label",
    key: "1",
  },
  {
    src: "arctic.jpg",
    altText: "Slide 2",
    caption: "Some representative placeholder content for the second slide.",
    captionHeader: "Second slide label",
    key: "2",
  },
  {
    src: "trees.jpg",
    altText: "Slide 3",
    caption: "Some representative placeholder content for the third slide.",
    captionHeader: "Third slide label",
    key: "3",
  },
];

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="carousel-image" />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.header}
        />
      </CarouselItem>
    );
  });

  return (
    <div className="position-absolute w-100 h-100">
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        className="carousel"
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};

export default App;
