import React, { ReactNode } from 'react';
import { describe, expect, it } from 'vitest';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from '../../../src';
import { PageData } from '../../_data';
import { createSelectorTestCase, rechartsTestRender } from '../../helper/createSelectorTestCase';
import { expectLastCalledWith } from '../../helper/expectLastCalledWith';
import { expectLegendLabels } from '../../helper/expectLegendLabels';
import { getAllScatterPoints } from '../../helper/expectScatterPoints';
import { expectTooltipPayload, showTooltip } from '../../component/Tooltip/tooltipTestHelpers';
import { lineChartMouseHoverTooltipSelector } from '../../component/Tooltip/tooltipMouseHoverSelectors';
import {
  getDataKeyOnAxis,
  isValueAxis,
  selectAllEffectiveGraphicalItemDataKeys,
  selectEffectiveDataKey,
} from '../../../src/state/selectors/effectiveDataKeySelectors';
import { selectAxisDomain } from '../../../src/state/selectors/axisSelectors';
import { selectPolarAxisDomain } from '../../../src/state/selectors/polarSelectors';

function getPathDefinitions(container: Element, selector: string): ReadonlyArray<string | null> {
  return Array.from(container.querySelectorAll(selector)).map(path => path.getAttribute('d'));
}

/**
 * Renders the same chart twice: once with dataKey on the graphical item and once with dataKey on the axis,
 * and expects that they both render the same shapes.
 */
function expectSameShapes(explicit: ReactNode, implicit: ReactNode, selector: string) {
  const explicitShapes = getPathDefinitions(rechartsTestRender(explicit).container, selector);
  const implicitShapes = getPathDefinitions(rechartsTestRender(implicit).container, selector);
  expect(explicitShapes.length).toBeGreaterThan(0);
  expect(explicitShapes.every(d => d != null && d.length > 0)).toBe(true);
  expect(implicitShapes).toEqual(explicitShapes);
}

describe('isValueAxis', () => {
  it.each([
    ['horizontal', 'yAxis'],
    ['vertical', 'xAxis'],
    ['centric', 'radiusAxis'],
    ['radial', 'angleAxis'],
  ] as const)('should return true in %s layout for numerical %s', (layout, axisType) => {
    expect(isValueAxis(layout, axisType, { type: 'number' })).toBe(true);
  });

  it.each([
    ['horizontal', 'xAxis'],
    ['horizontal', 'zAxis'],
    ['vertical', 'yAxis'],
    ['centric', 'angleAxis'],
    ['radial', 'radiusAxis'],
  ] as const)('should return false in %s layout for numerical %s', (layout, axisType) => {
    expect(isValueAxis(layout, axisType, { type: 'number' })).toBe(false);
  });

  it('should return false when the axis is not numerical', () => {
    expect(isValueAxis('horizontal', 'yAxis', { type: 'category' })).toBe(false);
    expect(isValueAxis('horizontal', 'yAxis', undefined)).toBe(false);
  });
});

describe('getDataKeyOnAxis', () => {
  it('should prefer the graphical item dataKey on the value axis', () => {
    expect(getDataKeyOnAxis('item', { dataKey: 'axis', type: 'number' }, 'horizontal', 'yAxis')).toBe('item');
  });

  it('should fall back to the axis dataKey on the value axis', () => {
    expect(getDataKeyOnAxis(undefined, { dataKey: 'axis', type: 'number' }, 'horizontal', 'yAxis')).toBe('axis');
  });

  it('should prefer the axis dataKey on the other axis', () => {
    expect(getDataKeyOnAxis('item', { dataKey: 'axis', type: 'number' }, 'horizontal', 'xAxis')).toBe('axis');
  });

  it('should fall back to the graphical item dataKey on the other axis', () => {
    expect(getDataKeyOnAxis('item', { dataKey: undefined, type: 'category' }, 'horizontal', 'xAxis')).toBe('item');
  });

  it('should prefer the axis dataKey on a categorical axis in the value position', () => {
    expect(getDataKeyOnAxis('item', { dataKey: 'axis', type: 'category' }, 'horizontal', 'yAxis')).toBe('axis');
  });
});

