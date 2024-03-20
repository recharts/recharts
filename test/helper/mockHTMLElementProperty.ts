export function mockHTMLElementProperty(name: keyof HTMLElement, value: number) {
  const original = Object.getOwnPropertyDescriptor(HTMLElement.prototype, name);
  Object.defineProperty(HTMLElement.prototype, name, { configurable: true, value });
  return function cleanup() {
    Object.defineProperty(HTMLElement.prototype, name, original);
  };
}
