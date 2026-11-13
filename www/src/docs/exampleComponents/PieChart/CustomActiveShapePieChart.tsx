import { Pie, PieChart, Sector, Tooltip, TooltipIndex, Margin, PieSectorShapeProps, Text } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import { CSSProperties } from 'react';

// #region Sample data
const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 100 },
  { name: 'Group D', value: 200 },
];

// #endregion
const renderShape = (props: PieSectorShapeProps) => {
  if (!props.isActive) {
    return <Sector {...props} />;
  }
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * (midAngle ?? 1));
  const cos = Math.cos(-RADIAN * (midAngle ?? 1));
  const sx = (cx ?? 0) + ((outerRadius ?? 0) + 10) * cos;
  const sy = (cy ?? 0) + ((outerRadius ?? 0) + 10) * sin;
  const mx = (cx ?? 0) + ((outerRadius ?? 0) + 30) * cos;
  const my = (cy ?? 0) + ((outerRadius ?? 0) + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={(outerRadius ?? 0) + 6}
        outerRadius={(outerRadius ?? 0) + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <Text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill={fill}>{`PV ${value}`}</Text>
      <Text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor}>
        {`(Rate ${((percent ?? 1) * 100).toFixed(2)}%)`}
      </Text>
    </g>
  );
};

const emptyComponent = () => null;
const chartStyle: CSSProperties = { width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 };
const margin: Margin = {
  top: 50,
  right: 120,
  bottom: 0,
  left: 120,
};

export default function CustomActiveShapePieChart({
  isAnimationActive = true,
  defaultIndex = undefined,
}: {
  isAnimationActive?: boolean;
  defaultIndex?: TooltipIndex;
}) {
  return (
    <PieChart style={chartStyle} responsive margin={margin}>
      <Pie
        shape={renderShape}
        data={data}
        cx="50%"
        cy="50%"
        innerRadius="60%"
        outerRadius="80%"
        dataKey="value"
        isAnimationActive={isAnimationActive}
      />
      <Tooltip content={emptyComponent} defaultIndex={defaultIndex} />
      <RechartsDevtools />
    </PieChart>
  );
}
