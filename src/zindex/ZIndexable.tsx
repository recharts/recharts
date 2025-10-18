import * as React from 'react';
import { createPortal } from 'react-dom';
import { useAppSelector } from '../state/hooks';
import { selectZIndexQuerySelector } from './selectZIndexQuerySelector';

/**
 * Higher order function that takes a component and returns a new component
 * that has a new prop: zIndex: number.
 * If zIndex is provided, the component will be rendered in a separate SVG
 * portal with the corresponding zIndex.
 */
export function withZIndex<T extends { zIndex?: number }>(WrappedComponent: React.ComponentType<T>) {
  return function ZIndexableComponent(props: T) {
    const { zIndex, ...rest } = props;
    const portalId = useAppSelector(state => selectZIndexQuerySelector(state, zIndex));

    if (portalId !== undefined) {
      const zIndexPortal = document.getElementById(portalId);
      if (zIndexPortal) {
        return createPortal(<WrappedComponent {...rest} />, zIndexPortal);
      }
      // If the portal is not found, render null and wait for it to be created
      return null;
    }

    // Render normally
    return <WrappedComponent {...props} />;
  };
}
