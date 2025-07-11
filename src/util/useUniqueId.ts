import * as React from 'react';
import { uniqueId } from './DataUtils';

// --- Fallback for React < 18 ---
// This implementation uses a ref to generate and store the ID only once.
// Note: This is not safe for Server-Side Rendering (SSR) and can cause hydration mismatches.
// React.useId was created to solve this exact problem.
const useUniqueIdFallback = (prefix?: string): string => {
  const idRef = React.useRef<string>();

  if (idRef.current === undefined) {
    const id = uniqueId();
    idRef.current = prefix ? `${prefix}-${id}` : id;
  }

  return idRef.current;
};

// --- React 18+ implementation ---
const useUniqueIdModern = (prefix?: string): string => {
  const id = React.useId();
  return prefix ? `${prefix}-${id}` : id;
};

// Determine which hook to use based on the availability of React.useId
const useIdImpl = typeof React.useId === 'function' ? useUniqueIdModern : useUniqueIdFallback;

/**
 * This hook generates a unique ID for components that need one.
 * Uses React.useId for React 18+,
 * falls back to a custom implementation for earlier versions.
 *
 * Allows a prefix to be passed for the ID, and allows for a custom ID to be set.
 *
 * @param {string} [prefix] - Optional prefix for the ID.
 * @param {string} [customId] - Optional custom ID to use instead of generating a new one.
 * @return {string} - The unique ID.
 */
export function useUniqueId(prefix?: string, customId?: string): string {
  const generatedId = useIdImpl(prefix);

  // If a custom ID is provided, return it immediately.
  // This allows for controlled components to use a specific ID.
  if (customId) {
    return customId;
  }

  return generatedId;
}
