import { ChartOffsetRequired } from '../../src/util/types';

export const emptyOffset: ChartOffsetRequired = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: 0,
  height: 0,
  brushBottom: 0,
};

export function makeChartOffset(partialOffset: Partial<ChartOffsetRequired>): ChartOffsetRequired {
  return {
    ...emptyOffset,
    ...partialOffset,
  };
}
