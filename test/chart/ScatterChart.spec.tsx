import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import {
  Bar,
  Brush,
  CartesianGrid,
  ComposedChart,
  Legend,
  Scatter,
  ScatterChart,
  Symbols,
  SymbolsProps,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from '../../src';
import { useAppSelector } from '../../src/state/hooks';
import { expectScatterPoints } from '../helper/expectScatterPoints';
import {
  selectAllAppliedNumericalValuesIncludingErrorValues,
  selectAxisDomain,
  selectBaseAxis,
  selectDisplayedData,
  selectDomainOfStackGroups,
  selectTicksOfGraphicalItem,
  selectZAxisWithScale,
} from '../../src/state/selectors/axisSelectors';
import { boxPlotData, PageData } from '../_data';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import {
  selectActiveCoordinate,
  selectIsTooltipActive,
  selectTooltipPayload,
  selectTooltipPayloadConfigurations,
} from '../../src/state/selectors/selectors';
import {
  expectTooltipCoordinate,
  expectTooltipNotVisible,
  expectTooltipPayload,
  showTooltip,
} from '../component/Tooltip/tooltipTestHelpers';
import { scatterChartMouseHoverTooltipSelector } from '../component/Tooltip/tooltipMouseHoverSelectors';
import { mockGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';
import { TooltipPayloadConfiguration, TooltipState } from '../../src/state/tooltipSlice';
import { useIsPanorama } from '../../src/context/PanoramaContext';
import { selectTooltipState } from '../../src/state/selectors/selectTooltipState';
import { selectChartDataWithIndexes } from '../../src/state/selectors/dataSelectors';
import { useChartHeight, useChartWidth, useViewBox } from '../../src/context/chartLayoutContext';

import { useClipPathId } from '../../src/container/ClipPathProvider';

describe('ScatterChart of three dimension data', () => {
  const data01 = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 },
  ];

  const data02 = [
    { x: 200, y: 260, z: 240 },
    { x: 240, y: 290, z: 220 },
    { x: 190, y: 290, z: 250 },
    { x: 198, y: 250, z: 210 },
    { x: 180, y: 280, z: 260 },
    { x: 210, y: 220, z: 230 },
  ];

  test('Render 2 Scatter', () => {
    const { container } = render(
      <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20 }}>
        <XAxis dataKey="x" name="stature" unit="cm" />
        <YAxis dataKey="y" name="weight" unit="kg" />
        <ZAxis dataKey="z" range={[4, 20]} name="score" unit="km" />
        <CartesianGrid />
        <Scatter name="A school" data={data01} fillOpacity={0.3} fill="#ff7300" />
        <Scatter name="B school" data={data02} fill="#347300" />
        <Tooltip />
        <Legend />
      </ScatterChart>,
    );

    expect(container.querySelectorAll('.recharts-scatter')).toHaveLength(2);
    expect(container.querySelectorAll('.recharts-legend-item')).toHaveLength(2);
    expect(container.querySelectorAll('.recharts-scatter-symbol')).toHaveLength(data01.length + data02.length);
    expect(container.querySelectorAll('.recharts-scatter-symbol path')).toHaveLength(data01.length + data02.length);

    expectScatterPoints(container, [
      {
        cx: '73.33333333333333',
        cy: '185',
        d: 'M0,0',
        height: '3.638913473173784',
        transform: 'translate(73.33333333333333, 185)',
        width: '3.638913473173784',
      },
      {
        cx: '100',
        cy: '267.5',
        d: 'M0,0',
        height: '3.960594802695323',
        transform: 'translate(100, 267.5)',
        width: '3.960594802695323',
      },
      {
        cx: '126.66666666666667',
        cy: '102.5',
        d: 'M0,0',
        height: '4.624978308224887',
        transform: 'translate(126.66666666666667, 102.5)',
        width: '4.624978308224887',
      },
      {
        cx: '153.33333333333334',
        cy: '143.75',
        d: 'M0,0',
        height: '4.062165001543845',
        transform: 'translate(153.33333333333334, 143.75)',
        width: '4.062165001543845',
      },
      {
        cx: '180.00000000000003',
        cy: '20',
        d: 'M0,0',
        height: '5.046265044040321',
        transform: 'translate(180.00000000000003, 20)',
        width: '5.046265044040321',
      },
      {
        cx: '206.66666666666669',
        cy: '119.00000000000001',
        d: 'M0,0',
        height: '3.638913473173784',
        transform: 'translate(206.66666666666669, 119.00000000000001)',
        width: '3.638913473173784',
      },
      {
        cx: '73.33333333333333',
        cy: '135.5',
        d: 'M0,0',
        height: '3.8563503319209342',
        transform: 'translate(73.33333333333333, 135.5)',
        width: '3.8563503319209342',
      },
      {
        cx: '100',
        cy: '110.75000000000001',
        d: 'M0,0',
        height: '3.749208526326083',
        transform: 'translate(100, 110.75000000000001)',
        width: '3.749208526326083',
      },
      {
        cx: '126.66666666666667',
        cy: '110.75000000000001',
        d: 'M0,0',
        height: '3.9088200952233594',
        transform: 'translate(126.66666666666667, 110.75000000000001)',
        width: '3.9088200952233594',
      },
      {
        cx: '153.33333333333334',
        cy: '143.75',
        d: 'M0,0',
        height: '3.694472617243352',
        transform: 'translate(153.33333333333334, 143.75)',
        width: '3.694472617243352',
      },
      {
        cx: '180.00000000000003',
        cy: '119.00000000000001',
        d: 'M0,0',
        height: '3.960594802695323',
        transform: 'translate(180.00000000000003, 119.00000000000001)',
        width: '3.960594802695323',
      },
      {
        cx: '206.66666666666669',
        cy: '168.49999999999997',
        d: 'M0,0',
        height: '3.803156745151513',
        transform: 'translate(206.66666666666669, 168.49999999999997)',
        width: '3.803156745151513',
      },
    ]);
  });

  it('should render clipPath if one of axes has allowDataOverflow=true', () => {
    const { container } = render(
      <ScatterChart width={400} height={400} margin={{ top: 10, right: 20, bottom: 30, left: 40 }}>
        <XAxis dataKey="x" name="stature" unit="cm" allowDataOverflow />
        <YAxis dataKey="y" name="weight" unit="kg" allowDataOverflow />
        <ZAxis dataKey="z" range={[4, 20]} name="score" unit="km" />
        <CartesianGrid />
        <Scatter name="A school" data={[]} fillOpacity={0.3} fill="#ff7300" />
        <Tooltip />
        <Legend layout="vertical" />
      </ScatterChart>,
    );

    const clipPath = container.querySelector('clipPath rect');
    expect(clipPath.getAttributeNames().sort()).toEqual(['height', 'width', 'x', 'y']);
    expect(clipPath).toHaveAttribute('width', '280');
    expect(clipPath).toHaveAttribute('height', '330');
    expect(clipPath).toHaveAttribute('x', '100');
    expect(clipPath).toHaveAttribute('y', '10');
  });

  test("Don't render any symbols when data is empty", () => {
    const { container } = render(
      <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey="x" name="stature" unit="cm" />
        <YAxis dataKey="y" name="weight" unit="kg" />
        <ZAxis dataKey="z" range={[4, 20]} name="score" unit="km" />
        <CartesianGrid />
        <Scatter name="A school" data={[]} fillOpacity={0.3} fill="#ff7300" />
        <Tooltip />
        <Legend layout="vertical" />
      </ScatterChart>,
    );

    expect(container.querySelectorAll('.recharts-symbol')).toHaveLength(0);
  });

  test('mouse enter on scatter symbol should call onMouseEnter from props', () => {
    const onMouseEnter = vi.fn();
    const { container } = render(
      <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey="x" name="stature" unit="cm" />
        <YAxis dataKey="y" name="weight" unit="kg" />
        <ZAxis dataKey="z" range={[4, 20]} name="score" unit="km" />
        <CartesianGrid />
        <Scatter name="A school" data={data01} fillOpacity={0.3} fill="#ff7300" onMouseEnter={onMouseEnter} />
        <Scatter name="B school" data={data02} fill="#347300" />
        <Tooltip />
        <Legend />
      </ScatterChart>,
    );

    const symbol = container.querySelectorAll('.recharts-scatter-symbol .recharts-symbols')[0];
    fireEvent.mouseEnter(symbol);

    expect(onMouseEnter).toHaveBeenCalled();
  });
});

