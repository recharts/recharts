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
      <Funnel
        dataKey="value"
        fill="none"
        stroke="var(--color-border-1)"
        width="80%"
        reversed
        isAnimationActive={isAnimationActive}
      >
        <LabelList
          fill="var(--color-text-3)"
          position={{ x: 120, y: 120 }}
          valueAccessor={() => 'custom'}
          className="custom"
        />
        <LabelList position="center" fill="var(--color-text-3)" valueAccessor={() => 'center'} />
        <LabelList position="right" fill="var(--color-text-3)" valueAccessor={() => 'right'} />
        <LabelList position="insideRight" fill="var(--color-text-3)" valueAccessor={() => 'insideRight'} />
        <LabelList position="left" fill="var(--color-text-3)" valueAccessor={() => 'left'} />
        <LabelList position="insideLeft" fill="var(--color-text-3)" valueAccessor={() => 'insideLeft'} />
        <LabelList position="insideTopLeft" fill="var(--color-text-3)" valueAccessor={() => 'insideTopLeft'} />
        <LabelList position="insideBottomLeft" fill="var(--color-text-3)" valueAccessor={() => 'insideBottomLeft'} />
        <LabelList position="top" fill="var(--color-text-3)" valueAccessor={() => 'top'} />
        <LabelList position="insideTop" fill="var(--color-text-3)" valueAccessor={() => 'insideTop'} />
        <LabelList position="insideTopRight" fill="var(--color-text-3)" valueAccessor={() => 'insideTopRight'} />
        <LabelList position="insideBottomRight" fill="var(--color-text-3)" valueAccessor={() => 'insideBottomRight'} />
        <LabelList position="bottom" fill="var(--color-text-3)" valueAccessor={() => 'bottom'} />
        <LabelList position="insideBottom" fill="var(--color-text-3)" valueAccessor={() => 'insideBottom'} />
      </Funnel>
      <RechartsDevtools />
    </FunnelChart>
  );
};

export default LabelFunnelPositions;
