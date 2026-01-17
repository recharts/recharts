import { ApiDoc } from './types';

export const PolarGridAPI: ApiDoc = {
  name: 'PolarGrid',
  props: [
    { name: 'angleAxisId', type: 'number | string', isOptional: true, defaultVal: 0 },
    {
      name: 'cx',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The x-coordinate of center. When used inside a chart context, this prop is calculated based on the
              chart&#39;s dimensions, and this prop is ignored.
            </p>
            <p>This is only used when rendered outside a chart context.</p>
          </section>
        ),
      },
    },
    {
      name: 'cy',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The y-coordinate of center. When used inside a chart context, this prop is calculated based on the
              chart&#39;s dimensions, and this prop is ignored.
            </p>
            <p>This is only used when rendered outside a chart context.</p>
          </section>
        ),
      },
    },
    {
      name: 'gridType',
      type: '"circle" | "polygon"',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The type of polar grids.</p>
          </section>
        ),
      },
      defaultVal: 'polygon',
    },
    {
      name: 'innerRadius',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The radius of the inner polar grid. When used inside a chart context, this prop is calculated based on the
              chart&#39;s dimensions, and this prop is ignored.
            </p>
            <p>This is only used when rendered outside a chart context.</p>
          </section>
        ),
      },
    },
    {
      name: 'outerRadius',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The radius of the outer polar grid. When used inside a chart context, this prop is calculated based on the
              chart&#39;s dimensions, and this prop is ignored.
            </p>
            <p>This is only used when rendered outside a chart context.</p>
          </section>
        ),
      },
    },
    {
      name: 'polarAngles',
      type: 'Array<readonly number>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The array of every line grid&#39;s angle.</p>
          </section>
        ),
      },
    },
    {
      name: 'polarRadius',
      type: 'Array<readonly number>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The array of every circle grid&#39;s radius.</p>
          </section>
        ),
      },
    },
    { name: 'radialLines', type: 'boolean', isOptional: true, defaultVal: true },
    { name: 'radiusAxisId', type: 'number | string', isOptional: true, defaultVal: 0 },
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
      defaultVal: -100,
      examples: [{ name: 'Z-Index and layers guide', url: '/guide/zIndex/', isExternal: false }],
    },
  ],
  links: [
    { name: 'Simple Radar Chart', url: '/examples/SimpleRadarChart/', isExternal: false },
    { name: 'Specified Domain Radar Chart', url: '/examples/SpecifiedDomainRadarChart/', isExternal: false },
    { name: 'Radar Chart Example', url: '/api/RadarChart/', isExternal: false },
  ],
  parentComponents: ['PieChart', 'RadarChart', 'RadialBarChart'],
};
