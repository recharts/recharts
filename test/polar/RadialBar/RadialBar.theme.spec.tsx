import * as React from 'react';
import { describe, expect, it } from 'vitest';
import { Legend, RadialBar, RadialBarChart, RechartsThemeProvider } from '../../../src';
import { rechartsTestRender } from '../../helper/createSelectorTestCase';
import { assertNotNull } from '../../helper/assertNotNull';

const data = [{ name: 'A', value: 100 }];

const MyChart = ({
  radialBarProps = {},
  children,
}: {
  radialBarProps?: Partial<React.ComponentProps<typeof RadialBar>>;
  children?: React.ReactNode;
}) => (
  <RadialBarChart width={400} height={400} data={data}>
    <RadialBar dataKey="value" isAnimationActive={false} {...radialBarProps} />
    {children}
  </RadialBarChart>
);

function getSector(container: ReturnType<typeof rechartsTestRender>['container']): SVGPathElement {
  const sector = container.querySelector<SVGPathElement>('.recharts-radial-bar-sector');
  assertNotNull(sector);
  return sector;
}

function getBackgroundSector(container: ReturnType<typeof rechartsTestRender>['container']): SVGPathElement {
  const sector = container.querySelector<SVGPathElement>('.recharts-radial-bar-background-sector');
  assertNotNull(sector);
  return sector;
}

describe('RadialBar theme', () => {
  it('preserves the legacy appearance without a provider', () => {
    const { container } = rechartsTestRender(<MyChart />);
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
        <MyChart radialBarProps={{ fill: 'gold', strokeWidth: 2 }} />
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
        <MyChart />
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
          <Legend />
        </MyChart>
      </RechartsThemeProvider>,
    );
    const legendIcon = container.querySelector('.recharts-legend-icon');
    assertNotNull(legendIcon);
    expect(legendIcon).toHaveAttribute('fill', 'purple');
  });

  it('applies the data-entry fill to the Legend icon when outside of a theme', () => {
    const dataWithFill = [
      { value: 1, fill: 'purple' },
      { value: 2, fill: 'gold' },
      { value: 3, fill: 'green' },
    ];
    const { container } = rechartsTestRender(
      <RadialBarChart width={400} height={400} data={dataWithFill}>
        <RadialBar dataKey="value" isAnimationActive={false} />
        <Legend />
      </RadialBarChart>,
    );
    const legendIcon = container.querySelectorAll('.recharts-legend-icon');
    expect(legendIcon).toHaveLength(3);
    expect(legendIcon[0]).toHaveAttribute('fill', 'purple');
    expect(legendIcon[1]).toHaveAttribute('fill', 'gold');
    expect(legendIcon[2]).toHaveAttribute('fill', 'green');
  });

  it('applies the data-entry fill to the Legend icon when inside a theme that applied a different color because more specific should win', () => {
    const dataWithFill = [
      { value: 1, fill: 'purple' },
      { value: 2, fill: 'gold' },
      { value: 3, fill: 'green' },
    ];
    const { container } = rechartsTestRender(
      <RechartsThemeProvider value={{ graphicalItems: [{ fill: 'red' }] }}>
        <RadialBarChart width={400} height={400} data={dataWithFill}>
          <RadialBar dataKey="value" isAnimationActive={false} />
          <Legend />
        </RadialBarChart>
      </RechartsThemeProvider>,
    );
    const legendIcon = container.querySelectorAll('.recharts-legend-icon');
    expect(legendIcon).toHaveLength(3);
    expect(legendIcon[0]).toHaveAttribute('fill', 'purple');
    expect(legendIcon[1]).toHaveAttribute('fill', 'gold');
    expect(legendIcon[2]).toHaveAttribute('fill', 'green');
  });

  describe('background', () => {
    it('preserves the legacy fill without a provider', () => {
      const { container } = rechartsTestRender(<MyChart radialBarProps={{ background: true }} />);
      expect(getBackgroundSector(container)).toHaveAttribute('fill', '#eee');
    });

    it('does not provide legacy styles when a provider has no background theme', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={{ graphicalItems: [] }}>
          <MyChart radialBarProps={{ background: true }} />
        </RechartsThemeProvider>,
      );
      expect(getBackgroundSector(container)).not.toHaveAttribute('fill');
    });

    it('applies all background theme properties when props are omitted', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider
          value={{
            graphicalItems: [],
            barBackground: {
              fill: 'teal',
              stroke: 'navy',
              strokeWidth: 3,
              strokeOpacity: 0.8,
              strokeDasharray: '5 10',
              fillOpacity: 0.6,
            },
          }}
        >
          <MyChart radialBarProps={{ background: true }} />
        </RechartsThemeProvider>,
      );
      const background = getBackgroundSector(container);
      expect(background).toHaveAttribute('fill', 'teal');
      expect(background).toHaveAttribute('stroke', 'navy');
      expect(background).toHaveAttribute('stroke-width', '3');
      expect(background).toHaveAttribute('stroke-opacity', '0.8');
      expect(background).toHaveAttribute('stroke-dasharray', '5 10');
      expect(background).toHaveAttribute('fill-opacity', '0.6');
    });

    it('prefers explicit background props over the theme', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider
          value={{
            graphicalItems: [],
            barBackground: {
              fill: 'teal',
              stroke: 'navy',
              strokeWidth: 3,
              strokeOpacity: 0.8,
              fillOpacity: 0.6,
            },
          }}
        >
          <MyChart radialBarProps={{ background: { fill: 'gold', strokeWidth: 2 } }} />
        </RechartsThemeProvider>,
      );
      const background = getBackgroundSector(container);
      expect(background).toHaveAttribute('fill', 'gold');
      expect(background).toHaveAttribute('stroke', 'navy');
      expect(background).toHaveAttribute('stroke-width', '2');
      expect(background).toHaveAttribute('stroke-opacity', '0.8');
      expect(background).toHaveAttribute('fill-opacity', '0.6');
    });
  });
});
