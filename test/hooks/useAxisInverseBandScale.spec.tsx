import React from 'react';
import { describe, expect, it } from 'vitest';
import {
  Bar,
  BarChart,
  useXAxisInverseDataSnapScale,
  useXAxisInverseScale,
  useXAxisTicks,
  useYAxisInverseDataSnapScale,
  useYAxisInverseScale,
  useYAxisTicks,
  XAxis,
  YAxis,
} from '../../src';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';

const data = [
  { name: 'A', value: 10 },
  { name: 'B', value: 20 },
  { name: 'C', value: 30 },
];

function useXCategoryScales() {
  return {
    inverse: useXAxisInverseScale(),
    snap: useXAxisInverseDataSnapScale(),
    ticks: useXAxisTicks(),
  };
}

function useYCategoryScales() {
  return {
    inverse: useYAxisInverseScale(),
    snap: useYAxisInverseDataSnapScale(),
    ticks: useYAxisTicks(),
  };
}

describe('inverse scales on bar chart categories', () => {
  it.each([false, true])('snaps inside each horizontal band with reversed=%s', reversed => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="name" reversed={reversed} />
        <YAxis />
        <Bar dataKey="value" isAnimationActive={false} />
        {children}
      </BarChart>
    ));
    const { spy } = renderTestCase(useXCategoryScales);
    const result = spy.mock.lastCall?.[0];
    expect(result?.ticks).toHaveLength(3);
    expect(result?.inverse).toBeDefined();
    expect(result?.snap).toBeDefined();
    for (const tick of result?.ticks ?? []) {
      for (const offset of [-60, 0, 60]) {
        expect(result?.inverse?.(tick.coordinate + offset)).toBe(tick.value);
        expect(result?.snap?.(tick.coordinate + offset)).toBe(tick.value);
      }
    }
  });

  it.each([false, true])('snaps inside each vertical band with reversed=%s', reversed => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <BarChart width={600} height={600} data={data} layout="vertical">
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" reversed={reversed} />
        <Bar dataKey="value" isAnimationActive={false} />
        {children}
      </BarChart>
    ));
    const { spy } = renderTestCase(useYCategoryScales);
    const result = spy.mock.lastCall?.[0];
    expect(result?.ticks).toHaveLength(3);
    expect(result?.inverse).toBeDefined();
    expect(result?.snap).toBeDefined();
    for (const tick of result?.ticks ?? []) {
      for (const offset of [-60, 0, 60]) {
        expect(result?.inverse?.(tick.coordinate + offset)).toBe(tick.value);
        expect(result?.snap?.(tick.coordinate + offset)).toBe(tick.value);
      }
    }
  });
});
