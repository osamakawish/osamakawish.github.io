import { useSearchParams } from "react-router-dom";
import PriceCard from "./PriceCard";
import { JobTypes, Prices } from "./Prices";

export default function HireMe() {
  const [searchParams, _] = useSearchParams();
  const jobType = searchParams.get("job");
  // Need to include query params in routing and modify this accordingly.

  return (
    <>
      <h1 className="page-header">Hire Me</h1>

      {JobTypes.map((jobType, index) => (
        <div key={index}>
          <h2>{jobType}</h2>
        </div>
      ))}

      {Prices[jobType].map((priceInfo, index) => (
        <PriceCard key={index} {...priceInfo} />
      ))}
    </>
  );
}
