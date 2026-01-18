import { ApiDoc } from './types';

export const RadarAPI: ApiDoc = {
  name: 'Radar',
  props: [
    {
      name: 'activeDot',
      type: 'Function | Partial<ActiveDotProps> | ReactNode | false | true',
      isOptional: true,
      defaultVal: true,
    },
    { name: 'angleAxisId', type: 'number | string', isOptional: true, defaultVal: 0 },
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
    { name: 'baseLinePoints', type: 'Array<RadarPoint>', isOptional: true },
    { name: 'className', type: 'string', isOptional: true },
    { name: 'connectNulls', type: 'boolean', isOptional: true },
    {
      name: 'dataKey',
      type: 'Function | number | string',
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
      examples: [
        { name: 'Simple Radar Chart', url: '/examples/SimpleRadarChart/', isExternal: false },
        { name: 'Specified Domain Radar Chart', url: '/examples/SpecifiedDomainRadarChart/', isExternal: false },
      ],
    },
    {
      name: 'dot',
      type: 'Function | Partial<Props> | ReactNode | false | true',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Renders a circle element at each data point. Options:</p>
            <ul>
              <li>
                <code>false</code>: no dots are drawn;
              </li>
              <li>
                <code>true</code>: renders the dots with default settings;
              </li>
              <li>
                <code>object</code>: the props of the dot. This will be merged with the internal calculated props of
                each dot;
              </li>
              <li>
                <code>ReactElement</code>: the custom dot element;
              </li>
              <li>
                <code>function</code>: a render function of the custom dot.
              </li>
            </ul>
          </section>
        ),
      },
      defaultVal: false,
    },
    { name: 'hide', type: 'boolean', isOptional: true, defaultVal: false },
    {
      name: 'isAnimationActive',
      type: '"auto" | false | true',
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
      type: 'Function | Props | ReactNode | false | true',
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
      type: '"circle" | "cross" | "diamond" | "line" | "none" | "plainline" | "rect" | "square" | "star" | "triangle" | "wye"',
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
    { name: 'radiusAxisId', type: 'number | string', isOptional: true, defaultVal: 0 },
    {
      name: 'shape',
      type: 'Function | ReactNode',
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
  links: [
    { name: 'Simple Radar Chart', url: '/examples/SimpleRadarChart/', isExternal: false },
    { name: 'Specified Domain Radar Chart', url: '/examples/SpecifiedDomainRadarChart/', isExternal: false },
  ],
  parentComponents: ['PieChart', 'RadarChart', 'RadialBarChart'],
  childrenComponents: ['LabelList'],
};
