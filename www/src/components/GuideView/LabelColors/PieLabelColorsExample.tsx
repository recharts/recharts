import { LabelList, Pie, PieChart, RadialBar, RadialBarChart } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const data = [
  { name: 'Chrome', value: 240 },
  { name: 'Safari', value: 200 },
  { name: 'Edge', value: 170 },
  { name: 'Firefox', value: 150 },
];

const rowStyle = { display: 'flex', flexWrap: 'wrap', gap: 16 } as const;
const chartStyle = { width: '100%', maxWidth: 300, aspectRatio: 1 };

/*
 * In polar charts, `outside` and `end` are away from the sector, and so are the
 * `center` positions, which are at the center of the chart.
 * Every other position is on top of the sector.
 */
export default function PieLabelColorsExample() {
  return (
    <div style={rowStyle}>
      <PieChart style={chartStyle} responsive>
        <Pie data={data} dataKey="value" nameKey="name" outerRadius="70%" isAnimationActive={false}>
          <LabelList dataKey="value" position="inside" />
          <LabelList dataKey="name" position="outside" />
        </Pie>
        <RechartsDevtools />
      </PieChart>
      <RadialBarChart
        style={chartStyle}
        responsive
        data={data}
        innerRadius="20%"
        outerRadius="90%"
        startAngle={90}
        endAngle={-180}
      >
        <RadialBar dataKey="value" isAnimationActive={false}>
          <LabelList dataKey="name" position="insideStart" />
          <LabelList dataKey="value" position="end" />
        </RadialBar>
        <RechartsDevtools />
      </RadialBarChart>
    </div>
  );
}
