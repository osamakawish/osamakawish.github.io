import { convertCamelCaseToSpaced } from "./HireMe";
import { JobType } from "./Prices";
import "./JobTypeButton.css";

type Props = {
  jobType: JobType;
  isSelected: boolean;
  updateParams: (newJobType: JobType) => void;
};

export default function JobTypeButton({
  jobType,
  isSelected,
  updateParams,
}: Props) {
  return (
    <button
      className="jobTypeButton"
      id={isSelected ? "selectedJobType" : ""}
      onClick={() => updateParams(jobType)}
      disabled={isSelected}
    >
      {convertCamelCaseToSpaced(jobType)}
    </button>
  );
}
