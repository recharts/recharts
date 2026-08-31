import { defineConfig, devices } from '@playwright/test';
import path from 'path';

const galleryUrl = 'http://localhost:3100/gallery/index.html';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  testDir: __dirname,
  testMatch: '*.spec-vr.tsx',
  /*
   * The snapshotDir is the designated folder for storing your snapshot files.
   * These are the "golden" reference files used for visual regression and snapshot testing.
   * When you write a test that uses await expect(page).toHaveScreenshot()
   * or expect(data).toMatchSnapshot(), Playwright captures a baseline snapshot
   * and saves it in this directory. On subsequent test runs,
   * new snapshots are compared against these saved references to detect any unintended changes.
   */
  snapshotDir: path.join(__dirname, '__snapshots__'),
  /*
   * The test-results directory is the default location where Playwright saves various test artifacts.
   * This folder acts as a general-purpose output directory.
   */
  outputDir: path.join(__dirname, 'test-results'),
  /* Maximum time one test can run for. */
  timeout: 20_000,
  expect: {
    /* https://playwright.dev/docs/test-timeouts */
    timeout: 10_000,
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /*
   * In CI each browser project runs as its own parallel job, so 2 workers per job
   * makes good use of the 2-core GitHub runner without overloading it.
   */
  workers: process.env.CI ? 2 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: process.env.CI
    ? // In CI each browser job emits a blob that is later merged into a single HTML report.
      [
        ['blob', { outputDir: path.join(__dirname, 'blob-report') }],
        ['@flakiness/playwright', { flakinessProject: 'recharts/recharts' }],
      ]
    : [
        [
          'html',
          {
            /*
             * By default, playwright opens a web server to serve the files in the testDir if a test fails.
             * Because we have another container dedicated to serving the app, we set this to 'never'
             * so that the test runner never gets stuck running a web server.
             */
            open: 'never',
            /*
             * Output folder specifically for the HTML reporter.
             * When you run your tests with the HTML reporter enabled,
             * Playwright generates a self-contained, interactive web page
             * that provides a detailed overview of your test run.
             */
            outputFolder: path.join(__dirname, 'playwright-report'),
          },
        ],
      ],
  /*
   * The gallery dev server that renders the stories. Playwright starts it
   * before the tests and mounts stories through window.mount() on this page.
   */
  webServer: {
    command: 'npx vite --config vite.config.ts --port 3100 --strictPort',
    /*
     * The command runs in the directory of the config file by default, but
     * being explicit keeps the behavior identical locally, in Docker and in CI.
     */
    cwd: __dirname,
    url: galleryUrl,
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    /*
     * The gallery page that the mount() fixture navigates to.
     * See https://playwright.dev/docs/test-components.
     */
    baseURL: galleryUrl,

    /*
     * Keep the app's own service worker from serving cached responses that
     * would shadow page.route() mocks. See https://playwright.dev/docs/test-components.
     */
    serviceWorkers: 'block',

    /*
     * Reuse the browser context between tests in a worker, as the old
     * component testing runtime did. Playwright resets the state that
     * component tests typically touch between tests.
     */
    reuseContext: true,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
