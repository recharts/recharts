import React, { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { act, fireEvent } from '@testing-library/react';
import {
  Bar,
  BarChart,
  Funnel,
  FunnelChart,
  Pie,
  PieChart,
  RadialBar,
  RadialBarChart,
  RechartsFill,
  RechartsTheme,
  RechartsThemeProvider,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from '../../src';
import { getActiveStyleOverrides, resolveThemedActiveStyles } from '../../src/theme/activeStyles';
import { rechartsTestRender } from '../helper/createSelectorTestCase';
import { assertNotNull } from '../helper/assertNotNull';

const theme: RechartsTheme = {
  graphicalItems: [
    { fill: 'purple', stroke: 'indigo', active: { fill: 'white', stroke: 'crimson', strokeWidth: 3 } },
    { fill: 'teal', stroke: 'navy', active: { fill: 'black', stroke: 'orange', strokeWidth: 5 } },
  ],
};

const data = [
  { name: 'A', x: 1, y: 10, value: 30 },
  { name: 'B', x: 2, y: 20, value: 20 },
  { name: 'C', x: 3, y: 30, value: 10 },
];

const dataWithOwnStyles = [data[0], { ...data[1], fill: 'gold' }, data[2]];

function renderActiveShape(chart: ReactNode, activeTheme: RechartsTheme | undefined = theme): SVGPathElement {
  const { container } = rechartsTestRender(<RechartsThemeProvider value={activeTheme}>{chart}</RechartsThemeProvider>);
  // Funnel does not read the Tooltip defaultIndex, so we hover over the trapezoid instead.
  // https://github.com/recharts/recharts/issues/7945
  const trapezoid = container.querySelectorAll('.recharts-funnel-trapezoid')[1];
  if (trapezoid != null) {
    fireEvent.mouseEnter(trapezoid);
  }
  // Bar switches to the active state one animation frame after the Tooltip becomes active.
  act(() => {
    vi.runOnlyPendingTimers();
  });
  const activeShapes = container.querySelectorAll<SVGPathElement>(
    '.recharts-active-shape path, .recharts-active-bar path',
  );
  expect(activeShapes).toHaveLength(1);
  const activeShape = activeShapes[0];
  assertNotNull(activeShape);
  return activeShape;
}

type ActiveOption = boolean | Record<string, unknown> | (() => React.ReactElement);
type ChartOptions = {
  active: ActiveOption;
  itemProps?: { fill?: string; stroke?: string; strokeWidth?: number };
  chartData?: ReadonlyArray<object>;
};

const customShape = () => (
  <g className="custom-shape">
    <path fill="lime" />
  </g>
);

function CustomElement({
  baseClassName,
  fill,
  stroke,
  strokeWidth,
  isActive,
}: {
  baseClassName: string;
  fill?: string | RechartsFill;
  stroke?: string;
  strokeWidth?: number | string;
  isActive?: boolean;
}) {
  return (
    <path
      className={isActive ? `${baseClassName} ${baseClassName}-active` : baseClassName}
      fill={typeof fill === 'string' ? fill : undefined}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  );
}

function createShapeSpy(baseClassName: string) {
  return vi.fn(
    ({
      fill,
      stroke,
      strokeWidth,
      isActive,
    }: {
      fill?: string | RechartsFill;
      stroke?: string;
      strokeWidth?: number | string;
      isActive?: boolean;
    }) => (
      <CustomElement
        baseClassName={baseClassName}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        isActive={isActive}
      />
    ),
  );
}

function renderWithOptionalTheme(chart: ReactNode, activeTheme: RechartsTheme | undefined) {
  return rechartsTestRender(
    activeTheme != null ? <RechartsThemeProvider value={activeTheme}>{chart}</RechartsThemeProvider> : chart,
  );
}

/*
 * All charts make the data entry at index 1 active.
 * `expected` is the `active` slice of the theme that the active shape should receive:
 * Bar, Scatter, and RadialBar select the theme by dataKey, which is the first slice for a single graphical item.
 * Pie and Funnel select the theme by the index of the data entry.
 */
const testCases: ReadonlyArray<{
  name: string;
  expected: { fill: string; stroke: string; strokeWidth: string };
  inactive: { fill: string; stroke: string };
  renderChart: (options: ChartOptions) => ReactNode;
}> = [
  {
    name: 'Bar',
    expected: { fill: 'white', stroke: 'crimson', strokeWidth: '3' },
    inactive: { fill: 'purple', stroke: 'indigo' },
    renderChart: ({ active, itemProps, chartData = data }) => (
      <BarChart width={400} height={400} data={chartData}>
        <Bar dataKey="value" isAnimationActive={false} activeBar={active} {...itemProps} />
        <Tooltip defaultIndex={1} />
      </BarChart>
    ),
  },
  {
    name: 'Scatter',
    expected: { fill: 'white', stroke: 'crimson', strokeWidth: '3' },
    inactive: { fill: 'purple', stroke: 'indigo' },
    renderChart: ({ active, itemProps, chartData = data }) => (
      <ScatterChart width={400} height={400}>
        <XAxis dataKey="x" type="number" />
        <YAxis dataKey="y" type="number" />
        <Scatter data={chartData} dataKey="y" isAnimationActive={false} activeShape={active} {...itemProps} />
        <Tooltip defaultIndex={1} />
      </ScatterChart>
    ),
  },
  {
    name: 'RadialBar',
    expected: { fill: 'white', stroke: 'crimson', strokeWidth: '3' },
    inactive: { fill: 'purple', stroke: 'indigo' },
    renderChart: ({ active, itemProps, chartData = data }) => (
      <RadialBarChart width={400} height={400} data={chartData}>
        <RadialBar dataKey="value" isAnimationActive={false} activeShape={active} {...itemProps} />
        <Tooltip defaultIndex={1} />
      </RadialBarChart>
    ),
  },
  {
    name: 'Pie',
    expected: { fill: 'black', stroke: 'orange', strokeWidth: '5' },
    inactive: { fill: 'teal', stroke: 'navy' },
    renderChart: ({ active, itemProps, chartData = data }) => (
      <PieChart width={400} height={400}>
        <Pie data={chartData} dataKey="value" isAnimationActive={false} activeShape={active} {...itemProps} />
        <Tooltip defaultIndex={1} />
      </PieChart>
    ),
  },
  {
    name: 'Funnel',
    expected: { fill: 'black', stroke: 'orange', strokeWidth: '5' },
    inactive: { fill: 'teal', stroke: 'navy' },
    renderChart: ({ active, itemProps, chartData = data }) => (
      <FunnelChart width={400} height={400}>
        <Funnel data={chartData} dataKey="value" isAnimationActive={false} activeShape={active} {...itemProps} />
        <Tooltip />
      </FunnelChart>
    ),
  },
];

describe.each(testCases)('theme active styles in $name', ({ expected, inactive, renderChart }) => {
  it('applies the theme active styles when the active shape is enabled with true', () => {
    const activeShape = renderActiveShape(renderChart({ active: true }));
    expect(activeShape).toHaveAttribute('fill', expected.fill);
    expect(activeShape).toHaveAttribute('stroke', expected.stroke);
    expect(activeShape).toHaveAttribute('stroke-width', expected.strokeWidth);
  });

  it('applies the theme active styles when the active shape is an object without colors', () => {
    const activeShape = renderActiveShape(renderChart({ active: { className: 'my-active-shape' } }));
    expect(activeShape).toHaveAttribute('fill', expected.fill);
    expect(activeShape).toHaveAttribute('stroke', expected.stroke);
    expect(activeShape).toHaveAttribute('stroke-width', expected.strokeWidth);
  });

  it('merges the other styles of the active shape object with the theme active styles', () => {
    const activeShape = renderActiveShape(renderChart({ active: { strokeWidth: 9 } }));
    expect(activeShape).toHaveAttribute('fill', expected.fill);
    expect(activeShape).toHaveAttribute('stroke', expected.stroke);
    expect(activeShape).toHaveAttribute('stroke-width', '9');
  });

  it('ignores the theme active colors, and keeps the other theme active styles, when the active shape object has its own color', () => {
    const activeShape = renderActiveShape(renderChart({ active: { fill: 'lime' } }));
    expect(activeShape).toHaveAttribute('fill', 'lime');
    expect(activeShape).toHaveAttribute('stroke', inactive.stroke);
    expect(activeShape).toHaveAttribute('stroke-width', expected.strokeWidth);
  });

  it('ignores the theme active styles when the active shape is a custom function', () => {
    const activeShape = renderActiveShape(renderChart({ active: customShape }));
    expect(activeShape).toHaveAttribute('fill', 'lime');
    expect(activeShape).not.toHaveAttribute('stroke');
  });

  it('keeps its own colors, and the other theme active styles, when the graphical item has its own color', () => {
    const activeShape = renderActiveShape(renderChart({ active: true, itemProps: { fill: 'lime' } }));
    expect(activeShape).toHaveAttribute('fill', 'lime');
    expect(activeShape).not.toHaveAttribute('stroke', expected.stroke);
    expect(activeShape).not.toHaveAttribute('stroke', inactive.stroke);
    expect(activeShape).toHaveAttribute('stroke-width', expected.strokeWidth);
  });

  it('applies the theme active styles over the other style props of the graphical item', () => {
    const activeShape = renderActiveShape(renderChart({ active: true, itemProps: { strokeWidth: 9 } }));
    expect(activeShape).toHaveAttribute('fill', expected.fill);
    expect(activeShape).toHaveAttribute('stroke', expected.stroke);
    expect(activeShape).toHaveAttribute('stroke-width', expected.strokeWidth);
  });

  it('keeps its own colors, and the other theme active styles, when the data entry has its own color', () => {
    const activeShape = renderActiveShape(renderChart({ active: true, chartData: dataWithOwnStyles }));
    expect(activeShape).toHaveAttribute('fill', 'gold');
    expect(activeShape).not.toHaveAttribute('stroke', expected.stroke);
    expect(activeShape).not.toHaveAttribute('stroke', inactive.stroke);
    expect(activeShape).toHaveAttribute('stroke-width', expected.strokeWidth);
  });

  it('keeps the theme active colors when the graphical item sets only styles without a color', () => {
    const activeShape = renderActiveShape(renderChart({ active: true, itemProps: { strokeWidth: 9 } }));
    expect(activeShape).toHaveAttribute('fill', expected.fill);
    expect(activeShape).toHaveAttribute('stroke', expected.stroke);
  });

  it('keeps the inactive styles when the theme has no active styles', () => {
    const themeWithoutActive: RechartsTheme = {
      graphicalItems: theme.graphicalItems.map(({ fill, stroke }) => ({ fill, stroke })),
    };
    const activeShape = renderActiveShape(renderChart({ active: true }), themeWithoutActive);
    expect(activeShape).toHaveAttribute('fill', inactive.fill);
    expect(activeShape).toHaveAttribute('stroke', inactive.stroke);
  });
});

describe('theme active styles in Bar with a custom shape', () => {
  it('ignores the theme active styles when activeBar is true and the shape is a custom function', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider value={theme}>
        <BarChart width={400} height={400} data={data}>
          <Bar
            dataKey="value"
            isAnimationActive={false}
            activeBar
            shape={({ fill, stroke }) => <path className="custom-bar" fill={fill} stroke={stroke} />}
          />
          <Tooltip defaultIndex={1} />
        </BarChart>
      </RechartsThemeProvider>,
    );
    act(() => {
      vi.runOnlyPendingTimers();
    });
    const activeBar = container.querySelector('.recharts-active-bar .custom-bar');
    assertNotNull(activeBar);
    expect(activeBar).toHaveAttribute('fill', 'purple');
    expect(activeBar).toHaveAttribute('stroke', 'indigo');
  });
});

