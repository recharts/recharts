import * as React from 'react';
import { expect, test } from '@playwright/experimental-ct-react';
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart, Tooltip } from '../../src';
import { RechartsHookInspector } from '../../storybook/storybook-addon-recharts';
import { pageData } from '../../storybook/stories/data';

test('Stacked RadialBar Chart', async ({ mount }) => {
  const component = await mount(
    <RadialBarChart width={800} height={800} data={pageData}>
      <RadialBar dataKey="pv" stackId="stack1" fill="gold" />
      <RadialBar dataKey="uv" stackId="stack1" fill="purple" />
      <Legend />
      <PolarGrid gridType="circle" />
      <PolarAngleAxis dataKey="pv" type="number" axisLineType="circle" />
      <Tooltip defaultIndex={3} cursor={{ strokeWidth: 3, stroke: 'black', strokeDasharray: '4 4' }} />
      <RechartsHookInspector />
    </RadialBarChart>,
  );
  await expect(component).toHaveScreenshot();
});

/**
 * Three Rings for the Elven-kings under the sky,
 * Seven for the Dwarf-lords in their halls of stone,
 * Nine for Mortal Men doomed to die,
 * One for the Dark Lord on his dark throne
 * In the Land of Mordor where the Shadows lie.
 * One Ring to rule them all, One Ring to find them,
 * One Ring to bring them all and in the darkness bind them
 * In the Land of Mordor where the Shadows lie.
 *
 * Lord of the Rings, J.R.R. Tolkien, 1954
 */
const ringsData = [
  {
    name: 'Elves',
    rings: 3,
    fill: 'green',
  },
  {
    name: 'Dwarves',
    rings: 7,
    fill: 'blue',
  },
  {
    name: 'Humans',
    rings: 9,
    fill: 'red',
  },
  {
    name: 'Sauron',
    rings: 1,
    fill: 'black',
  },
];

