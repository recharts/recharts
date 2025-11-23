import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { useAppSelector } from '../../../src/state/hooks';
import { selectAxisRangeWithReverse, selectTicksOfGraphicalItem } from '../../../src/state/selectors/axisSelectors';
import { selectBarBandSize } from '../../../src/state/selectors/barSelectors';
import { selectChartOffsetInternal } from '../../../src/state/selectors/selectChartOffsetInternal';
import { Bar, BarChart, Customized, XAxis, YAxis } from '../../../src';
import { ExpectAxisDomain, expectXAxisTicks } from '../../helper/expectAxisTicks';
import { expectBars } from '../../helper/expectBars';
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

describe('XAxis padding', () => {
  it('Render Bars with gap', () => {
    const axisDomainSpy = vi.fn();
    const yAxisRangeSpy = vi.fn();
    const barTicksSpy = vi.fn();
    const barBandSizeSpy = vi.fn();
    const offsetSpy = vi.fn();

    const Comp = (): null => {
      yAxisRangeSpy(useAppSelector(state => selectAxisRangeWithReverse(state, 'yAxis', 0, false)));
      barTicksSpy(useAppSelector(state => selectTicksOfGraphicalItem(state, 'xAxis', 0, false)));
      barBandSizeSpy(useAppSelector(state => selectBarBandSize(state, 0, 0, false, 'my-bar-id')));
      offsetSpy(useAppSelector(selectChartOffsetInternal));
      return null;
    };

    const { container } = render(
      <BarChart width={300} height={300} data={data}>
        <Bar dataKey="y" isAnimationActive={false} id="my-bar-id" />
        <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} padding="gap" />
        <YAxis dataKey="y" />
        <ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />
        <Comp />
      </BarChart>,
    );

    expect(barBandSizeSpy).toHaveBeenLastCalledWith(25.15625);
    expect(barBandSizeSpy).toHaveBeenCalledTimes(2);

    expect(offsetSpy).toHaveBeenLastCalledWith({
      brushBottom: 35,
      top: 5,
      bottom: 35,
      left: 65,
      right: 5,
      width: 230,
      height: 260,
    });
    expect(offsetSpy).toHaveBeenCalledTimes(2);

    expect(yAxisRangeSpy).toHaveBeenLastCalledWith([265, 5]);
    expect(yAxisRangeSpy).toHaveBeenCalledTimes(2);

    expect(barTicksSpy).toHaveBeenLastCalledWith([
      {
        coordinate: 79.375,
        index: 0,
        offset: 0,
        value: 90,
      },
      {
        coordinate: 104.53125,
        index: 1,
        offset: 0,
        value: 100,
      },
      {
        coordinate: 154.84375,
        index: 2,
        offset: 0,
        value: 120,
      },
      {
        coordinate: 280.625,
        index: 3,
        offset: 0,
        value: 170,
      },
      {
        coordinate: 205.15625,
        index: 4,
        offset: 0,
        value: 140,
      },
      {
        coordinate: 230.3125,
        index: 5,
        offset: 0,
        value: 150,
      },
      {
        coordinate: 129.6875,
        index: 6,
        offset: 0,
        value: 110,
      },
    ]);
    expect(barTicksSpy).toHaveBeenCalledTimes(2);

    expectBars(container, [
      {
        d: 'M 69.3125,206.5 h 20 v 58.5 h -20 Z',
        height: '58.5',
        radius: '0',
        width: '20',
        x: '69.3125',
        y: '206.5',
      },
      {
        d: 'M 94.46875,135 h 20 v 130 h -20 Z',
        height: '130',
        radius: '0',
        width: '20',
        x: '94.46875',
        y: '135',
      },
      {
        d: 'M 144.78125,200 h 20 v 65 h -20 Z',
        height: '65',
        radius: '0',
        width: '20',
        x: '144.78125',
        y: '200',
      },
      {
        d: 'M 270.5625,70 h 20 v 195 h -20 Z',
        height: '195',
        radius: '0',
        width: '20',
        x: '270.5625',
        y: '70',
      },
      {
        d: 'M 195.09375,102.5 h 20 v 162.5 h -20 Z',
        height: '162.5',
        radius: '0',
        width: '20',
        x: '195.09375',
        y: '102.5',
      },
      {
        d: 'M 220.25,5 h 20 v 260 h -20 Z',
        height: '260',
        radius: '0',
        width: '20',
        x: '220.25',
        y: '5',
      },
      {
        d: 'M 119.625,83.00000000000001 h 20 v 182 h -20 Z',
        height: '182',
        radius: '0',
        width: '20',
        x: '119.625',
        y: '83.00000000000001',
      },
    ]);
    expect(axisDomainSpy).toHaveBeenLastCalledWith([90, 170]);
    expectXAxisTicks(container, [
      {
        textContent: '90',
        x: '79.375',
        y: '273',
      },
      {
        textContent: '110',
        x: '129.6875',
        y: '273',
      },
      {
        textContent: '130',
        x: '180',
        y: '273',
      },
      {
        textContent: '150',
        x: '230.3125',
        y: '273',
      },
      {
        textContent: '170',
        x: '280.625',
        y: '273',
      },
    ]);
  });

  it('Render Bars with gap in 10000 width chart', () => {
    const axisDomainSpy = vi.fn();
    const { container } = render(
      <BarChart width={10000} height={300} data={data}>
        <Bar dataKey="y" isAnimationActive={false} />
        <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} padding="gap" />
        <YAxis dataKey="y" />
        <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
      </BarChart>,
    );

    expectBars(container, [
      {
        d: 'M 251.1875,206.5 h 868 v 58.5 h -868 Z',
        height: '58.5',
        radius: '0',
        width: '868',
        x: '251.1875',
        y: '206.5',
      },
      {
        d: 'M 1337.28125,135 h 868 v 130 h -868 Z',
        height: '130',
        radius: '0',
        width: '868',
        x: '1337.28125',
        y: '135',
      },
      {
        d: 'M 3509.46875,200 h 868 v 65 h -868 Z',
        height: '65',
        radius: '0',
        width: '868',
        x: '3509.46875',
        y: '200',
      },
      {
        d: 'M 8939.9375,70 h 868 v 195 h -868 Z',
        height: '195',
        radius: '0',
        width: '868',
        x: '8939.9375',
        y: '70',
      },
      {
        d: 'M 5681.65625,102.5 h 868 v 162.5 h -868 Z',
        height: '162.5',
        radius: '0',
        width: '868',
        x: '5681.65625',
        y: '102.5',
      },
      {
        d: 'M 6767.75,5 h 868 v 260 h -868 Z',
        height: '260',
        radius: '0',
        width: '868',
        x: '6767.75',
        y: '5',
      },
      {
        d: 'M 2423.375,83.00000000000001 h 868 v 182 h -868 Z',
        height: '182',
        radius: '0',
        width: '868',
        x: '2423.375',
        y: '83.00000000000001',
      },
    ]);
    expect(axisDomainSpy).toHaveBeenLastCalledWith([90, 170]);
    expectXAxisTicks(container, [
      {
        textContent: '90',
        x: '685.625',
        y: '273',
      },
      {
        textContent: '110',
        x: '2857.8125',
        y: '273',
      },
      {
        textContent: '130',
        x: '5030',
        y: '273',
      },
      {
        textContent: '150',
        x: '7202.1875',
        y: '273',
      },
      {
        textContent: '170',
        x: '9374.375',
        y: '273',
      },
    ]);
  });

  it('Render Bars with no gap', () => {
    const axisDomainSpy = vi.fn();
    const { container } = render(
      <BarChart width={300} height={300} data={data}>
        <Bar dataKey="y" isAnimationActive={false} />
        <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} padding="no-gap" />
        <YAxis dataKey="y" />
        <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
      </BarChart>,
    );

    expectBars(container, [
      {
        d: 'M 65.99187500000001,206.5 h 20 v 58.5 h -20 Z',
        height: '58.5',
        radius: '0',
        width: '20',
        x: '65.99187500000001',
        y: '206.5',
      },
      {
        d: 'M 91.90281250000001,135 h 20 v 130 h -20 Z',
        height: '130',
        radius: '0',
        width: '20',
        x: '91.90281250000001',
        y: '135',
      },
      {
        d: 'M 143.72468750000002,200 h 20 v 65 h -20 Z',
        height: '65',
        radius: '0',
        width: '20',
        x: '143.72468750000002',
        y: '200',
      },
      {
        d: 'M 273.2793750000001,70 h 20 v 195 h -20 Z',
        height: '195',
        radius: '0',
        width: '20',
        x: '273.2793750000001',
        y: '70',
      },
      {
        d: 'M 195.5465625,102.5 h 20 v 162.5 h -20 Z',
        height: '162.5',
        radius: '0',
        width: '20',
        x: '195.5465625',
        y: '102.5',
      },
      {
        d: 'M 221.45750000000004,5 h 20 v 260 h -20 Z',
        height: '260',
        radius: '0',
        width: '20',
        x: '221.45750000000004',
        y: '5',
      },
      {
        d: 'M 117.81375000000003,83.00000000000001 h 20 v 182 h -20 Z',
        height: '182',
        radius: '0',
        width: '20',
        x: '117.81375000000003',
        y: '83.00000000000001',
      },
    ]);
    expectXAxisTicks(container, [
      {
        textContent: '90',
        x: '76.35625',
        y: '273',
      },
      {
        textContent: '110',
        x: '128.17812500000002',
        y: '273',
      },
      {
        textContent: '130',
        x: '180',
        y: '273',
      },
      {
        textContent: '150',
        x: '231.82187500000003',
        y: '273',
      },
      {
        textContent: '170',
        x: '283.64375',
        y: '273',
      },
    ]);
    expect(axisDomainSpy).toHaveBeenLastCalledWith([90, 170]);
  });

  it('Render Bars with custom gap', () => {
    const axisDomainSpy = vi.fn();
    const { container } = render(
      <BarChart width={300} height={300} data={data}>
        <Bar dataKey="y" isAnimationActive={false} />
        <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} padding={{ left: 11, right: 17 }} />
        <YAxis dataKey="y" />
        <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
      </BarChart>,
    );

    expectBars(container, [
      {
        d: 'M 65.9,206.5 h 20 v 58.5 h -20 Z',
        height: '58.5',
        radius: '0',
        width: '20',
        x: '65.9',
        y: '206.5',
      },
      {
        d: 'M 91.15,135 h 20 v 130 h -20 Z',
        height: '130',
        radius: '0',
        width: '20',
        x: '91.15',
        y: '135',
      },
      {
        d: 'M 141.65,200 h 20 v 65 h -20 Z',
        height: '65',
        radius: '0',
        width: '20',
        x: '141.65',
        y: '200',
      },
      {
        d: 'M 267.9,70 h 20 v 195 h -20 Z',
        height: '195',
        radius: '0',
        width: '20',
        x: '267.9',
        y: '70',
      },
      {
        d: 'M 192.15,102.5 h 20 v 162.5 h -20 Z',
        height: '162.5',
        radius: '0',
        width: '20',
        x: '192.15',
        y: '102.5',
      },
      {
        d: 'M 217.4,5 h 20 v 260 h -20 Z',
        height: '260',
        radius: '0',
        width: '20',
        x: '217.4',
        y: '5',
      },
      {
        d: 'M 116.4,83.00000000000001 h 20 v 182 h -20 Z',
        height: '182',
        radius: '0',
        width: '20',
        x: '116.4',
        y: '83.00000000000001',
      },
    ]);
    expectXAxisTicks(container, [
      {
        textContent: '90',
        x: '76',
        y: '273',
      },
      {
        textContent: '110',
        x: '126.5',
        y: '273',
      },
      {
        textContent: '130',
        x: '177',
        y: '273',
      },
      {
        textContent: '150',
        x: '227.5',
        y: '273',
      },
      {
        textContent: '170',
        x: '278',
        y: '273',
      },
    ]);
    expect(axisDomainSpy).toHaveBeenLastCalledWith([90, 170]);
  });

  it('Render Bars with padding on the left', () => {
    const axisDomainSpy = vi.fn();
    const { container } = render(
      <BarChart width={300} height={300} data={data}>
        <Bar dataKey="y" isAnimationActive={false} />
        <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} padding={{ left: 19 }} />
        <YAxis dataKey="y" />
        <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
      </BarChart>,
    );

    expectBars(container, [
      {
        d: 'M 73.45,206.5 h 21 v 58.5 h -21 Z',
        height: '58.5',
        radius: '0',
        width: '21',
        x: '73.45',
        y: '206.5',
      },
      {
        d: 'M 99.825,135 h 21 v 130 h -21 Z',
        height: '130',
        radius: '0',
        width: '21',
        x: '99.825',
        y: '135',
      },
      {
        d: 'M 152.575,200 h 21 v 65 h -21 Z',
        height: '65',
        radius: '0',
        width: '21',
        x: '152.575',
        y: '200',
      },
      {
        d: 'M 284.45,70 h 21 v 195 h -21 Z',
        height: '195',
        radius: '0',
        width: '21',
        x: '284.45',
        y: '70',
      },
      {
        d: 'M 205.325,102.5 h 21 v 162.5 h -21 Z',
        height: '162.5',
        radius: '0',
        width: '21',
        x: '205.325',
        y: '102.5',
      },
      {
        d: 'M 231.7,5 h 21 v 260 h -21 Z',
        height: '260',
        radius: '0',
        width: '21',
        x: '231.7',
        y: '5',
      },
      {
        d: 'M 126.2,83.00000000000001 h 21 v 182 h -21 Z',
        height: '182',
        radius: '0',
        width: '21',
        x: '126.2',
        y: '83.00000000000001',
      },
    ]);
    expectXAxisTicks(container, [
      {
        textContent: '90',
        x: '84',
        y: '273',
      },
      {
        textContent: '110',
        x: '136.75',
        y: '273',
      },
      {
        textContent: '130',
        x: '189.5',
        y: '273',
      },
      {
        textContent: '150',
        x: '242.25',
        y: '273',
      },
      {
        textContent: '170',
        x: '295',
        y: '273',
      },
    ]);
    expect(axisDomainSpy).toHaveBeenLastCalledWith([90, 170]);
  });

  it('Render Bars with padding on the right', () => {
    const axisDomainSpy = vi.fn();
    const { container } = render(
      <BarChart width={300} height={300} data={data}>
        <Bar dataKey="y" isAnimationActive={false} />
        <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} padding={{ right: 23 }} />
        <YAxis dataKey="y" />
        <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
      </BarChart>,
    );

    expectBars(container, [
      {
        d: 'M 54.65,206.5 h 20 v 58.5 h -20 Z',
        height: '58.5',
        radius: '0',
        width: '20',
        x: '54.65',
        y: '206.5',
      },
      {
        d: 'M 80.525,135 h 20 v 130 h -20 Z',
        height: '130',
        radius: '0',
        width: '20',
        x: '80.525',
        y: '135',
      },
      {
        d: 'M 132.275,200 h 20 v 65 h -20 Z',
        height: '65',
        radius: '0',
        width: '20',
        x: '132.275',
        y: '200',
      },
      {
        d: 'M 261.65,70 h 20 v 195 h -20 Z',
        height: '195',
        radius: '0',
        width: '20',
        x: '261.65',
        y: '70',
      },
      {
        d: 'M 184.025,102.5 h 20 v 162.5 h -20 Z',
        height: '162.5',
        radius: '0',
        width: '20',
        x: '184.025',
        y: '102.5',
      },
      {
        d: 'M 209.9,5 h 20 v 260 h -20 Z',
        height: '260',
        radius: '0',
        width: '20',
        x: '209.9',
        y: '5',
      },
      {
        d: 'M 106.4,83.00000000000001 h 20 v 182 h -20 Z',
        height: '182',
        radius: '0',
        width: '20',
        x: '106.4',
        y: '83.00000000000001',
      },
    ]);
    expectXAxisTicks(container, [
      {
        textContent: '90',
        x: '65',
        y: '273',
      },
      {
        textContent: '110',
        x: '116.75',
        y: '273',
      },
      {
        textContent: '130',
        x: '168.5',
        y: '273',
      },
      {
        textContent: '150',
        x: '220.25',
        y: '273',
      },
      {
        textContent: '170',
        x: '272',
        y: '273',
      },
    ]);
    expect(axisDomainSpy).toHaveBeenLastCalledWith([90, 170]);
  });

  describe.each(['gap', 'no-gap', { left: 3, right: 5 }] as const)('padding: %s', padding => {
    /* The tickCount is only a suggestion; if the domain is too small, it will render fewer ticks than requested but will try to keep them nice */
    it.each([
      { providedTickCount: 3, expectedTickCount: 3 },
      { providedTickCount: 5, expectedTickCount: 5 },
      { providedTickCount: 7, expectedTickCount: 7 },
      { providedTickCount: 11, expectedTickCount: 11 },
      { providedTickCount: 13, expectedTickCount: 13 },
      { providedTickCount: 17, expectedTickCount: 17 },
      { providedTickCount: 19, expectedTickCount: 17 },
      { providedTickCount: 29, expectedTickCount: 28 },
    ])(
      'renders $expectedTickCount ticks when tickCount=$providedTickCount',
      ({ providedTickCount, expectedTickCount }) => {
        const spy = vi.fn();
        const { container } = render(
          <BarChart width={100000} height={300} data={data}>
            <Bar dataKey="y" isAnimationActive={false} />
            <XAxis
              dataKey="x"
              type="number"
              domain={['dataMin', 'dataMax']}
              padding={padding}
              tickCount={providedTickCount}
            />
            <YAxis dataKey="y" />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </BarChart>,
        );

        expectLastCalledWith(spy, [90, 170]);
        const allTicks = container.querySelectorAll('.recharts-xAxis-tick-labels .recharts-cartesian-axis-tick-value');
        expect(allTicks).toHaveLength(expectedTickCount);
      },
    );
  });
});
