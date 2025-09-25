import {
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
  TooltipContentProps,
} from 'recharts';

const data01 = [
  { hour: '12a', index: 1, value: 170 },
  { hour: '1a', index: 1, value: 180 },
  { hour: '2a', index: 1, value: 150 },
  { hour: '3a', index: 1, value: 120 },
  { hour: '4a', index: 1, value: 200 },
  { hour: '5a', index: 1, value: 300 },
  { hour: '6a', index: 1, value: 400 },
  { hour: '7a', index: 1, value: 200 },
  { hour: '8a', index: 1, value: 100 },
  { hour: '9a', index: 1, value: 150 },
  { hour: '10a', index: 1, value: 160 },
  { hour: '11a', index: 1, value: 170 },
  { hour: '12a', index: 1, value: 180 },
  { hour: '1p', index: 1, value: 144 },
  { hour: '2p', index: 1, value: 166 },
  { hour: '3p', index: 1, value: 145 },
  { hour: '4p', index: 1, value: 150 },
  { hour: '5p', index: 1, value: 170 },
  { hour: '6p', index: 1, value: 180 },
  { hour: '7p', index: 1, value: 165 },
  { hour: '8p', index: 1, value: 130 },
  { hour: '9p', index: 1, value: 140 },
  { hour: '10p', index: 1, value: 170 },
  { hour: '11p', index: 1, value: 180 },
];

const data02 = [
  { hour: '12a', index: 1, value: 160 },
  { hour: '1a', index: 1, value: 180 },
  { hour: '2a', index: 1, value: 150 },
  { hour: '3a', index: 1, value: 120 },
  { hour: '4a', index: 1, value: 200 },
  { hour: '5a', index: 1, value: 300 },
  { hour: '6a', index: 1, value: 100 },
  { hour: '7a', index: 1, value: 200 },
  { hour: '8a', index: 1, value: 100 },
  { hour: '9a', index: 1, value: 150 },
  { hour: '10a', index: 1, value: 160 },
  { hour: '11a', index: 1, value: 160 },
  { hour: '12a', index: 1, value: 180 },
  { hour: '1p', index: 1, value: 144 },
  { hour: '2p', index: 1, value: 166 },
  { hour: '3p', index: 1, value: 145 },
  { hour: '4p', index: 1, value: 150 },
  { hour: '5p', index: 1, value: 160 },
  { hour: '6p', index: 1, value: 180 },
  { hour: '7p', index: 1, value: 165 },
  { hour: '8p', index: 1, value: 130 },
  { hour: '9p', index: 1, value: 140 },
  { hour: '10p', index: 1, value: 160 },
  { hour: '11p', index: 1, value: 180 },
];

const parseDomain = () => [
  0,
  Math.max(
    Math.max.apply(
      null,
      data01.map(entry => entry.value),
    ),
    Math.max.apply(
      null,
      data02.map(entry => entry.value),
    ),
  ),
];

const domain = parseDomain();
const range = [16, 225] as const;
const margin = { top: 10, right: 0, bottom: 0, left: 0 };

const renderTooltip = (props: TooltipContentProps<string | number, string>) => {
  const { active, payload } = props;

  if (active && payload && payload.length) {
    const data = payload[0] && payload[0].payload;

    return (
      <div
        style={{
          backgroundColor: '#fff',
          border: '1px solid #999',
          margin: 0,
          padding: 10,
        }}
      >
        <p>{data.hour}</p>
        <p>
          <span>value: </span>
          {data.value}
        </p>
      </div>
    );
  }

  return null;
};

const BubbleAxes = ({ day, showXTicks = false }: { day: string; showXTicks?: boolean }) => (
  <>
    <XAxis
      type="category"
      dataKey="hour"
      name="hour"
      interval={0}
      tick={showXTicks || { fontSize: 0 }}
      tickLine={{ transform: 'translate(0, -6)' }}
    />
    <YAxis
      type="number"
      dataKey="index"
      name="sunday"
      height={10}
      width={80}
      tick={false}
      tickLine={false}
      axisLine={false}
      label={{ value: day, position: 'insideRight' }}
    />
    <ZAxis type="number" dataKey="value" domain={domain} range={range} />
  </>
);

const MyTooltip = () => (
  <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={renderTooltip} />
);

const Bubbles = ({ data }: { data: Array<unknown> }) => <Scatter data={data} fill="#8884d8" />;

const Example = () => {
  return (
    <div style={{ width: '100%' }}>
      <ResponsiveContainer width="100%" height={60}>
        <ScatterChart margin={margin}>
          <BubbleAxes day="Sunday" />
          <Bubbles data={data01} />
          <MyTooltip />
        </ScatterChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" height={60}>
        <ScatterChart margin={margin}>
          <BubbleAxes day="Monday" />
          <Bubbles data={data02} />
          <MyTooltip />
        </ScatterChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" height={60}>
        <ScatterChart margin={margin}>
          <BubbleAxes day="Tuesday" />
          <Bubbles data={data01} />
          <MyTooltip />
        </ScatterChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" height={60}>
        <ScatterChart margin={margin}>
          <BubbleAxes day="Wednesday" />
          <Bubbles data={data02} />
          <MyTooltip />
        </ScatterChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" height={60}>
        <ScatterChart margin={margin}>
          <BubbleAxes day="Thursday" />
          <Bubbles data={data01} />
          <MyTooltip />
        </ScatterChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" height={60}>
        <ScatterChart margin={margin}>
          <BubbleAxes day="Friday" />
          <Bubbles data={data02} />
          <MyTooltip />
        </ScatterChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" height={60}>
        <ScatterChart margin={margin}>
          <BubbleAxes day="Saturday" showXTicks />
          <Bubbles data={data01} />
          <MyTooltip />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Example;
