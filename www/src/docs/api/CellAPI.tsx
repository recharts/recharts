import { ApiDoc } from './types';

export const CellAPI: ApiDoc = {
  name: 'Cell',
  props: [
    {
      name: 'fill',
      type: 'string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The fill color.</p>
          </section>
        ),
      },
    },
    {
      name: 'stroke',
      type: 'string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The stroke color.</p>
          </section>
        ),
      },
    },
  ],
  desc: {
    'en-US': (
      <section>
        <p>Cell component used to define colors and styles of chart elements.</p>
        <p>This component is now deprecated and will be removed in Recharts 4.0.</p>
        <p>
          Please use the <code>shape</code> prop or <code>content</code> prop on the respective chart components to
          customize the rendering of chart elements instead of using <code>Cell</code>.
        </p>
      </section>
    ),
  },
  links: [{ name: 'Guide: Migrate from Cell component to shape prop', url: '/guide/cell/', isExternal: false }],
  parentComponents: ['Bar', 'Funnel', 'Pie', 'RadialBar', 'Scatter'],
  deprecated: true,
};
