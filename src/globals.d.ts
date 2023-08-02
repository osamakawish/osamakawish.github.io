declare global {
  interface Window {
    MathJax: {
      Hub: {
        Queue: (commands: any[]) => void;
      };
    };
  }
}

// Required export statement to avoid empty file errors
export {};
