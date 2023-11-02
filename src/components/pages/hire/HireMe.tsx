import { useSearchParams } from "react-router-dom";
import PriceCard from "./PriceCard";
import { jobTypes, JobTypes, prices, PriceTier } from "./Prices";

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
        jobTypes.forEach((jobType) => {
          prices[jobType as keyof typeof prices].map((priceInfo, index) => (
            <PriceCard
              key={index}
              {...priceInfo}
              features={priceInfo.features}
            />
          ));
        })}
    </>
  );
}
