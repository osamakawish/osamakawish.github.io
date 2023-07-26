import { ReactNode, useEffect, useState } from "react";
import CarouselSlide from "./components/CarouselSlide";
import "./components/buttons/CarouselSlideButton";
import LeftArrow from "./components/arrows/LeftArrow";
import RightArrow from "./components/arrows/RightArrow";
import SlideButtonGroup from "./components/buttons/SlideButtonGroup";
import "./App.css";
import Navbar from "./components/Navbar";
import OffCanvas from "./components/OffCanvas";

type LinkButtonProps = {
  url: string;
  children: ReactNode;
};

function LinkButton({ url, children }: LinkButtonProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <button type="submit" className="link-button">
        {children}
      </button>
    </a>
  );
}

type CarouselSlideData = {
  imgFile: string;
  header: ReactNode;
  description: ReactNode;
};

function App() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  type HExProps = {
    children: string;
  };

  // For "expandable" headers: eg. opens the off-canvas
  function HEx({ children }: HExProps) {
    return (
      <a
        className="slide-header"
        onClick={() => setIsOffCanvasOpen(!isOffCanvasOpen)}
      >
        <h2>{children}</h2>
      </a>
    );
  }

  // The headings should be able to open/close the off-canvas
  const slidesInfo: Array<CarouselSlideData> = [
    {
      imgFile: "Portfolio Intro.webp",
      header: <HEx>Osama Kawish</HEx>,
      description: (
        <>
          <p>
            Mastering C#, Python, Typescript, HTML, CSS, and React, I deliver
            robust software solutions. Explore to discover the elegance I bring
            to digital complexity.
          </p>
          <p id="contact-buttons">
            <LinkButton url="mailto:osamakawish@gmail.com">Email</LinkButton>
            <LinkButton url="https://www.linkedin.com/in/osama-kawish-7b0232237/">
              LinkedIn
            </LinkButton>
            <LinkButton url="https://www.codewars.com/users/osamakawish">
              Codewars
            </LinkButton>
          </p>
        </>
      ),
    },
    {
      imgFile: "Animperium Preview.webp",
      header: <HEx>Animation Application</HEx>,
      description: (
        <>
          <p>
            These are the UI designs for an Animation application I'm currently
            working on. The goal is to play around and create a simplified user
            interface for animations. It is being implemented in Visual Studio
            via C# and WPF.
          </p>
        </>
      ),
    },
    {
      imgFile: "Square API.webp",
      header: <HEx>Voice-Enabled Inventory Management</HEx>,
      description: (
        <>
          <p>
            Innovatively integrating C# with WPF and Azure's audio services,
            I've built a voice-assistant application that efficiently
            manipulates inventory through Square's API. Dive in to experience
            how I brought the future of voice assistance to inventory
            management.
          </p>
        </>
      ),
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
      {slide.description}
    </CarouselSlide>
  ));

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <>
      <Navbar currentPage="Home" />

      <OffCanvas isOpen={isOffCanvasOpen} setIsOpen={setIsOffCanvasOpen}>
        caad
      </OffCanvas>

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
