export type PriceInfo = {
  title: string;
  subtitle: string;
  image: string;
  price: string;
  description: string;
  features: string[];
};

export const JobTypes = [
  "Web Developer",
  "Software Developer",
  "Graphic Designer",
  "Tutor",
];

export const Prices: {
  [key: string]: PriceInfo[];
} = {};
