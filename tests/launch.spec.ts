import { test, expect, type Page, type Locator } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { destinations, primaryLinks } from "../src/lib/site-config";
import { formatImpact, getImpactTotals, parseImpact } from "../src/lib/impact";
import { launchStorageKey as campaignKey } from "../src/lib/launch-campaign";

const routes = [
  { path: "/", heading: /Less waste\.\s*More good\./ },
  { path: "/how-it-works", heading: "How It Works" },
  { path: "/get-involved", heading: "Get Involved" },
  { path: "/impact", heading: "Our measured impact." },
  { path: "/about", heading: /Built by students\.\s*For our community\./ },
] as const;

async function dismissCampaignBeforeLoad(page: Page) {
  await page.addInitScript((key) => {
    try {
      localStorage.setItem(key, "dismissed");
    } catch {}
    try {
      sessionStorage.setItem(key, "dismissed");
    } catch {}
  }, campaignKey);
}

async function expectNoOverflow(page: Page) {
  const size = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    content: Math.max(
      document.documentElement.scrollWidth,
      document.body.scrollWidth,
    ),
  }));
  expect(
    size.content,
    `Horizontal overflow on ${page.url()}`,
  ).toBeLessThanOrEqual(size.viewport + 1);
}

async function expectFocusTrapped(page: Page, dialog: Locator) {
  for (let index = 0; index < 12; index++) {
    await page.keyboard.press(index < 6 ? "Tab" : "Shift+Tab");
    expect(
      await dialog.evaluate((element) =>
        element.contains(document.activeElement),
      ),
    ).toBe(true);
  }
}

test.describe("public destinations and aggregate boundary", () => {
  test("published links are centralized and use the approved app entry", () => {
    expect(destinations).toEqual({
      signup: "https://my.gatherforward.org",
      email: "mailto:help@gatherforward.org",
      instagram: "https://www.instagram.com/gather.forward/",
      privacy: "https://my.gatherforward.org/privacy",
      terms: "https://my.gatherforward.org/terms",
    });
    expect(primaryLinks.map((link) => link.href)).toEqual([
      "/how-it-works",
      "/get-involved",
      "/impact",
      "/about",
    ]);
  });

  test("unavailable, measured zero and source failure remain distinct", async () => {
    const missing = {
      foodRescuedLb: null,
      rescuesCompleted: null,
      volunteerHours: null,
    };
    expect(await getImpactTotals()).toEqual(missing);
    expect(parseImpact(null)).toEqual(missing);
    expect(
      await getImpactTotals(async () => {
        throw new Error("isolated source failure");
      }),
    ).toEqual(missing);
    const zero = await getImpactTotals(async () => ({
      foodRescuedLb: 0,
      rescuesCompleted: 0,
      volunteerHours: 0,
    }));
    expect(zero).toEqual({
      foodRescuedLb: 0,
      rescuesCompleted: 0,
      volunteerHours: 0,
    });
    expect(Object.values(zero).map(formatImpact)).toEqual(["0", "0", "0"]);
    expect(Object.values(missing).map(formatImpact)).toEqual([
      "--",
      "--",
      "--",
    ]);
    expect(
      parseImpact({
        foodRescuedLb: 3,
        rescuesCompleted: 2,
        volunteerHours: 1,
        volunteerEmail: "test@example.invalid",
      }),
    ).toEqual(missing);
    expect(
      parseImpact({
        foodRescuedLb: -1,
        rescuesCompleted: 1.5,
        volunteerHours: Infinity,
      }),
    ).toEqual(missing);
  });
});

