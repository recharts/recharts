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
