import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
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
        {blogPosts.map((post) => (
          <Route
            key={post.id}
            path={`/blog/post/:id`}
            element={
              <BlogPost
                previewImgFile={post.previewImgFile}
                title={post.title}
                date={new Date(post.id.slice(0, 10))}
                contentFile={`/blog/post/${post.id}.html`}
              />
            }
          />
        ))}
        <Route path="/about" element={<AboutMe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
