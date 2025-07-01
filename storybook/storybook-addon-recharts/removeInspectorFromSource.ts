/**
 * Removes the RechartsHookInspector import and its usage from the provided source code.
 * The inspector is for debugging purposes and is not needed in the final source code
 * and it would just confuse people.
 * @param source - The source code as a string from which to remove the inspector.
 * @return A promise that resolves to the modified source code with the inspector removed.
 */
export function removeInspectorFromSource(source: string): string {
  // Remove import line for RechartsHookInspector and any blank line left behind
  let newSource = source.replace(/^\s*import\s*\{\s*RechartsHookInspector\s*}\s*from\s*['"][^'"]*['"];\n?/m, '');
  // Remove self-closing JSX element <RechartsHookInspector ... /> and any blank line left behind
  newSource = newSource.replace(/^\s*<RechartsHookInspector\b[^>]*\/>\n?/gm, '');
  return newSource;
}
