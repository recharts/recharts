import { CartesianLayout } from 'recharts';
import { createSelectLever, Lever } from '../Levers.tsx';

type WithCartesianLayout = {
  layout: CartesianLayout;
};

export function cartesianLayoutLever<TState extends WithCartesianLayout>(): Lever<TState> {
  return createSelectLever<TState, CartesianLayout>({
    key: 'layout',
    label: 'layout',
    options: [
      { value: 'horizontal', label: 'horizontal' },
      { value: 'vertical', label: 'vertical' },
    ],
    getValue: state => state.layout,
    onChange: (layout, state) => ({ ...state, layout }),
  });
}
