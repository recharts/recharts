import { ApiDoc } from './types';

export const CustomizedAPI: ApiDoc = {
  name: 'Customized',
  props: [
    {
      name: 'component',
      type: 'C',
      isOptional: false,
      desc: {
        'en-US': (
          <section>
            <p>Render your components directly, without Customized wrapper. Will be removed in 4.0</p>
          </section>
        ),
      },
      format: ['Before: `<Customized component={<MyCustomComponent />} />`', 'After: `<MyCustomComponent />`'],
      deprecated: true,
    },
  ],
  desc: {
    'en-US': (
      <section>
        <p>
          Customized component used to be necessary to render custom elements in Recharts 2.x. Starting from Recharts
          3.x, all charts are able to render arbitrary elements anywhere, and Customized is no longer needed.
        </p>
      </section>
    ),
  },
  deprecated: 'Just render your components directly. Will be removed in 4.0',
};
