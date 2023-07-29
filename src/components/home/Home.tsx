import { ReactNode, useEffect, useState } from "react";
import CarouselSlide from "./CarouselSlide";
import "./buttons/CarouselSlideButton";
import LeftArrow from "./arrows/LeftArrow";
import RightArrow from "./arrows/RightArrow";
import SlideButtonGroup from "./buttons/SlideButtonGroup";
import "./Home.css";
import OffCanvas, { OffCanvasContent } from "./OffCanvas";
import LinkButton from "../LinkButton";
import { useNavigate } from "react-router-dom";

type CarouselSlideData = {
  imgFile: string;
  header: ReactNode;
  description: ReactNode;
  offCanvasDescription?: ReactNode;
};

function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  type HExProps = {
    children: string;
    navigateLink?: string;
  };

  // For "expandable" headers: eg. opens the off-canvas
  function HEx({ navigateLink, children }: HExProps) {
    const navigate = useNavigate();

    return (
      <a
        className="slide-header"
        onClick={
          navigateLink
            ? () => navigate(navigateLink)
            : () => setIsOffCanvasOpen(true)
        }
      >
        <h2>{children}</h2>
      </a>
    );
  }

  // The headings should be able to open/close the off-canvas
  const slidesInfo: Array<CarouselSlideData> = [
    {
      imgFile: "Portfolio Intro.webp",
      header: <HEx navigateLink="/about">Osama Kawish</HEx>,
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
      // Talk about who you are and what your skills are here in a wee bit more detail,
      // though not necessarily too much detail. You can also link to your social media
      // as well as your about page. Also, move all of the link to the off-canvas.
      offCanvasDescription: (
        <OffCanvasContent header={"Osama Kawish"}>sfvnkdf</OffCanvasContent>
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
      offCanvasDescription: (
        <OffCanvasContent header={"Animation Application"}>
          Some stuff abotu the animation application. Go into more detail about
          the app. Also, talk about the technologies used to build it, and so
          on. Again, make sure to link to the github repo here. It'll make the
          page a lot cleaner.
        </OffCanvasContent>
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
      offCanvasDescription: (
        <OffCanvasContent header={"Voice-Enabled Inventory Management"}>
          Go into detail here regarding the project. Talk about the technologies
          used the difficulties faced, new things that were learned, etc.
        </OffCanvasContent>
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
      <OffCanvas isOpen={isOffCanvasOpen} setIsOpen={setIsOffCanvasOpen}>
        {slidesInfo[slideIndex].offCanvasDescription}
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

export default Home;
