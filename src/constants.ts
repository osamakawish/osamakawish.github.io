import { linkData as _linkData } from "../globals.json";

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
