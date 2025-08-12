import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import { AreaChart, Label, Line, LineChart, ReferenceArea, ReferenceDot, ReferenceLine, XAxis, YAxis } from '../../src';
import { pageData } from '../../storybook/stories/data';

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

test('XAxis > Label', async ({ mount }) => {
  const component = await mount(
    <LineChart width={900} height={500} data={pageData} margin={{ top: 5, right: 130, left: 120, bottom: 100 }}>
      <XAxis dataKey="name" height={200} padding={{ left: 150, right: 150 }} tickMargin={20}>
        {availablePositions.map(position => (
          <Label key={position} value={`Position: ${position}`} position={position} className={position} />
        ))}
      </XAxis>
      <YAxis />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('YAxis > Label', async ({ mount }) => {
  const component = await mount(
    <LineChart width={900} height={500} data={pageData} margin={{ top: 35, right: 30, left: 120, bottom: 20 }}>
      <XAxis dataKey="name" />
      <YAxis width={500} tickMargin={20} padding={{ top: 50, bottom: 50 }}>
        {availablePositions.map(position => (
          <Label key={position} value={`Position: ${position}`} position={position} className={position} />
        ))}
      </YAxis>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('ReferenceArea > Label', async ({ mount }) => {
  const component = await mount(
    <AreaChart width={900} height={500} data={pageData}>
      <XAxis dataKey="name" />
      <YAxis />
      <ReferenceArea x1="Page B" x2="Page F" y1={1500} y2={200} strokeOpacity={0.3} fillOpacity={0.3} fill="#8884d8">
        {availablePositions.map(position => (
          <Label key={position} value={`Position: ${position}`} position={position} className={position} />
        ))}
      </ReferenceArea>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </AreaChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('ReferenceDot > Label', async ({ mount }) => {
  const component = await mount(
    <AreaChart width={900} height={900} data={pageData}>
      <XAxis dataKey="name" />
      <YAxis />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <ReferenceDot x="Page D" y={700} r={270} strokeOpacity={0.3} fillOpacity={0.3} fill="#8884d8">
        {availablePositions.map(position => (
          <Label key={position} value={`Position: ${position}`} position={position} className={position} />
        ))}
      </ReferenceDot>
    </AreaChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('ReferenceLine > Label', async ({ mount }) => {
  const component = await mount(
    <AreaChart width={900} height={500} data={pageData} margin={{ top: 30, bottom: 30 }}>
      <XAxis dataKey="name" />
      <YAxis />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <ReferenceLine x="Page C" stroke="#ff7300">
        {availablePositions.map(position => (
          <Label key={position} value={`Position: ${position}`} position={position} className={position} />
        ))}
      </ReferenceLine>
    </AreaChart>,
  );
  await expect(component).toHaveScreenshot();
});
