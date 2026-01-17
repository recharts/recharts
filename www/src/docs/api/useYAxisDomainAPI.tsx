import { ApiDoc } from './types';

export const useYAxisDomainAPI: ApiDoc = {
  name: 'useYAxisDomain',
  props: [
    {
      name: 'yAxisId',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The <code>yAxisId</code> of the Y-axis. Defaults to <code>0</code> if not provided.
            </p>
          </section>
        ),
      },
      defaultVal: 'defaultAxisId',
    },
  ],
  desc: {
    'en-US': (
      <section>
        <p>Returns the calculated domain of a Y-axis.</p>
        <p>
          The domain can be numerical: <code>[min, max]</code>, or categorical:{' '}
          <code>[&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]</code>.
        </p>
        <p>
          The type of the domain is defined by the <code>type</code> prop of the YAxis.
        </p>
        <p>
          The values of the domain are calculated based on the data and the <code>dataKey</code> of the axis.
        </p>
        <p>Does not interact with Brushes, as Y-axes do not support brushing.</p>
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
  returnValue: 'CategoricalDomain | NumberDomain | undefined',
  returnDesc: {
    'en-US': (
      <section>
        <p>
          The domain of the Y-axis, or <code>undefined</code> if it cannot be calculated or if used outside a chart
          context.
        </p>
      </section>
    ),
  },
};
