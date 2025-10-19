import * as React from 'react';
import { useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { noop } from 'es-toolkit';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { selectZIndexQuerySelector } from './zIndexSelectors';
import { registerZIndexPortal, unregisterZIndexPortal } from '../state/zIndexSlice';

type ZIndexableProps = {
  zIndex?: number;
  children?: React.ReactNode;
};

export function ZIndexable({ zIndex, children }: ZIndexableProps) {
  const shouldRenderInPortal = zIndex !== undefined && zIndex !== 0;

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

  if (!shouldRenderInPortal) {
    // If no zIndex is provided or zIndex is 0, render normally without portals
    return children;
  }

  const zIndexPortal = document.getElementById(portalId);

  if (zIndexPortal) {
    return createPortal(children, zIndexPortal);
  }
  /*
   * If the portal is not found, this means it has not been rendered yet.
   * So here we render null and wait for the next render cycle.
   */
  return null;
}
