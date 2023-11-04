import { useSearchParams } from "react-router-dom";
import PriceCard from "./PriceCard";
import { jobTypes, JobType, prices, PriceTier, priceTiers } from "./Prices";
import JobTypeButton from "./JobTypeButton";
import "./HireMe.css";

export function convertCamelCaseToSpaced(string: string): string {
  return string
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
}

export default function HireMe() {
  const [searchParams, setSearchParams] = useSearchParams();
  const jobType = searchParams.get("jobType");
  const priceTier = searchParams.get("priceTier");

  function updateParams(param: string, newValue: string) {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(param, newValue);
    return setSearchParams(newSearchParams, { replace: true });
  }

  return (
    <section id="hire-me-content">
      <h1 className="page-header">Hire Me</h1>

      <h1 style={{ color: "red" }}>
        {jobType && convertCamelCaseToSpaced(jobType)}
      </h1>

      <div id="jobTypeButtonGroup">
        {jobTypes.map((_jobType, index) => {
          return (
            <>
              <JobTypeButton
                key={index}
                jobType={_jobType}
                isSelected={_jobType === jobType}
                updateParams={(newJobType) =>
                  updateParams("jobType", newJobType)
                }
              ></JobTypeButton>
            </>
          );
        })}
      </div>

      <div id="priceTierGroup">
        {jobType &&
          priceTiers.map((_priceTier, index) => {
            const priceInfo =
              prices[jobType as JobType][_priceTier as PriceTier];

            return (
              <PriceCard
                key={index}
                priceTier={_priceTier}
                {...priceInfo}
                selected={_priceTier === priceTier}
                updateParams={(newPriceTier) =>
                  updateParams("priceTier", newPriceTier)
                }
              />
            );
          })}
      </div>
    </section>
  );
}
