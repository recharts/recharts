// unit test for getEquidisantTicks

import { getEquidistantTicks } from '../../src/cartesian/getEquidistantTicks';
import { CartesianTickItem } from '../../src/util/types';

describe('getEquidistantTicks', () => {
  // We mock getting the tick width by simply using the value of the tick.
  // This makes testing rather easy and intuitive.
  const getTickSize = (tick: CartesianTickItem) => {
    return tick.value;
  };

  it('should return empty array if no ticks are passed', () => {
    const result = getEquidistantTicks(1, { start: 0, end: 100 }, getTickSize, [], 0);
    expect(result).toEqual([]);
  });

  test.each([
    // If all ticks fit, we show all ticks
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
    // We always show the first tick, even if it does not fit
    { ticksThatFit: [1, 2, 3, 4, 5, 6, 7, 8, 9], resultingTicks: [0] },
  ])('Show only every n-th tick that fits, but always show the first.', ({ ticksThatFit, resultingTicks }) => {
    const ticks = [] as CartesianTickItem[];
    for (let index = 0; index < 10; index++) {
      ticks.push({ value: ticksThatFit.includes(index) ? 10 : 1000, coordinate: index * 50 });
    }
    const result = getEquidistantTicks(1, { start: 0, end: 10 * 50 }, getTickSize, ticks, 0);
    expect(result).toEqual(resultingTicks.map(index => ticks[index]));
  });
});
