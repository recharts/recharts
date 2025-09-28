import { ScatterChart, XAxis, YAxis, Scatter, CartesianGrid, Tooltip, ReferenceDot } from 'recharts';
import { ApiExample, ApiExampleDemo } from '../api/types.ts';

type DataEntry = {
  x: number;
  y: number;
  z?: number;
};

const data: DataEntry[] = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

const getMeanValue = (o: ReadonlyArray<DataEntry>) => {
  const len = o.length;

  if (!len) {
    return null;
  }

  return o.reduce(
    (result: DataEntry, entry: DataEntry) => ({
      x: result.x + (entry.x || 0) / len,
      y: result.y + (entry.y || 0) / len,
    }),
    { x: 0, y: 0 },
  );
};

const example: ApiExampleDemo = ({ isAnimationActive }) => {
  const mean = getMeanValue(data);

  return (
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
      <Scatter name="A school" data={data} fill="#8884d8" isAnimationActive={isAnimationActive} />
      {mean && <ReferenceDot {...mean} r={20} fill="red" stroke="none" />}
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
    </ScatterChart>
  );
};

const exampleCode = `<ScatterChart
  style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
  responsive
  margin={{ top: 20, right: 0, bottom: 20, left: 0 }}
>
    <CartesianGrid />
    <XAxis dataKey="x" type="number" name="stature" unit="cm" />
    <YAxis dataKey="y" type="number" name="weight" unit="kg" width="auto" />
    <Scatter name="A school" data={data} fill="#8884d8" />
    { mean && <ReferenceDot {...mean} r={20} fill="red" stroke="none" /> }
    <Tooltip cursor={{strokeDasharray: '3 3'}} />
  </ScatterChart>`;

export const referenceDotApiExamples: ReadonlyArray<ApiExample> = [
  {
    demo: example,
    code: exampleCode,
    dataCode: `const data = ${JSON.stringify(data, null, 2)}`,
  },
];
