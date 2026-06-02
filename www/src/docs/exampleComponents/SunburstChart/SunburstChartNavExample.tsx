import { ResponsiveContainer, SunburstChart } from 'recharts';

const data = {
  name: 'root',
  value: 100,
  children: [
    { name: 'chart', value: 45, fill: '#8884d8' },
    { name: 'state', value: 30, fill: '#82ca9d' },
    { name: 'util', value: 25, fill: '#ffc658' },
  ],
};

function SunburstChartNavExample() {
  return (
    <div style={{ width: '100%', height: '3rem' }}>
      <ResponsiveContainer width="100%" height="100%">
        <SunburstChart data={data} innerRadius={8} outerRadius={20} />
      </ResponsiveContainer>
    </div>
  );
}

export default SunburstChartNavExample;
