import { Link } from "react-router-dom";
import { PAGE_PATH_TITLES } from "../constants";
import "./SideMenu.css";

type Props = {
  currentPage: string;
  close: () => void;
  opened: boolean;
};

export default function SideMenu({ currentPage, opened, close }: Props) {
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
      <div className={(isActivePage ? "active-page " : "") + className}>
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
      </div>
    );
  }

  return (
    <>
      <div id="side-menu" style={{ display: opened ? "block" : "none" }}>
        <img
          src="/icons/close.png"
          alt="close button"
          className="close-button"
          onClick={close}
        />
        {Object.entries(PAGE_PATH_TITLES).map(([path, title]) => (
          <NavTitle
            key={path}
            pageTitle={title}
            pagePath={path}
            className="page-link"
          />
        ))}
      </div>
    </>
  );
}
