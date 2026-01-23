import { ApiDoc } from './types';

export const TreemapAPI: ApiDoc = {
  name: 'Treemap',
  props: [
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
      defaultVal: 'linear',
    },
    {
      name: 'animationId',
      type: 'number',
      isOptional: true,
      deprecated: "unused prop, doesn't do anything, use `key` instead",
    },
    {
      name: 'aspectRatio',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The treemap will try to keep every single rectangle&#39;s aspect ratio near the aspectRatio given.</p>
          </section>
        ),
      },
      defaultVal: 1.618033988749895,
      examples: [{ name: 'Simple Treemap', url: '/examples/SimpleTreemap/', isExternal: false }],
    },
    {
      name: 'children',
      type: 'ReactNode',
      isOptional: true,
      examples: [
        { name: 'Simple Treemap', url: '/examples/SimpleTreemap/', isExternal: false },
        { name: 'Custom Content Treemap', url: '/examples/CustomContentTreemap/', isExternal: false },
      ],
    },
    { name: 'className', type: 'string', isOptional: true },
    { name: 'colorPanel', type: 'Array<readonly string>', isOptional: true },
    {
      name: 'content',
      type: '(union of 8 variants)',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If set to a React element, the option is the customized React element of rendering the content. If set to
              a function, the function will be called to render the content.
            </p>
          </section>
        ),
      },
      examples: [{ name: 'Custom Content Treemap', url: '/examples/CustomContentTreemap/', isExternal: false }],
    },
    {
      name: 'data',
      type: 'Array<readonly TreemapDataType>',
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
            <p>
              If the <code>children</code> property is present on an element, it will be treated as a nested treemap.
            </p>
          </section>
        ),
      },
      examples: [
        { name: 'Simple Treemap', url: '/examples/SimpleTreemap/', isExternal: false },
        { name: 'Custom Content Treemap', url: '/examples/CustomContentTreemap/', isExternal: false },
      ],
    },
    {
      name: 'dataKey',
      type: 'Function | number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Decides how to extract the value of this Treemap from the data:</p>
            <ul>
              <li>
                <code>string</code>: the name of the field in the data object;
              </li>
              <li>
                <code>number</code>: the index of the field in the data;
              </li>
              <li>
                <code>function</code>: a function that receives the data object and returns the value of this Treemap.
              </li>
            </ul>
          </section>
        ),
      },
      defaultVal: 'value',
      examples: [
        { name: 'Simple Treemap', url: '/examples/SimpleTreemap/', isExternal: false },
        { name: 'Custom Content Treemap', url: '/examples/CustomContentTreemap/', isExternal: false },
      ],
    },
    {
      name: 'fill',
      type: 'string',
      isOptional: true,
      examples: [
        { name: 'Simple Treemap', url: '/examples/SimpleTreemap/', isExternal: false },
        { name: 'Custom Content Treemap', url: '/examples/CustomContentTreemap/', isExternal: false },
      ],
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
    },
    { name: 'id', type: 'string', isOptional: true },
    {
      name: 'isAnimationActive',
      type: '"auto" | false | true',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If set false, animation of treemap will be disabled. If set &quot;auto&quot;, the animation will be
              disabled in SSR and enabled in browser.
            </p>
          </section>
        ),
      },
      defaultVal: 'auto',
    },
    { name: 'isUpdateAnimationActive', type: '"auto" | false | true', isOptional: true, defaultVal: 'auto' },
    {
      name: 'nameKey',
      type: 'Function | number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Name represents each sector in the tooltip. This allows you to extract the name from the data:</p>
            <ul>
              <li>
                <code>string</code>: the name of the field in the data object;
              </li>
              <li>
                <code>number</code>: the index of the field in the data;
              </li>
              <li>
                <code>function</code>: a function that receives the data object and returns the name.
              </li>
            </ul>
          </section>
        ),
      },
      defaultVal: 'name',
    },
    { name: 'nestIndexContent', type: 'Function | ReactNode', isOptional: true },
    {
      name: 'stroke',
      type: 'string',
      isOptional: true,
      examples: [
        { name: 'Simple Treemap', url: '/examples/SimpleTreemap/', isExternal: false },
        { name: 'Custom Content Treemap', url: '/examples/CustomContentTreemap/', isExternal: false },
      ],
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      isOptional: true,
      examples: [
        { name: 'Simple Treemap', url: '/examples/SimpleTreemap/', isExternal: false },
        { name: 'Custom Content Treemap', url: '/examples/CustomContentTreemap/', isExternal: false },
      ],
    },
    {
      name: 'throttleDelay',
      type: '"raf" | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Decides the time interval to throttle events. Only events defined in <code>throttledEvents</code> prop are
              throttled. All other events are executed immediately/synchronously.
            </p>
            <p>Options:</p>
            <ul>
              <li>
                <code>number</code>: the time interval in milliseconds
              </li>
              <li>
                <code>&#39;raf&#39;</code>: use requestAnimationFrame to schedule updates.
              </li>
            </ul>
          </section>
        ),
      },
      defaultVal: 'raf',
    },
    {
      name: 'throttledEvents',
      type: '"all" | Array<readonly (keyof GlobalEventHandlersEventMap)>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Defines which events should be throttled when listening to container size changes. Events not in this list
              will not be throttled.
            </p>
            <p>
              If an event is on this list, then you lose the opportunity to access the event synchronously. Which means
              that if you want to call <code>e.preventDefault()</code> or <code>e.stopPropagation()</code> inside the
              event handler, then that event handler must not be in this list.
            </p>
          </section>
        ),
      },
      defaultVal: ['mousemove', 'touchmove', 'pointermove', 'scroll', 'wheel'],
    },
    {
      name: 'type',
      type: '"flat" | "nest"',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The type of treemap to render.</p>
            <ul>
              <li>&#39;flat&#39;: Renders the entire treemap at once, with all leaf nodes visible.</li>
              <li>
                &#39;nest&#39;: Renders an interactive, nested treemap. Clicking on a parent node will &quot;zoom
                in&quot; to show its children, and a breadcrumb navigation will be displayed to allow navigating back up
                the hierarchy.
              </li>
            </ul>
          </section>
        ),
      },
      defaultVal: 'flat',
    },
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
    },
    {
      name: 'onAnimationEnd',
      type: 'Function',
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
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of animation start</p>
          </section>
        ),
      },
    },
    { name: 'onClick', type: 'Function', isOptional: true },
    { name: 'onMouseEnter', type: 'Function', isOptional: true },
    { name: 'onMouseLeave', type: 'Function', isOptional: true },
  ],
  desc: {
    'en-US': (
      <section>
        <p>The Treemap chart is used to visualize hierarchical data using nested rectangles.</p>
      </section>
    ),
  },
  links: [
    { name: 'Simple Treemap', url: '/examples/SimpleTreemap/', isExternal: false },
    { name: 'Custom Content Treemap', url: '/examples/CustomContentTreemap/', isExternal: false },
  ],
  parentComponents: ['ResponsiveContainer'],
  childrenComponents: ['Tooltip'],
};
