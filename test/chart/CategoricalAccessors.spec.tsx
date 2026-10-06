import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { Area, ComposedChart, Line, Scatter, XAxis, YAxis } from '../../src';
import { DataKey } from '../../src/util/types';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { mockGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';

type DataPoint = {
  [key: string]: unknown;
  name: string;
  category: { name: string };
  value: number;
};

const data: ReadonlyArray<DataPoint> = ['A', 'B', 'A'].map((name, index) => ({
  name,
  category: { name },
  0: name,
  '': name,
  value: index + 1,
}));

const accessors: Array<{ name: string; dataKey: DataKey<DataPoint, string | number> }> = [
  { name: 'flat key', dataKey: 'name' },
  { name: 'nested key', dataKey: 'category.name' },
  { name: 'function', dataKey: entry => entry.category.name },
  { name: 'numeric zero key', dataKey: 0 },
  { name: 'empty string key', dataKey: '' },
];

describe.each(['line', 'area', 'scatter'] as const)('%s with categorical accessors', graphicalItem => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 10, height: 10 });
  });

  describe.each(['horizontal', 'vertical'] as const)('%s layout', layout => {
    describe.each([false, true])('allowDuplicatedCategory=%s', allowDuplicatedCategory => {
      it.each(accessors)('preserves all data points with $name', ({ dataKey }) => {
        const horizontal = layout === 'horizontal';
        const renderTestCase = createSelectorTestCase(({ children }) => (
          <ComposedChart width={500} height={300} data={data} layout={layout}>
            <XAxis
              type={horizontal ? 'category' : 'number'}
              dataKey={horizontal ? dataKey : undefined}
              allowDuplicatedCategory={allowDuplicatedCategory}
            />
            <YAxis
              type={horizontal ? 'number' : 'category'}
              dataKey={horizontal ? undefined : dataKey}
              allowDuplicatedCategory={allowDuplicatedCategory}
            />
            {graphicalItem === 'line' && <Line dataKey="value" isAnimationActive={false} dot />}
            {graphicalItem === 'area' && <Area dataKey="value" isAnimationActive={false} dot />}
            {graphicalItem === 'scatter' && <Scatter dataKey="value" isAnimationActive={false} />}
            {children}
          </ComposedChart>
        ));

        const { container, rerenderSameComponent } = renderTestCase();
        const assertPoints = (): void => {
          const dots = container.querySelectorAll(
            graphicalItem === 'scatter'
              ? '.recharts-scatter-symbol .recharts-symbols'
              : `.recharts-${graphicalItem}-dot`,
          );
          expect(dots).toHaveLength(3);
          const coordinates = Array.from(dots, dot => Number(dot.getAttribute(horizontal ? 'cx' : 'cy')));
          expect(coordinates[0]).not.toBe(coordinates[1]);
          if (allowDuplicatedCategory) {
            expect(coordinates[0]).not.toBe(coordinates[2]);
          } else {
            expect(coordinates[0]).toBe(coordinates[2]);
          }
        };

        assertPoints();
        rerenderSameComponent();
        assertPoints();
      });
    });
  });
});
