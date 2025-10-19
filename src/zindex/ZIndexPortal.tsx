import * as React from 'react';
import { useLayoutEffect } from 'react';
import { useChartWidth, useChartHeight } from '../context/chartLayoutContext';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { registerZIndexPortalId, unregisterZIndexPortalId } from '../state/zIndexSlice';

export function getZIndexPortalId(zIndex: number) {
  return `recharts-zindex-portal-${zIndex}`;
}

function ZIndexSvgPortal({ zIndex, width, height }: { zIndex: number; width: number; height: number }) {
  const portalId = getZIndexPortalId(zIndex);
  const dispatch = useAppDispatch();
  useLayoutEffect(() => {
    dispatch(registerZIndexPortalId({ zIndex, elementId: portalId }));
    return () => {
      dispatch(unregisterZIndexPortalId({ zIndex }));
    };
  }, [dispatch, zIndex, portalId]);
  return <g id={portalId} width={width} height={height} />;
}

export function AllPositiveZIndexPortals() {
  const zIndexMap = useAppSelector(state => state.zIndex.zIndexMap);
  const chartWidth = useChartWidth();
  const chartHeight = useChartHeight();

  return (
    <>
      {Object.keys(zIndexMap)
        .map(zIndexStr => parseInt(zIndexStr, 10))
        .filter(zIndex => zIndex >= 0)
        .sort((a, b) => a - b)
        .map(zIndex => {
          const portalId = getZIndexPortalId(zIndex);
          return <ZIndexSvgPortal key={portalId} zIndex={zIndex} width={chartWidth} height={chartHeight} />;
        })}
    </>
  );
}
