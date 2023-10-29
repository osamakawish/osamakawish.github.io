import DOMPurify from "dompurify";
import { LANG_SHORT_FORMS } from "../../../constants";

export default function ParseBlogPostPurely(text: string) {
  // Replace double new lines with </p><p> and single new lines with a space
  text = text.replace(/(\r?\n){2}/g, "</p><p>");
  text = text.replace(/ ?\r?\n/g, " ");

  // Replace ```lang if it exists with <pre><code class="language-langShortForms(lang)">
  // else replace with <pre><code class="language-lang"> and close with </code></pre>.
  text = text.replace(
    /```([a-zA-Z0-9-]+)?(\r?\n)([\s\S]*?)\1```/g,
    (_match, lang, _newLine, code) => {
      const finalLang = LANG_SHORT_FORMS[lang] || lang;

      return `<pre><code ${
        finalLang ? `class="language-${finalLang}"` : ""
      }>${code}</code></pre>`;
    }
  );

  // Remove empty <p> tags
  text = text.replace(/<p><\/p>/g, "");

  return DOMPurify.sanitize(text);
}
