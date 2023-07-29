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
    const isActivePage = currentPage === pageTitle;

    return (
      <li className={isActivePage ? "active-page" : ""}>
        {isActivePage ? (
          <span>{pageTitle}</span>
        ) : (
          <Link
            to={pagePath}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {pageTitle}
          </Link>
        )}
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
