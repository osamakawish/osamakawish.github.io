import { ReactNode } from "react";
import "./LinkButton.css";

type LinkButtonProps = {
  url: string;
  children: ReactNode;
  icon?: string;
};

export default function LinkButton({ icon, url, children }: LinkButtonProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <button type="submit" className="link-button">
        {icon && <img src={icon} alt="icon" className="icon" />}
        {children}
      </button>
    </a>
  );
}
