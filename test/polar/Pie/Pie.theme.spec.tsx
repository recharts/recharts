import { describe, expect, it } from 'vitest';
import React from 'react';
import {
  Cell,
  emptyTheme,
  Legend,
  Pie,
  PieChart,
  PieLabelRenderProps,
  RechartsTheme,
  RechartsThemeProvider,
  Tooltip,
} from '../../../src';
import { rechartsTestRender } from '../../helper/createSelectorTestCase';
import { assertNotNull } from '../../helper/assertNotNull';
import { showTooltip } from '../../component/Tooltip/tooltipTestHelpers';
import { pieChartMouseHoverTooltipSelector } from '../../component/Tooltip/tooltipMouseHoverSelectors';

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

  it('ignores the indexed theme colors, and keeps the other theme styles, when explicit Pie colors are present', () => {
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

    [getSector(container, 0), getSector(container, 1)].forEach(sector => {
      expect(sector).toHaveAttribute('fill', 'gold');
      expect(sector).not.toHaveAttribute('stroke');
      expect(sector).toHaveAttribute('stroke-width', '5');
    });
    expect(getSector(container, 0)).toHaveAttribute('fill-opacity', '0.4');
    expect(getSector(container, 1)).toHaveAttribute('fill-opacity', '0.6');
  });

  describe('Legend and Tooltip colors', () => {
    const strokeOnlyTheme: RechartsTheme = { graphicalItems: [{ stroke: 'purple' }] };

    function getLegendIconColors(container: HTMLElement): ReadonlyArray<string | null> {
      return Array.from(container.querySelectorAll('.recharts-legend-item .recharts-legend-icon')).map(icon =>
        icon.getAttribute('fill'),
      );
    }

    function getTooltipItemColor(container: HTMLElement): string {
      showTooltip(container, pieChartMouseHoverTooltipSelector);
      const item = container.querySelector<HTMLElement>('.recharts-tooltip-item');
      assertNotNull(item);
      return item.style.color;
    }

    function renderThemed(theme: RechartsTheme, pie: React.ReactNode) {
      return rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <MyChart>
            {pie}
            <Legend />
            <Tooltip />
          </MyChart>
        </RechartsThemeProvider>,
      );
    }

    it('keeps the legacy gray without a provider', () => {
      const { container } = rechartsTestRender(
        <MyChart>
          <Pie data={data} dataKey="value" isAnimationActive={false} />
          <Legend />
          <Tooltip />
        </MyChart>,
      );

      expect(getLegendIconColors(container)).toEqual(['#808080', '#808080', '#808080']);
      expect(getTooltipItemColor(container)).toBe('rgb(128, 128, 128)');
    });

    it('has no color with the empty theme', () => {
      const { container } = renderThemed(emptyTheme, <Pie data={data} dataKey="value" isAnimationActive={false} />);

      expect(getSector(container, 0)).not.toHaveAttribute('fill');
      expect(getLegendIconColors(container)).toEqual([null, null, null]);
      expect(getTooltipItemColor(container)).toBe('');
    });

    it('uses the explicit Pie stroke with the empty theme', () => {
      const { container } = renderThemed(
        emptyTheme,
        <Pie data={data} dataKey="value" stroke="red" isAnimationActive={false} />,
      );

      expect(getLegendIconColors(container)).toEqual(['red', 'red', 'red']);
      expect(getTooltipItemColor(container)).toBe('red');
    });

    it('uses the theme stroke when the theme has no fill', () => {
      const { container } = renderThemed(
        strokeOnlyTheme,
        <Pie data={data} dataKey="value" isAnimationActive={false} />,
      );

      expect(getLegendIconColors(container)).toEqual(['purple', 'purple', 'purple']);
      expect(getTooltipItemColor(container)).toBe('purple');
    });

    it('uses the explicit Pie stroke instead of the theme stroke', () => {
      const { container } = renderThemed(
        strokeOnlyTheme,
        <Pie data={data} dataKey="value" stroke="red" isAnimationActive={false} />,
      );

      expect(getLegendIconColors(container)).toEqual(['red', 'red', 'red']);
      expect(getTooltipItemColor(container)).toBe('red');
    });

    it('prefers the fill over the stroke', () => {
      const { container } = renderThemed(
        { graphicalItems: [{ fill: 'red', stroke: 'navy' }, { fill: 'green' }] },
        <Pie data={data} dataKey="value" isAnimationActive={false} />,
      );

      expect(getLegendIconColors(container)).toEqual(['red', 'green', 'red']);
      expect(getTooltipItemColor(container)).toBe('red');
    });

    it('uses the stroke when the fill is none', () => {
      const { container } = renderThemed(
        { graphicalItems: [{ fill: 'none', stroke: 'navy' }] },
        <Pie data={data} dataKey="value" isAnimationActive={false} />,
      );

      expect(getLegendIconColors(container)).toEqual(['navy', 'navy', 'navy']);
      expect(getTooltipItemColor(container)).toBe('navy');
    });

    it('follows the colors of Cells and data entries, without the legacy gray', () => {
      const { container } = renderThemed(
        { graphicalItems: [{ fill: 'red' }] },
        <Pie
          data={[
            { name: 'A', value: 100 },
            { name: 'B', value: 200, stroke: 'orange' },
            { name: 'C', value: 300 },
          ]}
          dataKey="value"
          isAnimationActive={false}
        >
          <Cell stroke="blue" />
        </Pie>,
      );

      expect(getSector(container, 0)).not.toHaveAttribute('fill');
      expect(getLegendIconColors(container)).toEqual(['blue', 'orange', 'red']);
      expect(getTooltipItemColor(container)).toBe('blue');
    });
  });
});

