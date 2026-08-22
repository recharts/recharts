import { CSSProperties } from 'react';
import { BarChart, Bar, CartesianGrid, Legend, XAxis, YAxis } from 'recharts';
import { generateMockData, RechartsDevtools } from '@recharts/devtools';

const customWrapperStyle: CSSProperties = {
  backgroundColor: '#f7f8fa',
  border: '2px solid #4a90d9',
  borderRadius: 8,
  paddingTop: '10px',
  paddingBottom: '10px',
  paddingLeft: '16px',
  paddingRight: '16px',
};

const customLabelStyles: CSSProperties = {
  color: '#333',
  fontWeight: 'bold',
  fontSize: 14,
  textTransform: 'capitalize',
};

const data = generateMockData(6, 99);

export default function LegendStylesExample() {
  return (
    <BarChart
      style={{ width: '100%', maxWidth: 500, maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{ top: 10, right: 10, left: 10, bottom: 30 }}
    >
      <CartesianGrid />
      <XAxis dataKey="label" />
      <YAxis domain={[0, 'dataMax + 20']} />
      <Legend
        wrapperStyle={customWrapperStyle}
        iconSize={20}
        iconType="line"
        inactiveColor="#aaa"
        labelStyle={customLabelStyles}
        position="bottom"
      />
      <Bar dataKey="x" name="Series A" />
      <Bar dataKey="y" name="Series B" />
      <RechartsDevtools />
    </BarChart>
  );
}
