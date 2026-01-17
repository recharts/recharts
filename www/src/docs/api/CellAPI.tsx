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
  links: [
    { name: 'Custom Shape Bar Chart', url: '/examples/CustomShapeBarChart/', isExternal: false },
    { name: 'Bar Chart With Customized Event', url: '/examples/BarChartWithCustomizedEvent/', isExternal: false },
    { name: 'Scatter Chart With Cells', url: '/examples/ScatterChartWithCells/', isExternal: false },
    { name: 'Pie Chart With Customized Label', url: '/examples/PieChartWithCustomizedLabel/', isExternal: false },
  ],
  parentComponents: ['Bar', 'Funnel', 'Pie', 'RadialBar', 'Scatter'],
};
