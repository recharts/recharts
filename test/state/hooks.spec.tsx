import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import React from 'react';
import { Provider } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../src/state/hooks';
import { createRechartsStore } from '../../src/state/store';
import { RechartsStoreProvider } from '../../src/state/RechartsStoreProvider';

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
      <Provider store={store}>
        <Dispatcher />
      </Provider>,
    );
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
