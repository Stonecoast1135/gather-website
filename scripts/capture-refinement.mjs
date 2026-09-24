import { chromium } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
const root = "artifacts/refinement";
await mkdir(root, { recursive: true });
const browser = await chromium.launch();
const manifest = {
  capturedAt: new Date().toISOString(),
  baseURL: "http://127.0.0.1:3001",
  captures: [],
};
async function settled(page) {
  await page.evaluate(() => document.fonts.ready);
  await page.locator("img").evaluateAll(async (imgs) => {
    imgs.forEach((i) => (i.loading = "eager"));
    await Promise.all(imgs.map((i) => i.decode().catch(() => {})));
  });
}
async function save(page, target, name) {
  await settled(page);
  const viewport = page.viewportSize();
  if (target !== page) {
    await page.setViewportSize({
      ...viewport,
      height: Math.max(viewport.height, 1200),
    });
    await target.scrollIntoViewIfNeeded();
  }
  await target.screenshot({
    path: `${root}/${name}`,
    animations: "disabled",
    ...(target === page ? { fullPage: true } : {}),
  });
  manifest.captures.push({
    name,
    viewport: page.viewportSize(),
    url: page.url(),
  });
  console.log(name);
  if (target !== page) await page.setViewportSize(viewport);
}
try {
  const context = await browser.newContext({
    baseURL: manifest.baseURL,
    reducedMotion: "reduce",
  });
  await context.addInitScript(() =>
    localStorage.setItem("gather:launch:student-signups-2026-09", "dismissed"),
  );
  const page = await context.newPage();
  for (const width of [360, 390, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: width < 701 ? 844 : 1000 });
    await page.goto("/");
    await save(page, page, `home-${width}.png`);
    await save(
      page,
      page.locator(".journey-section"),
      `illustrations-${width}.png`,
    );
    for (const role of ["Students", "Businesses", "Organizations"]) {
      await page.getByRole("tab", { name: role, exact: true }).click();
      await save(
        page,
        page.locator(".find-place"),
        `find-${role.toLowerCase()}-${width}.png`,
      );
    }
    await save(page, page.locator(".student-story"), `story-${width}.png`);
  }
  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height: width === 390 ? 844 : 1000 });
    for (const route of ["about", "get-involved", "impact", "how-it-works"]) {
      await page.goto(`/${route}`);
      await save(page, page, `${route}-${width}.png`);
    }
  }
  await context.close();
} finally {
  await browser.close();
  await writeFile(
    `${root}/screenshot-manifest.json`,
    JSON.stringify(manifest, null, 2),
  );
}
