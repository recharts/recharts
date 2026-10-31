import { describe, expect, it } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import { RechartsTheme, RechartsThemeProvider, SunburstChart, SunburstData, Tooltip } from '../../src';
import { emptyTheme } from '../../src/theme/emptyTheme';
import { lightTheme } from '../../src/theme/lightTheme';
import { showTooltip } from '../component/Tooltip/tooltipTestHelpers';
import { sunburstChartMouseHoverTooltipSelector } from '../component/Tooltip/tooltipMouseHoverSelectors';
import { assertNotNull } from '../helper/assertNotNull';

/*
 * Sectors render depth-first: A, A1, A2, B.
 */
const data: SunburstData = {
  name: 'root',
  value: 100,
  children: [
    {
      name: 'A',
      value: 60,
      children: [
        { name: 'A1', value: 30 },
        { name: 'A2', value: 30 },
      ],
    },
    { name: 'B', value: 40 },
  ],
};

const theme: RechartsTheme = {
  graphicalItems: [
    { fill: 'red', stroke: 'darkred' },
    { fill: 'green', stroke: 'darkgreen' },
  ],
  pageBackground: 'ivory',
  typography: { color: 'navy' },
};

function getSectors(container: Element) {
  return Array.from(container.querySelectorAll('.recharts-sector')).map(sector => ({
    fill: sector.getAttribute('fill'),
    stroke: sector.getAttribute('stroke'),
    strokeWidth: sector.getAttribute('stroke-width'),
  }));
}

function getFirstLabel(container: Element): SVGTextElement {
  const label = container.querySelector<SVGTextElement>('.recharts-sunburst text');
  assertNotNull(label);
  return label;
}

function renderSunburst(
  activeTheme: RechartsTheme | undefined,
  props: Partial<React.ComponentProps<typeof SunburstChart>> = {},
  children: React.ReactNode = null,
) {
  return render(
    <RechartsThemeProvider value={activeTheme}>
      <SunburstChart width={400} height={400} data={data} {...props}>
        {children}
      </SunburstChart>
    </RechartsThemeProvider>,
  );
}

const legacySector = { fill: '#333', stroke: '#FFF', strokeWidth: '2' };

