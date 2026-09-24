import { chromium, expect } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";

const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? "http://127.0.0.1:3001";
const evidence = { baseURL, checkedAt: new Date().toISOString(), checks: [] };
const browser = await chromium.launch();
try {
  for (const reducedMotion of ["no-preference", "reduce"]) {
    const context = await browser.newContext({
      baseURL,
      viewport: { width: 1440, height: 1000 },
      reducedMotion,
    });
    await context.addInitScript(() =>
      localStorage.setItem(
        "gather:launch:student-signups-2026-09",
        "dismissed",
      ),
    );
    const page = await context.newPage();
    for (const [route, section, animated, expected] of [
      [
        "/",
        ".journey-section",
        ".rescue-route__connector-draw",
        "gather-route-draw",
      ],
      ["/", ".student-section", ".student-collage__main img", "photo-unfold"],
      ["/how-it-works", ".stages", ".process-rail .route-draw", "route-draw"],
      [
        "/about",
        ".mission-section",
        ".gather-illustration__foreground",
        "gather-graphic-arrive",
      ],
    ]) {
      await page.goto(route);
      await page.locator(section).scrollIntoViewIfNeeded();
      if (reducedMotion === "no-preference")
        await expect(page.locator(section)).toHaveClass(/is-revealed/);
      const names = await page
        .locator(`${section} ${animated}`)
        .evaluateAll((elements) =>
          elements.map((element) => getComputedStyle(element).animationName),
        );
      expect(names.length).toBeGreaterThan(0);
      expect(
        names.every(
          (name) => name === (reducedMotion === "reduce" ? "none" : expected),
        ),
      ).toBe(true);
      expect(
        await page
          .locator(section)
          .evaluate((element) => getComputedStyle(element).opacity),
      ).toBe("1");
      await expect(
        page.locator(section).getByRole("heading").first(),
      ).toBeVisible();
      evidence.checks.push({
        route,
        section,
        reducedMotion,
        names,
        contentOpacity: 1,
        passed: true,
      });
    }
    await context.close();
  }
  // Regression for the mobile collage: illustration must never cover copy or CTA.
  const context = await browser.newContext({
    baseURL,
    reducedMotion: "reduce",
  });
  await context.addInitScript(() =>
    localStorage.setItem("gather:launch:student-signups-2026-09", "dismissed"),
  );
  const page = await context.newPage();
  for (const width of [360, 390, 430]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/");
    const graphic = await page
      .locator(".student-service-graphic")
      .boundingBox();
    for (const selector of ["h2", "p", ".button"]) {
      const box = await page
        .locator(`.student-section__copy ${selector}`)
        .boundingBox();
      expect(Boolean(graphic && box)).toBe(true);
      const intersects =
        graphic.x < box.x + box.width &&
        graphic.x + graphic.width > box.x &&
        graphic.y < box.y + box.height &&
        graphic.y + graphic.height > box.y;
      expect(
        intersects,
        `Service graphic overlaps ${selector} at ${width}px`,
      ).toBe(false);
    }
    evidence.checks.push({ width, mobileCollageClear: true, passed: true });
  }
  await context.close();
} finally {
  await browser.close();
  await mkdir("artifacts/finishing", { recursive: true });
  await writeFile(
    "artifacts/finishing/motion-results.json",
    JSON.stringify(evidence, null, 2),
  );
}
console.log(
  `${evidence.checks.length} motion and mobile composition checks passed.`,
);
