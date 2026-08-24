import React from 'react';
import { describe, expect, it } from 'vitest';
import { Bar, BarChart, RechartsThemeProvider, Tooltip } from '../../src';
import { rechartsTestRender } from '../helper/createSelectorTestCase';
import { assertNotNull } from '../helper/assertNotNull';

const mockData = [
  { name: 'Page A', value: 400 },
  { name: 'Page B', value: 300 },
  { name: 'Page C', value: 200 },
];

const MyChart = ({ children }: { children: React.ReactNode }) => (
  <BarChart width={400} height={300} data={mockData}>
    <Bar dataKey="value" isAnimationActive={false} />
    {children}
  </BarChart>
);

function getCursor(container: ReturnType<typeof rechartsTestRender>['container']): Element {
  const cursor = container.querySelector('.recharts-tooltip-cursor');
  assertNotNull(cursor);
  return cursor;
}

describe('Cursor theme', () => {
  it('preserves the legacy cursor style without a provider', () => {
    const { container } = rechartsTestRender(
      <MyChart>
        <Tooltip defaultIndex={0} isAnimationActive={false} />
      </MyChart>,
    );

    const cursor = getCursor(container);
    expect(cursor).toHaveAttribute('stroke', '#ccc');
    expect(cursor).toHaveAttribute('fill', '#ccc');
  });

  it('does not reintroduce legacy cursor styles when a provider omits the cursor slice', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider value={{ graphicalItems: [] }}>
        <MyChart>
          <Tooltip defaultIndex={0} isAnimationActive={false} />
        </MyChart>
      </RechartsThemeProvider>,
    );

    expect(getCursor(container)).not.toHaveAttribute('stroke', '#ccc');
  });

  it('applies every cursor style from the theme', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider
        value={{
          graphicalItems: [],
          cursor: {
            fill: 'gold',
            fillOpacity: 0.35,
            stroke: 'purple',
            strokeDasharray: '3 4',
            strokeOpacity: 0.7,
            strokeWidth: 3,
          },
        }}
      >
        <MyChart>
          <Tooltip defaultIndex={0} isAnimationActive={false} />
        </MyChart>
      </RechartsThemeProvider>,
    );

    const cursor = getCursor(container);
    expect(cursor).toHaveAttribute('fill', 'gold');
    expect(cursor).toHaveAttribute('fill-opacity', '0.35');
    expect(cursor).toHaveAttribute('stroke', 'purple');
    expect(cursor).toHaveAttribute('stroke-dasharray', '3 4');
    expect(cursor).toHaveAttribute('stroke-opacity', '0.7');
    expect(cursor).toHaveAttribute('stroke-width', '3');
  });

  it('prefers explicit cursor styles while retaining non-conflicting themed fields', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider
        value={{
          graphicalItems: [],
          cursor: {
            fill: 'gold',
            fillOpacity: 0.35,
            stroke: 'purple',
            strokeDasharray: '3 4',
            strokeOpacity: 0.7,
            strokeWidth: 3,
          },
        }}
      >
        <MyChart>
          <Tooltip
            cursor={{ fill: 'blue', stroke: 'red', strokeWidth: 5 }}
            defaultIndex={0}
            isAnimationActive={false}
          />
        </MyChart>
      </RechartsThemeProvider>,
    );

    const cursor = getCursor(container);
    expect(cursor).toHaveAttribute('fill', 'blue');
    expect(cursor).toHaveAttribute('fill-opacity', '0.35');
    expect(cursor).toHaveAttribute('stroke', 'red');
    expect(cursor).toHaveAttribute('stroke-dasharray', '3 4');
    expect(cursor).toHaveAttribute('stroke-opacity', '0.7');
    expect(cursor).toHaveAttribute('stroke-width', '5');
  });

  it('does not apply the theme to a custom cursor element', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider value={{ graphicalItems: [], cursor: { stroke: 'purple' } }}>
        <MyChart>
          <Tooltip
            cursor={<path d="M0 0" data-testid="custom-cursor" stroke="orange" />}
            defaultIndex={0}
            isAnimationActive={false}
          />
        </MyChart>
      </RechartsThemeProvider>,
    );

    expect(getCursor(container)).toHaveAttribute('stroke', 'orange');
  });
});
