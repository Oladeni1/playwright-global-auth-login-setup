import { test, expect } from "@playwright/test";

test("account page", async ({ page }) => {
  await page.goto("/account");
  const pageTitle = expect(page.locator('[class="title"]'))
  await pageTitle.toContainText('My Account');
  const youTubeLink = expect(page.getByText('link', 'Youtube Link'))
  await youTubeLink.toBeVisible();
});
