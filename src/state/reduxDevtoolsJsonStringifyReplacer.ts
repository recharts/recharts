export function reduxDevtoolsJsonStringifyReplacer(_key: string, value: unknown) {
  if (value instanceof HTMLElement) {
    return `HTMLElement <${value.tagName} class="${value.className}">`;
  }
  if (value === window) {
    return 'global.window';
  }
  return value;
}
