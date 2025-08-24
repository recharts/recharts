import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import { CartesianGrid, Scatter, ScatterChart, XAxis, YAxis, ZAxis } from '../../src';
import { SymbolType } from '../../src/util/types';

const allShapes: ReadonlyArray<SymbolType> = ['circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye'];

test('Scatter with type in data array', async ({ mount }) => {
  const component = await mount(
    <ScatterChart width={500} height={500}>
      <CartesianGrid />
      <XAxis type="category" dataKey="x" />
      <YAxis type="number" dataKey="y" />
      <ZAxis range={[0, 500]} dataKey="z" />
      <Scatter
        name="A school"
        data={allShapes.map((shape, index) => ({
          x: shape,
          y: 100 * index + 20,
          z: 500,
          // `type` in data becomes the symbol selector, same as `shape` prop is doing in Scatter
          type: shape,
          // all the properties below make it to the final SVG element
          fill: 'green',
          stroke: 'red',
          strokeWidth: 2,
          strokeDasharray: '3 3',
        }))}
        fill="#8884d8"
      />
    </ScatterChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('Scatter with shape prop', async ({ mount }) => {
  const component = await mount(
    <ScatterChart width={500} height={500}>
      <CartesianGrid />
      <XAxis type="category" dataKey="x" />
      <YAxis type="number" dataKey="y" />
      <ZAxis range={[0, 500]} dataKey="z" />
      {allShapes.map((shape, index) => (
        <Scatter
          key={shape}
          name="A school"
          shape={shape}
          data={[
            {
              x: shape,
              y: 100 * index + 20,
              z: 500,
              // all the properties below make it to the final SVG element
              fill: 'green',
              stroke: 'red',
              strokeWidth: 2,
              strokeDasharray: '3 3',
            },
          ]}
          fill="#8884d8"
        />
      ))}
    </ScatterChart>,
  );
  await expect(component).toHaveScreenshot();
});
