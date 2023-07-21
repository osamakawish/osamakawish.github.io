import "./App.css";
import "./components/CarouselImage";
import CarouselImage from "./components/CarouselImage";
import "./components/CarouselSlideButton";
import CarouselSlideButton from "./components/CarouselSlideButton";
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
