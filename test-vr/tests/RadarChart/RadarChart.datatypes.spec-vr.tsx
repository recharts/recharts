import * as React from 'react';
import { expect, test } from '@playwright/experimental-ct-react';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from '../../../src';
import { RechartsHookInspector } from '../../../storybook/storybook-addon-recharts';

test('number angle type with explicit domain', async ({ mount }) => {
  const component = await mount(
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
      <RechartsHookInspector />
    </RadarChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('number angle type with default domain', async ({ mount }) => {
  const component = await mount(
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
    </RadarChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('category angle type', async ({ mount }) => {
  const component = await mount(
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
    </RadarChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('should be correct angle with odd number of points', async ({ mount }) => {
  const component = await mount(
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
    </RadarChart>,
  );
  await expect(component).toHaveScreenshot();
});
