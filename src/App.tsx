import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/home/Home";
import Blog from "./components/blog/Blog";
import AboutMe from "./components/about/about-me";

function App() {
  return (
    <Router>
      <AppWithRouter />
    </Router>
  );
}

const pageTitles: { [key: string]: string } = {
  "/": "Home",
  "/blog": "Blog",
  "/about": "About Me",
};

function AppWithRouter() {
  const location = useLocation();
  const currentPage = pageTitles[location.pathname] || "Unknown Page";

  return (
    <>
      <Navbar currentPage={currentPage} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </>
  );
}

export default App;
