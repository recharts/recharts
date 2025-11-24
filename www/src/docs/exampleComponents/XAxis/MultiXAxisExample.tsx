import { Line, LineChart, Tooltip, XAxis } from 'recharts';

// #region Sample data
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

// #endregion
export default function MultiXAxisExample() {
  return (
    <LineChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
    >
      <XAxis dataKey="name" xAxisId="a" orientation="top" height={40} />
      <XAxis mirror dataKey="uv" xAxisId="b" height={50} />
      <XAxis dataKey="pv" type="number" xAxisId="c" height={60} />
      <XAxis mirror dataKey="amt" type="number" orientation="top" xAxisId="d" height={20} />
      <Tooltip defaultIndex={2} axisId="a" />
      <Line dataKey="name" xAxisId="a" />
      <Line dataKey="uv" xAxisId="b" />
      <Line dataKey="pv" xAxisId="c" />
      <Line dataKey="amt" xAxisId="d" />
    </LineChart>
  );
}

export const multiXAxisDescription = (
  <article>
    <p>
      When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      <code>{`{x,y,z}AxisId`}</code> on the corresponding graphical element.
    </p>
    <p>
      Likewise, Tooltip now needs an <code>axisId</code> so that it can decide which axis to snap to.
    </p>
  </article>
);
