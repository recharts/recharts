import * as React from 'react';
import { describe, expect, it } from 'vitest';
import { PolarGrid, Radar, RadarChart, RechartsThemeProvider } from '../../src';
import { assertNotNull } from '../helper/assertNotNull';
import { rechartsTestRender } from '../helper/createSelectorTestCase';

const data = [
  { subject: 'A', value: 100 },
  { subject: 'B', value: 80 },
  { subject: 'C', value: 60 },
];

const MyChart = ({ children }: { children: React.ReactNode }) => (
  <RadarChart width={400} height={400} data={data}>
    <Radar dataKey="value" isAnimationActive={false} />
    {children}
  </RadarChart>
);

function getFirstAngleLine(container: HTMLElement): Element {
  const line = container.querySelector('.recharts-polar-grid-angle line');
  assertNotNull(line);
  return line;
}

function getFirstConcentricPolygon(container: HTMLElement): Element {
  const polygon = container.querySelector('.recharts-polar-grid-concentric-polygon');
  assertNotNull(polygon);
  return polygon;
}

describe('PolarGrid theme', () => {
  it('preserves the legacy appearance without a provider', () => {
    const { container } = rechartsTestRender(
      <MyChart>
        <PolarGrid />
      </MyChart>,
    );

    const line = getFirstAngleLine(container);
    expect(line).toHaveAttribute('stroke', '#ccc');
    expect(line).toHaveAttribute('stroke-width', '1');
    expect(line).not.toHaveAttribute('stroke-opacity');
    expect(line).not.toHaveAttribute('stroke-dasharray');

    const polygon = getFirstConcentricPolygon(container);
    expect(polygon).toHaveAttribute('stroke', '#ccc');
    expect(polygon).toHaveAttribute('stroke-width', '1');
    expect(polygon).toHaveAttribute('fill', 'none');
  });

  it('applies all grid styles from the theme', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider
        value={{
          graphicalItems: [],
          grid: {
            stroke: 'gold',
            strokeWidth: 2,
            strokeOpacity: 0.9,
            strokeDasharray: '1 2',
            fill: 'purple',
            fillOpacity: 0.5,
          },
        }}
      >
        <MyChart>
          <PolarGrid />
        </MyChart>
      </RechartsThemeProvider>,
    );

    const line = getFirstAngleLine(container);
    expect(line).toHaveAttribute('stroke', 'gold');
    expect(line).toHaveAttribute('stroke-width', '2');
    expect(line).toHaveAttribute('stroke-opacity', '0.9');
    expect(line).toHaveAttribute('stroke-dasharray', '1 2');

    const background = getFirstConcentricPolygon(container);
    expect(background).toHaveAttribute('fill', 'purple');
    expect(background).toHaveAttribute('fill-opacity', '0.5');
    expect(background).toHaveAttribute('stroke', 'gold');
    expect(background).toHaveAttribute('stroke-width', '2');
    expect(background).toHaveAttribute('stroke-opacity', '0.9');
    expect(background).toHaveAttribute('stroke-dasharray', '1 2');
  });

  it('lets explicit props override the theme while using themed values for omitted props', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider
        value={{
          graphicalItems: [],
          grid: {
            stroke: 'gold',
            strokeWidth: 2,
            strokeOpacity: 0.9,
            strokeDasharray: '1 2',
            fill: 'purple',
            fillOpacity: 0.5,
          },
        }}
      >
        <MyChart>
          <PolarGrid stroke="blue" fill="lime" />
        </MyChart>
      </RechartsThemeProvider>,
    );

    const line = getFirstAngleLine(container);
    expect(line).toHaveAttribute('stroke', 'blue');
    expect(line).toHaveAttribute('stroke-width', '2');
    expect(line).toHaveAttribute('stroke-opacity', '0.9');
    expect(line).toHaveAttribute('stroke-dasharray', '1 2');

    const background = getFirstConcentricPolygon(container);
    expect(background).toHaveAttribute('fill', 'lime');
    expect(background).toHaveAttribute('fill-opacity', '0.5');
  });
});
