import { describe, it, expect } from 'vitest';
import { combineActiveTooltipIndex } from '../../../../src/state/selectors/combiners/combineActiveTooltipIndex';
import { TooltipInteractionState } from '../../../../src/state/tooltipSlice';
import { ChartData } from '../../../../src/state/chartDataSlice';
import { CategoricalDomain, NumberDomain, TickItem } from '../../../../src/util/types';

const createInteraction = (index: TooltipInteractionState['index']): TooltipInteractionState => ({
  active: true,
  index,
  dataKey: undefined,
  coordinate: undefined,
  graphicalItemId: undefined,
});

const createTicks = (values: ReadonlyArray<unknown>): ReadonlyArray<TickItem> =>
  values.map((value, index) => ({ value, index, coordinate: index * 10, offset: 0 }));

describe('combineActiveTooltipIndex', () => {
  it('returns null when the hovered datum falls outside the provided numeric domain', () => {
    const chartData: ChartData = [{ value: 2 }, { value: 10 }];
    const tooltipInteraction = createInteraction('1');
    const domain: NumberDomain = [0, 5] as const;

    const result = combineActiveTooltipIndex(tooltipInteraction, 'axis', chartData, undefined, 'value', domain);

    expect(result).toBeNull();
  });

  it('clamps the index to visible entries and still honors the numeric domain guard', () => {
    const chartData: ChartData = [{ value: 2 }, { value: 7 }, { value: 15 }];
    const tooltipInteraction = createInteraction('30');
    const domain: NumberDomain = [0, 20] as const;

    const result = combineActiveTooltipIndex(tooltipInteraction, 'axis', chartData, undefined, 'value', domain);

    expect(result).toBe('2');
  });

  it('keeps categorical axes interactive because categorical domains are ignored by the guard', () => {
    const chartData: ChartData = [{ category: 'alpha' }];
    const tooltipInteraction = createInteraction('0');
    const categoricalDomain: CategoricalDomain = ['alpha', 'beta'];

    const result = combineActiveTooltipIndex(
      tooltipInteraction,
      'axis',
      chartData,
      undefined,
      'category',
      categoricalDomain,
    );

    expect(result).toBe('0');
  });

  it('returns the original index when it cannot be coerced into a finite number', () => {
    const chartData: ChartData = [];
    const tooltipInteraction = createInteraction('node-3');

    const result = combineActiveTooltipIndex(tooltipInteraction, 'axis', chartData, undefined, undefined, undefined);

    expect(result).toBe('node-3');
  });

  it('reads the value of the tick at the index, not of the row at the index, when the two differ', () => {
    // The rows of two data arrays, one after the other, and the ticks made from their distinct categories
    const chartData: ChartData = [
      { value: 10 },
      { value: 20 },
      { value: 30 },
      { value: 40 },
      { value: 30 },
      { value: 5 },
    ];
    const tooltipTicks = createTicks([10, 20, 30, 40, 5]);
    const tooltipInteraction = createInteraction('4');
    const domain: NumberDomain = [4, 6] as const;

    const result = combineActiveTooltipIndex(tooltipInteraction, 'axis', chartData, tooltipTicks, 'value', domain);

    expect(result).toBe('4');
  });

  it('returns null when the tick at the index is outside the numeric domain', () => {
    const chartData: ChartData = [
      { value: 10 },
      { value: 20 },
      { value: 30 },
      { value: 40 },
      { value: 30 },
      { value: 5 },
    ];
    const tooltipTicks = createTicks([10, 20, 30, 40, 5]);
    const tooltipInteraction = createInteraction('4');
    const domain: NumberDomain = [40, 50] as const;

    const result = combineActiveTooltipIndex(tooltipInteraction, 'axis', chartData, tooltipTicks, 'value', domain);

    expect(result).toBeNull();
  });

  it('reads the value of the row at the index, and not of the tick, for an item interaction', () => {
    // The index of an item interaction is the position in the data of the hovered item, which the ticks know nothing of
    const chartData: ChartData = [
      { value: 10 },
      { value: 20 },
      { value: 30 },
      { value: 40 },
      { value: 30 },
      { value: 5 },
    ];
    const tooltipTicks = createTicks([10, 20, 30, 40, 5]);
    const tooltipInteraction = createInteraction('4');

    // the row at the index is outside of the domain, the tick at the index is inside of it
    expect(combineActiveTooltipIndex(tooltipInteraction, 'item', chartData, tooltipTicks, 'value', [4, 6])).toBeNull();
    // the row at the index is inside of the domain, the tick at the index is outside of it
    expect(combineActiveTooltipIndex(tooltipInteraction, 'item', chartData, tooltipTicks, 'value', [25, 35])).toBe('4');
  });

  it('reads the value of the row at the index when there is no tick at that index', () => {
    const chartData: ChartData = [{ value: 2 }, { value: 10 }];
    const tooltipTicks = createTicks([2]);
    const tooltipInteraction = createInteraction('1');
    const domain: NumberDomain = [0, 5] as const;

    const result = combineActiveTooltipIndex(tooltipInteraction, 'axis', chartData, tooltipTicks, 'value', domain);

    expect(result).toBeNull();
  });
});
