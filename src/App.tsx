import { ReactNode, useEffect, useState } from "react";
import CarouselSlide from "./components/CarouselSlide";
import "./components/buttons/CarouselSlideButton";
import LeftArrow from "./components/arrows/LeftArrow";
import RightArrow from "./components/arrows/RightArrow";
import SlideButtonGroup from "./components/buttons/SlideButtonGroup";

type CarouselSlideData = {
  imgFile: string;
  header: string;
  description: ReactNode;
};

function App() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const slidesInfo: Array<CarouselSlideData> = [
    {
      imgFile: "Portfolio Intro.webp",
      header: "Osama Kawish",
      description:
        "Mastering C#, Python, Typescript, HTML, CSS, and React, I deliver robust software solutions. Explore to discover the elegance I bring to digital complexity.",
    },
    {
      imgFile: "Animperium Preview.webp",
      header: "Animation Application",
      description:
        "These are the UI designs for an Animation application I'm currently working on. The goal is to play around and create a simplified user interface for animations. It is being implemented in Visual Studio via C# and WPF.",
    },
    {
      imgFile: "Square API.webp",
      header: "Voice-Enabled Inventory Management",
      description:
        "Innovatively integrating C# with WPF and Azure's audio services, I've built a voice-assistant application that efficiently manipulates inventory through Square's API. Dive in to experience how I brought the future of voice assistance to inventory management.",
    },
  ];

  // This effect runs once on mount and preloads all images
  useEffect(() => {
    const loadImages = async () => {
      const promises = slidesInfo.map((slide) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = slide.imgFile;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(promises);
        setIsLoading(false); // All images are loaded, we can stop showing the loading state
      } catch (error) {
        console.error("Failed to preload images", error);
      }
    };

    loadImages();
  }, [slidesInfo]);

  const slides = slidesInfo.map((slide, index) => (
    <CarouselSlide key={index} imgFile={slide.imgFile} header={slide.header}>
      <p>{slide.description}</p>
    </CarouselSlide>
  ));

  return isLoading ? (
    <div>Loading...</div> // Or a more complex loading screen if you prefer
  ) : (
    <>
      {slides[slideIndex]}

      <SlideButtonGroup
        slides={slides}
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
      />

      <LeftArrow
        onClick={() =>
          setSlideIndex((slideIndex - 1 + slides.length) % slides.length)
        }
      />
      <RightArrow
        onClick={() => setSlideIndex((slideIndex + 1) % slides.length)}
      />
    </>
  );
}

export default App;
