import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { ComposedChart, Line, Bar, Area, XAxis, YAxis, Legend, CartesianGrid, Tooltip, Customized } from '../../src';
import { assertNotNull } from '../helper/assertNotNull';
import { testChartLayoutContext } from '../util/context';
import { useClipPathId, useViewBox } from '../../src/context/chartLayoutContext';
import { useAppSelector } from '../../src/state/hooks';

describe('<ComposedChart />', () => {
  const data = [
    { name: 'Page A', uv: 590, pv: 800, amt: 1400 },
    { name: 'Page B', uv: 868, pv: 967, amt: 1506 },
    { name: 'Page C', uv: 1397, pv: 1098, amt: 989 },
    { name: 'Page D', uv: 1480, pv: 1200, amt: 1228 },
    { name: 'Page E', uv: 1520, pv: 1108, amt: 1100 },
    { name: 'Page F', uv: 1400, pv: 680, amt: 1700 },
  ];

  test('Render 1 line, 1 area, 1bar in the ComposedChart', () => {
    const { container } = render(
      <ComposedChart width={800} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </ComposedChart>,
    );

    expect(container.querySelectorAll('.recharts-line .recharts-line-curve')).toHaveLength(1);
    expect(container.querySelectorAll('.recharts-bar')).toHaveLength(1);
    expect(container.querySelectorAll('.recharts-area .recharts-area-area')).toHaveLength(1);
  });

  test('Render 1 bar, 1 dot when data has only one element', () => {
    const singleData = [data[0]];
    const { container } = render(
      <ComposedChart width={800} height={400} data={singleData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey="name" />
        <YAxis dataKey="pv" orientation="left" yAxisId="left" />
        <YAxis dataKey="uv" orientation="right" yAxisId="right" />
        <CartesianGrid stroke="#f5f5f5" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" yAxisId="left" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId="right" />
      </ComposedChart>,
    );
    expect(container.querySelectorAll('.recharts-line .recharts-line-dot')).toHaveLength(1);
    expect(container.querySelectorAll('.recharts-bar .recharts-bar-rectangle')).toHaveLength(1);
  });

  test('MouseEnter ComposedChart should show tooltip, active dot, and cursor', () => {
    const { container } = render(
      <ComposedChart width={800} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <Legend />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Area isAnimationActive={false} type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar isAnimationActive={false} dataKey="pv" barSize={20} fill="#413ea0" />
        <Line isAnimationActive={false} type="monotone" dataKey="uv" stroke="#ff7300" />
      </ComposedChart>,
    );

    const chart = container.querySelector('.recharts-wrapper');
    assertNotNull(chart);
    fireEvent.mouseOver(chart, { clientX: 200, clientY: 100 });

    expect(container.querySelectorAll('.recharts-tooltip-cursor')).toHaveLength(1);
    expect(container.querySelectorAll('.recharts-active-dot')).toHaveLength(2);
  });

  describe('ComposedChart layout context', () => {
    it(
      'should provide viewBox and clipPathId if there are no axes',
      testChartLayoutContext(
        props => (
          <ComposedChart width={100} height={50} barSize={20}>
            {props.children}
          </ComposedChart>
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
          <ComposedChart width={100} height={50} barSize={20}>
            {props.children}
          </ComposedChart>
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
        <ComposedChart width={100} height={50} barSize={20}>
          <XAxis dataKey="number" type="number" />
          <YAxis type="category" dataKey="name" />

          <Customized component={<Comp />} />
        </ComposedChart>,
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
          bandSize: 0,
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
          realScaleType: 'point',
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
