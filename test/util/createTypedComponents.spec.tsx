import React, { ComponentType } from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Area, AreaChart, XAxis, YAxis, Scatter } from '../../src';
import { createTypedComponents } from '../../src/util/createTypedComponents';
import { expectAreaCurve } from '../helper/expectAreaCurve';

type ExampleDataPoint = {
  x: number;
  y: number;
  value: number;
  name: string;
};

const data: Array<ExampleDataPoint> = [
  { x: 10, y: 50, value: 100, name: 'a' },
  { x: 50, y: 50, value: 100, name: 'b' },
  { x: 90, y: 50, value: 100, name: 'c' },
  { x: 130, y: 50, value: 100, name: 'd' },
  { x: 170, y: 50, value: 100, name: 'e' },
];

describe('createTypedComponents', () => {
  it('should return the same components at runtime', () => {
    const { Area: TypedArea, XAxis: TypedXAxis } = createTypedComponents({ Area, XAxis });
    expect(TypedArea).toBe(Area);
    expect(TypedXAxis).toBe(XAxis);
  });

  it('should work with Area and XAxis in a chart', () => {
    // This test verifies runtime behavior matches standard usage
    const { Area: TypedArea, XAxis: TypedXAxis } = createTypedComponents<ExampleDataPoint>({ Area, XAxis });

    const { container } = render(
      <AreaChart data={data} width={400} height={400}>
        <TypedXAxis dataKey="name" />
        <TypedArea dataKey="value" />
      </AreaChart>,
    );

    expect(container.querySelector('.recharts-xAxis')).toBeInTheDocument();
    // Verify Area rendered
    expect(container.querySelector('.recharts-area')).toBeInTheDocument();
  });

  it('should allow typing Scatter correctly via the helper', () => {
    const { Scatter: TypedScatter } = createTypedComponents<ExampleDataPoint>({ Scatter });
    
    // This is a type-level check mostly, but ensuring runtime works too
    expect(TypedScatter).toBe(Scatter);
  });

  // Type-only tests would fail compilation if incorrect, which is implicit testing here.
  // We can simulate type checks with comments or just rely on the build step.
});
