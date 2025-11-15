import { describe, it, expect } from 'vitest';
import { combineActiveTooltipIndex } from '../../../../src/state/selectors/combiners/combineActiveTooltipIndex';
import { TooltipInteractionState } from '../../../../src/state/tooltipSlice';
import { ChartData } from '../../../../src/state/chartDataSlice';
import { CategoricalDomain, NumberDomain } from '../../../../src/util/types';

const createInteraction = (index: TooltipInteractionState['index']): TooltipInteractionState => ({
  active: true,
  index,
  dataKey: undefined,
  coordinate: undefined,
});

describe('combineActiveTooltipIndex', () => {
  it('returns null when the hovered datum falls outside the provided numeric domain', () => {
    const chartData: ChartData = [{ value: 2 }, { value: 10 }];
    const tooltipInteraction = createInteraction('1');
    const domain: NumberDomain = [0, 5] as const;

    const result = combineActiveTooltipIndex(tooltipInteraction, chartData, 'value', domain);

    expect(result).toBeNull();
  });

  it('clamps the index to visible entries and still honors the numeric domain guard', () => {
    const chartData: ChartData = [{ value: 2 }, { value: 7 }, { value: 15 }];
    const tooltipInteraction = createInteraction('30');
    const domain: NumberDomain = [0, 20] as const;

    const result = combineActiveTooltipIndex(tooltipInteraction, chartData, 'value', domain);

    expect(result).toBe('2');
  });

  it('keeps categorical axes interactive because categorical domains are ignored by the guard', () => {
    const chartData: ChartData = [{ category: 'alpha' }];
    const tooltipInteraction = createInteraction('0');
    const categoricalDomain: CategoricalDomain = ['alpha', 'beta'];

    const result = combineActiveTooltipIndex(tooltipInteraction, chartData, 'category', categoricalDomain);

    expect(result).toBe('0');
  });

  it('returns the original index when it cannot be coerced into a finite number', () => {
    const chartData: ChartData = [];
    const tooltipInteraction = createInteraction('node-3');

    const result = combineActiveTooltipIndex(tooltipInteraction, chartData, undefined, undefined);

    expect(result).toBe('node-3');
  });
});
