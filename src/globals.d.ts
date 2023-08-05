declare global {
  interface Window {
    MathJax: {
      typeset: () => void;
    };
    Prism: {
      highlightElement: (element: Element) => void;
      highlightAll: () => void;
    };
  }
}

// Required export statement to avoid empty file errors
export {};
