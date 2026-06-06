import { EasingInput } from 'recharts';
import { Lever } from '../Levers.tsx';

type AnimationEasing = Extract<EasingInput, string>;

const easingOptions: ReadonlyArray<AnimationEasing> = [
  'ease',
  'ease-in',
  'ease-out',
  'ease-in-out',
  'linear',
  'spring',
  'cubic-bezier(.32,1.75,0,.94)',
];

export const animationEasingLever: Lever = {
  name: 'animationEasing',
  Component: ({ state, handleChange, htmlId }) => (
    <select
      id={htmlId}
      value={state.animationEasing}
      // @ts-expect-error - We know that the value will be one of the options, but TypeScript can't infer that from the event target.
      onChange={e => handleChange({ animationEasing: e.target.value })}
    >
      {easingOptions.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  ),
};
