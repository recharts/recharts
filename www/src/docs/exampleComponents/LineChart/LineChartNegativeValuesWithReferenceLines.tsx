import { CartesianGrid, Line, LineChart, ReferenceLine, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const data = [
  {
    x: -50,
    y: -50,
  },
  {
    x: 0,
    y: 0,
  },
  {
    x: 50,
    y: 50,
  },
  {
    x: 100,
    y: 100,
  },
  {
    x: 150,
    y: 150,
  },
  {
    x: 200,
    y: 200,
  },
  {
    x: 250,
    y: 250,
  },
  {
    x: 350,
    y: 350,
  },
  {
    x: 400,
    y: 400,
  },
  {
    x: 450,
    y: 450,
  },
  {
    x: 500,
    y: 500,
  },
];

const minX = Math.min(...data.map(d => d.x));
const minY = Math.min(...data.map(d => d.y));

export default function Example() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <YAxis
          dataKey="y"
          domain={['auto', 'auto']}
          type="number"
          interval={0}
          label={{
            value: `y`,
            style: { textAnchor: 'middle' },
            angle: -90,
            position: 'left',
            offset: 0,
          }}
          allowDataOverflow
          strokeWidth={minX < 0 ? 0 : 1}
        />

        <XAxis
          dataKey="x"
          domain={['auto', 'auto']}
          interval={0}
          type="number"
          label={{
            key: 'xAxisLabel',
            value: 'x',
            position: 'bottom',
          }}
          allowDataOverflow
          strokeWidth={minY < 0 ? 0 : 1}
        />

        {minY < 0 && <ReferenceLine y={0} stroke="gray" strokeWidth={1.5} strokeOpacity={0.65} />}
        {minX < 0 && <ReferenceLine x={0} stroke="gray" strokeWidth={1.5} strokeOpacity={0.65} />}

        <Line strokeWidth={2} data={data} dot={false} type="monotone" dataKey="y" stroke="black" tooltipType="none" />
      </LineChart>
    </ResponsiveContainer>
  );
}
