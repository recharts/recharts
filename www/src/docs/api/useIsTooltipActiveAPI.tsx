import { Link } from 'react-router';
import { ApiDoc } from './types';

export const useIsTooltipActiveAPI: ApiDoc = {
  name: 'useIsTooltipActive',
  props: [],
  desc: {
    'en-US': (
      <section>
        <p>
          Returns true if the <Link to="/api/Tooltip/">Tooltip</Link> is currently active (visible).
        </p>
        <p>Returns false if the Tooltip is not active or if used outside a chart context.</p>
        <p>
          Recharts only allows one Tooltip per chart, so this hook does not take any parameters. Weird things may happen
          if you have multiple Tooltip components in the same chart so please don&#39;t do that.
        </p>
        <p>Available since Recharts 3.7</p>
      </section>
    ),
  },
  returnValue: 'boolean',
  returnDesc: {
    'en-US': (
      <section>
        <p>True if the Tooltip is active, false otherwise.</p>
      </section>
    ),
  },
};
