const env = process.env.NODE_ENV;

module.exports = {
  plugins: [
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
