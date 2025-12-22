import React, { useMemo } from 'react';
import { Bar, BarChart, XAxis } from 'recharts';
import { generateMockData, RechartsDevtools } from '@recharts/devtools';
import { scaleBand } from 'd3-scale';

const data = generateMockData(5, 50);

export default function CustomBandScaleExample(props: Partial<ControlsType>) {
  // You don't need to set domain and scale, Recharts will do it for you based on the data.
  const customScale = useMemo(
    () =>
      scaleBand()
        .paddingInner(props.paddingInner ?? 0.1)
        .paddingOuter(props.paddingOuter ?? 0.1)
        .align(props.align ?? 0.1),
    [props.paddingInner, props.paddingOuter, props.align],
  );

  return (
    <BarChart
      style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }}
      responsive
      data={data}
      barCategoryGap={props.barCategoryGap == null ? undefined : `${props.barCategoryGap * 100}%`}
      barGap={props.barGap == null ? undefined : `${props.barGap * 100}%`}
    >
      <Bar dataKey="x" fill="#12978f" isAnimationActive={false} />
      <Bar dataKey="y" fill="#804351" isAnimationActive={false} />
      <Bar dataKey="z" fill="#a16712" isAnimationActive={false} />
      <XAxis dataKey="label" scale={customScale} />
      <RechartsDevtools />
    </BarChart>
  );
}

type ControlsType = {
  paddingInner: number;
  paddingOuter: number;
  align: number;
  barGap: number;
  barCategoryGap: number;
};

/**
 * Renders a simple form to control the band scale properties.
 * Each property is a slider input, ranging from 0 to 1 in 0.01 steps.
 * Calls onChange with the new values when an input changes.
 * @param onChange
 * @constructor
 */
export function BarAlignControls({ onChange }: { onChange: (values: ControlsType) => void }) {
  const [state, setState] = React.useState<ControlsType>({
    paddingInner: 0,
    paddingOuter: 0.8,
    align: 0.7,
    barGap: 0.1,
    barCategoryGap: 0.1,
  });

  const handleChange = (key: keyof ControlsType, value: number) => {
    const newState = { ...state, [key]: value };
    setState(newState);
    onChange(newState);
  };

  // Emit initial state only on mount so the chart is correct
  React.useEffect(() => {
    onChange(state);
    /*
     * The useEffect includes state in its dependency array while also calling onChange(state).
     * If the parent's onChange callback causes this component to re-render with the same state object reference,
     * this will trigger the effect again, potentially causing an infinite loop.
     *
     * This ensures the initial state is emitted only once on mount.
     * Subsequent state changes are already handled by handleChange, so this effect doesn't need to run on every state update.
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Eslint is reporting a false positive here, not sure why
  /* eslint-disable jsx-a11y/control-has-associated-label */
  return (
    <form>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="bar-align-bar-gap">BarChart.barGap</label>
            </td>
            <td style={{ padding: '0 1ex' }}>
              <input
                id="bar-align-bar-gap"
                type="range"
                min="0"
                max="0.5"
                step="0.01"
                value={state.barGap}
                onChange={e => handleChange('barGap', parseFloat(e.target.value))}
              />
            </td>
            <td>{`${(state.barGap * 100).toFixed(0)}%`}</td>
          </tr>
          <tr>
            <td>
              <label htmlFor="bar-align-bar-category-gap">BarChart.barCategoryGap</label>
            </td>
            <td style={{ padding: '0 1ex' }}>
              <input
                id="bar-align-bar-category-gap"
                type="range"
                min="0"
                max="0.5"
                step="0.01"
                value={state.barCategoryGap}
                onChange={e => handleChange('barCategoryGap', parseFloat(e.target.value))}
              />
            </td>
            <td>{`${(state.barCategoryGap * 100).toFixed(0)}%`}</td>
          </tr>
          <tr>
            <td>
              <label htmlFor="bar-align-padding-inner">bandScale.paddingInner</label>
            </td>
            <td style={{ padding: '0 1ex' }}>
              <input
                id="bar-align-padding-inner"
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={state.paddingInner}
                onChange={e => handleChange('paddingInner', parseFloat(e.target.value))}
              />
            </td>
            <td>{state.paddingInner}</td>
          </tr>
          <tr>
            <td>
              <label htmlFor="bar-align-padding-outer">bandScale.paddingOuter</label>
            </td>
            <td style={{ padding: '0 1ex' }}>
              <input
                id="bar-align-padding-outer"
                type="range"
                min="0"
                max="10"
                step="0.01"
                value={state.paddingOuter}
                onChange={e => handleChange('paddingOuter', parseFloat(e.target.value))}
              />
            </td>
            <td>{state.paddingOuter}</td>
          </tr>
          <tr>
            <td>
              <label htmlFor="bar-align-align">bandScale.align</label>
            </td>
            <td style={{ padding: '0 1ex' }}>
              <input
                id="bar-align-align"
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={state.align}
                onChange={e => handleChange('align', parseFloat(e.target.value))}
              />
            </td>
            <td>{state.align}</td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}
