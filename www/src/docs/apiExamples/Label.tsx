import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  LabelList,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  XAxis,
  YAxis,
} from 'recharts';
import { localeGet } from '../../utils/LocaleUtils.ts';
import { ApiExample, ApiExampleDemo } from '../api/types.ts';
import { PlotAreaRectangle } from './PlotAreaRectangle.tsx';

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

const cartesianPositions: ApiExampleDemo = ({ locale }) => {
  return (
    <>
      <p style={{ fontSize: 18 }}>{localeGet(locale, 'label', 'cartesian-title')}</p>
      <LineChart
        style={{ width: '100%', maxWidth: '500px', maxHeight: '200px', aspectRatio: 1 }}
        responsive
        margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
      >
        <PlotAreaRectangle />
        <Label position="top">top</Label>
        <Label position="bottom">bottom</Label>
        <Label position="left">left</Label>
        <Label position="right">right</Label>
        <Label position="center">center</Label>
        <Label position="insideLeft">insideLeft</Label>
        <Label position="insideRight">insideRight</Label>
        <Label position="insideTop">insideTop</Label>
        <Label position="insideBottom">insideBottom</Label>
        <Label position="insideTopLeft">insideTopLeft</Label>
        <Label position="insideTopRight">insideTopRight</Label>
        <Label position="insideBottomLeft">insideBottomLeft</Label>
        <Label position="insideBottomRight">insideBottomRight</Label>
      </LineChart>
    </>
  );
};

const piePositions: ApiExampleDemo = ({ locale, isAnimationActive }) => (
  <>
    <p style={{ fontSize: 18 }}>{localeGet(locale, 'label', 'polar-title')}</p>
    <PieChart style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }} responsive>
      <Pie
        data={[{ x: 100 }, { x: 200 }]}
        innerRadius="30%"
        paddingAngle={10}
        cornerRadius={9}
        dataKey="x"
        fill="none"
        stroke="black"
        isAnimationActive={isAnimationActive}
      >
        <LabelList fill="black" position="center" valueAccessor={() => 'center'} />
        <LabelList fill="black" position="inside" valueAccessor={() => 'inside'} />
        <LabelList fill="black" position="outside" valueAccessor={() => 'outside'} />
      </Pie>
    </PieChart>
  </>
);

const radialBarPositions: ApiExampleDemo = ({ locale, isAnimationActive }) => (
  <>
    <p style={{ fontSize: 18 }}>{localeGet(locale, 'label', 'radialbar-title')}</p>
    <RadialBarChart
      data={[{ x: 100 }, { x: 200 }]}
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      innerRadius="30%"
    >
      <RadialBar dataKey="x" fill="none" stroke="black" isAnimationActive={isAnimationActive}>
        <LabelList fill="black" position="insideStart" valueAccessor={() => 'insideStart'} />
        <LabelList fill="black" position="insideEnd" valueAccessor={() => 'insideEnd'} />
        <LabelList fill="black" position="end" valueAccessor={() => 'end'} />
      </RadialBar>
      <PolarAngleAxis type="number" domain={[0, 250]} tick={false} />
    </RadialBarChart>
  </>
);

const barChartExample: ApiExampleDemo = ({ isAnimationActive }) => (
  <BarChart
    style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
    responsive
    data={data}
    margin={{
      top: 15,
      right: 0,
      left: 0,
      bottom: 15,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name">
      <Label value="insideBottom" offset={-10} position="insideBottom" />
    </XAxis>
    <YAxis
      width="auto"
      label={{
        value: 'insideLeft',
        angle: -90,
        position: 'insideLeft',
        textAnchor: 'middle',
      }}
    />
    <Bar dataKey="pv" fill="#8884d8" isAnimationActive={isAnimationActive}>
      <LabelList dataKey="name" position="top" />
    </Bar>
  </BarChart>
);

const labelExamples: ReadonlyArray<ApiExample> = [
  {
    demo: cartesianPositions,
    code: `const MyRectangle = () => {
  const plotArea = usePlotArea();
  if (plotArea == null) {
    return null;
  }
  return (
    <Rectangle
      x={plotArea.x}
      y={plotArea.y}
      width={plotArea.width}
      height={plotArea.height}
      stroke="#000"
      fill="none"
    />
  );
};
return (
<>
  <p style={{ fontSize: 18 }}>{localeGet(locale, 'label', 'cartesian-title')}</p>
  <LineChart
    style={{ width: '100%', maxWidth: '500px', maxHeight: '200px', aspectRatio: 1 }}
    responsive
    margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
  >
    <MyRectangle />
    <Label position="top">top</Label>
    <Label position="bottom">bottom</Label>
    <Label position="left">left</Label>
    <Label position="right">right</Label>
    <Label position="center">center</Label>
    <Label position="insideLeft">insideLeft</Label>
    <Label position="insideRight">insideRight</Label>
    <Label position="insideTop">insideTop</Label>
    <Label position="insideBottom">insideBottom</Label>
    <Label position="insideTopLeft">insideTopLeft</Label>
    <Label position="insideTopRight">insideTopRight</Label>
    <Label position="insideBottomLeft">insideBottomLeft</Label>
    <Label position="insideBottomRight">insideBottomRight</Label>
  </LineChart>
</>
);`,
  },
  {
    demo: piePositions,
    code: `<PieChart
  style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
  responsive
>
  <Pie
    data={[{ x: 100 }, { x: 200 }]}
    innerRadius="30%"
    paddingAngle={10}
    cornerRadius={9}
    dataKey="x"
    fill="none"
    stroke="black"
  >
    <LabelList position="center" valueAccessor={() => 'center'} fill="black" />
    <LabelList position="inside" valueAccessor={() => 'inside'} fill="black" />
    <LabelList position="outside" valueAccessor={() => 'outside'} fill="black" />
  </Pie>
</PieChart>`,
  },
  {
    demo: radialBarPositions,
    code: `<RadialBarChart
  data={[{ x: 100 }, { x: 200 }]}
  style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
  responsive
  innerRadius="30%"
>
  <RadialBar dataKey="x" fill="none" stroke="black" isAnimationActive={isAnimationActive}>
    <LabelList fill="black" position="insideStart" valueAccessor={() => 'insideStart'} />
    <LabelList fill="black" position="insideEnd" valueAccessor={() => 'insideEnd'} />
    <LabelList fill="black" position="end" valueAccessor={() => 'end'} />
  </RadialBar>
  <PolarAngleAxis type="number" domain={[0, 250]} tick={false} />
</RadialBarChart>`,
  },
  {
    demo: barChartExample,
    code: `<BarChart
  style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
  responsive
  data={data}
  margin={{
    top: 15,
    right: 0,
    left: 0,
    bottom: 15,
  }}
>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name">
    <Label value="insideBottom" offset={-10} position="insideBottom" />
  </XAxis>
  <YAxis
    width="auto"
    label={{
      value: 'insideLeft',
      angle: -90,
      position: 'insideLeft',
      textAnchor: 'middle',
    }}
  />
  <Bar dataKey="pv" fill="#8884d8">
    <LabelList dataKey="name" position="top" />
  </Bar>
</BarChart>`,
    dataCode: `const data = ${JSON.stringify(data, null, 2)}`,
  },
];
export const labelApiExamples: ReadonlyArray<ApiExample> = labelExamples;
