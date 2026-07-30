import { Line, LineChart } from 'recharts';
import { generateMockData, MockDataType, RechartsDevtools } from '@recharts/devtools';

const data: Array<MockDataType> = generateMockData(6, 22123);

export default function TinyLineChart() {
  return (
    <LineChart
      style={{ width: '100%', maxWidth: '100px', maxHeight: '50px', aspectRatio: 1.618 }}
      responsive
      data={data}
    >
      <Line strokeWidth={2} dataKey="x" dot={false} />
      <RechartsDevtools />
    </LineChart>
  );
}
