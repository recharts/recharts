import { getEquidistantTicks, getEquidistantPreserveEndTicks } from '../../src/cartesian/getEquidistantTicks';
import { CartesianTickItem, TickItem } from '../../src/util/types';

describe('getEquidistantTicks', () => {
  const getTickSize = (tick: CartesianTickItem) => {
    return tick.value;
  };

  it('should return empty array if no ticks are passed', () => {
    const result = getEquidistantTicks(1, { start: 0, end: 100 }, getTickSize, [], 0);
    expect(result).toEqual([]);
  });

  test.each([
    { ticksThatFit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], resultingTicks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
    { ticksThatFit: [0, 1, 2, 3, 4, 5, 6, 7, 8], resultingTicks: [0, 2, 4, 6, 8] },
    { ticksThatFit: [0, 1, 2, 3, 4, 5, 6, 7], resultingTicks: [0, 5] },
    { ticksThatFit: [0, 1, 2, 3, 4, 5, 6], resultingTicks: [0, 5] },
    { ticksThatFit: [0, 1, 2, 3, 4, 5], resultingTicks: [0, 5] },
    { ticksThatFit: [0, 1, 2, 3, 4], resultingTicks: [0] },
    { ticksThatFit: [0, 1, 2, 3], resultingTicks: [0] },
    { ticksThatFit: [0, 1, 2], resultingTicks: [0] },
    { ticksThatFit: [0, 1], resultingTicks: [0] },
    { ticksThatFit: [0], resultingTicks: [0] },
    { ticksThatFit: [1, 2, 3, 4, 5, 6, 7, 8, 9], resultingTicks: [0] },
  ])('Show only every n-th tick that fits, but always show the first.', ({ ticksThatFit, resultingTicks }) => {
    const ticks: Array<TickItem> = [];
    for (let index = 0; index < 10; index++) {
      ticks.push({ value: ticksThatFit.includes(index) ? 10 : 1000, coordinate: index * 50, index });
    }
    const result = getEquidistantTicks(1, { start: 0, end: 10 * 50 }, getTickSize, ticks, 0);
    expect(result).toEqual(resultingTicks.map(index => ticks[index]));
  });
});

describe('getEquidistantPreserveEndTicks', () => {
  const getTickSize = (tick: CartesianTickItem) => {
    return tick.value;
  };

  it('should return empty array if no ticks are passed', () => {
    const result = getEquidistantPreserveEndTicks(1, { start: 0, end: 100 }, getTickSize, [], 0);
    expect(result).toEqual([]);
  });

  it('should skip ticks to satisfy minTickGap while preserving the end tick', () => {
    // Create 5 ticks at coordinates: 0, 10, 20, 30, 40.
    const ticks = [
      { value: 'A', coordinate: 0 },
      { value: 'B', coordinate: 10 },
      { value: 'C', coordinate: 20 },
      { value: 'D', coordinate: 30 },
      { value: 'E', coordinate: 40 },
    ].map((t, i) => ({ ...t, index: i }));

    // The ticks are 10px wide.
    const getTickSizeStatic = () => 10;

    // The ticks are 10px apart. We set minTickGap to 15px.
    // This forces the algorithm to skip every other tick (Step Size 2) to avoid overlap.
    // Since we anchor at the end (Index 4), we expect indices 4, 2, 0.

    const result = getEquidistantPreserveEndTicks(
      1,
      { start: 0, end: 100 },
      getTickSizeStatic,
      ticks,
      8, // minTickGap
    );

    // We expect indices 0, 2, 4 (Values A, C, E)
    expect(result.map(t => t.value)).toEqual(['A', 'C', 'E']);
  });
});
