import { describe, expect, it } from 'vitest';
import type { MouseHandlerDataParam, TickItem } from 'recharts';

import { closestDate } from '../../../../src/docs/exampleComponents/LineChart/SynchronizedDifferentData';

const ticks: ReadonlyArray<TickItem> = ['2024-01-01', '2024-01-06', '2024-01-11'].map((value, index) => ({
  value,
  index,
  coordinate: index * 100,
}));

function interaction(activeLabel: string | number | undefined): MouseHandlerDataParam {
  return {
    activeTooltipIndex: undefined,
    isTooltipActive: true,
    activeIndex: undefined,
    activeLabel,
    activeDataKey: undefined,
    activeCoordinate: undefined,
  };
}

describe('SynchronizedDifferentData closestDate syncMethod', () => {
  it('returns the index of an exactly matching date', () => {
    expect(closestDate(ticks, interaction('2024-01-06'))).toBe(1);
  });

  it('snaps to the nearest date when it is within two days', () => {
    expect(closestDate(ticks, interaction('2024-01-08'))).toBe(1);
    expect(closestDate(ticks, interaction('2024-01-09'))).toBe(2);
  });

  it('returns -1 when the nearest date is more than two days away', () => {
    expect(closestDate(ticks, interaction('2024-01-20'))).toBe(-1);
  });

  it('returns -1 when the hovered label is not a date', () => {
    expect(closestDate(ticks, interaction('Page A'))).toBe(-1);
    expect(closestDate(ticks, interaction(undefined))).toBe(-1);
  });

  it('returns -1 when the receiving chart has no ticks', () => {
    expect(closestDate([], interaction('2024-01-06'))).toBe(-1);
  });
});
