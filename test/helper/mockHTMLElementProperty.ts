const mocks: Array<() => void> = [];

export function mockHTMLElementProperty(name: keyof HTMLElement, value: number) {
  const original = Object.getOwnPropertyDescriptor(HTMLElement.prototype, name);
  Object.defineProperty(HTMLElement.prototype, name, { configurable: true, value });
  function cleanup() {
    Object.defineProperty(HTMLElement.prototype, name, original);
  }
  mocks.push(cleanup);
}

export function restoreHTMLElementProperties() {
  mocks.forEach(cleanup => cleanup());
  mocks.length = 0;
}
