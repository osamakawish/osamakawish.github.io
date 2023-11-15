type ColorMode = "light" | "dark" | "system";

export function setColorScheme(colorMode: ColorMode) {
  const root = document.documentElement;

  if (colorMode === "system") {
    colorMode = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  root.setAttribute("color-mode", colorMode);
}
