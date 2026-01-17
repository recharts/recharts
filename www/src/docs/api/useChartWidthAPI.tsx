import { ApiDoc } from './types';

export const useChartWidthAPI: ApiDoc = {
  name: 'useChartWidth',
  props: [],
  desc: {
    'en-US': (
      <section>
        <p>Returns the width of the chart in pixels.</p>
        <p>
          If you are using chart with hardcoded <code>width</code> prop, then the width returned will be the same as the{' '}
          <code>width</code> prop on the main chart element.
        </p>
        <p>
          If you are using a chart with a <code>ResponsiveContainer</code>, the width will be the size of the chart as
          the ResponsiveContainer has decided it would be.
        </p>
        <p>
          If the chart has any axes or legend, the <code>width</code> will be the size of the chart including the axes
          and legend. Meaning: adding axes and legend will not change the width.
        </p>
        <p>
          The dimensions do not scale, meaning as user zoom in and out, the width number will not change as the chart
          gets visually larger or smaller.
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
  ],
  returnValue: 'number | undefined',
  returnDesc: {
    'en-US': (
      <section>
        <p>
          The width of the chart in pixels, or <code>undefined</code> if not in a chart context.
        </p>
      </section>
    ),
  },
};
