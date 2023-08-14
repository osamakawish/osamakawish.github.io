import DOMPurify from "dompurify";

const langShortForms: { [key: string]: string } = {
  cpp: "c++",
  cs: "c#",
  fs: "f#",
  objc: "objective-c",
  vb: "visual basic",
  py: "python",
  js: "javascript",
  ts: "typescript",
  html: "html",
  css: "css",
  xml: "xml",
  json: "json",
  md: "markdown",
  r: "rust",
};

export default function ParseBlogPostPurely(text: string) {
  // Replace double new lines with </p><p> and single new lines with a space
  text = text.replace(/(\r?\n){2}/g, "</p><p>");
  text = text.replace(/ ?\r?\n/g, " ");

  // Replace ```lang if it exists with <pre><code class="language-langShortForms(lang)">
  // else replace with <pre><code class="language-lang"> and close with </code></pre>.
  text = text.replace(
    /```([a-zA-Z0-9-]+)?(\r?\n)([\s\S]*?)\1```/g,
    (_match, lang, _newLine, code) => {
      const finalLang = langShortForms[lang] || lang;

      return `<pre><code ${
        finalLang ? `class="language-${finalLang}"` : ""
      }>${code}</code></pre>`;
    }
  );

  // Remove empty <p> tags
  text = text.replace(/<p><\/p>/g, "");

  return DOMPurify.sanitize(text);
}
