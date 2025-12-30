import { Link } from 'react-router';
import { ApiDoc } from './types';

export const RectangleAPI: ApiDoc = {
  name: 'Rectangle',
  props: [
    { name: 'animationBegin', type: 'number', isOptional: true, defaultVal: 0 },
    { name: 'animationDuration', type: 'number', isOptional: true, defaultVal: 1500 },
    { name: 'animationEasing', type: '(union of 9 variants)', isOptional: true, defaultVal: 'ease' },
    { name: 'className', type: 'string', isOptional: true },
    {
      name: 'height',
      type: 'string | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Height of the rectangle in pixels.</p>
          </section>
        ),
      },
      defaultVal: 0,
    },
    { name: 'isAnimationActive', type: 'boolean', isOptional: true, defaultVal: false },
    { name: 'isUpdateAnimationActive', type: 'boolean', isOptional: true, defaultVal: false },
    {
      name: 'radius',
      type: 'number | [number, number, number, number]',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If you provide a single number, it applies to all four corners. If you provide an array of four numbers,
              they apply to top-left, top-right, bottom-right, bottom-left corners respectively.
            </p>
          </section>
        ),
      },
      defaultVal: 0,
    },
    {
      name: 'width',
      type: 'string | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Width of the rectangle in pixels.</p>
          </section>
        ),
      },
      defaultVal: 0,
    },
    {
      name: 'x',
      type: 'string | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The x-coordinate of top left point of the rectangle.</p>
          </section>
        ),
      },
      defaultVal: 0,
    },
    {
      name: 'y',
      type: 'string | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The y-coordinate of top left point of the rectangle.</p>
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
            <p>The customized event handler of click on the rectangle</p>
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
            <p>The customized event handler of mousedown on the rectangle</p>
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
            <p>The customized event handler of mouseenter on the rectangle</p>
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
            <p>The customized event handler of mouseleave on the rectangle</p>
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
            <p>The customized event handler of mousemove on the rectangle</p>
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
            <p>The customized event handler of mouseout on the rectangle</p>
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
            <p>The customized event handler of mouseover on the rectangle</p>
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
            <p>The customized event handler of mouseup on the rectangle</p>
          </section>
        ),
      },
    },
  ],
  desc: {
    'en-US': (
      <section>
        <p>
          Renders a rectangle element. Unlike the{' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/rect">rect SVG element</a>, this
          component supports rounded corners and animation.
        </p>
        <p>
          This component accepts X and Y coordinates in pixels. If you need to position the rectangle based on your
          chart&#39;s data, consider using the <Link to="/api/ReferenceArea/">ReferenceArea</Link> component instead.
        </p>
      </section>
    ),
  },
};
