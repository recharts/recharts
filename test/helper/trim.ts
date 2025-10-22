/**
 * Useful for trimming d-attribute in paths.
 * According to the spec, it is not space sensitive: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d
 * however vitest comparator is space sensitive
 * so let's trim all the unnecessary whitespace before comparing
 * @param str arbitrary string
 * @return str with extra spaces removed for easier comparison in unit tests
 */
export function trim(str: string | null | undefined): string | null | undefined {
  if (typeof str !== 'string') {
    return str;
  }
  return str.replace(/^\s*/, '').replace(/\s*$/, '').replace(/\s+/g, ' ');
}