describe('ScatterChart with joint line', () => {
  it('should compute ZAxis from explicit dataKey', () => {
    const data01 = [
      { x: 10, y: 30, z: 120 },
      { x: 30, y: 200, z: 190 },
      { x: 45, y: 100, z: 32 },
      { x: 50, y: 400, z: 67 },
      { x: 70, y: 150, z: 109 },
      { x: 100, y: 250, z: 120 },
    ];
    const data02 = [
      { x: 30, y: 20, z: 190 },
      { x: 50, y: 180, z: 32 },
      { x: 75, y: 240, z: 67 },
      { x: 100, y: 100, z: 109 },
      { x: 120, y: 190, z: 120 },
    ];

    const zAxisScaleSpy = vi.fn();
    const zAxisDataSpy = vi.fn();
    const Comp = (): null => {
      const isPanorama = useIsPanorama();
      zAxisScaleSpy(useAppSelector(state => selectZAxisWithScale(state, 'zAxis', 0, false)));
      zAxisDataSpy(
        useAppSelector(state => selectAllAppliedNumericalValuesIncludingErrorValues(state, 'zAxis', 0, isPanorama)),
      );
      return null;
    };

    const { container } = render(
      <ScatterChart width={600} height={400}>
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="stature" unit="cm" />
        <YAxis type="number" dataKey="y" name="weight" unit="kg" />
        <ZAxis type="number" dataKey="z" range={[100, 200]} />
        <Legend />
        <Scatter name="A school" data={data01} fill="#8884d8" line shape="cross" />
        <Scatter name="B school" data={data02} fill="#82ca9d" line shape="diamond" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Comp />
      </ScatterChart>,
    );

    expect(zAxisDataSpy).toHaveBeenLastCalledWith([
      {
        errorDomain: [],
        value: 120,
      },
      {
        errorDomain: [],
        value: 120,
      },
      {
        errorDomain: [],
        value: 190,
      },
      {
        errorDomain: [],
        value: 190,
      },
      {
        errorDomain: [],
        value: 32,
      },
      {
        errorDomain: [],
        value: 32,
      },
      {
        errorDomain: [],
        value: 67,
      },
      {
        errorDomain: [],
        value: 67,
      },
      {
        errorDomain: [],
        value: 109,
      },
      {
        errorDomain: [],
        value: 109,
      },
      {
        errorDomain: [],
        value: 120,
      },
      {
        errorDomain: [],
        value: 120,
      },
      {
        errorDomain: [],
        value: 190,
      },
      {
        errorDomain: [],
        value: 190,
      },
      {
        errorDomain: [],
        value: 32,
      },
      {
        errorDomain: [],
        value: 32,
      },
      {
        errorDomain: [],
        value: 67,
      },
      {
        errorDomain: [],
        value: 67,
      },
      {
        errorDomain: [],
        value: 109,
      },
      {
        errorDomain: [],
        value: 109,
      },
      {
        errorDomain: [],
        value: 120,
      },
      {
        errorDomain: [],
        value: 120,
      },
    ]);
    expect(zAxisScaleSpy).toHaveBeenLastCalledWith({
      allowDataOverflow: false,
      allowDuplicatedCategory: false,
      dataKey: 'z',
      id: 0,
      includeHidden: false,
      name: undefined,
      range: [100, 200],
      reversed: false,
      scale: expect.toBeRechartsScale({ domain: [0, 190], range: [100, 200] }),
      type: 'number',
      unit: undefined,
    });
    expectScatterPoints(container, [
      {
        cx: '109.16666666666666',
        cy: '338',
        d: 'M0,0L0,0L0,0L0,0L0,0L0,0L0,0L0,0L0,0L0,0L0,0L0,0Z',
        height: '14.413156615213909',
        transform: 'translate(109.16666666666666, 338)',
        width: '14.413156615213909',
      },
      {
        cx: '197.5',
        cy: '185',
        d: 'M0,0L0,0L0,0L0,0L0,0L0,0L0,0L0,0L0,0L0,0L0,0L0,0Z',
        height: '15.957691216057308',
        transform: 'translate(197.5, 185)',
        width: '15.957691216057308',
      },
      {
        cx: '263.75',
        cy: '275',
        d: 'M0,0L0,0L0,0L0,0L0,0L0,0L0,0L0,0L0,0L0,0L0,0L0,0Z',
        height: '12.197048368812888',
        transform: 'translate(263.75, 275)',
        width: '12.197048368812888',
      },
      {
        cx: '285.83333333333337',
        cy: '5',
        d: 'M0,0L0,0L0,0L0,0L0,0L0,0L0,0L0,0L0,0L0,0L0,0L0,0Z',
        height: '13.12335329012121',
        transform: 'translate(285.83333333333337, 5)',
        width: '13.12335329012121',
      },
      {
        cx: '374.1666666666667',
        cy: '230',
        d: 'M0,0L0,0L0,0L0,0L0,0L0,0L0,0L0,0L0,0L0,0L0,0L0,0Z',
        height: '14.155129698337069',
        transform: 'translate(374.1666666666667, 230)',
        width: '14.155129698337069',
      },
      {
        cx: '506.6666666666667',
        cy: '140',
        d: 'M0,0L0,0L0,0L0,0L0,0L0,0L0,0L0,0L0,0L0,0L0,0L0,0Z',
        height: '14.413156615213909',
        transform: 'translate(506.6666666666667, 140)',
        width: '14.413156615213909',
      },
      {
        cx: '197.5',
        cy: '347',
        d: 'M0,0L0,0L0,0L0,0Z',
        height: '15.957691216057308',
        transform: 'translate(197.5, 347)',
        width: '15.957691216057308',
      },
      {
        cx: '285.83333333333337',
        cy: '203.00000000000003',
        d: 'M0,0L0,0L0,0L0,0Z',
        height: '12.197048368812888',
        transform: 'translate(285.83333333333337, 203.00000000000003)',
        width: '12.197048368812888',
      },
      {
        cx: '396.25',
        cy: '149',
        d: 'M0,0L0,0L0,0L0,0Z',
        height: '13.12335329012121',
        transform: 'translate(396.25, 149)',
        width: '13.12335329012121',
      },
      {
        cx: '506.6666666666667',
        cy: '275',
        d: 'M0,0L0,0L0,0L0,0Z',
        height: '14.155129698337069',
        transform: 'translate(506.6666666666667, 275)',
        width: '14.155129698337069',
      },
      {
        cx: '595',
        cy: '194',
        d: 'M0,0L0,0L0,0L0,0Z',
        height: '14.413156615213909',
        transform: 'translate(595, 194)',
        width: '14.413156615213909',
      },
    ]);
  });
});

function assertActiveShapeInteractions(container: HTMLElement) {
  const sectorNodes = container.querySelectorAll('.recharts-scatter-symbol');
  expect(sectorNodes.length).toBeGreaterThanOrEqual(2);
  const [sector1, sector2] = Array.from(sectorNodes);
  fireEvent.mouseOver(sector1, { pageX: 200, pageY: 200 });
  expect(container.querySelectorAll('.recharts-active-shape')).toHaveLength(1);

  fireEvent.mouseOver(sector2, { pageX: 200, pageY: 200 });
  expect(container.querySelectorAll('.recharts-active-shape')).toHaveLength(1);

  fireEvent.mouseOut(sector2);
  expect(container.querySelectorAll('.recharts-active-shape')).toHaveLength(0);
}

