import * as React from 'react';
import { useLayoutEffect } from 'react';
import { useChartWidth, useChartHeight } from '../context/chartLayoutContext';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { registerZIndexPortalId, unregisterZIndexPortalId } from '../state/zIndexSlice';
import { useUniqueId } from '../util/useUniqueId';
import { selectAllRegisteredZIndexes } from './zIndexSelectors';

function ZIndexSvgPortal({
  zIndex,
  width,
  height,
}: {
  zIndex: number;
  width: number | undefined;
  height: number | undefined;
}) {
  const portalId = useUniqueId(`recharts-zindex-${zIndex}`);
  const dispatch = useAppDispatch();
  useLayoutEffect(() => {
    dispatch(registerZIndexPortalId({ zIndex, elementId: portalId }));
    return () => {
      dispatch(unregisterZIndexPortalId({ zIndex }));
    };
  }, [dispatch, zIndex, portalId]);
  return <g id={portalId} width={width} height={height} />;
}

export function AllZIndexPortals({ children }: { children?: React.ReactNode }) {
  const chartWidth = useChartWidth();
  const chartHeight = useChartHeight();

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
        <ZIndexSvgPortal key={zIndex} zIndex={zIndex} width={chartWidth} height={chartHeight} />
      ))}
      {children}
      {allPositiveZIndexes.map(zIndex => (
        <ZIndexSvgPortal key={zIndex} zIndex={zIndex} width={chartWidth} height={chartHeight} />
      ))}
    </>
  );
}
