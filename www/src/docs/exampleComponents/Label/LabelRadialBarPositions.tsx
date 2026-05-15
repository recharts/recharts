import { LabelList, PolarAngleAxis, RadialBar, RadialBarChart } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const LabelRadialBarPositions = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => (
  <RadialBarChart
    data={[{ x: 100 }, { x: 200 }]}
    style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
    responsive
    innerRadius="30%"
  >
    <RadialBar dataKey="x" fill="none" stroke="black" isAnimationActive={isAnimationActive}>
      <LabelList fill="black" position="insideStart" valueAccessor={() => 'insideStart'} />
      <LabelList fill="black" position="insideEnd" valueAccessor={() => 'insideEnd'} />
      <LabelList fill="black" position="end" valueAccessor={() => 'end'} />
    </RadialBar>
    <PolarAngleAxis type="number" domain={[0, 250]} tick={false} />
    <RechartsDevtools />
  </RadialBarChart>
);

export default LabelRadialBarPositions;
