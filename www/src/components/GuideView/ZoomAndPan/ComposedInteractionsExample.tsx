import React from 'react';
import {
  AxisZoom,
  CartesianGrid,
  DoubleClickReset,
  Line,
  LineChart,
  MouseWheelZoom,
  PanOnDrag,
  Tooltip,
  XAxis,
  YAxis,
  ZoomScrollbar,
  PinchZoom,
  ZoomPanKeyboard,
} from 'recharts';
import { generateMockData } from '@recharts/devtools';

const data = generateMockData(60, 5);

type ControlsType = {
  wheel: boolean;
  pan: boolean;
  axisZoom: boolean;
  doubleClickReset: boolean;
  keyboard: boolean;
  pinch: boolean;
  scrollbar: boolean;
};

const defaultState: ControlsType = {
  wheel: true,
  pan: true,
  axisZoom: true,
  doubleClickReset: true,
  keyboard: false,
  pinch: false,
  scrollbar: true,
};

/*
 * No bundle: exactly four interactions are mounted. Wheel zooms, drag pans, wheel over an axis
 * zooms only that axis, double-click resets - and nothing else (no pinch, no keyboard).
 */
export default function ComposedInteractionsExample(props: Partial<ControlsType>) {
  const wheel = props.wheel ?? defaultState.wheel;
  const pan = props.pan ?? defaultState.pan;
  const axisZoom = props.axisZoom ?? defaultState.axisZoom;
  const doubleClickReset = props.doubleClickReset ?? defaultState.doubleClickReset;
  const keyboard = props.keyboard ?? defaultState.keyboard;
  const pinch = props.pinch ?? defaultState.pinch;
  const scrollbar = props.scrollbar ?? defaultState.scrollbar;

  return (
    <LineChart width={700} height={300} data={data} responsive>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="label" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="x" stroke="#8884d8" dot={false} isAnimationActive={false} />
      {wheel && <MouseWheelZoom />}
      {pan && <PanOnDrag />}
      {axisZoom && <AxisZoom />}
      {doubleClickReset && <DoubleClickReset />}
      {keyboard && <ZoomPanKeyboard />}
      {pinch && <PinchZoom />}
      {scrollbar && <ZoomScrollbar axis="x" />}
    </LineChart>
  );
}

export function ComposedInteractionsExampleControls({
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
              <label htmlFor="wheel">
                <input
                  id="wheel"
                  type="checkbox"
                  checked={state.wheel}
                  onChange={e => handleChange({ wheel: e.target.checked })}
                />
                {' MouseWheelZoom'}
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="pan">
                <input
                  id="pan"
                  type="checkbox"
                  checked={state.pan}
                  onChange={e => handleChange({ pan: e.target.checked })}
                />
                {' PanOnDrag'}
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="axisZoom">
                <input
                  id="axisZoom"
                  type="checkbox"
                  checked={state.axisZoom}
                  onChange={e => handleChange({ axisZoom: e.target.checked })}
                />
                {' AxisZoom'}
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="doubleClickReset">
                <input
                  id="doubleClickReset"
                  type="checkbox"
                  checked={state.doubleClickReset}
                  onChange={e => handleChange({ doubleClickReset: e.target.checked })}
                />
                {' DoubleClickReset'}
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="keyboard">
                <input
                  id="keyboard"
                  type="checkbox"
                  checked={state.keyboard}
                  onChange={e => handleChange({ keyboard: e.target.checked })}
                />
                {' ZoomPanKeyboard'}
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="pinch">
                <input
                  id="pinch"
                  type="checkbox"
                  checked={state.pinch}
                  onChange={e => handleChange({ pinch: e.target.checked })}
                />
                {' PinchZoom'}
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="scrollbar">
                <input
                  id="scrollbar"
                  type="checkbox"
                  checked={state.scrollbar}
                  onChange={e => handleChange({ scrollbar: e.target.checked })}
                />
                {' ZoomScrollbar'}
              </label>
            </td>
          </tr>
        </tbody>
      </table>
      <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
        Toggle individual interactions to compose exactly the gestures you want.
      </p>
    </form>
  );
}
