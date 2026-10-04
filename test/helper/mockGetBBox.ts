type MockBBox = { x: number; y: number; width: number; height: number };

const originalGetBBox = Object.getOwnPropertyDescriptor(SVGElement.prototype, 'getBBox');

/**
 * jsdom does not implement getBBox on SVG elements, and the SVGGraphicsElement global is not available,
 * so vitest cannot mock it. Like {@link mockGetTotalLength}, this monkey-patches SVGElement instead.
 *
 * @param getBox returns the bounding box of the given element
 * @returns void
 */
export function mockGetBBox(getBox: (element: SVGElement) => MockBBox): void {
  Object.defineProperty(SVGElement.prototype, 'getBBox', {
    configurable: true,
    writable: true,
    value(this: SVGElement): MockBBox {
      return getBox(this);
    },
  });
}

export function restoreMockGetBBox(): void {
  if (originalGetBBox) {
    Object.defineProperty(SVGElement.prototype, 'getBBox', originalGetBBox);
  } else {
    Reflect.deleteProperty(SVGElement.prototype, 'getBBox');
  }
}
