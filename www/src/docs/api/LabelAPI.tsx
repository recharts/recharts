import { ApiDoc } from './types.ts';

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
              Text rotation angle in degrees. The text will be rotated around the (x, y) coordinates as the pivot point.
              Positive values rotate clockwise, negative values rotate counterclockwise.
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
      type: 'LabelContentType',
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
      type: 'LabelFormatter',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The formatter function of label value which has only one parameter - the value of label.</p>
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
              The unique id of this component, which will be used to generate unique clip path id internally. This props
              is suggested to be set in SSR.
            </p>
          </section>
        ),
      },
    },
    { name: 'index', type: 'number', isOptional: true },
    { name: 'labelRef', type: 'React.RefObject<SVGTextElement> | null', isOptional: true },
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
    { name: 'parentViewBox', type: 'ViewBox', isOptional: true },
    {
      name: 'position',
      type: 'LabelPosition',
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
      type: 'RenderableText',
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
      type: 'ViewBox',
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
    { name: 'zIndex', type: 'number', isOptional: true, defaultVal: 2000 },
  ],
  parentComponents: [
    'AreaChart',
    'BarChart',
    'ComposedChart',
    'FunnelChart',
    'LineChart',
    'PieChart',
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