test.describe("pages and navigation", () => {
  test.beforeEach(async ({ page }) => dismissCampaignBeforeLoad(page));

  for (const route of routes) {
    test(`${route.path} loads directly, refreshes and exposes correct navigation`, async ({
      page,
    }) => {
      const errors: string[] = [];
      page.on("pageerror", (error) => errors.push(error.message));
      page.on("console", (message) => {
        if (message.type() === "error") errors.push(message.text());
      });
      const response = await page.goto(route.path);
      expect(response?.ok()).toBe(true);
      await expect(
        page.getByRole("heading", { level: 1, name: route.heading }),
      ).toBeVisible();
      await expect(page.locator("main")).toHaveCount(1);
      await expect(page.locator("h1")).toHaveCount(1);
      if (route.path !== "/") {
        await expect(
          page
            .locator("header")
            .getByRole("link", {
              name: primaryLinks.find((link) => link.href === route.path)!
                .label,
              exact: true,
            }),
        ).toHaveAttribute("aria-current", "page");
      }
      const signupLinks = page.getByRole("link", {
        name: /^Join (Gather|as a business)$/,
      });
      expect(await signupLinks.count()).toBeGreaterThan(0);
      for (const link of await signupLinks.all())
        await expect(link).toHaveAttribute("href", destinations.signup);
      const canonical = new URL(
        (await page.locator('link[rel="canonical"]').getAttribute("href"))!,
      );
      expect(canonical.origin).toBe("https://www.gatherforward.org");
      expect(canonical.pathname).toBe(route.path);
      await page.reload();
      await expect(
        page.getByRole("heading", { level: 1, name: route.heading }),
      ).toBeVisible();
      await page.locator("img").evaluateAll((images) =>
        images.forEach((image) => {
          (image as HTMLImageElement).loading = "eager";
        }),
      );
      await expect
        .poll(() =>
          page
            .locator("img")
            .evaluateAll((images) =>
              images.every(
                (image) =>
                  (image as HTMLImageElement).complete &&
                  (image as HTMLImageElement).naturalWidth > 0,
              ),
            ),
        )
        .toBe(true);
      await expectNoOverflow(page);
      expect(errors).toEqual([]);
    });
  }

  test("desktop navigation and browser Back preserve the page identity", async ({
    page,
  }) => {
    await page.goto("/");
    await page
      .locator("header")
      .getByRole("link", { name: "Get Involved", exact: true })
      .click();
    await expect(page).toHaveURL(/\/get-involved$/);
    await page
      .locator("header")
      .getByRole("link", { name: "Impact", exact: true })
      .click();
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Our measured impact.",
    );
    await page.goBack();
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Get Involved",
    );
  });

  test("joining follows the app directly in the same tab", async ({ page }) => {
    await page.route("https://my.gatherforward.org/**", (route) =>
      route.fulfill({
        contentType: "text/html",
        body: "<title>Isolated destination check</title>",
      }),
    );
    await page.goto("/");
    await page
      .locator("main")
      .getByRole("link", { name: "Join Gather", exact: true })
      .first()
      .click();
    await expect(page).toHaveURL("https://my.gatherforward.org/");
  });

  test("mobile menu traps focus, closes with Escape and follows a route", async ({
    page,
  }) => {
    test.setTimeout(90_000); // Cross-engine focus traversal includes browser startup.
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    const trigger = page.getByRole("button", {
      name: "Open navigation menu",
      exact: true,
    });
    await trigger.click();
    const menu = page.getByRole("dialog", { name: /menu|navigation/i });
    await expect(menu).toBeVisible();
    await expectFocusTrapped(page, menu);
    await page.keyboard.press("Escape");
    await expect(menu).not.toBeVisible();
    await expect(trigger).toBeFocused();
    await trigger.click();
    await menu.getByRole("link", { name: "About", exact: true }).click();
    await expect(page).toHaveURL(/\/about$/);
    await expect(menu).not.toBeVisible();
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      /Built by students/,
    );
    expect(await page.evaluate(() => document.body.style.overflow)).not.toBe(
      "hidden",
    );
  });

  test("legacy role links arrive at useful anchored sections", async ({
    page,
  }) => {
    for (const [legacy, anchor] of [
      ["volunteers", "students"],
      ["businesses", "businesses"],
      ["organizations", "organizations"],
      ["schools", "schools"],
    ]) {
      await page.goto(`/${legacy}`);
      await expect(page).toHaveURL(new RegExp(`/get-involved#${anchor}$`));
      await expect(page.locator(`#${anchor}`)).toBeVisible();
    }
  });

  test("app and policy redirects retain the published destinations", async ({
    request,
  }) => {
    for (const [path, target] of [
      ["/download", destinations.signup],
      ["/privacy", destinations.privacy],
      ["/terms", destinations.terms],
    ]) {
      const response = await request.get(path, { maxRedirects: 0 });
      expect([307, 308]).toContain(response.status());
      expect(response.headers().location?.replace(/\/$/, "")).toBe(target);
    }
  });

  test("footer, contact and support expose working contact and policy links", async ({
    page,
  }) => {
    for (const path of ["/", "/contact", "/support"]) {
      await page.goto(path);
      const footer = page.locator("footer");
      await expect(
        footer.getByRole("link", { name: /privacy/i }),
      ).toHaveAttribute("href", destinations.privacy);
      await expect(
        footer.getByRole("link", { name: /terms/i }),
      ).toHaveAttribute("href", destinations.terms);
      await expect(
        footer.getByRole("link", { name: /instagram/i }),
      ).toHaveAttribute("href", destinations.instagram);
      expect(
        await page.locator(`a[href="${destinations.email}"]`).count(),
      ).toBeGreaterThan(0);
      if (path !== "/") {
        await expect(
          page.locator("main").getByRole("heading", { level: 1 }),
        ).toBeVisible();
        expect(
          (await page.locator("main").innerText()).split(/\s+/).length,
        ).toBeLessThan(250);
      }
    }
  });

  test("FAQs disclose concise answers by keyboard and impact starts unavailable", async ({
    page,
  }) => {
    await page.goto("/how-it-works");
    const question = page
      .locator("summary")
      .filter({ hasText: "How do service hours work?" });
    await question.focus();
    await page.keyboard.press("Enter");
    await expect(
      page.getByText(/Your school or program decides/),
    ).toBeVisible();
    await page.keyboard.press("Enter");
    await expect(
      page.getByText(/Your school or program decides/),
    ).not.toBeVisible();
    await page.goto("/impact");
    await expect(page.locator("dd")).toHaveText(["--", "--", "--"]);
    await page.getByText("About these numbers", { exact: true }).click();
    await expect(
      page.getByText(/Food rescued is measured in pounds/),
    ).toBeVisible();
  });

  test("preview metadata is not indexable and the sitemap omits retired pages", async ({
    page,
    request,
  }) => {
    await page.goto("/");
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      "content",
      /noindex/,
    );
    const sitemap = await request.get("/sitemap.xml");
    expect(sitemap.ok()).toBe(true);
    const xml = await sitemap.text();
    for (const route of routes)
      expect(xml).toContain(
        `https://www.gatherforward.org${route.path === "/" ? "" : route.path}`,
      );
    for (const retired of [
      "volunteers",
      "businesses",
      "organizations",
      "schools",
      "download",
    ])
      expect(xml).not.toContain(`gatherforward.org/${retired}<`);
  });
});

