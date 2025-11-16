import { useLayoutEffect, useRef } from 'react';
import type { LegendPayload } from '../component/DefaultLegendContent';
import { useIsPanorama } from '../context/PanoramaContext';
import { selectChartLayout } from '../context/chartLayoutContext';
import { useAppDispatch, useAppSelector } from './hooks';
import { addLegendPayload, replaceLegendPayload, removeLegendPayload } from './legendSlice';

export function SetLegendPayload({ legendPayload }: { legendPayload: ReadonlyArray<LegendPayload> }): null {
  const dispatch = useAppDispatch();
  const isPanorama = useIsPanorama();
  const prevPayloadRef = useRef<ReadonlyArray<LegendPayload> | null>(null);

  useLayoutEffect(() => {
    if (isPanorama) {
      return;
    }
    if (prevPayloadRef.current === null) {
      dispatch(addLegendPayload(legendPayload));
    } else if (prevPayloadRef.current !== legendPayload) {
      dispatch(replaceLegendPayload({ prev: prevPayloadRef.current, next: legendPayload }));
    }
    prevPayloadRef.current = legendPayload;
  }, [dispatch, isPanorama, legendPayload]);

  useLayoutEffect(() => {
    return () => {
      if (prevPayloadRef.current) {
        dispatch(removeLegendPayload(prevPayloadRef.current));
        prevPayloadRef.current = null;
      }
    };
  }, [dispatch]);

  return null;
}

export function SetPolarLegendPayload({ legendPayload }: { legendPayload: ReadonlyArray<LegendPayload> }): null {
  const dispatch = useAppDispatch();
  const layout = useAppSelector(selectChartLayout);
  const prevPayloadRef = useRef<ReadonlyArray<LegendPayload> | null>(null);

  useLayoutEffect(() => {
    if (layout !== 'centric' && layout !== 'radial') {
      return;
    }
    if (prevPayloadRef.current === null) {
      dispatch(addLegendPayload(legendPayload));
    } else if (prevPayloadRef.current !== legendPayload) {
      dispatch(replaceLegendPayload({ prev: prevPayloadRef.current, next: legendPayload }));
    }
    prevPayloadRef.current = legendPayload;
  }, [dispatch, layout, legendPayload]);

  useLayoutEffect(() => {
    return () => {
      if (prevPayloadRef.current) {
        dispatch(removeLegendPayload(prevPayloadRef.current));
        prevPayloadRef.current = null;
      }
    };
  }, [dispatch]);

  return null;
}
