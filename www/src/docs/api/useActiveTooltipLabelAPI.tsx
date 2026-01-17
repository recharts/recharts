import { ApiDoc } from './types';

export const useActiveTooltipLabelAPI: ApiDoc = {
  name: 'useActiveTooltipLabel',
  props: [],
  desc: {
    'en-US': (
      <section>
        <p>
          Returns the active tooltip label. The label is one of the values from the chart data, and is used to display
          in the tooltip content.
        </p>
        <p>Returns undefined if there is no active user interaction or if used outside a chart context</p>
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
  returnValue: 'number | string | undefined',
  returnDesc: {
    'en-US': (
      <section>
        <p>ActiveLabel</p>
      </section>
    ),
  },
};
