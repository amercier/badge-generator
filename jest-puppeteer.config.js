/* eslint-env node */
/* eslint-disable unicorn/filename-case */

const port = 3001;

/**
 * jest-puppeteer configuration.
 * @see https://github.com/smooth-code/jest-puppeteer
 */
module.exports = {
  server: {
    command: `BROWSER=none PORT=${port} yarn start`,
    port,
    launchTimeout: 10000,
    debug: true,
  },
};
