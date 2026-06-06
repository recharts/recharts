import { ReactNode } from 'react';
import type { Lever } from '../Levers.tsx';
import { createActionLever } from '../Levers.tsx';

type WithDataSet = {
  dataSet: 'a' | 'b';
};

export function swapDataSetLever<TState extends WithDataSet>({
  label = 'dataSet',
  buttonLabel,
}: {
  label?: string;
  buttonLabel?: ReactNode | ((state: TState) => ReactNode);
} = {}): Lever<TState> {
  return createActionLever({
    key: 'swapDataSet',
    label,
    buttonLabel: buttonLabel ?? ((state: TState) => `⇄ Swap dataset (${state.dataSet === 'a' ? 'A → B' : 'B → A'})`),
    onClick: state => ({ ...state, dataSet: state.dataSet === 'b' ? 'a' : 'b' }),
  });
}
