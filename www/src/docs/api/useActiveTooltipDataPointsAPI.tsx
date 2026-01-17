import { ApiDoc } from './types';

export const useActiveTooltipDataPointsAPI: ApiDoc = {
  name: 'useActiveTooltipDataPoints',
  props: [],
  desc: {
    'en-US': (
      <section>
        <p>
          Returns the currently active data points being displayed in the Tooltip. Active means that it is currently
          visible; this hook will return <code>undefined</code> if there is no current interaction.
        </p>
        <p>
          This follows the <code>&lt;Tooltip /&gt;</code> props, if the Tooltip element is present in the chart. If
          there is no <code>&lt;Tooltip /&gt;</code> then this hook will follow the default Tooltip props.
        </p>
        <p>
          Data point is whatever you pass as an input to the chart using the <code>data={}</code> prop.
        </p>
        <p>
          This returns an array because a chart can have multiple graphical items in it (multiple Lines for example) and
          tooltip with <code>shared={true}</code> will display all items at the same time.
        </p>
        <p>Returns undefined when used outside a chart context.</p>
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
  returnValue: 'Array<readonly T> | undefined',
  returnDesc: {
    'en-US': (
      <section>
        <p>Data points that are currently visible in a Tooltip</p>
      </section>
    ),
  },
};
