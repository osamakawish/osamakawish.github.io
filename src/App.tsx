import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/home/Home";
import Blog from "./components/blog/Blog";
import AboutMe from "./components/about/AboutMe";
import { pagePathsToTitles } from "./constants";
import "./App.css";
import BlogPost from "./components/blog/BlogPost";
import NotFound from "./components/NotFound";
import { blogPosts } from "./BlogPostData";

function App() {
  return (
    <Router>
      <AppWithRouter />
    </Router>
  );
}

function AppWithRouter() {
  const location = useLocation();
  const currentPage = pagePathsToTitles[location.pathname] || "Unknown Page";

  return (
    <>
      <Navbar currentPage={currentPage} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
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