describe('theme active styles in Pie with a custom shape', () => {
  // Pie selects the theme by the index of the data entry, so the active sector at index 1 has the second slice.
  const ownColors = { fill: 'teal', stroke: 'navy' };

  function renderPieWithCustomShape(pieProps: Partial<React.ComponentProps<typeof Pie>>) {
    const shape = vi.fn(({ fill, stroke, strokeWidth, isActive }) => (
      <path
        className={isActive ? 'custom-sector custom-sector-active' : 'custom-sector'}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    ));
    const { container } = rechartsTestRender(
      <RechartsThemeProvider value={theme}>
        <PieChart width={400} height={400}>
          <Pie data={data} dataKey="value" isAnimationActive={false} shape={shape} {...pieProps} />
          <Tooltip defaultIndex={1} />
        </PieChart>
      </RechartsThemeProvider>,
    );
    return { container, shape };
  }

  it('ignores the theme active styles when the shape is a custom function', () => {
    const { container, shape } = renderPieWithCustomShape({});
    expect(shape).toHaveBeenCalledWith(expect.objectContaining({ isActive: true, index: 1, ...ownColors }), 1);
    const activeSector = container.querySelector('.recharts-active-shape .custom-sector-active');
    assertNotNull(activeSector);
    expect(activeSector).toHaveAttribute('fill', ownColors.fill);
    expect(activeSector).toHaveAttribute('stroke', ownColors.stroke);
    expect(activeSector).not.toHaveAttribute('stroke-width');
  });

  it('renders the custom shape for the active sector, without the theme active styles, when activeShape is true', () => {
    const { container, shape } = renderPieWithCustomShape({ activeShape: true });
    expect(shape).toHaveBeenCalledWith(expect.objectContaining({ isActive: true, index: 1, ...ownColors }), 1);
    const activeSector = container.querySelector('.recharts-active-shape .custom-sector-active');
    assertNotNull(activeSector);
    expect(activeSector).toHaveAttribute('fill', ownColors.fill);
    expect(activeSector).toHaveAttribute('stroke', ownColors.stroke);
    expect(container.querySelectorAll('.recharts-pie-sector path.recharts-sector')).toHaveLength(0);
  });

  it('still applies the theme active styles to the default shape without activeShape', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider value={theme}>
        <PieChart width={400} height={400}>
          <Pie data={data} dataKey="value" isAnimationActive={false} />
          <Tooltip defaultIndex={1} />
        </PieChart>
      </RechartsThemeProvider>,
    );
    const activeSector = container.querySelector('.recharts-active-shape path.recharts-sector');
    assertNotNull(activeSector);
    expect(activeSector).toHaveAttribute('fill', 'black');
    expect(activeSector).toHaveAttribute('stroke', 'orange');
    expect(activeSector).toHaveAttribute('stroke-width', '5');
  });
});

