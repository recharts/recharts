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
        <LabelList position={{ x: 120, y: 120 }} valueAccessor={() => 'custom'} className="custom" />
        <LabelList position="center" valueAccessor={() => 'center'} />
        <LabelList position="right" valueAccessor={() => 'right'} />
        <LabelList position="insideRight" valueAccessor={() => 'insideRight'} />
        <LabelList position="left" valueAccessor={() => 'left'} />
        <LabelList position="insideLeft" valueAccessor={() => 'insideLeft'} />
        <LabelList position="insideTopLeft" valueAccessor={() => 'insideTopLeft'} />
        <LabelList position="insideBottomLeft" valueAccessor={() => 'insideBottomLeft'} />
        <LabelList position="top" valueAccessor={() => 'top'} />
        <LabelList position="insideTop" valueAccessor={() => 'insideTop'} />
        <LabelList position="insideTopRight" valueAccessor={() => 'insideTopRight'} />
        <LabelList position="insideBottomRight" valueAccessor={() => 'insideBottomRight'} />
        <LabelList position="bottom" valueAccessor={() => 'bottom'} />
        <LabelList position="insideBottom" valueAccessor={() => 'insideBottom'} />
      </Funnel>
      <RechartsDevtools />
    </FunnelChart>
  );
};

export default LabelFunnelPositions;
