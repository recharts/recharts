import { ApiDoc } from './types';

export const useXAxisDomainAPI: ApiDoc = {
  name: 'useXAxisDomain',
  props: [
    {
      name: 'xAxisId',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The <code>xAxisId</code> of the X-axis. Defaults to <code>0</code> if not provided.
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
        <p>Returns the calculated domain of an X-axis.</p>
        <p>
          The domain can be numerical: <code>[min, max]</code>, or categorical:{' '}
          <code>[&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]</code>.
        </p>
        <p>
          The type of the domain is defined by the <code>type</code> prop of the XAxis.
        </p>
        <p>
          The values of the domain are calculated based on the data and the <code>dataKey</code> of the axis.
        </p>
        <p>
          If the chart has a Brush, the domain will be filtered to the brushed indexes if the hook is used outside a
          Brush context, and the full domain will be returned if the hook is used inside a Brush context.
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
  returnValue: 'CategoricalDomain | NumberDomain | undefined',
  returnDesc: {
    'en-US': (
      <section>
        <p>
          The domain of the X-axis, or <code>undefined</code> if it cannot be calculated or if used outside a chart
          context.
        </p>
      </section>
    ),
  },
};
