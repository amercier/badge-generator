const puppeteer = require('puppeteer');
const { port } = require('../jest-puppeteer.config').server;

describe('App', () => {
  let browser;
  let page;

  /**
   * Get output code generated by the app.
   *
   * @returns {Promise<string>} A promise that resolves to the generated code.
   */
  function getOutputCode() {
    return page.evaluate(() => document.querySelector('pre').innerText);
  }

  /* eslint-disable jest/no-hooks */

  beforeAll(async () => {
    // Prevent "Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout"
    // error in Travis CI and potentially other CI environments.
    jest.setTimeout(30000);

    browser = await puppeteer.launch({
      dumpio: true,
    });
  });

  afterAll(() => browser.close());

  beforeEach(async () => {
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

  afterEach(() => page.close());

  /* eslint-enable jest/no-hooks */

  it('setting repository and enabling some services', async () => {
    // Basic test
    await expect(page).toMatch('Github Badge Generator');

    // Set repository
    await page.focus('[title="Repository"] input');
    await page.keyboard.type('amercier/badge-generator', {
      delay: 20,
    });

    // Select services
    await page.click('label[title="Travis CI"]');
    await page.click('label[title="Codecov"]');
    await page.click('label[title="David DM"]');
    await page.click('label[title="David DM (dev)"]');
    expect(await getOutputCode()).toMatchSnapshot();

    // Change style
    await page.click('label[title="Flat square"]');
    expect(await getOutputCode()).toMatchSnapshot();
  });
});
