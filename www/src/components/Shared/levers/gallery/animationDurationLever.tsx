import type { Lever } from '../Levers.tsx';
import { createRangeLever } from '../Levers.tsx';

type WithAnimationDuration = {
  animationDuration: number;
};

export function animationDurationLever<TState extends WithAnimationDuration>(): Lever<TState> {
  return createRangeLever({
    key: 'animationDuration',
    label: 'animationDuration [ms]',
    min: 100,
    max: 3000,
    step: 100,
    getValue: state => state.animationDuration,
    onChange: (animationDuration, state) => ({ ...state, animationDuration }),
  });
}
