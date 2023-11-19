import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/home/Home";
import Blog from "./components/pages/blog/Blog";
import AboutMe from "./components/pages/about/AboutMe";
import { PAGE_PATH_TITLES } from "./constants";
import "./App.css";
import BlogPost from "./components/pages/blog/BlogPost";
import NotFound from "./components/NotFound";
import { blogPosts } from "./BlogPostData";
import HireMe from "./components/pages/hire/HireMe";
import HireSuccess from "./components/pages/hire/success/HireSuccess";
import SideMenu from "./components/SideMenu";

function App() {
  return (
    <Router>
      <AppWithRouter />
    </Router>
  );
}

function AppWithRouter() {
  const location = useLocation();
  const currentPage = PAGE_PATH_TITLES[location.pathname] || "Unknown Page";

  function openSideMenu(): void {
    const sideMenu = document.getElementById("sideMenu");
    sideMenu?.style;
  }

  return (
    <>
      <Navbar currentPage={currentPage} openMenu={openSideMenu} />
      <SideMenu currentPage={currentPage} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/hire/success" element={<HireSuccess />} />
        <Route path="/hire" element={<HireMe />} />
        <Route path="/blog/post/:id" element={<BlogPostWrapper />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function BlogPostWrapper() {
  const { id } = useParams();

  if (!id || !blogPosts[id]) {
    return <NotFound />;
  }

  return <BlogPost />;
}

export default App;