describe('implicit dataKey from the value axis', () => {
  it('should render Line in horizontal layout', () => {
    expectSameShapes(
      <LineChart width={400} height={300} data={PageData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="uv" isAnimationActive={false} />
      </LineChart>,
      <LineChart width={400} height={300} data={PageData}>
        <XAxis dataKey="name" />
        <YAxis dataKey="uv" />
        <Line isAnimationActive={false} />
      </LineChart>,
      '.recharts-line-curve',
    );
  });

  it('should render Line in vertical layout', () => {
    expectSameShapes(
      <LineChart width={400} height={300} data={PageData} layout="vertical">
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Line dataKey="uv" isAnimationActive={false} />
      </LineChart>,
      <LineChart width={400} height={300} data={PageData} layout="vertical">
        <XAxis type="number" dataKey="uv" />
        <YAxis dataKey="name" type="category" />
        <Line isAnimationActive={false} />
      </LineChart>,
      '.recharts-line-curve',
    );
  });

  it('should render Bar', () => {
    expectSameShapes(
      <BarChart width={400} height={300} data={PageData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="uv" isAnimationActive={false} />
      </BarChart>,
      <BarChart width={400} height={300} data={PageData}>
        <XAxis dataKey="name" />
        <YAxis dataKey="uv" />
        <Bar isAnimationActive={false} />
      </BarChart>,
      '.recharts-bar-rectangle path',
    );
  });

  it('should render Area', () => {
    expectSameShapes(
      <AreaChart width={400} height={300} data={PageData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Area dataKey="uv" isAnimationActive={false} />
      </AreaChart>,
      <AreaChart width={400} height={300} data={PageData}>
        <XAxis dataKey="name" />
        <YAxis dataKey="uv" />
        <Area isAnimationActive={false} />
      </AreaChart>,
      '.recharts-area-area',
    );
  });

  it('should render Radar', () => {
    expectSameShapes(
      <RadarChart width={400} height={400} data={PageData}>
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <Radar dataKey="uv" isAnimationActive={false} />
      </RadarChart>,
      <RadarChart width={400} height={400} data={PageData}>
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis dataKey="uv" />
        <Radar isAnimationActive={false} />
      </RadarChart>,
      '.recharts-radar-polygon path',
    );
  });

  it('should render RadialBar', () => {
    expectSameShapes(
      <RadialBarChart width={400} height={400} data={PageData}>
        <PolarAngleAxis type="number" />
        <PolarRadiusAxis type="category" dataKey="name" />
        <RadialBar dataKey="uv" isAnimationActive={false} />
      </RadialBarChart>,
      <RadialBarChart width={400} height={400} data={PageData}>
        <PolarAngleAxis type="number" dataKey="uv" />
        <PolarRadiusAxis type="category" dataKey="name" />
        <RadialBar isAnimationActive={false} />
      </RadialBarChart>,
      '.recharts-radial-bar-sector',
    );
  });

  it('should render two Lines on two axes, each with its own implicit dataKey', () => {
    expectSameShapes(
      <LineChart width={400} height={300} data={PageData}>
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Line yAxisId="left" dataKey="uv" isAnimationActive={false} />
        <Line yAxisId="right" dataKey="pv" isAnimationActive={false} />
      </LineChart>,
      <LineChart width={400} height={300} data={PageData}>
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" dataKey="uv" />
        <YAxis yAxisId="right" orientation="right" dataKey="pv" />
        <Line yAxisId="left" isAnimationActive={false} />
        <Line yAxisId="right" isAnimationActive={false} />
      </LineChart>,
      '.recharts-line-curve',
    );
  });

  describe('Line without dataKey on YAxis with dataKey', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart width={400} height={300} data={PageData}>
        <XAxis dataKey="name" />
        <YAxis dataKey="uv" />
        <Line isAnimationActive={false} id="my-line" />
        <Legend />
        <Tooltip />
        {children}
      </LineChart>
    ));

    it('should select the axis dataKey as the effective dataKey', () => {
      const { spy } = renderTestCase(state => selectEffectiveDataKey(state, { xAxisId: 0, yAxisId: 0 }));
      expectLastCalledWith(spy, 'uv');
    });

    it('should register the effective dataKey in the store', () => {
      const { spy } = renderTestCase(state => state.graphicalItems.cartesianItems[0]?.dataKey);
      expectLastCalledWith(spy, 'uv');
    });

    it('should use the effective dataKey in Legend', () => {
      const { container } = renderTestCase();
      expectLegendLabels(container, [{ textContent: 'uv', fill: 'none' }]);
    });

    it('should use the effective dataKey in Tooltip', () => {
      const { container } = renderTestCase();
      showTooltip(container, lineChartMouseHoverTooltipSelector);
      expectTooltipPayload(container, 'Page C', ['uv : 300']);
    });
  });

  it('should not inherit dataKey from the categorical axis', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart width={400} height={300} data={PageData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line isAnimationActive={false} />
        {children}
      </LineChart>
    ));
    const { container, spy } = renderTestCase(selectAllEffectiveGraphicalItemDataKeys);
    expectLastCalledWith(spy, []);
    expect(container.querySelectorAll('.recharts-line-curve')).toHaveLength(0);
  });

  it('should not inherit dataKey from an axis with type=category in the value position', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart width={400} height={300} data={PageData}>
        <XAxis />
        <YAxis type="category" dataKey="name" />
        <Line isAnimationActive={false} />
        {children}
      </LineChart>
    ));
    const { spy } = renderTestCase(selectAllEffectiveGraphicalItemDataKeys);
    expectLastCalledWith(spy, []);
  });
});

