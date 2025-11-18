export function reduxDevtoolsJsonStringifyReplacer(key: string, value: unknown) {
  if (value instanceof HTMLElement) {
    return `HTMLElement <${value.tagName} class="${value.className}">`;
  }
  if (value === window) {
    return 'global.window';
  }
  if (key === 'children' && typeof value === 'object' && value !== null) {
    return '<<CHILDREN>>';
  }
  return value;
}
