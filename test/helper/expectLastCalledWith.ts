import { Mock } from 'vitest';

/**
 * Same as calling `expect(spy).toHaveBeenLastCalledWith(expected)` but this time it has correct typescript types.
 * This function will check that the type of `expected` is the same as the type of the argument of the spy.
 * @param spy vi.fn()
 * @param expected1 the first expected argument
 * @param expected2 the second expected argument (optional)
 * @param expected3 the third expected argument (optional)
 * @param expected4 the fourth expected argument (optional)
 * @throws if the spy was not called with the expected argument
 * @return void
 */
export function expectLastCalledWith<T1, T2, T3, T4>(
  spy: Mock<(arg1: T1, arg2: T2, arg3: T3, arg4: T4) => void>,
  expected1: T1,
  expected2?: T2,
  expected3?: T3,
  expected4?: T4,
): void {
  if (expected4 !== undefined) {
    expect(spy).toHaveBeenLastCalledWith(expected1, expected2, expected3, expected4);
    return;
  }
  if (expected3 !== undefined) {
    expect(spy).toHaveBeenLastCalledWith(expected1, expected2, expected3);
    return;
  }
  if (expected2 !== undefined) {
    expect(spy).toHaveBeenLastCalledWith(expected1, expected2);
    return;
  }
  expect(spy).toHaveBeenLastCalledWith(expected1);
}

/**
 * Same as calling `expect(spy).toHaveBeenNthCalledWith(N, expected)` but this time it has correct typescript types.
 * This function will check that the type of `expected` is the same as the type of the argument of the spy.
 * @param spy vi.fn()
 * @param n the call number (1-based)
 * @param expected1 the expected argument
 * @throws if the spy was not called with the expected argument
 * @return void
 */
export function expectNthCalledWith<T1>(spy: Mock<(arg1: T1) => void>, n: number, expected1: T1): void {
  expect(spy).toHaveBeenNthCalledWith(n, expected1);
}
