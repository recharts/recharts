import React from 'react';
import { RadarChart, Radar, PolarAngleAxis, PolarRadiusAxis, Legend, PolarGrid } from 'recharts';

const data = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const example = () => (
  <RadarChart outerRadius={90} width={730} height={250} data={data}>
    <PolarGrid />
    <PolarAngleAxis dataKey="subject" />
    <PolarRadiusAxis angle={30} domain={[0, 150]} />
    <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
    <Legend />
  </RadarChart>
);

const exampleCode = `
<RadarChart outerRadius={90} width={730} height={250} data={data}>
  <PolarGrid />
  <PolarAngleAxis dataKey="subject" />
  <PolarRadiusAxis angle={30} domain={[0, 150]} />
  <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
  <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
  <Legend />
</RadarChart>
`;

export default [
  {
    demo: example,
    code: exampleCode,
    dataCode: `const data = ${JSON.stringify(data, null, 2)}`,
  },
];
