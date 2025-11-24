import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { useAppSelector } from '../../../src/state/hooks';
import { selectTicksOfAxis } from '../../../src/state/selectors/axisSelectors';
import { BarChart, Brush, Customized, XAxis } from '../../../src';
import { ExpectAxisDomain, expectXAxisTicks } from '../../helper/expectAxisTicks';

const data = [
  { x: 90, y: 90, z: 90 },
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

describe('brush and startIndex + endIndex', () => {
  it('should hide ticks when Brush renders with startIndex and endIndex', () => {
    const axisDomainSpy = vi.fn();
    const ticksSpy = vi.fn();
    const Comp = (): null => {
      ticksSpy(useAppSelector(state => selectTicksOfAxis(state, 'xAxis', 0, false)));
      return null;
    };
    const { container } = render(
      <BarChart width={300} height={300} data={data}>
        <XAxis dataKey="x" type="category" />
        <Brush startIndex={1} endIndex={4} />
        <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
        <Comp />
      </BarChart>,
    );
    expectXAxisTicks(container, [
      {
        textContent: '100',
        x: '41.25',
        y: '233',
      },
      {
        textContent: '120',
        x: '113.75',
        y: '233',
      },
      {
        textContent: '170',
        x: '186.25',
        y: '233',
      },
      {
        textContent: '140',
        x: '258.75',
        y: '233',
      },
    ]);
    expect(axisDomainSpy).toHaveBeenLastCalledWith([100, 120, 170, 140]);
    expect(ticksSpy).toHaveBeenLastCalledWith([
      {
        coordinate: 41.25,
        index: 0,
        offset: 36.25,
        value: 100,
      },
      {
        coordinate: 113.75,
        index: 1,
        offset: 36.25,
        value: 120,
      },
      {
        coordinate: 186.25,
        index: 2,
        offset: 36.25,
        value: 170,
      },
      {
        coordinate: 258.75,
        index: 3,
        offset: 36.25,
        value: 140,
      },
    ]);
  });

  it('should hide ticks when Brush travellers move', () => {
    const axisDomainSpy = vi.fn();
    const ticksSpy = vi.fn();
    const Comp = (): null => {
      ticksSpy(useAppSelector(state => selectTicksOfAxis(state, 'xAxis', 0, false)));
      return null;
    };
    const { container, rerender } = render(
      <BarChart width={300} height={300} data={data}>
        <XAxis dataKey="x" type="category" />
        <Brush />
        <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
        <Comp />
      </BarChart>,
    );
    expectXAxisTicks(container, [
      {
        textContent: '90',
        x: '25.714285714285715',
        y: '233',
      },
      {
        textContent: '100',
        x: '67.14285714285714',
        y: '233',
      },
      {
        textContent: '120',
        x: '108.57142857142858',
        y: '233',
      },
      {
        textContent: '170',
        x: '150',
        y: '233',
      },
      {
        textContent: '140',
        x: '191.42857142857144',
        y: '233',
      },
      {
        textContent: '150',
        x: '232.8571428571429',
        y: '233',
      },
      {
        textContent: '110',
        x: '274.2857142857143',
        y: '233',
      },
    ]);
    expect(axisDomainSpy).toHaveBeenLastCalledWith([90, 100, 120, 170, 140, 150, 110]);
    expect(ticksSpy).toHaveBeenLastCalledWith([
      {
        coordinate: 25.714285714285715,
        index: 0,
        offset: 20.714285714285715,
        value: 90,
      },
      {
        coordinate: 67.14285714285714,
        index: 1,
        offset: 20.714285714285715,
        value: 100,
      },
      {
        coordinate: 108.57142857142858,
        index: 2,
        offset: 20.714285714285715,
        value: 120,
      },
      {
        coordinate: 150,
        index: 3,
        offset: 20.714285714285715,
        value: 170,
      },
      {
        coordinate: 191.42857142857144,
        index: 4,
        offset: 20.714285714285715,
        value: 140,
      },
      {
        coordinate: 232.8571428571429,
        index: 5,
        offset: 20.714285714285715,
        value: 150,
      },
      {
        coordinate: 274.2857142857143,
        index: 6,
        offset: 20.714285714285715,
        value: 110,
      },
    ]);

    rerender(
      <BarChart width={300} height={300} data={data}>
        <XAxis dataKey="x" type="category" />
        <Brush startIndex={1} endIndex={4} />
        <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
        <Comp />
      </BarChart>,
    );

    expect(axisDomainSpy).toHaveBeenLastCalledWith([100, 120, 170, 140]);
    expect(ticksSpy).toHaveBeenLastCalledWith([
      {
        coordinate: 41.25,
        index: 0,
        offset: 36.25,
        value: 100,
      },
      {
        coordinate: 113.75,
        index: 1,
        offset: 36.25,
        value: 120,
      },
      {
        coordinate: 186.25,
        index: 2,
        offset: 36.25,
        value: 170,
      },
      {
        coordinate: 258.75,
        index: 3,
        offset: 36.25,
        value: 140,
      },
    ]);

    expectXAxisTicks(container, [
      {
        textContent: '100',
        x: '41.25',
        y: '233',
      },
      {
        textContent: '120',
        x: '113.75',
        y: '233',
      },
      {
        textContent: '170',
        x: '186.25',
        y: '233',
      },
      {
        textContent: '140',
        x: '258.75',
        y: '233',
      },
    ]);
  });
});
