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
export declare function useUniqueId(prefix?: string, customId?: string): string;
/**
 * The useUniqueId hook returns a unique ID that is either reused from external props or generated internally.
 * Either way the ID is now guaranteed to be present so no more nulls or undefined.
 */
export type WithIdRequired<T> = T & {
    id: string;
};
export type WithoutId<T> = Omit<T, 'id'>;
