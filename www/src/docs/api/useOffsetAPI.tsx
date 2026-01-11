import { ApiDoc } from './types';

export const useOffsetAPI: ApiDoc = {
  name: 'useOffset',
  props: [],
  desc: {
    'en-US': (
      <section>
        <p>
          Offset defines the blank space between the chart and the plot area. This blank space is occupied by supporting
          elements like axes, legends, and brushes. This also includes any margins that might be applied to the chart.
          If you are interested in the margin alone, use <code>useMargin</code> instead.
        </p>
      </section>
    ),
  },
  returnValue: 'ChartOffset | undefined',
  returnDesc: {
    'en-US': (
      <section>
        <p>Offset of the chart in pixels, or undefined if used outside a chart context.</p>
      </section>
    ),
  },
};
