import {
  AutoScaleAxis,
  CartesianGrid,
  FollowSeries,
  Line,
  LineChart,
  MouseWheelZoom,
  PanOnDrag,
  PinchZoom,
  Tooltip,
  XAxis,
  YAxis,
  ZoomScrollbar,
} from 'recharts';
import type { Lever } from '../../Shared/levers/Levers.tsx';
import { createCheckboxLever } from '../../Shared/levers/Levers.tsx';

// A rising series gives each visible x window a much narrower and clearly different y extent than
// the complete dataset, so AutoScaleAxis' re-fit is immediately visible while panning.
const data = Array.from({ length: 80 }, (_, index) => ({
  label: `Point ${index + 1}`,
  x: Math.round(30 + index * 5 + Math.sin(index / 2) * 12),
}));

type ControlsType = {
  autoScale: boolean;
  follow: boolean;
};

export const autoScaleFollowExampleDefaultState: ControlsType = {
  autoScale: true,
  follow: false,
};

export const autoScaleFollowExampleLevers = [
  createCheckboxLever<ControlsType>({
    key: 'autoScale',
    label: 'AutoScaleAxis',
    getValue: state => state.autoScale,
    onChange: (autoScale, state) => ({ ...state, autoScale }),
  }),
  createCheckboxLever<ControlsType>({
    key: 'follow',
    label: 'FollowSeries',
    getValue: state => state.follow,
    onChange: (follow, state) => ({ ...state, follow }),
  }),
] satisfies ReadonlyArray<Lever<ControlsType>>;

/*
 * Zoom into a slice of x (wheel) then pan around (drag the plot or the scrollbar): the y axis keeps
 * re-fitting to the data inside the visible window. Swap <AutoScaleAxis /> for
 * <FollowSeries dataKey="x" autoScale /> to keep one series centred instead.
 */
export default function AutoScaleFollowExample(props: Partial<ControlsType>) {
  const { autoScale, follow } = { ...autoScaleFollowExampleDefaultState, ...props };

  return (
    <LineChart style={{ width: '100%', maxWidth: 700, height: 300 }} data={data} responsive>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="label" />
      <YAxis tickCount={8} />
      <Tooltip />
      <Line type="monotone" dataKey="x" stroke="#8884d8" dot={false} isAnimationActive={false} />
      <MouseWheelZoom axis="x" />
      <PanOnDrag axis="x" />
      <PinchZoom axis="x" touchDrag="pan" />
      <ZoomScrollbar axis="x" ariaLabel="Visible x range" />
      {autoScale && !follow && <AutoScaleAxis />}
      {follow && <FollowSeries dataKey="x" autoScale={autoScale} />}
    </LineChart>
  );
}
