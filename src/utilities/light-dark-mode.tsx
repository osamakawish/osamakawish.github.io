import { useState, useEffect } from "react";
import "./light-dark-mode.css";

type ColorMode = "light" | "dark" | "system";

export function setColorMode(colorMode: ColorMode) {
  const root = document.documentElement;

  if (colorMode === "system") {
    colorMode = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  root.setAttribute("color-mode", colorMode);
}

export function getColorMode(): ColorMode {
  return document.documentElement.getAttribute("color-mode") as ColorMode;
}

export function ModeButton() {
  const [colorMode, setColorMode] = useState<ColorMode>(getColorMode());

  useEffect(() => {
    setColorMode("dark");
  }, []);

  document.documentElement.setAttribute("color-mode", colorMode);

  function toggleDropdown(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    event.preventDefault();
    document.getElementById("myDropdown")?.classList.toggle("show");
  }

  return (
    <>
      <div className="dropdown">
        <button onClick={toggleDropdown} className="dropbtn">
          Dropdown
        </button>
        <div id="myDropdown" className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </>
  );
}
