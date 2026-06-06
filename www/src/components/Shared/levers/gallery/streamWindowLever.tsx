import { ReactNode, useEffect, useState } from 'react';
import type { Lever } from '../Levers.tsx';

type WithWindowStart = {
  animationDuration: number;
  windowStart: number;
};

function wrapValue(value: number, wrapAt: number): number {
  return ((value % wrapAt) + wrapAt) % wrapAt;
}

export function streamWindowLever<TState extends WithWindowStart>({
  wrapAt,
  step = 1,
  label = 'streaming',
  startLabel = 'Start streaming',
  stopLabel = 'Stop streaming',
}: {
  wrapAt: number;
  step?: number;
  label?: ReactNode;
  startLabel?: ReactNode;
  stopLabel?: ReactNode;
}): Lever<TState> {
  return {
    key: 'streamWindow',
    label,
    Component: ({ state, setState, htmlId }) => {
      const [isStreaming, setIsStreaming] = useState(false);
      const delayMs = state.animationDuration * 1.1;

      useEffect(() => {
        if (!isStreaming) {
          return undefined;
        }

        const interval = setInterval(() => {
          setState(previousState => ({
            ...previousState,
            windowStart: wrapValue(previousState.windowStart + step, wrapAt),
          }));
        }, delayMs);

        return () => clearInterval(interval);
      }, [delayMs, isStreaming, setState]);

      return (
        <button id={htmlId} type="button" onClick={() => setIsStreaming(previous => !previous)}>
          {isStreaming ? stopLabel : startLabel}
        </button>
      );
    },
  };
}
