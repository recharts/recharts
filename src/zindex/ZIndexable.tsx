import * as React from 'react';
import { useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { noop } from 'es-toolkit';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { selectZIndexQuerySelector } from './zIndexSelectors';
import { registerZIndexPortal, unregisterZIndexPortal } from '../state/zIndexSlice';

/**
 * Higher order function that takes a component and returns a new component
 * that has a new prop: zIndex: number.
 * If zIndex is provided, the component will be rendered in a separate SVG
 * portal with the corresponding zIndex.
 */
export function withZIndex<T extends { zIndex?: number }>(
  WrappedComponent: React.ComponentType<T>,
): React.ComponentType<T> {
  const ZIndexableComponent = (props: T) => {
    const { zIndex } = props;
    const shouldRenderInPortal = zIndex === undefined || zIndex === 0;

    const dispatch = useAppDispatch();
    useLayoutEffect(() => {
      if (!shouldRenderInPortal) {
        // nothing to do
        return noop;
      }
      /*
       * Because zIndexes are dynamic (meaning, we're not working with a predefined set of layers,
       * but we allow users to define any zIndex at any time), we need to register
       * the requested zIndex in the global store. This way, the ZIndexPortals component
       * can render the corresponding portals and only the requested ones.
       */
      dispatch(registerZIndexPortal({ zIndex }));
      return () => {
        dispatch(unregisterZIndexPortal({ zIndex }));
      };
    }, [dispatch, zIndex, shouldRenderInPortal]);

    const portalId: string | undefined = useAppSelector(state => selectZIndexQuerySelector(state, zIndex));

    if (shouldRenderInPortal) {
      // If no zIndex is provided or zIndex is 0, render normally without portals
      return <WrappedComponent {...props} />;
    }

    const zIndexPortal = document.querySelector(portalId);
    if (zIndexPortal) {
      return createPortal(<WrappedComponent {...props} />, zIndexPortal);
    }
    /*
     * If the portal is not found, this means it has not been rendered yet.
     * So here we render null and wait for the next render cycle.
     */
    return null;
  };

  // Set a more descriptive display name for easier debugging
  ZIndexableComponent.displayName = `withZIndex(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
  return ZIndexableComponent;
}
