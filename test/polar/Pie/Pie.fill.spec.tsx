import { describe, expect, it } from 'vitest';
import React from 'react';
import { rechartsTestRender as render } from '../../helper/createSelectorTestCase';
import {
  Legend,
  Pie,
  PieChart,
  RechartsFill,
  RechartsTheme,
  RechartsThemeProvider,
  Tooltip,
  lightTheme,
  pattern,
  patterns,
} from '../../../src';
import { assertNotNull } from '../../helper/assertNotNull';

const stars: RechartsFill = { definition: pattern(patterns.star) };

const data = [
  { name: 'a', value: 1 },
  { name: 'b', value: 2, fill: { color: 'blue', definition: pattern(patterns.dots) } },
  { name: 'c', value: 3, fill: 'orange' },
];

const themeWithColors: RechartsTheme = {
  ...lightTheme,
  graphicalItems: [{ fill: 'purple' }, { fill: 'teal' }, { fill: 'olive' }],
};

function renderPie(fill: string | RechartsFill | undefined, theme = themeWithColors) {
  return render(
    <RechartsThemeProvider value={theme}>
      <PieChart width={400} height={400}>
        <Pie data={data} dataKey="value" id="my-pie" fill={fill} isAnimationActive={false} />
        <Legend />
        <Tooltip defaultIndex={1} />
      </PieChart>
    </RechartsThemeProvider>,
  );
}

function getSectorPaths(container: Element): NodeListOf<Element> {
  return container.querySelectorAll('.recharts-pie-sector path');
}

describe('Pie with fill objects', () => {
  it('should paint each sector with its own fill: the data entry wins over the Pie', () => {
    const { container } = renderPie(stars);

    const sectors = getSectorPaths(container);
    expect(sectors).toHaveLength(3);
    // no fill in the data: the Pie fill object, in the theme color of the sector
    expect(sectors[0]).toHaveAttribute('fill', 'url(#my-pie-fill-0)');
    expect(container.querySelector('pattern#my-pie-fill-0 rect')).toHaveAttribute('fill', 'purple');
    // a fill object in the data, with its own color
    expect(sectors[1]).toHaveAttribute('fill', 'url(#my-pie-fill-1)');
    expect(container.querySelector('pattern#my-pie-fill-1 rect')).toHaveAttribute('fill', 'blue');
    // a color string in the data
    expect(sectors[2]).toHaveAttribute('fill', 'orange');
    expect(container.querySelector('#my-pie-fill-2')).not.toBeInTheDocument();
  });

  it('should show the base color, not the url, in the Tooltip', () => {
    const { container } = renderPie(undefined);

    const tooltipItem = container.querySelector<HTMLElement>('.recharts-tooltip-item');
    assertNotNull(tooltipItem);
    expect(tooltipItem).toHaveStyle({ color: 'rgb(0, 0, 255)' });
  });

  it('should draw the fill of each sector in its legend icon', () => {
    const { container } = renderPie(stars);

    const legendItems = container.querySelectorAll('.recharts-legend-item');
    expect(legendItems).toHaveLength(3);
    expect(legendItems[0].querySelector('pattern rect')).toHaveAttribute('fill', 'purple');
    expect(legendItems[1].querySelector('pattern rect')).toHaveAttribute('fill', 'blue');
    expect(legendItems[2].querySelector('pattern')).not.toBeInTheDocument();
  });

  it('should paint the sectors with the definitions from the theme', () => {
    const { container } = renderPie(undefined, {
      ...lightTheme,
      graphicalItems: [
        { fill: { color: 'purple', definition: pattern(patterns.diagonal) } },
        { fill: { color: 'teal', definition: pattern(patterns.grid) } },
      ],
    });

    const sectors = getSectorPaths(container);
    expect(sectors[0]).toHaveAttribute('fill', 'url(#my-pie-fill-0)');
    expect(container.querySelector('pattern#my-pie-fill-0 rect')).toHaveAttribute('fill', 'purple');
    // the data entry's own fill object wins over the theme
    expect(container.querySelector('pattern#my-pie-fill-1 rect')).toHaveAttribute('fill', 'blue');
    // the data entry's own color drops the theme definition
    expect(sectors[2]).toHaveAttribute('fill', 'orange');
  });

  it('should not use the theme definitions when the Pie sets its own color', () => {
    const { container } = renderPie('red', {
      ...lightTheme,
      graphicalItems: [{ fill: { color: 'purple', definition: pattern(patterns.diagonal) } }],
    });

    expect(getSectorPaths(container)[0]).toHaveAttribute('fill', 'red');
    expect(container.querySelector('#my-pie-fill-0')).not.toBeInTheDocument();
  });
});
