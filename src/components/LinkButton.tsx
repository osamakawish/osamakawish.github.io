import "./LinkButton.css";
import { links } from "../../globals";

type LinkButtonProps = {
  name: string;
  url: string;
};

export default function LinkButton({ name, url }: LinkButtonProps) {
  const link = links[name];
  const icon = link?.icon;
  const text = link?.text;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <button type="submit" className="link-button">
        {icon && <img src={icon} alt="icon" className="icon" />}
        {text}
      </button>
    </a>
  );
}
