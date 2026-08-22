import { Line, XAxis, YAxis, CartesianGrid, AxisInterval, createHorizontalChart, Tooltip, Label } from 'recharts';
import { generateMockData, MockDataType, RechartsDevtools } from '@recharts/devtools';

const data: Array<MockDataType> = generateMockData(100, 22813);

const Typed = createHorizontalChart<MockDataType, string, number>()({ XAxis, YAxis, Tooltip, Line });

const MyChart = (props: { interval: AxisInterval }) => (
  <Typed.LineChart
    style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
    responsive
    data={data}
    margin={{ left: 0, right: 0, top: 10 }}
  >
    <CartesianGrid />
    <Typed.XAxis dataKey="label" interval={props.interval} />
    <Typed.YAxis interval={props.interval} width="auto" />
    <Typed.Line type="monotone" dataKey="x" activeDot={{ r: 8 }} />
    <Typed.Line type="monotone" dataKey="y" />
    <Label position="insideBottom">{`interval: ${props.interval}`}</Label>
    <RechartsDevtools />
  </Typed.LineChart>
);
const LineChartAxisInterval = () => {
  return (
    <div style={{ width: '100%', maxWidth: '500px' }}>
      <MyChart interval="preserveStart" />
      <MyChart interval="preserveEnd" />
      <MyChart interval="preserveStartEnd" />
      <MyChart interval="equidistantPreserveStart" />
      <MyChart interval={1} />
    </div>
  );
};

export default LineChartAxisInterval;
