import { useEffect } from 'react';
import { LegendPayload } from '../component/DefaultLegendContent';
import { useAppDispatch, useAppSelector } from './hooks';
import { addLegendPayload, removeLegendPayload } from './legendSlice';
import { useIsPanorama } from '../context/PanoramaContext';
import { selectChartLayout } from '../context/chartLayoutContext';

const noop = () => {};

export function SetLegendPayload({ legendPayload }: { legendPayload: ReadonlyArray<LegendPayload> }): null {
  const dispatch = useAppDispatch();
  const isPanorama = useIsPanorama();
  useEffect(() => {
    if (isPanorama) {
      return noop;
    }
    dispatch(addLegendPayload(legendPayload));
    return () => {
      dispatch(removeLegendPayload(legendPayload));
    };
  }, [dispatch, isPanorama, legendPayload]);
  return null;
}

export function SetPolarLegendPayload({ legendPayload }: { legendPayload: ReadonlyArray<LegendPayload> }): null {
  const dispatch = useAppDispatch();
  const layout = useAppSelector(selectChartLayout);
  useEffect(() => {
    if (layout !== 'centric' && layout !== 'radial') {
      return noop;
    }
    dispatch(addLegendPayload(legendPayload));
    return () => {
      dispatch(removeLegendPayload(legendPayload));
    };
  }, [dispatch, legendPayload]);
  return null;
}
