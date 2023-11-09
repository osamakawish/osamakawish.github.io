import { ReactNode, useEffect, useState } from "react";
import CarouselSlide from "./CarouselSlide";
import "./buttons/CarouselSlideButton";
import SlideButtonGroup from "./buttons/SlideButtonGroup";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

type CarouselSlideData = {
  imgFile: string;
  header: ReactNode;
  description: ReactNode;
  offCanvasDescription?: ReactNode;
};

function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [nextSlideIndex, setNextSlideIndex] = useState<number | null>(null);

  type HExProps = {
    children: string;
    navigateLink?: string;
  };

  // For "expandable" headers: eg. opens the off-canvas
  function HEx({ navigateLink, children }: HExProps) {
    const navigate = useNavigate();

    return (
      <Link
        to={navigateLink || ""}
        className="slide-header"
        onClick={() => {
          if (navigateLink) navigate(navigateLink);
        }}
      >
        <h1>{children}</h1>
      </Link>
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
            I am a proficient software developer who can use a variety of
            technologies: Python, C#, HTML, CSS, TypeScript, React. This webpage
            itself was made with HTML/CSS + TypeScript + React.
          </p>
        </>
      ),
    },
    {
      imgFile: "Animperium Preview.webp",
      header: (
        <HEx navigateLink="/blog/post/2023-08-01-1-animperium">
          Animation Application
        </HEx>
      ),
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
      header: (
        <HEx navigateLink="/blog/post/2023-08-02-5-square-hackathon">
          Voice-Enabled Inventory Management
        </HEx>
      ),
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

  useEffect(() => {
    if (nextSlideIndex !== null) {
      setSlideIndex(nextSlideIndex);
    }
  }, [nextSlideIndex]);

  const slides = slidesInfo.map((slide, index) => (
    <CarouselSlide key={index} imgFile={slide.imgFile} header={slide.header}>
      {slide.description}
    </CarouselSlide>
  ));

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Osama Kawish is a proficient software developer who is fluent in .Net/C# and Python who graduated from University of Toronto with a Bachelor's of Science (Honours) in Mathematics and Computer Science in July 2017."
        />
      </Helmet>
      <div className="carousel-container">
        <CarouselSlide
          key={slideIndex}
          imgFile={slidesInfo[slideIndex].imgFile}
          header={slidesInfo[slideIndex].header}
        >
          {slidesInfo[slideIndex].description}
        </CarouselSlide>
      </div>

      <SlideButtonGroup
        slides={slides}
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
      />

      <img
        src="/icons/left-arrow.png"
        className="left arrow-btnx"
        onClick={() =>
          setNextSlideIndex((slideIndex - 1 + slides.length) % slides.length)
        }
        alt="left arrow button for previous slide"
      />
      <img
        src="/icons/right-arrow.png"
        className="right arrow-btnx"
        onClick={() => setNextSlideIndex((slideIndex + 1) % slides.length)}
        alt="right arrow button for next slide"
      />
    </>
  );
}

export default Home;
