import { ApiDoc } from './types';

export const SymbolsAPI: ApiDoc = {
  name: 'Symbols',
  props: [
    { name: 'className', type: 'string', isOptional: true },
    { name: 'cx', type: 'number | string', isOptional: true },
    { name: 'cy', type: 'number | string', isOptional: true },
    { name: 'size', type: 'number', isOptional: true },
    { name: 'sizeType', type: '"area" | "diameter"', isOptional: true },
    { name: 'type', type: '"circle" | "cross" | "diamond" | "square" | "star" | "triangle" | "wye"', isOptional: true },
  ],
  desc: {
    'en-US': (
      <section>
        <p>Renders a symbol from a set of predefined shapes.</p>
      </section>
    ),
  },
};
