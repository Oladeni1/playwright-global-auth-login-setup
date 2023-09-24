import { test, expect } from "@playwright/test";

test("practice page", async ({ page }) => {
  await page.goto("/practice");
  const headerText = expect(page.locator('//*[@id="root"]/div/div/div/p'))
  await headerText.toBeVisible();
  await headerText.toContainText('Note to user: This page is likely to be updated')
});
