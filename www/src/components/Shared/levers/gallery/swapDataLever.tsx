import { Lever } from '../Levers.tsx';

export const replayAnimationLever: Lever = {
  name: 'replayAnimation',
  Component: ({ state, handleChange }) => (
    <button type="button" onClick={() => handleChange({ dataSet: state.dataSet === 'b' ? 'a' : 'b' })}>
      ⇄ Swap dataset
    </button>
  ),
};
