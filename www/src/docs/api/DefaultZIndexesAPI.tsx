import { ApiDoc } from './types';

export const DefaultZIndexesAPI: ApiDoc = {
  name: 'DefaultZIndexes',
  props: [],
  desc: {
    'en-US': (
      <section>
        <p>A collection of all default zIndex values used by Recharts.</p>
        <p>You can reuse these, or you can define your own.</p>
      </section>
    ),
  },
  links: [
    { name: 'Candlestick', url: '/examples/Candlestick/', isExternal: false },
    { name: 'Using Z-Index to Layer Elements', url: '/api/ZIndexLayer/', isExternal: false },
    { name: 'Using Z-Index to Layer Elements', url: '/api/DefaultZIndexes/', isExternal: false },
  ],
};
