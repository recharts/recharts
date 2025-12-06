import { Bar, BarChart, Legend, LegendPayload, Tooltip, XAxis, YAxis, RenderableText } from 'recharts';

// #region Data and helper functions
/**
 * Data source: https://www.populationpyramid.net/world/2024/
 * CSV columns: Age,M,F
 */
const rawData = `
100+,110838,476160
95-99,1141691,3389124
90-94,6038458,13078242
85-89,18342182,31348041
80-84,37166893,53013079
75-79,65570812,83217973
70-74,103998992,124048996
65-69,138182244,154357035
60-64,170525048,180992721
55-59,206686596,212285997
50-54,231342779,232097236
45-49,240153677,236696232
40-44,270991534,263180352
35-39,301744799,289424003
30-34,310384416,294303405
25-29,308889349,291429439
20-24,318912554,300510028
15-19,335882343,315258559
10-14,353666705,331681954
5-9,351991008,332121131
0-4,331889289,315450649
`
  .trim()
  .split('\n')
  .map(line => {
    const [age, m, f] = line.split(',');
    return { age, male: Number(m), female: Number(f) };
  });

const totalPopulation: number = rawData.reduce((sum, entry) => sum + entry.male + entry.female, 0);

const percentageData = rawData.map(entry => {
  return {
    age: entry.age,
    male: (entry.male / totalPopulation) * -100, // Negative for left side
    female: (entry.female / totalPopulation) * 100,
  };
});

function formatPercent(val: RenderableText): string {
  return `${Math.abs(Number(val)).toFixed(1)}%`;
}

function itemSorter(item: LegendPayload): number {
  // Make legend order match the chart bar order
  return item.value === 'Male' ? 0 : 1;
}
// #endregion

export default function PopulationPyramidExample({ defaultIndex }: { defaultIndex?: number }) {
  return (
    <BarChart
      data={percentageData}
      layout="vertical"
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1 }}
      responsive
      stackOffset="sign"
      barCategoryGap={1}
    >
      <XAxis
        type="number"
        domain={[-10, 10]}
        tickFormatter={formatPercent}
        height={50}
        label={{
          value: '% of total population',
          position: 'insideBottom',
        }}
      />
      <YAxis
        width="auto"
        type="category"
        dataKey="age"
        name="Age group"
        label={{
          value: 'Age group',
          angle: -90,
          position: 'insideLeft',
          offset: 10,
        }}
      />
      <Bar
        stackId="age"
        name="Female"
        dataKey="female"
        fill="#ed7485"
        radius={[0, 5, 5, 0]}
        label={{ position: 'right', formatter: formatPercent }}
      />
      <Bar
        stackId="age"
        name="Male"
        dataKey="male"
        fill="#6ea1c7"
        radius={[0, 5, 5, 0]}
        label={{ position: 'right', formatter: formatPercent }}
      />
      <Tooltip<number, string> formatter={formatPercent} defaultIndex={defaultIndex} />
      <Legend itemSorter={itemSorter} verticalAlign="top" align="right" />
    </BarChart>
  );
}
