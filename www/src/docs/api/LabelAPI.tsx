import { Link } from 'react-router';
import { ApiDoc } from './types';

export const LabelAPI: ApiDoc = {
  name: 'Label',
  props: [
    {
      name: 'angle',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Text rotation angle in degrees. Positive values rotate clockwise, negative values rotate counterclockwise.
            </p>
          </section>
        ),
      },
      defaultVal: 0,
    },
    {
      name: 'children',
      type: 'ReactNode',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The value of label can be set as children or as the <code>value</code> prop
            </p>
          </section>
        ),
      },
      format: ['<Label>foo</Label>'],
    },
    { name: 'className', type: 'string', isOptional: true },
    {
      name: 'content',
      type: 'ReactNode | Function',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If set a React element, the option is the custom react element of rendering label. If set a function, the
              function will be called to render label content.
            </p>
          </section>
        ),
      },
      format: [
        '<Label content={CustomizedLabel} />',
        'const renderCustomLabel = (props) => <text {...props}>Custom Label</text>;\n<Label content={renderCustomLabel} />',
      ],
    },
    {
      name: 'formatter',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Function to customize how content is serialized before rendering.</p>
            <p>
              This should return a renderable text - something that the <Link to="/api/Text/">Text</Link> component can
              render. Typically, a string or number. Custom components are not supported here - use the{' '}
              <code>content</code> prop instead.
            </p>
          </section>
        ),
      },
    },
    {
      name: 'id',
      type: 'string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Unique identifier of this component. Used as an HTML attribute <code>id</code>.
            </p>
          </section>
        ),
      },
    },
    { name: 'index', type: 'number', isOptional: true },
    { name: 'labelRef', type: 'null | React.RefObject<SVGTextElement>', isOptional: true },
    {
      name: 'offset',
      type: 'string | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The offset to the specified &quot;position&quot;. Direction of the offset depends on the position.</p>
          </section>
        ),
      },
      defaultVal: 5,
    },
    { name: 'parentViewBox', type: 'Required<CartesianViewBox> | Required<PolarViewBox>', isOptional: true },
    {
      name: 'position',
      type: '"end" | "middle" | "top" | "left" | "right" | "bottom" | "inside" | "outside" | "insideLeft" | "insideRight" | "insideTop" | "insideBottom" | "insideTopLeft" | "insideBottomLeft" | "insideTopRight" | "insideBottomRight" | "insideStart" | "insideEnd" | "center" | "centerTop" | "centerBottom" | { x?: number | `${number}%` | undefined; y?: number | `${number}%` | undefined; }',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The position of label relative to the view box.</p>
          </section>
        ),
      },
      defaultVal: 'middle',
    },
    { name: 'textBreakAll', type: 'boolean', isOptional: true, defaultVal: false },
    {
      name: 'value',
      type: 'null | string | number | false | true',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The value of label can be set as children or as the <code>value</code> prop
            </p>
          </section>
        ),
      },
      format: ['<Label value="foo" />'],
    },
    {
      name: 'viewBox',
      type: 'Required<CartesianViewBox> | Required<PolarViewBox>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The box of viewing area. Used for positioning. If undefined, viewBox will be calculated based on
              surrounding context.
            </p>
          </section>
        ),
      },
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
      defaultVal: 2000,
      examples: [{ name: 'Z-Index and layers guide', url: '/guide/zIndex/' }],
    },
  ],
  parentComponents: [
    'AreaChart',
    'BarChart',
    'ComposedChart',
    'FunnelChart',
    'LineChart',
    'PieChart',
    'PolarAngleAxis',
    'PolarRadiusAxis',
    'RadarChart',
    'RadialBarChart',
    'ReferenceArea',
    'ReferenceDot',
    'ReferenceLine',
    'ScatterChart',
    'XAxis',
    'YAxis',
  ],
};
