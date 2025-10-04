import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const series = [
  {
    name: 'Series 1',
    data: [
      { category: 'A', value: 0.1 },
      { category: 'B', value: 0.2 },
      { category: 'C', value: 0.3 },
    ],
  },
  {
    name: 'Series 2',
    data: [
      { category: 'B', value: 0.4 },
      { category: 'C', value: 0.5 },
      { category: 'D', value: 0.6 },
    ],
  },
  {
    name: 'Series 3',
    data: [
      { category: 'C', value: 0.7 },
      { category: 'D', value: 0.8 },
      { category: 'E', value: 0.9 },
    ],
  },
];

export default function LineChartHasMultiSeries() {
  return (
    <LineChart style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }} responsive>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" type="category" allowDuplicatedCategory={false} />
      <YAxis dataKey="value" width="auto" />
      <Tooltip />
      <Legend />
      {series.map(s => (
        <Line dataKey="value" data={s.data} name={s.name} key={s.name} />
      ))}
    </LineChart>
  );
}
