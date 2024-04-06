import React from 'react';
import { StoryObj } from '@storybook/react';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip, Legend } from '../../../src';

export default {
  component: RadarChart,
  docs: {
    autodocs: false,
  },
};

export const NumberAngleType: StoryObj = {
  render: () => {
    const data = [
      { angle: 0, r: 1 },
      { angle: 90, r: 2 },
      { angle: 180, r: 3 },
      { angle: 270, r: 4 },
    ];
    return (
      <RadarChart data={data} width={360} height={360}>
        <PolarGrid gridType="circle" />

        <PolarRadiusAxis type="number" dataKey="r" />

        <PolarAngleAxis dataKey="angle" axisLineType="circle" type="number" domain={[0, 360]} />

        <Radar type="number" name="r" dataKey="r" fillOpacity={0} stroke="#000" />
      </RadarChart>
    );
  },
};

export const CategoryAngleType: StoryObj = {
  render: () => {
    const data = [
      { angle: 0, r: 1 },
      { angle: 90, r: 2 },
      { angle: 180, r: 3 },
      { angle: 270, r: 4 },
    ];
    return (
      <RadarChart data={data} width={360} height={360}>
        <PolarGrid gridType="circle" />

        <PolarRadiusAxis type="number" dataKey="r" />

        <PolarAngleAxis dataKey="angle" axisLineType="circle" domain={[0, 360]} />

        <Radar type="number" name="r" dataKey="r" fillOpacity={0} stroke="#000" />
      </RadarChart>
    );
  },
};

export const ShouldBeCorrectAngle: StoryObj = {
  render: () => {
    const data = [
      { angle: 0, value: 5 },
      { angle: 45, value: 5 },
      { angle: 90, value: 5 },
      { angle: 125, value: 5 },
      { angle: 180, value: 5 },
      { angle: 225, value: 5 },
      { angle: 270, value: 5 },
      { angle: 315, value: 5 },
      { angle: 360, value: 5 },
    ];
    return (
      <RadarChart width={600} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <Tooltip />
        <PolarGrid />
        <PolarRadiusAxis angle={90} type="number" />
        <PolarAngleAxis dataKey="angle" type="number" domain={[0, 360]} tickCount={9} />

        <Radar dataKey="value" fillOpacity={0} stroke="#000" />
      </RadarChart>
    );
  },
};

export const RadarWithLegend: StoryObj = {
  render: () => {
    const data = [
      { angle: 0, r: 1 },
      { angle: 90, r: 2 },
      { angle: 180, r: 3 },
      { angle: 270, r: 4 },
    ];
    return (
      <RadarChart data={data} width={360} height={360}>
        <PolarGrid gridType="circle" />
        <Legend />
        <Tooltip defaultIndex={2} />
        <PolarRadiusAxis type="number" dataKey="r" />

        <PolarAngleAxis dataKey="angle" axisLineType="circle" type="number" domain={[0, 360]} />

        <Radar type="number" name="r" dataKey="r" fillOpacity={0} stroke="#000" />
      </RadarChart>
    );
  },
};
