import React from 'react';
import { describe, it, expect } from 'vitest';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { PageData } from '../../_data';
import { Line, LineChart, XAxis, YAxis } from '../../../src';
import { expectYAxisTicks } from '../../helper/expectAxisTicks';
import {
  AxisWithTicksSettings,
  selectAxisScale,
  selectAxisSettings,
  selectNiceTicks,
  selectTicksOfAxis,
} from '../../../src/state/selectors/axisSelectors';

const dataWithDecimals = PageData.map(item => ({
  ...item,
  pv: item.pv / 100,
}));

const defaultExpectedYAxisSettings: AxisWithTicksSettings = {
  allowDataOverflow: false,
  allowDecimals: true,
  allowDuplicatedCategory: true,
  angle: 0,
  dataKey: undefined,
  domain: undefined,
  hide: false,
  id: 0,
  includeHidden: false,
  interval: 'preserveEnd',
  minTickGap: 5,
  mirror: false,
  name: undefined,
  orientation: 'left',
  padding: {
    bottom: 0,
    top: 0,
  },
  reversed: false,
  scale: 'auto',
  tick: true,
  tickCount: 5,
  tickFormatter: undefined,
  ticks: undefined,
  type: 'number',
  unit: undefined,
  width: 60,
};

describe('YAxis ticks', () => {
  describe('with default props', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart width={500} height={300} data={dataWithDecimals}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="pv" />
        {children}
      </LineChart>
    ));

    it('should select YAxis settings', () => {
      const { spy } = renderTestCase(state => selectAxisSettings(state, 'yAxis', 0));
      expect(spy).toHaveBeenLastCalledWith(defaultExpectedYAxisSettings);
    });

    it('should select scale', () => {
      const { spy } = renderTestCase(state => selectAxisScale(state, 'yAxis', 0, false));
      expect(spy).toHaveBeenLastCalledWith(
        expect.toBeRechartsScale({
          domain: [0, 100],
          range: [265, 5],
        }),
      );
    });

    it('should select niceTicks', () => {
      const { spy } = renderTestCase(state => selectNiceTicks(state, 'yAxis', 0, false));
      expect(spy).toHaveBeenLastCalledWith([0, 25, 50, 75, 100]);
    });

    it('should select ticks', () => {
      const { spy } = renderTestCase(state => selectTicksOfAxis(state, 'yAxis', 0, false));
      expect(spy).toHaveBeenLastCalledWith([
        { coordinate: 265, index: 0, offset: 0, value: 0 },
        { coordinate: 200, index: 1, offset: 0, value: 25 },
        { coordinate: 135, index: 2, offset: 0, value: 50 },
        { coordinate: 70, index: 3, offset: 0, value: 75 },
        { coordinate: 5, index: 4, offset: 0, value: 100 },
      ]);
    });

    it('should render 5 ticks', () => {
      const { container } = renderTestCase();
      expectYAxisTicks(container, [
        { textContent: '0', x: '57', y: '265' },
        { textContent: '25', x: '57', y: '200' },
        { textContent: '50', x: '57', y: '135' },
        { textContent: '75', x: '57', y: '70' },
        { textContent: '100', x: '57', y: '5' },
      ]);
    });
  });

  describe('with domain=[dataMin, dataMax]', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart width={500} height={300} data={dataWithDecimals}>
        <XAxis dataKey="name" />
        <YAxis domain={['dataMin', 'dataMax']} />
        <Line dataKey="pv" />
        {children}
      </LineChart>
    ));

    it('should select YAxis settings all the same except for the domain', () => {
      const { spy } = renderTestCase(state => selectAxisSettings(state, 'yAxis', 0));
      expect(spy).toHaveBeenLastCalledWith({
        ...defaultExpectedYAxisSettings,
        domain: ['dataMin', 'dataMax'],
      });
    });

    it('should select scale', () => {
      const { spy } = renderTestCase(state => selectAxisScale(state, 'yAxis', 0, false));
      expect(spy).toHaveBeenLastCalledWith(
        expect.toBeRechartsScale({
          domain: [13.98, 98],
          range: [265, 5],
        }),
      );
    });

    it('should select niceTicks', () => {
      const { spy } = renderTestCase(state => selectNiceTicks(state, 'yAxis', 0, false));
      expect(spy).toHaveBeenLastCalledWith([13.98, 38.98, 63.98, 88.98, 98]);
    });

    it('should select ticks', () => {
      const { spy } = renderTestCase(state => selectTicksOfAxis(state, 'yAxis', 0, false));
      expect(spy).toHaveBeenLastCalledWith([
        { coordinate: 265, index: 0, offset: 0, value: 13.98 },
        { coordinate: 187.6374672696977, index: 1, offset: 0, value: 38.98 },
        { coordinate: 110.27493453939539, index: 2, offset: 0, value: 63.98 },
        { coordinate: 32.91240180909307, index: 3, offset: 0, value: 88.98 },
        { coordinate: 5, index: 4, offset: 0, value: 98 },
      ]);
    });

    it('should render 5 ticks', () => {
      const { container } = renderTestCase();
      expectYAxisTicks(container, [
        { textContent: '13.98', x: '57', y: '265' },
        { textContent: '38.98', x: '57', y: '187.6374672696977' },
        { textContent: '63.98', x: '57', y: '110.27493453939539' },
        { textContent: '88.98', x: '57', y: '32.91240180909307' },
        { textContent: '98', x: '57', y: '5' },
      ]);
    });
  });

  describe('with domain=[dataMin, dataMax] and tickCount=3 and allowDecimals=false', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart width={500} height={300} data={dataWithDecimals}>
        <XAxis dataKey="name" />
        <YAxis domain={['dataMin', 'dataMax']} tickCount={3} allowDecimals={false} />
        <Line dataKey="pv" />
        {children}
      </LineChart>
    ));

    it('should select YAxis settings all the same except for the domain, and tick count', () => {
      const { spy } = renderTestCase(state => selectAxisSettings(state, 'yAxis', 0));
      expect(spy).toHaveBeenLastCalledWith({
        ...defaultExpectedYAxisSettings,
        domain: ['dataMin', 'dataMax'],
        tickCount: 3,
        allowDecimals: false,
      });
    });

    it('should select scale', () => {
      const { spy } = renderTestCase(state => selectAxisScale(state, 'yAxis', 0, false));
      expect(spy).toHaveBeenLastCalledWith(
        expect.toBeRechartsScale({
          domain: [13.98, 98],
          range: [265, 5],
        }),
      );
    });

    it('should select niceTicks', () => {
      const { spy } = renderTestCase(state => selectNiceTicks(state, 'yAxis', 0, false));
      expect(spy).toHaveBeenLastCalledWith([14, 59, 98]);
    });

    it('should select ticks', () => {
      const { spy } = renderTestCase(state => selectTicksOfAxis(state, 'yAxis', 0, false));
      expect(spy).toHaveBeenLastCalledWith([
        { coordinate: 264.93810997381576, index: 0, offset: 0, value: 14 },
        { coordinate: 125.68555105927162, index: 1, offset: 0, value: 59 },
        { coordinate: 5, index: 2, offset: 0, value: 98 },
      ]);
    });

    it('should render 3 ticks', () => {
      const { container } = renderTestCase();
      expectYAxisTicks(container, [
        { textContent: '14', x: '57', y: '264.93810997381576' },
        { textContent: '59', x: '57', y: '125.68555105927162' },
        { textContent: '98', x: '57', y: '5' },
      ]);
    });
  });

  describe('with domain=[0, 200] and tickCount=4 and allowDecimals=false', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart width={500} height={300} data={dataWithDecimals}>
        <XAxis dataKey="name" />
        <YAxis domain={[0, 200]} tickCount={4} allowDecimals={false} />
        <Line dataKey="pv" />
        {children}
      </LineChart>
    ));

    it('should select YAxis settings all the same except for the domain, and tick count', () => {
      const { spy } = renderTestCase(state => selectAxisSettings(state, 'yAxis', 0));
      expect(spy).toHaveBeenLastCalledWith({
        ...defaultExpectedYAxisSettings,
        domain: [0, 200],
        tickCount: 4,
        allowDecimals: false,
      });
    });

    it('should select scale', () => {
      const { spy } = renderTestCase(state => selectAxisScale(state, 'yAxis', 0, false));
      expect(spy).toHaveBeenLastCalledWith(
        expect.toBeRechartsScale({
          domain: [0, 200],
          range: [265, 5],
        }),
      );
    });

    it('should select niceTicks', () => {
      const { spy } = renderTestCase(state => selectNiceTicks(state, 'yAxis', 0, false));
      expect(spy).toHaveBeenLastCalledWith([0, 70, 140, 200]);
    });

    it('should select ticks', () => {
      const { spy } = renderTestCase(state => selectTicksOfAxis(state, 'yAxis', 0, false));
      expect(spy).toHaveBeenLastCalledWith([
        { coordinate: 265, index: 0, offset: 0, value: 0 },
        { coordinate: 174, index: 1, offset: 0, value: 70 },
        { coordinate: 83.00000000000001, index: 2, offset: 0, value: 140 },
        { coordinate: 5, index: 3, offset: 0, value: 200 },
      ]);
    });

    it('should render 4 ticks', () => {
      const { container } = renderTestCase();
      expectYAxisTicks(container, [
        { textContent: '0', x: '57', y: '265' },
        { textContent: '70', x: '57', y: '174' },
        { textContent: '140', x: '57', y: '83.00000000000001' },
        { textContent: '200', x: '57', y: '5' },
      ]);
    });
  });
});
