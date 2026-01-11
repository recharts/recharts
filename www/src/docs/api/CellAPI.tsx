import { ApiDoc } from './types';

export const CellAPI: ApiDoc = {
  name: 'Cell',
  props: [],
  desc: {
    'en-US': (
      <section>
        <p>
          Cell can be wrapped by Pie, Bar, or RadialBar to specify attributes of each child. In Pie , for example, we
          can specify the attributes of each child node through data, but the props of Cell have higher priority
        </p>
      </section>
    ),
  },
  parentComponents: ['Bar', 'Funnel', 'Pie', 'RadialBar', 'Scatter'],
};
