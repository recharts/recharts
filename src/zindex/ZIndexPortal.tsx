import * as React from 'react';
import { useLayoutEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { registerZIndexPortalId, unregisterZIndexPortalId } from '../state/zIndexSlice';
import { useUniqueId } from '../util/useUniqueId';
import { selectAllRegisteredZIndexes } from './zIndexSelectors';

function ZIndexSvgPortal({ zIndex }: { zIndex: number }) {
  const portalId = useUniqueId(`recharts-zindex-${zIndex}`);
  const dispatch = useAppDispatch();
  useLayoutEffect(() => {
    dispatch(registerZIndexPortalId({ zIndex, elementId: portalId }));
    return () => {
      dispatch(unregisterZIndexPortalId({ zIndex }));
    };
  }, [dispatch, zIndex, portalId]);
  return <g id={portalId} />;
}

export function AllZIndexPortals({ children }: { children?: React.ReactNode }) {
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
        <ZIndexSvgPortal key={zIndex} zIndex={zIndex} />
      ))}
      {children}
      {allPositiveZIndexes.map(zIndex => (
        <ZIndexSvgPortal key={zIndex} zIndex={zIndex} />
      ))}
    </>
  );
}
