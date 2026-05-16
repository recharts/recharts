---
name: TypeScript
description: Write strongly-typed TypeScript code in Recharts
---

# Writing strong types

TypeScript is a powerful tool for writing strongly-typed code but it must be used wisely. There are multiple patterns to disable type checking in TypeScript. Avoid these as much as possible, as they lead to bugs.

These patterns include (but are not limited to):

## `any` type - using `any` disables all type checking for that variable. Avoid using `any` unless absolutely necessary. Alternative: use `unknown` and then narrow down the type with type guards.

## `as` type assertions - using `as` allows you to tell TypeScript to treat a variable as a certain type, even if it can't be proven. Avoid using `as` unless there is absolutely no other way. Alternative: use type guards or type inference. Second alternative: use runtime checks to ensure the type is correct. Exception: `as const` is a special case where it is acceptable to use `as` to create a literal type.

## `@ts-ignore` comments - using `@ts-ignore` tells TypeScript to ignore the next line of code. Avoid using `@ts-ignore` unless you have a very good reason to do so. The same applies to `@ts-expect-error` Alternative: fix the underlying type error instead of ignoring it.

## `is`: this type guard feels safe to use but actually does not validate what is going on inside the function, at all! This may still be okay to use but please only limit this to simple cases, and add plenty of unit tests to confirm that the implementation actually does validate the data shape.

# Examples

Our typing highlights array access as an error. TypeScript is correct here! Do not make assumptions about the array length and do not use `as` to bypass the error. Instead, use nullish coalescing or other runtime checks to ensure that you are not accessing an undefined value:

```tsx
const data = [1, 2, 3];
// Invalid solution: Accessing the first item directly, which can lead to runtime errors if the array is empty
const firstItem: number = data[0]; // TypeScript infers this as number | undefined and so raises an error because it could be undefined if the array is empty.

// Invalid solution: Using `as` to assert the type, which can lead to runtime errors if the array is empty
const firstItemWithAssertion: number = data[0] as number; // This will not raise a compile-time error, but it can lead to a runtime error if data[0] is undefined.

// Correct solution: Using nullish coalescing to provide a default value
const firstItemWithCheck: number = data[0] ?? 0;
```

Another example is when using .map to transform an array:

```tsx
const data = [1, 2, 3];
// Invalid solution: Using `as` to assert the type of the mapped array, which can lead to runtime errors if the mapping function does not return the expected type
const mappedData: string[] = data.map(item => item.toString()) as string[]; // This will not raise a compile-time error, but it can lead to a runtime error if the mapping function does not return a string.

// Correct solution: Use `import { isNotNil } from '../utils/DataUtils';` to filter out null or undefined values before mapping, and let TypeScript infer the type of the mapped array
import { isNotNil } from '../utils/DataUtils';
const mappedDataWithCheck: string[] = data.map(item => item.toString()).filter(isNotNil);
```

`as unknown as T` is a popular pattern to bypass type checking, but it can lead to runtime errors if the type is not actually correct. Avoid using this pattern at all costs:

```tsx
// Invalid solution: Using `as unknown as T` to bypass type checking
function unsafeCast<T>(value: any): T {
  return value as unknown as T; // This is a dangerous pattern that can lead to runtime errors if the type is not actually correct.
}

// Correct solution: Use type guards to ensure the type is correct before casting
function makeString(value: unknown, defaultValue: string): string {
  if (typeof value === 'string') {
    return value;
  }
  return defaultValue;
}
```

`is` type guards do not actually validate that the function body correctly checks the type, so they can give a false sense of security. Use them with caution and add plenty of unit tests to ensure that they are implemented correctly:

```tsx
// Invalid solution: Unsafe use of `is` type guard
function isString(value: unknown): value is string {
  // This implementation does not actually check if the value is a string, so it can lead to runtime errors if used incorrectly.
  // TypeScript does NOT highlight this as an error! This is dangerous and invisible.
  return true;
}

// Invalid solution: checking for specific type but not actually validating the value
function isT<T>(value: unknown): value is T {
  // This implementation checks for a specific type but does not actually validate the value, so it will lead to runtime errors.
  return typeof value === 'object' && value !== null;
}

// Correct solution: Safe implementation of `is` type guard with proper checks
function isStringWithCheck(value: unknown): value is string {
  return typeof value === 'string';
}

// Correct solution: Use runtime checks to ensure the type is correct
type HasId = { id: string };
function isHasId(value: unknown): value is HasId {
  // Comprehensive runtime check to ensure the value has the correct shape
  // Unit tests omitted for clarity, but should be added to confirm that this function correctly identifies objects with an `id` property of type string.
  return typeof value === 'object' && value !== null && 'id' in value && typeof (value as any).id === 'string';
}
```

# Recharts and TypeScript setup

Recharts codebase started in JavaScript, but had since migrated to be 100% TypeScript.
While file extension migration is all completed, the actual type completeness is still a work in progress.
You will find some files that do not adhere to the guidelines above.
We have removed all the low-hanging fruit, and whatever is left is fairly difficult to fix. If you do decide to fix it then please do,
but be warned that it might be a non-trivial amount of work.

# Tools available

To help you with writing strong types, we have the following tools available:

- TypeScript settings in `tsconfig.json` that enforce strict type checking. Strict mode is already enabled in the root config file. Some subdirectories have their own `tsconfig.json` files that override some of the strict settings.
- ESLint rules that enforce best practices for TypeScript. We use `@typescript-eslint` plugin to enforce these rules. In particular the `neverAny` rule is enabled to prevent the use of `any` type but only in certain files/directories; see `eslint.config.mjs` file for details. Please strongly consider enabling this rule in more files/directories as you work on them, and definitely for new files/directories.
- You have already seen `isNotNil` helper available in `utils/DataUtils` that can be used to filter out null or undefined values from arrays, which can help with type inference. `isNullish` also exists in the same file, checking for the opposite.
- `isWellBehavedNumber` and `isPositiveNumber` are two other popular helpers, available in `utils/isWellBehavedNumber.ts`
- `assertNotNull` is super useful helper that throws an error if the value is null or undefined. Only available for tests in `test/helper/assertNotNull.ts`.

# Commands

To check for type validity, run:

```bash
npm run build # this is necessary to get the latest updates to the type definitions in www folder because that folder is linked to the built artifact, not the source itself
npm run check-types # checks types in the whole project
npm run lint # checks for linting errors, including TypeScript linting errors
```

# Exceptions

If you have considered all the alternatives and still feel like you need to disable type checking for a certain piece of code, please add a comment explaining why you are doing so and what the expected type is. This will help other developers understand the code and avoid introducing bugs in the future.

When disabling type checking, please isolate the change to a single line so that the type weak point is isolated. Also prefer to use @ts-expect-error over `any` or the other patterns so that is immediately obvious that there is a type issue, instead of pretending it's all good with `any` or `as`:

```tsx
// Here we have to cast because React.memo does not preserve generic type parameters, and so we have to use a type assertion to tell TypeScript that the resulting component has the correct type. This is a known limitation of React.memo and there is no good workaround for it at the moment.
export const Area = React.memo(AreaFn, propsAreEqual) as <DataPointType = any, ValueAxisType = any>(
  props: Props<DataPointType, ValueAxisType>,
) => ReactElement;
// @ts-expect-error we need to set the displayName for debugging purposes
Area.displayName = 'Area';
```
