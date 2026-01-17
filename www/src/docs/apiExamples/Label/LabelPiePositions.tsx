import { LabelList, Pie, PieChart } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const LabelPiePositions = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => (
  <PieChart style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }} responsive>
    <Pie
      data={[{ x: 100 }, { x: 200 }]}
      innerRadius="30%"
      paddingAngle={10}
      cornerRadius={9}
      dataKey="x"
      fill="none"
      stroke="var(--color-border-1)"
      isAnimationActive={isAnimationActive}
    >
      <LabelList fill="var(--color-text-3)" position="center" valueAccessor={() => 'center'} />
      <LabelList fill="var(--color-text-3)" position="inside" valueAccessor={() => 'inside'} />
      <LabelList fill="var(--color-text-3)" position="outside" valueAccessor={() => 'outside'} />
    </Pie>
    <RechartsDevtools />
  </PieChart>
);

export default LabelPiePositions;
