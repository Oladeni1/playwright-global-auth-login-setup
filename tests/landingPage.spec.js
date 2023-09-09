import { test, expect } from "@playwright/test";

test("landing page", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('[data-testid="navbar-logout"]')).toBeVisible();
});
