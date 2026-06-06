import type { Lever, SelectOption } from '../Levers.tsx';
import { createSelectLever } from '../Levers.tsx';

const easingOptions = [
  'ease',
  'ease-in',
  'ease-out',
  'ease-in-out',
  'linear',
  'spring',
  'cubic-bezier(.32,1.75,0,.94)',
] as const;

export type AnimationEasingValue = (typeof easingOptions)[number];

type WithAnimationEasing = {
  animationEasing: AnimationEasingValue;
};

const options: ReadonlyArray<SelectOption<AnimationEasingValue>> = easingOptions.map(option => ({
  value: option,
  label: option,
}));

export function animationEasingLever<TState extends WithAnimationEasing>(): Lever<TState> {
  return createSelectLever({
    key: 'animationEasing',
    label: 'animationEasing',
    options,
    getValue: state => state.animationEasing,
    onChange: (animationEasing, state) => ({ ...state, animationEasing }),
  });
}
