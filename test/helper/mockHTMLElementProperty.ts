const mocks: Array<() => void> = [];

export function mockHTMLElementProperty(name: keyof HTMLElement, value: number) {
  const original = Object.getOwnPropertyDescriptor(HTMLElement.prototype, name);
  Object.defineProperty(HTMLElement.prototype, name, { configurable: true, value });
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

export function restoreHTMLElementProperties() {
  while (mocks.length > 0) {
    mocks.pop()?.();
  }
}
