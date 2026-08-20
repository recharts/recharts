import { describe, expect, it } from 'vitest';
import React from 'react';
import { PolarRadiusAxis, Radar, RadarChart, RechartsThemeProvider } from '../../src';
import { rechartsTestRender } from '../helper/createSelectorTestCase';
import { assertNotNull } from '../helper/assertNotNull';

const data = [
  { subject: 'A', value: 10 },
  { subject: 'B', value: 20 },
  { subject: 'C', value: 30 },
];

const MyChart = ({ children }: { children: React.ReactNode }) => (
  <RadarChart width={400} height={400} data={data}>
    <Radar dataKey="value" isAnimationActive={false} />
    {children}
  </RadarChart>
);

describe('PolarRadiusAxis theme', () => {
  it('preserves the legacy defaults without a provider', () => {
    const { container } = rechartsTestRender(
      <MyChart>
        <PolarRadiusAxis />
      </MyChart>,
    );
    const axisLine = container.querySelector('.recharts-polar-radius-axis-line');
    const tick = container.querySelector('.recharts-polar-radius-axis-tick-value');
    assertNotNull(axisLine);
    assertNotNull(tick);
    expect(axisLine).toHaveAttribute('stroke', '#ccc');
    // Ticks inherit stroke value from the axis line in the legacy system
    expect(tick).toHaveAttribute('fill', '#ccc');
  });

  it('applies axis and typography styles from the provider', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider
        value={{
          graphicalItems: [],
          axis: { stroke: 'rebeccapurple', strokeWidth: 3, strokeOpacity: 0.7, strokeDasharray: '4 2' },
          typography: { fontSize: 17, fontWeight: 'bold', color: 'rgb(200, 0, 0)' },
        }}
      >
        <MyChart>
          <PolarRadiusAxis />
        </MyChart>
      </RechartsThemeProvider>,
    );
    const axisLine = container.querySelector('.recharts-polar-radius-axis-line');
    const tick = container.querySelector('.recharts-polar-radius-axis-tick-value');
    assertNotNull(axisLine);
    assertNotNull(tick);
    expect(axisLine).toHaveAttribute('stroke', 'rebeccapurple');
    expect(axisLine).toHaveAttribute('stroke-width', '3');
    expect(axisLine).toHaveAttribute('stroke-opacity', '0.7');
    expect(axisLine).toHaveAttribute('stroke-dasharray', '4 2');
    expect(tick).toHaveAttribute('fill', 'rebeccapurple');
    expect(tick).toHaveStyle({ fontSize: '17px', fontWeight: 'bold' });
  });

  it('gives explicit props precedence and merges explicit text styles with the theme', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider
        value={{
          graphicalItems: [],
          axis: { stroke: 'rebeccapurple', strokeWidth: 3 },
          typography: { fontSize: 17, fontWeight: 'bold' },
        }}
      >
        <MyChart>
          <PolarRadiusAxis stroke="darkorange" strokeWidth={5} style={{ fontStyle: 'italic' }} />
        </MyChart>
      </RechartsThemeProvider>,
    );
    const axisLine = container.querySelector('.recharts-polar-radius-axis-line');
    const tick = container.querySelector('.recharts-polar-radius-axis-tick-value');
    assertNotNull(axisLine);
    assertNotNull(tick);
    expect(axisLine).toHaveAttribute('stroke', 'darkorange');
    expect(axisLine).toHaveAttribute('stroke-width', '5');
    expect(tick).toHaveAttribute('fill', 'darkorange');
    expect(tick).toHaveStyle({ fontSize: '17px', fontWeight: 'bold', fontStyle: 'italic' });
  });

  it('does not restore legacy styles when the provider has no axis slice', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider value={{ graphicalItems: [] }}>
        <MyChart>
          <PolarRadiusAxis />
        </MyChart>
      </RechartsThemeProvider>,
    );
    const axisLine = container.querySelector('.recharts-polar-radius-axis-line');
    const tick = container.querySelector('.recharts-polar-radius-axis-tick-value');
    assertNotNull(axisLine);
    assertNotNull(tick);
    expect(axisLine).not.toHaveAttribute('stroke');
    // ticks still have fill leftover
    expect(tick).not.toHaveAttribute('fill');
  });
});
