import { ReactNode } from "react";
import "./LinkButton.css";

type LinkButtonProps = {
  url: string;
  children: ReactNode;
};

export default function LinkButton({ url, children }: LinkButtonProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <button type="submit" className="link-button">
        {children}
      </button>
    </a>
  );
}
