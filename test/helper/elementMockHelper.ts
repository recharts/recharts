/**
 * getBoundingClientRect always returns 0 in jsdom, we can't test for actual returned string size
 * Execution order matters
 * https://github.com/jsdom/jsdom/issues/1590#issuecomment-578350151
 *
 * @param rect overrides getBoundingClientRect return value in the mock. jsdom by design returns all zeroes
 * @returns cleanup function, convenient for beforeAll or beforeEach
 */
export function mockGetBoundingClientRect(rect: Partial<DOMRect>) {
  const original = Element.prototype.getBoundingClientRect;
  Element.prototype.getBoundingClientRect = () => ({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    toJSON: () => '{}',
    ...rect,
  });
  return function cleanup() {
    Element.prototype.getBoundingClientRect = original;
  };
}

export function mockHTMLElementProperty(name: string, value: number) {
  const original = Object.getOwnPropertyDescriptor(HTMLElement.prototype, name);
  Object.defineProperty(HTMLElement.prototype, name, { configurable: true, value });
  return function cleanup() {
    Object.defineProperty(HTMLElement.prototype, name, original);
  };
}
