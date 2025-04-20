/**
 * This function mimics the behavior of the `defaultProps` static property in React.
 * Functional components do not have a defaultProps property, so this function is useful to resolve default props.
 *
 * The common recommendation is to use ES6 destructuring with default values in the function signature
 * but you need to be careful there and make sure you destructure all the individual properties
 * and not the whole object. See the test file for example.
 *
 * And because destructuring all properties one by one is a faff and it's easy to miss one property,
 * this function exists.
 *
 * @param realProps - the props object passed to the component by the user
 * @param defaultProps - the default props object defined in the component by Recharts
 * @returns - the props object with all the default props resolved. All `undefined` values are replaced with the default value.
 */
export function resolveDefaultProps<T extends Record<string, any>>(realProps: T, defaultProps: Partial<T>): T {
  const resolvedProps: T = { ...realProps };
  return (Object.keys(defaultProps) as (keyof T)[]).reduce((acc: T, key: keyof T): T => {
    if (acc[key] === undefined && defaultProps[key] !== undefined) {
      acc[key] = defaultProps[key];
    }
    return acc;
  }, resolvedProps);
}
