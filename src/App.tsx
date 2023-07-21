import "./App.css";
import "./components/CarouselImage";
import CarouselImage from "./components/CarouselImage";
import "./components/CarouselSlideButton";
import CarouselSlideButton from "./components/CarouselSlideButton";

function App() {
  return (
    <>
      <CarouselImage imgFile="arctic.jpg" header="A">
        Afdsvv
      </CarouselImage>

      <CarouselSlideButton />
    </>
  );
}

export default App;
