import { configureStore } from '@reduxjs/toolkit';
import { describe, it, expect } from 'vitest';
import { addYAxis, cartesianAxisReducer, updateYAxisWidth, YAxisSettings } from '../../../src/state/cartesianAxisSlice';

describe('cartesianAxisSlice', () => {
  describe('updateYAxisWidth', () => {
    const yAxis: YAxisSettings = {
      id: 'test-axis',
      width: 'auto',
      scale: 'auto',
      type: 'number',
      dataKey: undefined,
      unit: undefined,
      name: undefined,
      allowDuplicatedCategory: true,
      allowDataOverflow: false,
      reversed: false,
      includeHidden: false,
      domain: undefined,
      allowDecimals: true,
      tickCount: 5,
      ticks: undefined,
      tick: true,
      interval: 'preserveEnd',
      mirror: false,
      minTickGap: 5,
      angle: 0,
      hide: false,
      tickFormatter: undefined,
      niceTicks: false,
      padding: { top: 0, bottom: 0 },
      orientation: 'left',
    };

    it('should stop updating width after oscillation is detected', () => {
      const store = configureStore({
        reducer: {
          cartesianAxis: cartesianAxisReducer,
        },
      });

      store.dispatch(addYAxis(yAxis));

      expect(store.getState().cartesianAxis.yAxis['test-axis'].width).toBe('auto');

      store.dispatch(updateYAxisWidth({ id: 'test-axis', width: 50 }));
      expect(store.getState().cartesianAxis.yAxis['test-axis'].width).toBe(50);

      store.dispatch(updateYAxisWidth({ id: 'test-axis', width: 51 }));
      expect(store.getState().cartesianAxis.yAxis['test-axis'].width).toBe(51);

      store.dispatch(updateYAxisWidth({ id: 'test-axis', width: 50 }));
      expect(store.getState().cartesianAxis.yAxis['test-axis'].width).toBe(50);

      // This is the 4th action. The oscillation should be detected and the update ignored.
      store.dispatch(updateYAxisWidth({ id: 'test-axis', width: 51 }));
      expect(store.getState().cartesianAxis.yAxis['test-axis'].width).toBe(50);
    });

    it('should keep updating if the oscillation is larger than 1 pixel because that is likely to be intentional', () => {
      // https://github.com/recharts/recharts/issues/6424
      const store = configureStore({
        reducer: {
          cartesianAxis: cartesianAxisReducer,
        },
      });

      store.dispatch(addYAxis(yAxis));

      expect(store.getState().cartesianAxis.yAxis['test-axis'].width).toBe('auto');

      store.dispatch(updateYAxisWidth({ id: 'test-axis', width: 50 }));
      expect(store.getState().cartesianAxis.yAxis['test-axis'].width).toBe(50);

      store.dispatch(updateYAxisWidth({ id: 'test-axis', width: 52 }));
      expect(store.getState().cartesianAxis.yAxis['test-axis'].width).toBe(52);

      store.dispatch(updateYAxisWidth({ id: 'test-axis', width: 50 }));
      expect(store.getState().cartesianAxis.yAxis['test-axis'].width).toBe(50);

      // This is the 4th action. The oscillation is larger than 1 pixel, so the update should be accepted.
      store.dispatch(updateYAxisWidth({ id: 'test-axis', width: 52 }));
      expect(store.getState().cartesianAxis.yAxis['test-axis'].width).toBe(52);
    });
  });
});