describe('theme active styles in Scatter with a custom shape', () => {
  // Scatter selects the theme by dataKey, which is the first slice for a single graphical item.
  const ownColors = { fill: 'purple', stroke: 'indigo' };

  function renderScatter(
    scatterProps: Partial<React.ComponentProps<typeof Scatter>>,
    activeTheme: RechartsTheme | undefined,
  ) {
    const shape = createShapeSpy('custom-scatter');
    const { container } = renderWithOptionalTheme(
      <ScatterChart width={400} height={400}>
        <XAxis dataKey="x" type="number" />
        <YAxis dataKey="y" type="number" />
        <Scatter data={data} dataKey="y" isAnimationActive={false} shape={shape} {...scatterProps} />
        <Tooltip defaultIndex={1} />
      </ScatterChart>,
      activeTheme,
    );
    return { container, shape };
  }

  it('renders the custom shape function for the active point, without the theme active styles, when activeShape is true', () => {
    const { container, shape } = renderScatter({ activeShape: true }, theme);
    expect(shape).toHaveBeenCalledWith(expect.objectContaining({ isActive: true, index: 1, ...ownColors }), 1);
    const activePoint = container.querySelector('.recharts-active-shape .custom-scatter-active');
    assertNotNull(activePoint);
    expect(activePoint).toHaveAttribute('fill', ownColors.fill);
    expect(activePoint).toHaveAttribute('stroke', ownColors.stroke);
    expect(activePoint).not.toHaveAttribute('stroke-width');
    expect(container.querySelectorAll('.recharts-scatter-symbol path.recharts-symbols')).toHaveLength(0);
  });

  it('renders a custom shape React element for the active point, without the theme active styles, when activeShape is true', () => {
    const { container } = renderScatter(
      {
        activeShape: true,
        shape: <CustomElement baseClassName="custom-scatter" />,
      },
      theme,
    );
    const activePoint = container.querySelector('.recharts-active-shape .custom-scatter-active');
    assertNotNull(activePoint);
    expect(activePoint).toHaveAttribute('fill', ownColors.fill);
    expect(activePoint).toHaveAttribute('stroke', ownColors.stroke);
    expect(activePoint).not.toHaveAttribute('stroke-width');
    expect(container.querySelectorAll('.recharts-scatter-symbol path.recharts-symbols')).toHaveLength(0);
  });

  it('renders the custom shape function for the active point without a theme when activeShape is true', () => {
    const { container, shape } = renderScatter({ activeShape: true }, undefined);
    expect(shape).toHaveBeenCalledWith(expect.objectContaining({ isActive: true, index: 1 }), 1);
    const activePoint = container.querySelector('.recharts-active-shape .custom-scatter-active');
    assertNotNull(activePoint);
    expect(activePoint).not.toHaveAttribute('fill', ownColors.fill);
    expect(activePoint).not.toHaveAttribute('fill', 'white');
    expect(container.querySelectorAll('.recharts-scatter-symbol path.recharts-symbols')).toHaveLength(0);
  });

  it('keeps the predefined symbol shape and applies the theme active styles when activeShape is true', () => {
    const { container: circleContainer } = renderScatter({ shape: undefined, activeShape: true }, theme);
    const circlePath = circleContainer.querySelector('.recharts-active-shape path.recharts-symbols')?.getAttribute('d');
    assertNotNull(circlePath);

    const { container } = renderScatter({ shape: 'diamond', activeShape: true }, theme);
    const inactiveDiamond = container.querySelector('.recharts-shape path.recharts-symbols');
    const activeDiamond = container.querySelector('.recharts-active-shape path.recharts-symbols');
    assertNotNull(inactiveDiamond);
    assertNotNull(activeDiamond);
    expect(activeDiamond).toHaveAttribute('d', inactiveDiamond.getAttribute('d'));
    expect(activeDiamond.getAttribute('d')).not.toBe(circlePath);
    expect(activeDiamond).toHaveAttribute('fill', 'white');
    expect(activeDiamond).toHaveAttribute('stroke', 'crimson');
    expect(activeDiamond).toHaveAttribute('stroke-width', '3');
  });

  it('keeps the predefined symbol shape without a theme when activeShape is true', () => {
    const { container } = renderScatter({ shape: 'diamond', activeShape: true }, undefined);
    const inactiveDiamond = container.querySelector('.recharts-shape path.recharts-symbols');
    const activeDiamond = container.querySelector('.recharts-active-shape path.recharts-symbols');
    assertNotNull(inactiveDiamond);
    assertNotNull(activeDiamond);
    expect(activeDiamond).toHaveAttribute('d', inactiveDiamond.getAttribute('d'));
    expect(activeDiamond).not.toHaveAttribute('fill', 'white');
  });

  it('applies the theme active styles to the default shape when shape is false and activeShape is true', () => {
    const { container } = renderScatter({ shape: false, activeShape: true }, theme);
    const activePoint = container.querySelector('.recharts-active-shape path.recharts-symbols');
    assertNotNull(activePoint);
    expect(activePoint).toHaveAttribute('fill', 'white');
    expect(activePoint).toHaveAttribute('stroke', 'crimson');
    expect(activePoint).toHaveAttribute('stroke-width', '3');
  });

  it('renders an explicit activeShape object or function instead of the custom shape', () => {
    const { container: objectContainer, shape: objectShape } = renderScatter({ activeShape: { fill: 'lime' } }, theme);
    expect(objectShape).not.toHaveBeenCalledWith(expect.objectContaining({ isActive: true }), expect.anything());
    const activeObjectPoint = objectContainer.querySelector('.recharts-active-shape path.recharts-symbols');
    assertNotNull(activeObjectPoint);
    expect(activeObjectPoint).toHaveAttribute('fill', 'lime');
    expect(activeObjectPoint).toHaveAttribute('stroke-width', '3');

    const { container: fnContainer, shape: fnShape } = renderScatter({ activeShape: customShape }, theme);
    expect(fnShape).not.toHaveBeenCalledWith(expect.objectContaining({ isActive: true }), expect.anything());
    const activeFnPoint = fnContainer.querySelector('.recharts-active-shape .custom-shape path');
    assertNotNull(activeFnPoint);
    expect(activeFnPoint).toHaveAttribute('fill', 'lime');
  });
});

