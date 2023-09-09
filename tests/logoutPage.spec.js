import { test, expect } from "@playwright/test";

test("logout page", async ({ page }) => {
  await page.goto("/");
  await page.locator('[data-testid="navbar-logout"]').click();
  await expect(page.locator('[data-testid="navbar-login"]')).toBeVisible();

});
