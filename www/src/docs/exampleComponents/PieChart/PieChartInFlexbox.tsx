import { PieChart, Pie, Label } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  { name: 'Group A', value: 400, fill: '#0088FE' },
  { name: 'Group B', value: 300, fill: '#00C49F' },
  { name: 'Group C', value: 300, fill: '#FFBB28' },
  { name: 'Group D', value: 200, fill: '#FF8042' },
];

// #endregion
const MyPie = () => (
  <Pie data={data} dataKey="value" nameKey="name" outerRadius="80%" innerRadius="60%" isAnimationActive={false} />
);

/**
 * This example shows how to use the `responsive` prop on charts inside a flexbox container.
 * The `responsive` prop makes the chart automatically resize to fit its parent container.
 * By combining it with flexbox properties and CSS like `maxWidth` or `aspectRatio`,
 * you can create complex and responsive chart layouts.
 */
export default function PieChartInFlexbox() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        minHeight: '300px',
        border: '1px solid #ccc',
        padding: '10px',
        justifyContent: 'space-around',
        alignItems: 'stretch',
      }}
    >
      <PieChart responsive style={{ height: 'calc(100% - 20px)', width: '33%', flex: '1 1 200px', aspectRatio: 1 }}>
        <MyPie />
        <Label position="center" fill="#666">
          Flex: 1 1 200px
        </Label>
        <RechartsDevtools />
      </PieChart>

      <PieChart responsive style={{ height: 'calc(100% - 20px)', width: '33%', maxWidth: '300px', aspectRatio: 1 }}>
        <MyPie />
        <Label position="center" fill="#666">
          maxWidth: &#39;300px&#39;
        </Label>
        <RechartsDevtools />
      </PieChart>

      <PieChart responsive style={{ height: 'calc(100% - 20px)', maxHeight: '20vh', width: '33%', aspectRatio: 1 }}>
        <MyPie />
        <Label position="center" fill="#666">
          maxHeight: &#39;20vh&#39;
        </Label>
        <RechartsDevtools />
      </PieChart>
    </div>
  );
}