describe('theme active styles in RadialBar with a custom shape', () => {
  // RadialBar selects the theme by dataKey, which is the first slice for a single graphical item.
  const ownColors = { fill: 'purple', stroke: 'indigo' };

  function renderRadialBar(
    radialBarProps: Partial<React.ComponentProps<typeof RadialBar>>,
    activeTheme: RechartsTheme | undefined,
  ) {
    const shape = createShapeSpy('custom-radial-bar');
    const { container } = renderWithOptionalTheme(
      <RadialBarChart width={400} height={400} data={data}>
        <RadialBar dataKey="value" isAnimationActive={false} shape={shape} {...radialBarProps} />
        <Tooltip defaultIndex={1} />
      </RadialBarChart>,
      activeTheme,
    );
    return { container, shape };
  }

  it('renders the custom shape function for the active sector, without the theme active styles, when activeShape is true', () => {
    const { container, shape } = renderRadialBar({ activeShape: true }, theme);
    expect(shape).toHaveBeenCalledWith(expect.objectContaining({ isActive: true, index: 1, ...ownColors }), 1);
    const activeSector = container.querySelector('.recharts-active-shape .custom-radial-bar-active');
    assertNotNull(activeSector);
    expect(activeSector).toHaveAttribute('fill', ownColors.fill);
    expect(activeSector).toHaveAttribute('stroke', ownColors.stroke);
    expect(activeSector).not.toHaveAttribute('stroke-width');
    expect(container.querySelectorAll('.recharts-radial-bar-sectors path.recharts-sector')).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-active-shape path.recharts-sector')).toHaveLength(0);
  });

  it('renders a custom shape React element for the active sector, without the theme active styles, when activeShape is true', () => {
    const { container } = renderRadialBar(
      {
        activeShape: true,
        shape: <CustomElement baseClassName="custom-radial-bar" />,
      },
      theme,
    );
    const activeSector = container.querySelector('.recharts-active-shape .custom-radial-bar-active');
    assertNotNull(activeSector);
    expect(activeSector).toHaveAttribute('fill', ownColors.fill);
    expect(activeSector).toHaveAttribute('stroke', ownColors.stroke);
    expect(activeSector).not.toHaveAttribute('stroke-width');
    expect(container.querySelectorAll('.recharts-radial-bar-sectors path.recharts-sector')).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-active-shape path.recharts-sector')).toHaveLength(0);
  });

  it('renders the custom shape function for the active sector without a theme when activeShape is true', () => {
    const { container, shape } = renderRadialBar({ activeShape: true }, undefined);
    expect(shape).toHaveBeenCalledWith(expect.objectContaining({ isActive: true, index: 1 }), 1);
    const activeSector = container.querySelector('.recharts-active-shape .custom-radial-bar-active');
    assertNotNull(activeSector);
    expect(activeSector).not.toHaveAttribute('fill', ownColors.fill);
    expect(activeSector).not.toHaveAttribute('fill', 'white');
    expect(container.querySelectorAll('.recharts-radial-bar-sectors path.recharts-sector')).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-active-shape path.recharts-sector')).toHaveLength(0);
  });

  it('applies the theme active styles to the default shape when shape is false and activeShape is true', () => {
    const { container } = renderRadialBar({ shape: false, activeShape: true }, theme);
    const activeSector = container.querySelector('.recharts-active-shape path.recharts-sector');
    assertNotNull(activeSector);
    expect(activeSector).toHaveAttribute('fill', 'white');
    expect(activeSector).toHaveAttribute('stroke', 'crimson');
    expect(activeSector).toHaveAttribute('stroke-width', '3');
  });

  it('renders an explicit activeShape object or function instead of the custom shape', () => {
    const { container: objectContainer, shape: objectShape } = renderRadialBar(
      { activeShape: { fill: 'lime' } },
      theme,
    );
    expect(objectShape).not.toHaveBeenCalledWith(expect.objectContaining({ isActive: true }), expect.anything());
    const activeObjectSector = objectContainer.querySelector('.recharts-active-shape path.recharts-sector');
    assertNotNull(activeObjectSector);
    expect(activeObjectSector).toHaveAttribute('fill', 'lime');
    expect(activeObjectSector).toHaveAttribute('stroke-width', '3');

    const { container: fnContainer, shape: fnShape } = renderRadialBar({ activeShape: customShape }, theme);
    expect(fnShape).not.toHaveBeenCalledWith(expect.objectContaining({ isActive: true }), expect.anything());
    const activeFnSector = fnContainer.querySelector('.recharts-active-shape .custom-shape path');
    assertNotNull(activeFnSector);
    expect(activeFnSector).toHaveAttribute('fill', 'lime');
  });
});

