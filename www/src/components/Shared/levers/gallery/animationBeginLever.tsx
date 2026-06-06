import type { Lever } from '../Levers.tsx';
import { createRangeLever } from '../Levers.tsx';

type WithAnimationBegin = {
  animationBegin: number;
};

export function animationBeginLever<TState extends WithAnimationBegin>({
  label = 'animationBegin',
  min = 0,
  max = 2000,
  step = 100,
}: {
  label?: string;
  min?: number;
  max?: number;
  step?: number;
} = {}): Lever<TState> {
  return createRangeLever({
    key: 'animationBegin',
    label,
    min,
    max,
    step,
    getValue: state => state.animationBegin,
    onChange: (animationBegin, state) => ({ ...state, animationBegin }),
  });
}
