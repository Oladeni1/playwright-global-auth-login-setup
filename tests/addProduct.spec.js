import { test, expect } from "@playwright/test";

test("add product", async ({ page }) => {
  await page.goto("/add-product");
  await expect(page.locator('//body/div/div/div/div/h1')).toBeVisible();
  await page.locator('#name').fill('Hand Bag');
  await page.locator('#price').fill('50');
  await page.locator('#dateStocked').type('08-09-2023');
  await page.getByText('Submit').click();
  await expect(page.locator('[data-testid="reset-filter-button"]')).toBeVisible();
  
});
