import { ApiDoc } from './types';

export const useActiveTooltipLabelAPI: ApiDoc = {
  name: 'useActiveTooltipLabel',
  props: [],
  desc: {
    'en-US': (
      <section>
        <p>
          Returns the active tooltip label. The label is one of the values from the chart data, and is used to display
          in the tooltip content.
        </p>
        <p>Returns undefined if there is no active user interaction or if used outside a chart context</p>
      </section>
    ),
  },
  returnValue: 'number | string | undefined',
  returnDesc: {
    'en-US': (
      <section>
        <p>ActiveLabel</p>
      </section>
    ),
  },
};
