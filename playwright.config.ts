import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 45_000,
  expect: { timeout: 8_000 },
  fullyParallel: true,
  workers: process.env.CI ? 2 : 2,
  retries: 0,
  forbidOnly: Boolean(process.env.CI),
  outputDir: "artifacts/finishing/test-results",
  reporter: [
    ["list"],
    ["html", { outputFolder: "artifacts/finishing/report", open: "never" }],
    ["json", { outputFile: "artifacts/finishing/test-results.json" }],
  ],
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? "http://127.0.0.1:3001",
    viewport: { width: 1440, height: 1000 },
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    actionTimeout: 8_000,
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox", use: { ...devices["Desktop Firefox"] } },
    // Playwright WebKit is an engine-level emulation, not a physical Safari device.
    { name: "webkit", use: { ...devices["Desktop Safari"] } },
  ],
});
