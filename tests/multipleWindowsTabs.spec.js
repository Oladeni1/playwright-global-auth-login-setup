import { test, expect } from "@playwright/test";

test("handling multiple windows tabs", async ({ browser }) => {
    const context = await browser.newContext()

    const page = await context.newPage()

    await page.goto("https://freelance-learn-automation.vercel.app/login");

    const [newPage] = await Promise.all
        (
            [
                context.waitForEvent("page"),
                page.locator("(//a[contains(@href, 'facebook')])[1]").click()

            ]
        )
    await newPage.waitForTimeout(1000)

    await expect(newPage.url()).toContain('https://www.facebook.com/groups/256655817858291') //Assert url of new page (newTab)

    await expect(newPage.locator('//*[@id="login_popup_cta_form"]/div/div[1]/span/span')).toContainText('See more on Facebook') //Assert header text in the new page (newtab)

    await newPage.locator("(//input[@name='email'])[2]").fill('07427517555')

    await newPage.waitForTimeout(1000)

    await newPage.close() //Closing the new tab

    await expect(page.url()).toContain('https://freelance-learn-automation.vercel.app/login') //Assert url of original page

    await page.locator('#email1').fill('test@yahoo.com')

    await expect (page.locator('#login_container > div > h2')).toContainText('Connect with us')//Assert connect with us text in the original page

});