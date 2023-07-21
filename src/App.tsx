import "./App.css";
import "./components/CarouselSlide";
import CarouselImage from "./components/CarouselSlide";
import "./components/buttons/CarouselSlideButton";
import CarouselSlideButton from "./components/buttons/CarouselSlideButton";
import LeftArrow from "./components/arrows/LeftArrow";
import RightArrow from "./components/arrows/RightArrow";

function App() {
  return (
    <>
      <CarouselImage imgFile="arctic.jpg" header="A">
        Afdsvv
      </CarouselImage>

      <CarouselSlideButton />

      <LeftArrow />
      <RightArrow />
    </>
  );
}

export default App;
