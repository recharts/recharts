import { ApiDoc } from './types';

export const ReferenceAreaAPI: ApiDoc = {
  name: 'ReferenceArea',
  props: [
    { name: 'children', type: 'ReactNode', isOptional: true },
    { name: 'className', type: 'string', isOptional: true },
    {
      name: 'ifOverflow',
      type: '"hidden" | "visible" | "discard" | "extendDomain"',
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
      examples: [{ name: 'Reference elements with a label', url: '/examples/LineChartWithReferenceLines/' }],
    },
    {
      name: 'radius',
      type: 'number | [number, number, number, number]',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If you provide a single number, it applies to all four corners. If you provide an array of four numbers,
              they apply to top-left, top-right, bottom-right, bottom-left corners respectively.
            </p>
          </section>
        ),
      },
      defaultVal: 0,
    },
    {
      name: 'shape',
      type: 'ReactNode | Function',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If set a ReactElement, the shape of the reference area can be customized. If set a function, the function
              will be called to render customized shape.
            </p>
          </section>
        ),
      },
    },
    {
      name: 'x1',
      type: 'string | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Starting X-coordinate of the area. This value is using your chart&#39;s domain, so you will provide a data
              value instead of a pixel value. ReferenceArea will internally calculate the correct pixel position.
            </p>
            <p>If undefined then the area will extend to the left edge of the chart plot area.</p>
          </section>
        ),
      },
      format: [
        '<ReferenceArea x1="Monday" x2="Friday" />',
        '<ReferenceArea x1={10} x2={50} />',
        '<ReferenceArea x1="Page C" />',
      ],
    },
    {
      name: 'x2',
      type: 'string | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Ending X-coordinate of the area. This value is using your chart&#39;s domain, so you will provide a data
              value instead of a pixel value. ReferenceArea will internally calculate the correct pixel position.
            </p>
            <p>If undefined then the area will extend to the right edge of the chart plot area.</p>
          </section>
        ),
      },
      format: [
        '<ReferenceArea x1="Monday" x2="Friday" />',
        '<ReferenceArea x1={10} x2={50} />',
        '<ReferenceArea x2="Page C" />',
      ],
    },
    {
      name: 'xAxisId',
      type: 'string | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The id of XAxis which is corresponding to the data. Required when there are multiple XAxes.</p>
          </section>
        ),
      },
      defaultVal: 0,
    },
    {
      name: 'y1',
      type: 'string | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Starting Y-coordinate of the area. This value is using your chart&#39;s domain, so you will provide a data
              value instead of a pixel value. ReferenceArea will internally calculate the correct pixel position.
            </p>
            <p>If undefined then the area will extend to the top edge of the chart plot area.</p>
          </section>
        ),
      },
      format: [
        '<ReferenceArea y1={100} y2={500} />',
        '<ReferenceArea y1="low" y2="high" />',
        '<ReferenceArea y1={200} />',
      ],
    },
    {
      name: 'y2',
      type: 'string | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Ending Y-coordinate of the area. This value is using your chart&#39;s domain, so you will provide a data
              value instead of a pixel value. ReferenceArea will internally calculate the correct pixel position.
            </p>
            <p>If undefined then the area will extend to the bottom edge of the chart plot area.</p>
          </section>
        ),
      },
      format: [
        '<ReferenceArea y1={100} y2={500} />',
        '<ReferenceArea y1="low" y2="high" />',
        '<ReferenceArea y2={400} />',
      ],
    },
    {
      name: 'yAxisId',
      type: 'string | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The id of YAxis which is corresponding to the data. Required when there are multiple YAxes.</p>
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
      defaultVal: 100,
      examples: [{ name: 'Z-Index and layers guide', url: '/guide/zIndex/' }],
    },
    {
      name: 'onClick',
      type: 'React.MouseEventHandler<T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of click on the rectangle</p>
          </section>
        ),
      },
    },
    {
      name: 'onMouseDown',
      type: 'React.MouseEventHandler<T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mousedown on the rectangle</p>
          </section>
        ),
      },
    },
    {
      name: 'onMouseEnter',
      type: 'React.MouseEventHandler<T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mouseenter on the rectangle</p>
          </section>
        ),
      },
    },
    {
      name: 'onMouseLeave',
      type: 'React.MouseEventHandler<T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mouseleave on the rectangle</p>
          </section>
        ),
      },
    },
    {
      name: 'onMouseMove',
      type: 'React.MouseEventHandler<T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mousemove on the rectangle</p>
          </section>
        ),
      },
    },
    {
      name: 'onMouseOut',
      type: 'React.MouseEventHandler<T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mouseout on the rectangle</p>
          </section>
        ),
      },
    },
    {
      name: 'onMouseOver',
      type: 'React.MouseEventHandler<T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mouseover on the rectangle</p>
          </section>
        ),
      },
    },
    {
      name: 'onMouseUp',
      type: 'React.MouseEventHandler<T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mouseup on the rectangle</p>
          </section>
        ),
      },
    },
  ],
  desc: {
    'en-US': (
      <section>
        <p>Draws a rectangular area on the chart to highlight a specific range.</p>
        <p>
          This component, unlike <a href="/api/Rectangle/">Rectangle</a> or{' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/rect">rect</a>, is aware of the
          cartesian coordinate system, so you specify the area by using data coordinates instead of pixels.
        </p>
        <p>ReferenceArea will calculate the pixels based on the provided data coordinates.</p>
        <p>
          If you prefer to render rectangles using pixels rather than data coordinates, consider using the{' '}
          <a href="/api/Rectangle/">Rectangle</a> component instead.
        </p>
      </section>
    ),
  },
  parentComponents: ['AreaChart', 'BarChart', 'ComposedChart', 'FunnelChart', 'LineChart', 'ScatterChart'],
  childrenComponents: ['Label'],
};
