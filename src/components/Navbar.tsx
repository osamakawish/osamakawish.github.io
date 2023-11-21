import "./Navbar.css";
import { PAGE_PATH_TITLES } from "../constants";
import { Link } from "react-router-dom";
import { useEffect } from "react";

type NavbarProps = {
  currentPage: string;
  openMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Navbar({ currentPage, openMenu }: NavbarProps) {
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
      <li className={(isActivePage ? "active-page " : "") + className}>
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

  useEffect(() => {
    const root = document.documentElement;
    const savedMode = localStorage.getItem("color-mode");
    const colorMode = savedMode || "dark";

    root.setAttribute("color-mode", colorMode);
  }, []);

  function colorModeDropdownButton(e: React.MouseEvent<HTMLButtonElement>) {
    const dropdown = document.getElementById("color-mode-dropdown");
    const root = document.documentElement;
    let colorMode = e.currentTarget.innerText.toLowerCase();

    if (colorMode === "system") {
      colorMode = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    localStorage.setItem("color-mode", colorMode);
    root.setAttribute("color-mode", colorMode);
    dropdown?.style.setProperty("display", "none");
  }

  function showDropDown(): void {
    const dropdown = document.getElementById("color-mode-dropdown");
    const display = dropdown?.style.getPropertyValue("display");

    if (display === "block") {
      dropdown?.style.setProperty("display", "none");
    } else {
      dropdown?.style.setProperty("display", "block");
    }
  }

  function ModeDropdownContentButton({ mode }: { mode: string }) {
    return <button onClick={colorModeDropdownButton}>{mode}</button>;
  }

  const modes = ["Light", "Dark", "System"];

  return (
    <>
      <ul className="custom-navbar">
        <li>
          <button id="menu-button" name="menu button" onClick={openMenu}>
            <img src="/icons/menu.png" alt="" />
          </button>
        </li>
        {Object.entries(PAGE_PATH_TITLES).map(([pagePath, pageTitle]) => (
          <NavTitle
            key={pagePath}
            pageTitle={pageTitle}
            pagePath={pagePath}
            className="page-link"
          ></NavTitle>
        ))}
        <li>
          <button
            name="mode button"
            id="color-mode-dropdown-btn"
            onClick={showDropDown}
          >
            Mode
          </button>
          <div id="color-mode-dropdown">
            {modes.map((mode) => (
              <ModeDropdownContentButton key={mode} mode={mode} />
            ))}
          </div>
        </li>
      </ul>
    </>
  );
}
