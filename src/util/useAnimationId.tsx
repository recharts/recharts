import { useRef } from 'react';
import { uniqueId } from './DataUtils';

/**
 * This hook returns a unique animation id for the object input.
 * If input changes (as in, reference equality is different), the animation id will change.
 * If input does not change, the animation id will not change.
 *
 * This is useful for animations. The Animate component
 * does have a `shouldReAnimate` prop but that doesn't seem to be doing what the name implies.
 * Also, we don't always want to re-animate on every render;
 * we only want to re-animate when the input changes. Not the internal state (e.g. `isAnimating`).
 *
 * @param input The object to check for changes. Uses reference equality (=== operator)
 * @param prefix Optional prefix to use for the animation id
 * @returns A unique animation id
 */
export function useAnimationId(input: unknown, prefix: string = 'animation-'): string {
  const animationId = useRef<string>(uniqueId(prefix));
  const prevProps = useRef<unknown>(input);

  if (prevProps.current !== input) {
    animationId.current = uniqueId(prefix);
    prevProps.current = input;
  }

  return animationId.current;
}
