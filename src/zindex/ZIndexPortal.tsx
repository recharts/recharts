import * as React from 'react';
import { useLayoutEffect } from 'react';
import { useChartWidth, useChartHeight } from '../context/chartLayoutContext';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { registerZIndexPortalId, unregisterZIndexPortalId } from '../state/zIndexSlice';
import { useUniqueId } from '../util/useUniqueId';

function ZIndexSvgPortal({ zIndex, width, height }: { zIndex: number; width: number; height: number }) {
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
          return <ZIndexSvgPortal key={zIndex} zIndex={zIndex} width={chartWidth} height={chartHeight} />;
        })}
    </>
  );
}
