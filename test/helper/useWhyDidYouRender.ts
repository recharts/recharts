import { useEffect, useRef } from 'react';

/**
 * This hook is used to log component re-renders in development mode.
 * It is useful for debugging performance issues and understanding why a component is re-rendering.
 * It should only be used in development mode and not in production.
 * @param componentName The name of the component to log
 * @param props The props of the component
 * @param hooks Optional hooks or other properties to observe for changes
 * @returns void
 */
export function useWhyDidYouRender<T extends Record<string, any>>(
  componentName: string,
  props: T,
  hooks?: Record<string, any>,
): void {
  const previousProps = useRef<T>();
  const previousHooks = useRef<Record<string, any>>();

  useEffect(() => {
    const allProps = { ...props, ...hooks };
    if (previousProps.current) {
      const previousAllProps = { ...previousProps.current, ...previousHooks.current };
      const allKeys = Object.keys({ ...allProps, ...previousAllProps });
      const changesObj: Record<string, { from: any; to: any }> = {};
      allKeys.forEach(key => {
        if (previousAllProps[key] !== allProps[key]) {
          changesObj[key] = {
            from: previousAllProps[key],
            to: allProps[key],
          };
        }
      });

      const changedKeys = Object.keys(changesObj);

      if (changedKeys.length) {
        const prev = Object.fromEntries(changedKeys.map(key => [key, previousAllProps[key]]));
        const curr = Object.fromEntries(changedKeys.map(key => [key, allProps[key]]));
        // eslint-disable-next-line no-console
        console.log('[why-did-you-render?]', componentName, Object.keys(changesObj).join(', '), {
          prev,
          curr,
        });
      }
    }

    previousProps.current = props;
    previousHooks.current = hooks;
  });
}
