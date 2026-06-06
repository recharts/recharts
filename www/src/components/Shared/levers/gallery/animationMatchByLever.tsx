import { matchAppend, matchByIndex } from 'recharts';
import { Lever } from '../Levers.tsx';

export const animationMatchByLever: Lever = {
  name: 'animationMatchBy',
  Component: ({ state, handleChange, htmlId }) => (
    <select
      id={htmlId}
      value={state.animationMatchBy}
      // @ts-expect-error - We know that the value will be one of the options, but TypeScript can't infer that from the event target.
      onChange={e => handleChange({ animationMatchBy: e.target.value })}
    >
      <option value={matchByIndex}>matchByIndex</option>
      <option value={matchAppend}>matchAppend</option>
    </select>
  ),
};
