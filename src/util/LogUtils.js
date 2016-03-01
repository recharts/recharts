const __DEV__ = process.env.NODE_ENV !== 'production';

const empty = () => {};

const getLogFunction = (type) => {
  return (console && console[type]) || empty;
};

const generateLogFunction = (type) => {
  const logFunction = getLogFunction(type);

  return (condition, format, a, b, c, d, e, f) => {
    if (__DEV__) {
      if (format === undefined) {
        logFunction('LogUtils requires an error message argument');
      }

      if (!condition) {
        if (format === undefined) {
          logFunction(
            'Minified exception occurred; use the non-minified dev environment ' +
            'for the full error message and additional helpful warnings.'
          );
        } else {
          const args = [a, b, c, d, e, f];
          let argIndex = 0;

          logFunction(
            format.replace(/%s/g, function() { return args[argIndex++]; })
          );
        }
      }
    }

  };
};

export const log = generateLogFunction('log');
export const info = generateLogFunction('info');
export const warn = generateLogFunction('warn');
export const error = generateLogFunction('error');

