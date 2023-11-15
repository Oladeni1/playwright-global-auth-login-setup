import { test, expect } from "@playwright/test";

test("test - get entire row of Cupcake from table from text in a cell", async ({ page }) => {

    await page.goto("https://letcode.in/table");

    const row = page.locator('tr:has-text("Cupcake")');
    const rowTexts = await row.locator(':scope').allInnerTexts()
    await rowTexts.forEach((text) => {
        console.log(text)
    })

});
test("test - get entire row Frozen yogurt of from table from text in a cell", async ({ page }) => {

    await page.goto("https://letcode.in/table");

    const row = page.locator('tr:has-text("Frozen yogurt")');
    const rowTexts = await row.locator(':scope').allInnerTexts()
    await rowTexts.forEach((text) => {
        console.log(text)
    })
});
test("test - get text from a specific column from a table in Playwright ", async ({ page }) => {

    await page.goto("https://ant.design/components/table/");

    const row = page.locator('tbody.ant-table-tbody tr[data-row-key="3"]')
    const rowTexts = await row.locator(':scope').allInnerTexts()
    await rowTexts.forEach((text) => {
        console.log(text)
    })
});

test("test - get simple web table", async ({ page }) => {

    await page.goto("https://letcode.in/table");
    const table = page.locator("#simpletable");
    const headers = table.locator("thead");
    console.log(await headers.allTextContents());

    const rows = table.locator("tbody tr");
    console.log("Rows count: " + await rows.count());
    const cols = rows.first().locator("td")
    console.log("Cols count: " + await cols.count());

    //Method 1: Stabdard

    /*for (let i = 0; i < await rows.count(); i++) {
        const row = rows.nth(i);
        const tds = row.locator("td");
        for (let j = 0; j < await tds.count(); j++) {
            if (await tds.nth(j).textContent() == "Raj") {
                console.log(await tds.nth(2).textContent());
                await tds.last().locator("#second").isVisible(); 
            }
        }
    }*/

    //method 2: Playwright

    await checkInput(rows, page, "Raj");

})

async function checkInput(rows, page, name) {
    const nameMatch = rows.filter({
        has: page.locator("td"),
        hasText: name
    });
    await nameMatch.locator('[wfd-id="id1"]').isVisible();
}
