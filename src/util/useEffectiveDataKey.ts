import { useAppSelector } from '../state/hooks';
import { GraphicalItemDataKeySource, selectEffectiveDataKey } from '../state/selectors/effectiveDataKeySelectors';
import { DataKey } from './types';

/**
 * Returns the effective dataKey of a graphical item:
 * its own dataKey if it has one, otherwise the dataKey of its value axis.
 *
 * Returns the item's own dataKey when used outside a chart context.
 *
 * @param item dataKey and axis IDs of the graphical item, with defaults already applied
 * @returns effective dataKey, or undefined if neither the item nor its value axis define one
 */
export function useEffectiveDataKey({
  dataKey,
  xAxisId,
  yAxisId,
  angleAxisId,
  radiusAxisId,
}: GraphicalItemDataKeySource): DataKey<any> | undefined {
  return (
    useAppSelector(state => selectEffectiveDataKey(state, { dataKey, xAxisId, yAxisId, angleAxisId, radiusAxisId })) ??
    dataKey
  );
}
