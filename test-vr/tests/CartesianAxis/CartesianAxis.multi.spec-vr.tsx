import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import { CartesianAxis, Label, Surface } from '../../../src';
import { ticks } from '../../../storybook/stories/data';

test('CartesianAxis Multiple Axes', async ({ mount }) => {
  const [surfaceWidth, surfaceHeight] = [600, 300];
  const component = await mount(
    <Surface
      width={surfaceWidth}
      height={surfaceHeight}
      viewBox={{
        x: 0,
        y: 0,
        width: surfaceWidth,
        height: surfaceHeight,
      }}
    >
      <CartesianAxis
        orientation="bottom"
        y={100}
        width={400}
        height={50}
        viewBox={{
          x: 0,
          y: 0,
          width: 500,
          height: 500,
        }}
        ticks={ticks}
        label="test"
      >
        <Label>测试</Label>
      </CartesianAxis>
      <CartesianAxis
        orientation="top"
        y={200}
        width={400}
        height={50}
        viewBox={{
          x: 0,
          y: 0,
          width: 500,
          height: 500,
        }}
        ticks={ticks}
      />
      <CartesianAxis
        orientation="left"
        x={50}
        width={50}
        height={400}
        viewBox={{
          x: 0,
          y: 0,
          width: 500,
          height: 500,
        }}
        ticks={ticks}
      />
      <CartesianAxis
        orientation="right"
        x={150}
        width={50}
        height={400}
        viewBox={{
          x: 0,
          y: 0,
          width: 500,
          height: 500,
        }}
        ticks={ticks}
      />
    </Surface>,
  );
  await expect(component).toHaveScreenshot();
});
