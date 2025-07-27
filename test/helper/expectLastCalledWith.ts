import { Mock } from 'vitest';

/**
 * Same as calling `expect(spy)toHaveBeenLastCalledWith(expected)` but this time it has correct typescript types.
 * This function will check that the type of `expected` is the same as the type of the argument of the spy.
 * @param spy vi.fn()
 * @param expected the expected argument that the spy was last called with
 * @throws if the spy was not called with the expected argument
 * @return void
 */
export function expectLastCalledWith<T>(spy: Mock<(arg: T) => void>, expected: T): void {
  expect(spy).toHaveBeenLastCalledWith(expected);
}
