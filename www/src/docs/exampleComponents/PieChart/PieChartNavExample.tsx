import { Pie, PieChart } from 'recharts';

const data = [
  { value: 400, fill: 'white' },
  { value: 300, fill: 'blue' },
  { value: 400, fill: 'red' },
];

const PieChartNavExample = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => {
  return (
    <PieChart style={{ aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        outerRadius="120%"
        stroke="black"
        isAnimationActive={isAnimationActive}
      />
    </PieChart>
  );
};

export default PieChartNavExample;
