import "./Navbar.css";
import { PAGE_PATH_TITLES } from "../constants";
import { Link } from "react-router-dom";

type NavbarProps = {
  currentPage: string;
};

export default function Navbar({ currentPage }: NavbarProps) {
  function NavTitle({
    pageTitle,
    pagePath,
    className,
  }: {
    pageTitle: string;
    pagePath: string;
    className: string;
  }) {
    const isActivePage = currentPage === pageTitle;

    return (
      <li className={(isActivePage ? "active-page" : "") + className}>
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
      {Object.entries(PAGE_PATH_TITLES).map(([pagePath, pageTitle]) => (
        <NavTitle
          key={pagePath}
          pageTitle={pageTitle}
          pagePath={pagePath}
          className="page-link"
        ></NavTitle>
      ))}
      <li className="mode-icon">
        <img src="\icons\color_modes\settings.png" alt="" className="icon" />
      </li>
    </ul>
  );
}
