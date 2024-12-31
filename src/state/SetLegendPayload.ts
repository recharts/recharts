import { useEffect } from 'react';
import { LegendPayload } from '../component/DefaultLegendContent';
import { useAppDispatch } from './hooks';
import { addLegendPayload, removeLegendPayload } from './legendSlice';
import { useIsPanorama } from '../context/PanoramaContext';

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
