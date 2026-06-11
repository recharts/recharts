import React from 'react';
import { Brush, BrushZoomControls, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis, ZoomAndPan } from 'recharts';
import { generateMockData } from '@recharts/devtools';

const data = generateMockData(80, 9);

type ControlsType = {
  autoScaleYDomain: boolean;
  brushWheel: boolean;
  brushPinch: boolean;
  globalWheel: boolean;
};

const defaultState: ControlsType = {
  autoScaleYDomain: true,
  brushWheel: true,
  brushPinch: true,
  globalWheel: true,
};

/*
 * The familiar Brush UI editing the zoom viewport instead of slicing data: drag the travellers or
 * the window, wheel over the rail, or zoom the plot itself - everything stays in sync because they
 * all edit the same viewport. autoScaleYDomain re-fits y to the visible window while you brush x.
 */
export default function BrushZoomModeExample(props: Partial<ControlsType>) {
  const autoScaleYDomain = props.autoScaleYDomain ?? defaultState.autoScaleYDomain;
  const brushWheel = props.brushWheel ?? defaultState.brushWheel;
  const brushPinch = props.brushPinch ?? defaultState.brushPinch;
  const globalWheel = props.globalWheel ?? defaultState.globalWheel;

  return (
    <LineChart width={700} height={340} data={data} responsive>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="label" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="x" stroke="#8884d8" dot={false} isAnimationActive={false} />
      <ZoomAndPan axis="x" initialZoom={{ x: { start: 0.25, end: 0.6 } }} scrollbars={false} wheel={globalWheel} />
      <Brush
        mode="zoom"
        autoScaleYDomain={autoScaleYDomain}
        height={48}
        stroke="#1d4ed8"
        controls={<BrushZoomControls wheel={brushWheel} pinch={brushPinch} />}
      >
        <LineChart data={data}>
          <Line type="monotone" dataKey="x" stroke="#8884d8" dot={false} isAnimationActive={false} />
        </LineChart>
      </Brush>
    </LineChart>
  );
}

export function BrushZoomModeExampleControls({
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
              <label htmlFor="brush-autoscale">
                <input
                  id="brush-autoscale"
                  type="checkbox"
                  checked={state.autoScaleYDomain}
                  onChange={e => handleChange({ autoScaleYDomain: e.target.checked })}
                />
                {' autoScaleYDomain'}
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="global-wheel">
                <input
                  id="global-wheel"
                  type="checkbox"
                  checked={state.globalWheel}
                  onChange={e => handleChange({ globalWheel: e.target.checked })}
                />
                {' wheel on chart'}
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="brush-wheel">
                <input
                  id="brush-wheel"
                  type="checkbox"
                  checked={state.brushWheel}
                  onChange={e => handleChange({ brushWheel: e.target.checked })}
                />
                {' wheel on Brush'}
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="brush-pinch">
                <input
                  id="brush-pinch"
                  type="checkbox"
                  checked={state.brushPinch}
                  onChange={e => handleChange({ brushPinch: e.target.checked })}
                />
                {' pinch on Brush'}
              </label>
            </td>
          </tr>
        </tbody>
      </table>
      <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
        Drag the travellers, wheel over the rail, or zoom the plot - they edit the same viewport. Try disabling
        &quot;wheel on chart&quot; then test &quot;wheel on Brush&quot; to see the difference.
      </p>
    </form>
  );
}
