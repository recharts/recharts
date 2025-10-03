import { ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Scatter, ErrorBar } from 'recharts';
import { ApiExampleDemo } from '../api/types.ts';

const data = [
  {
    x: 45,
    y: 100,
    z: 150,
    errorY: [30, 20],
    errorX: 5,
  },
  {
    x: 100,
    y: 200,
    z: 200,
    errorY: [20, 30],
    errorX: 3,
  },
  {
    x: 120,
    y: 100,
    z: 260,
    errorY: 20,
    errorX: [5, 3],
  },
  {
    x: 170,
    y: 300,
    z: 400,
    errorY: [15, 18],
    errorX: 4,
  },
  {
    x: 140,
    y: 250,
    z: 280,
    errorY: 23,
    errorX: [6, 7],
  },
  {
    x: 150,
    y: 400,
    z: 500,
    errorY: [21, 10],
    errorX: 4,
  },
  {
    x: 110,
    y: 280,
    z: 200,
    errorY: 21,
    errorX: [5, 6],
  },
];

export const ErrorBarExample: ApiExampleDemo = ({ isAnimationActive }) => (
  <ScatterChart
    style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
    responsive
    margin={{
      top: 20,
      right: 0,
      bottom: 20,
      left: 0,
    }}
  >
    <CartesianGrid />
    <XAxis dataKey="x" type="number" name="stature" unit="cm" />
    <YAxis dataKey="y" type="number" name="weight" unit="kg" width="auto" />
    <Tooltip />
    <Scatter name="A school" data={data} fill="#ff7300" isAnimationActive={isAnimationActive}>
      <ErrorBar
        dataKey="errorY"
        width={4}
        strokeWidth={2}
        stroke="green"
        direction="y"
        isAnimationActive={isAnimationActive}
      />
      <ErrorBar
        dataKey="errorX"
        width={0}
        strokeWidth={1}
        stroke="blue"
        opacity={0.8}
        direction="x"
        isAnimationActive={isAnimationActive}
      />
    </Scatter>
    <Legend />
  </ScatterChart>
);

const exampleCode = `<ScatterChart
  style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
  responsive
  margin={{ top: 20, right: 0, bottom: 20, left: 0 }}
>
  <CartesianGrid />
  <XAxis dataKey="x" type="number" name="stature" unit="cm" />
  <YAxis dataKey="y" type="number" name="weight" unit="kg" width="auto" />
  <Tooltip />
  <Scatter name="A school" data={data} fill="#ff7300">
    <ErrorBar dataKey="errorY" width={4} strokeWidth={2} stroke="green" direction="y" />
    <ErrorBar dataKey="errorX" width={0} strokeWidth={1} stroke="blue" opacity={0.8} direction="x" />
  </Scatter>
  <Legend/>
</ScatterChart>`;

export const errorBarApiExamples = [
  {
    demo: ErrorBarExample,
    code: exampleCode,
    dataCode: `const data = ${JSON.stringify(data, null, 2)}`,
  },
];
