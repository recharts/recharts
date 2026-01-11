import { ApiDoc } from './types';

export const usePlotAreaAPI: ApiDoc = {
  name: 'usePlotArea',
  props: [],
  desc: {
    'en-US': (
      <section>
        <p>
          Plot area is the area where the actual chart data is rendered. This means: bars, lines, scatter points, etc.
        </p>
        <p>The plot area is calculated based on the chart dimensions and the offset.</p>
      </section>
    ),
  },
  returnValue: 'PlotArea | undefined',
  returnDesc: {
    'en-US': (
      <section>
        <p>Plot area of the chart in pixels, or undefined if used outside a chart context.</p>
      </section>
    ),
  },
};
