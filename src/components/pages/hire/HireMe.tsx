import { useSearchParams } from "react-router-dom";
import PriceCard from "./PriceCard";
import { jobTypes, JobType, prices, PriceTier, priceTiers } from "./Prices";

export default function HireMe() {
  const [searchParams, _] = useSearchParams();
  const jobType = searchParams.get("jobType");

  return (
    <>
      <h1 className="page-header">Hire Me</h1>

      <h1 style={{ color: "red" }}>{jobType}</h1>

      {jobTypes.map((jobType, index) => (
        <h2 key={index}>{jobType}</h2>
      ))}

      {jobType &&
        priceTiers.map((priceTier, index) => {
          const priceInfo = prices[jobType as JobType][priceTier as PriceTier];
          return <PriceCard key={index} {...priceInfo} />;
        })}
    </>
  );
}
