import { describe, it, expect } from 'vitest';
import {
  addArea,
  addDot,
  ReferenceAreaSettings,
  ReferenceDotSettings,
  removeArea,
  removeDot,
} from '../../src/state/referenceElementsSlice';
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
      y: 'category 4',
      yAxisId: 5,
    };

    store.dispatch(addDot(dot));
    expect(store.getState().referenceElements.dots).toEqual([dot]);

    store.dispatch(removeDot(dot));
    expect(store.getState().referenceElements.dots).toEqual([]);
  });

  it('should add and remove reference area', () => {
    const store = createRechartsStore();
    expect(store.getState().referenceElements.areas).toEqual([]);

    const area: ReferenceAreaSettings = {
      ifOverflow: 'visible',
      x1: 1,
      x2: 2,
      xAxisId: 3,
      y1: 'category 4',
      y2: 'category 5',
      yAxisId: 6,
    };

    store.dispatch(addArea(area));
    expect(store.getState().referenceElements.areas).toEqual([area]);

    store.dispatch(removeArea(area));
    expect(store.getState().referenceElements.areas).toEqual([]);
  });
});
