import * as React from 'react';
import {
  AreaChart,
  Label,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ReferenceArea,
  ReferenceDot,
  ReferenceLine,
  XAxis,
  YAxis,
} from '../../src';
import { pageData, pageDataWithFillColor } from '../../storybook/stories/data';

const availablePositions = [
  'top',
  'left',
  'right',
  'bottom',
  'inside',
  'outside',
  'insideLeft',
  'insideRight',
  'insideTop',
  'insideBottom',
  'insideTopLeft',
  'insideBottomLeft',
  'insideTopRight',
  'insideBottomRight',
  'insideStart',
  'insideEnd',
  'end',
  'center',
  'centerTop',
  'centerBottom',
  'middle',
] as const;

export const XAxisLabel = () => {
  return (
    <LineChart width={900} height={500} data={pageData} margin={{ top: 5, right: 130, left: 120, bottom: 100 }}>
      <XAxis dataKey="name" height={200} padding={{ left: 150, right: 150 }} tickMargin={20}>
        {availablePositions.map(position => (
          <Label key={position} value={`Position: ${position}`} position={position} className={position} />
        ))}
      </XAxis>
      <YAxis />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
  );
};

export const YAxisLabel = () => {
  return (
    <LineChart width={900} height={500} data={pageData} margin={{ top: 35, right: 30, left: 120, bottom: 20 }}>
      <XAxis dataKey="name" />
      <YAxis width={500} tickMargin={20} padding={{ top: 50, bottom: 50 }}>
        {availablePositions.map(position => (
          <Label key={position} value={`Position: ${position}`} position={position} className={position} />
        ))}
      </YAxis>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
  );
};

export const ReferenceAreaLabel = () => {
  return (
    <AreaChart width={900} height={500} data={pageData}>
      <XAxis dataKey="name" />
      <YAxis />
      <ReferenceArea x1="Page B" x2="Page F" y1={1500} y2={200} strokeOpacity={0.3} fillOpacity={0.3} fill="#8884d8">
        {availablePositions.map(position => (
          <Label key={position} value={`Position: ${position}`} position={position} className={position} />
        ))}
      </ReferenceArea>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </AreaChart>
  );
};

export const ReferenceDotLabel = () => {
  return (
    <AreaChart width={900} height={900} data={pageData}>
      <XAxis dataKey="name" />
      <YAxis />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <ReferenceDot x="Page D" y={700} r={270} strokeOpacity={0.3} fillOpacity={0.3} fill="#8884d8">
        {availablePositions.map(position => (
          <Label key={position} value={`Position: ${position}`} position={position} className={position} />
        ))}
      </ReferenceDot>
    </AreaChart>
  );
};

export const ReferenceLineLabel = () => {
  return (
    <AreaChart width={900} height={500} data={pageData} margin={{ top: 30, bottom: 30 }}>
      <XAxis dataKey="name" />
      <YAxis />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <ReferenceLine x="Page C" stroke="#ff7300">
        {availablePositions.map(position => (
          <Label key={position} value={`Position: ${position}`} position={position} className={position} />
        ))}
      </ReferenceLine>
    </AreaChart>
  );
};

export const RadarChartLabel = () => {
  return (
    <RadarChart width={900} height={500} data={pageData}>
      {availablePositions.map(position => (
        <Label key={position} value={`Position: ${position}`} position={position} className={position} />
      ))}
      <PolarRadiusAxis dataKey="uv" angle={45} />
      <PolarAngleAxis dataKey="name" />
      <Radar dataKey="uv" stroke="#8884d8" fill="none" />
    </RadarChart>
  );
};

export const PolarRadiusAxisLabel = () => {
  return (
    <RadarChart width={900} height={500} data={pageData}>
      <PolarRadiusAxis dataKey="uv" angle={45}>
        {availablePositions.map(position => (
          <Label key={position} value={`Position: ${position}`} position={position} className={position} />
        ))}
      </PolarRadiusAxis>
      <PolarAngleAxis dataKey="name" />
      <Radar dataKey="uv" stroke="#8884d8" fill="none" />
    </RadarChart>
  );
};

export const PolarAngleAxisLabel = () => {
  // Label does not render in PolarAngleAxis at all, this looks like a bug and/or missing feature
  return (
    <RadarChart width={900} height={500} data={pageData}>
      <PolarRadiusAxis dataKey="uv" angle={45} />
      <PolarAngleAxis dataKey="name">
        {availablePositions.map(position => (
          <Label key={position} value={`Position: ${position}`} position={position} className={position} />
        ))}
      </PolarAngleAxis>
      <Radar dataKey="uv" stroke="#8884d8" fill="none" />
    </RadarChart>
  );
};

export const PieChartLabel = () => {
  return (
    <PieChart width={900} height={500}>
      <Pie data={pageDataWithFillColor} dataKey="uv" nameKey="name" isAnimationActive={false} />
      {availablePositions.map(position => (
        <Label key={position} value={`Position: ${position}`} position={position} className={position} />
      ))}
      <Legend />
    </PieChart>
  );
};

export const PieLabel = () => {
  return (
    <PieChart width={900} height={500}>
      <Pie data={pageDataWithFillColor} dataKey="uv" nameKey="name" isAnimationActive={false}>
        {availablePositions.map(position => (
          <Label key={position} value={`Position: ${position}`} position={position} className={position} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  );
};
