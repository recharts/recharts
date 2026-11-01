import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Label,
  LabelList,
  createHorizontalChart,
  LabelProps,
  LabelListProps,
} from 'recharts';
import { generateMockData, MockDataType, RechartsDevtools } from '@recharts/devtools';

// #region Sample data and styles
const data = generateMockData(6, 892134);
const Typed = createHorizontalChart<MockDataType>()({ BarChart, XAxis, YAxis, Bar, LabelList });
const chartStyle = { width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 };
const labelProps: LabelProps = {
  value: 'pv of page',
  angle: -90,
  position: 'insideLeft',
  textAnchor: 'middle',
};
const positionTop: LabelListProps = { position: 'top' };
// #endregion

const LabelListChartExample = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => (
  <Typed.BarChart style={chartStyle} responsive data={data}>
    <CartesianGrid />
    <Typed.XAxis dataKey="label">
      <Label value="Pages of my website" offset={0} position="insideBottom" />
    </Typed.XAxis>
    <Typed.YAxis width="auto" label={labelProps} />
    <Typed.Bar dataKey="x" isAnimationActive={isAnimationActive}>
      <Typed.LabelList dataKey="label" position="insideTopLeft" textAnchor="start" angle={45} dx={5} />
    </Typed.Bar>
    <Typed.Bar dataKey="y" isAnimationActive={isAnimationActive} label={positionTop} />
    <RechartsDevtools />
  </Typed.BarChart>
);

export default LabelListChartExample;
