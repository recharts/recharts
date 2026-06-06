import { Lever } from '../Levers.tsx';

export const animationDurationLever: Lever = {
  name: 'animationDuration',
  Component: ({ state, handleChange, htmlId }) => (
    <>
      <input
        id={htmlId}
        type="range"
        min="100"
        max="3000"
        step="100"
        value={state.animationDuration}
        onChange={e => handleChange({ animationDuration: parseInt(e.target.value, 10) })}
      />
      {state.animationDuration}
    </>
  ),
};
