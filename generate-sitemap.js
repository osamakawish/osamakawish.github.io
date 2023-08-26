import { writeFileSync, readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Since __dirname is not available in ES Modules, we need to derive it
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read and parse the JSON data
const rawData = readFileSync(`${__dirname}/src/blog-data.json`, "utf8");
const blogPostsJson = JSON.parse(rawData);

function generateSitemap() {
  const baseUrl = "https://osamakawish.com";
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add static routes
  const staticRoutes = [
    { path: "/", freq: "monthly", priority: "1.0" },
    { path: "/blog", freq: "weekly", priority: "0.9" },
    { path: "/about", freq: "yearly", priority: "0.7" },
  ];

  for (let route of staticRoutes) {
    sitemap += `
<url>
    <loc>${baseUrl}${route.path}</loc>
    <changefreq>${route.freq}</changefreq>
    <priority>${route.priority}</priority>
</url>`;
  }

  // Add blog posts
  for (let postId in blogPostsJson) {
    sitemap += `
<url>
    <loc>${baseUrl}/blog/post/${postId}</loc>
    <changefreq>yearly</changefreq>
    <priority>0.8</priority>
</url>`;
  }

  sitemap += "\n</urlset>";

  // Write to sitemap.xml
  writeFileSync(`${__dirname}/public/sitemap.xml`, sitemap);
  console.log("Sitemap generated!");
}

generateSitemap();
