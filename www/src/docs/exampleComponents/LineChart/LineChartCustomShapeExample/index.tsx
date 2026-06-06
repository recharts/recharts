import { Line, LineChart, CartesianGrid, Tooltip, XAxis, YAxis, LineDrawShapeProps, Curve } from 'recharts';
import { generateMockData, RechartsDevtools } from '@recharts/devtools';
import type { Lever } from '../../../../components/Shared/levers/Levers.tsx';
import { createNumberLever } from '../../../../components/Shared/levers/Levers.tsx';
import { replayAnimationLever } from '../../../../components/Shared/levers/gallery/replayAnimationLever.tsx';
import { swapDataSetLever } from '../../../../components/Shared/levers/gallery/swapDataLever.tsx';

const data1 = generateMockData(7, 100);
const data2 = generateMockData(7, 200);

type ControlsType = {
  dataSet: 'a' | 'b';
  replayKey: number;
  animationDuration: number;
};

export const lineChartCustomShapeDefaultState: ControlsType = {
  dataSet: 'a',
  replayKey: 0,
  animationDuration: 500,
};

/**
 * Custom shape that fades in using opacity during entrance animation,
 * and renders normally otherwise.
 */
function OpacityFadeShape(props: LineDrawShapeProps) {
  const { animationElapsedTime = 1, isEntrance = false } = props;
  const opacity = isEntrance ? animationElapsedTime : 1;
  return <Curve {...props} strokeOpacity={opacity} />;
}

export const lineChartCustomShapeLevers = [
  createNumberLever<ControlsType>({
    key: 'animationDuration',
    label: 'animationDuration',
    min: 0,
    getValue: state => state.animationDuration,
    onChange: (animationDuration, state) => ({ ...state, animationDuration }),
  }),
  replayAnimationLever<ControlsType>({
    buttonLabel: (
      <>
        Force remount (Triggers <em>entrance</em> animation)
      </>
    ),
  }),
  swapDataSetLever<ControlsType>({
    buttonLabel: (
      <>
        ⇄ Swap dataset (Triggers <em>update</em> animation)
      </>
    ),
  }),
] satisfies ReadonlyArray<Lever<ControlsType>>;

export default function LineChartCustomShapeExample(props: Partial<ControlsType>) {
  const { dataSet, replayKey, animationDuration } = { ...lineChartCustomShapeDefaultState, ...props };
  const data = dataSet === 'a' ? data1 : data2;
  return (
    <LineChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="label" />
      <YAxis width="auto" />
      <Tooltip />
      <Line
        key={replayKey}
        type="monotone"
        dataKey="y"
        stroke="#8884d8"
        strokeWidth={3}
        shape={OpacityFadeShape}
        animationDuration={animationDuration}
      />
      <RechartsDevtools />
    </LineChart>
  );
}
