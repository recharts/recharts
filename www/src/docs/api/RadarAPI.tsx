import { ApiDoc } from './types';

export const RadarAPI: ApiDoc = {
  name: 'Radar',
  props: [
    {
      name: 'activeDot',
      type: 'false | true | Function | Partial<ActiveDotProps> | ReactNode',
      isOptional: true,
      defaultVal: true,
    },
    { name: 'angleAxisId', type: 'string | number', isOptional: true, defaultVal: 0 },
    {
      name: 'animationBegin',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Specifies when the animation should begin, the unit of this option is ms.</p>
          </section>
        ),
      },
      defaultVal: 0,
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
      defaultVal: 1500,
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
    { name: 'baseLinePoints', type: 'Array<RadarPoint>', isOptional: true },
    { name: 'className', type: 'string', isOptional: true },
    { name: 'connectNulls', type: 'boolean', isOptional: true },
    {
      name: 'dataKey',
      type: 'string | number | Function',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Decides how to extract the value of this Radar from the data:</p>
            <ul>
              <li>
                <code>string</code>: the name of the field in the data object;
              </li>
              <li>
                <code>number</code>: the index of the field in the data;
              </li>
              <li>
                <code>function</code>: a function that receives the data object and returns the value of this Radar.
              </li>
            </ul>
          </section>
        ),
      },
    },
    {
      name: 'dot',
      type: 'false | true | Function | Partial<Props> | ReactNode',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If false set, dots will not be drawn. If true set, dots will be drawn which have the props calculated
              internally. If object set, dots will be drawn which have the props merged by the internal calculated props
              and the option. If ReactElement set, the option can be the custom dot element. If set a function, the
              function will be called to render customized dot.
            </p>
          </section>
        ),
      },
      defaultVal: false,
    },
    { name: 'hide', type: 'boolean', isOptional: true, defaultVal: false },
    {
      name: 'isAnimationActive',
      type: 'false | true | "auto"',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If set false, animation of polygon will be disabled. If set &quot;auto&quot;, the animation will be
              disabled in SSR and enabled in browser.
            </p>
          </section>
        ),
      },
      defaultVal: 'auto',
    },
    { name: 'isRange', type: 'boolean', isOptional: true },
    {
      name: 'label',
      type: 'false | true | ReactNode | Function | Props',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Renders one label for each point. Options:</p>
            <ul>
              <li>
                <code>true</code>: renders default labels;
              </li>
              <li>
                <code>false</code>: no labels are rendered;
              </li>
              <li>
                <code>object</code>: the props of LabelList component;
              </li>
              <li>
                <code>ReactElement</code>: a custom label element;
              </li>
              <li>
                <code>function</code>: a render function of custom label.
              </li>
            </ul>
          </section>
        ),
      },
      defaultVal: false,
    },
    {
      name: 'legendType',
      type: '"none" | "circle" | "cross" | "diamond" | "line" | "plainline" | "rect" | "square" | "star" | "triangle" | "wye"',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The type of icon in legend. If set to &#39;none&#39;, no legend item will be rendered.</p>
          </section>
        ),
      },
      defaultVal: 'rect',
    },
    {
      name: 'points',
      type: 'Array<RadarPoint>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The coordinates of all the vertexes of the radar shape, like an array of objects with x and y coordinates.
            </p>
          </section>
        ),
      },
    },
    { name: 'radiusAxisId', type: 'string | number', isOptional: true, defaultVal: 0 },
    {
      name: 'shape',
      type: 'ReactNode | Function',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If set a ReactElement, the shape of radar can be customized. If set a function, the function will be
              called to render customized shape.
            </p>
          </section>
        ),
      },
    },
    { name: 'tooltipType', type: '"none"', isOptional: true },
    { name: 'zIndex', type: 'number', isOptional: true, defaultVal: 100 },
    {
      name: 'onAnimationEnd',
      type: 'React.AnimationEventHandler<T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of animation end</p>
          </section>
        ),
      },
    },
    {
      name: 'onAnimationStart',
      type: 'React.AnimationEventHandler<T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of animation start</p>
          </section>
        ),
      },
    },
    { name: 'onMouseEnter', type: 'Function', isOptional: true },
    { name: 'onMouseLeave', type: 'Function', isOptional: true },
  ],
  parentComponents: ['PieChart', 'RadarChart', 'RadialBarChart'],
  childrenComponents: ['LabelList'],
};
