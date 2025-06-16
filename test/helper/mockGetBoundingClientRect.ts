import { vi } from 'vitest';
import { mockHTMLElementProperty } from './mockHTMLElementProperty';

export function getMockDomRect(partial: Partial<DOMRect> = {}): DOMRect {
  return {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...partial,
    toJSON() {
      JSON.stringify(this);
    },
  };
}

/**
 * getBoundingClientRect always returns 0 in jsdom, we can't test for actual returned string size
 * Execution order matters
 * https://github.com/jsdom/jsdom/issues/1590#issuecomment-578350151
 *
 * This assumes that vitest restoreMock is turned on by default because there is no explicit cleanup available:
 * https://vitest.dev/config/#restoremocks
 *
 * @param rect overrides getBoundingClientRect return value in the mock. jsdom by design returns all zeroes
 * @param mockClientHeightWidth overrides offsetWidth/offsetHeight with the same values as rect
 * @returns void
 */
export function mockGetBoundingClientRect(rect: Partial<DOMRect>, mockClientHeightWidth = true): void {
  const mockDomRect = getMockDomRect(rect);
  vi.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue(mockDomRect);

  if (mockClientHeightWidth) {
    mockHTMLElementProperty('offsetHeight', rect.height);
    mockHTMLElementProperty('offsetWidth', rect.width);
  }
}

/**
 * Mock a sequence of getBoundingClientRect calls with different values.
 * This is useful for testing behaviour of Legend and other components that rely on the size of the DOM elements
 * and change their layout based on the size of the elements as the rendering progresses.
 * @param rects an array of partial DOMRect objects that will be returned by getBoundingClientRect in sequence. The last rect will be returned as the final value repeatedly.
 * @param mockClientHeightWidth if true, will also mock offsetHeight and offsetWidth properties of the HTMLElement
 * @return void
 */
export function mockSequenceOfGetBoundingClientRect(
  rects: Array<Partial<DOMRect>>,
  mockClientHeightWidth = true,
): void {
  const mockDomRects = rects.map(getMockDomRect);
  for (let i = 0; i < mockDomRects.length - 1; i++) {
    vi.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValueOnce(mockDomRects[i]);
  }
  vi.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue(mockDomRects[mockDomRects.length - 1]);

  if (mockClientHeightWidth) {
    mockHTMLElementProperty('offsetHeight', rects[0].height);
    mockHTMLElementProperty('offsetWidth', rects[0].width);
  }
}
