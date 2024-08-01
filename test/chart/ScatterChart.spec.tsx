import React from 'react';
import { expect, vi } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import {
  CartesianGrid,
  Customized,
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
import { testChartLayoutContext } from '../util/context';
import { useClipPathId, useViewBox } from '../../src/context/chartLayoutContext';
import { useAppSelector } from '../../src/state/hooks';
import { assertNotNull } from '../helper/assertNotNull';

type ExpectedPoint = {
  cx: string;
  cy: string;
  transform: string;
  d: string;
};

function expectScatterPoints(container: Element, expectedPoints: ReadonlyArray<ExpectedPoint>) {
  assertNotNull(container);
  const allPoints = container.querySelectorAll('.recharts-scatter-symbol .recharts-symbols');
  const actualPoints = Array.from(allPoints).map(point => {
    return {
      cx: point.getAttribute('cx'),
      cy: point.getAttribute('cy'),
      transform: point.getAttribute('transform'),
      d: point.getAttribute('d'),
    };
  });
  expect(actualPoints).toEqual(expectedPoints);
}

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
        transform: 'translate(73.33333333333333, 185)',
      },
      {
        cx: '100',
        cy: '267.5',
        d: 'M0,0',
        transform: 'translate(100, 267.5)',
      },
      {
        cx: '126.66666666666667',
        cy: '102.5',
        d: 'M0,0',
        transform: 'translate(126.66666666666667, 102.5)',
      },
      {
        cx: '153.33333333333334',
        cy: '143.75',
        d: 'M0,0',
        transform: 'translate(153.33333333333334, 143.75)',
      },
      {
        cx: '180.00000000000003',
        cy: '20',
        d: 'M0,0',
        transform: 'translate(180.00000000000003, 20)',
      },
      {
        cx: '206.66666666666669',
        cy: '119.00000000000001',
        d: 'M0,0',
        transform: 'translate(206.66666666666669, 119.00000000000001)',
      },
      {
        cx: '73.33333333333333',
        cy: '135.5',
        d: 'M0,0',
        transform: 'translate(73.33333333333333, 135.5)',
      },
      {
        cx: '100',
        cy: '110.75000000000001',
        d: 'M0,0',
        transform: 'translate(100, 110.75000000000001)',
      },
      {
        cx: '126.66666666666667',
        cy: '110.75000000000001',
        d: 'M0,0',
        transform: 'translate(126.66666666666667, 110.75000000000001)',
      },
      {
        cx: '153.33333333333334',
        cy: '143.75',
        d: 'M0,0',
        transform: 'translate(153.33333333333334, 143.75)',
      },
      {
        cx: '180.00000000000003',
        cy: '119.00000000000001',
        d: 'M0,0',
        transform: 'translate(180.00000000000003, 119.00000000000001)',
      },
      {
        cx: '206.66666666666669',
        cy: '168.49999999999997',
        d: 'M0,0',
        transform: 'translate(206.66666666666669, 168.49999999999997)',
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

  test('mouse enter on one circle will trigger one Cross', () => {
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

    const symbol = container.querySelectorAll('.recharts-symbols')[0];
    fireEvent.mouseEnter(symbol);

    expect(onMouseEnter).toHaveBeenCalled();
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
        transform: 'translate(105, 185)',
      },
      {
        cx: '155',
        cy: '267.5',
        d: 'M0,0',
        transform: 'translate(155, 267.5)',
      },
      {
        cx: '205',
        cy: '102.5',
        d: 'M0,0',
        transform: 'translate(205, 102.5)',
      },
      {
        cx: '255',
        cy: '143.75',
        d: 'M0,0',
        transform: 'translate(255, 143.75)',
      },
      {
        cx: '305',
        cy: '20',
        d: 'M0,0',
        transform: 'translate(305, 20)',
      },
      {
        cx: '355',
        cy: '119.00000000000001',
        d: 'M0,0',
        transform: 'translate(355, 119.00000000000001)',
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
    it(
      'should provide viewBox and clipPathId if there are no axes',
      testChartLayoutContext(
        props => (
          <ScatterChart width={100} height={50} barSize={20}>
            {props.children}
          </ScatterChart>
        ),
        ({ clipPathId, viewBox, xAxisMap, yAxisMap }) => {
          expect(clipPathId).toMatch(/recharts\d+-clip/);
          expect(viewBox).toEqual({ height: 40, width: 90, x: 5, y: 5 });
          expect(xAxisMap).toEqual({});
          expect(yAxisMap).toEqual({});
        },
      ),
    );

    it(
      'should set width and height in context',
      testChartLayoutContext(
        props => (
          <ScatterChart width={100} height={50} barSize={20}>
            {props.children}
          </ScatterChart>
        ),
        ({ width, height }) => {
          expect(width).toBe(100);
          expect(height).toBe(50);
        },
      ),
    );

    it('should provide axisMaps if axes are specified', () => {
      const clipPathSpy = vi.fn();
      const viewBoxSpy = vi.fn();
      const xAxisMapSpy = vi.fn();
      const yAxisMapSpy = vi.fn();
      const Comp = (): null => {
        clipPathSpy(useClipPathId());
        viewBoxSpy(useViewBox());
        xAxisMapSpy(useAppSelector(state => state.axis.xAxisMap));
        yAxisMapSpy(useAppSelector(state => state.axis.yAxisMap));
        return null;
      };
      render(
        <ScatterChart width={100} height={50} barSize={20}>
          <XAxis dataKey="number" type="number" />
          <YAxis type="category" dataKey="name" />
          <Customized component={<Comp />} />
        </ScatterChart>,
      );
      expect(clipPathSpy).toHaveBeenLastCalledWith(expect.stringMatching(/recharts\d+-clip/));
      expect(viewBoxSpy).toHaveBeenLastCalledWith({ height: 10, width: 30, x: 65, y: 5 });
      expect(viewBoxSpy).toHaveBeenCalledTimes(3);
      expect(xAxisMapSpy).toHaveBeenLastCalledWith({
        '0': {
          allowDataOverflow: false,
          allowDecimals: true,
          allowDuplicatedCategory: true,
          axisType: 'xAxis',
          bandSize: 0,
          categoricalDomain: [],
          dataKey: 'number',
          domain: [0, -Infinity],
          duplicateDomain: undefined,
          height: 30,
          hide: false,
          isCategorical: true,
          layout: 'horizontal',
          mirror: false,
          niceTicks: [0, -Infinity, -Infinity, -Infinity, -Infinity],
          orientation: 'bottom',
          originalDomain: [0, 'auto'],
          padding: {
            left: 0,
            right: 0,
          },
          realScaleType: 'linear',
          reversed: false,
          scale: expect.any(Function),
          tickCount: 5,
          type: 'number',
          width: 30,
          x: 65,
          xAxisId: 0,
          y: 15,
        },
      });
      expect(yAxisMapSpy).toHaveBeenLastCalledWith({
        '0': {
          allowDataOverflow: false,
          allowDecimals: true,
          allowDuplicatedCategory: true,
          axisType: 'yAxis',
          bandSize: 10,
          categoricalDomain: undefined,
          dataKey: 'name',
          domain: [],
          duplicateDomain: undefined,
          height: 10,
          hide: false,
          isCategorical: false,
          layout: 'horizontal',
          mirror: false,
          orientation: 'left',
          originalDomain: undefined,
          padding: {
            bottom: 0,
            top: 0,
          },
          realScaleType: 'band',
          reversed: false,
          scale: expect.any(Function),
          tickCount: 5,
          type: 'category',
          width: 60,
          x: 5,
          y: 5,
          yAxisId: 0,
        },
      });
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
        transform: 'translate(186.66666666666669, 185)',
      },
      {
        cx: '208',
        cy: '267.5',
        d: 'M0,0',
        transform: 'translate(208, 267.5)',
      },
      {
        cx: '261.3333333333333',
        cy: '102.5',
        d: 'M0,0',
        transform: 'translate(261.3333333333333, 102.5)',
      },
      {
        cx: '229.33333333333331',
        cy: '143.75',
        d: 'M0,0',
        transform: 'translate(229.33333333333331, 143.75)',
      },
      {
        cx: '240',
        cy: '20',
        d: 'M0,0',
        transform: 'translate(240, 20)',
      },
      {
        cx: '197.33333333333331',
        cy: '119.00000000000001',
        d: 'M0,0',
        transform: 'translate(197.33333333333331, 119.00000000000001)',
      },
      {
        cx: '400',
        cy: '226.25',
        d: 'M0,0',
        transform: 'translate(400, 226.25)',
      },
      {
        cx: '506.6666666666667',
        cy: '143.75',
        d: 'M0,0',
        transform: 'translate(506.6666666666667, 143.75)',
      },
      {
        cx: '293.33333333333337',
        cy: '61.25',
        d: 'M0,0',
        transform: 'translate(293.33333333333337, 61.25)',
      },
      {
        cx: '442.6666666666667',
        cy: '205.625',
        d: 'M0,0',
        transform: 'translate(442.6666666666667, 205.625)',
      },
      {
        cx: '677.3333333333334',
        cy: '143.75',
        d: 'M0,0',
        transform: 'translate(677.3333333333334, 143.75)',
      },
      {
        cx: '325.3333333333333',
        cy: '28.250000000000007',
        d: 'M0,0',
        transform: 'translate(325.3333333333333, 28.250000000000007)',
      },
      {
        cx: '613.3333333333334',
        cy: '185',
        d: 'M0,0',
        transform: 'translate(613.3333333333334, 185)',
      },
      {
        cx: '400',
        cy: '143.75',
        d: 'M0,0',
        transform: 'translate(400, 143.75)',
      },
      {
        cx: '336',
        cy: '226.25',
        d: 'M0,0',
        transform: 'translate(336, 226.25)',
      },
      {
        cx: '421.3333333333333',
        cy: '123.125',
        d: 'M0,0',
        transform: 'translate(421.3333333333333, 123.125)',
      },
      {
        cx: '613.3333333333334',
        cy: '185',
        d: 'M0,0',
        transform: 'translate(613.3333333333334, 185)',
      },
      {
        cx: '528',
        cy: '234.5',
        d: 'M0,0',
        transform: 'translate(528, 234.5)',
      },
    ]);
  });
});
