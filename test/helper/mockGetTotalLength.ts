/**
 * jsdom does not implement getTotalLength on SVGPathElement: https://github.com/jsdom/jsdom/issues/1330
 * Also, when rendering SVGs, the ref that we get is not the actual SVGPathElement,
 * but it is a SVGElement. The SVGPathElement (or SVGGeometryElement) global objects
 * do not appear to be available in the jsdom environment at all.
 *
 * Thanks to this, we can't mock this using vitest at all,
 * because vitest refuses to mock method on an object that is not supposed to have that method in the first place.
 *
 * So we're back to monkey-patching.
 *
 * We can't monkey-patch SVGPathElement directly, because it is not available in jsdom,
 * so we have to patch SVGElement instead. Like in the old days.
 *
 * @param length The length to return when getTotalLength is called.
 * @returns void
 */
export function mockGetTotalLength(length: number): void {
  // @ts-expect-error typescript is correct here, but we have no better choice
  if (!SVGElement.prototype.getTotalLength) {
    // @ts-expect-error typescript is correct here, but we have no better choice
    SVGElement.prototype.getTotalLength = () => length;
  }
}
