import { useId } from './useId';

/**
 * A hook that generates a unique ID. It uses React.useId() in React 18+ for SSR safety
 * and falls back to a client-side-only unique ID generator for older versions.
 *
 * The ID will stay the same across renders, and you can optionally provide a prefix.
 *
 * @param [prefix] - An optional prefix for the generated ID.
 * @param [customId] - An optional custom ID to override the generated one.
 * @returns The unique ID.
 */
export function useUniqueId(prefix?: string, customId?: string): string {
  /*
   * We have to call this hook here even if we don't use the result because
   * rules of hooks demand that hooks are never called conditionally.
   */
  const generatedId = useId();

  // If a custom ID is provided, it always takes precedence.
  if (customId) {
    return customId;
  }

  // Apply the prefix if one was provided.
  return prefix ? `${prefix}-${generatedId}` : generatedId;
}
