import { Link } from 'react-router';
import { ApiDoc } from './types';

export const TooltipAPI: ApiDoc = {
  name: 'Tooltip',
  props: [
    {
      name: 'active',
      type: 'boolean',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If true, then Tooltip is always displayed, once an activeIndex is set by mouse over, or programmatically.
              If false, then Tooltip is never displayed. If undefined, Recharts will control when the Tooltip displays.
              This includes mouse and keyboard controls.
            </p>
          </section>
        ),
      },
      examples: [{ name: 'Pie Chart With Needle', url: '/examples/PieChartWithNeedle/', isExternal: false }],
    },
    {
      name: 'allowEscapeViewBox',
      type: 'AllowInDimension',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>This option allows the tooltip to extend beyond the viewBox of the chart itself.</p>
          </section>
        ),
      },
      defaultVal: { x: false, y: false },
    },
    {
      name: 'animationDuration',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Specifies the duration of animation, the unit of this option is ms.</p>
          </section>
        ),
      },
      defaultVal: 400,
    },
    {
      name: 'animationEasing',
      type: '"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear"',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The type of easing function.</p>
          </section>
        ),
      },
      defaultVal: 'ease',
    },
    {
      name: 'axisId',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Tooltip always attaches itself to the &quot;Tooltip&quot; axis. Which axis is it? Depends on the layout:
            </p>
            <ul>
              <li>horizontal layout -&gt; X axis</li>
              <li>vertical layout -&gt; Y axis</li>
              <li>radial layout -&gt; radial axis</li>
              <li>centric layout -&gt; angle axis</li>
            </ul>
            <p>Tooltip will use the default axis for the layout, unless you specify an axisId.</p>
          </section>
        ),
      },
      defaultVal: 0,
      examples: [{ name: 'Multiple X Axes', url: '/examples/MultiXAxisExample/', isExternal: false }],
    },
    {
      name: 'content',
      type: 'Function | ReactNode',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Renders the content of the tooltip.</p>
            <p>This should return HTML elements, not SVG elements.</p>
            <ul>
              <li>
                If not set, the <Link to="/api/DefaultTooltipContent/">DefaultTooltipContent</Link> component is used.
              </li>
              <li>If set to a React element, this element will be cloned and extra props will be passed in.</li>
              <li>If set to a function, the function will be called and should return HTML elements.</li>
            </ul>
          </section>
        ),
      },
      examples: [
        { name: 'Example with custom content', url: '/examples/CustomContentOfTooltip/', isExternal: false },
        { name: 'Percent Area Chart', url: '/examples/PercentAreaChart/', isExternal: false },
        { name: 'Candlestick', url: '/examples/Candlestick/', isExternal: false },
        { name: 'Banded Chart', url: '/examples/BandedChart/', isExternal: false },
        { name: 'Target Price Chart with active Label', url: '/examples/TargetPriceChart/', isExternal: false },
        { name: 'Bubble Chart', url: '/examples/BubbleChart/', isExternal: false },
        { name: 'Custom Active Shape Pie Chart', url: '/examples/CustomActiveShapePieChart/', isExternal: false },
        { name: 'Pie Chart With Needle', url: '/examples/PieChartWithNeedle/', isExternal: false },
      ],
    },
    {
      name: 'contentStyle',
      type: 'React.CSSProperties',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The style of tooltip content which is a dom element.</p>
          </section>
        ),
      },
      defaultVal: {},
    },
    {
      name: 'cursor',
      type: 'React.SVGProps<SVGElement> | ReactNode | false | true',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If set false, no cursor will be drawn when tooltip is active. If set a object, the option is the
              configuration of cursor. If set a React element, the option is the custom react element of drawing cursor.
            </p>
          </section>
        ),
      },
      defaultVal: true,
      examples: [
        { name: 'Simple Scatter Chart', url: '/examples/SimpleScatterChart/', isExternal: false },
        { name: 'Three Dim Scatter Chart', url: '/examples/ThreeDimScatterChart/', isExternal: false },
        { name: 'Joint Line Scatter Chart', url: '/examples/JointLineScatterChart/', isExternal: false },
        { name: 'Bubble Chart', url: '/examples/BubbleChart/', isExternal: false },
        { name: 'Scatter Chart With Labels', url: '/examples/ScatterChartWithLabels/', isExternal: false },
        { name: 'Multiple Y Axes Scatter Chart', url: '/examples/MultipleYAxesScatterChart/', isExternal: false },
        { name: 'Scatter Chart With Cells', url: '/examples/ScatterChartWithCells/', isExternal: false },
      ],
    },
    {
      name: 'defaultIndex',
      type: 'null | number | string',
      isOptional: true,
      examples: [
        { name: 'Population Pyramid', url: '/examples/PopulationPyramid/', isExternal: false },
        { name: 'Timeline', url: '/examples/TimelineExample/', isExternal: false },
        { name: 'Candlestick', url: '/examples/Candlestick/', isExternal: false },
        { name: 'Target Price Chart with active Label', url: '/examples/TargetPriceChart/', isExternal: false },
        { name: 'Simple Scatter Chart', url: '/examples/SimpleScatterChart/', isExternal: false },
        { name: 'Three Dim Scatter Chart', url: '/examples/ThreeDimScatterChart/', isExternal: false },
        { name: 'Joint Line Scatter Chart', url: '/examples/JointLineScatterChart/', isExternal: false },
        { name: 'Bubble Chart', url: '/examples/BubbleChart/', isExternal: false },
        { name: 'Scatter Chart With Labels', url: '/examples/ScatterChartWithLabels/', isExternal: false },
        { name: 'Two Level Pie Chart', url: '/examples/TwoLevelPieChart/', isExternal: false },
      ],
    },
    {
      name: 'filterNull',
      type: 'boolean',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>When an item of the payload has value null or undefined, this item won&#39;t be displayed.</p>
          </section>
        ),
      },
      defaultVal: true,
    },
    {
      name: 'formatter',
      type: 'Formatter<TValue, TName>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Function to customize the value in the tooltip. If you return an array, the first entry will be the
              formatted &quot;value&quot;, and the second entry will be the formatted &quot;name&quot;
            </p>
          </section>
        ),
      },
      examples: [{ name: 'Population Pyramid', url: '/examples/PopulationPyramid/', isExternal: false }],
    },
    {
      name: 'includeHidden',
      type: 'boolean',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If true, the tooltip will display information about hidden series. Defaults to false. Interacting with the
              hide property of Area, Bar, Line, Scatter.
            </p>
          </section>
        ),
      },
      defaultVal: false,
    },
    {
      name: 'isAnimationActive',
      type: '"auto" | false | true',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If set false, animation of tooltip will be disabled. If set &quot;auto&quot;, the animation will be
              disabled in SSR and enabled in browser.
            </p>
          </section>
        ),
      },
      defaultVal: 'auto',
      examples: [{ name: 'Custom Content Of Tooltip', url: '/examples/CustomContentOfTooltip/', isExternal: false }],
    },
    {
      name: 'itemSorter',
      type: '"dataKey" | "name" | "value" | Function',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Sorts tooltip items. Defaults to &#39;name&#39; which means it sorts alphabetically by graphical item{' '}
              <code>name</code> property.
            </p>
          </section>
        ),
      },
      defaultVal: 'name',
    },
    {
      name: 'itemStyle',
      type: 'React.CSSProperties',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The style of default tooltip content item which is a li element.</p>
          </section>
        ),
      },
      defaultVal: {},
    },
    { name: 'labelClassName', type: 'string', isOptional: true },
    {
      name: 'labelFormatter',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The formatter function of label in tooltip.</p>
          </section>
        ),
      },
    },
    {
      name: 'labelStyle',
      type: 'React.CSSProperties',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The style of default tooltip label which is a p element.</p>
          </section>
        ),
      },
      defaultVal: {},
    },
    {
      name: 'offset',
      type: 'Coordinate | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The offset size between the position of tooltip and the mouse cursor position. When a number is provided,
              the same offset is applied to both x and y axes.
            </p>
            <p>
              When a Coordinate object is provided, you can specify different offsets for each axis (x and y as numbers)
            </p>
          </section>
        ),
      },
      defaultVal: 10,
    },
    { name: 'payloadUniqBy', type: 'UniqueFunc<TooltipPayloadEntry> | false | true', isOptional: true },
    {
      name: 'portal',
      type: 'HTMLElement | null',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If portal is defined, then Tooltip will use this element as a target for rendering using React Portal:{' '}
              <a href="https://react.dev/reference/react-dom/createPortal">
                https://react.dev/reference/react-dom/createPortal
              </a>
            </p>
            <p>If this is undefined then Tooltip renders inside the recharts-wrapper element.</p>
          </section>
        ),
      },
    },
    {
      name: 'position',
      type: 'Partial<Coordinate>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If this field is set, the tooltip will be displayed at the specified position regardless of the mouse
              position.
            </p>
            <p>
              You can set a single field (x or y) and let the other field be calculated automatically based on the mouse
              position.
            </p>
          </section>
        ),
      },
    },
    { name: 'reverseDirection', type: 'AllowInDimension', isOptional: true, defaultVal: { x: false, y: false } },
    {
      name: 'separator',
      type: 'string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The separator between name and value.</p>
          </section>
        ),
      },
      defaultVal: ' : ',
    },
    {
      name: 'shared',
      type: 'boolean',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Defines whether the tooltip is reacting to the current data point, or to all data points at the current
              axis coordinate.
            </p>
            <ul>
              <li>
                <code>true</code>: tooltip will appear on top of all bars on an axis tick.
              </li>
              <li>
                <code>false</code>: tooltip will appear on individual bars.
              </li>
            </ul>
            <p>Different chart types allow different modes, and have different defaults.</p>
          </section>
        ),
      },
      examples: [
        {
          name: 'Tooltip event type and shared prop wiki page',
          url: 'https://github.com/recharts/recharts/wiki/Tooltip-event-type-and-shared-prop',
          isExternal: true,
        },
        { name: 'Timeline', url: '/examples/TimelineExample/', isExternal: false },
      ],
    },
    {
      name: 'trigger',
      type: '"click" | "hover"',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If <code>hover</code> then the Tooltip shows on mouse enter and hides on mouse leave.
            </p>
            <p>
              If <code>click</code> then the Tooltip shows after clicking and stays active.
            </p>
          </section>
        ),
      },
      defaultVal: 'hover',
    },
    { name: 'useTranslate3d', type: 'boolean', isOptional: true, defaultVal: false },
    { name: 'wrapperClassName', type: 'string', isOptional: true },
    {
      name: 'wrapperStyle',
      type: 'React.CSSProperties',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              CSS styles to be applied to the wrapper <code>div</code> element.
            </p>
          </section>
        ),
      },
      defaultVal: {},
      examples: [{ name: 'Bubble Chart', url: '/examples/BubbleChart/', isExternal: false }],
    },
  ],
  desc: {
    'en-US': (
      <section>
        <p>
          The Tooltip component displays a floating box with data values when hovering over or clicking on chart
          elements.
        </p>
        <p>
          It can be configured to show information for individual data points or for all points at a specific axis
          coordinate. The appearance and content of the tooltip can be customized via props.
        </p>
      </section>
    ),
  },
  links: [
    {
      name: 'Tooltip event type and shared prop wiki page',
      url: 'https://github.com/recharts/recharts/wiki/Tooltip-event-type-and-shared-prop',
      isExternal: true,
    },
    {
      name: 'Active index replacement when migrating from Recharts v2 to v3',
      url: '/guide/activeIndex/',
      isExternal: false,
    },
    { name: 'Simple Area Chart', url: '/examples/SimpleAreaChart/', isExternal: false },
    { name: 'Stacked Area Chart', url: '/examples/StackedAreaChart/', isExternal: false },
    { name: 'Area Chart Connect Nulls', url: '/examples/AreaChartConnectNulls/', isExternal: false },
    { name: 'Cardinal Area Chart', url: '/examples/CardinalAreaChart/', isExternal: false },
    { name: 'Percent Area Chart', url: '/examples/PercentAreaChart/', isExternal: false },
    { name: 'Synchronized Area Chart', url: '/examples/SynchronizedAreaChart/', isExternal: false },
    { name: 'Area Chart Fill By Value', url: '/examples/AreaChartFillByValue/', isExternal: false },
    { name: 'Simple Bar Chart', url: '/examples/SimpleBarChart/', isExternal: false },
    { name: 'Stacked Bar Chart', url: '/examples/StackedBarChart/', isExternal: false },
    { name: 'Mix Bar Chart', url: '/examples/MixBarChart/', isExternal: false },
  ],
  parentComponents: [
    'AreaChart',
    'BarChart',
    'ComposedChart',
    'FunnelChart',
    'LineChart',
    'PieChart',
    'RadarChart',
    'RadialBarChart',
    'Sankey',
    'ScatterChart',
    'SunburstChart',
    'Treemap',
  ],
};
