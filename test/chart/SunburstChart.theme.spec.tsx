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
  });
});
