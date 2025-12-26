import { MaybeStackedGraphicalItem } from '../../types/StackedGraphicalItem';
import { BarPositionPosition } from '../../../util/ChartUtils';
import { BarWithPosition } from '../barSelectors';

export const combineBarPosition = (
  allBarPositions: ReadonlyArray<BarWithPosition> | undefined,
  barSettings: MaybeStackedGraphicalItem | undefined,
): BarPositionPosition | undefined => {
  if (allBarPositions == null || barSettings == null) {
    return undefined;
  }
  const position = allBarPositions.find(
    (p: BarWithPosition) =>
      p.stackId === barSettings.stackId && barSettings.dataKey != null && p.dataKeys.includes(barSettings.dataKey),
  );
  if (position == null) {
    return undefined;
  }
  return position.position;
};
