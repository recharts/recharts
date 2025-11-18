import { shallowEqual } from 'react-redux';

const propsToShallowCompare = new Set<string>([
  'axisLine',
  'tickLine',
  'activeBar',
  'activeDot',
  'activeLabel',
  'activeShape',
  'allowEscapeViewBox',
  'background',
  'cursor',
  'dot',
  'label',
  'line',
  'margin',
  'padding',
  'position',
  'shape',
  'style',
  'tick',
  'wrapperStyle',
]);

/**
 * When comparing two values, returns true if they are the same value or
 * are both NaN.
 *
 * If we used just a simple triple equals, we would get false negatives for two NaNs
 * which could cause extra re-renders so let's have this instead.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality
 *
 * @param x first value to compare
 * @param y second value to compare
 * return true if the same, false if different
 */
function sameValueZero(x: unknown, y: unknown): boolean {
  if (x == null && y == null) {
    /*
     * treat null and undefined as equal. Internally in Recharts we make no difference between these two
     * so there is no need to re-render.
     */
    return true;
  }
  if (typeof x === 'number' && typeof y === 'number') {
    // x and y are equal (this is true for -0 and 0) or they are both NaN
    // eslint-disable-next-line no-self-compare
    return x === y || (x !== x && y !== y);
  }
  return x === y;
}

/**
 * So usually React would compare only the first level of props using Object.is.
 * However, in our case many props are objects or arrays, and our own docs recommend to do that!
 * Therefore, we need a custom comparison function that does a shallow comparison of each prop value.
 *
 * Because charts can and do receive large props (typically the data array),
 * we only limit this to a subset of known props that are likely to be objects/arrays.
 *
 * @param prevProps
 * @param nextProps
 */
export function propsAreEqual<T extends Record<string, unknown>>(prevProps: T, nextProps: T): boolean {
  const allKeys = new Set<string>([...Object.keys(prevProps), ...Object.keys(nextProps)]);
  for (const key of allKeys) {
    /*
     * If a key is on a special allowlist, go one level deeper
     * and do a shallow comparison of the values.
     */
    if (propsToShallowCompare.has(key)) {
      if (prevProps[key] == null && nextProps[key] == null) {
        /*
         * treat null and undefined as equal. Internally in Recharts we make no difference between these two
         * so there is no need to re-render.
         */
        continue;
      }
      if (!shallowEqual(prevProps[key], nextProps[key])) {
        return false;
      }
      /*
       * Otherwise do a simple same-value comparison (with NaN support).
       */
    } else if (!sameValueZero(prevProps[key], nextProps[key])) {
      return false;
    }
  }
  return true;
}
