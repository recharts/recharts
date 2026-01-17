import { Link } from 'react-router';
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
          brushes, use <Link to="/api/useOffset/">useOffset</Link> instead, which also includes calculated widths and
          heights of axes and legends.
        </p>
        <p>
          Returns <code>undefined</code> if used outside a chart context.
        </p>
      </section>
    ),
  },
  links: [
    { name: 'Simple Line Chart Example', url: '/api/LineChart/', isExternal: false },
    { name: 'Simple Line Chart Example', url: '/api/useIsTooltipActive/', isExternal: false },
    { name: 'Simple Line Chart Example', url: '/api/useActiveTooltipCoordinate/', isExternal: false },
    { name: 'Simple Line Chart Example', url: '/api/useActiveTooltipDataPoints/', isExternal: false },
    { name: 'Simple Line Chart Example', url: '/api/useActiveTooltipLabel/', isExternal: false },
    { name: 'Simple Line Chart Example', url: '/api/useMargin/', isExternal: false },
    { name: 'Simple Line Chart Example', url: '/api/useOffset/', isExternal: false },
    { name: 'Simple Line Chart Example', url: '/api/usePlotArea/', isExternal: false },
    { name: 'Simple Line Chart Example', url: '/api/useChartWidth/', isExternal: false },
    { name: 'Simple Line Chart Example', url: '/api/useChartHeight/', isExternal: false },
    { name: 'Simple Line Chart Example', url: '/api/useXAxisDomain/', isExternal: false },
    { name: 'Simple Line Chart Example', url: '/api/useYAxisDomain/', isExternal: false },
  ],
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