test('Rings With Implicit Axes', async ({ mount }) => {
  const component = await mount(
    <RadialBarChart width={800} height={800} data={ringsData}>
      <RadialBar dataKey="rings" />
      <Legend />
      <PolarGrid gridType="circle" />
      <Tooltip defaultIndex={0} />
      <RechartsHookInspector />
    </RadialBarChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('Rings With Default Axes', async ({ mount }) => {
  const component = await mount(
    <RadialBarChart width={800} height={800} data={ringsData}>
      <RadialBar dataKey="rings" />
      <Legend />
      <PolarGrid gridType="circle" />
      <PolarAngleAxis />
      <PolarRadiusAxis />
      <Tooltip defaultIndex={0} />
      <RechartsHookInspector />
    </RadialBarChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('Rings With Data Keys', async ({ mount }) => {
  const component = await mount(
    <RadialBarChart width={800} height={800} data={ringsData}>
      <RadialBar dataKey="rings" />
      <Legend />
      <PolarGrid gridType="circle" />
      <PolarAngleAxis dataKey="rings" />
      <PolarRadiusAxis dataKey="name" stroke="black" />
      <Tooltip defaultIndex={0} />
      <RechartsHookInspector />
    </RadialBarChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('Rings With Types', async ({ mount }) => {
  const component = await mount(
    <RadialBarChart width={800} height={800} data={ringsData}>
      <RadialBar dataKey="rings" />
      <Legend />
      <PolarGrid gridType="circle" />
      <PolarAngleAxis type="number" />
      <PolarRadiusAxis type="category" stroke="black" />
      <Tooltip defaultIndex={0} />
      <RechartsHookInspector />
    </RadialBarChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('Rings With Data Keys And Types', async ({ mount }) => {
  const component = await mount(
    <RadialBarChart width={800} height={800} data={ringsData}>
      <RadialBar dataKey="rings" />
      <Legend />
      <PolarGrid gridType="circle" />
      <PolarAngleAxis dataKey="rings" type="number" />
      <PolarRadiusAxis dataKey="name" type="category" stroke="black" />
      <Tooltip defaultIndex={0} />
      <RechartsHookInspector />
    </RadialBarChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('Rings With Custom Domain', async ({ mount }) => {
  const totalCountOfRings = ringsData.reduce((acc, entry) => acc + entry.rings, 0);
  const component = await mount(
    <RadialBarChart width={800} height={800} data={ringsData}>
      <RadialBar dataKey="rings" />
      <Legend />
      <PolarGrid gridType="circle" />
      <PolarAngleAxis dataKey="rings" type="number" domain={[0, totalCountOfRings]} />
      <PolarRadiusAxis dataKey="name" type="category" stroke="black" />
      <Tooltip defaultIndex={0} />
      <RechartsHookInspector />
    </RadialBarChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('Rings With Radius Axis Vertically', async ({ mount }) => {
  const totalCountOfRings = ringsData.reduce((acc, entry) => acc + entry.rings, 0);
  const component = await mount(
    <RadialBarChart width={800} height={800} data={ringsData} startAngle={90} endAngle={-270}>
      <RadialBar dataKey="rings" />
      <Legend />
      <PolarGrid gridType="circle" />
      <PolarAngleAxis dataKey="rings" type="number" domain={[0, totalCountOfRings]} />
      <PolarRadiusAxis dataKey="name" type="category" orientation="left" angle={90} stroke="black" />
      <Tooltip defaultIndex={0} />
      <RechartsHookInspector />
    </RadialBarChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('Reversed Angle Axis', async ({ mount }) => {
  const component = await mount(
    <RadialBarChart width={800} height={800} data={ringsData}>
      <RadialBar dataKey="rings" />
      <Legend />
      <PolarGrid gridType="circle" />
      <PolarAngleAxis type="number" reversed />
      <PolarRadiusAxis type="category" stroke="black" />
      <Tooltip />
      <RechartsHookInspector />
    </RadialBarChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('Reversed Radius Axis', async ({ mount }) => {
  const component = await mount(
    <RadialBarChart width={800} height={800} data={ringsData}>
      <RadialBar dataKey="rings" />
      <Legend />
      <PolarGrid gridType="circle" />
      <PolarAngleAxis type="number" />
      <PolarRadiusAxis type="category" stroke="black" reversed />
      <Tooltip />
      <RechartsHookInspector />
    </RadialBarChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('Reversed Both Axes', async ({ mount }) => {
  const component = await mount(
    <RadialBarChart width={800} height={800} data={ringsData}>
      <RadialBar dataKey="rings" />
      <Legend />
      <PolarGrid gridType="circle" />
      <PolarAngleAxis type="number" reversed />
      <PolarRadiusAxis type="category" stroke="black" reversed />
      <Tooltip />
      <RechartsHookInspector />
    </RadialBarChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('Angled', async ({ mount }) => {
  const component = await mount(
    <RadialBarChart width={800} height={800} data={ringsData} startAngle={20} endAngle={220}>
      <RadialBar dataKey="rings" />
      <Legend />
      <PolarGrid gridType="circle" />
      <PolarAngleAxis type="number" />
      <PolarRadiusAxis type="category" stroke="black" />
      <Tooltip />
      <RechartsHookInspector />
    </RadialBarChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('Chart Reversed By Angles', async ({ mount }) => {
  const component = await mount(
    <RadialBarChart width={800} height={800} data={ringsData} startAngle={145} endAngle={20}>
      <RadialBar dataKey="rings" />
      <Legend />
      <PolarGrid gridType="circle" />
      <PolarAngleAxis type="number" />
      <PolarRadiusAxis type="category" stroke="black" />
      <Tooltip />
      <RechartsHookInspector />
    </RadialBarChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('Chart Reversed By Both Angles And Reverse Axis', async ({ mount }) => {
  const component = await mount(
    <RadialBarChart width={800} height={800} data={ringsData} startAngle={145} endAngle={20}>
      <RadialBar dataKey="rings" />
      <Legend />
      <PolarGrid gridType="circle" />
      <PolarAngleAxis type="number" />
      <PolarRadiusAxis type="category" stroke="black" />
      <Tooltip />
      <RechartsHookInspector />
    </RadialBarChart>,
  );
  await expect(component).toHaveScreenshot();
});
