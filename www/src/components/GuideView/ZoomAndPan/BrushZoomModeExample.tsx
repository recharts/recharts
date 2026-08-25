import { Brush, BrushZoomControls, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis, ZoomAndPan } from 'recharts';
import { generateMockData } from '@recharts/devtools';
import type { Lever } from '../../Shared/levers/Levers.tsx';
import { createCheckboxLever } from '../../Shared/levers/Levers.tsx';

const data = generateMockData(80, 9);

type ControlsType = {
  autoScaleYDomain: boolean;
  brushWheel: boolean;
  brushPinch: boolean;
  globalWheel: boolean;
};

export const brushZoomModeExampleDefaultState: ControlsType = {
  autoScaleYDomain: true,
  brushWheel: true,
  brushPinch: true,
  globalWheel: true,
};

export const brushZoomModeExampleLevers = [
  createCheckboxLever<ControlsType>({
    key: 'autoScaleYDomain',
    label: 'autoScaleYDomain',
    getValue: state => state.autoScaleYDomain,
    onChange: (autoScaleYDomain, state) => ({ ...state, autoScaleYDomain }),
  }),
  createCheckboxLever<ControlsType>({
    key: 'globalWheel',
    label: 'Wheel on chart',
    getValue: state => state.globalWheel,
    onChange: (globalWheel, state) => ({ ...state, globalWheel }),
  }),
  createCheckboxLever<ControlsType>({
    key: 'brushWheel',
    label: 'Wheel on Brush',
    getValue: state => state.brushWheel,
    onChange: (brushWheel, state) => ({ ...state, brushWheel }),
  }),
  createCheckboxLever<ControlsType>({
    key: 'brushPinch',
    label: 'Pinch on Brush',
    getValue: state => state.brushPinch,
    onChange: (brushPinch, state) => ({ ...state, brushPinch }),
  }),
] satisfies ReadonlyArray<Lever<ControlsType>>;

/*
 * The familiar Brush UI editing the zoom viewport instead of slicing data: drag the travellers or
 * the window, wheel over the rail, or zoom the plot itself - everything stays in sync because they
 * all edit the same viewport. autoScaleYDomain re-fits y to the visible window while you brush x.
 */
export default function BrushZoomModeExample(props: Partial<ControlsType>) {
  const { autoScaleYDomain, brushWheel, brushPinch, globalWheel } = {
    ...brushZoomModeExampleDefaultState,
    ...props,
  };

  return (
    <LineChart style={{ width: '100%', maxWidth: 700, height: 340 }} data={data} responsive>
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
