/**
 * Fallback for React.useId() for versions prior to React 18.
 * Generates a unique ID using a simple counter and a prefix.
 *
 * @returns A unique ID that remains consistent across renders.
 */
export declare const useIdFallback: () => string;
export declare const useId: () => string;
