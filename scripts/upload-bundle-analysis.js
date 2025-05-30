const { createAndUploadReport } = require('@codecov/bundle-analyzer');

function uploadBundleAnalysis(directory, bundleName) {
  const coreOpts = {
    dryRun: false,
    uploadToken: process.env.CODECOV_TOKEN,
    retryCount: 3,
    apiUrl: 'https://api.codecov.io',
    bundleName,
    enableBundleAnalysis: true,
    debug: true,
  };

  const bundleAnalyzerOpts = {
    beforeReportUpload: async original => original,
    ignorePatterns: ['*.map', '*.html', '*.txt'],
    normalizeAssetsPattern: '[name]-[hash].js',
  };

  return createAndUploadReport([directory], coreOpts, bundleAnalyzerOpts)
    .then(reportAsJson => console.log(`Report successfully generated and uploaded: ${reportAsJson}`))
    .catch(error => console.error('Failed to generate or upload report:', error));
}

uploadBundleAnalysis('lib', 'recharts/bundle-cjs')
  .then(() => {
    return uploadBundleAnalysis('es6', 'recharts/bundle-es6');
  })
  .then(() => {
    return uploadBundleAnalysis('umd', 'recharts/bundle-umd');
  });
