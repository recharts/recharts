import { describe, it, expect } from 'vitest';
import { createRechartsStore } from '../../src/state/store';

import { selectZIndexPortalId, selectAllRegisteredZIndexes } from '../../src/zindex/zIndexSelectors';
import {
  registerZIndexPortal,
  registerZIndexPortalId,
  unregisterZIndexPortal,
  unregisterZIndexPortalId,
} from '../../src/state/zIndexSlice';

describe('zIndexSelectors', () => {
  describe('selectZIndexPortalId', () => {
    it('should select zIndex portal IDs correctly', () => {
      const store = createRechartsStore();

      expect(selectZIndexPortalId(store.getState(), 1, false)).toBeUndefined();
      expect(selectZIndexPortalId(store.getState(), -1, false)).toBeUndefined();

      store.dispatch(registerZIndexPortalId({ zIndex: 1, elementId: 'portal-1', isPanorama: false }));
      store.dispatch(registerZIndexPortalId({ zIndex: -1, elementId: 'portal--1', isPanorama: false }));

      expect(selectZIndexPortalId(store.getState(), 1, false)).toBe('portal-1');
      expect(selectZIndexPortalId(store.getState(), -1, false)).toBe('portal--1');

      store.dispatch(unregisterZIndexPortalId({ zIndex: 1, isPanorama: false }));
      expect(selectZIndexPortalId(store.getState(), 1, false)).toBeUndefined();
      expect(selectZIndexPortalId(store.getState(), -1, false)).toBe('portal--1');
    });

    it('should return undefined for undefined zIndex', () => {
      const store = createRechartsStore();
      expect(selectZIndexPortalId(store.getState(), undefined, true)).toBeUndefined();
      expect(selectZIndexPortalId(store.getState(), undefined, false)).toBeUndefined();
    });

    it('should differentiate between panorama and main chart', () => {
      const store = createRechartsStore();

      store.dispatch(registerZIndexPortalId({ zIndex: 10, elementId: 'portal-main', isPanorama: false }));
      store.dispatch(registerZIndexPortalId({ zIndex: 10, elementId: 'portal-panorama', isPanorama: true }));

      expect(selectZIndexPortalId(store.getState(), 10, false)).toBe('portal-main');
      expect(selectZIndexPortalId(store.getState(), 10, true)).toBe('portal-panorama');
    });
  });

  describe('selectAllRegisteredZIndexes', () => {
    it('should select all registered zIndexes correctly', () => {
      const store = createRechartsStore();

      // empty store returns all default zIndexes
      expect(selectAllRegisteredZIndexes(store.getState())).toEqual([
        -100, 100, 200, 300, 400, 500, 600, 700, 800, 1000, 1100, 10000,
      ]);

      store.dispatch(registerZIndexPortal({ zIndex: 2 }));
      store.dispatch(registerZIndexPortal({ zIndex: -3 }));
      store.dispatch(registerZIndexPortal({ zIndex: 1 }));

      // newly added zIndexes are included and sorted
      expect(selectAllRegisteredZIndexes(store.getState())).toEqual([
        -100, -3, 1, 2, 100, 200, 300, 400, 500, 600, 700, 800, 1000, 1100, 10000,
      ]);

      store.dispatch(unregisterZIndexPortal({ zIndex: 1 }));
      expect(selectAllRegisteredZIndexes(store.getState())).toEqual([
        -100, -3, 2, 100, 200, 300, 400, 500, 600, 700, 800, 1000, 1100, 10000,
      ]);

      store.dispatch(unregisterZIndexPortal({ zIndex: -3 }));
      store.dispatch(unregisterZIndexPortal({ zIndex: 2 }));
      expect(selectAllRegisteredZIndexes(store.getState())).toEqual([
        -100, 100, 200, 300, 400, 500, 600, 700, 800, 1000, 1100, 10000,
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
      expect(thirdSelection).toEqual([-100, 5, 10, 15, 100, 200, 300, 400, 500, 600, 700, 800, 1000, 1100, 10000]);

      // now, the portal element ID has been registered, but the zIndex list should remain the same
      store.dispatch(registerZIndexPortalId({ zIndex: 5, elementId: 'portal-1', isPanorama: false }));
      store.dispatch(registerZIndexPortalId({ zIndex: 5, elementId: 'portal-1-panorama', isPanorama: true }));
      const fourthSelection = selectAllRegisteredZIndexes(store.getState());
      expect(fourthSelection).toBe(thirdSelection); // Same reference due to memoization
    });
  });
});
