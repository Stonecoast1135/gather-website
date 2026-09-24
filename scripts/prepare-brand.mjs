import fs from "node:fs/promises";
import sharp from "sharp";
// Deterministic export cleanup, never a generated/redrawn brand mark.
// Keep the warm original pixels, reject white export residue, retain its connected silhouette.
const source = process.argv[2];
if (!source)
  throw new Error("Provide the path to the original Gather graphic.");
const { data, info } = await sharp(source)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });
const w = info.width,
  h = info.height,
  mask = new Uint8Array(w * h);
for (let i = 0; i < mask.length; i++) {
  const p = i * 4;
  mask[i] =
    data[p + 3] && data[p] - data[p + 2] > 8 && data[p + 1] - data[p + 2] > 5
      ? 1
      : 0;
}
const seen = new Uint8Array(mask.length);
let largest = [];
for (let i = 0; i < mask.length; i++) {
  if (!mask[i] || seen[i]) continue;
  const component = [i];
  seen[i] = 1;
  for (let q = 0; q < component.length; q++) {
    const p = component[q],
      x = p % w,
      y = Math.floor(p / w);
    for (const next of [
      x > 0 ? p - 1 : -1,
      x < w - 1 ? p + 1 : -1,
      y > 0 ? p - w : -1,
      y < h - 1 ? p + w : -1,
    ]) {
      if (next >= 0 && mask[next] && !seen[next]) {
        seen[next] = 1;
        component.push(next);
      }
    }
  }
  if (component.length > largest.length) largest = component;
}
const cleaned = Buffer.alloc(w * h * 4);
let left = w,
  top = h,
  right = 0,
  bottom = 0;
for (const i of largest) {
  const p = i * 4;
  cleaned[p] = 255;
  cleaned[p + 1] = 255;
  cleaned[p + 2] = 255;
  cleaned[p + 3] = data[p + 3];
  const x = i % w,
    y = Math.floor(i / w);
  left = Math.min(left, x);
  right = Math.max(right, x);
  top = Math.min(top, y);
  bottom = Math.max(bottom, y);
}
await fs.mkdir("public/brand", { recursive: true });
const mark = await sharp(cleaned, { raw: { width: w, height: h, channels: 4 } })
  .extract({ left, top, width: right - left + 1, height: bottom - top + 1 })
  .resize({ height: 600 })
  .png()
  .toBuffer();
await fs.writeFile("public/brand/gather-mark.png", mark);
async function coloredMark(rgb, height) {
  const { data, info } = await sharp(mark)
    .raw()
    .toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    data[i] = rgb[0];
    data[i + 1] = rgb[1];
    data[i + 2] = rgb[2];
  }
  return sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .resize({ height })
    .png()
    .toBuffer();
}
const creamMark = await coloredMark([250, 246, 236], 365);
await sharp({
  create: { width: 512, height: 512, channels: 4, background: "#043c32" },
})
  .composite([{ input: creamMark, gravity: "centre" }])
  .png()
  .toFile("src/app/icon.png");
await sharp("src/app/icon.png")
  .resize(180)
  .png()
  .toFile("src/app/apple-icon.png");
const png = await sharp("src/app/icon.png").resize(48).png().toBuffer();
const ico = Buffer.alloc(22);
ico.writeUInt16LE(1, 2);
ico.writeUInt16LE(1, 4);
ico[6] = 48;
ico[7] = 48;
ico.writeUInt16LE(1, 10);
ico.writeUInt16LE(32, 12);
ico.writeUInt32LE(png.length, 14);
ico.writeUInt32LE(22, 18);
await fs.writeFile("src/app/favicon.ico", Buffer.concat([ico, png]));
const green = await coloredMark([4, 60, 50], 350);
const text = Buffer.from(
  '<svg width="1200" height="630"><text x="460" y="285" font-family="Georgia" font-weight="bold" font-size="78" fill="#062c2c">Less waste.</text><text x="460" y="374" font-family="Georgia" font-weight="bold" font-size="78" fill="#062c2c">More good.</text><text x="466" y="450" font-family="Arial" font-size="25" fill="#043c32">gatherforward.org</text></svg>',
);
await sharp({
  create: { width: 1200, height: 630, channels: 4, background: "#faf6ec" },
})
  .composite([{ input: green, left: 100, top: 125 }, { input: text }])
  .png()
  .toFile("public/share-gather.png");
console.log({
  sourceDimensions: [w, h],
  markBounds: { left, top, right, bottom },
  keptPixels: largest.length,
});
