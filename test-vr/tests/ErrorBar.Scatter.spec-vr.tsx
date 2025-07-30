import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import { pageData } from '../../storybook/stories/data';
import { ComposedChart, ErrorBar, Scatter, ScatterChart, XAxis, YAxis } from '../../src';

test('ComposedChart + implicit direction + root data', async ({ mount }) => {
  const component = await mount(
    <ComposedChart width={200} height={200} data={pageData}>
      <Scatter dataKey="uv">
        <ErrorBar dataKey="pv" />
      </Scatter>
    </ComposedChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('ComposedChart + explicit direction + root data', async ({ mount }) => {
  const component = await mount(
    <ComposedChart width={200} height={200} data={pageData}>
      <Scatter dataKey="uv">
        <ErrorBar dataKey="pv" direction="y" />
      </Scatter>
    </ComposedChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('ComposedChart + implicit direction + item data', async ({ mount }) => {
  const component = await mount(
    <ComposedChart width={200} height={200}>
      <Scatter dataKey="uv" data={pageData}>
        <ErrorBar dataKey="pv" />
      </Scatter>
    </ComposedChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('ComposedChart + explicit direction + item data', async ({ mount }) => {
  const component = await mount(
    <ComposedChart width={200} height={200}>
      <Scatter dataKey="uv" data={pageData}>
        <ErrorBar dataKey="pv" direction="y" />
      </Scatter>
    </ComposedChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('ComposedChart + numeric XAxis + implicit direction + root data', async ({ mount }) => {
  const component = await mount(
    <ComposedChart width={200} height={200} data={pageData}>
      <XAxis type="number" dataKey="amt" />
      <Scatter dataKey="uv">
        <ErrorBar dataKey="pv" />
      </Scatter>
    </ComposedChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('ComposedChart + numeric XAxis + explicit direction + root data', async ({ mount }) => {
  const component = await mount(
    <ComposedChart width={200} height={200} data={pageData}>
      <XAxis type="number" dataKey="amt" />
      <Scatter dataKey="uv">
        <ErrorBar dataKey="pv" direction="x" />
        <ErrorBar dataKey="pv" direction="y" />
      </Scatter>
    </ComposedChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('ScatterChart + implicit direction + root data', async ({ mount }) => {
  const component = await mount(
    <ScatterChart width={200} height={200} data={pageData}>
      <Scatter dataKey="uv">
        <ErrorBar dataKey="pv" />
      </Scatter>
    </ScatterChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('ScatterChart + explicit direction + root data', async ({ mount }) => {
  const component = await mount(
    <ScatterChart width={200} height={200} data={pageData}>
      <Scatter dataKey="uv">
        <ErrorBar dataKey="pv" direction="y" />
      </Scatter>
    </ScatterChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('ScatterChart + implicit direction + item data', async ({ mount }) => {
  const component = await mount(
    <ScatterChart width={200} height={200}>
      <Scatter dataKey="uv" data={pageData}>
        <ErrorBar dataKey="pv" />
      </Scatter>
    </ScatterChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('ScatterChart + explicit direction + item data', async ({ mount }) => {
  const component = await mount(
    <ScatterChart width={200} height={200}>
      <Scatter dataKey="uv" data={pageData}>
        <ErrorBar dataKey="pv" direction="y" />
      </Scatter>
    </ScatterChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('ScatterChart + numeric XAxis + implicit direction + root data', async ({ mount }) => {
  const component = await mount(
    <ScatterChart width={200} height={200} data={pageData}>
      <XAxis type="number" dataKey="amt" />
      <Scatter dataKey="uv">
        <ErrorBar dataKey="pv" />
      </Scatter>
    </ScatterChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('ScatterChart + numeric XAxis + explicit direction + root data', async ({ mount }) => {
  const component = await mount(
    <ScatterChart width={200} height={200} data={pageData}>
      <XAxis type="number" dataKey="amt" />
      <Scatter dataKey="uv">
        <ErrorBar dataKey="pv" direction="x" />
        <ErrorBar dataKey="pv" direction="y" />
      </Scatter>
    </ScatterChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('ScatterChart + numeric XAxis + explicit direction + item data', async ({ mount }) => {
  const component = await mount(
    <ScatterChart width={200} height={200}>
      <XAxis type="number" dataKey="amt" />
      <Scatter dataKey="uv" data={pageData}>
        <ErrorBar dataKey="pv" direction="x" />
        <ErrorBar dataKey="pv" direction="y" />
      </Scatter>
    </ScatterChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('ScatterChart + numeric XAxis + implicit direction + item data', async ({ mount }) => {
  const component = await mount(
    <ScatterChart width={200} height={200}>
      <XAxis type="number" dataKey="amt" />
      <Scatter dataKey="uv" data={pageData}>
        <ErrorBar dataKey="pv" />
      </Scatter>
    </ScatterChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('ComposedChart vertical + implicit direction + root data', async ({ mount }) => {
  const component = await mount(
    <ComposedChart width={200} height={200} data={pageData} layout="vertical">
      <XAxis type="number" dataKey="uv" />
      <YAxis type="category" dataKey="name" />
      <Scatter dataKey="uv">
        <ErrorBar dataKey="pv" />
      </Scatter>
    </ComposedChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('ComposedChart vertical + explicit direction + root data', async ({ mount }) => {
  const component = await mount(
    <ComposedChart width={200} height={200} data={pageData} layout="vertical">
      <XAxis type="number" dataKey="uv" />
      <YAxis type="category" dataKey="name" />
      <Scatter dataKey="uv">
        <ErrorBar dataKey="pv" direction="x" />
      </Scatter>
    </ComposedChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('ComposedChart vertical + implicit direction + item data', async ({ mount }) => {
  const component = await mount(
    <ComposedChart width={200} height={200} layout="vertical">
      <XAxis type="number" dataKey="uv" />
      <YAxis type="category" dataKey="name" />
      <Scatter dataKey="uv" data={pageData}>
        <ErrorBar dataKey="pv" />
      </Scatter>
    </ComposedChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('ComposedChart vertical + explicit direction + item data', async ({ mount }) => {
  const component = await mount(
    <ComposedChart width={200} height={200} layout="vertical">
      <XAxis type="number" dataKey="uv" />
      <YAxis type="category" dataKey="name" />
      <Scatter dataKey="uv" data={pageData}>
        <ErrorBar dataKey="pv" direction="x" />
      </Scatter>
    </ComposedChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('ComposedChart vertical + both directions + root data', async ({ mount }) => {
  const component = await mount(
    <ComposedChart width={200} height={200} data={pageData} layout="vertical">
      <XAxis type="number" dataKey="uv" />
      <YAxis type="category" dataKey="name" />
      <Scatter dataKey="uv">
        <ErrorBar dataKey="pv" direction="x" />
        <ErrorBar dataKey="pv" direction="y" />
      </Scatter>
    </ComposedChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('ComposedChart vertical + both directions + item data', async ({ mount }) => {
  const component = await mount(
    <ComposedChart width={200} height={200} layout="vertical">
      <XAxis type="number" dataKey="uv" />
      <YAxis type="category" dataKey="name" />
      <Scatter dataKey="uv" data={pageData}>
        <ErrorBar dataKey="pv" direction="x" />
        <ErrorBar dataKey="pv" direction="y" />
      </Scatter>
    </ComposedChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('ScatterChart vertical + implicit direction + root data', async ({ mount }) => {
  const component = await mount(
    <ScatterChart width={200} height={200} data={pageData} layout="vertical">
      <XAxis type="number" dataKey="uv" />
      <YAxis type="category" dataKey="name" />
      <Scatter dataKey="uv">
        <ErrorBar dataKey="pv" />
      </Scatter>
    </ScatterChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('ScatterChart vertical + explicit direction + root data', async ({ mount }) => {
  const component = await mount(
    <ScatterChart width={200} height={200} data={pageData} layout="vertical">
      <XAxis type="number" dataKey="uv" />
      <YAxis type="category" dataKey="name" />
      <Scatter dataKey="uv">
        <ErrorBar dataKey="pv" direction="x" />
      </Scatter>
    </ScatterChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('ScatterChart vertical + implicit direction + item data', async ({ mount }) => {
  const component = await mount(
    <ScatterChart width={200} height={200} layout="vertical">
      <XAxis type="number" dataKey="uv" />
      <YAxis type="category" dataKey="name" />
      <Scatter dataKey="uv" data={pageData}>
        <ErrorBar dataKey="pv" />
      </Scatter>
    </ScatterChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('ScatterChart vertical + explicit direction + item data', async ({ mount }) => {
  const component = await mount(
    <ScatterChart width={200} height={200} layout="vertical">
      <XAxis type="number" dataKey="uv" />
      <YAxis type="category" dataKey="name" />
      <Scatter dataKey="uv" data={pageData}>
        <ErrorBar dataKey="pv" direction="x" />
      </Scatter>
    </ScatterChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('ScatterChart vertical + both directions + root data', async ({ mount }) => {
  const component = await mount(
    <ScatterChart width={200} height={200} data={pageData} layout="vertical">
      <XAxis type="number" dataKey="uv" />
      <YAxis type="category" dataKey="name" />
      <Scatter dataKey="uv">
        <ErrorBar dataKey="pv" direction="x" />
        <ErrorBar dataKey="pv" direction="y" />
      </Scatter>
    </ScatterChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('ScatterChart vertical + both directions + item data', async ({ mount }) => {
  const component = await mount(
    <ScatterChart width={200} height={200} layout="vertical">
      <XAxis type="number" dataKey="uv" />
      <YAxis type="category" dataKey="name" />
      <Scatter dataKey="uv" data={pageData}>
        <ErrorBar dataKey="pv" direction="x" />
        <ErrorBar dataKey="pv" direction="y" />
      </Scatter>
    </ScatterChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('ComposedChart vertical + numeric YAxis + both directions + root data', async ({ mount }) => {
  const component = await mount(
    <ComposedChart width={200} height={200} data={pageData} layout="vertical">
      <XAxis type="number" dataKey="uv" />
      <YAxis type="number" dataKey="amt" />
      <Scatter dataKey="uv">
        <ErrorBar dataKey="pv" direction="x" />
        <ErrorBar dataKey="pv" direction="y" />
      </Scatter>
    </ComposedChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('ComposedChart vertical + numeric YAxis + both directions + item data', async ({ mount }) => {
  const component = await mount(
    <ComposedChart width={200} height={200} layout="vertical">
      <XAxis type="number" dataKey="uv" />
      <YAxis type="number" dataKey="amt" />
      <Scatter dataKey="uv" data={pageData}>
        <ErrorBar dataKey="pv" direction="x" />
        <ErrorBar dataKey="pv" direction="y" />
      </Scatter>
    </ComposedChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('ScatterChart vertical + numeric YAxis + both directions + root data', async ({ mount }) => {
  const component = await mount(
    <ScatterChart width={200} height={200} data={pageData} layout="vertical">
      <XAxis type="number" dataKey="uv" />
      <YAxis type="number" dataKey="amt" />
      <Scatter dataKey="uv">
        <ErrorBar dataKey="pv" direction="x" />
        <ErrorBar dataKey="pv" direction="y" />
      </Scatter>
    </ScatterChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('ScatterChart vertical + numeric YAxis + both directions + item data', async ({ mount }) => {
  const component = await mount(
    <ScatterChart width={200} height={200} layout="vertical">
      <XAxis type="number" dataKey="uv" />
      <YAxis type="number" dataKey="amt" />
      <Scatter dataKey="uv" data={pageData}>
        <ErrorBar dataKey="pv" direction="x" />
        <ErrorBar dataKey="pv" direction="y" />
      </Scatter>
    </ScatterChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('ComposedChart vertical + numeric YAxis + implicit direction + root data', async ({ mount }) => {
  const component = await mount(
    <ComposedChart width={200} height={200} data={pageData} layout="vertical">
      <XAxis type="number" dataKey="uv" />
      <YAxis type="number" dataKey="amt" />
      <Scatter dataKey="uv">
        <ErrorBar dataKey="pv" />
      </Scatter>
    </ComposedChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('ComposedChart vertical + numeric YAxis + implicit direction + item data', async ({ mount }) => {
  const component = await mount(
    <ComposedChart width={200} height={200} layout="vertical">
      <XAxis type="number" dataKey="uv" />
      <YAxis type="number" dataKey="amt" />
      <Scatter dataKey="uv" data={pageData}>
        <ErrorBar dataKey="pv" />
      </Scatter>
    </ComposedChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('ScatterChart vertical + numeric YAxis + implicit direction + root data', async ({ mount }) => {
  const component = await mount(
    <ScatterChart width={200} height={200} data={pageData} layout="vertical">
      <XAxis type="number" dataKey="uv" />
      <YAxis type="number" dataKey="amt" />
      <Scatter dataKey="uv">
        <ErrorBar dataKey="pv" />
      </Scatter>
    </ScatterChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('ScatterChart vertical + numeric YAxis + implicit direction + item data', async ({ mount }) => {
  const component = await mount(
    <ScatterChart width={200} height={200} layout="vertical">
      <XAxis type="number" dataKey="uv" />
      <YAxis type="number" dataKey="amt" />
      <Scatter dataKey="uv" data={pageData}>
        <ErrorBar dataKey="pv" />
      </Scatter>
    </ScatterChart>,
  );
  await expect(component).toHaveScreenshot();
});
