import { ApiDoc } from './types';

export const PolygonAPI: ApiDoc = {
  name: 'Polygon',
  props: [
    { name: 'baseLinePoints', type: 'Array<Coordinate>', isOptional: true },
    { name: 'className', type: 'string', isOptional: true },
    { name: 'connectNulls', type: 'boolean', isOptional: true },
    {
      name: 'points',
      type: 'Array<Coordinate>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The coordinates of all the vertexes of the polygon, like an array of objects with x and y coordinates.
            </p>
          </section>
        ),
      },
    },
    {
      name: 'onClick',
      type: 'React.MouseEventHandler<T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of click on the polygon</p>
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
            <p>The customized event handler of mousedown on the polygon</p>
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
            <p>The customized event handler of mouseenter on the polygon</p>
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
            <p>The customized event handler of mouseleave on the polygon</p>
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
            <p>The customized event handler of mousemove on the polygon</p>
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
            <p>The customized event handler of mouseout on the polygon</p>
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
            <p>The customized event handler of mouseover on the polygon</p>
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
            <p>The customized event handler of mouseup on the polygon</p>
          </section>
        ),
      },
    },
  ],
};
