import { FunnelChart, Funnel, LabelList, Trapezoid, Label, FunnelTrapezoidItem } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  { value: 100, name: 'Impression', fill: 'var(--color-chart-1)' },
  { value: 80, name: 'Click', fill: 'var(--color-chart-7)' },
  { value: 50, name: 'Visit', fill: 'var(--color-chart-4)' },
  { value: 40, name: 'Consult', fill: 'var(--color-chart-2)' },
  { value: 26, name: 'Order', fill: 'var(--color-chart-5)' },
];

const FunnelWithDimensions = (props: FunnelTrapezoidItem) => {
  return (
    <>
      <Trapezoid {...props} stroke="var(--color-chart-8)" fill="var(--color-chart-8)" fillOpacity={0.2} />
      <Label
        position="insideBottom"
        value={`lowerWidth: ${Math.round(props.lowerWidth)}`}
        viewBox={props.labelViewBox}
        fill="var(--color-text-3)"
      />
      <Label
        position="insideTop"
        value={`upperWidth: ${Math.round(props.upperWidth)}`}
        viewBox={props.labelViewBox}
        fill="var(--color-text-3)"
      />
      <Label
        position="insideTopLeft"
        value={`x: ${Math.round(props.x)}`}
        viewBox={props.labelViewBox}
        fill="var(--color-text-3)"
      />
      <Label
        position="insideTopRight"
        value={`y: ${Math.round(props.y)}`}
        viewBox={props.labelViewBox}
        fill="var(--color-text-3)"
      />
      <Label
        position="middle"
        value={`width: ${Math.round(props.width)}`}
        viewBox={props.labelViewBox}
        fill="var(--color-text-3)"
      />
    </>
  );
};

// #endregion
const FunnelExample = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => {
  return (
    <FunnelChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      margin={{
        right: 30,
      }}
    >
      <Funnel
        dataKey="value"
        data={data}
        isAnimationActive={isAnimationActive}
        activeShape={FunnelWithDimensions}
        reversed
        stroke="var(--color-surface-base)"
      >
        <LabelList position="right" fill="var(--color-text-3)" stroke="none" dataKey="name" offset={20} />
      </Funnel>
      <RechartsDevtools />
    </FunnelChart>
  );
};

export default FunnelExample;
