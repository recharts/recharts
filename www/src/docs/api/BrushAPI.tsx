import { ApiDoc } from './types';

export const BrushAPI: ApiDoc = {
  name: 'Brush',
  props: [
    { name: 'alwaysShowText', type: 'boolean', isOptional: true, defaultVal: false },
    { name: 'ariaLabel', type: 'string', isOptional: true },
    { name: 'children', type: 'ReactNode', isOptional: true },
    { name: 'className', type: 'string', isOptional: true },
    {
      name: 'dataKey',
      type: 'Function | number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Decides how to extract the value of this Brush from the data:</p>
            <ul>
              <li>
                <code>string</code>: the name of the field in the data object;
              </li>
              <li>
                <code>number</code>: the index of the field in the data;
              </li>
              <li>
                <code>function</code>: a function that receives the data object and returns the value of this Brush.
              </li>
            </ul>
          </section>
        ),
      },
    },
    { name: 'dy', type: 'number | string', isOptional: true },
    {
      name: 'endIndex',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The default end index of brush. If the option is not set, the end index will be calculated by the length
              of data.
            </p>
          </section>
        ),
      },
    },
    {
      name: 'gap',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Number of data points to skip between chart refreshes.</p>
          </section>
        ),
      },
      defaultVal: 1,
    },
    {
      name: 'height',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Height of the brush in pixels.</p>
          </section>
        ),
      },
      defaultVal: 40,
    },
    { name: 'leaveTimeOut', type: 'number', isOptional: true, defaultVal: 1000 },
    { name: 'padding', type: 'Padding', isOptional: true, defaultVal: { top: 1, right: 1, bottom: 1, left: 1 } },
    {
      name: 'startIndex',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The default start index of brush. If the option is not set, the start index will be 0.</p>
          </section>
        ),
      },
    },
    {
      name: 'tickFormatter',
      type: 'BrushTickFormatter',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The formatter function of ticks.</p>
          </section>
        ),
      },
    },
    { name: 'traveller', type: 'Function | ReactNode', isOptional: true },
    {
      name: 'travellerWidth',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The width of each traveller.</p>
          </section>
        ),
      },
      defaultVal: 5,
    },
    {
      name: 'width',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Width of the brush in pixels. If undefined, defaults to the chart width.</p>
          </section>
        ),
      },
    },
    {
      name: 'x',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The x-coordinate of brush. If left undefined, it will be computed from the chart&#39;s offset and margins.
            </p>
          </section>
        ),
      },
    },
    {
      name: 'y',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The y-coordinate of brush. If left undefined, it will be computed from the chart&#39;s offset and margins.
            </p>
          </section>
        ),
      },
    },
    {
      name: 'onChange',
      type: 'OnBrushUpdate',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The handler of changing the active scope of brush.</p>
          </section>
        ),
      },
    },
    { name: 'onDragEnd', type: 'OnBrushUpdate', isOptional: true },
  ],
  desc: {
    'en-US': (
      <section>
        <p>
          Renders a scrollbar that allows the user to zoom and pan in the chart along its XAxis. It also allows you to
          render a small overview of the chart inside the brush that is always visible and shows the full data set so
          that the user can see where they are zoomed in.
        </p>
        <p>
          If a chart is synchronized with other charts using the <code>syncId</code> prop on the chart, the brush will
          also synchronize the zooming and panning between all synchronized charts.
        </p>
      </section>
    ),
  },
  links: [
    { name: 'BarChart with Brush', url: '/examples/BrushBarChart/', isExternal: false },
    { name: 'Synchronized Brush', url: '/examples/SynchronizedLineChart/', isExternal: false },
  ],
  parentComponents: ['AreaChart', 'BarChart', 'ComposedChart', 'FunnelChart', 'LineChart', 'ScatterChart'],
};
