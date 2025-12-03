import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { useAppSelector } from '../../../src/state/hooks';
import { Bar, BarChart, Customized, XAxis, YAxis } from '../../../src';
import { ExpectAxisDomain, expectXAxisTicks } from '../../helper/expectAxisTicks';
import { expectBars } from '../../helper/expectBars';
import { selectChartDataWithIndexes } from '../../../src/state/selectors/dataSelectors';
import { selectTicksOfGraphicalItem } from '../../../src/state/selectors/axisSelectors';
import {
  selectAllBarPositions,
  selectBarBandSize,
  selectBarCartesianAxisSize,
  selectBarSizeList,
} from '../../../src/state/selectors/barSelectors';
import { assertNotNull } from '../../helper/assertNotNull';

const data = [
  { x: 90, y: 90, z: 90 },
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

describe('XAxis barSize', () => {
  it('Render Bars with gap when there are duplicate values in the data', () => {
    const axisDomainSpy = vi.fn();
    const { container } = render(
      <BarChart width={300} height={300} data={data}>
        <Bar dataKey="x" isAnimationActive={false} />
        <XAxis dataKey="y" type="number" domain={['dataMin', 'dataMax']} padding="gap" />
        <YAxis dataKey="x" />
        <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
      </BarChart>,
    );

    expectBars(container, [
      {
        d: 'M 65.8377,135 h 5 v 130 h -5 Z',
        height: '130',
        radius: '0',
        width: '5',
        x: '65.8377',
        y: '135',
      },
      {
        d: 'M 144.8179,120.5556 h 5 v 144.4444 h -5 Z',
        height: '144.4444',
        radius: '0',
        width: '5',
        x: '144.8179',
        y: '120.5556',
      },
      {
        d: 'M 73.0177,91.6667 h 5 v 173.3333 h -5 Z',
        height: '173.3333',
        radius: '0',
        width: '5',
        x: '73.0177',
        y: '91.6667',
      },
      {
        d: 'M 216.6181,19.4444 h 5 v 245.5556 h -5 Z',
        height: '245.5556',
        radius: '0',
        width: '5',
        x: '216.6181',
        y: '19.4444',
      },
      {
        d: 'M 180.718,62.7778 h 5 v 202.2222 h -5 Z',
        height: '202.2222',
        radius: '0',
        width: '5',
        x: '180.718',
        y: '62.7778',
      },
      {
        d: 'M 288.4183,48.3333 h 5 v 216.6667 h -5 Z',
        height: '216.6667',
        radius: '0',
        width: '5',
        x: '288.4183',
        y: '48.3333',
      },
      {
        d: 'M 202.2581,106.1111 h 5 v 158.8889 h -5 Z',
        height: '158.8889',
        radius: '0',
        width: '5',
        x: '202.2581',
        y: '106.1111',
      },
    ]);
    expect(axisDomainSpy).toHaveBeenLastCalledWith([90, 400]);
    expectXAxisTicks(container, [
      { textContent: '90', x: '68.70967741935483', y: '273' },
      { textContent: '170', x: '126.14984391259105', y: '273' },
      { textContent: '250', x: '183.59001040582726', y: '273' },
      { textContent: '330', x: '241.0301768990635', y: '273' },
      { textContent: '400', x: '291.2903225806452', y: '273' },
    ]);
  });

  it('Render Bars for a single data point with barSize=50%', () => {
    const axisDomainSpy = vi.fn();
    const chartDataSpy = vi.fn();
    const yAxisTicksSpy = vi.fn();
    const barBandSizeSpy = vi.fn();
    const barPositionsSpy = vi.fn();
    const barSizeListSpy = vi.fn();
    const totalAxisSizeSpy = vi.fn();

    const Comp = (): null => {
      chartDataSpy(useAppSelector(selectChartDataWithIndexes));
      yAxisTicksSpy(useAppSelector(state => selectTicksOfGraphicalItem(state, 'yAxis', 0, false)));
      barBandSizeSpy(useAppSelector(state => selectBarBandSize(state, 'my-bar-id', false)));
      barPositionsSpy(useAppSelector(state => selectAllBarPositions(state, 'my-bar-id', false)));
      barSizeListSpy(useAppSelector(state => selectBarSizeList(state, 'my-bar-id', false)));
      totalAxisSizeSpy(useAppSelector(state => selectBarCartesianAxisSize(state, 'my-bar-id')));
      return null;
    };

    const { container } = render(
      <BarChart width={300} height={300} data={data.slice(0, 1)} barSize="50%">
        <Bar dataKey="y" isAnimationActive={false} id="my-bar-id" />
        <XAxis dataKey="x" type="number" domain={[50, 150]} />
        <YAxis dataKey="y" />
        <ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />
        <Comp />
      </BarChart>,
    );

    expect(totalAxisSizeSpy).toHaveBeenLastCalledWith(230);

    expect(barSizeListSpy).toHaveBeenLastCalledWith([
      {
        barSize: 115,
        dataKeys: ['y'],
        stackId: undefined,
      },
    ]);
    expect(barSizeListSpy).toHaveBeenCalledTimes(2);

    expect(yAxisTicksSpy).toHaveBeenLastCalledWith([
      {
        coordinate: 265,
        offset: 0,
        value: 0,
      },
      {
        coordinate: 213,
        offset: 0,
        value: 20,
      },
      {
        coordinate: 161,
        offset: 0,
        value: 40,
      },
      {
        coordinate: 109,
        offset: 0,
        value: 60,
      },
      {
        coordinate: 56.999999999999986,
        offset: 0,
        value: 80,
      },
      {
        coordinate: 5,
        offset: 0,
        value: 100,
      },
    ]);
    expect(yAxisTicksSpy).toHaveBeenCalledTimes(2);

    expect(barBandSizeSpy).toHaveBeenLastCalledWith(0);
    expect(barBandSizeSpy).toHaveBeenCalledTimes(2);

    expect(barPositionsSpy).toHaveBeenLastCalledWith([
      {
        dataKeys: ['y'],
        position: {
          offset: -57,
          size: 115,
        },
        stackId: undefined,
      },
    ]);
    expect(barPositionsSpy).toHaveBeenCalledTimes(2);

    expect(chartDataSpy).toHaveBeenLastCalledWith({
      chartData: [
        {
          x: 90,
          y: 90,
          z: 90,
        },
      ],
      computedData: undefined,
      dataEndIndex: 0,
      dataStartIndex: 0,
    });
    expect(chartDataSpy).toHaveBeenCalledTimes(2);

    expectBars(container, [
      {
        d: 'M 100,31 h 115 v 234 h -115 Z',
        height: '234',
        radius: '0',
        width: '115',
        x: '100',
        y: '31',
      },
    ]);
    expectXAxisTicks(container, [
      {
        textContent: '50',
        x: '65',
        y: '273',
      },
      {
        textContent: '75',
        x: '122.5',
        y: '273',
      },
      {
        textContent: '100',
        x: '180',
        y: '273',
      },
      {
        textContent: '125',
        x: '237.5',
        y: '273',
      },
      {
        textContent: '150',
        x: '295',
        y: '273',
      },
    ]);
    expect(axisDomainSpy).toHaveBeenLastCalledWith([50, 150]);
  });

  it('Render Bars for a single data point with barSize=20% and no-gap', () => {
    const axisDomainSpy = vi.fn();
    const { container } = render(
      <BarChart width={300} height={300} data={data.slice(0, 1)} barSize="20%">
        <Bar dataKey="y" isAnimationActive={false} />
        <XAxis dataKey="x" type="number" domain={[100, 150]} padding="no-gap" />
        <YAxis dataKey="y" />
        <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
      </BarChart>,
    );

    const bar = container.querySelector('.recharts-rectangle');
    assertNotNull(bar);
    expect(bar).toBeInTheDocument();
    expect(bar.getAttribute('x')).toEqual('42');
    expect(bar.getAttribute('width')).toEqual('46');
    expectBars(container, [
      {
        d: 'M 42,31 h 46 v 234 h -46 Z',
        height: '234',
        radius: '0',
        width: '46',
        x: '42',
        y: '31',
      },
    ]);
    expectXAxisTicks(container, [
      {
        textContent: '90',
        x: '65',
        y: '273',
      },
      {
        textContent: '105',
        x: '122.5',
        y: '273',
      },
      {
        textContent: '120',
        x: '180',
        y: '273',
      },
      {
        textContent: '135',
        x: '237.5',
        y: '273',
      },
      {
        textContent: '150',
        x: '295',
        y: '273',
      },
    ]);
    expect(axisDomainSpy).toHaveBeenLastCalledWith([90, 150]);
  });
});
