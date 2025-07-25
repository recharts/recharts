/**
 * This function mimics the behavior of the `defaultProps` static property in React.
 * Functional components do not have a defaultProps property, so this function is useful to resolve default props.
 *
 * The common recommendation is to use ES6 destructuring with default values in the function signature,
 * but you need to be careful there and make sure you destructure all the individual properties
 * and not the whole object. See the test file for example.
 *
 * And because destructuring all properties one by one is a faff, and it's easy to miss one property,
 * this function exists.
 *
 * @param realProps - the props object passed to the component by the user
 * @param defaultProps - the default props object defined in the component by Recharts
 * @returns - the props object with all the default props resolved. All `undefined` values are replaced with the default value.
 */
export declare function resolveDefaultProps<T, D extends Partial<T>>(realProps: T, defaultProps: D & DisallowExtraKeys<T, D>): RequiresDefaultProps<T, D>;
/**
 * Helper type to extract the keys of T that are required.
 * It iterates through each key K in T. If Pick<T, K> cannot be assigned an empty object {},
 * it means K is required, so we keep K; otherwise, we discard it (never).
 * [keyof T] at the end creates a union of the kept keys.
 */
export type RequiredKeys<T> = {
    [K in keyof T]-?: object extends Pick<T, K> ? never : K;
}[keyof T];
/**
 * Helper type to extract the keys of T that are optional.
 * It iterates through each key K in T. If Pick<T, K> can be assigned an empty object {},
 * it means K is optional (or potentially missing), so we keep K; otherwise, we discard it (never).
 * [keyof T] at the end creates a union of the kept keys.
 */
export type OptionalKeys<T> = {
    [K in keyof T]-?: object extends Pick<T, K> ? K : never;
}[keyof T];
/**
 * Helper type to ensure keys of D exist in T.
 * For each key K in D, if K is also a key of T, keep the type D[K].
 * If K is NOT a key of T, map it to type `never`.
 * An object cannot have a property of type `never`, effectively disallowing extra keys.
 */
export type DisallowExtraKeys<T, D> = {
    [K in keyof D]: K extends keyof T ? D[K] : never;
};
/**
 * This type will take a source type `Props` and a default type `Defaults` and will return a new type
 * where all properties that are optional in `Props` but required in `Defaults` are made required in the result.
 * Properties that are required in `Props` and optional in `Defaults` will remain required.
 * Properties that are optional in both `Props` and `Defaults` will remain optional.
 *
 * This is useful for creating a type that represents the resolved props of a component with default props.
 */
export type RequiresDefaultProps<Props, Defaults extends Partial<Props>> = Pick<Props, RequiredKeys<Props>> & Required<Pick<Props, Extract<OptionalKeys<Props>, RequiredKeys<Defaults>>>> & Pick<Props, Exclude<OptionalKeys<Props>, keyof Defaults>>;
