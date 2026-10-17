const originalGetComputedTextLength = Object.getOwnPropertyDescriptor(SVGElement.prototype, 'getComputedTextLength');

/** jsdom does not implement SVG text measurement, so path-text tests patch SVGElement. */
export function mockGetComputedTextLength(length: number): void {
  Object.defineProperty(SVGElement.prototype, 'getComputedTextLength', {
    configurable: true,
    writable: true,
    value: () => length,
  });
}

export function restoreMockGetComputedTextLength(): void {
  if (originalGetComputedTextLength) {
    Object.defineProperty(SVGElement.prototype, 'getComputedTextLength', originalGetComputedTextLength);
  } else {
    Reflect.deleteProperty(SVGElement.prototype, 'getComputedTextLength');
  }
}
