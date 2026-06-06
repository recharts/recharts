import { ReactNode } from 'react';
import type { Lever } from '../Levers.tsx';
import { createRangeLever } from '../Levers.tsx';

type WithAnimationDuration = {
  animationDuration: number;
};

export function animationDurationLever<TState extends WithAnimationDuration>({
  label = 'animationDuration',
  min = 100,
  max = 3000,
  step = 100,
  formatValue = value => value,
}: {
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  formatValue?: (value: number, state: TState) => ReactNode;
} = {}): Lever<TState> {
  return createRangeLever({
    key: 'animationDuration',
    label,
    min,
    max,
    step,
    getValue: state => state.animationDuration,
    onChange: (animationDuration, state) => ({ ...state, animationDuration }),
    formatValue,
  });
}
