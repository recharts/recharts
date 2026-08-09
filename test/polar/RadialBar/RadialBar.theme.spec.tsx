import * as React from 'react';
import { describe, expect, it } from 'vitest';
import { Legend, RadialBar, RadialBarChart, RechartsThemeProvider } from '../../../src';
import { rechartsTestRender } from '../../helper/createSelectorTestCase';
import { assertNotNull } from '../../helper/assertNotNull';

const data = [{ name: 'A', value: 100 }];

const MyChart = ({ children }: { children?: React.ReactNode }) => (
  <RadialBarChart width={400} height={400} data={data}>
    {children}
  </RadialBarChart>
);

function getSector(container: ReturnType<typeof rechartsTestRender>['container']): SVGPathElement {
  const sector = container.querySelector<SVGPathElement>('.recharts-radial-bar-sector');
  assertNotNull(sector);
  return sector;
}

describe('RadialBar theme', () => {
  it('preserves the legacy appearance without a provider', () => {
    const { container } = rechartsTestRender(
      <MyChart>
        <RadialBar dataKey="value" isAnimationActive={false} />
      </MyChart>,
    );
    const sector = getSector(container);
    expect(sector.getAttribute('fill')).toBe(null);
    expect(sector.getAttribute('stroke')).toBe(null);
  });

  it('applies graphical item theme styles and preserves explicit props', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider
        value={{
          graphicalItems: [
            {
              fill: 'purple',
              stroke: 'teal',
              strokeWidth: 4,
              strokeOpacity: 0.3,
              strokeDasharray: '5 10',
              fillOpacity: 0.7,
            },
          ],
        }}
      >
        <MyChart>
          <RadialBar dataKey="value" isAnimationActive={false} fill="gold" strokeWidth={2} />
        </MyChart>
      </RechartsThemeProvider>,
    );
    const sector = getSector(container);
    expect(sector.getAttribute('fill')).toBe('gold');
    expect(sector.getAttribute('stroke')).toBe('teal');
    expect(sector.getAttribute('stroke-width')).toBe('2');
    expect(sector.getAttribute('stroke-opacity')).toBe('0.3');
    expect(sector.getAttribute('stroke-dasharray')).toBe('5 10');
    expect(sector.getAttribute('fill-opacity')).toBe('0.7');
  });

  it('applies all themed graphical item styles when props are omitted', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider
        value={{
          graphicalItems: [
            {
              fill: 'purple',
              stroke: 'teal',
              strokeWidth: 4,
              strokeOpacity: 0.3,
              strokeDasharray: '5 10',
              fillOpacity: 0.7,
            },
          ],
        }}
      >
        <MyChart>
          <RadialBar dataKey="value" isAnimationActive={false} />
        </MyChart>
      </RechartsThemeProvider>,
    );
    const sector = getSector(container);
    expect(sector.getAttribute('fill')).toBe('purple');
    expect(sector.getAttribute('stroke')).toBe('teal');
    expect(sector.getAttribute('stroke-width')).toBe('4');
    expect(sector.getAttribute('stroke-opacity')).toBe('0.3');
    expect(sector.getAttribute('stroke-dasharray')).toBe('5 10');
    expect(sector.getAttribute('fill-opacity')).toBe('0.7');
  });

  it('applies the themed fill to the Legend icon', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider value={{ graphicalItems: [{ fill: 'purple' }] }}>
        <MyChart>
          <RadialBar dataKey="value" isAnimationActive={false} />
          <Legend />
        </MyChart>
      </RechartsThemeProvider>,
    );
    const legendIcon = container.querySelector('.recharts-legend-icon');
    assertNotNull(legendIcon);
    expect(legendIcon.getAttribute('fill')).toBe('purple');
  });
});
