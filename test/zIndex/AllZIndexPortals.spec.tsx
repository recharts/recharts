import React, { Context } from 'react';
import type { Store } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { beforeEach, describe, expect, it } from 'vitest';
import { act, render } from '@testing-library/react';
import { AllZIndexPortals } from '../../src/zIndex/ZIndexPortal';
import { createRechartsStore, RechartsRootState } from '../../src/state/store';
import { RechartsReduxContext, RechartsReduxContextValue } from '../../src/state/RechartsReduxContext';
import { registerZIndexPortal } from '../../src/state/zIndexSlice';
import { selectAllRegisteredZIndexes } from '../../src/zIndex/zIndexSelectors';

import { DefaultZIndexes } from '../../src/zIndex/DefaultZIndexes';
import { isNotNil } from '../../src/util/DataUtils';

// @ts-expect-error React-Redux types demand that the context internal value is not null, but we have that as default.
const nonNullContext: Context<RechartsReduxContextValue> = RechartsReduxContext;

describe('AllZIndexPortals', () => {
  let store: Store<RechartsRootState>;

  beforeEach(() => {
    store = createRechartsStore();
  });

  it('should add z-index portal when z-index consumer is registered', () => {
    const { container } = render(
      <svg>
        <Provider store={store} context={nonNullContext}>
          <AllZIndexPortals isPanorama={false}>child</AllZIndexPortals>
        </Provider>
      </svg>,
    );

    const allZIndexes = selectAllRegisteredZIndexes(store.getState());

    const newZIndexDefinitelyNotOneOfTheDefaults =
      Object.values(DefaultZIndexes).reduce((acc, val) => Math.max(acc, val), Number.NEGATIVE_INFINITY) + 1;

    // all z-index portals should be rendered (they are <g> elements with a recharts-zIndex-layer_ class)
    expect(container.querySelectorAll('g[class*="recharts-zIndex-layer_"]')).toHaveLength(allZIndexes.length);
    // and none of them should be a tab stop
    expect(container.querySelectorAll('g[class*="recharts-zIndex-layer_"]:not([tabindex="-1"])')).toHaveLength(0);

    act(() => {
      store.dispatch(registerZIndexPortal({ zIndex: newZIndexDefinitelyNotOneOfTheDefaults }));
      vi.runOnlyPendingTimers();
    });

    // After registering, should have one more z-index portal
    const zIndexPortals = container.querySelectorAll('g[class*="recharts-zIndex-layer_"]');
    expect(zIndexPortals).toHaveLength(allZIndexes.length + 1);
  });

  it('should keep the portal groups out of the tab order and hide their focus ring', () => {
    const { container } = render(
      <svg>
        <Provider store={store} context={nonNullContext}>
          <AllZIndexPortals isPanorama={false}>child</AllZIndexPortals>
        </Provider>
      </svg>,
    );

    const portals = Array.from(container.querySelectorAll<SVGGElement>('g[class*="recharts-zIndex-layer_"]'));
    expect(portals.length).toBeGreaterThan(0);

    /*
     * React attaches focus listeners to a portal container, which is enough to make an SVG element
     * focusable in Chromium, so every one of these groups would otherwise become a Tab stop
     * and would show a focus ring around the layer contents when clicked.
     */
    portals.forEach(portal => {
      expect(portal).toHaveAttribute('tabindex', '-1');
      expect(portal.style.outline).toBe('none');
    });
  });

  it('should render one child for each of the registered elements', () => {
    const { container } = render(
      <svg>
        <Provider store={store} context={nonNullContext}>
          <AllZIndexPortals isPanorama={false}>
            <div data-testid="child">child</div>
          </AllZIndexPortals>
        </Provider>
      </svg>,
    );

    const state = store.getState();

    const renderedElements = Array.from(container.querySelectorAll('g[class*="recharts-zIndex-layer_"]'));
    const storedElementIds = Object.values(state.zIndex.zIndexMap)
      .map(entry => entry.element?.id)
      .filter(isNotNil);

    expect(renderedElements).toHaveLength(storedElementIds.length);

    // each rendered element should be in the store
    renderedElements.forEach(el => {
      /*
       * If we compare the elements directly, we force React into logging warnings
       * because then jest/vitest tries to access various internal properties of the elements
       * and React doesn't like that. So we just compare IDs.
       *
       * https://react.dev/warnings/special-props
       */
      expect(storedElementIds).toContain(el.id);
    });
  });
});
