import * as React from 'react';
import { useLayoutEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { selectZIndexPortalElement } from './zIndexSelectors';
import { registerZIndexPortal, unregisterZIndexPortal } from '../state/zIndexSlice';
import { useIsInChartContext } from '../context/chartLayoutContext';
import { useIsPanorama } from '../context/PanoramaContext';

/**
 * @since 3.4
 */
export interface ZIndexable {
  /**
   * Z-Index of this component and its children. The higher the value,
   * the more on top it will be rendered.
   * Components with higher zIndex will appear in front of components with lower zIndex.
   * If undefined or 0, the content is rendered in the default layer without portals.
   *
   * @since 3.4
   * @defaultValue 0
   * @see {@link https://recharts.github.io/en-US/guide/zIndex/ Z-Index and layers guide}
   */
  zIndex?: number;
}

type ZIndexLayerProps = {
  /**
   * Z-Index of this component and its children.
   *
   * The higher the value, the more on top it will be rendered.
   * Components with higher zIndex will appear in front of components with lower zIndex.
   *
   * If `undefined` or `0`, the content is rendered in the default layer without portals.
   */
  zIndex: number | undefined;
  /**
   * The content to render inside this zIndex layer.
   * Undefined children are allowed and will render nothing and will still report the zIndex to the portal system.
   */
  children?: React.ReactNode;
};

/**
 * A layer that renders its children into a portal corresponding to the given zIndex.
 * We can't use regular CSS `z-index` because SVG does not support it.
 * So instead, we create separate DOM nodes for each zIndex layer
 * and render the children into the corresponding DOM node using React portals.
 *
 * This component must be used inside a Chart component.
 *
 * @param zIndex numeric zIndex value, higher values are rendered on top of lower values
 * @param children the content to render inside this zIndex layer
 *
 * @since 3.4
 */
export function ZIndexLayer({ zIndex, children }: ZIndexLayerProps) {
  /*
   * If we are outside of chart, then we can't rely on the zIndex portal state,
   * so we just render normally.
   */
  const isInChartContext = useIsInChartContext();
  /*
   * If zIndex is undefined then we render normally without portals.
   * Also, if zIndex is 0, we render normally without portals,
   * because 0 is the default layer that does not need a portal.
   */
  const shouldRenderInPortal = isInChartContext && zIndex !== undefined && zIndex !== 0;

  const isPanorama = useIsPanorama();

  /**
   * When zIndex changes, the new portal element is not immediately available because
   * it requires a full render cycle through AllZIndexPortals → ZIndexSvgPortal.
   * During this transition we keep rendering into the previous portal element
   * to avoid an unmount/remount cycle that would cause children to briefly disappear.
   *
   * `registeredZIndexesRef` tracks every zIndex we have registered so that
   * we can defer unregistration of old values until the new portal is ready.
   * `lastPortalElementRef` caches the most recent valid portal DOM node.
   */
  const lastPortalElementRef = useRef<Element | undefined>(undefined);
  const registeredZIndexesRef = useRef(new Set<number>());

  const dispatch = useAppDispatch();

  const portalElement: Element | undefined = useAppSelector(state =>
    selectZIndexPortalElement(state, zIndex, isPanorama),
  );

  /*
   * Lifecycle effect — handles both registration and deferred cleanup.
   *
   * Registration: when zIndex changes we register the new value WITHOUT
   * immediately unregistering the old one. This keeps the old <g> element
   * alive in the DOM so `lastPortalElementRef` remains a valid render target.
   *
   * Deferred cleanup: once `portalElement` for the *new* zIndex becomes
   * available we unregister every stale zIndex that is no longer needed.
   */
  useLayoutEffect(() => {
    if (!shouldRenderInPortal) {
      // Portal rendering was disabled — clean up any stale registrations
      const registered = registeredZIndexesRef.current;
      registered.forEach(z => dispatch(unregisterZIndexPortal({ zIndex: z })));
      registered.clear();
      lastPortalElementRef.current = undefined;
      return;
    }

    /*
     * Because zIndexes are dynamic (meaning, we're not working with a predefined set of layers,
     * but we allow users to define any zIndex at any time), we need to register
     * the requested zIndex in the global store. This way, the ZIndexPortals component
     * can render the corresponding portals and only the requested ones.
     */
    // Register the current zIndex (idempotent — skips if already registered)
    if (!registeredZIndexesRef.current.has(zIndex)) {
      dispatch(registerZIndexPortal({ zIndex }));
      registeredZIndexesRef.current.add(zIndex);
    }

    // When the new portal element is ready, retire old zIndex registrations
    if (portalElement) {
      lastPortalElementRef.current = portalElement;
      const registered = registeredZIndexesRef.current;
      registered.forEach(z => {
        if (z !== zIndex) {
          dispatch(unregisterZIndexPortal({ zIndex: z }));
          registered.delete(z);
        }
      });
    }
  }, [dispatch, zIndex, shouldRenderInPortal, portalElement]);

  // Unmount-only cleanup — unregister everything when the component is removed
  useLayoutEffect(() => {
    const registered = registeredZIndexesRef.current;
    return () => {
      registered.forEach(z => dispatch(unregisterZIndexPortal({ zIndex: z })));
      registered.clear();
    };
  }, [dispatch]);

  if (!shouldRenderInPortal) {
    return children;
  }

  // Prefer the current portal; fall back to the cached one during transitions
  const targetElement = portalElement ?? lastPortalElementRef.current;
  if (!targetElement) {
    // Very first render — no portal has ever been registered yet
    return null;
  }

  return createPortal(children, targetElement);
}
