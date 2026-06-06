import { Lever } from '../Levers.tsx';

export const isAnimationActiveLever: Lever = {
  name: 'isAnimationActive',
  Component: ({ state, handleChange, htmlId }) => (
    <select
      id={htmlId}
      value={String(state.isAnimationActive)}
      onChange={e => {
        const raw = e.target.value;
        const value: boolean | 'auto' = raw === 'auto' ? 'auto' : raw === 'true';
        handleChange({ isAnimationActive: value });
      }}
    >
      <option value="auto">auto</option>
      <option value="true">true</option>
      <option value="false">false</option>
    </select>
  ),
};
