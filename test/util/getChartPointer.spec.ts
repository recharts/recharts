import { describe, it, expect } from 'vitest';
import { getChartPointer } from '../../src/util/getChartPointer';
import { getMockDomRect } from '../helper/mockGetBoundingClientRect';
import { ChartPointer, MousePointer } from '../../src/util/types';

describe('getChartPointer', () => {
  it('should return chart coordinates relative to the top-left corner of the chart', () => {
    const event: MousePointer = {
      clientX: 100,
      clientY: 100,
      currentTarget: {
        getBoundingClientRect: () => getMockDomRect({ left: 50, top: 50, width: 100, height: 100 }),
        offsetWidth: 100,
        offsetHeight: 100,
      },
    };
    const actual = getChartPointer(event);

    const expected: ChartPointer = {
      chartX: 50,
      chartY: 50,
    };

    expect(actual).toEqual(expected);
  });

  it('should return chart coordinates relative to the top-left corner of the chart with scale', () => {
    const event: MousePointer = {
      /*
       * clientX and clientY are the mouse position relative to the viewport, including scroll.
       * These ignore scale on whatever is being hovered over,
       * so while we hover over the same position relative to the viewport,
       * the chart below has moved because it's now scaled 2x.
       */
      clientX: 100,
      clientY: 100,
      currentTarget: {
        /*
         * As one zooms in and out, the rect.width and rect.height will change,
         * but the offsetWidth and offsetHeight will remain the same.
         *
         * So this mock target represents a chart that's been scaled by 2x.
         */
        getBoundingClientRect: () => getMockDomRect({ left: 50, top: 50, width: 200, height: 200 }),
        offsetWidth: 100,
        offsetHeight: 100,
      },
    };
    const actual = getChartPointer(event);

    const expected: ChartPointer = {
      /*
       * Since we hover over the same position relative to the viewport,
       * but the chart is now twice as big, the chart coordinates should be half.
       */
      chartX: 25,
      chartY: 25,
    };

    expect(actual).toEqual(expected);
  });
});
