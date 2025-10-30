import { Line, LineChart } from 'recharts';

const points = [
  { x: 0, y: 4 },
  { x: 6, y: 1 },
  { x: 14, y: 8 },
];

export const SuccessIcon = () => (
  <LineChart data={points} width={16} height={16} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
    <Line type="linear" dataKey="y" stroke="#28a745" strokeWidth={2} dot={false} animationDuration={1000} />
  </LineChart>
);
