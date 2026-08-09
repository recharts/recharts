import { describe, expect, it } from 'vitest';
import React from 'react';
import { Pie, PieChart, RechartsThemeProvider } from '../../../src';
import { rechartsTestRender } from '../../helper/createSelectorTestCase';
import { assertNotNull } from '../../helper/assertNotNull';

const data = [
  { name: 'A', value: 100 },
  { name: 'B', value: 200 },
  { name: 'C', value: 300 },
];

const MyChart = ({ children }: { children: React.ReactNode }) => (
  <PieChart width={400} height={400}>
    {children}
  </PieChart>
);

function getSector(container: HTMLElement, index: number): Element {
  const sector = container.querySelectorAll('.recharts-pie-sector path.recharts-sector')[index];
  assertNotNull(sector);
  return sector;
}

describe('Pie theme', () => {
  it('preserves the legacy appearance without a provider', () => {
    const { container } = rechartsTestRender(
      <MyChart>
        <Pie data={data} dataKey="value" isAnimationActive={false} />
      </MyChart>,
    );

    const sector = getSector(container, 0);
    expect(sector).toHaveAttribute('fill', '#808080');
    expect(sector).toHaveAttribute('stroke', '#fff');
    expect(sector).not.toHaveAttribute('fill-opacity');
    expect(sector).not.toHaveAttribute('stroke-width');
    expect(sector).not.toHaveAttribute('stroke-opacity');
    expect(sector).not.toHaveAttribute('stroke-dasharray');
  });

  it('applies graphical-item theme styles by sector index', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider
        value={{
          graphicalItems: [
            {
              fill: 'red',
              fillOpacity: 0.4,
              stroke: 'navy',
              strokeOpacity: 0.5,
              strokeWidth: 2,
              strokeDasharray: '3 2',
            },
            {
              fill: 'green',
              fillOpacity: 0.6,
              stroke: 'purple',
              strokeOpacity: 0.7,
              strokeWidth: 4,
              strokeDasharray: '5 1',
            },
          ],
        }}
      >
        <MyChart>
          <Pie data={data} dataKey="value" isAnimationActive={false} />
        </MyChart>
      </RechartsThemeProvider>,
    );

    const firstSector = getSector(container, 0);
    expect(firstSector).toHaveAttribute('fill', 'red');
    expect(firstSector).toHaveAttribute('fill-opacity', '0.4');
    expect(firstSector).toHaveAttribute('stroke', 'navy');
    expect(firstSector).toHaveAttribute('stroke-opacity', '0.5');
    expect(firstSector).toHaveAttribute('stroke-width', '2');
    expect(firstSector).toHaveAttribute('stroke-dasharray', '3 2');

    const secondSector = getSector(container, 1);
    expect(secondSector).toHaveAttribute('fill', 'green');
    expect(secondSector).toHaveAttribute('fill-opacity', '0.6');
    expect(secondSector).toHaveAttribute('stroke', 'purple');
    expect(secondSector).toHaveAttribute('stroke-opacity', '0.7');
    expect(secondSector).toHaveAttribute('stroke-width', '4');
    expect(secondSector).toHaveAttribute('stroke-dasharray', '5 1');

    expect(getSector(container, 2)).toHaveAttribute('fill', 'red');
  });

  it('lets explicit Pie props override the graphical-item theme', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider
        value={{
          graphicalItems: [
            {
              fill: 'red',
              fillOpacity: 0.1,
              stroke: 'navy',
              strokeOpacity: 0.2,
              strokeWidth: 2,
              strokeDasharray: '3 2',
            },
          ],
        }}
      >
        <MyChart>
          <Pie
            data={data}
            dataKey="value"
            fill="gold"
            fillOpacity={0.8}
            stroke="blue"
            strokeOpacity={0.9}
            strokeWidth={3}
            strokeDasharray="7 1"
            isAnimationActive={false}
          />
        </MyChart>
      </RechartsThemeProvider>,
    );

    for (let index = 0; index < data.length; index++) {
      const sector = getSector(container, index);
      expect(sector).toHaveAttribute('fill', 'gold');
      expect(sector).toHaveAttribute('fill-opacity', '0.8');
      expect(sector).toHaveAttribute('stroke', 'blue');
      expect(sector).toHaveAttribute('stroke-opacity', '0.9');
      expect(sector).toHaveAttribute('stroke-width', '3');
      expect(sector).toHaveAttribute('stroke-dasharray', '7 1');
    }
  });

  it('merges explicit Pie fields with omitted fields from the indexed theme', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider
        value={{
          graphicalItems: [
            {
              fill: 'red',
              fillOpacity: 0.4,
              stroke: 'navy',
              strokeWidth: 2,
            },
            {
              fill: 'green',
              fillOpacity: 0.6,
              stroke: 'purple',
              strokeWidth: 4,
            },
          ],
        }}
      >
        <MyChart>
          <Pie data={data} dataKey="value" fill="gold" strokeWidth={5} isAnimationActive={false} />
        </MyChart>
      </RechartsThemeProvider>,
    );

    const firstSector = getSector(container, 0);
    expect(firstSector).toHaveAttribute('fill', 'gold');
    expect(firstSector).toHaveAttribute('fill-opacity', '0.4');
    expect(firstSector).toHaveAttribute('stroke', 'navy');
    expect(firstSector).toHaveAttribute('stroke-width', '5');

    const secondSector = getSector(container, 1);
    expect(secondSector).toHaveAttribute('fill', 'gold');
    expect(secondSector).toHaveAttribute('fill-opacity', '0.6');
    expect(secondSector).toHaveAttribute('stroke', 'purple');
    expect(secondSector).toHaveAttribute('stroke-width', '5');
  });
});
