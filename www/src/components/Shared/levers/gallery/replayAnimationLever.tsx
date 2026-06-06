import { ReactNode } from 'react';
import type { Lever } from '../Levers.tsx';
import { createActionLever } from '../Levers.tsx';

type WithReplayKey = {
  replayKey: number;
};

export function replayAnimationLever<TState extends WithReplayKey>({
  label = 'replayAnimation',
  buttonLabel = '▶ Replay animation',
}: {
  label?: string;
  buttonLabel?: ReactNode | ((state: TState) => ReactNode);
} = {}): Lever<TState> {
  return createActionLever({
    key: 'replayAnimation',
    label,
    buttonLabel,
    onClick: state => ({ ...state, replayKey: state.replayKey + 1 }),
  });
}
