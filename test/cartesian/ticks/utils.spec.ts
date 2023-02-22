import { getEveryNThTick } from '../../../src/cartesian/ticks/utils';

describe('getEveryNThTick', () => {
  test.each([
    // Ever tick can be shown
    [[true], [0]],
    [
      [true, true],
      [0, 1],
    ],
    [
      [true, true, true],
      [0, 1, 2],
    ],
    // Every 2nd tick
    [
      [true, false, true],
      [0, 2],
    ],
    [
      [true, false, true, false],
      [0, 2],
    ],

    [
      [true, false, true, true],
      [0, 2],
    ],
    // Only the first tick can be shown.
    [[true], [0]],
    [[true, false], [0]],
    [[true, true, false], [0]],
    // The first tick is returned, even if it is isShow=false
    [[false], [0]],
  ])(`getEveryNThTick for visibility %s returns the ticks at index %s`, (tickVisibility, result) => {
    const ticks = tickVisibility.map((isShow, index) => ({ isShow, coordinate: index }));

    const resultingTickValues = getEveryNThTick(ticks).map(tick => tick.coordinate);

    expect(resultingTickValues).toEqual(result);
  });
});
