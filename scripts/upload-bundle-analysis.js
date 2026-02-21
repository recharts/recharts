const { createAndUploadReport } = require('@codecov/bundle-analyzer');
const { rollup } = require('rollup');
const fs = require('fs');
const path = require('path');
const os = require('os');

const packageRoot = path.resolve(__dirname, '..');
const es6Entry = path.join(packageRoot, 'es6', 'index.js');

function getExternals() {
  const packageJson = JSON.parse(fs.readFileSync(path.join(packageRoot, 'package.json'), 'utf-8'));
  const deps = Object.keys(packageJson.dependencies ?? {});
  const peerDeps = Object.keys(packageJson.peerDependencies ?? {});
  return [...deps, ...peerDeps, 'use-sync-external-store/shim/with-selector', /^victory-vendor.*/, /^es-toolkit.*/];
}

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

async function generateTreeshakingBundle(components, outputFile) {
  const importList = components.join(', ');
  const source = `import { ${importList} } from '${es6Entry}';\nexport const used = { ${importList} };\n`;

  const tmpEntry = path.join(
    os.tmpdir(),
    `recharts-treeshake-entry-${Date.now()}-${Math.random().toString(36).slice(2)}.mjs`,
  );
  fs.writeFileSync(tmpEntry, source);

  try {
    const bundle = await rollup({
      input: tmpEntry,
      external: getExternals(),
      treeshake: { moduleSideEffects: false },
      logLevel: 'silent',
      plugins: [
        {
          name: 'resolve-directory-index',
          resolveId(moduleId, importer) {
            if (importer != null && moduleId.startsWith('.')) {
              const resolved = path.resolve(path.dirname(importer), moduleId);
              if (fs.existsSync(resolved) && fs.statSync(resolved).isDirectory()) {
                const indexFile = path.join(resolved, 'index.js');
                if (fs.existsSync(indexFile)) {
                  return indexFile;
                }
              }
            }
            return null;
          },
        },
      ],
    });
    const output = await bundle.generate({ format: 'esm' });
    await bundle.close();

    const code = output.output
      .filter(c => c.type === 'chunk')
      .map(c => c.code)
      .join('\n');

    fs.writeFileSync(outputFile, code);
    console.log(`Generated tree-shaking bundle: ${outputFile} (${Buffer.byteLength(code, 'utf-8')} bytes)`);
  } finally {
    fs.unlinkSync(tmpEntry);
  }
}

const CARTESIAN_COMPONENTS = [
  'Line',
  'Area',
  'Bar',
  'BarStack',
  'Scatter',
  'XAxis',
  'YAxis',
  'ZAxis',
  'ErrorBar',
  'Brush',
  'ReferenceLine',
  'ReferenceDot',
  'ReferenceArea',
  'CartesianAxis',
  'CartesianGrid',
  'Funnel',
];

const POLAR_COMPONENTS = ['Pie', 'Radar', 'RadialBar', 'PolarGrid', 'PolarAngleAxis', 'PolarRadiusAxis'];

async function generateAndUploadTreeshakingBundle(components, bundleName) {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'recharts-treeshake-'));
  try {
    await generateTreeshakingBundle(components, path.join(tmpDir, 'bundle.js'));
    await uploadBundleAnalysis(tmpDir, bundleName);
  } finally {
    fs.rmSync(tmpDir, { recursive: true });
  }
}

uploadBundleAnalysis('lib', 'recharts/bundle-cjs')
  .then(() => {
    return uploadBundleAnalysis('es6', 'recharts/bundle-es6');
  })
  .then(() => {
    return uploadBundleAnalysis('umd', 'recharts/bundle-umd');
  })
  .then(() => {
    return generateAndUploadTreeshakingBundle(CARTESIAN_COMPONENTS, 'recharts/bundle-treeshaking-cartesian');
  })
  .then(() => {
    return generateAndUploadTreeshakingBundle(POLAR_COMPONENTS, 'recharts/bundle-treeshaking-polar');
  })
  .then(() => {
    return generateAndUploadTreeshakingBundle(['Treemap'], 'recharts/bundle-treeshaking-treemap');
  })
  .then(() => {
    return generateAndUploadTreeshakingBundle(['SunburstChart'], 'recharts/bundle-treeshaking-sunburst');
  })
  .then(() => {
    return generateAndUploadTreeshakingBundle(['Sankey'], 'recharts/bundle-treeshaking-sankey');
  });
