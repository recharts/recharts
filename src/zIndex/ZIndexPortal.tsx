import * as React from 'react';
import { useLayoutEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { registerZIndexPortalId, unregisterZIndexPortalId } from '../state/zIndexSlice';
import { useUniqueId } from '../util/useUniqueId';
import { selectAllRegisteredZIndexes } from './zIndexSelectors';

function ZIndexSvgPortal({ zIndex, isPanorama }: { zIndex: number; isPanorama: boolean }) {
  const prefix = isPanorama ? `recharts-zindex-panorama-` : `recharts-zindex-`;
  const portalId = useUniqueId(`${prefix}${zIndex}`);
  const dispatch = useAppDispatch();
  useLayoutEffect(() => {
    dispatch(registerZIndexPortalId({ zIndex, elementId: portalId, isPanorama }));
    return () => {
      dispatch(unregisterZIndexPortalId({ zIndex, isPanorama }));
    };
  }, [dispatch, zIndex, portalId, isPanorama]);
  // these g elements should not be tabbable
  return <g tabIndex={-1} id={portalId} />;
}

export function AllZIndexPortals({ children, isPanorama }: { children?: React.ReactNode; isPanorama: boolean }) {
  const allRegisteredZIndexes: ReadonlyArray<number> | undefined = useAppSelector(selectAllRegisteredZIndexes);

  if (!allRegisteredZIndexes || allRegisteredZIndexes.length === 0) {
    return children;
  }

  const allNegativeZIndexes = allRegisteredZIndexes.filter(zIndex => zIndex < 0);
  // We exclude zero on purpose - that is the default layer, and it doesn't need a portal.
  const allPositiveZIndexes = allRegisteredZIndexes.filter(zIndex => zIndex > 0);

  return (
    <>
      {allNegativeZIndexes.map(zIndex => (
        <ZIndexSvgPortal key={zIndex} zIndex={zIndex} isPanorama={isPanorama} />
      ))}
      {children}
      {allPositiveZIndexes.map(zIndex => (
        <ZIndexSvgPortal key={zIndex} zIndex={zIndex} isPanorama={isPanorama} />
      ))}
    </>
  );
}