describe('dataKey of the graphical item wins over dataKey of the value axis', () => {
  it('should render both Lines when the YAxis has a dataKey too', () => {
    expectSameShapes(
      <LineChart width={400} height={300} data={PageData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="uv" isAnimationActive={false} />
        <Line dataKey="pv" isAnimationActive={false} />
      </LineChart>,
      <LineChart width={400} height={300} data={PageData}>
        <XAxis dataKey="name" />
        <YAxis dataKey="uv" />
        <Line dataKey="uv" isAnimationActive={false} />
        <Line dataKey="pv" isAnimationActive={false} />
      </LineChart>,
      '.recharts-line-curve',
    );
  });

  it('should compute the cartesian axis domain from the graphical item dataKey', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart width={400} height={300} data={PageData}>
        <XAxis dataKey="name" />
        <YAxis dataKey="uv" />
        <Line dataKey="pv" />
        {children}
      </LineChart>
    ));
    const { spy } = renderTestCase(state => selectAxisDomain(state, 'yAxis', 0, false));
    expectLastCalledWith(spy, [0, 9800]);
  });

  it('should mix explicit and implicit dataKeys in one domain', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <ComposedChart width={400} height={300} data={PageData}>
        <XAxis dataKey="name" />
        <YAxis dataKey="uv" />
        <Bar />
        <Line dataKey="amt" />
        {children}
      </ComposedChart>
    ));
    const { spy } = renderTestCase(state => selectAxisDomain(state, 'yAxis', 0, false));
    expectLastCalledWith(spy, [0, 2400]);
  });

  it('should compute the polar axis domain from the graphical item dataKey', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <RadarChart width={400} height={400} data={PageData}>
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis dataKey="uv" />
        <Radar dataKey="pv" />
        {children}
      </RadarChart>
    ));
    const { spy } = renderTestCase(state => selectPolarAxisDomain(state, 'radiusAxis', 0));
    expectLastCalledWith(spy, [0, 9800]);
  });

  it('should keep the dataKey of the other axis', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart width={400} height={300} data={PageData}>
        <XAxis dataKey="pv" type="number" />
        <YAxis />
        <Line dataKey="uv" />
        {children}
      </LineChart>
    ));
    const { spy } = renderTestCase(state => selectAxisDomain(state, 'xAxis', 0, false));
    expectLastCalledWith(spy, [0, 9800]);
  });
});

describe('Scatter dataKey', () => {
  const data = [
    { x: 10, y: 100, other: 400 },
    { x: 20, y: 200, other: 300 },
    { x: 30, y: 300, other: 200 },
  ];

  function getCenters(container: Element) {
    return getAllScatterPoints(container).map(point => ({
      cx: point.getAttribute('cx'),
      cy: point.getAttribute('cy'),
    }));
  }

  it('should read both coordinates from the axes when Scatter has no dataKey', () => {
    const { container } = rechartsTestRender(
      <ScatterChart width={400} height={300}>
        <XAxis dataKey="x" type="number" />
        <YAxis dataKey="y" type="number" />
        <Scatter data={data} isAnimationActive={false} />
      </ScatterChart>,
    );
    expect(getCenters(container)).toEqual([
      { cx: '168.125', cy: '178.33333333333334' },
      { cx: '271.25', cy: '91.66666666666667' },
      { cx: '374.375', cy: '5' },
    ]);
  });

  it('should read the value axis from the Scatter dataKey, and keep the other axis', () => {
    const { container } = rechartsTestRender(
      <ScatterChart width={400} height={300}>
        <XAxis dataKey="x" type="number" />
        <YAxis dataKey="y" type="number" />
        <Scatter data={data} dataKey="other" isAnimationActive={false} />
      </ScatterChart>,
    );
    expect(getCenters(container)).toEqual([
      { cx: '168.125', cy: '5' },
      { cx: '271.25', cy: '70' },
      { cx: '374.375', cy: '135' },
    ]);
  });

  it('should compute the value axis domain from the Scatter dataKey', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <ScatterChart width={400} height={300}>
        <XAxis dataKey="x" type="number" />
        <YAxis dataKey="y" type="number" />
        <Scatter data={data} dataKey="other" />
        {children}
      </ScatterChart>
    ));
    const { spy } = renderTestCase(state => selectAxisDomain(state, 'yAxis', 0, false));
    expectLastCalledWith(spy, [0, 400]);
  });

  it('should select the value axis dataKey as the effective dataKey of all Scatters', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <ScatterChart width={400} height={300}>
        <XAxis dataKey="x" type="number" />
        <YAxis dataKey="y" type="number" />
        <Scatter data={data} />
        <Scatter data={data} dataKey="other" />
        {children}
      </ScatterChart>
    ));
    const { spy } = renderTestCase(selectAllEffectiveGraphicalItemDataKeys);
    expectLastCalledWith(spy, ['y', 'other']);
  });
});
