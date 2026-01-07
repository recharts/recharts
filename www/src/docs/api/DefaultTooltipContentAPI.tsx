import { Link } from 'react-router';
import { ApiDoc } from './types';

export const DefaultTooltipContentAPI: ApiDoc = {
  name: 'DefaultTooltipContent',
  props: [
    { name: 'accessibilityLayer', type: 'boolean', isOptional: false },
    { name: 'contentStyle', type: 'React.CSSProperties', isOptional: true },
    { name: 'formatter', type: 'Formatter<TValue, TName>', isOptional: true },
    { name: 'itemSorter', type: '"dataKey" | "name" | "value" | Function', isOptional: true },
    { name: 'itemStyle', type: 'React.CSSProperties', isOptional: true },
    { name: 'label', type: 'ReactNode', isOptional: true },
    { name: 'labelClassName', type: 'string', isOptional: true },
    { name: 'labelFormatter', type: 'Function', isOptional: true },
    { name: 'labelStyle', type: 'React.CSSProperties', isOptional: true },
    { name: 'payload', type: 'Array<readonly Payload<TValue, TName>>', isOptional: true },
    { name: 'separator', type: 'string', isOptional: true },
    { name: 'wrapperClassName', type: 'string', isOptional: true },
  ],
  desc: {
    'en-US': (
      <section>
        <p>
          This component is by default rendered inside the <Link to="/api/Tooltip/">Tooltip</Link> component. You would
          not use it directly.
        </p>
        <p>
          You can use this component to customize the content of the tooltip, or you can provide your own completely
          independent content.
        </p>
      </section>
    ),
  },
};
