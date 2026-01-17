import { Link } from 'react-router';
import { ApiDoc } from './types';

export const useIsTooltipActiveAPI: ApiDoc = {
  name: 'useIsTooltipActive',
  props: [],
  desc: {
    'en-US': (
      <section>
        <p>
          Returns true if the <Link to="/api/Tooltip/">Tooltip</Link> is currently active (visible).
        </p>
        <p>Returns false if the Tooltip is not active or if used outside a chart context.</p>
        <p>
          Recharts only allows one Tooltip per chart, so this hook does not take any parameters. Weird things may happen
          if you have multiple Tooltip components in the same chart so please don&#39;t do that.
        </p>
        <p>Available since Recharts 3.7</p>
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
  returnValue: 'boolean',
  returnDesc: {
    'en-US': (
      <section>
        <p>True if the Tooltip is active, false otherwise.</p>
      </section>
    ),
  },
};
