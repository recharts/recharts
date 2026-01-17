import { Link } from 'react-router';
import { ApiDoc } from './types';

export const SunburstChartAPI: ApiDoc = {
  name: 'SunburstChart',
  props: [
    {
      name: 'data',
      type: 'SunburstData',
      isOptional: false,
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
          </section>
        ),
      },
      format: ["data={[{ name: 'a', value: 12, fill: '#8884d8' }, { name: 'b', value: 5, fill: '#83a6ed' }]}"],
      examples: [{ name: 'Sunburst Chart Example', url: '/api/SunburstChart/', isExternal: false }],
    },
    {
      name: 'children',
      type: 'ReactNode',
      isOptional: true,
      examples: [{ name: 'Sunburst Chart Example', url: '/api/SunburstChart/', isExternal: false }],
    },
    { name: 'className', type: 'string', isOptional: true },
    {
      name: 'cx',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The x-coordinate of center in pixels. If undefined, it will be set to half of the chart width.</p>
          </section>
        ),
      },
    },
    {
      name: 'cy',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The y-coordinate of center in pixels. If undefined, it will be set to half of the chart height.</p>
          </section>
        ),
      },
    },
    {
      name: 'dataKey',
      type: 'string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Decides how to extract value from the data.</p>
          </section>
        ),
      },
      defaultVal: 'value',
    },
    {
      name: 'endAngle',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Angle, in degrees, at which the chart should end.</p>
          </section>
        ),
      },
      defaultVal: 360,
      examples: [{ name: 'Sunburst Chart Example', url: '/api/SunburstChart/', isExternal: false }],
    },
    { name: 'fill', type: 'string', isOptional: true, defaultVal: '#333' },
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
      examples: [{ name: 'Chart sizing guide', url: '/guide/sizes/', isExternal: false }],
    },
    { name: 'id', type: 'string', isOptional: true },
    {
      name: 'innerRadius',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The radius of the inner circle at the center of the chart.</p>
          </section>
        ),
      },
      defaultVal: 50,
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
      name: 'outerRadius',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Outermost edge of the chart. Defaults to the max possible radius for a circle inscribed in the chart
              container
            </p>
          </section>
        ),
      },
    },
    {
      name: 'padding',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Distance between sectors.</p>
          </section>
        ),
      },
      defaultVal: 2,
    },
    {
      name: 'responsive',
      type: 'boolean',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If true, then it will listen to container size changes and adapt the SVG chart accordingly. If false, then
              it renders the chart at the specified width and height and will stay that way even if the container size
              changes.
            </p>
            <p>
              This is similar to ResponsiveContainer but without the need for an extra wrapper component. The{' '}
              <code>responsive</code> prop also uses standard CSS sizing rules, instead of custom resolution logic (like
              ResponsiveContainer does).
            </p>
          </section>
        ),
      },
      defaultVal: false,
    },
    {
      name: 'ringPadding',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Padding between each hierarchical level.</p>
          </section>
        ),
      },
      defaultVal: 2,
    },
    {
      name: 'startAngle',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Angle in degrees from which the chart should start.</p>
          </section>
        ),
      },
      defaultVal: 0,
      examples: [{ name: 'Sunburst Chart Example', url: '/api/SunburstChart/', isExternal: false }],
    },
    { name: 'stroke', type: 'string', isOptional: true, defaultVal: '#FFF' },
    { name: 'style', type: 'React.CSSProperties', isOptional: true },
    {
      name: 'textOptions',
      type: 'Props',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>An object with svg text options to control the appearance of the chart labels.</p>
          </section>
        ),
      },
      defaultVal: {
        fontWeight: 'bold',
        paintOrder: 'stroke fill',
        fontSize: '.75rem',
        stroke: '#FFF',
        fill: 'black',
        pointerEvents: 'none',
      },
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
      examples: [{ name: 'Chart sizing guide', url: '/guide/sizes/', isExternal: false }],
    },
    { name: 'onClick', type: 'Function', isOptional: true },
    { name: 'onMouseEnter', type: 'Function', isOptional: true },
    { name: 'onMouseLeave', type: 'Function', isOptional: true },
  ],
  desc: {
    'en-US': (
      <section>
        <p>
          The sunburst is a hierarchical chart, similar to a <Link to="/api/Treemap/">Treemap</Link>, plotted in polar
          coordinates. Sunburst charts effectively convey the hierarchical relationships and proportions within each
          level. It is easy to see all the middle layers in the hierarchy, which might get lost in other visualizations.
          For some datasets, the radial layout may be more visually appealing and intuitive than a traditional{' '}
          <Link to="/api/Treemap/">Treemap</Link>.
        </p>
      </section>
    ),
  },
  links: [{ name: 'Sunburst Chart Example', url: '/api/SunburstChart/', isExternal: false }],
  parentComponents: ['ResponsiveContainer'],
  childrenComponents: ['Tooltip'],
};
