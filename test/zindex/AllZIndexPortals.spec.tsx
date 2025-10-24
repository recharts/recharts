import React from 'react';
import type { Store } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { beforeEach, describe, expect, it } from 'vitest';
import { act, render } from '@testing-library/react';
import { AllZIndexPortals } from '../../src/zindex/ZIndexPortal';
import { createRechartsStore, RechartsRootState } from '../../src/state/store';
import { RechartsReduxContext } from '../../src/state/RechartsReduxContext';
import { registerZIndexPortal } from '../../src/state/zIndexSlice';
import { selectAllRegisteredZIndexes } from '../../src/zindex/zIndexSelectors';

import { DefaultZIndexes } from '../../src/zindex/DefaultZIndexes';

describe('AllZIndexPortals', () => {
  let store: Store<RechartsRootState>;

  beforeEach(() => {
    store = createRechartsStore();
  });

  it('should add z-index portal when z-index consumer is registered', () => {
    const { container } = render(
      <svg>
        <Provider store={store} context={RechartsReduxContext}>
          <AllZIndexPortals>child</AllZIndexPortals>
        </Provider>
      </svg>,
    );

    const allZIndexes = selectAllRegisteredZIndexes(store.getState());

    const newZIndexDefinitelyNotOneOfTheDefaults =
      Object.values(DefaultZIndexes).reduce((acc, val) => Math.max(acc, val), Number.NEGATIVE_INFINITY) + 1;

    // all z-index portals should be rendered
    expect(container.querySelectorAll('[id^="recharts-zindex"]')).toHaveLength(allZIndexes.length);

    act(() => {
      store.dispatch(registerZIndexPortal({ zIndex: newZIndexDefinitelyNotOneOfTheDefaults }));
      vi.runOnlyPendingTimers();
    });

    // After registering, should have one more z-index portal
    const zIndexPortals = container.querySelectorAll('[id^="recharts-zindex"]');
    expect(zIndexPortals).toHaveLength(allZIndexes.length + 1);
  });

  it('should render one child for each of the registered element IDs', () => {
    const { container } = render(
      <svg>
        <Provider store={store} context={RechartsReduxContext}>
          <AllZIndexPortals>
            <div data-testid="child">child</div>
          </AllZIndexPortals>
        </Provider>
      </svg>,
    );

    const state = store.getState();

    const elementIds = Array.from(container.querySelectorAll('[id^="recharts-zindex"]')).map(el => el.id);
    const portalIds = Object.values(state.zIndex.zIndexMap).map(entry => entry.elementId);

    const elementIdsSet = new Set(elementIds);
    expect(elementIds).toHaveLength(elementIdsSet.size); // ensure uniqueness
    const portalIdsSet = new Set(portalIds);
    expect(portalIds).toHaveLength(portalIdsSet.size); // ensure uniqueness

    // the ID of this portal should be the same ID as in the store, but the order may differ
    expect(elementIdsSet).toEqual(portalIdsSet);
  });
});
