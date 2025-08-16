/*
 * Workaround file for https://playwright.dev/docs/test-components#test-stories
 */

import * as React from 'react';
import { Area, AreaChart, LabelList } from '../../src';
import { pageData } from '../../storybook/stories/data';

const shortData = pageData.slice(2, 4);

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

// Parent Components

// <Area /><Bar /><Line /><Scatter /><Pie /><Radar /><RadialBar />

export const AreaImplicitLabelListTest = () => (
  <AreaChart width={900} height={500} data={shortData} margin={margin}>
    {availablePositions.map(position => (
      <Area
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
