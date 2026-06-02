import { Funnel, FunnelChart, LabelList } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const LabelFunnelPositions = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => {
  return (
    <FunnelChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={[{ value: 100 }]}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 20,
      }}
    >
      <Funnel dataKey="value" fill="none" stroke="black" width="80%" reversed isAnimationActive={isAnimationActive}>
        <LabelList fill="black" position={{ x: 120, y: 120 }} valueAccessor={() => 'custom'} className="custom" />
        <LabelList position="center" fill="black" valueAccessor={() => 'center'} />
        <LabelList position="right" fill="black" valueAccessor={() => 'right'} />
        <LabelList position="insideRight" fill="black" valueAccessor={() => 'insideRight'} />
        <LabelList position="left" fill="black" valueAccessor={() => 'left'} />
        <LabelList position="insideLeft" fill="black" valueAccessor={() => 'insideLeft'} />
        <LabelList position="insideTopLeft" fill="black" valueAccessor={() => 'insideTopLeft'} />
        <LabelList position="insideBottomLeft" fill="black" valueAccessor={() => 'insideBottomLeft'} />
        <LabelList position="top" fill="black" valueAccessor={() => 'top'} />
        <LabelList position="insideTop" fill="black" valueAccessor={() => 'insideTop'} />
        <LabelList position="insideTopRight" fill="black" valueAccessor={() => 'insideTopRight'} />
        <LabelList position="insideBottomRight" fill="black" valueAccessor={() => 'insideBottomRight'} />
        <LabelList position="bottom" fill="black" valueAccessor={() => 'bottom'} />
        <LabelList position="insideBottom" fill="black" valueAccessor={() => 'insideBottom'} />
      </Funnel>
      <RechartsDevtools />
    </FunnelChart>
  );
};

export default LabelFunnelPositions;
