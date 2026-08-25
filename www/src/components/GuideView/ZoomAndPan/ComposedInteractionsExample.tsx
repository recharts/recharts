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
import type { Lever } from '../../Shared/levers/Levers.tsx';
import { createCheckboxLever } from '../../Shared/levers/Levers.tsx';

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

export const composedInteractionsExampleDefaultState: ControlsType = {
  wheel: true,
  pan: true,
  axisZoom: true,
  doubleClickReset: true,
  keyboard: false,
  pinch: false,
  scrollbar: true,
};

export const composedInteractionsExampleLevers = [
  createCheckboxLever<ControlsType>({
    key: 'wheel',
    label: 'MouseWheelZoom',
    getValue: state => state.wheel,
    onChange: (wheel, state) => ({ ...state, wheel }),
  }),
  createCheckboxLever<ControlsType>({
    key: 'pan',
    label: 'PanOnDrag',
    getValue: state => state.pan,
    onChange: (pan, state) => ({ ...state, pan }),
  }),
  createCheckboxLever<ControlsType>({
    key: 'axisZoom',
    label: 'AxisZoom',
    getValue: state => state.axisZoom,
    onChange: (axisZoom, state) => ({ ...state, axisZoom }),
  }),
  createCheckboxLever<ControlsType>({
    key: 'doubleClickReset',
    label: 'DoubleClickReset',
    getValue: state => state.doubleClickReset,
    onChange: (doubleClickReset, state) => ({ ...state, doubleClickReset }),
  }),
  createCheckboxLever<ControlsType>({
    key: 'keyboard',
    label: 'ZoomPanKeyboard',
    getValue: state => state.keyboard,
    onChange: (keyboard, state) => ({ ...state, keyboard }),
  }),
  createCheckboxLever<ControlsType>({
    key: 'pinch',
    label: 'PinchZoom',
    getValue: state => state.pinch,
    onChange: (pinch, state) => ({ ...state, pinch }),
  }),
  createCheckboxLever<ControlsType>({
    key: 'scrollbar',
    label: 'ZoomScrollbar',
    getValue: state => state.scrollbar,
    onChange: (scrollbar, state) => ({ ...state, scrollbar }),
  }),
] satisfies ReadonlyArray<Lever<ControlsType>>;

/*
 * No bundle: exactly five interactions are mounted. Wheel zooms, drag pans, wheel over an axis
 * zooms only that axis, double-click resets and the x scrollbar edits the viewport - and nothing else
 * (no pinch, no keyboard).
 */
export default function ComposedInteractionsExample(props: Partial<ControlsType>) {
  const { wheel, pan, axisZoom, doubleClickReset, keyboard, pinch, scrollbar } = {
    ...composedInteractionsExampleDefaultState,
    ...props,
  };

  return (
    <LineChart style={{ width: '100%', maxWidth: 700, height: 300 }} data={data} responsive>
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
      {scrollbar && <ZoomScrollbar axis="x" ariaLabel="Visible x range" />}
    </LineChart>
  );
}
