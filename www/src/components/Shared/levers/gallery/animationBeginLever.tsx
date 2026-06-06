import { Lever, LeverProps } from '../Levers.tsx';

export const AnimationBeginComponent = ({ state, handleChange, htmlId }: LeverProps) => (
  <>
    <input
      id={htmlId}
      type="range"
      min="0"
      max="2000"
      step="100"
      value={state.animationBegin}
      onChange={e => handleChange({ animationBegin: parseInt(e.target.value, 10) })}
    />
    {state.animationBegin}
  </>
);

export const animationBeginLever: Lever = {
  name: 'animationBegin',
  Component: AnimationBeginComponent,
};
