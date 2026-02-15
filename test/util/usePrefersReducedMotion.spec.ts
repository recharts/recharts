import { test } from 'vitest';
import { renderHook } from '@testing-library/react';

import { usePrefersReducedMotion } from '../../src/util/usePrefersReducedMotion';
import { Global } from '../../src/util/Global';

test('prefers-reduced-motion query is not supported', () => {
  vi.spyOn(Global, 'isSsr', 'get').mockReturnValue(false);
  const { result } = renderHook(() => usePrefersReducedMotion());

  expect(result.current).toBe(false);
});

test('prefers-reduced-motion query is supported and matches', () => {
  vi.spyOn(Global, 'isSsr', 'get').mockReturnValue(false);
  vi.stubGlobal('matchMedia', () => ({
    matches: true,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }));

  const { result } = renderHook(() => usePrefersReducedMotion());

  expect(result.current).toBe(true);
});

test('prefers-reduced-motion query is supported and does not match', () => {
  vi.spyOn(Global, 'isSsr', 'get').mockReturnValue(false);
  vi.stubGlobal('matchMedia', () => ({
    matches: false,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }));

  const { result } = renderHook(() => usePrefersReducedMotion());

  expect(result.current).toBe(false);
});

test('in SSR should return false', () => {
  vi.spyOn(Global, 'isSsr', 'get').mockReturnValue(true);
  vi.stubGlobal('matchMedia', () => ({
    matches: false,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }));
  const { result } = renderHook(() => usePrefersReducedMotion());

  expect(result.current).toBe(false);
});
