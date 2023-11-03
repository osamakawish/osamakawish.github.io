import { useSearchParams } from "react-router-dom";
import PriceCard from "./PriceCard";
import { jobTypes, JobType, prices, PriceTier, priceTiers } from "./Prices";

export default function HireMe() {
  const [searchParams, _] = useSearchParams();
  const jobType = searchParams.get("job");
  // Need to include query params in routing and modify this accordingly.

  return (
    <>
      <h1 className="page-header">Hire Me</h1>

      {jobTypes.map((jobType, index) => (
        <h2 key={index}>{jobType}</h2>
      ))}

      {jobType &&
        priceTiers.forEach((priceTier) => {
          const priceInfo = prices[jobType as JobType][priceTier as PriceTier];
          <PriceCard {...priceInfo} />;
        })}
    </>
  );
}
