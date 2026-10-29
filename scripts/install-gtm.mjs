import { readdir, readFile, writeFile } from "node:fs/promises";
import { resolve, join } from "node:path";
import { fileURLToPath } from "node:url";

// Applies to the final export, including HTML copied from public/ and generators.
// An empty ID keeps the export unchanged. GA4 belongs in the verified container.
export async function installGtm(root, containerId) {
  if (!containerId) return 0;
  if (!/^GTM-[A-Z0-9]+$/.test(containerId)) {
    throw new Error("Invalid gtmContainerId in analytics.config.json");
  }

  const head = `<!-- site-gtm:head --><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${containerId}');</script><!-- /site-gtm:head -->`;
  const body = `<!-- site-gtm:body --><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${containerId}" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><!-- /site-gtm:body -->`;
  const changes = [];

  async function visit(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) {
        await visit(path);
      } else if (entry.isFile() && entry.name.endsWith(".html")) {
        const original = await readFile(path, "utf8");
        const html = original
          .replace(/<!-- site-gtm:head -->[\s\S]*?<!-- \/site-gtm:head -->/g, "")
          .replace(/<!-- site-gtm:body -->[\s\S]*?<!-- \/site-gtm:body -->/g, "");
        if (/googletagmanager\.com\/(?:gtm\.js|ns\.html)|GTM-[A-Z0-9]+/i.test(html)) {
          throw new Error(`Existing GTM found in ${path}; review before adding another container`);
        }
        if (!/<\/head>/i.test(html) || !/<body\b[^>]*>/i.test(html)) {
          throw new Error(`Missing document head/body in ${path}`);
        }
        const updated = html.replace(/<\/head>/i, `${head}</head>`)
          .replace(/<body\b[^>]*>/i, (opening) => opening + body);
        if (updated !== original) changes.push([path, updated]);
      }
    }
  }

  // Validate the entire export before writing any page.
  await visit(root);
  for (const [path, html] of changes) await writeFile(path, html);
  return changes.length;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const config = JSON.parse(await readFile(new URL("../analytics.config.json", import.meta.url), "utf8"));
  const count = await installGtm(fileURLToPath(new URL("../out/", import.meta.url)), config.gtmContainerId);
  console.log(config.gtmContainerId ? `GTM prepared in ${count} exported HTML files` : "GTM disabled: no container ID configured");
}
