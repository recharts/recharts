/**
 * Checks if an exported name is considered a React Component.
 *
 * We rely on the convention that React components must start with an uppercase letter.
 * Everything else (hooks, utilities, constants) is considered not a component for documentation purposes.
 *
 * There are some exceptions for constants that start with Uppercase but are not components.
 */
export function isReactComponent(name: string): boolean {
  // Must start with uppercase
  if (!/^[A-Z]/.test(name)) {
    return false;
  }

  // Known non-component exports that happen to be Capitalized
  const NON_COMPONENT_EXPORTS = ['DefaultZIndexes', 'Global'];
  if (NON_COMPONENT_EXPORTS.includes(name)) {
    return false;
  }

  return true;
}
