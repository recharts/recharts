export function shallowEqual(a: any, b: any) {
  /* eslint-disable no-restricted-syntax */
  for (const key in a) {
    if ({}.hasOwnProperty.call(a, key) && (!{}.hasOwnProperty.call(b, key) || a[key] !== b[key])) {
      return false;
    }
  }
  for (const key in b) {
    if ({}.hasOwnProperty.call(b, key) && !{}.hasOwnProperty.call(a, key)) {
      return false;
    }
  }
  return true;
}
