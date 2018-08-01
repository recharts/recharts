import babel from 'rollup-plugin-babel';
import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import { sizeSnapshot } from "rollup-plugin-size-snapshot";
import { uglify } from "rollup-plugin-uglify";

const input = './src/index.js';

const name = 'Recharts';

const globals = {
  react: 'React',
  'prop-types': 'PropTypes'
};

const babelOptions = {
  exclude: '**/node_modules/**',
  // deduplicate helpers
  plugins: ['external-helpers']
}

const commonjsOptions = {
  include: '**/node_modules/**',
  namedExports: {
    // TODO remove after recharts-scale esm support
    'recharts-scale': [
      'getNiceTickValues',
      'getTickValuesFixedDomain'
    ]
  }
}

const onwarn = (warning, warn) => {
  if (warning.code === 'CIRCULAR_DEPENDENCY') {
    // skip d3 circular depenencies warnings
    if (warning.importer.includes('d3-scale')) {
      return;
    }
  }
  // use default for everything else
  warn(warning);
}

export default [
  {
    input,
    output: {
      file: 'umd/Recharts.js',
      format: 'umd',
      name,
      globals
    },
    onwarn,
    external: Object.keys(globals),
    plugins: [
      nodeResolve({ preferBuiltins: false }),
      babel(babelOptions),
      commonjs(commonjsOptions),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
      sizeSnapshot()
    ]
  },

  {
    input,
    output: {
      file: 'umd/Recharts.min.js',
      format: 'umd',
      name,
      globals
    },
    onwarn,
    external: Object.keys(globals),
    plugins: [
      nodeResolve({ preferBuiltins: false }),
      babel(babelOptions),
      commonjs(commonjsOptions),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      sizeSnapshot(),
      uglify({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false,
        },
        output: {
          comments: false,
        },
      })
    ]
  }
]
