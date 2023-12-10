import { test, expect, chromium, Browser, BrowserContext, Page, firefox } from "@playwright/test";

test.describe("Launch test in MS Edge browser local", () => {
  let browser = Browser;
  let context = BrowserContext;
  let page = Page;
  test.beforeAll(async () => {
    browser = await chromium.launch({
      headless: false,
      channel: "msedge"
    });
    context = await browser.newContext();
    page = await context.newPage();

  });
  test("account page", async ({ page }) => {
    await page.goto("/account");
    const pageTitle = expect(page.locator('[class="title"]'))
    await pageTitle.toContainText('My Account');
    const youTubeLink = expect(page.getByText('link', 'Youtube Link'))
    await youTubeLink.toBeVisible();
  });

});
