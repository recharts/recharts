import { ApiDoc } from './types';

export const TrapezoidAPI: ApiDoc = {
  name: 'Trapezoid',
  props: [
    { name: 'animationBegin', type: 'number', isOptional: true, defaultVal: 0 },
    { name: 'animationDuration', type: 'number', isOptional: true, defaultVal: 1500 },
    {
      name: 'animationEasing',
      type: '"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear"',
      isOptional: true,
      defaultVal: 'ease',
    },
    { name: 'className', type: 'string', isOptional: true },
    {
      name: 'height',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Height of the trapezoid in pixels.</p>
          </section>
        ),
      },
      defaultVal: 0,
    },
    {
      name: 'isUpdateAnimationActive',
      type: 'boolean',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>If set to true, trapezoid will update and render with a gradual fade-in animation from left to right.</p>
          </section>
        ),
      },
      defaultVal: false,
    },
    {
      name: 'lowerWidth',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Width of the lower horizontal side of the trapezoid in pixels.</p>
          </section>
        ),
      },
      defaultVal: 0,
    },
    {
      name: 'upperWidth',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Width of the upper horizontal side of the trapezoid in pixels.</p>
          </section>
        ),
      },
      defaultVal: 0,
    },
    {
      name: 'x',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The x-coordinate of top left point of the trapezoid.</p>
          </section>
        ),
      },
      defaultVal: 0,
    },
    {
      name: 'y',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The y-coordinate of top left point of the trapezoid.</p>
          </section>
        ),
      },
      defaultVal: 0,
    },
    {
      name: 'onClick',
      type: 'React.MouseEventHandler<T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of click on the trapezoid</p>
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
            <p>The customized event handler of mousedown on the trapezoid</p>
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
            <p>The customized event handler of mouseenter on the trapezoid</p>
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
            <p>The customized event handler of mouseleave on the trapezoid</p>
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
            <p>The customized event handler of mousemove on the trapezoid</p>
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
            <p>The customized event handler of mouseout on the trapezoid</p>
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
            <p>The customized event handler of mouseover on the trapezoid</p>
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
            <p>The customized event handler of mouseup on the trapezoid</p>
          </section>
        ),
      },
    },
  ],
  links: [{ name: 'Funnel Example', url: '/api/Funnel/', isExternal: false }],
};
