import React from 'react';
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart, Tooltip } from '../../../src';
import { pageData, pageDataWithFillColor } from '../data';

export default {
  component: RadialBarChart,
  docs: { audotocs: false },
};

export const SimpleRadialBarChart = {
  render: () => {
    return (
      <RadialBarChart width={500} height={500} data={pageData}>
        <RadialBar dataKey="pv" />
        <Legend />
        <Tooltip />
      </RadialBarChart>
    );
  },
};

export const RadialBarWithColors = {
  render: () => {
    return (
      <RadialBarChart width={500} height={500} data={pageDataWithFillColor}>
        <RadialBar dataKey="pv" />
        <Legend />
        <Tooltip />
      </RadialBarChart>
    );
  },
};

export const RadialBarWithAxesAndGrid = {
  render: () => {
    return (
      <RadialBarChart width={500} height={500} data={pageDataWithFillColor}>
        <RadialBar dataKey="pv" />
        <Legend />
        <PolarGrid gridType="circle" />
        <PolarAngleAxis dataKey="pv" type="number" axisLineType="circle" stroke="red" />
        <PolarRadiusAxis dataKey="name" orientation="middle" type="category" angle={90} stroke="black" />
        <Tooltip cursor={{ strokeWidth: 3, stroke: 'black', strokeDasharray: '4 4' }} />
      </RadialBarChart>
    );
  },
};
