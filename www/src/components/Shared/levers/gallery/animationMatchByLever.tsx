import type { Lever, SelectOption } from '../Levers.tsx';
import { createSelectLever } from '../Levers.tsx';

export type AnimationMatchByValue = 'index' | 'append' | 'dataKey';

type WithAnimationMatchBy = {
  animationMatchBy: AnimationMatchByValue;
};

const defaultOptions: ReadonlyArray<SelectOption<AnimationMatchByValue>> = [
  { value: 'index', label: 'matchByIndex' },
  { value: 'append', label: 'matchAppend' },
];

export function animationMatchByLever<TState extends WithAnimationMatchBy>({
  label = 'animationMatchBy',
  options = defaultOptions,
}: {
  label?: string;
  options?: ReadonlyArray<SelectOption<AnimationMatchByValue>>;
} = {}): Lever<TState> {
  return createSelectLever({
    key: 'animationMatchBy',
    label,
    options,
    getValue: state => state.animationMatchBy,
    onChange: (animationMatchBy, state) => ({ ...state, animationMatchBy }),
  });
}
