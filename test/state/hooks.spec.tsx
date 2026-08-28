import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import React from 'react';
import { Provider } from 'react-redux';
import { useAppDispatch, useAppSelector, useAppStateReader } from '../../src/state/hooks';
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
      if (state?.chartData.chartData == null) {
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

describe('useAppStateReader', () => {
  it('should return a function that returns undefined when used outside of Redux context', () => {
    expect.assertions(1);
    const Spy = (): null => {
      const readState = useAppStateReader();
      expect(readState()).toBe(undefined);
      return null;
    };
    render(<Spy />);
  });

  it('should not throw an error when used outside of Redux context', () => {
    const Spy = (): null => {
      const readState = useAppStateReader();
      readState();
      return null;
    };
    expect(() => render(<Spy />)).not.toThrow();
  });

  it('should return a function that reads the current state when inside a Redux context', () => {
    expect.assertions(1);
    const Spy = (): null => {
      const readState = useAppStateReader();
      expect(readState()).not.toBe(undefined);
      return null;
    };
    render(
      <RechartsStoreProvider>
        <Spy />
      </RechartsStoreProvider>,
    );
  });

  it('should read the latest state on demand without subscribing to updates', () => {
    expect.assertions(4);
    const store = createRechartsStore();
    const renderSpy = vi.fn();
    const readStateRef: { current: ReturnType<typeof useAppStateReader> | null } = { current: null };
    const Spy = (): null => {
      renderSpy();
      readStateRef.current = useAppStateReader();
      return null;
    };
    render(
      // @ts-expect-error React-Redux types demand that the context internal value is not null, but we have that as default.
      <Provider context={RechartsReduxContext} store={store}>
        <Spy />
      </Provider>,
    );

    expect(renderSpy).toHaveBeenCalledTimes(1);
    expect(readStateRef.current!()!.chartData.chartData).toBe(undefined);

    store.dispatch(setChartData([{ value: 1 }]));

    // The reader is not subscribed, so the store update must not trigger a re-render...
    expect(renderSpy).toHaveBeenCalledTimes(1);
    // ...but calling it afterwards must still return the latest state.
    expect(readStateRef.current!()!.chartData.chartData).toEqual([{ value: 1 }]);
  });

  it('should return a stable function reference across re-renders while the context is unchanged', () => {
    expect.assertions(1);
    const readers: Array<ReturnType<typeof useAppStateReader>> = [];
    const Spy = (): null => {
      readers.push(useAppStateReader());
      return null;
    };
    const { rerender } = render(
      <RechartsStoreProvider>
        <Spy />
      </RechartsStoreProvider>,
    );
    rerender(
      <RechartsStoreProvider>
        <Spy />
      </RechartsStoreProvider>,
    );
    expect(readers[0]).toBe(readers[1]);
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
      // @ts-expect-error React-Redux types demand that the context internal value is not null, but we have that as default.
      <Provider context={RechartsReduxContext} store={store}>
        <Dispatcher />
      </Provider>,
    );
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
