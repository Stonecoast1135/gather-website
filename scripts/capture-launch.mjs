import { chromium } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? "http://127.0.0.1:3001";
const root = path.resolve(process.env.CAPTURE_DIR ?? "artifacts/finishing");
const campaignKey = "gather:launch:student-signups-2026-09";
const pages = [
  ["home", "/"],
  ["how-it-works", "/how-it-works"],
  ["get-involved", "/get-involved"],
  ["impact", "/impact"],
  ["about", "/about"],
];
await mkdir(root, { recursive: true });
const browser = await chromium.launch();
const evidence = {
  baseURL,
  capturedAt: new Date().toISOString(),
  browser: browser.version(),
  engine: "Chromium",
  screenshots: [],
  limitations: [
    "Browser captures do not constitute a physical-device Safari test.",
  ],
};

async function settled(page) {
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(async () => {
    const images = Array.from(document.images);
    images.forEach((image) => {
      image.loading = "eager";
    });
    await Promise.all(images.map((image) => image.decode().catch(() => {})));
  });
  await page.waitForTimeout(150);
}
async function screenshot(page, name, options = {}) {
  await settled(page);
  const target = path.join(root, name);
  await page.screenshot({
    path: target,
    fullPage: true,
    animations: "disabled",
    ...options,
  });
  evidence.screenshots.push({
    name,
    url: page.url(),
    viewport: page.viewportSize(),
  });
  await writeFile(
    path.join(root, "screenshot-manifest.json"),
    JSON.stringify(evidence, null, 2),
  );
  process.stdout.write(`${name}\n`);
}

try {
  for (const [mode, viewport] of [
    ["desktop", { width: 1440, height: 1000 }],
    ["mobile", { width: 390, height: 844 }],
    ["tablet", { width: 768, height: 1024 }],
    ["wide", { width: 1920, height: 1080 }],
  ]) {
    const context = await browser.newContext({
      baseURL,
      viewport,
      deviceScaleFactor: 1,
      reducedMotion: "reduce",
    });
    await context.addInitScript((key) => {
      localStorage.setItem(key, "dismissed");
      sessionStorage.setItem(key, "dismissed");
    }, campaignKey);
    const page = await context.newPage();
    for (const [name, route] of pages) {
      await page.goto(route, { waitUntil: "load" });
      await screenshot(page, `${name}-${mode}.png`);
    }
    if (mode === "mobile") {
      await page.goto("/");
      await page
        .getByRole("button", { name: "Open navigation menu", exact: true })
        .click();
      await screenshot(page, "mobile-menu.png", { fullPage: false });
    }
    await context.close();
  }
  for (const [mode, viewport] of [
    ["desktop", { width: 1440, height: 1000 }],
    ["mobile", { width: 390, height: 844 }],
  ]) {
    const context = await browser.newContext({
      baseURL,
      viewport,
      reducedMotion: "reduce",
    });
    const page = await context.newPage();
    await page.goto("/");
    await page
      .getByRole("dialog", { name: "Gather just launched!" })
      .waitFor({ state: "visible", timeout: 10000 });
    await screenshot(page, `launch-popup-${mode}.png`, { fullPage: false });
    await context.close();
  }
  const responsive = await browser.newContext({
    baseURL,
    reducedMotion: "reduce",
  });
  await responsive.addInitScript((key) => {
    localStorage.setItem(key, "dismissed");
  }, campaignKey);
  const page = await responsive.newPage();
  for (const viewport of [
    { width: 360, height: 800 },
    { width: 430, height: 932 },
    { width: 768, height: 1024 },
    { width: 1024, height: 768 },
    { width: 1920, height: 1080 },
    { width: 844, height: 390 },
  ]) {
    await page.setViewportSize(viewport);
    await page.goto("/", { waitUntil: "load" });
    await screenshot(page, `home-${viewport.width}x${viewport.height}.png`);
  }
  await responsive.close();
  await writeFile(
    path.join(root, "screenshot-manifest.json"),
    JSON.stringify(evidence, null, 2),
  );
} finally {
  await writeFile(
    path.join(root, "screenshot-manifest.json"),
    JSON.stringify(evidence, null, 2),
  );
  await browser.close();
}
