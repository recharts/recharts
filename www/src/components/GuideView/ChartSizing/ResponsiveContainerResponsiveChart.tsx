import { Line, LineChart, ResponsiveContainer } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

export default function ResponsiveContainerResponsiveChart() {
  return (
    <div style={{ height: '400px' }}>
      <ResponsiveContainer width="100%" maxHeight={400}>
        <LineChart
          data={[
            { x: 1, y: 1 },
            { x: 2, y: 4 },
          ]}
        >
          <Line dataKey="y" />
          <RechartsDevtools />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
