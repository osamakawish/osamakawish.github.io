import { links as linkData } from "./globals.json";

export type LinkData = {
  [key: string]: {
    icon: string;
    text: string;
  };
};

export const links: LinkData = linkData;
