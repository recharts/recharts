import { Lever } from '../Levers.tsx';

export const replayAnimationLever: Lever = {
  name: 'replayAnimation',
  Component: ({ state, handleChange, htmlId }) => (
    <button id={htmlId} type="button" onClick={() => handleChange({ replayKey: (state.replayKey ?? 0) + 1 })}>
      ▶ Replay animation
    </button>
  ),
};