test.describe("launch announcement", () => {
  test("waits approximately four seconds, traps focus and remembers dismissal", async ({
    page,
  }) => {
    test.setTimeout(90_000); // Includes clock checks, axe, navigation and persistence.
    const clockStart = new Date("2026-09-24T05:00:00Z");
    await page.clock.install({ time: clockStart });
    await page.clock.pauseAt(new Date(clockStart.getTime() + 1000));
    await page.goto("/");
    // Let hydration finish without consuming the visitor's controlled elapsed time.
    await page.waitForTimeout(300);
    const returnTarget = page
      .locator("header")
      .getByRole("link", { name: "Impact", exact: true });
    await returnTarget.focus();
    const popup = page.getByRole("dialog", { name: "Gather just launched!" });
    await page.clock.runFor(2200);
    await expect(popup).not.toBeVisible();
    await page.clock.runFor(2000);
    await expect(popup).toBeVisible({ timeout: 5000 });
    await page.clock.resume();
    await expect(
      popup.getByRole("link", { name: "Join Gather", exact: true }),
    ).toHaveAttribute("href", destinations.signup);
    const violations = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(violations.violations).toEqual([]);
    await expectFocusTrapped(page, popup);
    await page.keyboard.press("Escape");
    await expect(popup).not.toBeVisible();
    await expect(returnTarget).toBeFocused();
    await returnTarget.click();
    await page.waitForTimeout(4300);
    await expect(popup).not.toBeVisible();
    await page.reload();
    await page.waitForTimeout(4300);
    await expect(popup).not.toBeVisible();
  });

  test("Keep exploring closes the announcement on a narrow short screen", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 360, height: 568 });
    await page.goto("/");
    const popup = page.getByRole("dialog", { name: "Gather just launched!" });
    await expect(popup).toBeVisible({ timeout: 7000 });
    const box = await popup.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.x).toBeGreaterThanOrEqual(0);
    expect(box!.y).toBeGreaterThanOrEqual(0);
    expect(box!.x + box!.width).toBeLessThanOrEqual(360);
    expect(box!.y + box!.height).toBeLessThanOrEqual(568);
    await popup
      .getByRole("button", { name: "Keep exploring", exact: true })
      .click();
    await expect(popup).not.toBeVisible();
    await expectNoOverflow(page);
  });

  test("does not interrupt an open mobile menu", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    await page
      .getByRole("button", { name: "Open navigation menu", exact: true })
      .click();
    await page.waitForTimeout(4600);
    const popup = page.getByRole("dialog", { name: "Gather just launched!" });
    await expect(popup).not.toBeVisible();
    await page.keyboard.press("Escape");
    await expect(popup).toBeVisible({ timeout: 7000 });
  });

  test("defers while a visitor is entering text", async ({ page }) => {
    await page.goto("/");
    // Isolated browser fixture only: no form, route or input is added to production.
    await page.evaluate(() => {
      const input = document.createElement("input");
      input.setAttribute("aria-label", "QA active text input");
      input.style.cssText = "position:fixed;top:120px;left:20px;z-index:999";
      document.body.append(input);
      input.focus();
    });
    await page
      .getByRole("textbox", { name: "QA active text input" })
      .fill("Still typing");
    await page.waitForTimeout(4600);
    const popup = page.getByRole("dialog", { name: "Gather just launched!" });
    await expect(popup).not.toBeVisible();
    await page
      .getByRole("textbox", { name: "QA active text input" })
      .evaluate((element) => element.remove());
    await expect(popup).toBeVisible({ timeout: 7000 });
  });

  test("unavailable storage cannot crash the site or cause repeated modal loops", async ({
    page,
  }) => {
    await page.addInitScript(() => {
      for (const storage of ["localStorage", "sessionStorage"]) {
        Object.defineProperty(window, storage, {
          configurable: true,
          get() {
            throw new DOMException("QA blocked storage", "SecurityError");
          },
        });
      }
    });
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto("/");
    const popup = page.getByRole("dialog", { name: "Gather just launched!" });
    await page.waitForTimeout(4600);
    if (await popup.isVisible())
      await popup
        .getByRole("button", { name: "Keep exploring", exact: true })
        .click();
    await page
      .locator("header")
      .getByRole("link", { name: "About", exact: true })
      .click();
    await page.waitForTimeout(4600);
    await expect(popup).not.toBeVisible();
    await page.reload();
    await page.waitForTimeout(4600);
    await expect(popup).not.toBeVisible();
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      /Built by students/,
    );
    expect(errors).toEqual([]);
  });
});

