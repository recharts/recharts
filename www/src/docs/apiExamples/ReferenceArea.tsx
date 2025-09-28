import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend, ReferenceArea } from 'recharts';
import { ApiExampleDemo } from '../api/types.ts';

const data01 = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

const data02 = [
  { x: 200, y: 260, z: 240 },
  { x: 240, y: 290, z: 220 },
  { x: 190, y: 290, z: 250 },
  { x: 198, y: 250, z: 210 },
  { x: 180, y: 280, z: 260 },
  { x: 210, y: 220, z: 230 },
];

const example: ApiExampleDemo = ({ isAnimationActive }) => (
  <ScatterChart
    style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
    responsive
    margin={{
      top: 20,
      right: 0,
      bottom: 10,
      left: 0,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="x" type="number" name="stature" unit="cm" />
    <YAxis dataKey="y" type="number" name="weight" unit="kg" width="auto" />
    <ZAxis dataKey="z" type="number" range={[16, 100]} name="score" unit="km" />
    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
    <Legend />
    <Scatter name="A school" data={data01} fill="#8884d8" isAnimationActive={isAnimationActive} />
    <Scatter name="B school" data={data02} fill="#82ca9d" isAnimationActive={isAnimationActive} />
    <ReferenceArea x1={150} x2={180} y1={200} y2={300} stroke="red" strokeOpacity={0.3} />
  </ScatterChart>
);

const exampleCode = `<ScatterChart
  style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
  responsive
  margin={{ top: 20, right: 0, bottom: 10, left: 0 }}
>
  <XAxis dataKey="x" type="number" name="stature" unit="cm" />
  <YAxis dataKey="y" type="number" name="weight" unit="kg" width="auto" />
  <ZAxis dataKey="z" type="number" range={[4, 20]} name="score" unit="km" />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
  <Legend />
  <Scatter name="A school" data={data01} fill="#8884d8" />
  <Scatter name="B school" data={data02} fill="#82ca9d" />
  <ReferenceArea x1={150} x2={180} y1={200} y2={300} stroke="red" strokeOpacity={0.3} />
</ScatterChart>`;

export const referenceAreaApiExamples = [
  {
    demo: example,
    code: exampleCode,
    dataCode: `
    const data01 = ${JSON.stringify(data01, null, 2)};
const data02 = ${JSON.stringify(data02, null, 2)};
    `,
  },
];
