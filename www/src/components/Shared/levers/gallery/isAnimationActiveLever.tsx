import type { Lever, SelectOption } from '../Levers.tsx';
import { createSelectLever } from '../Levers.tsx';

type IsAnimationActiveValue = boolean | 'auto';
type SelectValue = 'auto' | 'true' | 'false';

type WithIsAnimationActive = {
  isAnimationActive: IsAnimationActiveValue;
};

const options: ReadonlyArray<SelectOption<SelectValue>> = [
  { value: 'auto', label: 'auto' },
  { value: 'true', label: 'true' },
  { value: 'false', label: 'false' },
];

function toSelectValue(value: IsAnimationActiveValue): SelectValue {
  if (value === 'auto') {
    return 'auto';
  }

  return value ? 'true' : 'false';
}

function fromSelectValue(value: SelectValue): IsAnimationActiveValue {
  if (value === 'auto') {
    return 'auto';
  }

  return value === 'true';
}

export function isAnimationActiveLever<TState extends WithIsAnimationActive>(): Lever<TState> {
  return createSelectLever({
    key: 'isAnimationActive',
    label: 'isAnimationActive',
    options,
    getValue: state => toSelectValue(state.isAnimationActive),
    onChange: (value, state) => ({ ...state, isAnimationActive: fromSelectValue(value) }),
  });
}
