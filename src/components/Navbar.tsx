import "./Navbar.css";
import { pagePathsToTitles } from "../constants";
import { Link } from "react-router-dom";

type NavbarProps = {
  currentPage: string;
};

export default function Navbar({ currentPage }: NavbarProps) {
  function NavTitle({
    pageTitle,
    pagePath,
  }: {
    pageTitle: string;
    pagePath: string;
  }) {
    return (
      <li className={currentPage == pageTitle ? "active-page" : ""}>
        <Link to={pagePath}>{pageTitle}</Link>
      </li>
    );
  }

  return (
    <ul className="custom-navbar">
      {Object.entries(pagePathsToTitles).map(([pagePath, pageTitle]) => (
        <NavTitle
          key={pagePath}
          pageTitle={pageTitle}
          pagePath={pagePath}
        ></NavTitle>
      ))}
    </ul>
  );
}
