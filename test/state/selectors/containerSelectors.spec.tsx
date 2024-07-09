import React from 'react';
import { vi } from 'vitest';
import { render } from '@testing-library/react';
import { getMockDomRect } from '../../helper/mockGetBoundingClientRect';
import { useAppSelector } from '../../../src/state/hooks';
import { RechartsHTMLContainer, setContainer } from '../../../src/state/layoutSlice';
import { selectRootContainerDomRect, selectContainerScale } from '../../../src/state/selectors/containerSelectors';
import { createRechartsStore } from '../../../src/state/store';

describe('selectRootContainerDomRect', () => {
  it('should return undefined when called outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const rect = useAppSelector(selectRootContainerDomRect);
      expect(rect).toBe(undefined);
      return null;
    };
    render(<Comp />);
  });

  it('should return undefined for initial state', () => {
    const store = createRechartsStore();
    expect(selectRootContainerDomRect(store.getState())).toBe(undefined);
  });

  it('should return DOM rect of root container if set', () => {
    const store = createRechartsStore();
    const mockRect: DOMRect = getMockDomRect({
      x: 1,
      y: 2,
      width: 3,
      height: 4,
    });
    const mockElement: RechartsHTMLContainer = {
      offsetWidth: 5,
      getBoundingClientRect: () => mockRect,
    };
    store.dispatch(setContainer(mockElement));
    expect(selectRootContainerDomRect(store.getState())).toEqual(mockRect);
  });

  it('should return updated DOM rect after browser window resize', () => {
    const store = createRechartsStore();
    const spy = vi.fn();
    const mockRect: DOMRect = getMockDomRect({
      x: 1,
      y: 2,
      width: 3,
      height: 4,
    });
    const mockRectUpdated: DOMRect = getMockDomRect({
      x: 5,
      y: 6,
      width: 7,
      height: 8,
    });
    const mockElement: RechartsHTMLContainer = {
      offsetWidth: 9,
      getBoundingClientRect: spy,
    };
    spy.mockReturnValue(mockRect);
    store.dispatch(setContainer(mockElement));
    expect(selectRootContainerDomRect(store.getState())).toEqual(mockRect);
    spy.mockReturnValue(mockRectUpdated);
    expect(selectRootContainerDomRect(store.getState())).toEqual(mockRectUpdated);
  });
});

describe('selectContainerScale', () => {
  it('should return undefined when called outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const scale = useAppSelector(selectContainerScale);
      expect(scale).toBe(undefined);
      return null;
    };
    render(<Comp />);
  });

  it('should return 1 for initial state', () => {
    const store = createRechartsStore();
    expect(selectContainerScale(store.getState())).toBe(1);
  });

  it('should return 1 when container is set and has width and DOMRect with matching widths', () => {
    const store = createRechartsStore();
    const mockRect: DOMRect = getMockDomRect({
      x: 1,
      y: 2,
      width: 3,
      height: 4,
    });
    const mockElement: RechartsHTMLContainer = {
      offsetWidth: 3,
      getBoundingClientRect: () => mockRect,
    };
    store.dispatch(setContainer(mockElement));
    expect(selectContainerScale(store.getState())).toBe(1);
  });

  it('should return scale as the ratio of DOMRect / offsetWidth', () => {
    /*
     * This is a little bit of a case of "trust me" because:
     * jsdom returns zeroes everywhere so that doesn't test anything
     * and the browser spec is everything, so I went and tested it in Firefox version 126.0
     * In a browser devtools I select arbitrary element and run:
     *
        console.table({
         'getBoundingClientRect().width': $0.getBoundingClientRect().width,
         offsetWidth: $0.offsetWidth,
         scale: $0.getBoundingClientRect().width / $0.offsetWidth
        })
     *
     * This shows rect: 100, offsetWidth: 100, scale: 1
     * Then I went and changed the `scale` CSS property to 1.5 using devtools and
     * run the console.log again, and this time it shows
     * rect: 150, offsetWidth: 100, scale: 1.5
     * So there we go.
     */
    const store = createRechartsStore();
    const mockRect: DOMRect = getMockDomRect({
      x: 1,
      y: 2,
      width: 3,
      height: 4,
    });
    const mockElement: RechartsHTMLContainer = {
      offsetWidth: 5,
      getBoundingClientRect: () => mockRect,
    };
    store.dispatch(setContainer(mockElement));
    expect(selectContainerScale(store.getState())).toBe(3 / 5);
  });

  it('should return scale: 1 in jsdom because jsdom returns zeroes everywhere', () => {
    /*
     * This is a little bit of optimization for the test environment
     * but without this fix, like half of the tests start throwing an error.
     * Perhaps instead we should enforce mocking proper DOMRect
     * on the container, in all tests,
     * but for now this workaround is easier and doesn't hurt anyone.
     */
    const store = createRechartsStore();
    const mockRect: DOMRect = getMockDomRect({
      width: 0,
    });
    const mockElement: RechartsHTMLContainer = {
      offsetWidth: 0,
      getBoundingClientRect: () => mockRect,
    };
    store.dispatch(setContainer(mockElement));
    expect(selectContainerScale(store.getState())).toBe(1);
  });
});
