import React from 'react';
import {
  AutoScaleAxis,
  CartesianGrid,
  FollowSeries,
  Line,
  LineChart,
  MouseWheelZoom,
  PanOnDrag,
  Tooltip,
  XAxis,
  YAxis,
  ZoomScrollbar,
} from 'recharts';
import { generateMockData } from '@recharts/devtools';

const data = generateMockData(80, 13);

type ControlsType = {
  autoScale: boolean;
  follow: boolean;
};

const defaultState: ControlsType = {
  autoScale: true,
  follow: false,
};

/*
 * Zoom into a slice of x (wheel) then pan around (drag the plot or the scrollbar): the y axis keeps
 * re-fitting to the data inside the visible window. Swap <AutoScaleAxis /> for
 * <FollowSeries dataKey="x" autoScale /> to keep one series centred instead.
 */
export default function AutoScaleFollowExample(props: Partial<ControlsType>) {
  const autoScale = props.autoScale ?? defaultState.autoScale;
  const follow = props.follow ?? defaultState.follow;

  return (
    <LineChart width={700} height={300} data={data} responsive>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="label" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="x" stroke="#8884d8" dot={false} isAnimationActive={false} />
      <MouseWheelZoom axis="x" />
      <PanOnDrag axis="x" />
      <ZoomScrollbar axis="x" />
      {autoScale && !follow && <AutoScaleAxis />}
      {follow && <FollowSeries dataKey="x" autoScale={autoScale} />}
    </LineChart>
  );
}

export function AutoScaleFollowExampleControls({
  onChange,
  sessionStoreValues,
}: {
  onChange: (values: ControlsType) => void;
  sessionStoreValues: ControlsType | null;
}) {
  const [state, setState] = React.useState<ControlsType>(sessionStoreValues ?? defaultState);

  const handleChange = (nextValues: Partial<ControlsType>) => {
    const newState = { ...state, ...nextValues };
    setState(newState);
    onChange(newState);
  };

  React.useEffect(() => {
    onChange(state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="autoscale">
                <input
                  id="autoscale"
                  type="checkbox"
                  checked={state.autoScale}
                  onChange={e => handleChange({ autoScale: e.target.checked })}
                />
                {' AutoScaleAxis'}
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="follow">
                <input
                  id="follow"
                  type="checkbox"
                  checked={state.follow}
                  onChange={e => handleChange({ follow: e.target.checked })}
                />
                {' FollowSeries'}
              </label>
            </td>
          </tr>
        </tbody>
      </table>
      <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
        {!state.autoScale && !state.follow && 'Y axis is free and does not react to X zoom or pan.'}
        {state.autoScale && !state.follow && 'Y axis re-fits to the visible data. Zoom X and pan to see it react.'}
        {state.follow && !state.autoScale && 'Y axis keeps the series centred while panning (fixed span).'}
        {state.follow && state.autoScale && 'Y axis keeps the series centred and auto-scales the span around it.'}
      </p>
    </form>
  );
}