describe('ScatterChart of two dimension data', () => {
  const data = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 },
  ];

  test('renders 6 circles in simple ScatterChart', () => {
    const { container } = render(
      <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey="x" name="stature" unit="cm" />
        <YAxis dataKey="y" name="weight" unit="kg" />
        <Scatter line name="A school" data={data} fill="#ff7300" />
      </ScatterChart>,
    );

    expect(container.querySelectorAll('.recharts-symbols')).toHaveLength(6);

    expectScatterPoints(container, [
      {
        cx: '105',
        cy: '185',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(105, 185)',
        width: '9.0270333367641',
      },
      {
        cx: '155',
        cy: '267.5',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(155, 267.5)',
        width: '9.0270333367641',
      },
      {
        cx: '205',
        cy: '102.5',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(205, 102.5)',
        width: '9.0270333367641',
      },
      {
        cx: '255',
        cy: '143.75',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(255, 143.75)',
        width: '9.0270333367641',
      },
      {
        cx: '305',
        cy: '20',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(305, 20)',
        width: '9.0270333367641',
      },
      {
        cx: '355',
        cy: '119.00000000000001',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(355, 119.00000000000001)',
        width: '9.0270333367641',
      },
    ]);
  });

  test('renders 6 circles in ScatterChart when data is defined on chart root', () => {
    const { container } = render(
      <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }} data={data}>
        <XAxis dataKey="x" name="stature" unit="cm" />
        <YAxis dataKey="y" name="weight" unit="kg" />
        <Scatter line name="A school" fill="#ff7300" />
      </ScatterChart>,
    );

    expectScatterPoints(container, [
      {
        cx: '105',
        cy: '185',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(105, 185)',
        width: '9.0270333367641',
      },
      {
        cx: '155',
        cy: '267.5',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(155, 267.5)',
        width: '9.0270333367641',
      },
      {
        cx: '205',
        cy: '102.5',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(205, 102.5)',
        width: '9.0270333367641',
      },
      {
        cx: '255',
        cy: '143.75',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(255, 143.75)',
        width: '9.0270333367641',
      },
      {
        cx: '305',
        cy: '20',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(305, 20)',
        width: '9.0270333367641',
      },
      {
        cx: '355',
        cy: '119.00000000000001',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(355, 119.00000000000001)',
        width: '9.0270333367641',
      },
    ]);
  });

  test('renders 6 circles in ScatterChart when data is defined on chart root and there are no axes', () => {
    const { container } = render(
      <ScatterChart width={400} height={400} data={data}>
        <Scatter dataKey="y" />
      </ScatterChart>,
    );

    expectScatterPoints(container, [
      {
        cx: '37.5',
        cy: '200',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(37.5, 200)',
        width: '9.0270333367641',
      },
      {
        cx: '102.5',
        cy: '297.5',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(102.5, 297.5)',
        width: '9.0270333367641',
      },
      {
        cx: '167.5',
        cy: '102.5',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(167.5, 102.5)',
        width: '9.0270333367641',
      },
      {
        cx: '232.5',
        cy: '151.25',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(232.5, 151.25)',
        width: '9.0270333367641',
      },
      {
        cx: '297.5',
        cy: '5',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(297.5, 5)',
        width: '9.0270333367641',
      },
      {
        cx: '362.5',
        cy: '122.00000000000001',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(362.5, 122.00000000000001)',
        width: '9.0270333367641',
      },
    ]);
  });

  test('renders line when line prop=true', () => {
    const { container } = render(
      <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey="x" name="stature" unit="cm" />
        <YAxis dataKey="y" name="weight" unit="kg" />
        <Scatter line name="A school" data={data} fill="#ff7300" />
      </ScatterChart>,
    );

    const allLines = container.querySelectorAll('.recharts-scatter-line path');
    expect(allLines).toHaveLength(1);
    const line = allLines[0];
    expect(line.getAttributeNames()).toEqual(['name', 'fill', 'stroke', 'class', 'd']);
    expect(line.getAttribute('name')).toEqual('A school');
    expect(line.getAttribute('fill')).toEqual('none');
    expect(line.getAttribute('stroke')).toEqual('#ff7300');
    expect(line.getAttribute('class')).toEqual('recharts-curve');
    expect(line.getAttribute('d')).toEqual('M105,185L155,267.5L205,102.5L255,143.75L305,20L355,119');
  });

  test('ignores points when data have nulls in it', () => {
    /*
     * This is technically a breaking change too. In recharts 2.x, this renders at "null-value" Scatter point if X axis is categorical.
     * Which in the axis is represented by an empty string.
     * I don't think that's useful for anyone so in 3.x, nulls will no longer be transformed to empty strings.
     */
    const dataWithNulls: Array<{ x: number | null; y: number | null }> = [
      { x: null, y: 2 },
      { x: 3, y: 4 },
    ];
    const { container } = render(
      <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey="x" />
        <YAxis dataKey="y" />
        <Scatter name="A school" data={dataWithNulls} fill="#ff7300" />
      </ScatterChart>,
    );

    expectScatterPoints(container, [
      {
        cx: '230',
        cy: '185',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(230, 185)',
        width: '9.0270333367641',
      },
    ]);
  });

  test('renders scatter points in Brush panorama', () => {
    const { container } = render(
      <ScatterChart width={400} height={400} data={data}>
        <Scatter dataKey="y" />
        <Brush>
          <ScatterChart data={data}>
            <Scatter dataKey="y" />
          </ScatterChart>
        </Brush>
      </ScatterChart>,
    );

    expectScatterPoints(container, [
      {
        cx: '37.5',
        cy: '180',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(37.5, 180)',
        width: '9.0270333367641',
      },
      {
        cx: '102.5',
        cy: '267.5',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(102.5, 267.5)',
        width: '9.0270333367641',
      },
      {
        cx: '167.5',
        cy: '92.5',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(167.5, 92.5)',
        width: '9.0270333367641',
      },
      {
        cx: '232.5',
        cy: '136.25',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(232.5, 136.25)',
        width: '9.0270333367641',
      },
      {
        cx: '297.5',
        cy: '5',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(297.5, 5)',
        width: '9.0270333367641',
      },
      {
        cx: '362.5',
        cy: '110.00000000000001',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(362.5, 110.00000000000001)',
        width: '9.0270333367641',
      },
      {
        cx: '33.333333333333336',
        cy: '20',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(33.333333333333336, 20)',
        width: '9.0270333367641',
      },
      {
        cx: '98',
        cy: '29.5',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(98, 29.5)',
        width: '9.0270333367641',
      },
      {
        cx: '162.66666666666669',
        cy: '10.5',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(162.66666666666669, 10.5)',
        width: '9.0270333367641',
      },
      {
        cx: '227.33333333333334',
        cy: '15.25',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(227.33333333333334, 15.25)',
        width: '9.0270333367641',
      },
      {
        cx: '292',
        cy: '1',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(292, 1)',
        width: '9.0270333367641',
      },
      {
        cx: '356.6666666666667',
        cy: '12.4',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(356.6666666666667, 12.4)',
        width: '9.0270333367641',
      },
    ]);
  });

  test('renders points in Composed chart when there are stacks but the stacks are smaller than the ZAxis dataKey', () => {
    const yAxisDomainSpy = vi.fn();
    const yAxisDataSpy = vi.fn();
    const yAxisTicksSpy = vi.fn();
    const displayedDataSpy = vi.fn();
    const stackGroupsDomainSpy = vi.fn();
    const zAxisAppliedDataSpy = vi.fn();
    const zAxisSettingsSpy = vi.fn();
    const zAxisDomainSpy = vi.fn();
    const Comp = (): null => {
      const isPanorama = useIsPanorama();
      displayedDataSpy(useAppSelector(state => selectDisplayedData(state, 'zAxis', 0, isPanorama)));
      stackGroupsDomainSpy(useAppSelector(state => selectDomainOfStackGroups(state, 'zAxis', 0, isPanorama)));
      zAxisAppliedDataSpy(
        useAppSelector(state => selectAllAppliedNumericalValuesIncludingErrorValues(state, 'zAxis', 0, isPanorama)),
      );
      zAxisSettingsSpy(useAppSelector(state => selectBaseAxis(state, 'zAxis', 0)));
      zAxisDomainSpy(useAppSelector(state => selectAxisDomain(state, 'zAxis', 0, isPanorama)));
      yAxisTicksSpy(useAppSelector(state => selectTicksOfGraphicalItem(state, 'yAxis', 0, false)));
      yAxisDomainSpy(useAppSelector(state => selectAxisDomain(state, 'yAxis', 0, isPanorama)));
      yAxisDataSpy(
        useAppSelector(state => selectAllAppliedNumericalValuesIncludingErrorValues(state, 'yAxis', 0, isPanorama)),
      );
      return null;
    };

    const { container } = render(
      <ComposedChart width={400} height={200} data={boxPlotData}>
        <Bar stackId="a" dataKey="min" />
        <ZAxis type="number" dataKey="size" range={[0, 250]} />

        <Scatter dataKey="average" />
        <XAxis />
        <YAxis />

        <Comp />
      </ComposedChart>,
    );

    expect(yAxisDataSpy).toHaveBeenLastCalledWith([
      {
        errorDomain: [],
        value: 150,
      },
      {
        errorDomain: [],
        value: 550,
      },
      {
        errorDomain: [],
        value: 400,
      },
    ]);
    expect(yAxisDomainSpy).toHaveBeenLastCalledWith([0, 550]);
    expect(yAxisTicksSpy).toHaveBeenLastCalledWith([
      { coordinate: 165, value: 0, offset: 0 },
      { coordinate: 138.33333333333334, value: 100, offset: 0 },
      { coordinate: 111.66666666666669, value: 200, offset: 0 },
      { coordinate: 85, value: 300, offset: 0 },
      { coordinate: 58.33333333333334, value: 400, offset: 0 },
      { coordinate: 31.66666666666666, value: 500, offset: 0 },
      { coordinate: 5, value: 600, offset: 0 },
    ]);
    expect(displayedDataSpy).toHaveBeenLastCalledWith([
      {
        average: 150,
        bottomBox: 50,
        bottomWhisker: 100,
        min: 100,
        size: 150,
        topBox: 200,
        topWhisker: 200,
      },
      {
        average: 550,
        bottomBox: 200,
        bottomWhisker: 200,
        min: 200,
        size: 250,
        topBox: 100,
        topWhisker: 100,
      },
      {
        average: 400,
        bottomBox: 200,
        bottomWhisker: 200,
        min: 0,
        size: 350,
        topBox: 200,
        topWhisker: 200,
      },
    ]);
    // expect(stackGroupsDomainSpy).toHaveBeenLastCalledWith([0, 200]);
    expect(zAxisAppliedDataSpy).toHaveBeenLastCalledWith([
      {
        errorDomain: [],
        value: 150,
      },
      {
        errorDomain: [],
        value: 250,
      },
      {
        errorDomain: [],
        value: 350,
      },
    ]);
    expect(zAxisSettingsSpy).toHaveBeenLastCalledWith({
      allowDataOverflow: false,
      allowDuplicatedCategory: false,
      dataKey: 'size',
      id: 0,
      includeHidden: false,
      name: undefined,
      range: [0, 250],
      reversed: false,
      scale: 'auto',
      type: 'number',
      unit: undefined,
    });
    expect(zAxisDomainSpy).toHaveBeenLastCalledWith([0, 350]);
    expectScatterPoints(container, [
      {
        cx: '120',
        cy: '125',
        d: 'M0,0',
        height: '11.67983401638037',
        transform: 'translate(120, 125)',
        width: '11.67983401638037',
      },
      {
        cx: '230',
        cy: '18.33333333333334',
        d: 'M0,0',
        height: '15.078600877302687',
        transform: 'translate(230, 18.33333333333334)',
        width: '15.078600877302687',
      },
      {
        cx: '340',
        cy: '58.33333333333334',
        d: 'M0,0',
        height: '17.841241161527712',
        transform: 'translate(340, 58.33333333333334)',
        width: '17.841241161527712',
      },
    ]);
  });

  test('renders points in Composed chart when stacks are bigger than ZAxis dataKey', () => {
    const yAxisDomainSpy = vi.fn();
    const yAxisDataSpy = vi.fn();
    const yAxisTicksSpy = vi.fn();
    const displayedDataSpy = vi.fn();
    const stackGroupsDomainSpy = vi.fn();
    const zAxisAppliedDataSpy = vi.fn();
    const zAxisSettingsSpy = vi.fn();
    const zAxisDomainSpy = vi.fn();
    const Comp = (): null => {
      const isPanorama = useIsPanorama();
      displayedDataSpy(useAppSelector(state => selectDisplayedData(state, 'zAxis', 0, isPanorama)));
      stackGroupsDomainSpy(useAppSelector(state => selectDomainOfStackGroups(state, 'zAxis', 0, isPanorama)));
      zAxisAppliedDataSpy(
        useAppSelector(state => selectAllAppliedNumericalValuesIncludingErrorValues(state, 'zAxis', 0, isPanorama)),
      );
      zAxisSettingsSpy(useAppSelector(state => selectBaseAxis(state, 'zAxis', 0)));
      zAxisDomainSpy(useAppSelector(state => selectAxisDomain(state, 'zAxis', 0, isPanorama)));
      yAxisTicksSpy(useAppSelector(state => selectTicksOfGraphicalItem(state, 'yAxis', 0, isPanorama)));
      yAxisDomainSpy(useAppSelector(state => selectAxisDomain(state, 'yAxis', 0, isPanorama)));
      yAxisDataSpy(
        useAppSelector(state => selectAllAppliedNumericalValuesIncludingErrorValues(state, 'yAxis', 0, isPanorama)),
      );
      return null;
    };

    const { container } = render(
      <ComposedChart width={400} height={200} data={boxPlotData}>
        <Bar stackId="a" dataKey="min" />
        <Bar stackId="a" dataKey="bar" />
        <Bar stackId="a" dataKey="bottomWhisker" />
        <Bar stackId="a" dataKey="bottomBox" />
        <Bar stackId="a" dataKey="bar" />
        <Bar stackId="a" dataKey="topBox" />
        <Bar stackId="a" dataKey="topWhisker" />
        <Bar stackId="a" dataKey="bar" />
        <ZAxis type="number" dataKey="size" range={[0, 250]} />

        <Scatter dataKey="average" />
        <XAxis />
        <YAxis />

        <Comp />
      </ComposedChart>,
    );

    expect(yAxisDataSpy).toHaveBeenLastCalledWith([
      {
        errorDomain: [],
        value: 150,
      },
      {
        errorDomain: [],
        value: 550,
      },
      {
        errorDomain: [],
        value: 400,
      },
    ]);
    expect(yAxisDomainSpy).toHaveBeenLastCalledWith([0, 800]);
    expect(yAxisTicksSpy).toHaveBeenLastCalledWith([
      {
        coordinate: 165,
        offset: 0,
        value: 0,
      },
      {
        coordinate: 125,
        offset: 0,
        value: 200,
      },
      {
        coordinate: 85,
        offset: 0,
        value: 400,
      },
      {
        coordinate: 45,
        offset: 0,
        value: 600,
      },
      {
        coordinate: 5,
        offset: 0,
        value: 800,
      },
    ]);
    expect(displayedDataSpy).toHaveBeenLastCalledWith([
      {
        average: 150,
        bottomBox: 50,
        bottomWhisker: 100,
        min: 100,
        size: 150,
        topBox: 200,
        topWhisker: 200,
      },
      {
        average: 550,
        bottomBox: 200,
        bottomWhisker: 200,
        min: 200,
        size: 250,
        topBox: 100,
        topWhisker: 100,
      },
      {
        average: 400,
        bottomBox: 200,
        bottomWhisker: 200,
        min: 0,
        size: 350,
        topBox: 200,
        topWhisker: 200,
      },
    ]);
    // expect(stackGroupsDomainSpy).toHaveBeenLastCalledWith([0, 800]);
    expect(zAxisAppliedDataSpy).toHaveBeenLastCalledWith([
      {
        errorDomain: [],
        value: 150,
      },
      {
        errorDomain: [],
        value: 250,
      },
      {
        errorDomain: [],
        value: 350,
      },
    ]);
    expect(zAxisSettingsSpy).toHaveBeenLastCalledWith({
      allowDataOverflow: false,
      allowDuplicatedCategory: false,
      dataKey: 'size',
      id: 0,
      includeHidden: false,
      name: undefined,
      range: [0, 250],
      reversed: false,
      scale: 'auto',
      type: 'number',
      unit: undefined,
    });
    expect(zAxisDomainSpy).toHaveBeenLastCalledWith([0, 350]);
    expectScatterPoints(container, [
      {
        cx: '120',
        cy: '135',
        d: 'M0,0',
        height: '11.67983401638037',
        transform: 'translate(120, 135)',
        width: '11.67983401638037',
      },
      {
        cx: '230',
        cy: '55',
        d: 'M0,0',
        height: '15.078600877302687',
        transform: 'translate(230, 55)',
        width: '15.078600877302687',
      },
      {
        cx: '340',
        cy: '85',
        d: 'M0,0',
        height: '17.841241161527712',
        transform: 'translate(340, 85)',
        width: '17.841241161527712',
      },
    ]);
  });

  describe('customized active shape', () => {
    test('Renders customized active shape when activeShape set to be an object', () => {
      const { container } = render(
        <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <XAxis dataKey="x" name="stature" unit="cm" />
          <YAxis dataKey="y" name="weight" unit="kg" />
          <Scatter line name="A school" data={data} fill="#ff7300" activeShape={{ fill: 'red' }} />
          <Tooltip />
        </ScatterChart>,
      );

      assertActiveShapeInteractions(container);
    });

    test('Renders customized active shape when activeShape set to be an object as symbols props', () => {
      const { container } = render(
        <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <XAxis dataKey="x" name="stature" unit="cm" />
          <YAxis dataKey="y" name="weight" unit="kg" />
          <Scatter
            line
            name="A school"
            data={data}
            fill="#ff7300"
            activeShape={{ type: 'triangle', className: 'triangle-symbols-type', fill: 'red' }}
          />
          <Tooltip />
        </ScatterChart>,
      );

      assertActiveShapeInteractions(container);
    });

    test('Renders customized active shape when activeShape set to be a function', () => {
      const { container } = render(
        <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <XAxis dataKey="x" name="stature" unit="cm" />
          <YAxis dataKey="y" name="weight" unit="kg" />
          <Scatter
            line
            name="A school"
            data={data}
            fill="#ff7300"
            activeShape={(props: SymbolsProps) => <Symbols {...props} type="circle" fill="red" />}
          />
          <Tooltip />
        </ScatterChart>,
      );

      assertActiveShapeInteractions(container);
    });

    test('Renders customized active shape when activeShape set to be a ReactElement', () => {
      const { container } = render(
        <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <XAxis dataKey="x" name="stature" unit="cm" />
          <YAxis dataKey="y" name="weight" unit="kg" />
          <Scatter line name="A school" data={data} fill="#ff7300" activeShape={<Symbols type="circle" fill="red" />} />
          <Tooltip />
        </ScatterChart>,
      );

      assertActiveShapeInteractions(container);
    });

    test('Renders customized active shape when activeShape is set to be a truthy boolean', () => {
      const { container } = render(
        <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <XAxis dataKey="x" name="stature" unit="cm" />
          <YAxis dataKey="y" name="weight" unit="kg" />
          <Scatter line name="A school" data={data} fill="#ff7300" activeShape />
          <Tooltip />
        </ScatterChart>,
      );

      assertActiveShapeInteractions(container);
    });

    test('Does not render customized active shape when activeShape set to be a falsy boolean', () => {
      const { container } = render(
        <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <XAxis dataKey="x" name="stature" unit="cm" />
          <YAxis dataKey="y" name="weight" unit="kg" />
          <Scatter line name="A school" data={data} fill="#ff7300" activeShape={false} />
          <Tooltip />
        </ScatterChart>,
      );

      const sectorNodes = container.querySelectorAll('.recharts-scatter-symbol');
      const [sector] = Array.from(sectorNodes);
      fireEvent.mouseOver(sector, { pageX: 200, pageY: 200 });

      const activeSector = container.querySelectorAll('.recharts-active-shape');
      expect(activeSector).toHaveLength(0);
    });
  });

  describe('ScatterChart layout context', () => {
    it('should provide viewBox', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        spy(useViewBox());
        return null;
      };
      render(
        <ScatterChart width={100} height={50} barSize={20}>
          <Comp />
        </ScatterChart>,
      );

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenLastCalledWith({ x: 5, y: 5, width: 90, height: 40 });
    });

    it('should provide clipPathId', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        spy(useClipPathId());
        return null;
      };
      render(
        <ScatterChart width={100} height={50} barSize={20}>
          <Comp />
        </ScatterChart>,
      );

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(expect.stringMatching(/recharts\d+-clip/));
    });

    it('should provide width', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        spy(useChartWidth());
        return null;
      };
      render(
        <ScatterChart width={100} height={50} barSize={20}>
          <Comp />
        </ScatterChart>,
      );

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(100);
    });

    it('should provide height', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        spy(useChartHeight());
        return null;
      };
      render(
        <ScatterChart width={100} height={50} barSize={20}>
          <Comp />
        </ScatterChart>,
      );

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(50);
    });
  });
});

