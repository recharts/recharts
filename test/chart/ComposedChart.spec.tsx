import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from '../../src';
import { assertNotNull } from '../helper/assertNotNull';
import { testChartLayoutContext } from '../util/context';

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
      'should provide viewBox and clipPathId',
      testChartLayoutContext(
        props => (
          <ComposedChart width={100} height={50} barSize={20}>
            {props.children}
          </ComposedChart>
        ),
        ({ clipPathId, viewBox }) => {
          expect(clipPathId).toMatch(/recharts\d+-clip/);
          expect(viewBox).toEqual({ height: 40, width: 90, x: 5, y: 5 });
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
  });
});
