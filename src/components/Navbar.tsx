import "./Navbar.css";
import { PAGE_PATH_TITLES } from "../constants";
import { Link } from "react-router-dom";
import { useState } from "react";

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

  useState(() => {
    const root = document.documentElement;
    if (root.getAttribute("color-mode") === null) {
      root.setAttribute("color-mode", "dark");
    }
  });

  function colorModeDropdownButton(e: React.MouseEvent<HTMLButtonElement>) {
    const dropdown = document.getElementById("color-mode-dropdown");
    const root = document.documentElement;
    let colorMode = e.currentTarget.innerText.toLowerCase();

    if (colorMode === "system") {
      colorMode = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    root.setAttribute("color-mode", colorMode);
    dropdown?.style.setProperty("display", "none");
  }

  function showDropDown(): void {
    const dropdown = document.getElementById("color-mode-dropdown");

    dropdown?.style.setProperty("display", "block");
  }

  function ModeDropdownContentButton({ mode }: { mode: string }) {
    return <button onClick={colorModeDropdownButton}>{mode}</button>;
  }

  const modes = ["Light", "Dark", "System"];

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
      <li>
        <button id="color-mode-dropdown-btn" onClick={showDropDown}>
          Mode
        </button>
        <div id="color-mode-dropdown">
          {modes.map((mode) => (
            <ModeDropdownContentButton mode={mode} />
          ))}
        </div>
      </li>
    </ul>
  );
}
