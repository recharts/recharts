import { beforeEach, vi } from 'vitest';

/*
 * TEMPORARY: remove once the repository is on Vitest 5.
 *
 * Node 25+ defines a `localStorage` global that is `undefined` without `--localstorage-file`.
 * Vitest 4's jsdom environment skips window keys Node already defines, so jsdom's Storage is
 * never installed. Fixed in Vitest 5, not backportable:
 *   https://github.com/vitest-dev/vitest/issues/10867
 *
 * Provide a minimal in-memory Storage instead. Website code only uses get/set/remove, and the
 * colour-mode tests dispatch `StorageEvent` themselves, so this is sufficient.
 *
 * Not `window.localStorage`: Vitest aliases `window` to `globalThis`, so it is the same
 * undefined accessor. Not `vi.stubGlobal`: `unstubGlobals` restores stubs before a spec's own
 * `afterEach` runs, which would break cleanup code.
 */
if (globalThis.localStorage == null) {
  const entries = new Map<string, string>();
  globalThis.localStorage = {
    get length() {
      return entries.size;
    },
    clear() {
      entries.clear();
    },
    getItem(key: string) {
      return entries.get(String(key)) ?? null;
    },
    key(index: number) {
      return Array.from(entries.keys())[index] ?? null;
    },
    removeItem(key: string) {
      entries.delete(String(key));
    },
    setItem(key: string, value: string) {
      entries.set(String(key), String(value));
    },
  };
}

beforeEach(() => {
  vi.stubGlobal('matchMedia', (query: string) => {
    return {
      matches: false,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    };
  });
});
