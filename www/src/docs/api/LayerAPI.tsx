import { ApiDoc } from './types';

export const LayerAPI: ApiDoc = {
  name: 'Layer',
  props: [
    { name: 'children', type: 'ReactNode', isOptional: true },
    { name: 'className', type: 'string', isOptional: true },
  ],
  desc: {
    'en-US': (
      <section>
        <p>Creates an SVG group element to group other SVG elements.</p>
        <p>
          Useful if you want to apply transformations or styles to a set of elements without affecting other elements in
          the SVG.
        </p>
      </section>
    ),
  },
  links: [
    {
      name: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/g',
      url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/g',
      isExternal: true,
    },
  ],
};
