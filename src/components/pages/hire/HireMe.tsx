import { useSearchParams } from "react-router-dom";
import PriceCard from "./PriceCard";
import { jobTypes, JobType, prices, PriceTier, priceTiers } from "./Prices";
import JobTypeButton from "./JobTypeButton";
import "./HireMe.css";
import { FormEvent } from "react";

export function convertCamelCaseToSpaced(string: string): string {
  return string
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
}

const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default function HireMe() {
  const [searchParams, setSearchParams] = useSearchParams();
  const jobType = searchParams.get("jobType");
  const priceTier = searchParams.get("priceTier");

  function updateParams(param: string, newValue: string) {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(param, newValue);
    return setSearchParams(newSearchParams, { replace: true });
  }

  const state = { name: "", email: "", message: "" };

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  }

  return (
    <div id="hire-me-content">
      <section>
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
      <form
        name="contact"
        data-netlify
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        style={{ visibility: jobType && priceTier ? "visible" : "hidden" }}
        id="contact-form"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="jobType" value={jobType || ""} />
        <input type="hidden" name="priceTier" value={priceTier || ""} />
        <h5>Name*</h5>
        <input type="text" name="name" required />
        <h5>Email*</h5>
        <input type="email" name="email" required />
        <h5>Phone</h5>
        <input type="tel" name="tel" />
        <h5>Message</h5>
        <textarea name="message" />
        <button type="submit">Send</button>
      </form>
      <div className="spacer-xl"></div>
    </div>
  );
}
