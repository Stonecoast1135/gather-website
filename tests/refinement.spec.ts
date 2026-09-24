import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const roles = [
  {
    label: "Students",
    headline: "Make your time count.",
    action: "Join Gather",
    href: "https://my.gatherforward.org",
    photo: "finish-transport",
  },
  {
    label: "Businesses",
    headline: "Give extra food a place to go.",
    action: "Join as a business",
    href: "https://my.gatherforward.org",
    photo: "finish-bakery",
  },
  {
    label: "Organizations",
    headline: "Put good food to use.",
    action: "Contact us",
    href: "mailto:help@gatherforward.org",
    photo: "finish-sorting",
  },
] as const;

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() =>
    localStorage.setItem("gather:launch:student-signups-2026-09", "dismissed"),
  );
});

for (const width of [360, 390, 768, 1024, 1440, 1920]) {
  test(`refinement artwork and all role states fit ${width}px without jumps`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 1000 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    const illustrations = page.locator(".rescue-route__stage > svg");
    const slots = page.locator(".rescue-route__connector-slot");
    await expect(illustrations).toHaveCount(3);
    await expect(slots).toHaveCount(2);
    for (let index = 0; index < 2; index++) {
      const current = (await illustrations.nth(index).boundingBox())!;
      const next = (await illustrations.nth(index + 1).boundingBox())!;
      const slot = (await slots.nth(index).boundingBox())!;
      const arrow = (await slots
        .nth(index)
        .locator("svg:visible")
        .boundingBox())!;
      expect(arrow.x).toBeGreaterThanOrEqual(slot.x);
      expect(arrow.x + arrow.width).toBeLessThanOrEqual(
        slot.x + slot.width + 0.5,
      );
      if (width > 700) {
        expect(arrow.x - current.x - current.width).toBeGreaterThanOrEqual(7);
        expect(next.x - arrow.x - arrow.width).toBeGreaterThanOrEqual(7);
      } else {
        expect(arrow.y - current.y - current.height).toBeGreaterThanOrEqual(7);
        expect(next.y - arrow.y - arrow.height).toBeGreaterThanOrEqual(7);
      }
    }
    const panel = page.getByRole("tabpanel");
    const heights: number[] = [];
    for (const role of roles) {
      const tab = page.getByRole("tab", { name: role.label, exact: true });
      await tab.click();
      await expect(tab).toHaveAttribute("aria-selected", "true");
      await expect(tab).toBeFocused();
      await expect(panel).toHaveAttribute(
        "aria-labelledby",
        (await tab.getAttribute("id")) as string,
      );
      await expect(
        panel.getByRole("heading", { name: role.headline }),
      ).toBeVisible();
      await expect(
        panel.getByRole("link", { name: role.action, exact: true }),
      ).toHaveAttribute("href", role.href);
      await expect(panel.locator("img")).toHaveCount(1);
      await expect(panel.locator("img")).toHaveAttribute(
        "src",
        new RegExp(role.photo),
      );
      await expect(panel.locator("img")).toHaveAttribute("loading", "lazy");
      await expect
        .poll(() =>
          panel
            .locator("img")
            .evaluate(
              (img: HTMLImageElement) => img.complete && img.naturalWidth > 0,
            ),
        )
        .toBe(true);
      for (const other of roles.filter((item) => item.label !== role.label))
        await expect(
          panel.getByText(other.headline, { exact: true }),
        ).toHaveCount(0);
      heights.push((await panel.boundingBox())!.height);
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth),
      ).toBeLessThanOrEqual(width);
      const bounds = (await tab.boundingBox())!;
      expect(bounds.height).toBeGreaterThanOrEqual(44);
      expect(bounds.x).toBeGreaterThanOrEqual(0);
      expect(bounds.x + bounds.width).toBeLessThanOrEqual(width);
    }
    expect(
      Math.max(...heights) - Math.min(...heights),
      `Panel heights ${heights}`,
    ).toBeLessThanOrEqual(1);
    await expect(
      page.getByRole("link", { name: "About Gather", exact: true }),
    ).toHaveAttribute("href", "/about");
  });
}

test("role tabs support roving keyboard focus, wrap, Home/End and one shared panel", async ({
  page,
  browserName,
}) => {
  await page.goto("/");
  const tabs = page.getByRole("tab");
  const selected = page.getByRole("tab", { selected: true });
  await expect(selected).toHaveText("Students");
  await tabs.nth(0).focus();
  for (const [key, label] of [
    ["ArrowLeft", "Organizations"],
    ["ArrowRight", "Students"],
    ["End", "Organizations"],
    ["Home", "Students"],
    ["ArrowRight", "Businesses"],
  ]) {
    await page.keyboard.press(key);
    await expect(selected).toHaveText(label);
    await expect(selected).toBeFocused();
    await expect(page.locator('[role="tab"][tabindex="0"]')).toHaveCount(1);
  }
  // macOS WebKit uses Option-Tab to include links in native keyboard traversal.
  await page.keyboard.press(
    browserName === "webkit" && process.platform === "darwin"
      ? "Alt+Tab"
      : "Tab",
  );
  await expect(
    page
      .getByRole("tabpanel")
      .getByRole("link", { name: "Join as a business", exact: true }),
  ).toBeFocused();
  await expect(page.getByRole("tabpanel")).toHaveCount(1);
  const violations = await new AxeBuilder({ page })
    .include(".find-place")
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(violations.violations).toEqual([]);
});

test("role transitions respect reduced motion and the story link navigates", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.getByRole("tab", { name: "Businesses", exact: true }).click();
  expect(
    await page
      .locator(".place-panel__copy")
      .evaluate((el) => getComputedStyle(el).animationName),
  ).toBe("none");
  await expect(
    page
      .getByRole("tabpanel")
      .getByRole("link", { name: "help@gatherforward.org" }),
  ).toHaveAttribute("href", "mailto:help@gatherforward.org");
  await page.getByRole("link", { name: "About Gather", exact: true }).click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(
    page.locator(".mission-item .gather-illustration--volunteer"),
  ).toHaveCount(1);
});
