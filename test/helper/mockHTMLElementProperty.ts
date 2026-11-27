const mocks: Array<() => void> = [];

/**
 * Like {@link mockHTMLElementProperty}, but calls the getter on every read.
 * @param name the property to mock
 * @param get returns the value of the property
 */
export function mockHTMLElementGetter(name: keyof HTMLElement, get: () => number) {
  const original = Object.getOwnPropertyDescriptor(HTMLElement.prototype, name);
  Object.defineProperty(HTMLElement.prototype, name, { configurable: true, get });
  function cleanup() {
    if (original == null) {
      // The property is inherited (for example clientWidth, from Element), so removing the mock restores it
      Reflect.deleteProperty(HTMLElement.prototype, name);
      return;
    }
    Object.defineProperty(HTMLElement.prototype, name, original);
  }
  mocks.push(cleanup);
}

export function mockHTMLElementProperty(name: keyof HTMLElement, value: number) {
  mockHTMLElementGetter(name, () => value);
}

export function restoreHTMLElementProperties() {
  while (mocks.length > 0) {
    mocks.pop()?.();
  }
}
