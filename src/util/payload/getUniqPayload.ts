import uniqBy from 'lodash/uniqBy';

type UniqueFunc<T> = (entry: T) => unknown;

/**
 * This is configuration option that decides how to filter for unique values only:
 *
 * - `false` means "no filter"
 * - `true` means "use recharts default filter"
 * - function means "use return of this function as the default key"
 */
export type UniqueOption<T> = boolean | UniqueFunc<T>;

export function getUniqPayload<T>(
  payload: ReadonlyArray<T>,
  option: UniqueOption<T>,
  defaultUniqBy: UniqueFunc<T>,
): ReadonlyArray<T> {
  if (option === true) {
    return uniqBy(payload, defaultUniqBy);
  }

  if (typeof option === 'function') {
    return uniqBy(payload, option);
  }

  return payload;
}
