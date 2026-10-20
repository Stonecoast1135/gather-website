import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

// Derive the exact owner-supplied capital G. This removes the flat master
// background by recovering edge coverage, without tracing or redrawing it.
const website = fileURLToPath(new URL("../", import.meta.url));
const args = process.argv.slice(2);
const appFlag = args.indexOf("--app-root");
const app = appFlag >= 0 ? args[appFlag + 1] : undefined;
if (appFlag >= 0 && !app) throw new Error("--app-root requires a directory.");
const source = args[0] && args[0] !== "--app-root"
  ? args[0]
  : path.join(website, "public/brand/gather-g-master.png");
const master = await fs.readFile(source);
const { data, info } = await sharp(master).ensureAlpha().raw()
  .toBuffer({ resolveWithObject: true });
const background = [12, 51, 36];
const cream = [250, 245, 231];
const denominator = cream.reduce((sum, value, c) =>
  sum + (value - background[c]) ** 2, 0);
const rgba = Buffer.alloc(info.width * info.height * 4);
let left = info.width, top = info.height, right = 0, bottom = 0;
for (let i = 0; i < info.width * info.height; i++) {
  const p = i * 4;
  let coverage = 0;
  for (let c = 0; c < 3; c++)
    coverage += (data[p + c] - background[c]) * (cream[c] - background[c]);
  const alpha = Math.round(Math.max(0, Math.min(1, coverage / denominator)) * 255);
  for (let c = 0; c < 3; c++) rgba[p + c] = cream[c];
  rgba[p + 3] = alpha;
  if (alpha) {
    left = Math.min(left, i % info.width);
    right = Math.max(right, i % info.width);
    top = Math.min(top, Math.floor(i / info.width));
    bottom = Math.max(bottom, Math.floor(i / info.width));
  }
}
if (right <= left || bottom <= top) throw new Error("The master has no visible artwork.");
const tight = await sharp(rgba, {
  raw: { width: info.width, height: info.height, channels: 4 },
}).extract({ left, top, width: right - left + 1, height: bottom - top + 1 })
  .png().toBuffer();
async function coloredMark(rgb, width, height) {
  const { data, info } = await sharp(tight).raw().toBuffer({ resolveWithObject: true });
  for (let p = 0; p < data.length; p += 4)
    for (let c = 0; c < 3; c++) data[p + c] = rgb[c];
  let output = sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } });
  if (width || height) output = output.resize({ width, height, fit: "inside", kernel: "lanczos3" });
  return output.png().toBuffer();
}
await fs.mkdir(path.join(website, "public/brand"), { recursive: true });
await fs.writeFile(path.join(website, "public/brand/gather-g-master.png"), master);
await fs.writeFile(path.join(website, "public/brand/gather-mark-cream.png"), await coloredMark(cream));
await fs.writeFile(path.join(website, "public/brand/gather-mark-forest.png"), await coloredMark([4, 60, 50]));
await sharp({ create: { width: 500, height: 600, channels: 4, background: "#00000000" } })
  .composite([{ input: await coloredMark([255, 255, 255], 500, 600), gravity: "centre" }])
  .png().toFile(path.join(website, "public/brand/gather-mark.png"));

// Keep the existing canvas, background, and any surrounding copy. Clear the
// union of the former and new logo slots so repeat runs cannot accumulate edges.
async function replaceRaster(root, file, slot, oldSlot, color, transparent = false) {
  const target = path.join(root, file);
  const original = await fs.readFile(target);
  const metadata = await sharp(original).metadata();
  const { data } = await sharp(original).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const [x, y, width, height] = slot;
  const mark = await coloredMark(color, width, height);
  const m = await sharp(mark).metadata();
  const layers = [];
  if (!transparent) {
    const [ox, oy, ow, oh] = oldSlot || slot;
    const ex = Math.min(ox, x), ey = Math.min(oy, y);
    const ew = Math.max(ox + ow, x + width) - ex;
    const eh = Math.max(oy + oh, y + height) - ey;
    layers.push({
      input: await sharp({ create: {
        width: ew, height: eh, channels: 4,
        background: { r: data[0], g: data[1], b: data[2], alpha: 1 },
      } }).png().toBuffer(), left: ex, top: ey,
    });
  }
  layers.push({ input: mark,
    left: Math.round(x + (width - m.width) / 2),
    top: Math.round(y + (height - m.height) / 2),
  });
  let output = transparent
    ? sharp({ create: { width: metadata.width, height: metadata.height, channels: 4, background: "#00000000" } })
    : sharp(original);
  output = output.composite(layers);
  if (!metadata.hasAlpha) output = output.removeAlpha();
  await output.png().toFile(`${target}.new`);
  await fs.rename(`${target}.new`, target);
}
// Browser favicons keep the exact mark on transparency. Native and touch icons retain their opaque tiles.
const browserIcons = {};
for (const [theme, rgb] of [["light", [4, 60, 50]], ["dark", cream]]) {
  browserIcons[theme] = await sharp({ create: { width: 96, height: 96, channels: 4, background: "#00000000" } })
    .composite([{ input: await coloredMark(rgb, 80, 80), gravity: "centre" }]).png().toBuffer();
}
await fs.mkdir(path.join(website, "public/icons"), { recursive: true });
for (const [theme, png] of Object.entries(browserIcons))
  await fs.writeFile(path.join(website, `public/icons/gather-tab-${theme}-v2.png`), png);

