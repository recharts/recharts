import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import React from 'react';
import { Provider } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../src/state/hooks';
import { createRechartsStore } from '../../src/state/store';
import { RechartsStoreProvider } from '../../src/state/RechartsStoreProvider';
import { setChartData } from '../../src/state/chartDataSlice';
import { RechartsReduxContext } from '../../src/state/RechartsReduxContext';

describe('useAppSelector', () => {
  it('should return undefined when used outside of Redux context', () => {
    expect.assertions(1);
    const Spy = (): null => {
      const state = useAppSelector(s => s);
      expect(state).toBe(undefined);
      return null;
    };
    render(<Spy />);
  });

  it('should not throw an error when used outside of Redux context', () => {
    const Spy = (): null => {
      useAppSelector(s => s);
      return null;
    };
    expect(() => render(<Spy />)).not.toThrow();
  });

  it('should return state when inside a Redux context', () => {
    expect.assertions(1);
    const Spy = (): null => {
      const state = useAppSelector(s => s);
      expect(state).not.toBe(undefined);
      return null;
    };
    render(
      <RechartsStoreProvider>
        <Spy />
      </RechartsStoreProvider>,
    );
  });

  it('should trigger update after an action changes the state', () => {
    expect.assertions(2);
    const Spy = (): null => {
      const state = useAppSelector(s => s);
      const dispatch = useAppDispatch();
      expect(state).not.toBe(undefined);
      if (state.chartData.chartData == null) {
        dispatch(setChartData([]));
      }
      return null;
    };
    render(
      <RechartsStoreProvider>
        <Spy />
      </RechartsStoreProvider>,
    );
  });
});

describe('useAppDispatch', () => {
  const dummyAction = { type: 'dummy' };
  it('should do nothing when called outside of Redux context', () => {
    expect.assertions(1);
    const Dispatcher = (): null => {
      const dispatch = useAppDispatch();
      dispatch(dummyAction);
      return null;
    };
    expect(() => render(<Dispatcher />)).not.toThrow();
  });

  it('should dispatch actions in store when inside a Redux context', () => {
    expect.assertions(1);
    const Dispatcher = (): null => {
      const dispatch = useAppDispatch();
      dispatch(dummyAction);
      return null;
    };
    const store = createRechartsStore();
    const spy = vi.fn();
    store.subscribe(spy);
    render(
      <Provider context={RechartsReduxContext} store={store}>
        <Dispatcher />
      </Provider>,
    );
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
