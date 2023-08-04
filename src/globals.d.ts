declare global {
  interface Window {
    MathJax: {
      Hub: {
        Queue: (commands: any[]) => void;
      };
    };
    Prism: {
      highlightAll: () => void;
    };
  }
}

// Required export statement to avoid empty file errors
export {};
