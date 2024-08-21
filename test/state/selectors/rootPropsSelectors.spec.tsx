import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { useAppSelector } from '../../../src/state/hooks';
import { createRechartsStore } from '../../../src/state/store';
import { Bar, BarChart, Customized } from '../../../src';
import {
  selectBarCategoryGap,
  selectBarGap,
  selectRootBarSize,
  selectRootMaxBarSize,
} from '../../../src/state/selectors/rootPropsSelectors';

describe('selectRootMaxBarSize', () => {
  it('should return undefined when called outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const result = useAppSelector(state => selectRootMaxBarSize(state));
      expect(result).toBe(undefined);
      return null;
    };
    render(<Comp />);
  });

  it('should return undefined for initial state', () => {
    const store = createRechartsStore();
    expect(selectRootMaxBarSize(store.getState())).toBe(undefined);
  });

  it('should return undefined in an empty chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectRootMaxBarSize(state));
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
      const result = useAppSelector(state => selectRootMaxBarSize(state));
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
    expect(spy).toHaveBeenCalledTimes(3);

    rerender(
      <BarChart width={100} height={100} maxBarSize={20}>
        <Bar maxBarSize={50} />
        <Customized component={Comp} />
      </BarChart>,
    );

    expect(spy).toHaveBeenLastCalledWith(20);
    expect(spy).toHaveBeenCalledTimes(5);
  });
});

describe('selectBarGap', () => {
  it('should return undefined when called outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const result = useAppSelector(state => selectBarGap(state));
      expect(result).toBe(undefined);
      return null;
    };
    render(<Comp />);
  });

  it('should return default value for initial state', () => {
    const store = createRechartsStore();
    expect(selectBarGap(store.getState())).toBe(4);
  });

  it('should return default value in a chart without barGap prop', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectBarGap(state));
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
      const result = useAppSelector(state => selectBarGap(state));
      spy(result);
      return null;
    };
    const { rerender } = render(
      <BarChart width={100} height={100} barGap={10}>
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(10);
    expect(spy).toHaveBeenCalledTimes(3);

    rerender(
      <BarChart width={100} height={100} barGap={20}>
        <Customized component={Comp} />
      </BarChart>,
    );

    expect(spy).toHaveBeenLastCalledWith(20);
    expect(spy).toHaveBeenCalledTimes(5);
  });
});

describe('selectBarCategoryGap', () => {
  it('should return undefined when called outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const result = useAppSelector(state => selectBarCategoryGap(state));
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
      const result = useAppSelector(state => selectBarCategoryGap(state));
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
      const result = useAppSelector(state => selectBarCategoryGap(state));
      spy(result);
      return null;
    };
    const { rerender } = render(
      <BarChart width={100} height={100} barCategoryGap={10}>
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(10);
    expect(spy).toHaveBeenCalledTimes(3);

    rerender(
      <BarChart width={100} height={100} barCategoryGap={20}>
        <Customized component={Comp} />
      </BarChart>,
    );

    expect(spy).toHaveBeenLastCalledWith(20);
    expect(spy).toHaveBeenCalledTimes(5);
  });
});

describe('selectRootBarSize', () => {
  it('should return undefined when called outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const result = useAppSelector(state => selectRootBarSize(state));
      expect(result).toBe(undefined);
      return null;
    };
    render(<Comp />);
  });

  it('should return undefined for initial state', () => {
    const store = createRechartsStore();
    expect(selectRootBarSize(store.getState())).toBe(undefined);
  });

  it('should return undefined in an empty chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectRootBarSize(state));
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
      const result = useAppSelector(state => selectRootBarSize(state));
      spy(result);
      return null;
    };
    const { rerender } = render(
      <BarChart width={100} height={100} barSize={10}>
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(10);
    expect(spy).toHaveBeenCalledTimes(3);

    rerender(
      <BarChart width={100} height={100} barSize={20}>
        <Customized component={Comp} />
      </BarChart>,
    );

    expect(spy).toHaveBeenLastCalledWith(20);
    expect(spy).toHaveBeenCalledTimes(5);
  });
});
