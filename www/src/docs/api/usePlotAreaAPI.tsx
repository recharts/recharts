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
        <p>
          Plot area <code>width</code> and <code>height</code> are the dimensions in pixels;
          <code>x</code> and <code>y</code> are the coordinates of the top-left corner of the plot area relative to the
          chart container.
        </p>
        <p>
          They are also independent of the scale and zoom, meaning that as the user zooms in and out, the plot area
          dimensions will not change as the chart gets visually larger or smaller.
        </p>
        <p>
          This hook must be used within a chart context (inside a <code>&lt;LineChart&gt;</code>,{' '}
          <code>&lt;BarChart&gt;</code>, etc.). This hook returns <code>undefined</code> if used outside a chart
          context.
        </p>
        <p>Available since Recharts 3.1</p>
      </section>
    ),
  },
  links: [{ name: 'Animated Bar Width Example', url: '/examples/AnimatedBarWidthExample/', isExternal: false }],
  returnValue: 'PlotArea | undefined',
  returnDesc: {
    'en-US': (
      <section>
        <p>Plot area of the chart in pixels, or undefined if used outside a chart context.</p>
      </section>
    ),
  },
};