describe('<SunburstChart /> theme', () => {
  it('keeps the legacy styles without a theme', () => {
    const { container } = renderSunburst(undefined);
    expect(getSectors(container)).toEqual([legacySector, legacySector, legacySector, legacySector]);
    const label = getFirstLabel(container);
    expect(label).toHaveAttribute('stroke', '#FFF');
    expect(label).toHaveAttribute('font-weight', 'bold');
    expect(label).toHaveAttribute('paint-order', 'stroke fill');
    expect(label.style.fill).toBe('black');
  });

  it('colors first-ring sectors by index, and descendants inherit their branch color', () => {
    const { container } = renderSunburst(theme);
    expect(getSectors(container).map(sector => sector.fill)).toEqual(['red', 'red', 'red', 'green']);
  });

  it('uses the palette of the built-in theme', () => {
    const { container } = renderSunburst(lightTheme);
    expect(getSectors(container).map(sector => sector.fill)).toEqual([
      lightTheme.graphicalItems[0]?.fill,
      lightTheme.graphicalItems[0]?.fill,
      lightTheme.graphicalItems[0]?.fill,
      lightTheme.graphicalItems[1]?.fill,
    ]);
  });

  it('paints separators in the page background color, with padding as the width', () => {
    const { container } = renderSunburst(theme, { padding: 3 });
    expect(getSectors(container).map(sector => [sector.stroke, sector.strokeWidth])).toEqual([
      ['ivory', '3'],
      ['ivory', '3'],
      ['ivory', '3'],
      ['ivory', '3'],
    ]);
  });

  it('falls back to the branch stroke for separators if the theme has no page background', () => {
    const { container } = renderSunburst({ ...theme, pageBackground: undefined });
    expect(getSectors(container).map(sector => sector.stroke)).toEqual(['darkred', 'darkred', 'darkred', 'darkgreen']);
  });

  it('paints separators and the label halo in chart.backgroundColor if the theme has no page background', () => {
    const { container } = renderSunburst({
      ...theme,
      pageBackground: undefined,
      chart: { backgroundColor: '#f8fafc' },
    });
    expect(getSectors(container).map(sector => sector.stroke)).toEqual(['#f8fafc', '#f8fafc', '#f8fafc', '#f8fafc']);
    expect(getFirstLabel(container)).toHaveAttribute('stroke', '#f8fafc');
  });

  it('prefers the page background over chart.backgroundColor', () => {
    const { container } = renderSunburst({ ...theme, chart: { backgroundColor: '#f8fafc' } });
    expect(getSectors(container).map(sector => sector.stroke)).toEqual(['ivory', 'ivory', 'ivory', 'ivory']);
    expect(getFirstLabel(container)).toHaveAttribute('stroke', 'ivory');
  });

  it('styles labels with typography and a halo in the page background color, without the legacy label styles', () => {
    const { container } = renderSunburst(theme);
    const label = getFirstLabel(container);
    expect(label.style.fill).toBe('navy');
    expect(label).toHaveAttribute('stroke', 'ivory');
    expect(label).toHaveAttribute('paint-order', 'stroke fill');
    expect(label).not.toHaveAttribute('font-weight');
    expect(label).not.toHaveAttribute('font-size');
  });

  it('lets explicit fill and stroke props override the theme', () => {
    const { container } = renderSunburst(theme, { fill: 'blue', stroke: 'orange' });
    expect(getSectors(container)).toEqual([
      { fill: 'blue', stroke: 'orange', strokeWidth: '2' },
      { fill: 'blue', stroke: 'orange', strokeWidth: '2' },
      { fill: 'blue', stroke: 'orange', strokeWidth: '2' },
      { fill: 'blue', stroke: 'orange', strokeWidth: '2' },
    ]);
  });

  it('lets explicit textOptions override the theme', () => {
    const { container } = renderSunburst(theme, { textOptions: { fill: 'crimson', stroke: 'black', fontSize: 10 } });
    const label = getFirstLabel(container);
    expect(label.style.fill).toBe('crimson');
    expect(label).toHaveAttribute('stroke', 'black');
    expect(label).toHaveAttribute('font-size', '10');
  });

  it('ignores the theme for sectors that define their own styles in data, and their children inherit the color', () => {
    const { container } = renderSunburst(theme, {
      data: {
        ...data,
        children: [
          { ...data.children?.[0], name: 'A', fill: 'blue' },
          { ...data.children?.[1], name: 'B' },
        ],
      },
    });
    expect(getSectors(container)).toEqual([
      { fill: 'blue', stroke: null, strokeWidth: '2' },
      { fill: 'blue', stroke: 'ivory', strokeWidth: '2' },
      { fill: 'blue', stroke: 'ivory', strokeWidth: '2' },
      { fill: 'green', stroke: 'ivory', strokeWidth: '2' },
    ]);
  });

  it('applies no colors at all with the empty theme', () => {
    const { container } = renderSunburst(emptyTheme);
    const unstyled = { fill: null, stroke: null, strokeWidth: '2' };
    expect(getSectors(container)).toEqual([unstyled, unstyled, unstyled, unstyled]);
    const label = getFirstLabel(container);
    expect(label).not.toHaveAttribute('stroke');
    expect(label).not.toHaveAttribute('font-weight');
  });

  describe('Tooltip', () => {
    function getTooltipItemColor(container: Element): string | undefined {
      const item = container.querySelector<HTMLElement>('.recharts-tooltip-item');
      assertNotNull(item);
      return item.style.color;
    }

    function hoverSector(container: Element, index: number) {
      const sector = container.querySelectorAll(sunburstChartMouseHoverTooltipSelector)[index];
      assertNotNull(sector);
      showTooltip(sector.parentElement ?? container, sunburstChartMouseHoverTooltipSelector);
    }

    it('uses the color of the hovered first-ring sector', () => {
      const { container } = renderSunburst(theme, {}, <Tooltip />);
      hoverSector(container, 3);
      expect(getTooltipItemColor(container)).toBe('green');
    });

    it('uses the inherited color of the hovered nested sector', () => {
      const { container } = renderSunburst(theme, {}, <Tooltip />);
      hoverSector(container, 1);
      expect(getTooltipItemColor(container)).toBe('red');
    });

    it('keeps the legacy color without a theme', () => {
      const { container } = renderSunburst(undefined, {}, <Tooltip />);
      hoverSector(container, 1);
      expect(getTooltipItemColor(container)).toBe('rgb(51, 51, 51)');
    });

    it('uses the chart fill when that fill turns the theme off', () => {
      const { container } = renderSunburst(
        { graphicalItems: [{ fill: 'purple', stroke: 'indigo' }] },
        { fill: '#123456' },
        <Tooltip />,
      );
      hoverSector(container, 0);
      expect(getTooltipItemColor(container)).toBe('rgb(18, 52, 86)');
    });
  });
});

