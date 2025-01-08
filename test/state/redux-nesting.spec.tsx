import { describe, it, expect, vi } from 'vitest';
import { combineReducers, configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useSelector } from 'react-redux';
import React from 'react';
import { act, render } from '@testing-library/react';
import { Line, LineChart } from '../../src';
import { selectChartHeight } from '../../src/state/selectors/containerSelectors';
import { useAppSelector } from '../../src/state/hooks';

const exampleSlice = createSlice({
  name: 'example',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    reset: state => {
      state.value = 0;
    },
  },
});

const exampleStore = configureStore({
  reducer: combineReducers({ counter: exampleSlice.reducer }),
});

type ExampleState = ReturnType<typeof exampleStore.getState>;

const Counter = () => {
  const count = useSelector((state: ExampleState) => state.counter.value);
  return <div>Current count is: {count}</div>;
};

describe('when a Recharts chart is used in another Redux app as a neighbour', () => {
  beforeEach(() => {
    exampleStore.dispatch(exampleSlice.actions.reset());
  });

  const App = ({ spy }: { spy?: (arg: number) => unknown }) => {
    const Comp = (): null => {
      const chartHeight = useAppSelector(selectChartHeight);
      spy?.(chartHeight);
      return null;
    };
    return (
      <Provider store={exampleStore}>
        <LineChart width={200} height={100}>
          <Line dataKey="value" />
          <Comp />
        </LineChart>
        {/* My custom app with custom state, next to Recharts chart, looks straightforward */}
        <Counter />
      </Provider>
    );
  };

  it('should allow selecting data from recharts store', () => {
    const spy = vi.fn();
    render(<App spy={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenLastCalledWith(100);
  });

  it('should allow selecting data from the parent app store', () => {
    const { container } = render(<App />);
    expect(exampleStore.getState()).toEqual({ counter: { value: 0 } });
    expect(container).toHaveTextContent('Current count is: 0');

    act(() => {
      exampleStore.dispatch(exampleSlice.actions.increment());
    });

    expect(exampleStore.getState()).toEqual({ counter: { value: 1 } });
    expect(container).toHaveTextContent('Current count is: 1');
  });
});

describe('when a Recharts chart is used in another Redux app as a parent', () => {
  beforeEach(() => {
    exampleStore.dispatch(exampleSlice.actions.reset());
  });

  const App = ({ spy }: { spy?: (arg: number) => unknown }) => {
    const Comp = (): null => {
      const chartHeight = useAppSelector(selectChartHeight);
      spy?.(chartHeight);
      return null;
    };
    return (
      <Provider store={exampleStore}>
        <LineChart width={200} height={100}>
          <Line dataKey="value" />
          <Comp />
          {/*
           * So here I have my custom app with custom state, _inside_ the Recharts chart.
           * This should work too! Recharts should work independently of the internal state solution.
           * If we want people to have access to the internal state then we export that as hooks
           * so that we allow switching to another state management solution if needed.
           */}
          <Counter />
        </LineChart>
      </Provider>
    );
  };

  it('should allow selecting data from recharts store', () => {
    const spy = vi.fn();
    render(<App spy={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenLastCalledWith(100);
  });

  it('should allow selecting data from the parent app store', () => {
    const { container } = render(<App />);
    expect(exampleStore.getState()).toEqual({ counter: { value: 0 } });
    expect(container).toHaveTextContent('Current count is: 0');

    act(() => {
      exampleStore.dispatch(exampleSlice.actions.increment());
    });

    expect(exampleStore.getState()).toEqual({ counter: { value: 1 } });
    expect(container).toHaveTextContent('Current count is: 1');
  });
});
