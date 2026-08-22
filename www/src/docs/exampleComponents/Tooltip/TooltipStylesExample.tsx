import { CSSProperties } from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import { generateMockData, RechartsDevtools } from '@recharts/devtools';

const customContentStyles: CSSProperties = {
  backgroundColor: '#2d2d2d',
  border: '2px solid #ff6b35',
  borderRadius: 8,
  color: '#fff',
};

const customItemStyles: CSSProperties = {
  color: '#ff6b35',
  fontWeight: 'bold',
  fontSize: 14,
  paddingTop: 6,
  paddingBottom: 6,
  borderBottom: '1px dashed #555',
};

const customLabelStyles: CSSProperties = {
  color: '#6bff35',
  fontWeight: 'bold',
  fontSize: 16,
  textTransform: 'uppercase',
};

const data = generateMockData(5, 42);

export default function TooltipStylesExample() {
  return (
    <BarChart
      style={{ width: '100%', maxWidth: 500, maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{ top: 10, right: 10, left: 10, bottom: 5 }}
    >
      <CartesianGrid />
      <XAxis dataKey="label" />
      <YAxis domain={[0, 'dataMax + 20']} />
      <Tooltip
        // Keep tooltip visible after mouseOut to make it easy to inspect
        active
        defaultIndex={3}
        labelFormatter={label => `Label: ${label}`}
        contentStyle={customContentStyles}
        itemStyle={customItemStyles}
        labelStyle={customLabelStyles}
      />
      <Bar dataKey="x" name="Series A" />
      <Bar dataKey="y" name="Series B" />
      <RechartsDevtools />
    </BarChart>
  );
}
