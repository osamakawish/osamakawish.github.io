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
import blogPosts from "./components/blog/blog-metadata.json";
import "./App.css";
import BlogPost from "./components/BlogPost";
import NotFound from "./components/NotFound";
import { useEffect } from "react";

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
        <Route path="/blog/post/test" element={<div>Test Post</div>} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function BlogPostWrapper() {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === id);

  const location = useLocation();
  useEffect(() => {
    console.log("Current route:", location.pathname);
  }, [location]);

  if (!post) {
    return <div>Invalid blog post ID</div>;
  }

  return (
    <BlogPost
      previewImgFile={post.previewImgFile}
      title={post.title}
      date={new Date(post.id.slice(0, 10))}
    />
  );
}

export default App;
