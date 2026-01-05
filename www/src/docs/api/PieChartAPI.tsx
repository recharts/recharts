import { ApiDoc } from './types';

export const PieChartAPI: ApiDoc = {
  name: 'PieChart',
  props: [
    {
      name: 'accessibilityLayer',
      type: 'boolean',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Turn on accessibility support for keyboard-only and screen reader users.</p>
          </section>
        ),
      },
      defaultVal: true,
    },
    {
      name: 'barCategoryGap',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The gap between two bar categories, which can be a percent value or a fixed value.</p>
          </section>
        ),
      },
      defaultVal: '10%',
    },
    {
      name: 'barGap',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The gap between two bars in the same category.</p>
          </section>
        ),
      },
      defaultVal: 4,
    },
    {
      name: 'barSize',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The width or height of each bar. If the barSize is not specified, the size of the bar will be calculated
              by the barCategoryGap, barGap and the quantity of bar groups.
            </p>
          </section>
        ),
      },
    },
    { name: 'children', type: 'ReactNode', isOptional: true },
    { name: 'className', type: 'string', isOptional: true },
    {
      name: 'cx',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The x-coordinate of center. If set a percentage, the final value is obtained by multiplying the percentage
              of width.
            </p>
          </section>
        ),
      },
      defaultVal: '50%',
    },
    {
      name: 'cy',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The y-coordinate of center. If set a percentage, the final value is obtained by multiplying the percentage
              of height.
            </p>
          </section>
        ),
      },
      defaultVal: '50%',
    },
    {
      name: 'data',
      type: 'ReadonlyArray<unknown>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The source data. Each element should be an object. The properties of each object represent the values of
              different data dimensions.
            </p>
            <p>
              Use the <code>dataKey</code> prop to specify which properties to use.
            </p>
          </section>
        ),
      },
      format: ["data={[{ name: 'a', value: 12 }]}", "data={[{ label: 'foo', measurements: [5, 12] }]}"],
    },
    { name: 'dataKey', type: 'Function | number | string', isOptional: true },
    { name: 'desc', type: 'string', isOptional: true },
    {
      name: 'endAngle',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Angle, in degrees, at which the chart should end.</p>
          </section>
        ),
      },
      defaultVal: 360,
    },
    {
      name: 'height',
      type: '`${number}%` | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The height of chart container. Can be a number or a percent string like &quot;100%&quot;.</p>
          </section>
        ),
      },
      examples: [{ name: 'Chart sizing guide', url: '/guide/sizes/', isExternal: false }],
    },
    { name: 'id', type: 'string', isOptional: true },
    {
      name: 'innerRadius',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The inner radius of the chart. If set a percentage, the final value is obtained by multiplying the
              percentage of maxRadius which is calculated by the width, height, cx, cy.
            </p>
          </section>
        ),
      },
      defaultVal: 0,
    },
    {
      name: 'layout',
      type: '"centric" | "radial"',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The layout of chart defines the orientation of axes, graphical items, and tooltip.</p>
          </section>
        ),
      },
      defaultVal: 'centric',
    },
    {
      name: 'margin',
      type: 'Partial<Margin>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Empty space around the container.</p>
          </section>
        ),
      },
      defaultVal: { top: 5, right: 5, bottom: 5, left: 5 },
    },
    { name: 'maxBarSize', type: 'number', isOptional: true },
    {
      name: 'outerRadius',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The outer radius of the chart. If set a percentage, the final value is obtained by multiplying the
              percentage of maxRadius which is calculated by the width, height, cx, cy.
            </p>
          </section>
        ),
      },
      defaultVal: '80%',
    },
    {
      name: 'responsive',
      type: 'boolean',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If true, then it will listen to container size changes and adapt the SVG chart accordingly. If false, then
              it renders the chart at the specified width and height and will stay that way even if the container size
              changes.
            </p>
            <p>
              This is similar to ResponsiveContainer but without the need for an extra wrapper component. The{' '}
              <code>responsive</code> prop also uses standard CSS sizing rules, instead of custom resolution logic (like
              ResponsiveContainer does).
            </p>
          </section>
        ),
      },
      defaultVal: false,
      examples: [{ name: 'Chart sizing guide', url: '/guide/sizes/', isExternal: false }],
    },
    { name: 'reverseStackOrder', type: 'boolean', isOptional: true, defaultVal: false },
    { name: 'role', type: 'string', isOptional: true },
    {
      name: 'stackOffset',
      type: '"expand" | "none" | "positive" | "sign" | "silhouette" | "wiggle"',
      isOptional: true,
      defaultVal: 'none',
    },
    {
      name: 'startAngle',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Angle in degrees from which the chart should start.</p>
          </section>
        ),
      },
      defaultVal: 0,
    },
    { name: 'style', type: 'React.CSSProperties', isOptional: true },
    {
      name: 'syncId',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Charts with the same syncId will synchronize Tooltip and Brush events.</p>
          </section>
        ),
      },
      examples: [{ name: 'Synchronized Charts Example', url: '/examples/SynchronizedAreaChart/', isExternal: false }],
    },
    {
      name: 'syncMethod',
      type: '"index" | "value" | Function',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Customize how the charts will synchronize tooltips and brushes.
              <code>index</code>: synchronize using the data index in the data array. Index expects that all data has
              the same length.
              <code>value</code>: synchronize using the data value on categorical axis (categorical: XAxis in horizontal
              layout, YAxis in vertical layout). function: a custom sync method which receives tick and data as argument
              and returns an index.
            </p>
          </section>
        ),
      },
      defaultVal: 'index',
    },
    {
      name: 'tabIndex',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>If and where the chart should appear in the tab order</p>
          </section>
        ),
      },
    },
    { name: 'throttleDelay', type: 'number', isOptional: true },
    { name: 'title', type: 'string', isOptional: true },
    {
      name: 'width',
      type: '`${number}%` | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The width of chart container. Can be a number or a percent string like &quot;100%&quot;.</p>
          </section>
        ),
      },
      examples: [{ name: 'Chart sizing guide', url: '/guide/sizes/', isExternal: false }],
    },
    {
      name: 'onClick',
      type: 'CategoricalChartFunc',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of click in this chart.</p>
          </section>
        ),
      },
    },
    {
      name: 'onContextMenu',
      type: 'CategoricalChartFunc',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of contextmenu in this chart.</p>
          </section>
        ),
      },
    },
    {
      name: 'onDoubleClick',
      type: 'CategoricalChartFunc',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of dblclick in this chart.</p>
          </section>
        ),
      },
    },
    {
      name: 'onMouseDown',
      type: 'CategoricalChartFunc',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mousedown in this chart.</p>
          </section>
        ),
      },
    },
    {
      name: 'onMouseEnter',
      type: 'CategoricalChartFunc',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mouseenter in this chart.</p>
          </section>
        ),
      },
    },
    {
      name: 'onMouseLeave',
      type: 'CategoricalChartFunc',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mouseleave in this chart.</p>
          </section>
        ),
      },
    },
    {
      name: 'onMouseMove',
      type: 'CategoricalChartFunc',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mousemove in this chart.</p>
          </section>
        ),
      },
    },
    {
      name: 'onMouseUp',
      type: 'CategoricalChartFunc',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mouseup in this chart.</p>
          </section>
        ),
      },
    },
    {
      name: 'onTouchEnd',
      type: 'CategoricalChartFunc',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of touchend in this chart.</p>
          </section>
        ),
      },
    },
    {
      name: 'onTouchMove',
      type: 'CategoricalChartFunc',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of touchmove in this chart.</p>
          </section>
        ),
      },
    },
    {
      name: 'onTouchStart',
      type: 'CategoricalChartFunc',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of touchstart in this chart.</p>
          </section>
        ),
      },
    },
  ],
  parentComponents: ['ResponsiveContainer'],
  childrenComponents: [
    'Label',
    'Legend',
    'Pie',
    'PolarAngleAxis',
    'PolarGrid',
    'PolarRadiusAxis',
    'Radar',
    'RadialBar',
    'Tooltip',
  ],
};
