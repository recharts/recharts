import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Customized, LineChart, Scatter, ScatterChart, XAxis, YAxis } from '../../../src';
import { ExpectAxisDomain, expectXAxisTicks } from '../../helper/expectAxisTicks';
import { expectLastCalledWith } from '../../helper/expectLastCalledWith';

const data = [
  { x: 90, y: 90, z: 90 },
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

const lineData = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
  { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
  { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
  { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
  { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
];

describe('XAxis dataKey', () => {
  it('should render array indexes when dataKey is not specified', () => {
    const axisDomainSpy = vi.fn();
    const { container } = render(
      <LineChart width={400} height={400} data={lineData}>
        <XAxis />
        <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
      </LineChart>,
    );

    expectXAxisTicks(container, [
      {
        textContent: '0',
        x: '5',
        y: '373',
      },
      {
        textContent: '1',
        x: '83',
        y: '373',
      },
      {
        textContent: '2',
        x: '161',
        y: '373',
      },
      {
        textContent: '3',
        x: '239',
        y: '373',
      },
      {
        textContent: '4',
        x: '317',
        y: '373',
      },
      {
        textContent: '5',
        x: '395',
        y: '373',
      },
    ]);
    expect(axisDomainSpy).toHaveBeenLastCalledWith([0, 1, 2, 3, 4, 5]);
  });

  it('should not render any ticks when dataKey is specified but does not match the data', () => {
    const spy = vi.fn();
    const { container } = render(
      <LineChart width={400} height={400} data={lineData}>
        <XAxis dataKey="foo" />
        <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
      </LineChart>,
    );

    expectXAxisTicks(container, []);
    expectLastCalledWith(spy, []);
  });

  it('Render 1 x-CartesianAxis and 1 y-CartesianAxis ticks in ScatterChart', () => {
    const axisDomainSpy = vi.fn();
    const { container } = render(
      <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey="x" name="stature" unit="cm" />
        <YAxis dataKey="y" name="weight" unit="kg" />
        <Scatter name="A school" data={data} fill="#ff7300" />
        <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
      </ScatterChart>,
    );

    expect(container.querySelectorAll('.recharts-cartesian-axis-line')).toHaveLength(2);
    expect(axisDomainSpy).toHaveBeenLastCalledWith([90, 100, 120, 170, 140, 150, 110]);
  });
});
