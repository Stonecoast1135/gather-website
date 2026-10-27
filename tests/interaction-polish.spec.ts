import { expect, test } from "@playwright/test";
import { launchStorageKey } from "../src/lib/launch-campaign";

test.use({ viewport: { width: 390, height: 844 }, hasTouch: true });

test.beforeEach(async ({ page }) => {
  await page.addInitScript((key) => {
    localStorage.setItem(key, "dismissed");
    sessionStorage.setItem(key, "dismissed");
  }, launchStorageKey);
});

test("touch-opened menu stays clean while keyboard focus remains visible", async ({ page, browserName }) => {
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Open navigation menu" });
  await trigger.tap();
  const menu = page.getByRole("dialog", { name: "Site navigation" });
  const firstLink = menu.getByRole("link", { name: "How It Works", exact: true });
  await expect(menu).toBeVisible();
  await expect(firstLink).toBeFocused();
  await expect(firstLink).toHaveCSS("outline-style", "none");

  await page.keyboard.press("Tab");
  const focused = menu.locator(":focus");
  await expect(focused).toHaveCSS("outline-width", "3px");
  await expect(focused).toHaveCSS("outline-style", "solid");

  await menu.getByRole("button", { name: "Close navigation menu" }).tap();
  await expect(menu).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await expect(trigger).toHaveCSS("outline-style", "none");

  // Option-Tab includes links when macOS WebKit's native full-keyboard setting is off.
  const nativeLinkModifier = browserName === "webkit" && process.platform === "darwin" ? "Alt+" : "";
  await page.keyboard.press(`${nativeLinkModifier}Tab`);
  await expect(trigger).not.toBeFocused();
  await page.keyboard.press(`${nativeLinkModifier}Shift+Tab`);
  await expect(trigger).toBeFocused();
  await expect(trigger).toHaveCSS("outline-width", "3px");
  await expect(trigger).toHaveCSS("outline-style", "solid");

  await trigger.press("Enter");
  await expect(menu).toBeVisible();
  await expect(firstLink).toBeFocused();
  await expect(firstLink).toHaveCSS("outline-width", "3px");
  await page.keyboard.press("Escape");
  await expect(menu).not.toBeVisible();
  await expect(trigger).toBeFocused();
});

test("hero and Instagram retain their targets and use stable SVG arrows", async ({ page }) => {
  await page.goto("/");
  const heroLink = page.locator(".hero-secondary");
  await expect(heroLink).toHaveAttribute("href", "/how-it-works");
  await expect(heroLink.locator("svg")).toHaveCount(1);
  const instagram = page.locator("footer").getByRole("link", { name: "Instagram" });
  await expect(instagram).toHaveAttribute("href", "https://www.instagram.com/gather.forward/");
  expect(await instagram.getAttribute("target")).toBeNull();
  await expect(instagram.locator("svg")).toHaveAttribute("aria-hidden", "true");
  await expect(instagram).toHaveText("Instagram");

  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(heroLink.locator("svg")).toHaveCSS("transition-duration", "0s");
  await heroLink.click();
  await expect(page).toHaveURL(/\/how-it-works$/);
});
