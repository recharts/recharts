const env = process.env.NODE_ENV;

module.exports = {
  plugins: [
    /*
     * Import Babel's helpers (object spread, destructuring, ...) from @babel/runtime instead of
     * inlining a copy into every file, which bundlers cannot deduplicate.
     * `version` matches the @babel/runtime dependency in package.json, so newer helpers such as
     * objectSpread2 are imported too rather than inlined.
     */
    ['@babel/plugin-transform-runtime', { version: '^7.29.7' }],
    'babel-plugin-dev-expression',
    [
      'transform-define',
      {
        'process.env.NODE_ENV': env,
      },
    ],
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          browsers: 'supports es6-module',
        },
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  env: {
    commonjs: {
      plugins: [
        [
          '@babel/plugin-transform-modules-commonjs',
          {
            loose: false,
          },
        ],
      ],
    },
  },
};
