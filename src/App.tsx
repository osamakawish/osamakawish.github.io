import "./App.css";
import "./components/CarouselImage";
import CarouselImage from "./components/CarouselImage";

function App() {
  return (
    <>
      <CarouselImage imgFile="arctic.jpg" header="A">
        Afdsvv
      </CarouselImage>

      <svg className="line-svg">
        <line x1="0" y1="0" x2="80" y2="0" className="horizontalLine" />
      </svg>
    </>
  );
}

export default App;
