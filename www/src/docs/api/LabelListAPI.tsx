import { Link } from 'react-router';
import { ApiDoc } from './types';

export const LabelListAPI: ApiDoc = {
  name: 'LabelList',
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
      name: 'clockWise',
      type: 'boolean',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The parameter to calculate the view box of label in radial charts.</p>
          </section>
        ),
      },
    },
    {
      name: 'content',
      type: 'Function | ReactNode',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If set a React element, the option is the customized React element of rendering each label. If set to a
              function, the function is called once for each item
            </p>
          </section>
        ),
      },
      format: ['<LabelList content={CustomizedLabel} />'],
      examples: [
        {
          name: 'Customized content of LabelList in a BarChart',
          url: '/examples/BarChartWithMinHeight/',
          isExternal: false,
        },
        { name: 'Target Price Chart with active Label', url: '/examples/TargetPriceChart/', isExternal: false },
      ],
    },
    {
      name: 'dataKey',
      type: 'Function | number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Decides how to extract the value of each label from the data:</p>
            <ul>
              <li>
                <code>string</code>: the name of the field in the data object;
              </li>
              <li>
                <code>number</code>: the index of the field in the data;
              </li>
              <li>
                <code>function</code>: a function that receives the data object and returns the value of each label.
              </li>
            </ul>
            <p>If set, then valueAccessor will be ignored.</p>
            <p>
              Scatter requires this prop to be set. Other graphical components will show the same value as the dataKey
              of the component by default.
            </p>
          </section>
        ),
      },
      examples: [
        { name: 'Bar Chart With Min Height', url: '/examples/BarChartWithMinHeight/', isExternal: false },
        { name: 'Scatter Chart With Labels', url: '/examples/ScatterChartWithLabels/', isExternal: false },
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
    {
      name: 'offset',
      type: 'number | string',
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
    {
      name: 'position',
      type: '"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The position of label relative to the view box.</p>
          </section>
        ),
      },
      defaultVal: 'middle',
      examples: [
        { name: 'Target Price Chart with active Label', url: '/examples/TargetPriceChart/', isExternal: false },
      ],
    },
    { name: 'textBreakAll', type: 'boolean', isOptional: true, defaultVal: false },
    {
      name: 'valueAccessor',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The accessor function to get the value of each label. Is ignored if dataKey is specified.</p>
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
      examples: [{ name: 'Z-Index and layers guide', url: '/guide/zIndex/', isExternal: false }],
    },
  ],
  links: [
    { name: 'Bar Chart With Min Height', url: '/examples/BarChartWithMinHeight/', isExternal: false },
    { name: 'Target Price Chart with active Label', url: '/examples/TargetPriceChart/', isExternal: false },
    { name: 'Scatter Chart With Labels', url: '/examples/ScatterChartWithLabels/', isExternal: false },
  ],
  parentComponents: ['Area', 'Bar', 'Funnel', 'Line', 'Pie', 'Radar', 'RadialBar', 'Scatter'],
};
