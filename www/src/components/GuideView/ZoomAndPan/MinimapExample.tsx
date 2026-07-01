import React from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  Minimap,
  MinimapDrag,
  MinimapKeyboard,
  MinimapPinch,
  MinimapWheel,
  Tooltip,
  XAxis,
  YAxis,
  ZoomAndPan,
} from 'recharts';
import { generateMockData } from '@recharts/devtools';

const data = generateMockData(80, 3);

type MinimapPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

type ControlsType = {
  minimapPosition: MinimapPosition;
  minimapWheel: boolean;
  minimapPinch: boolean;
  globalWheel: boolean;
};

const defaultState: ControlsType = {
  minimapPosition: 'bottom-right',
  minimapWheel: true,
  minimapPinch: true,
  globalWheel: true,
};

export default function MinimapExample(props: Partial<ControlsType>) {
  const minimapPosition = props.minimapPosition ?? defaultState.minimapPosition;
  const minimapWheel = props.minimapWheel ?? defaultState.minimapWheel;
  const minimapPinch = props.minimapPinch ?? defaultState.minimapPinch;
  const globalWheel = props.globalWheel ?? defaultState.globalWheel;

  return (
    <LineChart width={700} height={320} data={data} responsive>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="label" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="x" stroke="#8884d8" dot={false} isAnimationActive={false} />
      <Line type="monotone" dataKey="y" stroke="#82ca9d" dot={false} isAnimationActive={false} />
      <ZoomAndPan axis="x" initialZoom={{ x: { start: 0.2, end: 0.5 } }} scrollbars={false} wheel={globalWheel} />
      {/* Drag the rectangle to pan, resize its edges to zoom, click outside it to jump. */}
      <Minimap
        axis="x"
        position={minimapPosition}
        width={200}
        height={70}
        viewportStroke="#1d4ed8"
        controls={
          <>
            <MinimapDrag />
            <MinimapWheel enabled={minimapWheel} />
            {minimapPinch && <MinimapPinch />}
            <MinimapKeyboard />
          </>
        }
      >
        <LineChart data={data}>
          <Line type="monotone" dataKey="x" stroke="#8884d8" dot={false} isAnimationActive={false} />
        </LineChart>
      </Minimap>
    </LineChart>
  );
}

export function MinimapExampleControls({
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
              <label htmlFor="minimap-position">Minimap position</label>
            </td>
            <td style={{ padding: '0 1ex' }}>
              <select
                id="minimap-position"
                value={state.minimapPosition}
                onChange={e => handleChange({ minimapPosition: e.target.value as MinimapPosition })}
              >
                <option value="top-left">Top left</option>
                <option value="top-right">Top right</option>
                <option value="bottom-left">Bottom left</option>
                <option value="bottom-right">Bottom right</option>
              </select>
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
              <label htmlFor="minimap-wheel">
                <input
                  id="minimap-wheel"
                  type="checkbox"
                  checked={state.minimapWheel}
                  onChange={e => handleChange({ minimapWheel: e.target.checked })}
                />
                {' wheel on minimap'}
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="minimap-pinch">
                <input
                  id="minimap-pinch"
                  type="checkbox"
                  checked={state.minimapPinch}
                  onChange={e => handleChange({ minimapPinch: e.target.checked })}
                />
                {' pinch on minimap'}
              </label>
            </td>
          </tr>
        </tbody>
      </table>
      <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
        Drag the rectangle to pan, resize its edges to zoom, click outside to jump. Try disabling &quot;wheel on
        chart&quot; then test &quot;wheel on minimap&quot; to see the difference.
      </p>
    </form>
  );
}
