import { useEffect, useState } from 'react';

import { Global } from './Global';

/**
 * Detects and subscribes to the user's `prefers-reduced-motion` system preference.
 * Returns `true` when the user prefers reduced motion, `false` otherwise.
 * SSR-safe: always returns `false` during server-side rendering.
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (Global.isSsr) {
      return false;
    }
    if (!window.matchMedia) {
      return false;
    }
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (!window.matchMedia) {
      return;
    }
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };
    mediaQuery.addEventListener('change', handleChange);
    // eslint-disable-next-line consistent-return
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return prefersReducedMotion;
}
