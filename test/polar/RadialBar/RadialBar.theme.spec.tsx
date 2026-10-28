import * as React from 'react';
import { describe, expect, it, test, vi } from 'vitest';
import { fireEvent } from '@testing-library/react';
import { Cell, Legend, RadialBar, RadialBarChart, RechartsThemeProvider, Tooltip } from '../../../src';
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

  it('ignores the graphical item theme colors, and keeps the other theme styles, when explicit colors are present', () => {
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
    expect(sector.getAttribute('stroke')).toBe(null);
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

  describe('data entry styles', () => {
    const theme = { graphicalItems: [{ fill: 'purple', stroke: 'indigo' }] };

    function getTooltipItem(container: Element): HTMLElement {
      const tooltipItem = container.querySelector<HTMLElement>('.recharts-tooltip-item');
      assertNotNull(tooltipItem);
      return tooltipItem;
    }

    function getLegendIconFills(container: Element): Array<string | null> {
      return Array.from(container.querySelectorAll('.recharts-legend-icon')).map(icon => icon.getAttribute('fill'));
    }

    it('shows the RadialBar fill in the tooltip when the entry only has a stroke', () => {
      const { container } = rechartsTestRender(
        <RadialBarChart width={400} height={400} data={[{ name: 'A', value: 1, stroke: 'lime' }]}>
          <RadialBar dataKey="value" fill="#123456" isAnimationActive={false} />
          <Tooltip defaultIndex={0} />
        </RadialBarChart>,
      );

      const sector = getSector(container);
      expect(sector).toHaveAttribute('fill', '#123456');
      expect(sector).toHaveAttribute('stroke', 'lime');
      expect(getTooltipItem(container)).toHaveStyle({ color: 'rgb(18, 52, 86)' });
    });

    it('shows the RadialBar fill in the tooltip when the entry only has a stroke, with a theme', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <RadialBarChart width={400} height={400} data={[{ name: 'A', value: 1, stroke: 'lime' }]}>
            <RadialBar dataKey="value" fill="#123456" isAnimationActive={false} />
            <Tooltip defaultIndex={0} />
          </RadialBarChart>
        </RechartsThemeProvider>,
      );

      const sector = getSector(container);
      expect(sector).toHaveAttribute('fill', '#123456');
      expect(sector).toHaveAttribute('stroke', 'lime');
      expect(getTooltipItem(container)).toHaveStyle({ color: 'rgb(18, 52, 86)' });
    });

    it('ignores the entry color key in the tooltip, because it does not paint the sector', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <RadialBarChart width={400} height={400} data={[{ name: 'A', value: 1, color: 'blue' }]}>
            <RadialBar dataKey="value" isAnimationActive={false} />
            <Tooltip defaultIndex={0} />
          </RadialBarChart>
        </RechartsThemeProvider>,
      );

      expect(getSector(container)).toHaveAttribute('fill', 'purple');
      expect(getTooltipItem(container)).toHaveStyle({ color: 'rgb(128, 0, 128)' });
    });

    it('shows the inline style fill of the entry in the tooltip and Legend, because it wins over the fill', () => {
      const { container } = rechartsTestRender(
        <RadialBarChart width={400} height={400} data={[{ name: 'A', value: 1, fill: 'blue', style: { fill: 'red' } }]}>
          <RadialBar dataKey="value" isAnimationActive={false} />
          <Tooltip defaultIndex={0} />
          <Legend />
        </RadialBarChart>,
      );

      const sector = getSector(container);
      expect(sector).toHaveAttribute('fill', 'blue');
      expect(sector).toHaveStyle({ fill: 'rgb(255, 0, 0)' });
      expect(getTooltipItem(container)).toHaveStyle({ color: 'rgb(255, 0, 0)' });
      expect(getLegendIconFills(container)).toEqual(['red']);
    });

    it('shows the inline style stroke of a stroke-only entry in the Legend', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <RadialBarChart
            width={400}
            height={400}
            data={[{ name: 'A', value: 1, stroke: 'lime', style: { stroke: 'red' } }]}
          >
            <RadialBar dataKey="value" isAnimationActive={false} />
            <Legend />
          </RadialBarChart>
        </RechartsThemeProvider>,
      );

      expect(getSector(container)).toHaveStyle({ stroke: 'rgb(255, 0, 0)' });
      expect(getLegendIconFills(container)).toEqual(['red']);
    });

    it('shows the Cell fill in the tooltip', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <RadialBarChart width={400} height={400} data={[{ name: 'A', value: 1 }]}>
            <RadialBar dataKey="value" isAnimationActive={false}>
              <Cell fill="#123456" />
            </RadialBar>
            <Tooltip defaultIndex={0} />
          </RadialBarChart>
        </RechartsThemeProvider>,
      );

      expect(getSector(container)).toHaveAttribute('fill', '#123456');
      expect(getTooltipItem(container)).toHaveStyle({ color: 'rgb(18, 52, 86)' });
    });

    it('shows the color of each sector in the Legend, with a theme', () => {
      const dataWithColors = [
        { name: 'A', value: 1, fill: 'gold' },
        { name: 'B', value: 2, stroke: 'lime' },
        { name: 'C', value: 3 },
      ];
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <RadialBarChart width={400} height={400} data={dataWithColors}>
            <RadialBar dataKey="value" isAnimationActive={false} />
            <Legend />
          </RadialBarChart>
        </RechartsThemeProvider>,
      );

      const sectors = container.querySelectorAll('.recharts-radial-bar-sector');
      expect(sectors[1]).not.toHaveAttribute('fill');
      expect(sectors[1]).toHaveAttribute('stroke', 'lime');
      expect(sectors[2]).toHaveAttribute('fill', 'purple');
      expect(getLegendIconFills(container)).toEqual(['gold', 'lime', 'purple']);
    });

    it('shows the RadialBar fill in the Legend when the entry only has a stroke', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <RadialBarChart width={400} height={400} data={[{ name: 'A', value: 1, stroke: 'lime' }]}>
            <RadialBar dataKey="value" fill="#123456" isAnimationActive={false} />
            <Legend />
          </RadialBarChart>
        </RechartsThemeProvider>,
      );

      expect(getLegendIconFills(container)).toEqual(['#123456']);
    });

    it('shows the Cell fill in the Legend', () => {
      const { container } = rechartsTestRender(
        <RadialBarChart
          width={400}
          height={400}
          data={[
            { name: 'A', value: 1 },
            { name: 'B', value: 2 },
          ]}
        >
          <RadialBar dataKey="value" fill="gold" isAnimationActive={false}>
            <Cell fill="#123456" />
          </RadialBar>
          <Legend />
        </RadialBarChart>,
      );

      expect(getLegendIconFills(container)).toEqual(['#123456', 'gold']);
    });

    it('does not render the entry id on the sector or its background', () => {
      const onClick = vi.fn();
      const { container } = rechartsTestRender(
        <RadialBarChart
          width={400}
          height={400}
          data={[
            { name: 'A', value: 1, id: 'entry-a' },
            { name: 'B', value: 2, id: 'entry-b' },
          ]}
        >
          <RadialBar dataKey="value" background isAnimationActive={false} onClick={onClick} />
        </RadialBarChart>,
      );

      expect(container.querySelectorAll('.recharts-radial-bar-sector')).toHaveLength(2);
      expect(container.querySelectorAll('[id="entry-a"], [id="entry-b"]')).toHaveLength(0);

      fireEvent.click(getSector(container));
      expect(onClick).toHaveBeenCalledTimes(1);
      expect(onClick.mock.calls[0][0].payload).toEqual({ name: 'A', value: 1, id: 'entry-a' });
    });

    it('does not apply the entry styles to the background', () => {
      const entry = {
        name: 'A',
        value: 1,
        fill: 'gold',
        stroke: 'lime',
        strokeWidth: 5,
        opacity: 0.5,
        'data-testid': 'entry-a',
      };
      const { container } = rechartsTestRender(
        <RadialBarChart width={400} height={400} data={[entry]}>
          <RadialBar dataKey="value" background isAnimationActive={false} />
        </RadialBarChart>,
      );

      const sector = getSector(container);
      expect(sector).toHaveAttribute('fill', 'gold');
      expect(sector).toHaveAttribute('stroke', 'lime');
      expect(sector).toHaveAttribute('stroke-width', '5');
      expect(sector).toHaveAttribute('opacity', '0.5');

      const background = getBackgroundSector(container);
      expect(background).toHaveAttribute('fill', '#eee');
      expect(background).not.toHaveAttribute('stroke');
      expect(background).not.toHaveAttribute('stroke-width');
      expect(background).not.toHaveAttribute('opacity');
      expect(background).not.toHaveAttribute('data-testid');
    });

    /*
     * RadialBar renders the background with the computed geometry as the shape option,
     * so a custom background function or element is never used.
     * https://github.com/recharts/recharts/issues/2535
     */
    test.fails('RadialBar with custom function background receives the entry name and payload', () => {
      const background = vi.fn((_props: unknown) => <path />);
      const entry = { name: 'A', value: 1, stroke: 'lime' };
      rechartsTestRender(
        <RadialBarChart width={400} height={400} data={[entry]}>
          <RadialBar dataKey="value" background={background} isAnimationActive={false} />
        </RadialBarChart>,
      );

      expect(background).toHaveBeenCalled();
      const props = background.mock.lastCall?.[0];
      expect(props).toMatchObject({ name: 'A', payload: entry });
      expect(props).not.toHaveProperty('stroke');
    });
  });
});
