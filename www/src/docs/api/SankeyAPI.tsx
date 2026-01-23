import { ApiDoc } from './types';

export const SankeyAPI: ApiDoc = {
  name: 'Sankey',
  props: [
    {
      name: 'data',
      type: 'SankeyData',
      isOptional: false,
      desc: {
        'en-US': (
          <section>
            <p>The source data, including the array of nodes, and the relationships, represented by links.</p>
            <p>
              Note that Sankey requires a specific data structure. Each node should have a unique index in the nodes
              array, and each link should reference these nodes by their indices. This is different from other chart
              types in Recharts, which accept arbitrary data.
            </p>
          </section>
        ),
      },
      format: [
        "nodes: [\n  { name: 'Visit' },\n  { name: 'Direct-Favourite' },\n  { name: 'Page-Click' },\n  { name: 'Detail-Favourite' },\n  { name: 'Lost' },\n],\nlinks: [\n  { source: 0, target: 1, value: 3728.3 },\n  { source: 0, target: 2, value: 354170 },\n  { source: 2, target: 3, value: 62429 },\n  { source: 2, target: 4, value: 291741 },\n],",
      ],
    },
    {
      name: 'align',
      type: '"justify" | "left"',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If set to &#39;justify&#39;, the start nodes will be aligned to the left edge of the chart and the end
              nodes will be aligned to the right edge of the chart. If set to &#39;left&#39;, the start nodes will be
              aligned to the left edge of the chart.
            </p>
          </section>
        ),
      },
      defaultVal: 'justify',
    },
    { name: 'children', type: 'ReactNode', isOptional: true },
    { name: 'className', type: 'string', isOptional: true },
    {
      name: 'dataKey',
      type: 'Function | number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              dataKey prop in Sankey defines which key in the link objects represents the value of the link{' '}
              <em>in Tooltip only</em>.
            </p>
            <p>
              Unlike other charts where dataKey is used to extract values from the data array, in Sankey charts, the
              value of each link is directly taken from the &#39;value&#39; property of the link objects.
            </p>
          </section>
        ),
      },
      defaultVal: 'value',
    },
    {
      name: 'height',
      type: 'number | string',
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
    {
      name: 'iterations',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The number of the iterations between the links</p>
          </section>
        ),
      },
      defaultVal: 32,
    },
    {
      name: 'link',
      type: 'Function | React.SVGProps<SVGPathElement> | ReactNode',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If set an object, the option is the configuration of links. If set a React element, the option is the
              custom react element of drawing the links.
            </p>
          </section>
        ),
      },
      format: ['<Sankey link={MyCustomComponent} />', '<Sankey link={{ fill: #77c878 }} />'],
    },
    {
      name: 'linkCurvature',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The curvature of width</p>
          </section>
        ),
      },
      defaultVal: 0.5,
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
    {
      name: 'node',
      type: 'Function | Props | ReactNode',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If set an object, the option is the configuration of nodes. If set a React element, the option is the
              custom react element of drawing the nodes.
            </p>
          </section>
        ),
      },
      format: ['<Sankey node={MyCustomComponent} />', '<Sankey node={{stroke: #77c878, strokeWidth: 2}} />'],
    },
    {
      name: 'nodePadding',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The padding between the nodes</p>
          </section>
        ),
      },
      defaultVal: 10,
    },
    {
      name: 'nodeWidth',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The width of node</p>
          </section>
        ),
      },
      defaultVal: 10,
    },
    {
      name: 'sort',
      type: 'boolean',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Whether to sort the nodes on the y axis, or to display them as user-defined.</p>
          </section>
        ),
      },
      defaultVal: true,
    },
    { name: 'style', type: 'React.CSSProperties', isOptional: true },
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
      name: 'verticalAlign',
      type: '"justify" | "top"',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Controls the vertical spacing of nodes within a depth. &#39;justify&#39; distributes nodes evenly and
              balances link paths, while &#39;top&#39; positions the group starting from the top edge of the chart.
            </p>
          </section>
        ),
      },
      defaultVal: 'justify',
    },
    {
      name: 'width',
      type: 'number | string',
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
      type: 'React.MouseEventHandler<T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of click on the area in this group</p>
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
            <p>The customized event handler of mouseenter on the area in this group</p>
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
            <p>The customized event handler of mouseleave on the area in this group</p>
          </section>
        ),
      },
    },
  ],
  desc: {
    'en-US': (
      <section>
        <p>
          Flow diagram in which the width of the arrows is proportional to the flow rate. It is typically used to
          visualize energy or material or cost transfers between processes.
        </p>
      </section>
    ),
  },
  parentComponents: ['ResponsiveContainer'],
  childrenComponents: ['Tooltip'],
};
