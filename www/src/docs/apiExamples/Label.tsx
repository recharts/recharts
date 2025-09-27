import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Label,
  LabelList,
  LineChart,
  Rectangle,
  PieChart,
  Pie,
  RadialBar,
  RadialBarChart,
  PolarAngleAxis,
} from 'recharts';
import { localeGet } from '../../utils/LocaleUtils.ts';
import { SupportedLocale } from '../../locale';
import { ApiExample } from '../api/types.ts';

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

const cartesianPositions = (locale: SupportedLocale) => (
  <>
    <p style={{ fontSize: 18 }}>{localeGet(locale, 'label', 'cartesian-title')}</p>
    <LineChart width={600} height={400} margin={{ top: 100, right: 100, bottom: 100, left: 100 }}>
      <Rectangle x={100} y={100} width={400} height={200} stroke="#000" fill="none" />
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

const piePositions = (locale: SupportedLocale) => (
  <>
    <p style={{ fontSize: 18 }}>{localeGet(locale, 'label', 'polar-title')}</p>
    <PieChart width={700} height={400}>
      <Pie
        data={[{ x: 100 }, { x: 200 }]}
        innerRadius={50}
        paddingAngle={10}
        cornerRadius={9}
        dataKey="x"
        fill="none"
        stroke="black"
      >
        <LabelList fill="black" position="center" valueAccessor={() => 'center'} />
        <LabelList fill="black" position="inside" valueAccessor={() => 'inside'} />
        <LabelList fill="black" position="outside" valueAccessor={() => 'outside'} />
      </Pie>
    </PieChart>
  </>
);

const radialBarPositions = (locale: SupportedLocale) => (
  <>
    <p style={{ fontSize: 18 }}>{localeGet(locale, 'label', 'radialbar-title')}</p>
    <RadialBarChart data={[{ x: 100 }, { x: 200 }]} width={900} height={400} innerRadius={50}>
      <RadialBar dataKey="x" fill="none" stroke="black">
        <LabelList fill="black" position="insideStart" valueAccessor={() => 'insideStart'} />
        <LabelList fill="black" position="insideEnd" valueAccessor={() => 'insideEnd'} />
        <LabelList fill="black" position="end" valueAccessor={() => 'end'} />
      </RadialBar>
      <PolarAngleAxis type="number" domain={[0, 250]} tick={false} />
    </RadialBarChart>
  </>
);

const chartExample = () => (
  <BarChart
    width={730}
    height={250}
    data={data}
    margin={{
      top: 15,
      right: 30,
      left: 20,
      bottom: 15,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name">
      <Label value="insideBottom" offset={-10} position="insideBottom" />
    </XAxis>
    <YAxis
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
  </BarChart>
);

const labelExamples: ReadonlyArray<ApiExample> = [
  {
    demo: cartesianPositions,
    code: `<LineChart width={600} height={400} margin={{ top: 100, right: 100, bottom: 100, left: 100 }}>
    <Rectangle x={100} y={100} width={400} height={200} stroke="#000" fill="none" />
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
</LineChart>`,
  },
  {
    demo: piePositions,
    code: `<PieChart width={700} height={400}>
  <Pie data={[{ x: 100 }, { x: 200 }]} innerRadius={50} paddingAngle={10} dataKey="x" fill="none" stroke="black">
    <LabelList fill="black" position="center" valueAccessor={() => 'center'} />
    <LabelList fill="black" position="inside" valueAccessor={() => 'inside'} />
    <LabelList fill="black" position="outside" valueAccessor={() => 'outside'} />
  </Pie>
</PieChart>`,
  },
  {
    demo: radialBarPositions,
    code: `<RadialBarChart data={[{ x: 100 }, { x: 200 }]} width={900} height={400} innerRadius={50}>
  <RadialBar dataKey="x" fill="none" stroke="black">
    <LabelList fill="black" position="insideStart" valueAccessor={() => 'insideStart'} />
    <LabelList fill="black" position="insideEnd" valueAccessor={() => 'insideEnd'} />
    <LabelList fill="black" position="end" valueAccessor={() => 'end'} />
  </RadialBar>
  <PolarAngleAxis type="number" domain={[0, 250]} tick={false} />
</RadialBarChart>`,
  },
  {
    demo: chartExample,
    code: `
  <BarChart
    width={730}
    height={250}
    data={data}
    margin={{ top: 15, right: 30, left: 20, bottom: 15 }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name">
      <Label value="insideBottom" offset={-10} position="insideBottom" />
    </XAxis>
    <YAxis
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
  </BarChart>
      `,
    dataCode: `const data = ${JSON.stringify(data, null, 2)}`,
  },
];
export default labelExamples;
