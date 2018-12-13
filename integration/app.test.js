const puppeteer = require('puppeteer');
const { port } = require('../jest-puppeteer.config').server;

let browser;
let page;

beforeEach(async () => {
  browser = await puppeteer.launch({
    dumpio: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  page = await browser.newPage();
  await page.emulate({
    viewport: {
      width: 1920,
      height: 1080,
    },
    userAgent: 'Puppeteer',
  });
  await page.goto(`http://localhost:${port}/`);
});

afterEach(async () => {
  await page.close();
  await browser.close();
});

test('Setting repository and enabling some services', async () => {
  await expect(page).toMatch('Github Badge Generator');

  // Set repository
  await page.focus('input[type="text"]');
  await page.keyboard.type('amercier/badge-generator', {
    delay: 20,
  });

  // Select services
  await page.click('label[title="Travis CI"]');
  await page.click('label[title="Codecov"]');
  await page.click('label[title="David DM"]');
  await page.click('label[title="David DM (dev)"]');

  const output = await page.evaluate(
    () => document.querySelector('pre').innerText,
  );
  expect(output).toMatchSnapshot();
});
