## playwright-global-auth-login-setup
Playwright automation with global auth login implementation

## After cloning this framework, run the following command in the terminal
Run > npm install
Run > npm ci
Run > npx playwright install

## To configure allure report:
Allure Report Installations:

Run > npm i -D @playwright/test allure-playwright
Run > npm install -g allure-commandline --save-dev

In the playwright.config, add below report code:

reporter:[['list'],
['html'],
['junit', { outputFile: 'results.xml'}],
['json', { outputFile: 'results.json'}],
['allure-playwright', {outputFolder: 'allure-results'}]
],

To generate allure report:

Run > allure generate allure-results -o allure-report --clean

To open allur report:

Run > allure open allure-report

In the package.jons, add this command under the scripts (This will execute tests, generate report and open report):

"runTestWithAllureReport": "npx playwright test --reporter=line,allure-playwright && allure generate allure-results -o allure-report --clean && allure open allure-report"