describe('theme active styles in Funnel with a custom shape', () => {
  // Funnel selects the theme by the index of the data entry, so the active trapezoid at index 1 has the second slice.
  const ownColors = { fill: 'teal', stroke: 'navy' };

  function renderFunnel(
    funnelProps: Partial<React.ComponentProps<typeof Funnel>>,
    activeTheme: RechartsTheme | undefined,
  ) {
    const shape = createShapeSpy('custom-funnel');
    const { container } = renderWithOptionalTheme(
      <FunnelChart width={400} height={400}>
        <Funnel data={data} dataKey="value" isAnimationActive={false} shape={shape} {...funnelProps} />
        <Tooltip />
      </FunnelChart>,
      activeTheme,
    );
    const trapezoid = container.querySelectorAll('.recharts-funnel-trapezoid')[1];
    assertNotNull(trapezoid);
    fireEvent.mouseEnter(trapezoid);
    return { container, shape };
  }

  it('renders the custom shape function for the active trapezoid, without the theme active styles, when activeShape is true', () => {
    const { container, shape } = renderFunnel({ activeShape: true }, theme);
    expect(shape).toHaveBeenCalledWith(expect.objectContaining({ isActive: true, name: 'B', ...ownColors }), undefined);
    const activeTrapezoid = container.querySelector('.recharts-active-shape .custom-funnel-active');
    assertNotNull(activeTrapezoid);
    expect(activeTrapezoid).toHaveAttribute('fill', ownColors.fill);
    expect(activeTrapezoid).toHaveAttribute('stroke', ownColors.stroke);
    expect(activeTrapezoid).not.toHaveAttribute('stroke-width');
    expect(container.querySelectorAll('path.recharts-trapezoid')).toHaveLength(0);
  });

  it('renders a custom shape React element for the active trapezoid, without the theme active styles, when activeShape is true', () => {
    const { container } = renderFunnel(
      {
        activeShape: true,
        shape: <CustomElement baseClassName="custom-funnel" />,
      },
      theme,
    );
    const activeTrapezoid = container.querySelector('.recharts-active-shape .custom-funnel-active');
    assertNotNull(activeTrapezoid);
    expect(activeTrapezoid).toHaveAttribute('fill', ownColors.fill);
    expect(activeTrapezoid).toHaveAttribute('stroke', ownColors.stroke);
    expect(activeTrapezoid).not.toHaveAttribute('stroke-width');
    expect(container.querySelectorAll('path.recharts-trapezoid')).toHaveLength(0);
  });

  it('renders the custom shape function for the active trapezoid without a theme when activeShape is true', () => {
    const { container, shape } = renderFunnel({ activeShape: true }, undefined);
    expect(shape).toHaveBeenCalledWith(expect.objectContaining({ isActive: true, name: 'B' }), undefined);
    const activeTrapezoid = container.querySelector('.recharts-active-shape .custom-funnel-active');
    assertNotNull(activeTrapezoid);
    expect(activeTrapezoid).not.toHaveAttribute('fill', ownColors.fill);
    expect(activeTrapezoid).not.toHaveAttribute('fill', 'black');
    expect(container.querySelectorAll('path.recharts-trapezoid')).toHaveLength(0);
  });

  it('applies the theme active styles to the default shape when shape is false and activeShape is true', () => {
    const { container } = renderFunnel({ shape: false, activeShape: true }, theme);
    const activeTrapezoid = container.querySelector('.recharts-active-shape path.recharts-trapezoid');
    assertNotNull(activeTrapezoid);
    expect(activeTrapezoid).toHaveAttribute('fill', 'black');
    expect(activeTrapezoid).toHaveAttribute('stroke', 'orange');
    expect(activeTrapezoid).toHaveAttribute('stroke-width', '5');
  });

  it('renders an explicit activeShape object or function instead of the custom shape', () => {
    const { container: objectContainer, shape: objectShape } = renderFunnel({ activeShape: { fill: 'lime' } }, theme);
    expect(objectShape).not.toHaveBeenCalledWith(expect.objectContaining({ isActive: true }), undefined);
    const activeObjectTrapezoid = objectContainer.querySelector('.recharts-active-shape path.recharts-trapezoid');
    assertNotNull(activeObjectTrapezoid);
    expect(activeObjectTrapezoid).toHaveAttribute('fill', 'lime');
    expect(activeObjectTrapezoid).toHaveAttribute('stroke-width', '5');

    const { container: fnContainer, shape: fnShape } = renderFunnel({ activeShape: customShape }, theme);
    expect(fnShape).not.toHaveBeenCalledWith(expect.objectContaining({ isActive: true }), undefined);
    const activeFnTrapezoid = fnContainer.querySelector('.recharts-active-shape .custom-shape path');
    assertNotNull(activeFnTrapezoid);
    expect(activeFnTrapezoid).toHaveAttribute('fill', 'lime');
  });
});

