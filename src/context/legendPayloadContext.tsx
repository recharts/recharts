import { LegendPayload } from '../component/DefaultLegendContent';
import { useAppSelector } from '../state/hooks';
import { selectLegendPayload } from '../state/selectors/legendSelectors';

/**
 * Use this hook in Legend, or anywhere else where you want to read the current Legend items.
 * @return all Legend items ready to be rendered
 */
export function useLegendPayload(): ReadonlyArray<LegendPayload> {
  return useAppSelector(selectLegendPayload);
}
