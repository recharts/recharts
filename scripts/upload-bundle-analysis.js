const { createAndUploadReport } = require('@codecov/bundle-analyzer');

const buildDirs = ['lib'];

const coreOpts = {
  dryRun: false,
  uploadToken: process.env.CODECOV_TOKEN,
  retryCount: 3,
  apiUrl: 'https://api.codecov.io',
  bundleName: 'recharts/bundle-cjs',
  enableBundleAnalysis: true,
  debug: true,
};

const bundleAnalyzerOpts = {
  beforeReportUpload: async original => original,
  ignorePatterns: ['*.map'],
  normalizeAssetsPattern: '[name]-[hash].js',
};

createAndUploadReport(buildDirs, coreOpts, bundleAnalyzerOpts)
  .then(reportAsJson => console.log(`Report successfully generated and uploaded: ${reportAsJson}`))
  .catch(error => console.error('Failed to generate or upload report:', error));
