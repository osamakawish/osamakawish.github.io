import { linkData as _linkData } from "../globals.json";

export const VIDEO_IDS = [
  "aVwxzDHniEw",
  "3izFMB91K_Q",
  "p8u_k2LIZyo",
  "AE4yzLCuc3A",
  "ltLUadnCyi0",
  "x09IsbVZeXo",
];

export const PREVIEW_BLOGS = [
  "2023-08-08-1-euclid-complex-multiplication",
  "2023-08-01-1-animperium",
  "2023-08-02-5-square-hackathon",
  "2023-08-02-2-bezier-turning-points",
];

export type LinkData = {
  [key: string]: {
    icon: string;
    text: string;
  };
};

export const LINK_DATA: LinkData = _linkData;

export const PAGE_PATH_TITLES: { [key: string]: string } = {
  "/": "Home",
  "/blog": "Blog",
  "/about": "About Me",
};

export const LINKS: [string, string][] = [
  ["gmail", "mailto:osamakawish@gmail.com"],
  ["linkedin", "https://www.linkedin.com/in/osama-kawish/"],
  ["codewars", "https://www.codewars.com/users/osamakawish"],
  ["github", "https://github.com/osamakawish"],
];

export const LANG_SHORT_FORMS: { [key: string]: string } = {
  cpp: "c++",
  cs: "c#",
  fs: "f#",
  objc: "objective-c",
  vb: "visual basic",
  py: "python",
  js: "javascript",
  ts: "typescript",
  html: "html",
  css: "css",
  xml: "xml",
  json: "json",
  md: "markdown",
  r: "rust",
};
