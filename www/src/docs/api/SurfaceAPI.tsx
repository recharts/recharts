import { ApiDoc } from './types';

export const SurfaceAPI: ApiDoc = {
  name: 'Surface',
  props: [
    { name: 'height', type: 'number | string', isOptional: false },
    { name: 'width', type: 'number | string', isOptional: false },
    { name: 'children', type: 'ReactNode', isOptional: true },
    { name: 'className', type: 'string', isOptional: true },
    { name: 'desc', type: 'string', isOptional: true },
    { name: 'style', type: 'React.CSSProperties', isOptional: true },
    { name: 'title', type: 'string', isOptional: true },
    { name: 'viewBox', type: 'CartesianViewBox', isOptional: true },
  ],
  desc: {
    'en-US': (
      <section>
        <p>Renders an SVG element.</p>
        <p>All charts already include a Surface component, so you would not normally use this directly.</p>
      </section>
    ),
  },
  links: [
    {
      name: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg',
      url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg',
      isExternal: true,
    },
  ],
};
