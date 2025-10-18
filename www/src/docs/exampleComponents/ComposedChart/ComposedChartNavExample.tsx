import { ComposedChart, Line, Bar } from 'recharts';

const ComposedChartNavExample = () => {
  return (
    <ComposedChart
      style={{ aspectRatio: 2 * 1.618 }}
      responsive
      data={[
        { val: 1, val2: 2 },
        { val: 3, val2: 1 },
        { val: 2, val2: 4 },
        { val: 4, val2: 3 },
      ]}
    >
      <Line type="monotone" dataKey="val" stroke="#8884d8" strokeWidth={2} dot={false} />
      <Bar dataKey="val2" fill="#82ca9d" />
    </ComposedChart>
  );
};

export default ComposedChartNavExample;
