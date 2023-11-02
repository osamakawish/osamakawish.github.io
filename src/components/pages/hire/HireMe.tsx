import { useSearchParams } from "react-router-dom";
import PriceCard from "./PriceCard";
import { JobTypes, Prices, PriceTier } from "./Prices";

type PriceInfo = {
  title: string;
  description: string;
  price: number;
};

type PricesType = {
  [key: string]: PriceInfo[];
};

const Prices: PricesType = {
  WebDeveloper: [
    {
      title: "Primitive",
      description: "Basic website with no backend",
      price: 100,
    },
    {
      title: "Civilized",
      description: "Website with backend and database",
      price: 200,
    },
    {
      title: "Futuristic",
      description: "Website with advanced features and AI integration",
      price: 500,
    },
  ],
  SoftwareDeveloper: [
    {
      title: "Primitive",
      description: "Basic software with no backend",
      price: 200,
    },
    {
      title: "Civilized",
      description: "Software with backend and database",
      price: 400,
    },
    {
      title: "Futuristic",
      description: "Software with advanced features and AI integration",
      price: 1000,
    },
  ],
  GraphicDesigner: [
    {
      title: "Logo Design",
      description: "Design a logo for your brand",
      price: 50,
    },
    {
      title: "UI/UX Design",
      description: "Design a user interface for your website or app",
      price: 100,
    },
    {
      title: "Brand Identity",
      description: "Design a complete brand identity for your business",
      price: 500,
    },
  ],
  Tutor: [
    {
      title: "Programming Tutoring",
      description: "One-on-one tutoring for programming languages",
      price: 50,
    },
    {
      title: "Math Tutoring",
      description: "One-on-one tutoring for math",
      price: 30,
    },
    {
      title: "Science Tutoring",
      description: "One-on-one tutoring for science",
      price: 30,
    },
  ],
};

export default function HireMe() {
  const [searchParams, _] = useSearchParams();
  const jobType = searchParams.get("job");
  // Need to include query params in routing and modify this accordingly.

  return (
    <>
      <h1 className="page-header">Hire Me</h1>

      {JobTypes.map((jobType, index) => (
        <h2 key={index}>{jobType}</h2>
      ))}

      {jobType &&
      PriceTier.

        Prices[jobType as keyof typeof Prices].map((priceInfo, index) => (
          <PriceCard key={index} {...priceInfo} features={priceInfo.} />
        ))}
    </>
  );
}
