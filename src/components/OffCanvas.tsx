import { ReactNode } from "react";
import "./OffCanvas.css";

type OffCanvasContentProps = {
  children?: ReactNode;
  header: string;
};

export function OffCanvasContent({ children, header }: OffCanvasContentProps) {
  return (
    <>
      <h3 className="offcanvas-header">{header}</h3>
      {children}
    </>
  );
}

type OffCanvasProps = {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function OffCanvas({
  children,
  isOpen,
  setIsOpen,
}: OffCanvasProps) {
  return (
    <div className={`off-canvas ${isOpen ? "off-canvas-open" : ""}`}>
      {isOpen && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="off-canvas-close-button"
          onClick={() => setIsOpen(false)}
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      )}
      <div className="off-canvas-content">{children}</div>
    </div>
  );
}
