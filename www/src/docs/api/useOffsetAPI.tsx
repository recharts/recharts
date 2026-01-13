import { ApiDoc } from './types';

export const useOffsetAPI: ApiDoc = {
  name: 'useOffset',
  props: [],
  desc: {
    'en-US': (
      <section>
        <p>Returns the offset of the chart in pixels.</p>
        <p>
          Offset defines the blank space between the chart and the plot area. This blank space is occupied by supporting
          elements like axes, legends, and brushes.
        </p>
        <p>The offset includes:</p>
        <ul>
          <li>Margins</li>
          <li>Width and height of the axes</li>
          <li>Width and height of the legend</li>
          <li>Brush height</li>
        </ul>
        <p>
          If you are interested in the margin alone, use <a href="useMargin">useMargin</a> instead.
        </p>
        <p>
          The offset is independent of charts position on the page, meaning it does not change as the chart is scrolled
          or resized.
        </p>
        <p>
          It is also independent of the scale and zoom, meaning that as the user zooms in and out, the numbers will not
          change as the chart gets visually larger or smaller.
        </p>
        <p>
          This hook must be used within a chart context (inside a <code>&lt;LineChart&gt;</code>,{' '}
          <code>&lt;BarChart&gt;</code>, etc.). This hook returns <code>undefined</code> if used outside a chart
          context.
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