await replaceRaster(website, "src/app/icon.png", [74, 74, 365, 365], [100, 65, 312, 382], [250, 246, 236]);
await sharp(path.join(website, "src/app/icon.png")).resize(180, 180, { kernel: "lanczos3" })
  .png().toFile(path.join(website, "src/app/apple-icon.png"));
const png = await sharp(path.join(website, "src/app/icon.png"))
  .resize(48, 48, { kernel: "lanczos3" }).png().toBuffer();
const ico = Buffer.alloc(22);
ico.writeUInt16LE(1, 2); ico.writeUInt16LE(1, 4);
ico[6] = 48; ico[7] = 48;
ico.writeUInt16LE(1, 10); ico.writeUInt16LE(32, 12);
ico.writeUInt32LE(png.length, 14); ico.writeUInt32LE(22, 18);
await fs.writeFile(path.join(website, "src/app/favicon.ico"), Buffer.concat([ico, png]));
await replaceRaster(website, "public/share-gather.png", [70, 125, 350, 350], [95, 120, 305, 360], [4, 60, 50]);

// Optional: regenerate the connected Expo candidate's existing image assets.
// No app source, manifest, configuration, or email markup is changed.
if (app) {
  await fs.mkdir(path.join(app, "public/icons"), { recursive: true });
  for (const [theme, png] of Object.entries(browserIcons))
    await fs.writeFile(path.join(app, `public/icons/gather-tab-${theme}-v2.png`), png);
  await sharp({ create: { width: info.width, height: info.height, channels: 3, background: "#112e22" } })
    .composite([{ input: await sharp(rgba, {
      raw: { width: info.width, height: info.height, channels: 4 },
    }).png().toBuffer() }]).removeAlpha().png()
    .toFile(path.join(app, "assets/gather-brand-source.png"));
  const appCream = [247, 242, 229];
  // Adaptive/monochrome artwork stays inside the conservative safe circle:
  // Android's 66dp safe zone within each 108dp layer; canvas dimensions stay fixed.
  for (const [file, slot, oldSlot, color, transparent] of [
    ["assets/icon.png", [167, 135, 767, 767], [232, 125, 640, 790], appCream],
    ["assets/splash-icon.png", [167, 135, 767, 767], [232, 125, 640, 790], appCream],
    ["assets/favicon.png", [16, 13, 72, 72], [20, 10, 64, 78], appCream],
    ["assets/android-icon-foreground.png", [153, 145, 228, 228], undefined, [247, 241, 231], true],
    ["assets/android-icon-monochrome.png", [129, 122, 194, 194], undefined, [255, 255, 255], true],
    ["public/icons/gather-192.png", [31, 26, 143, 143], [42, 23, 122, 150], appCream],
    ["public/icons/gather-512.png", [84, 68, 383, 383], [115, 62, 320, 394], appCream],
    ["store/google/assets/app-icon.png", [84, 68, 383, 383], [115, 62, 320, 394], appCream],
    ["store/google/assets/feature-graphic.png", [805, 59, 164, 164], [813, 51, 148, 180], [247, 241, 231]],
  ]) await replaceRaster(app, file, slot, oldSlot, color, transparent);
}
console.log({ sourceDimensions: [info.width, info.height], markBounds: { left, top, right, bottom }, appAssetsUpdated: Boolean(app) });
