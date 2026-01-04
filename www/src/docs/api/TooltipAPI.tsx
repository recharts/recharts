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
      type: '"linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out"',
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
      type: 'string | number',
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
    },
    {
      name: 'content',
      type: 'ReactNode | Function',
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
      examples: [{ name: 'Example with custom content', url: '/examples/CustomContentOfTooltip/', isExternal: false }],
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
      type: 'false | true | React.SVGProps<SVGElement> | ReactNode',
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
    },
    { name: 'defaultIndex', type: 'null | string | number', isOptional: true },
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
      type: 'false | true | "auto"',
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
    },
    {
      name: 'itemSorter',
      type: '"name" | "dataKey" | "value" | Function',
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
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The offset size between the position of tooltip and the mouse cursor position.</p>
          </section>
        ),
      },
      defaultVal: 10,
    },
    { name: 'payloadUniqBy', type: 'false | true | UniqueFunc<TooltipPayloadEntry>', isOptional: true },
    {
      name: 'portal',
      type: 'null | HTMLElement',
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
      ],
    },
    {
      name: 'trigger',
      type: '"hover" | "click"',
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
    'Treemap',
  ],
};
