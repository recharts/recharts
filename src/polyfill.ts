// Polyfill isFinite because IE does
// not support it.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite#Polyfill
if (Number.isFinite === undefined) Number.isFinite = function(value) {
  return typeof value === 'number' && isFinite(value);
}
