import { LabelList, PolarAngleAxis, RadialBar, RadialBarChart, useRechartsTheme } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const data = [{ x: 100 }, { x: 200 }];
const style = { width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 };
const domain = [0, 250];

const BarsWithLabels = ({ isAnimationActive }: { isAnimationActive?: boolean }) => {
  const theme = useRechartsTheme();
  return (
    <RadialBar
      dataKey="x"
      fill="none"
      stroke={theme?.typography?.color ?? 'black'}
      isAnimationActive={isAnimationActive}
    >
      <LabelList position="insideStart" valueAccessor={() => 'insideStart'} />
      <LabelList position="insideEnd" valueAccessor={() => 'insideEnd'} />
      <LabelList position="end" valueAccessor={() => 'end'} />
    </RadialBar>
  );
};

const LabelRadialBarPositions = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => (
  <RadialBarChart data={data} style={style} responsive innerRadius="30%">
    <PolarAngleAxis type="number" domain={domain} tick={false} />
    <BarsWithLabels isAnimationActive={isAnimationActive} />
    <RechartsDevtools />
  </RadialBarChart>
);

export default LabelRadialBarPositions;
