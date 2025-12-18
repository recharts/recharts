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
              Text rotation angle in degrees. The text will be rotated around the (x, y) coordinates as the pivot point.
              Positive values rotate clockwise, negative values rotate counterclockwise.
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
      type: 'ReactNode | Function',
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
      examples: [{ name: 'Customized content of LabelList in a BarChart', url: '/examples/BarChartWithMinHeight/' }],
    },
    {
      name: 'dataKey',
      type: 'string | number | Function',
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
    },
    {
      name: 'formatter',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Function to customize how content is serialized before rendering.</p>
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
    {
      name: 'position',
      type: '"end" | "top" | "left" | "right" | "bottom" | "inside" | "outside" | "insideLeft" | "insideRight" | "insideTop" | "insideBottom" | "insideTopLeft" | "insideBottomLeft" | "insideTopRight" | "insideBottomRight" | "insideStart" | "insideEnd" | "center" | "centerTop" | "centerBottom" | "middle" | { x?: number | `${number}%` | undefined; y?: number | `${number}%` | undefined; }',
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
      examples: [{ name: 'Z-Index and layers guide', url: '/guide/zIndex/' }],
    },
  ],
  parentComponents: ['Area', 'Bar', 'Line', 'Pie', 'Radar', 'RadialBar', 'Scatter'],
};
