import * as React from 'react';
import { useLayoutEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { registerZIndexPortalElement, unregisterZIndexPortalElement } from '../state/zIndexSlice';
import { selectAllRegisteredZIndexes } from './zIndexSelectors';

function ZIndexSvgPortal({ zIndex, isPanorama }: { zIndex: number; isPanorama: boolean }) {
  const ref = useRef<SVGGElement>(null);
  const dispatch = useAppDispatch();
  useLayoutEffect(() => {
    if (ref.current) {
      dispatch(registerZIndexPortalElement({ zIndex, element: ref.current, isPanorama }));
    }
    return () => {
      dispatch(unregisterZIndexPortalElement({ zIndex, isPanorama }));
    };
  }, [dispatch, zIndex, isPanorama]);
  // these g elements should not be tabbable
  return <g tabIndex={-1} ref={ref} className={`recharts-zIndex-layer_${zIndex}`} />;
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
