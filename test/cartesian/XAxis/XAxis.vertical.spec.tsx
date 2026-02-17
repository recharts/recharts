import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { BarChart, CartesianGrid, Customized, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from '../../../src';
import {
  selectRenderableAxisSettings,
  selectCartesianGraphicalItemsData,
  selectDisplayedData,
} from '../../../src/state/selectors/axisSelectors';
import { useAppSelector } from '../../../src/state/hooks';
import { ExpectAxisDomain, expectXAxisTicks } from '../../helper/expectAxisTicks';
import { XAxisSettings } from '../../../src/state/cartesianAxisSlice';
import { pageData } from '../../../storybook/stories/data';
import { useIsPanorama } from '../../../src/context/PanoramaContext';

describe('<XAxis />', () => {
  const data = [
    { x: 90, y: 90, z: 90 },
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 },
  ];

  describe('layout=vertical', () => {
    it.each(['category', undefined] as const)('should render categorical XAxis when type=%s', axisDomainType => {
      const axisDomainSpy = vi.fn();
      const { container } = render(
        <BarChart width={300} height={300} layout="vertical" data={data}>
          <XAxis dataKey="z" type={axisDomainType} />
          <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
        </BarChart>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '90',
          x: '29.166666666666668',
          y: '273',
        },
        {
          textContent: '200',
          x: '77.5',
          y: '273',
        },
        {
          textContent: '260',
          x: '125.83333333333334',
          y: '273',
        },
        {
          textContent: '400',
          x: '174.16666666666666',
          y: '273',
        },
        {
          textContent: '280',
          x: '222.5',
          y: '273',
        },
        {
          textContent: '500',
          x: '270.83333333333337',
          y: '273',
        },
      ]);
      expect(axisDomainSpy).toHaveBeenLastCalledWith([90, 200, 260, 400, 280, 500]);
    });

    it.each(['category', undefined] as const)(
      'should render categorical XAxis, but ignore allowDuplicatedCategory when type=%s',
      axisDomainType => {
        const axisDomainSpy = vi.fn();
        const { container } = render(
          <BarChart width={300} height={300} layout="vertical" data={data}>
            <XAxis dataKey="z" type={axisDomainType} allowDuplicatedCategory />
            <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
          </BarChart>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '90',
            x: '29.166666666666668',
            y: '273',
          },
          {
            textContent: '200',
            x: '77.5',
            y: '273',
          },
          {
            textContent: '260',
            x: '125.83333333333334',
            y: '273',
          },
          {
            textContent: '400',
            x: '174.16666666666666',
            y: '273',
          },
          {
            textContent: '280',
            x: '222.5',
            y: '273',
          },
          {
            textContent: '500',
            x: '270.83333333333337',
            y: '273',
          },
        ]);
        expect(axisDomainSpy).toHaveBeenLastCalledWith([90, 200, 260, 400, 280, 500]);
      },
    );

    it('should allow switching to number', () => {
      const axisDomainSpy = vi.fn();
      const { container } = render(
        <BarChart width={300} height={300} layout="vertical" data={data}>
          <XAxis dataKey="z" type="number" />
          <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
        </BarChart>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '0',
          x: '5',
          y: '273',
        },
        {
          textContent: '150',
          x: '77.5',
          y: '273',
        },
        {
          textContent: '300',
          x: '150',
          y: '273',
        },
        {
          textContent: '450',
          x: '222.5',
          y: '273',
        },
        {
          textContent: '600',
          x: '295',
          y: '273',
        },
      ]);
      expect(axisDomainSpy).toHaveBeenLastCalledWith([0, 600]);
    });

    it('should render with in LineChart VerticalWithSpecifiedDomain', () => {
      const axisDomainSpy = vi.fn();
      const axisSettingsSpy = vi.fn();
      const displayedDataSpy = vi.fn();
      const itemDataSpy = vi.fn();
      const Comp = (): null => {
        const isPanorama = useIsPanorama();
        axisSettingsSpy(useAppSelector(state => selectRenderableAxisSettings(state, 'xAxis', 0)));
        displayedDataSpy(useAppSelector(state => selectDisplayedData(state, 'xAxis', 0, isPanorama)));
        itemDataSpy(useAppSelector(state => selectCartesianGraphicalItemsData(state, 'xAxis', 0)));
        return null;
      };
      const { container } = render(
        <LineChart
          layout="vertical"
          width={500}
          height={300}
          data={pageData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 'dataMax + 1000']} />
          <YAxis dataKey="name" type="category" />
          <Legend />
          <Line dataKey="pv" stroke="#8884d8" />
          <Line dataKey="uv" stroke="#82ca9d" />
          <Tooltip />
          <Comp />
          <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
        </LineChart>,
      );
      expectXAxisTicks(container, [
        { textContent: '0', x: '80', y: '273' },
        { textContent: '650', x: '180.59523809523813', y: '273' },
        { textContent: '1300', x: '281.1904761904762', y: '273' },
        { textContent: '1950', x: '381.7857142857143', y: '273' },
        { textContent: '2520', x: '470', y: '273' },
      ]);
      const expectedSettings: XAxisSettings = {
        angle: 0,
        minTickGap: 5,
        tick: true,
        tickFormatter: undefined,
        interval: 'preserveEnd',
        name: undefined,
        unit: undefined,
        hide: false,
        mirror: false,
        orientation: 'bottom',
        height: 30,
        ticks: undefined,
        includeHidden: false,
        allowDataOverflow: false,
        allowDecimals: true,
        allowDuplicatedCategory: true,
        dataKey: undefined,
        domain: [0, 'dataMax + 1000'],
        id: 0,
        padding: {
          left: 0,
          right: 0,
        },
        scale: 'auto',
        tickCount: 5,
        type: 'number',
        reversed: false,
        niceTicks: false,
      };
      expect(axisSettingsSpy).toHaveBeenLastCalledWith(expectedSettings);
      expect(itemDataSpy).toHaveBeenLastCalledWith([]);
      expect(itemDataSpy).toHaveBeenCalledTimes(3);
      expect(displayedDataSpy).toHaveBeenLastCalledWith(pageData);
      expect(axisDomainSpy).toHaveBeenCalledTimes(3);
      expect(axisDomainSpy).toHaveBeenLastCalledWith([0, 2520]);
    });
  });

  describe.todo('in vertical stacked BarChart');
});
