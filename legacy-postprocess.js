import { readdir, readFile, writeFile, stat, mkdir } from "fs/promises";
import { join, extname, basename } from "path";
import { fileURLToPath } from "url";
import sharp from "sharp"; // → npm install sharp

const __dirname = fileURLToPath(new URL(".", import.meta.url));

// 📂 Directory paths
const distDir = join(__dirname, "dist");
const astroImageDir = join(distDir, "_astro");
const legacyImageDir = join(distDir, "legacy", "images");
const postsDir = join(distDir, "legacy", "posts");

const html4Doctype =
  '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">';

await mkdir(legacyImageDir, { recursive: true });

// 🖼️ Step 1: Convert _astro images to PNG in /legacy/images
async function convertImages() {
  const files = await readdir(astroImageDir);
  for (const file of files) {
    const srcPath = join(astroImageDir, file);
    const nameWithoutExt = basename(file, extname(file));
    const destPath = join(legacyImageDir, `${nameWithoutExt}.png`);

    try {
      await sharp(srcPath).png().toFile(destPath);
      console.log(`🖼️ Converted: ${file} → ${nameWithoutExt}.png`);
    } catch {
      console.log(`⚠️ Skipped (unable to convert): ${file}`);
    }
  }
}

// 📝 Step 2: Update .html files to use HTML 4.01 and fix image paths
async function updateHtmlFiles(dir) {
  const entries = await readdir(dir);

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stats = await stat(fullPath);

    if (stats.isDirectory()) {
      await updateHtmlFiles(fullPath);
    } else if (stats.isFile() && entry.endsWith(".html")) {
      let content = await readFile(fullPath, "utf8");

      // Replace HTML5 doctype
      if (content.startsWith("<!DOCTYPE html>")) {
        content = content.replace("<!DOCTYPE html>", html4Doctype);
      }

      // Replace image paths and extensions
      content = content.replace(/src="\/?_astro\/(.*?)\.\w+"/g, (_, name) => {
        return `src="/legacy/images/${name}.png"`;
      });

      await writeFile(fullPath, content, "utf8");
      console.log(`🔧 Updated HTML: ${fullPath}`);
    }
  }
}

// 🚀 Execute all steps
await convertImages();
await updateHtmlFiles(postsDir);
console.log("🎉 All files patched for legacy HTML and image paths!");
