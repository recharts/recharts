import { defineConfig, devices } from '@playwright/experimental-ct-react';
import path from 'path';

// This config is loaded from test-vr/, so __dirname works as the test-vr root
// whether running inside the local Docker container (/recharts/test-vr) or
// directly on a CI runner (<workspace>/test-vr).
const repoRoot = path.join(__dirname, '..');

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
  timeout: 10 * 1000,
  expect: {
    /* https://playwright.dev/docs/test-timeouts */
    timeout: 10 * 1000,
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
      [['blob', { outputDir: path.join(__dirname, 'blob-report') }]]
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
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    /* Port to use for Playwright component endpoint. */
    ctPort: 3100,

    ctViteConfig: {
      resolve: {
        alias: {
          recharts: path.join(repoRoot, 'src'),
          /*
           * Ensure that we are using the same React instance
           * to avoid issues with hooks and context.
           */
          react: path.join(repoRoot, 'node_modules/react'),
          'react-dom': path.join(repoRoot, 'node_modules/react-dom'),
          'react-is': path.join(repoRoot, 'node_modules/react-is'),
        },
      },
    },
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
