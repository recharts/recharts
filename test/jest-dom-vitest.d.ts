import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';

/*
 * Vitest 5 changed `Assertion<T>` to `Assertion<R, T>`, so the augmentation shipped in
 * `@testing-library/jest-dom/vitest` (which declares `Assertion<T>`) no longer merges.
 * Vitest 5 exposes `Matchers<R, T>` as the extension point instead.
 * Remove this file once jest-dom ships typings for Vitest 5.
 */
declare module 'vitest' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unused-vars
  interface Matchers<R, T> extends TestingLibraryMatchers<unknown, R> {}
}
