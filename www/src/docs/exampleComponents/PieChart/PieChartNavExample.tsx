import { Pie, PieChart } from 'recharts';

const data = [
  { value: 400, fill: 'white' },
  { value: 300, fill: 'blue' },
  { value: 400, fill: 'red' },
];

const PieChartNavExample = () => {
  return (
    <PieChart style={{ aspectRatio: 1 }} responsive>
      <Pie data={data} dataKey="value" nameKey="name" outerRadius="120%" stroke="black" />
    </PieChart>
  );
};

export default PieChartNavExample;
