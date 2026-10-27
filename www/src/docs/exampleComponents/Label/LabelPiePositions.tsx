import { LabelList, Pie, PieChart, useRechartsTheme } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const PieWithLabels = ({ isAnimationActive }: { isAnimationActive?: boolean }) => {
  const theme = useRechartsTheme();
  return (
    <Pie
      data={[{ x: 100 }, { x: 200 }]}
      innerRadius="30%"
      paddingAngle={10}
      cornerRadius={9}
      dataKey="x"
      fill="none"
      stroke={theme?.typography?.color ?? 'black'}
      isAnimationActive={isAnimationActive}
    >
      <LabelList position="center" valueAccessor={() => 'center'} />
      <LabelList position="inside" valueAccessor={() => 'inside'} />
      <LabelList position="outside" valueAccessor={() => 'outside'} />
    </Pie>
  );
};

const LabelPiePositions = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => (
  <PieChart style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }} responsive>
    <PieWithLabels isAnimationActive={isAnimationActive} />
    <RechartsDevtools />
  </PieChart>
);

export default LabelPiePositions;
