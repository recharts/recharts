import { describe, it, expect } from 'vitest';
import { addDot, ReferenceDotSettings, removeDot } from '../../src/state/referenceElementsSlice';
import { createRechartsStore } from '../../src/state/store';

describe('referenceElementsSlice', () => {
  it('should add and remove reference dot', () => {
    const store = createRechartsStore();
    expect(store.getState().referenceElements.dots).toEqual([]);

    const dot: ReferenceDotSettings = {
      ifOverflow: 'visible',
      r: 1,
      x: 2,
      xAxisId: 3,
      y: 4,
      yAxisId: 5,
    };

    store.dispatch(addDot(dot));
    expect(store.getState().referenceElements.dots).toEqual([dot]);

    store.dispatch(removeDot(dot));
    expect(store.getState().referenceElements.dots).toEqual([]);
  });
});