describe('ScatterChart with multiple Y axes', () => {
  it('should render points', () => {
    const data01 = [
      { x: 100, y: 200, z: 200 },
      { x: 120, y: 100, z: 260 },
      { x: 170, y: 300, z: 400 },
      { x: 140, y: 250, z: 280 },
      { x: 150, y: 400, z: 500 },
      { x: 110, y: 280, z: 200 },
    ];
    const data02 = [
      { x: 300, y: 300, z: 200 },
      { x: 400, y: 500, z: 260 },
      { x: 200, y: 700, z: 400 },
      { x: 340, y: 350, z: 280 },
      { x: 560, y: 500, z: 500 },
      { x: 230, y: 780, z: 200 },
      { x: 500, y: 400, z: 200 },
      { x: 300, y: 500, z: 260 },
      { x: 240, y: 300, z: 400 },
      { x: 320, y: 550, z: 280 },
      { x: 500, y: 400, z: 500 },
      { x: 420, y: 280, z: 200 },
    ];

    const { container } = render(
      <ScatterChart
        width={800}
        height={400}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid yAxisId="left" />
        <XAxis type="number" dataKey="x" name="stature" unit="cm" />
        <YAxis yAxisId="left" type="number" dataKey="y" name="weight" unit="kg" stroke="#8884d8" />
        <YAxis yAxisId="right" type="number" dataKey="y" name="weight" unit="kg" orientation="right" stroke="#82ca9d" />
        <Scatter yAxisId="left" name="A school" data={data01} fill="#8884d8" />
        <Scatter yAxisId="right" name="A school" data={data02} fill="#82ca9d" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      </ScatterChart>,
    );

    expectScatterPoints(container, [
      {
        cx: '186.66666666666669',
        cy: '185',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(186.66666666666669, 185)',
        width: '9.0270333367641',
      },
      {
        cx: '208',
        cy: '267.5',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(208, 267.5)',
        width: '9.0270333367641',
      },
      {
        cx: '261.3333333333333',
        cy: '102.5',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(261.3333333333333, 102.5)',
        width: '9.0270333367641',
      },
      {
        cx: '229.33333333333331',
        cy: '143.75',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(229.33333333333331, 143.75)',
        width: '9.0270333367641',
      },
      {
        cx: '240',
        cy: '20',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(240, 20)',
        width: '9.0270333367641',
      },
      {
        cx: '197.33333333333331',
        cy: '119.00000000000001',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(197.33333333333331, 119.00000000000001)',
        width: '9.0270333367641',
      },
      {
        cx: '400',
        cy: '226.25',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(400, 226.25)',
        width: '9.0270333367641',
      },
      {
        cx: '506.6666666666667',
        cy: '143.75',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(506.6666666666667, 143.75)',
        width: '9.0270333367641',
      },
      {
        cx: '293.33333333333337',
        cy: '61.25',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(293.33333333333337, 61.25)',
        width: '9.0270333367641',
      },
      {
        cx: '442.6666666666667',
        cy: '205.625',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(442.6666666666667, 205.625)',
        width: '9.0270333367641',
      },
      {
        cx: '677.3333333333334',
        cy: '143.75',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(677.3333333333334, 143.75)',
        width: '9.0270333367641',
      },
      {
        cx: '325.3333333333333',
        cy: '28.250000000000007',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(325.3333333333333, 28.250000000000007)',
        width: '9.0270333367641',
      },
      {
        cx: '613.3333333333334',
        cy: '185',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(613.3333333333334, 185)',
        width: '9.0270333367641',
      },
      {
        cx: '400',
        cy: '143.75',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(400, 143.75)',
        width: '9.0270333367641',
      },
      {
        cx: '336',
        cy: '226.25',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(336, 226.25)',
        width: '9.0270333367641',
      },
      {
        cx: '421.3333333333333',
        cy: '123.125',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(421.3333333333333, 123.125)',
        width: '9.0270333367641',
      },
      {
        cx: '613.3333333333334',
        cy: '185',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(613.3333333333334, 185)',
        width: '9.0270333367641',
      },
      {
        cx: '528',
        cy: '234.5',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(528, 234.5)',
        width: '9.0270333367641',
      },
    ]);
  });
});

