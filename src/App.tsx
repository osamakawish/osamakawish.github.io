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
import BlogPost from "./components/BlogPost";
import NotFound from "./components/NotFound";
import { useEffect } from "react";
import { blogPosts } from "./BlogPostData";

function App() {
  console.log("App rendering 1");

  return (
    <Router>
      <AppWithRouter />
    </Router>
  );
}

function AppWithRouter() {
  const location = useLocation();
  const currentPage = pagePathsToTitles[location.pathname] || "Unknown Page";

  console.log("App rendering 2");

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
  console.log("BlogPostWrapper rendering");

  const { id } = useParams();

  if (!id) {
    return <div>Invalid blog post ID</div>;
  }

  const post = blogPosts[id];

  console.log(`BlogPostWrapper log 2: id: ${id}, post: ${post}`);
  const location = useLocation();

  useEffect(() => {
    console.log("Current route:", location.pathname);
  }, [location]);

  if (!post) {
    return <div>Invalid blog post ID</div>;
  }

  console.log("BlogPostWrapper log 3: Returning BlogPost.");
  return <BlogPost />;
}

export default App;