test.describe("responsive and accessibility review", () => {
  test.beforeEach(async ({ page }) => dismissCampaignBeforeLoad(page));

  for (const viewport of [
    { width: 360, height: 800 },
    { width: 390, height: 844 },
    { width: 430, height: 932 },
    { width: 768, height: 1024 },
    { width: 1024, height: 768 },
    { width: 1440, height: 1000 },
    { width: 1920, height: 1080 },
    { width: 844, height: 390 },
    { width: 1024, height: 600 },
  ]) {
    test(`all five pages fit ${viewport.width} × ${viewport.height}`, async ({
      page,
    }) => {
      await page.setViewportSize(viewport);
      for (const route of routes) {
        await page.goto(route.path);
        await expect(
          page.getByRole("heading", { level: 1, name: route.heading }),
        ).toBeVisible();
        await expectNoOverflow(page);
      }
    });
  }

  for (const width of [390, 1440]) {
    for (const route of routes) {
      test(`${route.path} has no automatic WCAG AA violations at ${width}px`, async ({
        page,
      }) => {
        await page.setViewportSize({ width, height: 1000 });
        await page.goto(route.path);
        await page.emulateMedia({ reducedMotion: "reduce" });
        const results = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
          .analyze();
        expect(results.violations).toEqual([]);
      });
    }
  }

  test("200% zoom reflow-equivalent viewport preserves content and keyboard focus", async ({
    page,
  }) => {
    // 1440 × 1000 at 200% browser zoom provides 720 × 500 CSS pixels.
    // This verifies reflow; native browser-chrome zoom is reviewed separately.
    await page.setViewportSize({ width: 720, height: 500 });
    for (const route of routes) {
      await page.goto(route.path);
      await expectNoOverflow(page);
      await expect(
        page.getByRole("heading", { level: 1, name: route.heading }),
      ).toBeVisible();
      await page.keyboard.press("Tab");
      // WebKit on macOS may keep Tab in browser chrome when full keyboard
      // navigation is disabled. Establish a known control's keyboard focus.
      const focusTarget = page.getByRole("button", {
        name: "Open navigation menu",
        exact: true,
      });
      await focusTarget.focus();
      await expect(focusTarget).toBeFocused();
      const focus = await page.evaluate(() => {
        const style = getComputedStyle(document.activeElement!);
        return {
          outline: style.outlineStyle,
          width: parseFloat(style.outlineWidth),
          shadow: style.boxShadow,
        };
      });
      expect(
        (focus.outline !== "none" && focus.width > 0) ||
          focus.shadow !== "none",
      ).toBe(true);
    }
  });

  test("reduced motion retains usable menu and accordion controls", async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/how-it-works");
    await page.getByText("How do I get started?", { exact: true }).click();
    await expect(page.getByText(/Accounts are available/)).toBeVisible();
    await page
      .getByRole("button", { name: "Open navigation menu", exact: true })
      .click();
    await expect(
      page.getByRole("dialog", { name: /menu|navigation/i }),
    ).toBeVisible();
    const violations = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(violations.violations).toEqual([]);
    await page.keyboard.press("Escape");
    await expectNoOverflow(page);
  });

  test("the mobile primary action is present before scrolling", async ({
    page,
  }) => {
    for (const width of [360, 390, 430]) {
      await page.setViewportSize({ width, height: 800 });
      await page.goto("/");
      const action = page
        .locator("main")
        .getByRole("link", { name: "Join Gather", exact: true })
        .first();
      await expect(action).toBeVisible();
      const bounds = await action.boundingBox();
      expect(bounds!.y).toBeGreaterThanOrEqual(0);
      expect(bounds!.y + bounds!.height).toBeLessThanOrEqual(800);
    }
  });

  test("essential page content and disclosures remain usable without JavaScript", async ({
    browser,
  }) => {
    const context = await browser.newContext({
      javaScriptEnabled: false,
      baseURL: process.env.PLAYWRIGHT_BASE_URL ?? "http://127.0.0.1:3001",
      viewport: { width: 1440, height: 1000 },
    });
    const page = await context.newPage();
    try {
      for (const route of routes) {
        await page.goto(route.path);
        await expect(
          page.getByRole("heading", { level: 1, name: route.heading }),
        ).toBeVisible();
        await expect(
          page
            .locator("header")
            .getByRole("link", { name: "Join Gather", exact: true }),
        ).toBeVisible();
      }
      await page.goto("/how-it-works");
      await page
        .locator("summary")
        .filter({ hasText: "How do service hours work?" })
        .click();
      await expect(
        page.getByText(/Your school or program decides/),
      ).toBeVisible();
    } finally {
      await context.close();
    }
  });
});
