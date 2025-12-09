import { describe, it, expect, beforeEach } from 'vitest';
import { createRechartsStore } from '../../src/state/store';

import { selectZIndexPortalElement, selectAllRegisteredZIndexes } from '../../src/zIndex/zIndexSelectors';
import {
  registerZIndexPortal,
  registerZIndexPortalElement,
  unregisterZIndexPortal,
  unregisterZIndexPortalElement,
} from '../../src/state/zIndexSlice';

describe('zIndexSelectors', () => {
  beforeEach(() => {
    // Clear selector caches before each test to prevent cross-test pollution
    selectAllRegisteredZIndexes.memoizedResultFunc.clearCache();
  });

  describe('selectZIndexPortalElement', () => {
    it('should select zIndex portal elements correctly', () => {
      const store = createRechartsStore();

      expect(selectZIndexPortalElement(store.getState(), 1, false)).toBeUndefined();
      expect(selectZIndexPortalElement(store.getState(), -1, false)).toBeUndefined();

      const element1 = document.createElement('div');
      const element2 = document.createElement('div');
      store.dispatch(registerZIndexPortalElement({ zIndex: 1, element: element1, isPanorama: false }));
      store.dispatch(registerZIndexPortalElement({ zIndex: -1, element: element2, isPanorama: false }));

      expect(selectZIndexPortalElement(store.getState(), 1, false)).toBe(element1);
      expect(selectZIndexPortalElement(store.getState(), -1, false)).toBe(element2);

      store.dispatch(unregisterZIndexPortalElement({ zIndex: 1, isPanorama: false }));
      expect(selectZIndexPortalElement(store.getState(), 1, false)).toBeUndefined();
      expect(selectZIndexPortalElement(store.getState(), -1, false)).toBe(element2);
    });

    it('should return undefined for undefined zIndex', () => {
      const store = createRechartsStore();
      expect(selectZIndexPortalElement(store.getState(), undefined, true)).toBeUndefined();
      expect(selectZIndexPortalElement(store.getState(), undefined, false)).toBeUndefined();
    });

    it('should differentiate between panorama and main chart', () => {
      const store = createRechartsStore();

      const mainElement = document.createElement('div');
      const panoramaElement = document.createElement('div');
      store.dispatch(registerZIndexPortalElement({ zIndex: 10, element: mainElement, isPanorama: false }));
      store.dispatch(registerZIndexPortalElement({ zIndex: 10, element: panoramaElement, isPanorama: true }));

      expect(selectZIndexPortalElement(store.getState(), 10, false)).toBe(mainElement);
      expect(selectZIndexPortalElement(store.getState(), 10, true)).toBe(panoramaElement);
    });
  });

  describe('selectAllRegisteredZIndexes', () => {
    it('should select all registered zIndexes correctly', () => {
      const store = createRechartsStore();

      // empty store returns all default zIndexes
      expect(selectAllRegisteredZIndexes(store.getState())).toEqual([
        -100, -50, 100, 200, 300, 400, 500, 600, 1000, 1100, 1200, 2000,
      ]);

      store.dispatch(registerZIndexPortal({ zIndex: 2 }));
      store.dispatch(registerZIndexPortal({ zIndex: -3 }));
      store.dispatch(registerZIndexPortal({ zIndex: 1 }));

      // newly added zIndexes are included and sorted
      expect(selectAllRegisteredZIndexes(store.getState())).toEqual([
        -100, -50, -3, 1, 2, 100, 200, 300, 400, 500, 600, 1000, 1100, 1200, 2000,
      ]);

      store.dispatch(unregisterZIndexPortal({ zIndex: 1 }));
      expect(selectAllRegisteredZIndexes(store.getState())).toEqual([
        -100, -50, -3, 2, 100, 200, 300, 400, 500, 600, 1000, 1100, 1200, 2000,
      ]);

      store.dispatch(unregisterZIndexPortal({ zIndex: -3 }));
      store.dispatch(unregisterZIndexPortal({ zIndex: 2 }));
      expect(selectAllRegisteredZIndexes(store.getState())).toEqual([
        -100, -50, 100, 200, 300, 400, 500, 600, 1000, 1100, 1200, 2000,
      ]);
    });

    it('should memoize results based on array contents', () => {
      const store = createRechartsStore();

      store.dispatch(registerZIndexPortal({ zIndex: 5 }));
      store.dispatch(registerZIndexPortal({ zIndex: 10 }));

      const firstSelection = selectAllRegisteredZIndexes(store.getState());
      const secondSelection = selectAllRegisteredZIndexes(store.getState());

      expect(firstSelection).toBe(secondSelection); // Same reference due to memoization

      store.dispatch(registerZIndexPortal({ zIndex: 15 }));

      const thirdSelection = selectAllRegisteredZIndexes(store.getState());
      expect(thirdSelection).not.toBe(firstSelection); // Different reference after state change
      expect(thirdSelection).toEqual([-100, -50, 5, 10, 15, 100, 200, 300, 400, 500, 600, 1000, 1100, 1200, 2000]);

      // now, the portal element has been registered, but the zIndex list should remain the same
      const element1 = document.createElement('div');
      const element2 = document.createElement('div');
      store.dispatch(registerZIndexPortalElement({ zIndex: 5, element: element1, isPanorama: false }));
      store.dispatch(registerZIndexPortalElement({ zIndex: 5, element: element2, isPanorama: true }));
      const fourthSelection = selectAllRegisteredZIndexes(store.getState());
      expect(fourthSelection).toBe(thirdSelection); // Same reference due to memoization
    });

    it('should not duplicate zIndex when registered multiple times', () => {
      const store = createRechartsStore();

      store.dispatch(registerZIndexPortal({ zIndex: 50 }));
      const firstSelection = selectAllRegisteredZIndexes(store.getState());
      expect(firstSelection).toEqual([-100, -50, 50, 100, 200, 300, 400, 500, 600, 1000, 1100, 1200, 2000]);

      // Register the same zIndex again
      store.dispatch(registerZIndexPortal({ zIndex: 50 }));
      const secondSelection = selectAllRegisteredZIndexes(store.getState());
      expect(secondSelection).toEqual([-100, -50, 50, 100, 200, 300, 400, 500, 600, 1000, 1100, 1200, 2000]);
      expect(secondSelection).toBe(firstSelection); // Should be memoized, no change
    });

    it('should not affect zIndex list when only registering/unregistering portal element', () => {
      const store = createRechartsStore();

      const initialSelection = selectAllRegisteredZIndexes(store.getState());
      expect(initialSelection).toEqual([-100, -50, 100, 200, 300, 400, 500, 600, 1000, 1100, 1200, 2000]);

      // Register a portal element for a default zIndex without registering the zIndex itself
      const element = document.createElement('div');
      store.dispatch(registerZIndexPortalElement({ zIndex: 100, element, isPanorama: false }));
      const afterRegister = selectAllRegisteredZIndexes(store.getState());
      // The zIndex list should remain unchanged
      expect(afterRegister).toEqual([-100, -50, 100, 200, 300, 400, 500, 600, 1000, 1100, 1200, 2000]);
      // With resultEqualityCheck, the reference should be preserved when contents match
      expect(afterRegister).toBe(initialSelection);

      // Unregister the portal element
      store.dispatch(unregisterZIndexPortalElement({ zIndex: 100, isPanorama: false }));
      const afterUnregister = selectAllRegisteredZIndexes(store.getState());
      // The zIndex list should still remain unchanged
      expect(afterUnregister).toEqual([-100, -50, 100, 200, 300, 400, 500, 600, 1000, 1100, 1200, 2000]);
      // Reference should still be preserved
      expect(afterUnregister).toBe(initialSelection);
    });
  });
});