describe('Pie data entry styles on labels (issue #7974)', () => {
  const styledData = [
    {
      name: 'A',
      value: 100,
      id: 'entry-a',
      fill: '#ff0000',
      opacity: 0.4,
      strokeWidth: 7,
      strokeDasharray: '1 1',
      'data-testid': 'datum-a',
    },
    { name: 'B', value: 200 },
  ];

  function getLabelLine(container: HTMLElement, index: number): Element {
    const line = container.querySelectorAll('.recharts-pie-label-line')[index];
    assertNotNull(line);
    return line;
  }

  function getLabelText(container: HTMLElement, index: number): Element {
    const text = container.querySelectorAll('.recharts-pie-label-text')[index];
    assertNotNull(text);
    return text;
  }

  it('spreads entry styles on the sector, but removes the entry id everywhere', () => {
    const { container } = rechartsTestRender(
      <MyChart>
        <Pie data={styledData} dataKey="value" label labelLine isAnimationActive={false} />
      </MyChart>,
    );

    // entry props still spread on the graphical item itself
    const sector = getSector(container, 0);
    expect(sector).toHaveAttribute('fill', '#ff0000');
    expect(sector).toHaveAttribute('opacity', '0.4');
    expect(sector).toHaveAttribute('stroke-width', '7');
    expect(sector).toHaveAttribute('stroke-dasharray', '1 1');

    // id is removed from the sector, the label line and the label text
    expect(sector).not.toHaveAttribute('id');
    expect(container.querySelector('#entry-a')).toBeNull();
  });

  it('keeps only the entry color on the label line and the label text', () => {
    const { container } = rechartsTestRender(
      <MyChart>
        <Pie data={styledData} dataKey="value" label labelLine isAnimationActive={false} />
      </MyChart>,
    );

    const line = getLabelLine(container, 0);
    expect(line).toHaveAttribute('stroke', '#ff0000');
    expect(line).not.toHaveAttribute('opacity');
    expect(line).not.toHaveAttribute('stroke-width');
    expect(line).not.toHaveAttribute('stroke-dasharray');
    expect(line).not.toHaveAttribute('data-testid');

    const text = getLabelText(container, 0);
    expect(text).toHaveAttribute('fill', '#ff0000');
    expect(text).not.toHaveAttribute('opacity');
    expect(text).not.toHaveAttribute('stroke-width');
    expect(text).not.toHaveAttribute('stroke-dasharray');
    expect(text).not.toHaveAttribute('data-testid');
  });

  it('still passes geometry, name and payload to a custom label renderer', () => {
    const captured: PieLabelRenderProps[] = [];
    rechartsTestRender(
      <MyChart>
        <Pie
          data={styledData}
          dataKey="value"
          label={(props: PieLabelRenderProps) => {
            captured.push(props);
            return <text>{props.name}</text>;
          }}
          isAnimationActive={false}
        />
      </MyChart>,
    );

    expect(captured.length).toBeGreaterThan(0);
    const first = captured[0];
    expect(first.name).toBe('A');
    expect(first.cx).toEqual(expect.any(Number));
    expect(first.cy).toEqual(expect.any(Number));
    expect(first.outerRadius).toEqual(expect.any(Number));
    expect(first.percent).toEqual(expect.any(Number));
    expect(first.payload).toMatchObject({ name: 'A', value: 100, id: 'entry-a' });
  });

  it('keeps only the entry color on labels when a theme is present', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider value={{ graphicalItems: [{ fill: 'purple', stroke: 'indigo' }] }}>
        <MyChart>
          <Pie data={styledData} dataKey="value" label labelLine isAnimationActive={false} />
        </MyChart>
      </RechartsThemeProvider>,
    );

    expect(getLabelLine(container, 0)).toHaveAttribute('stroke', '#ff0000');
    expect(getLabelLine(container, 0)).not.toHaveAttribute('stroke-width');
    expect(getLabelText(container, 0)).toHaveAttribute('fill', '#ff0000');
    expect(getLabelText(container, 0)).not.toHaveAttribute('opacity');
    // unthemed entry follows the theme color
    expect(getLabelLine(container, 1)).toHaveAttribute('stroke', 'purple');
    expect(getLabelText(container, 1)).toHaveAttribute('fill', 'purple');
  });
});
