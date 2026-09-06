import * as React from 'react';
import { Bar, BarChart, LabelList, Pie, PieChart, RechartsThemeProvider, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'A', value: 24 },
  { name: 'B', value: 42 },
  { name: 'C', value: 18 },
];

function LabelThemeChart() {
  return (
    <>
      <BarChart width={360} height={240} data={data} margin={{ top: 30, right: 20, bottom: 30, left: 20 }}>
        <XAxis dataKey="name" label="Category" />
        <YAxis />
        <Bar dataKey="value" fill="#60a5fa" isAnimationActive={false}>
          <LabelList dataKey="value" position="top" />
        </Bar>
      </BarChart>
      <PieChart width={360} height={240}>
        <Pie data={data} dataKey="value" cx={180} cy={120} outerRadius={70} isAnimationActive={false}>
          <LabelList dataKey="value" position="insideStart" />
        </Pie>
      </PieChart>
    </>
  );
}

export function LabelThemeExamples() {
  return (
    <div style={{ display: 'flex', gap: 32 }}>
      <section>
        <h1>Default labels</h1>
        <LabelThemeChart />
      </section>
      <RechartsThemeProvider
        value={{
          graphicalItems: [],
          typography: {
            fill: '#7c2d12',
            fontFamily: 'cursive',
            fontSize: 18,
            fontWeight: 'bold',
          },
        }}
      >
        <section>
          <h1>Themed labels</h1>
          <LabelThemeChart />
        </section>
      </RechartsThemeProvider>
    </div>
  );
}
