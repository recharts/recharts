import { ApiDoc } from './types';

export const ResponsiveContainerAPI: ApiDoc = {
  name: 'ResponsiveContainer',
  props: [
    {
      name: 'children',
      type: 'ReactNode',
      isOptional: false,
      desc: {
        'en-US': (
          <section>
            <p>
              The content of the container. It can contain multiple charts, and then they will all share the same
              dimensions.
            </p>
          </section>
        ),
      },
    },
    {
      name: 'aspect',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>width / height. If specified, the height will be calculated by width / aspect.</p>
          </section>
        ),
      },
    },
    {
      name: 'className',
      type: 'string | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The HTML element&#39;s class name</p>
          </section>
        ),
      },
    },
    {
      name: 'debounce',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>If specified a positive number, debounced function will be used to handle the resize event.</p>
          </section>
        ),
      },
      defaultVal: 0,
    },
    {
      name: 'height',
      type: 'number | `${number}%`',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The height of chart container. Can be a number or a percent string like &quot;100%&quot;.</p>
          </section>
        ),
      },
      defaultVal: '100%',
    },
    {
      name: 'id',
      type: 'string | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Unique identifier of this component. Used as an HTML attribute <code>id</code>.
            </p>
          </section>
        ),
      },
    },
    {
      name: 'initialDimension',
      type: 'Object',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The initial width and height of the container.</p>
          </section>
        ),
      },
      defaultVal: { width: -1, height: -1 },
    },
    {
      name: 'maxHeight',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The maximum height of the container. It can be a number.</p>
          </section>
        ),
      },
    },
    {
      name: 'minHeight',
      type: 'string | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The minimum height of the container.</p>
          </section>
        ),
      },
    },
    {
      name: 'minWidth',
      type: 'string | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The minimum width of the container.</p>
          </section>
        ),
      },
      defaultVal: 0,
    },
    {
      name: 'style',
      type: 'Omit<React.CSSProperties, keyof Props>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The style of the container.</p>
          </section>
        ),
      },
    },
    {
      name: 'width',
      type: 'number | `${number}%`',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The width of chart container. Can be a number or a percent string like &quot;100%&quot;.</p>
          </section>
        ),
      },
      defaultVal: '100%',
    },
    {
      name: 'onResize',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>If specified provides a callback providing the updated chart width and height values.</p>
          </section>
        ),
      },
    },
  ],
  desc: {
    'en-US': (
      <section>
        <p>
          The <code>ResponsiveContainer</code> component is a container that adjusts its width and height based on the
          size of its parent element. It is used to create responsive charts that adapt to different screen sizes.
        </p>
        <p>
          This component uses the <code>ResizeObserver</code> API to monitor changes to the size of its parent element.
          If you need to support older browsers that do not support this API, you may need to include a polyfill.
        </p>
      </section>
    ),
  },
  links: [
    {
      name: 'https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver',
      isExternal: true,
    },
  ],
};
