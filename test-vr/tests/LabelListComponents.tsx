/*
 * Workaround file for https://playwright.dev/docs/test-components#test-stories
 */

import * as React from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  LineChart,
  Scatter,
  ScatterChart,
  Pie,
  PieChart,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  LabelList,
  XAxis,
  YAxis,
} from '../../src';
import { pageData, pageDataWithFillColor } from '../../storybook/stories/data';

const shortData = pageData.slice(2, 4);

const shortFillColorData = pageDataWithFillColor.slice(2, 4);

const margin = { top: 155, right: 180, left: 180, bottom: 0 };

export const availablePositions = [
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

export const AreaImplicitLabelListTest = () => (
  <AreaChart width={900} height={500} data={shortData} margin={margin}>
    {availablePositions.map(position => (
      <Area
        key={position}
        type="monotone"
        dataKey="uv"
        stroke="#8884d8"
        fill="none"
        label={{ position, offset: 50, angle: -30, valueAccessor: () => position }}
      />
    ))}
    <LabelList />
  </AreaChart>
);

export const AreaExplicitLabelListTest = () => (
  <AreaChart width={900} height={500} data={shortData} margin={margin}>
    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="none">
      {availablePositions.map(position => (
        <LabelList
          key={position}
          position={position}
          offset={50}
          angle={-30}
          className={position}
          valueAccessor={() => position}
        />
      ))}
    </Area>
  </AreaChart>
);

export const BarImplicitLabelListTest = () => (
  <BarChart width={900} height={500} data={shortData} margin={margin}>
    {availablePositions.map(position => (
      <Bar
        key={position}
        dataKey="uv"
        fill="none"
        stroke="green"
        // @ts-expect-error typescript type says that valueAccessor is not a valid prop, but it does work
        label={{ position, offset: 50, angle: -30, valueAccessor: () => position }}
      />
    ))}
    <LabelList />
  </BarChart>
);

export const BarExplicitLabelListTest = () => (
  <BarChart width={900} height={500} data={shortData} margin={margin}>
    <Bar dataKey="uv" fill="none" stroke="green">
      {availablePositions.map(position => (
        <LabelList
          key={position}
          position={position}
          offset={50}
          angle={-30}
          className={position}
          valueAccessor={() => position}
        />
      ))}
    </Bar>
  </BarChart>
);

export const LineImplicitLabelListTest = () => (
  <LineChart width={900} height={500} data={shortData} margin={margin}>
    {availablePositions.map(position => (
      <Line
        key={position}
        type="monotone"
        dataKey="uv"
        stroke="#8884d8"
        // @ts-expect-error typescript type says that valueAccessor is not a valid prop, but it does work
        label={{ position, offset: 50, angle: -30, valueAccessor: () => position }}
      />
    ))}
    <LabelList />
  </LineChart>
);

export const LineExplicitLabelListTest = () => (
  <LineChart width={900} height={500} data={shortData} margin={margin}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8">
      {availablePositions.map(position => (
        <LabelList
          key={position}
          position={position}
          offset={50}
          angle={-30}
          className={position}
          valueAccessor={() => position}
        />
      ))}
    </Line>
  </LineChart>
);

export const ScatterImplicitLabelListTest = () => (
  <ScatterChart width={900} height={500} margin={margin}>
    <XAxis dataKey="name" allowDuplicatedCategory={false} />
    <YAxis dataKey="uv" />
    {availablePositions.map(position => (
      <Scatter
        key={position}
        data={shortData}
        fill="#8884d8"
        label={{ position, offset: 50, angle: -30, valueAccessor: () => position }}
      />
    ))}
    <LabelList />
  </ScatterChart>
);

export const ScatterExplicitLabelListTest = () => (
  <ScatterChart width={900} height={500} margin={margin}>
    <XAxis dataKey="name" />
    <YAxis dataKey="uv" />
    <Scatter data={shortData} fill="#8884d8">
      {availablePositions.map(position => (
        <LabelList
          key={position}
          position={position}
          offset={50}
          angle={-30}
          className={position}
          valueAccessor={() => position}
        />
      ))}
    </Scatter>
  </ScatterChart>
);

export const PieImplicitLabelListTest = () => (
  <PieChart width={900} height={500}>
    {availablePositions.map(position => (
      <Pie
        key={position}
        data={shortFillColorData}
        dataKey="uv"
        cx={450}
        cy={250}
        outerRadius={120}
        isAnimationActive={false}
        // @ts-expect-error typescript type says that position is not a valid prop, but it does work
        label={{ position, offset: 50, angle: -30, valueAccessor: () => position }}
      />
    ))}
    <LabelList />
  </PieChart>
);

export const PieExplicitLabelListTest = () => (
  <PieChart width={900} height={500}>
    <Pie data={shortFillColorData} dataKey="uv" isAnimationActive={false}>
      {availablePositions.map(position => (
        <LabelList
          key={position}
          position={position}
          offset={50}
          angle={-30}
          className={position}
          valueAccessor={() => position}
        />
      ))}
    </Pie>
  </PieChart>
);

export const RadarImplicitLabelListTest = () => (
  <RadarChart width={900} height={500} data={shortData} margin={margin}>
    {availablePositions.map(position => (
      <Radar
        key={position}
        dataKey="uv"
        stroke="#8884d8"
        fill="none"
        label={{ position, offset: 50, angle: -30, valueAccessor: () => position }}
      />
    ))}
    <LabelList />
  </RadarChart>
);

export const RadarExplicitLabelListTest = () => (
  <RadarChart width={900} height={500} data={shortData} margin={margin}>
    <Radar dataKey="uv" stroke="#8884d8" fill="none">
      {availablePositions.map(position => (
        <LabelList
          key={position}
          position={position}
          offset={50}
          angle={-30}
          className={position}
          valueAccessor={() => position}
        />
      ))}
    </Radar>
  </RadarChart>
);

export const RadialBarImplicitLabelListTest = () => (
  <RadialBarChart
    width={900}
    height={500}
    cx={450}
    cy={250}
    innerRadius={60}
    outerRadius={120}
    barSize={20}
    data={shortData}
  >
    {availablePositions.map(position => (
      <RadialBar
        key={position}
        dataKey="uv"
        fill="none"
        stroke="blue"
        isAnimationActive={false}
        label={{ position, offset: 50, angle: -30, valueAccessor: () => position }}
      />
    ))}
    <LabelList />
  </RadialBarChart>
);

export const RadialBarExplicitLabelListTest = () => (
  <RadialBarChart
    width={900}
    height={500}
    cx={450}
    cy={250}
    innerRadius={60}
    outerRadius={120}
    barSize={20}
    data={shortData}
  >
    <RadialBar dataKey="uv" fill="none" stroke="blue" isAnimationActive={false}>
      {availablePositions.map(position => (
        <LabelList
          key={position}
          position={position}
          offset={50}
          angle={-30}
          className={position}
          valueAccessor={() => position}
        />
      ))}
    </RadialBar>
  </RadialBarChart>
);
