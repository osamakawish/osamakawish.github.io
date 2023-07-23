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
    <CarouselSlide key={0} imgFile="Portfolio Intro.webp" header="Osama Kawish">
      Mastering C#, Python, Typescript, HTML, CSS, and React, I deliver robust
      software solutions. Explore to discover the elegance I bring to digital
      complexity.
    </CarouselSlide>,
    <CarouselSlide
      key={1}
      imgFile="Animperium Preview.webp"
      header="Animation Application"
    >
      These are the UI designs for an Animation application I'm currently
      working on. The goal is to play around and create a simplified user
      interface for animations. It is being implemented in Visual Studio via C#
      and WPF.
    </CarouselSlide>,
    <CarouselSlide
      key={2}
      imgFile="Square API.webp"
      header="Voice-Enabled Inventory Management"
    >
      Innovatively integrating C# with WPF and Azure's audio services, I've
      built a voice-assistant application that efficiently manipulates inventory
      through Square's API. Dive in to experience how I brought the future of
      voice assistance to inventory management.
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
        onClick={() =>
          setSlideIndex(Math.abs((slideIndex - 1) % slides.length))
        }
      />
      <RightArrow
        onClick={() =>
          setSlideIndex(Math.abs((slideIndex + 1) % slides.length))
        }
      />
    </>
  );
}

export default App;
