import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { createRechartsStore } from '../../../src/state/store';
import { Bar, BarChart, Customized } from '../../../src';
import {
  selectBarCategoryGap,
  selectBarGap,
  selectRootBarSize,
  selectRootMaxBarSize,
  selectSyncMethod,
} from '../../../src/state/selectors/rootPropsSelectors';
import {
  shouldReturnFromInitialState,
  shouldReturnUndefinedOutOfContext,
  useAppSelectorWithStableTest,
} from '../../helper/selectorTestHelpers';

describe('selectRootMaxBarSize', () => {
  shouldReturnUndefinedOutOfContext(selectRootMaxBarSize);
  shouldReturnFromInitialState(selectRootMaxBarSize, undefined);

  it('should return undefined in an empty chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelectorWithStableTest(state => selectRootMaxBarSize(state));
      spy(result);
      return null;
    };
    render(
      <BarChart width={100} height={100}>
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(undefined);
  });

  it('should return and update maxBarSize defined on chart root', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelectorWithStableTest(state => selectRootMaxBarSize(state));
      spy(result);
      return null;
    };
    const { rerender } = render(
      <BarChart width={100} height={100} maxBarSize={10}>
        <Bar maxBarSize={5} />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(10);
    expect(spy).toHaveBeenCalledTimes(1);

    rerender(
      <BarChart width={100} height={100} maxBarSize={20}>
        <Bar maxBarSize={50} />
        <Customized component={Comp} />
      </BarChart>,
    );

    expect(spy).toHaveBeenLastCalledWith(20);
    expect(spy).toHaveBeenCalledTimes(3);
  });
});

describe('selectBarGap', () => {
  shouldReturnUndefinedOutOfContext(selectBarGap);
  shouldReturnFromInitialState(selectBarGap, 4);

  it('should return default value in a chart without barGap prop', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelectorWithStableTest(state => selectBarGap(state));
      spy(result);
      return null;
    };
    render(
      <BarChart width={100} height={100}>
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(4);
  });

  it('should return and update barGap defined on chart root', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelectorWithStableTest(state => selectBarGap(state));
      spy(result);
      return null;
    };
    const { rerender } = render(
      <BarChart width={100} height={100} barGap={10}>
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(10);
    expect(spy).toHaveBeenCalledTimes(1);

    rerender(
      <BarChart width={100} height={100} barGap={20}>
        <Customized component={Comp} />
      </BarChart>,
    );

    expect(spy).toHaveBeenLastCalledWith(20);
    expect(spy).toHaveBeenCalledTimes(3);
  });
});

describe('selectBarCategoryGap', () => {
  shouldReturnUndefinedOutOfContext(selectBarCategoryGap);
  shouldReturnFromInitialState(selectBarCategoryGap, '10%');

  it('should return undefined when called outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const result = useAppSelectorWithStableTest(state => selectBarCategoryGap(state));
      expect(result).toBe(undefined);
      return null;
    };
    render(<Comp />);
  });

  it('should return default value for initial state', () => {
    const store = createRechartsStore();
    expect(selectBarCategoryGap(store.getState())).toBe('10%');
  });

  it('should return default value in an empty chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelectorWithStableTest(state => selectBarCategoryGap(state));
      spy(result);
      return null;
    };
    render(
      <BarChart width={100} height={100}>
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith('10%');
  });

  it('should return and update barCategoryGap defined on chart root', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelectorWithStableTest(state => selectBarCategoryGap(state));
      spy(result);
      return null;
    };
    const { rerender } = render(
      <BarChart width={100} height={100} barCategoryGap={10}>
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(10);
    expect(spy).toHaveBeenCalledTimes(1);

    rerender(
      <BarChart width={100} height={100} barCategoryGap={20}>
        <Customized component={Comp} />
      </BarChart>,
    );

    expect(spy).toHaveBeenLastCalledWith(20);
    expect(spy).toHaveBeenCalledTimes(3);
  });
});

describe('selectRootBarSize', () => {
  shouldReturnUndefinedOutOfContext(selectRootBarSize);
  shouldReturnFromInitialState(selectRootBarSize, undefined);

  it('should return undefined in an empty chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelectorWithStableTest(state => selectRootBarSize(state));
      spy(result);
      return null;
    };
    render(
      <BarChart width={100} height={100}>
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(undefined);
  });

  it('should return and update barSize defined on chart root', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelectorWithStableTest(state => selectRootBarSize(state));
      spy(result);
      return null;
    };
    const { rerender } = render(
      <BarChart width={100} height={100} barSize={10}>
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(10);
    expect(spy).toHaveBeenCalledTimes(1);

    rerender(
      <BarChart width={100} height={100} barSize={20}>
        <Customized component={Comp} />
      </BarChart>,
    );

    expect(spy).toHaveBeenLastCalledWith(20);
    expect(spy).toHaveBeenCalledTimes(3);
  });
});

describe('selectSyncMethod', () => {
  it('should return "index" by default', () => {
    const store = createRechartsStore();
    expect(store.getState().rootProps.syncMethod).toBe('index');
  });

  it('should return and update syncMethod defined on chart root', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelectorWithStableTest(selectSyncMethod);
      spy(result);
      return null;
    };
    const { rerender } = render(
      <BarChart width={100} height={100} syncMethod="value">
        <Comp />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith('value');
    expect(spy).toHaveBeenCalledTimes(1);

    const fn = () => 1;

    rerender(
      <BarChart width={100} height={100} syncMethod={fn}>
        <Customized component={Comp} />
      </BarChart>,
    );

    expect(spy).toHaveBeenLastCalledWith(fn);
    expect(spy).toHaveBeenCalledTimes(3);
  });
});
