import { ApiDoc } from './types';

export const ReferenceLineAPI: ApiDoc = {
  name: 'ReferenceLine',
  props: [
    { name: 'className', type: 'string', isOptional: true },
    {
      name: 'ifOverflow',
      type: '"discard" | "extendDomain" | "hidden" | "visible"',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Defines how to draw this component if it falls partly outside the canvas:</p>
            <ul>
              <li>
                <code>discard</code>: the whole component will not be drawn at all
              </li>
              <li>
                <code>hidden</code>: the component will be clipped to the chart plot area
              </li>
              <li>
                <code>visible</code>: the component will be drawn completely
              </li>
              <li>
                <code>extendDomain</code>: the domain of the overflown axis will be extended such that the whole
                component fits into the plot area
              </li>
            </ul>
          </section>
        ),
      },
      defaultVal: 'discard',
    },
    {
      name: 'label',
      type: '(union of 7 variants)',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Renders a single label.</p>
            <ul>
              <li>
                <code>false</code>: no labels are rendered
              </li>
              <li>
                <code>string</code> | <code>number</code>: the content of the label
              </li>
              <li>
                <code>object</code>: the props of LabelList component
              </li>
              <li>
                <code>ReactElement</code>: a custom label element
              </li>
              <li>
                <code>function</code>: a render function of custom label
              </li>
            </ul>
          </section>
        ),
      },
      defaultVal: false,
      examples: [
        { name: 'Reference elements with a label', url: '/examples/LineChartWithReferenceLines/', isExternal: false },
        { name: 'Responsive Container Example', url: '/api/ResponsiveContainer/', isExternal: false },
        { name: 'Reference Line Position Example', url: '/api/ReferenceLine/', isExternal: false },
      ],
    },
    {
      name: 'position',
      type: '"end" | "middle" | "start"',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The position of the reference line when the axis has bandwidth (e.g., a band scale). This determines where
              within the band the line is drawn.
            </p>
          </section>
        ),
      },
      defaultVal: 'middle',
      examples: [{ name: 'Reference Line Position Example', url: '/api/ReferenceLine/', isExternal: false }],
    },
    {
      name: 'segment',
      type: 'readonly [\n  {\n    x?: number | string;\n    y?: number | string;\n  },\n  {\n    x?: number | string;\n    y?: number | string;\n  },\n]',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Tuple of coordinates. If defined, renders a diagonal line segment.</p>
          </section>
        ),
      },
      examples: [{ name: 'Reference Line Example', url: '/api/ReferenceLine/', isExternal: false }],
    },
    { name: 'shape', type: 'Function | ReactNode', isOptional: true },
    {
      name: 'strokeWidth',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The width of the stroke</p>
          </section>
        ),
      },
      defaultVal: 1,
    },
    {
      name: 'x',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>If defined, renders a vertical line on this position.</p>
            <p>
              This value is using your chart&#39;s domain, so you will provide a data value instead of a pixel value.
              ReferenceLine will internally calculate the correct pixel position.
            </p>
          </section>
        ),
      },
      format: ['<ReferenceLine x="Monday" />'],
      examples: [
        { name: 'Responsive Container Example', url: '/api/ResponsiveContainer/', isExternal: false },
        { name: 'Reference Line Position Example', url: '/api/ReferenceLine/', isExternal: false },
      ],
    },
    {
      name: 'xAxisId',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The id of x-axis which is corresponding to the data. Required when there are multiple XAxes.</p>
          </section>
        ),
      },
      defaultVal: 0,
    },
    {
      name: 'y',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>If defined, renders a horizontal line on this position.</p>
            <p>
              This value is using your chart&#39;s domain, so you will provide a data value instead of a pixel value.
              ReferenceLine will internally calculate the correct pixel position.
            </p>
          </section>
        ),
      },
      format: ['<ReferenceLine y="Page D" />'],
      examples: [
        { name: 'Positive and Negative Bar Chart', url: '/examples/PositiveAndNegativeBarChart/', isExternal: false },
        { name: 'Brush Bar Chart', url: '/examples/BrushBarChart/', isExternal: false },
        { name: 'Bar Chart Stacked By Sign', url: '/examples/BarChartStackedBySign/', isExternal: false },
        { name: 'Responsive Container Example', url: '/api/ResponsiveContainer/', isExternal: false },
        { name: 'Reference Line Example', url: '/api/ReferenceLine/', isExternal: false },
      ],
    },
    {
      name: 'yAxisId',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The id of y-axis which is corresponding to the data. Required when there are multiple YAxes.</p>
          </section>
        ),
      },
      defaultVal: 0,
    },
    {
      name: 'zIndex',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Z-Index of this component and its children. The higher the value, the more on top it will be rendered.
              Components with higher zIndex will appear in front of components with lower zIndex. If undefined or 0, the
              content is rendered in the default layer without portals.
            </p>
          </section>
        ),
      },
      defaultVal: 400,
      examples: [{ name: 'Z-Index and layers guide', url: '/guide/zIndex/', isExternal: false }],
    },
  ],
  desc: {
    'en-US': (
      <section>
        <p>Draws a line on the chart connecting two points.</p>
        <p>
          This component, unlike{' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/line">line</a>, is aware of the
          cartesian coordinate system, so you specify the dimensions by using data coordinates instead of pixels.
        </p>
        <p>ReferenceLine will calculate the pixels based on the provided data coordinates.</p>
        <p>
          If you prefer to render using pixels rather than data coordinates, consider using the{' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/line">line SVG element</a>{' '}
          instead.
        </p>
      </section>
    ),
  },
  links: [
    { name: 'Positive and Negative Bar Chart', url: '/examples/PositiveAndNegativeBarChart/', isExternal: false },
    { name: 'Brush Bar Chart', url: '/examples/BrushBarChart/', isExternal: false },
    { name: 'Bar Chart Stacked By Sign', url: '/examples/BarChartStackedBySign/', isExternal: false },
    { name: 'Responsive Container Example', url: '/api/ResponsiveContainer/', isExternal: false },
    { name: 'Reference Line Position Example', url: '/api/ReferenceLine/', isExternal: false },
  ],
  parentComponents: ['AreaChart', 'BarChart', 'ComposedChart', 'FunnelChart', 'LineChart', 'ScatterChart'],
  childrenComponents: ['Label'],
};
