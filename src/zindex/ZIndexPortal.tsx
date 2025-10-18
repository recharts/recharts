import * as React from 'react';
import { useLayoutEffect } from 'react';
import { useChartWidth, useChartHeight } from '../context/chartLayoutContext';
import { useAppDispatch } from '../state/hooks';
import { registerZIndexPortal, unregisterZIndexPortal } from '../state/zIndexSlice';

export function getZIndexPortalId(zIndex: number) {
  return `recharts-zindex-portal-${zIndex}`;
}

export function ZIndexSvgPortal({ zIndex }: { zIndex: number }) {
  const portalId = getZIndexPortalId(zIndex);
  const chartWidth = useChartWidth();
  const chartHeight = useChartHeight();
  const dispatch = useAppDispatch();
  useLayoutEffect(() => {
    dispatch(registerZIndexPortal({ zIndex, id: portalId }));
    return () => {
      dispatch(unregisterZIndexPortal({ zIndex }));
    };
  }, [dispatch, zIndex, portalId]);
  return <g id={portalId} width={chartWidth} height={chartHeight} />;
}