describe('Tooltip integration', () => {
  describe('with default Tooltip', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <ScatterChart width={100} height={100} data={PageData}>
        <Scatter isAnimationActive={false} />
        <XAxis dataKey="uv" />
        <YAxis dataKey="pv" />
        <Tooltip isAnimationActive={false} />
        {children}
      </ScatterChart>
    ));

    it('should return tooltip payload', () => {
      const { spy } = renderTestCase(state => selectTooltipPayload(state, 'axis', 'hover', '0'));
      expect(spy).toHaveBeenLastCalledWith([
        {
          color: undefined,
          dataKey: 'uv',
          fill: undefined,
          hide: false,
          name: 'uv',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page A',
            pv: 2400,
            uv: 400,
          },
          stroke: undefined,
          strokeWidth: undefined,
          type: undefined,
          unit: '',
          value: 400,
        },
        {
          color: undefined,
          dataKey: 'pv',
          fill: undefined,
          hide: false,
          name: 'pv',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page A',
            pv: 2400,
            uv: 400,
          },
          stroke: undefined,
          strokeWidth: undefined,
          type: undefined,
          unit: '',
          value: 2400,
        },
      ]);
    });

    it('should not render tooltip before user interaction', () => {
      const { container } = renderTestCase();
      expectTooltipNotVisible(container);
    });

    it('should render tooltip after mouse hover', () => {
      mockGetBoundingClientRect({
        width: 10,
        height: 10,
      });
      const { container } = renderTestCase();
      showTooltip(container, scatterChartMouseHoverTooltipSelector);

      expectTooltipPayload(container, '', ['pv : 2400', 'uv : 400']);
      expectTooltipCoordinate(container, { x: 77.5, y: 30.6 });
    });
  });

  describe('with Tooltip and defaultIndex=number', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <ScatterChart width={100} height={100} data={PageData}>
        <Scatter isAnimationActive={false} />
        <XAxis dataKey="uv" />
        <YAxis dataKey="pv" />
        <Tooltip defaultIndex={1} />
        {children}
      </ScatterChart>
    ));

    it('should render tooltip before user interaction', () => {
      mockGetBoundingClientRect({
        width: 10,
        height: 10,
      });
      const { container } = renderTestCase();
      expectTooltipPayload(container, '', ['pv : 4567', 'uv : 300']);
      expectTooltipCoordinate(container, {
        x: 82.5,
        y: 47.598,
      });
    });

    it('should select tooltip state', () => {
      const { spy } = renderTestCase(selectTooltipState);
      const expected: TooltipState = {
        axisInteraction: {
          click: {
            active: false,
            dataKey: undefined,
            index: null,
            coordinate: undefined,
          },
          hover: {
            active: false,
            dataKey: undefined,
            index: null,
            coordinate: undefined,
          },
        },
        itemInteraction: {
          click: {
            active: false,
            index: null,
            dataKey: undefined,
            coordinate: undefined,
          },
          hover: {
            active: false,
            index: null,
            dataKey: undefined,
            coordinate: undefined,
          },
        },
        keyboardInteraction: {
          active: false,
          dataKey: undefined,
          index: null,
          coordinate: undefined,
        },
        settings: {
          active: undefined,
          axisId: 0,
          shared: undefined,
          trigger: 'hover',
          defaultIndex: '1',
        },
        syncInteraction: {
          active: false,
          dataKey: undefined,
          index: null,
          coordinate: undefined,
          label: undefined,
        },
        tooltipItemPayloads: [
          {
            dataDefinedOnItem: [
              [
                {
                  dataKey: 'uv',
                  name: 'uv',
                  payload: {
                    amt: 2400,
                    name: 'Page A',
                    pv: 2400,
                    uv: 400,
                  },
                  type: undefined,
                  unit: '',
                  value: 400,
                },
                {
                  dataKey: 'pv',
                  name: 'pv',
                  payload: {
                    amt: 2400,
                    name: 'Page A',
                    pv: 2400,
                    uv: 400,
                  },
                  type: undefined,
                  unit: '',
                  value: 2400,
                },
              ],
              [
                {
                  dataKey: 'uv',
                  name: 'uv',
                  payload: {
                    amt: 2400,
                    name: 'Page B',
                    pv: 4567,
                    uv: 300,
                  },
                  type: undefined,
                  unit: '',
                  value: 300,
                },
                {
                  dataKey: 'pv',
                  name: 'pv',
                  payload: {
                    amt: 2400,
                    name: 'Page B',
                    pv: 4567,
                    uv: 300,
                  },
                  type: undefined,
                  unit: '',
                  value: 4567,
                },
              ],
              [
                {
                  dataKey: 'uv',
                  name: 'uv',
                  payload: {
                    amt: 2400,
                    name: 'Page C',
                    pv: 1398,
                    uv: 300,
                  },
                  type: undefined,
                  unit: '',
                  value: 300,
                },
                {
                  dataKey: 'pv',
                  name: 'pv',
                  payload: {
                    amt: 2400,
                    name: 'Page C',
                    pv: 1398,
                    uv: 300,
                  },
                  type: undefined,
                  unit: '',
                  value: 1398,
                },
              ],
              [
                {
                  dataKey: 'uv',
                  name: 'uv',
                  payload: {
                    amt: 2400,
                    name: 'Page D',
                    pv: 9800,
                    uv: 200,
                  },
                  type: undefined,
                  unit: '',
                  value: 200,
                },
                {
                  dataKey: 'pv',
                  name: 'pv',
                  payload: {
                    amt: 2400,
                    name: 'Page D',
                    pv: 9800,
                    uv: 200,
                  },
                  type: undefined,
                  unit: '',
                  value: 9800,
                },
              ],
              [
                {
                  dataKey: 'uv',
                  name: 'uv',
                  payload: {
                    amt: 2400,
                    name: 'Page E',
                    pv: 3908,
                    uv: 278,
                  },
                  type: undefined,
                  unit: '',
                  value: 278,
                },
                {
                  dataKey: 'pv',
                  name: 'pv',
                  payload: {
                    amt: 2400,
                    name: 'Page E',
                    pv: 3908,
                    uv: 278,
                  },
                  type: undefined,
                  unit: '',
                  value: 3908,
                },
              ],
              [
                {
                  dataKey: 'uv',
                  name: 'uv',
                  payload: {
                    amt: 2400,
                    name: 'Page F',
                    pv: 4800,
                    uv: 189,
                  },
                  type: undefined,
                  unit: '',
                  value: 189,
                },
                {
                  dataKey: 'pv',
                  name: 'pv',
                  payload: {
                    amt: 2400,
                    name: 'Page F',
                    pv: 4800,
                    uv: 189,
                  },
                  type: undefined,
                  unit: '',
                  value: 4800,
                },
              ],
            ],
            positions: [
              {
                x: 67.5,
                y: 50.6,
              },
              {
                x: 72.5,
                y: 37.598,
              },
              {
                x: 77.5,
                y: 56.611999999999995,
              },
              {
                x: 82.5,
                y: 6.200000000000001,
              },
              {
                x: 87.5,
                y: 41.552,
              },
              {
                x: 92.5,
                y: 36.2,
              },
            ],
            settings: {
              color: undefined,
              dataKey: undefined,
              fill: undefined,
              hide: false,
              name: undefined,
              nameKey: undefined,
              stroke: undefined,
              strokeWidth: undefined,
              type: undefined,
              unit: '',
            },
          },
        ],
      };
      expect(spy).toHaveBeenLastCalledWith(expected);
    });

    it('should select tooltip payload configurations', () => {
      const { spy } = renderTestCase(state => selectTooltipPayloadConfigurations(state, 'axis', 'hover', '0'));
      expect(spy).toHaveBeenLastCalledWith([
        {
          dataDefinedOnItem: [
            [
              {
                dataKey: 'uv',
                name: 'uv',
                payload: {
                  amt: 2400,
                  name: 'Page A',
                  pv: 2400,
                  uv: 400,
                },
                type: undefined,
                unit: '',
                value: 400,
              },
              {
                dataKey: 'pv',
                name: 'pv',
                payload: {
                  amt: 2400,
                  name: 'Page A',
                  pv: 2400,
                  uv: 400,
                },
                type: undefined,
                unit: '',
                value: 2400,
              },
            ],
            [
              {
                dataKey: 'uv',
                name: 'uv',
                payload: {
                  amt: 2400,
                  name: 'Page B',
                  pv: 4567,
                  uv: 300,
                },
                type: undefined,
                unit: '',
                value: 300,
              },
              {
                dataKey: 'pv',
                name: 'pv',
                payload: {
                  amt: 2400,
                  name: 'Page B',
                  pv: 4567,
                  uv: 300,
                },
                type: undefined,
                unit: '',
                value: 4567,
              },
            ],
            [
              {
                dataKey: 'uv',
                name: 'uv',
                payload: {
                  amt: 2400,
                  name: 'Page C',
                  pv: 1398,
                  uv: 300,
                },
                type: undefined,
                unit: '',
                value: 300,
              },
              {
                dataKey: 'pv',
                name: 'pv',
                payload: {
                  amt: 2400,
                  name: 'Page C',
                  pv: 1398,
                  uv: 300,
                },
                type: undefined,
                unit: '',
                value: 1398,
              },
            ],
            [
              {
                dataKey: 'uv',
                name: 'uv',
                payload: {
                  amt: 2400,
                  name: 'Page D',
                  pv: 9800,
                  uv: 200,
                },
                type: undefined,
                unit: '',
                value: 200,
              },
              {
                dataKey: 'pv',
                name: 'pv',
                payload: {
                  amt: 2400,
                  name: 'Page D',
                  pv: 9800,
                  uv: 200,
                },
                type: undefined,
                unit: '',
                value: 9800,
              },
            ],
            [
              {
                dataKey: 'uv',
                name: 'uv',
                payload: {
                  amt: 2400,
                  name: 'Page E',
                  pv: 3908,
                  uv: 278,
                },
                type: undefined,
                unit: '',
                value: 278,
              },
              {
                dataKey: 'pv',
                name: 'pv',
                payload: {
                  amt: 2400,
                  name: 'Page E',
                  pv: 3908,
                  uv: 278,
                },
                type: undefined,
                unit: '',
                value: 3908,
              },
            ],
            [
              {
                dataKey: 'uv',
                name: 'uv',
                payload: {
                  amt: 2400,
                  name: 'Page F',
                  pv: 4800,
                  uv: 189,
                },
                type: undefined,
                unit: '',
                value: 189,
              },
              {
                dataKey: 'pv',
                name: 'pv',
                payload: {
                  amt: 2400,
                  name: 'Page F',
                  pv: 4800,
                  uv: 189,
                },
                type: undefined,
                unit: '',
                value: 4800,
              },
            ],
          ],
          positions: [
            {
              x: 67.5,
              y: 50.6,
            },
            {
              x: 72.5,
              y: 37.598,
            },
            {
              x: 77.5,
              y: 56.611999999999995,
            },
            {
              x: 82.5,
              y: 6.200000000000001,
            },
            {
              x: 87.5,
              y: 41.552,
            },
            {
              x: 92.5,
              y: 36.2,
            },
          ],
          settings: {
            color: undefined,
            dataKey: undefined,
            fill: undefined,
            hide: false,
            name: undefined,
            nameKey: undefined,
            stroke: undefined,
            strokeWidth: undefined,
            type: undefined,
            unit: '',
          },
        },
      ]);
    });

    it('should select active coordinate', () => {
      const { spy } = renderTestCase(state => selectActiveCoordinate(state, 'item', 'hover', '0'));
      expect(spy).toHaveBeenLastCalledWith({
        x: 67.5,
        y: 50.6,
      });
    });

    it('should select tooltip data', () => {
      const { spy } = renderTestCase(state => selectTooltipPayloadConfigurations(state, 'item', 'hover', '0'));
      const expected: ReadonlyArray<TooltipPayloadConfiguration> = [
        {
          positions: [
            {
              x: 67.5,
              y: 50.6,
            },
            {
              x: 72.5,
              y: 37.598,
            },
            {
              x: 77.5,
              y: 56.611999999999995,
            },
            {
              x: 82.5,
              y: 6.200000000000001,
            },
            {
              x: 87.5,
              y: 41.552,
            },
            {
              x: 92.5,
              y: 36.2,
            },
          ],
          dataDefinedOnItem: [
            [
              {
                dataKey: 'uv',
                name: 'uv',
                payload: {
                  amt: 2400,
                  name: 'Page A',
                  pv: 2400,
                  uv: 400,
                },
                type: undefined,
                unit: '',
                value: 400,
              },
              {
                dataKey: 'pv',
                name: 'pv',
                payload: {
                  amt: 2400,
                  name: 'Page A',
                  pv: 2400,
                  uv: 400,
                },
                type: undefined,
                unit: '',
                value: 2400,
              },
            ],
            [
              {
                dataKey: 'uv',
                name: 'uv',
                payload: {
                  amt: 2400,
                  name: 'Page B',
                  pv: 4567,
                  uv: 300,
                },
                type: undefined,
                unit: '',
                value: 300,
              },
              {
                dataKey: 'pv',
                name: 'pv',
                payload: {
                  amt: 2400,
                  name: 'Page B',
                  pv: 4567,
                  uv: 300,
                },
                type: undefined,
                unit: '',
                value: 4567,
              },
            ],
            [
              {
                dataKey: 'uv',
                name: 'uv',
                payload: {
                  amt: 2400,
                  name: 'Page C',
                  pv: 1398,
                  uv: 300,
                },
                type: undefined,
                unit: '',
                value: 300,
              },
              {
                dataKey: 'pv',
                name: 'pv',
                payload: {
                  amt: 2400,
                  name: 'Page C',
                  pv: 1398,
                  uv: 300,
                },
                type: undefined,
                unit: '',
                value: 1398,
              },
            ],
            [
              {
                dataKey: 'uv',
                name: 'uv',
                payload: {
                  amt: 2400,
                  name: 'Page D',
                  pv: 9800,
                  uv: 200,
                },
                type: undefined,
                unit: '',
                value: 200,
              },
              {
                dataKey: 'pv',
                name: 'pv',
                payload: {
                  amt: 2400,
                  name: 'Page D',
                  pv: 9800,
                  uv: 200,
                },
                type: undefined,
                unit: '',
                value: 9800,
              },
            ],
            [
              {
                dataKey: 'uv',
                name: 'uv',
                payload: {
                  amt: 2400,
                  name: 'Page E',
                  pv: 3908,
                  uv: 278,
                },
                type: undefined,
                unit: '',
                value: 278,
              },
              {
                dataKey: 'pv',
                name: 'pv',
                payload: {
                  amt: 2400,
                  name: 'Page E',
                  pv: 3908,
                  uv: 278,
                },
                type: undefined,
                unit: '',
                value: 3908,
              },
            ],
            [
              {
                dataKey: 'uv',
                name: 'uv',
                payload: {
                  amt: 2400,
                  name: 'Page F',
                  pv: 4800,
                  uv: 189,
                },
                type: undefined,
                unit: '',
                value: 189,
              },
              {
                dataKey: 'pv',
                name: 'pv',
                payload: {
                  amt: 2400,
                  name: 'Page F',
                  pv: 4800,
                  uv: 189,
                },
                type: undefined,
                unit: '',
                value: 4800,
              },
            ],
          ],
          settings: {
            color: undefined,
            dataKey: undefined,
            fill: undefined,
            hide: false,
            name: undefined,
            nameKey: undefined,
            stroke: undefined,
            strokeWidth: undefined,
            type: undefined,
            unit: '',
          },
        },
      ];
      expect(spy).toHaveBeenLastCalledWith(expected);
    });
  });
});

