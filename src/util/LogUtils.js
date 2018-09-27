/* eslint no-console: 0 */
const isDev = process.env.NODE_ENV !== 'production';

export const warn = (condition, format, a, b, c, d, e, f) => {
  if (isDev && typeof console !== 'undefined' && console.warn) {
    if (format === undefined) {
      console.warn('LogUtils requires an error message argument');
    }

    if (!condition) {
      if (format === undefined) {
        console.warn(
          'Minified exception occurred; use the non-minified dev environment ' +
          'for the full error message and additional helpful warnings.'
        );
      } else {
        const args = [a, b, c, d, e, f];
        let argIndex = 0;

        console.warn(format.replace(/%s/g, () => args[argIndex++]));
      }
    }
  }
};
