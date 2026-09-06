import * as React from 'react';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from '../../../src';

export const NumberAngleTypeWithExplicitDomain = () => {
  return (
    <RadarChart
      width={360}
      height={360}
      data={[
        { angle: 0, r: 11 },
        { angle: 90, r: 22 },
        { angle: 180, r: 33 },
        { angle: 270, r: 44 },
      ]}
    >
      <PolarGrid gridType="circle" />
      <PolarRadiusAxis type="number" dataKey="r" />
      <PolarAngleAxis dataKey="angle" axisLineType="circle" type="number" domain={[0, 360]} />
      <Radar type="number" name="r" dataKey="r" fillOpacity={0} stroke="#000" />
    </RadarChart>
  );
};

export const NumberAngleTypeWithDefaultDomain = () => {
  return (
    <RadarChart
      width={360}
      height={360}
      data={[
        { angle: 0, r: 11 },
        { angle: 90, r: 22 },
        { angle: 180, r: 33 },
        { angle: 270, r: 44 },
      ]}
    >
      <PolarGrid gridType="circle" />
      <PolarRadiusAxis type="number" dataKey="r" />
      <PolarAngleAxis dataKey="angle" axisLineType="circle" type="number" />
      <Radar type="number" name="r" dataKey="r" fillOpacity={0} stroke="#000" />
    </RadarChart>
  );
};

export const CategoryAngleType = () => {
  return (
    <RadarChart
      width={360}
      height={360}
      data={[
        { angle: 0, r: 11 },
        { angle: 90, r: 22 },
        { angle: 180, r: 33 },
        { angle: 270, r: 44 },
      ]}
    >
      <PolarGrid gridType="circle" />
      <PolarRadiusAxis type="category" dataKey="r" />
      <PolarAngleAxis dataKey="angle" axisLineType="circle" type="category" />
      <Radar type="number" name="r" dataKey="r" fillOpacity={0} stroke="#000" />
    </RadarChart>
  );
};

export const CorrectAngleWithOddNumberOfPoints = () => {
  return (
    <RadarChart
      width={360}
      height={360}
      data={[
        { angle: 0, value: 5 },
        { angle: 60, value: 5 },
        { angle: 120, value: 5 },
        { angle: 180, value: 5 },
        { angle: 240, value: 5 },
        { angle: 300, value: 5 },
        { angle: 360, value: 5 },
      ]}
    >
      <PolarGrid />
      <PolarRadiusAxis angle={90} type="number" />
      <PolarAngleAxis dataKey="angle" type="number" domain={[0, 360]} tickCount={9} />
      <Radar dataKey="value" fillOpacity={0} stroke="#000" />
    </RadarChart>
  );
};