/*
 * https://github.com/recharts/recharts/discussions/5545
 * https://github.com/recharts/recharts/issues/5546
 */
describe('ScatterChart with allowDuplicateCategory=false', () => {
  const data = [
    { x: 100, y: 100, z: 200 },
    { x: 100, y: 200, z: 200 },
    { x: 100, y: 300, z: 200 },
  ];

  const renderTestCase = createSelectorTestCase(({ children }) => (
    <ScatterChart width={500} height={500}>
      <CartesianGrid />
      <XAxis type="category" allowDuplicatedCategory={false} dataKey="x" name="stature" unit="cm" />
      <YAxis type="category" allowDuplicatedCategory={false} dataKey="y" name="weight" unit="kg" />
      <Scatter activeShape={{ fill: 'red' }} name="A school" data={data} isAnimationActive={false} />
      <Tooltip shared={false} cursor={{ strokeDasharray: '3 3' }} />
      <Legend />
      {children}
    </ScatterChart>
  ));

  it('should render three scatter points', () => {
    const { container } = renderTestCase();
    expectScatterPoints(container, [
      {
        cx: '280',
        cy: '388.33333333333337',
        d: 'M4.514,0A4.514,4.514,0,1,1,-4.514,0A4.514,4.514,0,1,1,4.514,0',
        height: '9.0270333367641',
        transform: 'translate(280, 388.33333333333337)',
        width: '9.0270333367641',
      },
      {
        cx: '280',
        cy: '235',
        d: 'M4.514,0A4.514,4.514,0,1,1,-4.514,0A4.514,4.514,0,1,1,4.514,0',
        height: '9.0270333367641',
        transform: 'translate(280, 235)',
        width: '9.0270333367641',
      },
      {
        cx: '280',
        cy: '81.66666666666667',
        d: 'M4.514,0A4.514,4.514,0,1,1,-4.514,0A4.514,4.514,0,1,1,4.514,0',
        height: '9.0270333367641',
        transform: 'translate(280, 81.66666666666667)',
        width: '9.0270333367641',
      },
    ]);
  });

  it('should select tooltip active', () => {
    const { container, spy } = renderTestCase(state => selectIsTooltipActive(state, 'item', 'hover', undefined));
    expect(spy).toHaveBeenLastCalledWith({ activeIndex: null, isActive: false });

    showTooltip(container, scatterChartMouseHoverTooltipSelector);
    expect(spy).toHaveBeenLastCalledWith({ activeIndex: '0', isActive: true });
  });

  it('should select tooltipPayloadConfigurations', () => {
    const { spy } = renderTestCase(state => selectTooltipPayloadConfigurations(state, 'axis', 'hover', undefined));
    expect(spy).toHaveBeenLastCalledWith([
      {
        dataDefinedOnItem: [
          [
            {
              dataKey: 'x',
              name: 'stature',
              payload: {
                x: 100,
                y: 100,
                z: 200,
              },
              type: undefined,
              unit: 'cm',
              value: 100,
            },
            {
              dataKey: 'y',
              name: 'weight',
              payload: {
                x: 100,
                y: 100,
                z: 200,
              },
              type: undefined,
              unit: 'kg',
              value: 100,
            },
          ],
          [
            {
              dataKey: 'x',
              name: 'stature',
              payload: {
                x: 100,
                y: 200,
                z: 200,
              },
              type: undefined,
              unit: 'cm',
              value: 100,
            },
            {
              dataKey: 'y',
              name: 'weight',
              payload: {
                x: 100,
                y: 200,
                z: 200,
              },
              type: undefined,
              unit: 'kg',
              value: 200,
            },
          ],
          [
            {
              dataKey: 'x',
              name: 'stature',
              payload: {
                x: 100,
                y: 300,
                z: 200,
              },
              type: undefined,
              unit: 'cm',
              value: 100,
            },
            {
              dataKey: 'y',
              name: 'weight',
              payload: {
                x: 100,
                y: 300,
                z: 200,
              },
              type: undefined,
              unit: 'kg',
              value: 300,
            },
          ],
        ],
        positions: [
          {
            x: 280,
            y: 388.33333333333337,
          },
          {
            x: 280,
            y: 235,
          },
          {
            x: 280,
            y: 81.66666666666667,
          },
        ],
        settings: {
          color: undefined,
          dataKey: undefined,
          fill: undefined,
          hide: false,
          name: 'A school',
          nameKey: undefined,
          stroke: undefined,
          strokeWidth: undefined,
          type: undefined,
          unit: '',
        },
      },
    ]);
  });

  it('should select chartDataWithIndexes', () => {
    const { spy } = renderTestCase(selectChartDataWithIndexes);
    expect(spy).toHaveBeenLastCalledWith({
      chartData: undefined,
      computedData: undefined,
      dataEndIndex: 0,
      dataStartIndex: 0,
    });
  });

  it('should select tooltip payload', () => {
    const { container, spy } = renderTestCase(state => selectTooltipPayload(state, 'item', 'hover', undefined));
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenLastCalledWith(undefined);

    showTooltip(container, scatterChartMouseHoverTooltipSelector);
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenLastCalledWith([
      {
        color: undefined,
        dataKey: 'x',
        fill: undefined,
        hide: false,
        name: 'stature',
        nameKey: undefined,
        payload: {
          x: 100,
          y: 100,
          z: 200,
        },
        stroke: undefined,
        strokeWidth: undefined,
        type: undefined,
        unit: 'cm',
        value: 100,
      },
      {
        color: undefined,
        dataKey: 'y',
        fill: undefined,
        hide: false,
        name: 'weight',
        nameKey: undefined,
        payload: {
          x: 100,
          y: 100,
          z: 200,
        },
        stroke: undefined,
        strokeWidth: undefined,
        type: undefined,
        unit: 'kg',
        value: 100,
      },
    ]);
  });

  it('should show tooltip when hovering over a point', () => {
    const { container } = renderTestCase();
    showTooltip(container, scatterChartMouseHoverTooltipSelector);
    expectTooltipPayload(container, '', ['stature : 100cm', 'weight : 100kg']);
  });

  it('should show different tooltip when hovering over the second point', () => {
    const { container } = renderTestCase();
    showTooltip(container, `${scatterChartMouseHoverTooltipSelector}:nth-child(2)`);
    expectTooltipPayload(container, '', ['stature : 100cm', 'weight : 200kg']);
  });
});
