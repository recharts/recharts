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

  test.each([
    // Case 1: All ticks fit (0-9). Step 1 works.
    // Offset 0. Result: All.
    { ticksThatFit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], resultingTicks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },

    // Case 2: We want every 2nd tick to fit: 1, 3, 5, 7, 9.
    // We mark 0, 2, 4... as "bad" (not in ticksThatFit) so the algorithm is forced to skip them.
    // We MUST mark 9 as "fitting" so it passes the visibility check.
    { ticksThatFit: [1, 3, 5, 7, 9], resultingTicks: [1, 3, 5, 7, 9] },

    // Case 3: We want every 3rd tick to fit: 0, 3, 6, 9.
    // Mark others as bad. 9 must be good.
    { ticksThatFit: [0, 3, 6, 9], resultingTicks: [0, 3, 6, 9] },

    // Case 4: Only the last tick fits.
    // It should return just the last tick.
    { ticksThatFit: [9], resultingTicks: [9] },
  ])('Show only every n-th tick that fits, anchoring at the end.', ({ ticksThatFit, resultingTicks }) => {
    const ticks: Array<TickItem> = [];
    for (let index = 0; index < 10; index++) {
      // If the index is in "ticksThatFit", it gets a valid size (10). Otherwise it gets a huge size (1000).
      ticks.push({ value: ticksThatFit.includes(index) ? 10 : 1000, coordinate: index * 50, index });
    }

    const result = getEquidistantPreserveEndTicks(1, { start: 0, end: 10 * 50 }, getTickSize, ticks, 0);

    const resultIndices = result.map(t => t.index);
    expect(resultIndices).toEqual(resultingTicks);
  });
});
