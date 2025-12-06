import { Bar, BarChart, BarProps, CartesianGrid, Rectangle, Tooltip, XAxis, YAxis } from 'recharts';

// #region Data and helper functions
type TimelineDataType = {
  name: string;
  type: string;
  outcome: 'success' | 'error' | 'pending';
  firstCycle: [number, number];
  secondCycle: [number, number];
};

const data: Array<TimelineDataType> = [
  {
    name: 'TEST 1',
    type: 'TR',
    outcome: 'success',
    firstCycle: [0, 3],
    secondCycle: [4.11, 14.11],
  },
  {
    name: 'TEST 2',
    type: 'MT',
    outcome: 'error',
    firstCycle: [0, 1.5],
    secondCycle: [9.11, 12.11],
  },
  {
    name: 'TEST 3',
    type: 'MT',
    outcome: 'success',
    firstCycle: [3, 5.37],
    secondCycle: [8.74, 14.48],
  },
  {
    name: 'TEST 4',
    type: 'MT',
    outcome: 'error',
    firstCycle: [5.37, 7.87],
    secondCycle: [9.61, 16.98],
  },
  {
    name: 'TEST 5',
    type: 'MT',
    outcome: 'success',
    firstCycle: [4.87, 8.24],
    secondCycle: [10.74, 17.35],
  },
  {
    name: 'TEST 6',
    type: 'MT',
    outcome: 'success',
    firstCycle: [3.24, 5.74],
    secondCycle: [8.61, 17.85],
  },
  {
    name: 'TEST 7',
    type: 'MT',
    outcome: 'success',
    firstCycle: [2.74, 9.11],
    secondCycle: [9.74, 18.22],
  },
  {
    name: 'TEST 8',
    type: 'MT',
    outcome: 'pending',
    firstCycle: [9.11, 10.61],
    secondCycle: [12.11, 19.72],
  },
];

const getBarColor = (outcome: TimelineDataType['outcome']) => {
  switch (outcome) {
    case 'success':
      return 'blue';
    case 'error':
      return 'red';
    default:
      return 'grey';
  }
};

const CustomFillRectangle = (props: BarProps) => {
  // @ts-expect-error props.outcome is injected from the data array which Recharts doesn't know about
  return <Rectangle {...props} fill={getBarColor(props.outcome)} />;
};

const ActiveRectangle = (props: BarProps) => {
  return <CustomFillRectangle {...props} stroke="orange" strokeWidth={3} />;
};

// #endregion
export default function TimelineExample({ defaultIndex }: { defaultIndex?: number }) {
  return (
    <BarChart
      layout="vertical"
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{ bottom: 20 }}
    >
      <CartesianGrid strokeDasharray="2 2" />
      <Tooltip shared={false} defaultIndex={defaultIndex} />
      <XAxis type="number" height={50} label={{ value: 'Time (s)', position: 'insideBottomRight' }} />
      <YAxis
        type="category"
        dataKey="name"
        width="auto"
        label={{
          value: 'Test run',
          angle: -90,
          position: 'insideTopLeft',
          textAnchor: 'end',
        }}
      />
      <Bar dataKey="firstCycle" stackId="a" radius={25} shape={CustomFillRectangle} activeBar={ActiveRectangle} />
      <Bar dataKey="secondCycle" stackId="a" radius={25} shape={CustomFillRectangle} activeBar={ActiveRectangle} />
    </BarChart>
  );
}
