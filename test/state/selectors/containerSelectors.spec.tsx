import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { mockGetBoundingClientRect } from '../../helper/mockGetBoundingClientRect';
import { useAppSelector } from '../../../src/state/hooks';
import { setChartSize, setScale } from '../../../src/state/layoutSlice';
import {
  selectChartHeight,
  selectChartWidth,
  selectContainerScale,
  selectMargin,
} from '../../../src/state/selectors/containerSelectors';
import { createRechartsStore } from '../../../src/state/store';
import { BarChart, ComposedChart, Customized } from '../../../src';
import { shouldReturnFromInitialState, shouldReturnUndefinedOutOfContext } from '../../helper/selectorTestHelpers';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { mockHTMLElementProperty } from '../../helper/mockHTMLElementProperty';

describe('selectContainerScale', () => {
  shouldReturnUndefinedOutOfContext(selectContainerScale);
  shouldReturnFromInitialState(selectContainerScale, 1);

  it('should return 1 in an initial state', () => {
    const store = createRechartsStore();
    expect(selectContainerScale(store.getState())).toBe(1);
  });

  it('should return scale after it was set using an action', () => {
    const store = createRechartsStore();
    store.dispatch(setScale(1.25));
    expect(selectContainerScale(store.getState())).toBe(1.25);
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
    mockGetBoundingClientRect(
      {
        x: 1,
        y: 2,
        width: 3,
        height: 4,
      },
      false,
    );
    mockHTMLElementProperty('offsetWidth', 5);
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <ComposedChart width={5} height={6}>
        {children}
      </ComposedChart>
    ));
    const { spy } = renderTestCase(selectContainerScale);
    expect(spy).toHaveBeenLastCalledWith(3 / 5);
  });

  it('should return scale: 1 in jsdom because jsdom returns zeroes everywhere', () => {
    /*
     * This is a little bit of optimization for the test environment
     * but without this fix, like half of the tests start throwing an error.
     * Perhaps instead we should enforce mocking proper DOMRect
     * on the container, in all tests,
     * but for now this workaround is easier and doesn't hurt anyone.
     */
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <ComposedChart width={5} height={6}>
        {children}
      </ComposedChart>
    ));
    const { spy } = renderTestCase(selectContainerScale);
    expect(spy).toHaveBeenLastCalledWith(1);
  });
});

describe('selectMargin', () => {
  shouldReturnUndefinedOutOfContext(selectMargin);
  shouldReturnFromInitialState(selectMargin, {
    top: 5,
    right: 5,
    bottom: 5,
    left: 5,
  });

  it('should return margin from root chart props, and update it when props change', () => {
    const marginSpy = vi.fn();
    const Comp = (): null => {
      marginSpy(useAppSelector(selectMargin));
      return null;
    };
    const { rerender } = render(
      <BarChart margin={{ top: 10, right: 10, bottom: 10, left: 10 }} width={500} height={300}>
        <Customized component={<Comp />} />
      </BarChart>,
    );
    expect(marginSpy).toHaveBeenLastCalledWith({
      top: 10,
      right: 10,
      bottom: 10,
      left: 10,
    });
    expect(marginSpy).toHaveBeenCalledTimes(1);

    rerender(
      <BarChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }} width={500} height={300}>
        <Customized component={<Comp />} />
      </BarChart>,
    );
    expect(marginSpy).toHaveBeenLastCalledWith({
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    });
    expect(marginSpy).toHaveBeenCalledTimes(3);
  });
});

describe('selectChartWidth', () => {
  shouldReturnUndefinedOutOfContext(selectChartWidth);
  shouldReturnFromInitialState(selectChartWidth, 0);

  it('should return width when set from action', () => {
    const store = createRechartsStore();
    store.dispatch(setChartSize({ width: 500, height: 300 }));
    expect(selectChartWidth(store.getState())).toBe(500);
  });

  it('should return width from root chart props, and update it when props change', () => {
    const widthSpy = vi.fn();
    const Comp = (): null => {
      widthSpy(useAppSelector(selectChartWidth));
      return null;
    };
    const { rerender } = render(
      <BarChart width={500} height={300}>
        <Customized component={<Comp />} />
      </BarChart>,
    );
    expect(widthSpy).toHaveBeenLastCalledWith(500);
    expect(widthSpy).toHaveBeenCalledTimes(1);

    rerender(
      <BarChart width={600} height={400}>
        <Customized component={<Comp />} />
      </BarChart>,
    );
    expect(widthSpy).toHaveBeenLastCalledWith(600);
    expect(widthSpy).toHaveBeenCalledTimes(3);
  });
});

describe('selectChartHeight', () => {
  shouldReturnUndefinedOutOfContext(selectChartHeight);
  shouldReturnFromInitialState(selectChartHeight, 0);

  it('should return height when set from action', () => {
    const store = createRechartsStore();
    store.dispatch(setChartSize({ width: 500, height: 300 }));
    expect(selectChartHeight(store.getState())).toBe(300);
  });

  it('should return height from root chart props, and update it when props change', () => {
    const heightSpy = vi.fn();
    const Comp = (): null => {
      heightSpy(useAppSelector(selectChartHeight));
      return null;
    };
    const { rerender } = render(
      <BarChart width={500} height={300}>
        <Customized component={<Comp />} />
      </BarChart>,
    );
    expect(heightSpy).toHaveBeenLastCalledWith(300);
    expect(heightSpy).toHaveBeenCalledTimes(1);

    rerender(
      <BarChart width={600} height={400}>
        <Customized component={<Comp />} />
      </BarChart>,
    );
    expect(heightSpy).toHaveBeenLastCalledWith(400);
    expect(heightSpy).toHaveBeenCalledTimes(3);
  });
});
