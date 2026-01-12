import { ApiDoc } from './types';

export const useMarginAPI: ApiDoc = {
  name: 'useMargin',
  props: [],
  desc: {
    'en-US': (
      <section>
        <p>
          Margin is the empty space around the chart. Excludes axes and legend and brushes and the like. This is
          declared by the user in the chart props. If you are interested in the space occupied by axes, legend, or
          brushes, use <code>useOffset</code> instead.
        </p>
        <p>
          Returns <code>undefined</code> if used outside a chart context.
        </p>
      </section>
    ),
  },
  returnValue: 'Margin | undefined',
  returnDesc: {
    'en-US': (
      <section>
        <p>
          The margin of the chart in pixels, or <code>undefined</code> if not in a chart context.
        </p>
      </section>
    ),
  },
};
