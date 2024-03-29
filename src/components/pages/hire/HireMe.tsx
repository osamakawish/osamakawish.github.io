import { useSearchParams } from "react-router-dom";
import PriceCard from "./PriceCard";
import { jobTypes, JobType, prices, PriceTier, priceTiers } from "./Prices";
import JobTypeButton from "./JobTypeButton";
import "./HireMe.css";
import { useState } from "react";

export function convertCamelCaseToSpaced(string: string): string {
  return string
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
}

export default function HireMe() {
  const [searchParams, setSearchParams] = useSearchParams();
  const jobType = searchParams.get("jobType");
  const priceTier = searchParams.get("priceTier");
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function updateParams(param: string, newValue: string) {
    const newSearchParams = new URLSearchParams(searchParams);

    if (newValue === searchParams.get(param)) {
      newSearchParams.delete(param);
      return setSearchParams(newSearchParams, { replace: true });
    }

    newSearchParams.set(param, newValue);
    return setSearchParams(newSearchParams, { replace: true });
  }

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  }

  function instruct(): import("react").ReactNode {
    if (!jobType) {
      return (
        <div id="instruction">
          <p>Select a job type to get started.</p>
          <p>
            If you're not sure what to choose, feel free to fill out the contact
            form and I'll get back to you as soon as possible.
          </p>
        </div>
      );
    } else if (!priceTier) {
      return (
        <div id="instruction">
          <p>Select a price tier to continue.</p>
          <p>
            If you're not sure what to choose, feel free to fill out the contact
            form and I'll get back to you as soon as possible.
          </p>
        </div>
      );
    } else {
      return (
        <div id="instruction">
          Fill out the contact form below and I'll get back to you as soon as
          possible.
        </div>
      );
    }
  }

  return (
    <div id="hire-me-content">
      <section>
        {instruct()}

        <div id="jobTypeButtonGroup">
          {jobTypes.map((_jobType, index) => {
            return (
              <JobTypeButton
                key={index}
                jobType={_jobType}
                isSelected={_jobType === jobType}
                updateParams={(newJobType) =>
                  updateParams("jobType", newJobType)
                }
              ></JobTypeButton>
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

        {jobType && (
          <div id="special-note">
            <b>Note.</b>
            <p>
              These prices are subjected to vary depending on customer demands.
              High demands may result in even higher prices, and lower demands
              may result in lower prices.
            </p>
          </div>
        )}
      </section>

      <form
        method="post"
        action="/hire/success"
        netlify-honeypot="bot-field"
        id="contact-form"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="jobType" value={jobType || ""} />
        <input type="hidden" name="priceTier" value={priceTier || ""} />
        <label htmlFor="name">Name*</label>
        <input
          title="Name"
          type="text"
          name="name"
          id="name"
          value={state.name}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="email">Email*</label>
        <input
          title="Email"
          type="email"
          name="email"
          id="email"
          value={state.email}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="phone">Phone</label>
        <input
          title="Phone"
          type="tel"
          name="phone"
          id="phone"
          value={state.phone}
          onChange={handleInputChange}
        />
        <label htmlFor="form-message">Message</label>
        <textarea
          title="Message"
          name="message"
          id="form-message"
          value={state.message}
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </form>
      <div className="spacer-xl"></div>
    </div>
  );
}
