import { ApiDoc } from './types';

export const SectorAPI: ApiDoc = {
  name: 'Sector',
  props: [
    { name: 'className', type: 'string', isOptional: true },
    { name: 'cornerIsExternal', type: 'boolean', isOptional: true, defaultVal: false },
    {
      name: 'cornerRadius',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The radius of corners.</p>
          </section>
        ),
      },
      defaultVal: 0,
    },
    {
      name: 'cx',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The x-coordinate of center.</p>
          </section>
        ),
      },
      defaultVal: 0,
      examples: [
        { name: 'Custom Active Shape Pie Chart', url: '/examples/CustomActiveShapePieChart/', isExternal: false },
      ],
    },
    {
      name: 'cy',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The y-coordinate of center.</p>
          </section>
        ),
      },
      defaultVal: 0,
      examples: [
        { name: 'Custom Active Shape Pie Chart', url: '/examples/CustomActiveShapePieChart/', isExternal: false },
      ],
    },
    {
      name: 'endAngle',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The end angle of the sector.</p>
          </section>
        ),
      },
      defaultVal: 0,
      examples: [
        { name: 'Custom Active Shape Pie Chart', url: '/examples/CustomActiveShapePieChart/', isExternal: false },
      ],
    },
    {
      name: 'forceCornerRadius',
      type: 'boolean',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Whether force to render round corner when the angle of sector is very small</p>
          </section>
        ),
      },
      defaultVal: false,
    },
    {
      name: 'innerRadius',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The inner radius of the sector.</p>
          </section>
        ),
      },
      defaultVal: 0,
      examples: [
        { name: 'Custom Active Shape Pie Chart', url: '/examples/CustomActiveShapePieChart/', isExternal: false },
      ],
    },
    {
      name: 'outerRadius',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The outer radius of the sector.</p>
          </section>
        ),
      },
      defaultVal: 0,
      examples: [
        { name: 'Custom Active Shape Pie Chart', url: '/examples/CustomActiveShapePieChart/', isExternal: false },
      ],
    },
    {
      name: 'startAngle',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The start angle of the sector.</p>
          </section>
        ),
      },
      defaultVal: 0,
      examples: [
        { name: 'Custom Active Shape Pie Chart', url: '/examples/CustomActiveShapePieChart/', isExternal: false },
      ],
    },
    {
      name: 'onClick',
      type: 'React.MouseEventHandler<T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of click on the sector</p>
          </section>
        ),
      },
    },
    {
      name: 'onMouseDown',
      type: 'React.MouseEventHandler<T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mousedown on the sector</p>
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
            <p>The customized event handler of mouseenter on the sector</p>
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
            <p>The customized event handler of mouseleave on the sector</p>
          </section>
        ),
      },
    },
    {
      name: 'onMouseMove',
      type: 'React.MouseEventHandler<T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mousemove on the sector</p>
          </section>
        ),
      },
    },
    {
      name: 'onMouseOut',
      type: 'React.MouseEventHandler<T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mouseout on the sector</p>
          </section>
        ),
      },
    },
    {
      name: 'onMouseOver',
      type: 'React.MouseEventHandler<T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mouseover on the sector</p>
          </section>
        ),
      },
    },
    {
      name: 'onMouseUp',
      type: 'React.MouseEventHandler<T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mouseup on the sector</p>
          </section>
        ),
      },
    },
  ],
  links: [{ name: 'Custom Active Shape Pie Chart', url: '/examples/CustomActiveShapePieChart/', isExternal: false }],
};
