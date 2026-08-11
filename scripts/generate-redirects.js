const fs = require("fs");
const path = require("path");

const redirectsPath = path.join(__dirname, "..", "_data", "redirects.json");
const outputPath = path.join(__dirname, "..", "_redirects");

const redirects = JSON.parse(fs.readFileSync(redirectsPath, "utf8"));

const lines = Object.entries(redirects).map(
  ([slug, target]) => `/${slug}  ${target}  301`
);

fs.writeFileSync(outputPath, lines.join("\n") + "\n");

console.log(`generate-redirects: wrote ${lines.length} redirect(s) to ${outputPath}`);