const colorProbeTheme: RechartsTheme = { graphicalItems: [{ fill: 'purple', stroke: 'indigo' }] };

/**
 * Depth-first sector order: A, A1, A2, B.
 * A carries every probed SVG prop. A1 has no color of its own. A2 has only a stroke.
 * B has non-color props, so a theme still decides its colors.
 */
const entryStyledData: SunburstData = {
  name: 'root',
  value: 100,
  children: [
    {
      name: 'A',
      value: 60,
      fill: '#ff0000',
      stroke: '#00ff00',
      strokeWidth: 7,
      strokeDasharray: '3 3',
      opacity: 0.5,
      className: 'class-from-data',
      'data-test': 'entry-a',
      style: { cursor: 'help' },
      id: 'entry-a',
      notAnSvgProp: 'nope',
      children: [
        { name: 'A1', value: 30 },
        { name: 'A2', value: 30, stroke: '#0000ff', id: 'entry-a2' },
      ],
    },
    { name: 'B', value: 40, id: 'entry-b', opacity: 0.25, strokeWidth: 9, strokeDasharray: '4 2' },
  ],
};

function getSector(container: Element, index: number): Element {
  const sector = container.querySelectorAll('.recharts-sector')[index];
  assertNotNull(sector);
  return sector;
}

describe('SunburstChart data entry styles', () => {
  const themes: ReadonlyArray<[string, RechartsTheme | undefined]> = [
    ['without a theme', undefined],
    ['with a theme', theme],
  ];

  it.each(themes)('spreads valid SVG props from the entry onto its sector %s', (_label, activeTheme) => {
    const { container } = renderSunburst(activeTheme, { data: entryStyledData, id: 'sunburst-chart' });
    const sector = getSector(container, 0);

    expect(sector).toHaveAttribute('fill', '#ff0000');
    expect(sector).toHaveAttribute('stroke', '#00ff00');
    expect(sector).toHaveAttribute('stroke-width', '7');
    expect(sector).toHaveAttribute('stroke-dasharray', '3 3');
    expect(sector).toHaveAttribute('opacity', '0.5');
    expect(sector).toHaveAttribute('data-test', 'entry-a');
    expect(sector).toHaveAttribute('name', 'A');
    expect(sector).toHaveClass('recharts-sector', 'class-from-data');
    expect(sector).toHaveStyle({ cursor: 'help' });
    expect(sector).not.toHaveAttribute('id');
    expect(sector.getAttributeNames()).not.toContain('notAnSvgProp');

    expect(getFirstLabel(container)).not.toHaveAttribute('data-test');
    expect(container.querySelectorAll('.recharts-sector[id]')).toHaveLength(0);
    expect(container.querySelector('#entry-a, #entry-a2, #entry-b')).toBeNull();
  });

  it('merges entry props over the chart props without a theme', () => {
    const { container } = renderSunburst(undefined, {
      fill: '#123456',
      stroke: '#654321',
      data: {
        name: 'root',
        value: 100,
        children: [
          {
            name: 'A',
            value: 60,
            fill: 'lime',
            children: [{ name: 'A1', value: 60, stroke: 'navy' }],
          },
          { name: 'B', value: 40, stroke: 'orange' },
        ],
      },
    });

    expect(getSectors(container)).toEqual([
      { fill: 'lime', stroke: '#654321', strokeWidth: '2' },
      { fill: 'lime', stroke: 'navy', strokeWidth: '2' },
      { fill: '#123456', stroke: 'orange', strokeWidth: '2' },
    ]);
  });

  it('keeps the legacy chart stroke when an entry sets only a fill', () => {
    const { container } = renderSunburst(undefined, { fill: '#123456' });

    expect(getSectors(container)).toEqual([
      { fill: '#123456', stroke: '#FFF', strokeWidth: '2' },
      { fill: '#123456', stroke: '#FFF', strokeWidth: '2' },
      { fill: '#123456', stroke: '#FFF', strokeWidth: '2' },
      { fill: '#123456', stroke: '#FFF', strokeWidth: '2' },
    ]);
  });

  it('inherits a parent fill without copying the parent stroke, and still applies non-color entry props', () => {
    const { container } = renderSunburst(undefined, { data: entryStyledData });
    const sectors = getSectors(container);

    expect(sectors[1]).toEqual({ fill: '#ff0000', stroke: '#FFF', strokeWidth: '2' });
    expect(sectors[2]).toEqual({ fill: '#ff0000', stroke: '#0000ff', strokeWidth: '2' });
    expect(sectors[3]).toEqual({ fill: '#333', stroke: '#FFF', strokeWidth: '9' });
    expect(getSector(container, 3)).toHaveAttribute('opacity', '0.25');
    expect(getSector(container, 3)).toHaveAttribute('stroke-dasharray', '4 2');
  });

  it('does not treat an inherited fill as the child color, so the child keeps the theme separator', () => {
    const { container } = renderSunburst(theme, { data: entryStyledData });
    const sectors = getSectors(container);

    expect(sectors[0]).toEqual({ fill: '#ff0000', stroke: '#00ff00', strokeWidth: '7' });
    expect(sectors[1]).toEqual({ fill: '#ff0000', stroke: 'ivory', strokeWidth: '2' });
    expect(sectors[2]).toEqual({ fill: '#ff0000', stroke: '#0000ff', strokeWidth: '2' });
    expect(sectors[3]).toEqual({ fill: 'green', stroke: 'ivory', strokeWidth: '9' });
    expect(getSector(container, 1)).not.toHaveAttribute('stroke-dasharray');
    expect(getSector(container, 3)).toHaveAttribute('opacity', '0.25');
    expect(getSector(container, 3)).toHaveAttribute('stroke-dasharray', '4 2');
  });

  it('ignores theme colors when the chart sets a fill', () => {
    const { container } = renderSunburst(colorProbeTheme, { fill: '#123456' });

    expect(getSectors(container)).toEqual([
      { fill: '#123456', stroke: null, strokeWidth: '2' },
      { fill: '#123456', stroke: null, strokeWidth: '2' },
      { fill: '#123456', stroke: null, strokeWidth: '2' },
      { fill: '#123456', stroke: null, strokeWidth: '2' },
    ]);
  });

  it('ignores theme colors when the chart sets a stroke', () => {
    const { container } = renderSunburst({ ...colorProbeTheme, pageBackground: 'ivory' }, { stroke: '#654321' });

    expect(getSectors(container)).toEqual([
      { fill: null, stroke: '#654321', strokeWidth: '2' },
      { fill: null, stroke: '#654321', strokeWidth: '2' },
      { fill: null, stroke: '#654321', strokeWidth: '2' },
      { fill: null, stroke: '#654321', strokeWidth: '2' },
    ]);
  });

  it('merges data entry colors with chart props under a theme', () => {
    const { container } = renderSunburst(colorProbeTheme, {
      stroke: '#654321',
      data: {
        name: 'root',
        value: 100,
        children: [
          {
            name: 'A',
            value: 60,
            fill: 'lime',
            children: [
              { name: 'A1', value: 30 },
              { name: 'A2', value: 30 },
            ],
          },
          { name: 'B', value: 40 },
        ],
      },
    });

    expect(getSectors(container)).toEqual([
      { fill: 'lime', stroke: '#654321', strokeWidth: '2' },
      { fill: 'lime', stroke: '#654321', strokeWidth: '2' },
      { fill: 'lime', stroke: '#654321', strokeWidth: '2' },
      { fill: null, stroke: '#654321', strokeWidth: '2' },
    ]);
  });

  it('leaves a stroke-only sector unfilled when a theme is active and the chart sets no colors', () => {
    const { container } = renderSunburst(colorProbeTheme, {
      data: {
        name: 'root',
        value: 100,
        children: [
          {
            name: 'A',
            value: 50,
            stroke: '#00ff00',
            children: [
              { name: 'A1', value: 25 },
              { name: 'A2', value: 25, stroke: 'lime' },
            ],
          },
          {
            name: 'B',
            value: 50,
            fill: 'blue',
            children: [{ name: 'B1', value: 50, stroke: 'navy' }],
          },
        ],
      },
    });

    expect(getSectors(container)).toEqual([
      { fill: null, stroke: '#00ff00', strokeWidth: '2' },
      { fill: 'purple', stroke: 'indigo', strokeWidth: '2' },
      { fill: null, stroke: 'lime', strokeWidth: '2' },
      { fill: 'blue', stroke: null, strokeWidth: '2' },
      { fill: 'blue', stroke: 'navy', strokeWidth: '2' },
    ]);
  });

  it('keeps non-color theme styles, and lets the entry override them', () => {
    const { container } = renderSunburst(
      {
        graphicalItems: [
          {
            fill: 'red',
            stroke: 'darkred',
            fillOpacity: 0.85,
            strokeOpacity: 0.4,
            strokeDasharray: '6 2',
            active: { fill: 'white', stroke: 'red', strokeWidth: 8 },
          },
          { fill: 'green', stroke: 'darkgreen', fillOpacity: 0.5, strokeDasharray: '1 1' },
        ],
        pageBackground: 'ivory',
      },
      {
        data: {
          name: 'root',
          value: 100,
          children: [
            {
              name: 'A',
              value: 50,
              children: [
                { name: 'A1', value: 25 },
                { name: 'A2', value: 25, fillOpacity: 0.2, strokeDasharray: '4 4' },
              ],
            },
            { name: 'B', value: 30 },
            { name: 'C', value: 20, fill: 'blue', fillOpacity: 0.3 },
          ],
        },
      },
    );

    const plain = getSector(container, 0);
    expect(plain).toHaveAttribute('fill', 'red');
    expect(plain).toHaveAttribute('stroke', 'ivory');
    expect(plain).toHaveAttribute('stroke-width', '2');
    expect(plain).toHaveAttribute('fill-opacity', '0.85');
    expect(plain).toHaveAttribute('stroke-opacity', '0.4');
    expect(plain).toHaveAttribute('stroke-dasharray', '6 2');
    expect(plain).not.toHaveAttribute('active');

    const inherited = getSector(container, 1);
    expect(inherited).toHaveAttribute('fill', 'red');
    expect(inherited).toHaveAttribute('fill-opacity', '0.85');
    expect(inherited).toHaveAttribute('stroke-dasharray', '6 2');

    const overridden = getSector(container, 2);
    expect(overridden).toHaveAttribute('fill', 'red');
    expect(overridden).toHaveAttribute('stroke', 'ivory');
    expect(overridden).toHaveAttribute('fill-opacity', '0.2');
    expect(overridden).toHaveAttribute('stroke-opacity', '0.4');
    expect(overridden).toHaveAttribute('stroke-dasharray', '4 4');

    const secondBranch = getSector(container, 3);
    expect(secondBranch).toHaveAttribute('fill', 'green');
    expect(secondBranch).toHaveAttribute('fill-opacity', '0.5');
    expect(secondBranch).toHaveAttribute('stroke-dasharray', '1 1');
    expect(secondBranch).not.toHaveAttribute('stroke-opacity');

    const ownColor = getSector(container, 4);
    expect(ownColor).toHaveAttribute('fill', 'blue');
    expect(ownColor).toHaveAttribute('fill-opacity', '0.3');
    expect(ownColor).not.toHaveAttribute('stroke');
    // a sector with its own color ignores the theme colors, and keeps the other theme styles
    expect(ownColor).toHaveAttribute('stroke-opacity', '0.4');
    expect(ownColor).toHaveAttribute('stroke-dasharray', '6 2');
  });
});