describe('resolveThemedActiveStyles', () => {
  const activeStyle = { fill: 'white', stroke: 'black', strokeWidth: 2 };

  it('returns undefined without active styles', () => {
    expect(resolveThemedActiveStyles(undefined, {})).toBeUndefined();
  });

  it.each([undefined, null, {}, { r: 5 }])('returns the active styles as they are for %j', ownStyles => {
    expect(resolveThemedActiveStyles(activeStyle, ownStyles)).toBe(activeStyle);
  });

  it.each([{ fill: 'red' }, { stroke: 'red' }])(
    'leaves out the fill and stroke when own styles have a color: %j',
    ownStyles => {
      expect(resolveThemedActiveStyles(activeStyle, ownStyles)).toEqual({ strokeWidth: 2 });
    },
  );

  it('returns undefined when own styles override everything', () => {
    expect(resolveThemedActiveStyles(activeStyle, { fill: 'red', strokeWidth: 5 })).toBeUndefined();
  });

  it('leaves out the styles that own styles override', () => {
    expect(resolveThemedActiveStyles(activeStyle, { strokeWidth: 5, fillOpacity: 0.5 })).toEqual({
      fill: 'white',
      stroke: 'black',
    });
  });
});

describe('getActiveStyleOverrides', () => {
  const styles = { fill: 'white', strokeWidth: 2 };

  it.each([true, {}, { className: 'active' }])('returns the theme styles for %j', option => {
    expect(getActiveStyleOverrides(option, styles)).toBe(styles);
  });

  it.each([{ fill: 'red' }, { stroke: 'red' }])('returns the theme styles without colors for %j', option => {
    expect(getActiveStyleOverrides(option, styles)).toEqual({ strokeWidth: 2 });
  });

  it.each([false, undefined, null, { fill: 'red', strokeWidth: 5 }, () => null, <g key="element" />])(
    'returns undefined for %j',
    option => {
      expect(getActiveStyleOverrides(option, styles)).toBeUndefined();
    },
  );

  it('leaves out the styles that the option object overrides', () => {
    expect(getActiveStyleOverrides({ strokeWidth: 5 }, styles)).toEqual({ fill: 'white' });
  });

  it('returns undefined without theme styles', () => {
    expect(getActiveStyleOverrides(true, undefined)).toBeUndefined();
  });

  it.each([{ fill: 'gold' }, { stroke: 'gold' }])('leaves out the theme colors for a data entry with %j', entry => {
    expect(getActiveStyleOverrides(true, styles, entry)).toEqual({ strokeWidth: 2 });
  });

  it.each([undefined, { name: 'A' }, { strokeWidth: 9 }])('keeps the theme colors for a data entry %j', entry => {
    expect(getActiveStyleOverrides(true, styles, entry)).toBe(styles);
  });
});
