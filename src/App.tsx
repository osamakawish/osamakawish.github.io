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
        <Route path="/blog/*" element={<Blog />} />
        {blogPosts.map((post) => (
          <Route
            key={post.id}
            path={`/blog/post/${post.id}`}
            element={
              <BlogPost
                previewImgFile={post.previewImgFile}
                title={post.title}
                date={new Date(post.date)}
                contentFile={post.contentFile}
              />
            }
          />
        ))}
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </>
  );
}

export default App;
