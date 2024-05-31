import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { useAppSelector } from '../../src/state/hooks';
import { selectAxisScale, selectDomainOfDataByKey } from '../../src/state/axisSelectors';
import { createRechartsStore, RechartsRootState } from '../../src/state/store';
import { Bar, BarChart, XAxis, Customized, ComposedChart, Area, Line, Scatter, YAxis } from '../../src';
import { PageData } from '../_data';

describe('selectAxisScale', () => {
  it('should return undefined when called outside of Redux context', () => {
    const Comp = (): null => {
      const result = useAppSelector(state => selectAxisScale(state, 'angleAxis', 'foo'));
      expect(result).toBeUndefined();
      return null;
    };
    render(<Comp />);
  });

  it('should return empty object for initial state', () => {
    const initialState: RechartsRootState = createRechartsStore().getState();
    const result = selectAxisScale(initialState, 'angleAxis', 'foo');
    expect(result).toEqual({ scale: undefined, realScaleType: undefined });
  });

  it('should return empty object if there is no XAxis with this ID', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectAxisScale(state, 'xAxis', 'this id is not present in the chart'));
      spy(result);
      return null;
    };
    const { container } = render(
      <BarChart data={PageData} width={100} height={100}>
        <Bar dataKey="uv" />
        <XAxis dataKey="name" />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(container.querySelector('.xAxis')).toBeVisible();
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith({ scale: undefined, realScaleType: undefined });
  });

  it('should return scale, and scale name, if there is an Axis in the chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectAxisScale(state, 'xAxis', '0'));
      spy(result);
      return null;
    };
    const { container } = render(
      <BarChart data={PageData} width={100} height={100}>
        <Bar dataKey="uv" />
        <XAxis dataKey="name" />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(container.querySelector('.xAxis')).toBeVisible();
    expect(spy).toHaveBeenCalledTimes(3);
    expect(spy).toHaveBeenLastCalledWith({
      scale: expect.any(Function),
      realScaleType: 'band',
    });
  });
});

describe('selectDomainOfDataByKey', () => {
  it('should return undefined when called outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const result = useAppSelector(state => selectDomainOfDataByKey(state, 'xAxis', '0'));
      expect(result).toBeUndefined();
      return null;
    };
    render(<Customized component={Comp} />);
  });

  it('should return undefined when called with initial state', () => {
    const initialState: RechartsRootState = createRechartsStore().getState();
    const result = selectDomainOfDataByKey(initialState, 'xAxis', '0');
    expect(result).toBeUndefined();
  });

  it('should return undefined if there is no data in the chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectDomainOfDataByKey(state, 'xAxis', '0'));
      spy(result);
      return null;
    };
    render(
      <BarChart data={[]} width={100} height={100}>
        <Bar dataKey="uv" />
        <XAxis dataKey="name" />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenCalledWith(undefined);
  });

  describe('XAxis with type = number', () => {
    it('should return highest and lowest number of the chart root data based on the axis dataKey', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        const result = useAppSelector(state => selectDomainOfDataByKey(state, 'xAxis', '0'));
        spy(result);
        return null;
      };
      render(
        <BarChart data={PageData} width={100} height={100}>
          <XAxis dataKey="uv" type="number" />
          <Customized component={Comp} />
        </BarChart>,
      );
      expect(spy).toHaveBeenLastCalledWith([189, 400]);
    });

    it('should return infinities if the data is not numerical', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        const result = useAppSelector(state => selectDomainOfDataByKey(state, 'xAxis', '0'));
        spy(result);
        return null;
      };
      render(
        <BarChart data={PageData} width={100} height={100}>
          <XAxis dataKey="name" type="number" />
          <Customized component={Comp} />
        </BarChart>,
      );
      expect(spy).toHaveBeenLastCalledWith([Infinity, -Infinity]);
    });

    // this test fails because the generateCategoricalChart code path throws
    it.fails('should not throw an error when the data includes a Symbol', () => {
      const data = [{ x: Symbol.for('unit test') }];
      const spy = vi.fn();
      const Comp = (): null => {
        const result = useAppSelector(state => selectDomainOfDataByKey(state, 'xAxis', '0'));
        spy(result);
        return null;
      };
      render(
        <BarChart data={data} width={100} height={100}>
          <XAxis dataKey="x" type="number" />
          <Customized component={Comp} />
        </BarChart>,
      );
      expect(spy).toHaveBeenLastCalledWith([100, 9999]);
    });

    it('should parse strings, and ignore values that are not numbers', () => {
      const data = [
        { x: '100' },
        { x: '9999' },
        { x: 200 },
        { x: 300 },
        { x: null },
        { x: undefined },
        { x: NaN },
        { x: {} },
        { x: [] as const },
        { x: () => {} },
        // { x: Symbol.for('unit test') },
      ];
      const spy = vi.fn();
      const Comp = (): null => {
        const result = useAppSelector(state => selectDomainOfDataByKey(state, 'xAxis', '0'));
        spy(result);
        return null;
      };
      render(
        <BarChart data={data} width={100} height={100}>
          <XAxis dataKey="x" type="number" />
          <Customized component={Comp} />
        </BarChart>,
      );
      expect(spy).toHaveBeenLastCalledWith([100, 9999]);
    });

    it('should squish all data defined on all items and chart root and return min, max of the combination', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        const result = useAppSelector(state => selectDomainOfDataByKey(state, 'xAxis', '0'));
        spy(result);
        return null;
      };
      render(
        <ComposedChart
          data={[
            { x: 10, y: 99999 },
            { x: 20, y: 2 },
            { x: 30, y: 3 },
          ]}
          width={100}
          height={100}
        >
          <Area
            data={[
              { x: 40, y: 4 },
              { x: 50, y: 5 },
              { x: 60, y: 6 },
            ]}
            dataKey="y"
          />
          <Area
            data={[
              { x: 70, y: 7 },
              { x: 80, y: 8 },
              { x: 90, y: 9 },
            ]}
            dataKey=""
          />
          <Line
            data={[
              { x: 100, y: 10 },
              { x: 110, y: 11 },
              { x: 120, y: 12 },
            ]}
            dataKey="y"
          />
          <Line
            data={[
              { x: 130, y: 13 },
              { x: 140, y: 14 },
              { x: 150, y: 15 },
            ]}
          />
          <Scatter
            data={[
              { x: 160, y: 16 },
              { x: 170, y: 17 },
              { x: 180, y: 18 },
            ]}
            dataKey="y"
          />
          <Scatter
            data={[
              { x: 190, y: 19 },
              { x: 200, y: 20 },
              { x: 210, y: 21 },
            ]}
          />
          <XAxis dataKey="x" type="number" />
          <YAxis dataKey="y" type="number" />
          <Customized component={Comp} />
        </ComposedChart>,
      );
      expect(spy).toHaveBeenLastCalledWith([10, 210]);
    });
  });

  describe.each(['category', undefined] as const)('XAxis with type = %s', type => {
    it('should return all strings', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        const result = useAppSelector(state => selectDomainOfDataByKey(state, 'xAxis', '0'));
        spy(result);
        return null;
      };
      render(
        <BarChart data={PageData} width={100} height={100}>
          <XAxis dataKey="name" type={type} />
          <Customized component={Comp} />
        </BarChart>,
      );
      expect(spy).toHaveBeenLastCalledWith(['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F']);
    });

    it.each([true, undefined])(
      'should return all numbers including duplicates when allowDuplicatedCategory = %s',
      allowDuplicatedCategory => {
        const spy = vi.fn();
        const Comp = (): null => {
          const result = useAppSelector(state => selectDomainOfDataByKey(state, 'xAxis', '0'));
          spy(result);
          return null;
        };
        render(
          <BarChart data={PageData} width={100} height={100}>
            <XAxis dataKey="uv" type={type} allowDuplicatedCategory={allowDuplicatedCategory} />
            <Customized component={Comp} />
          </BarChart>,
        );
        expect(spy).toHaveBeenLastCalledWith([400, 300, 300, 200, 278, 189]);
      },
    );

    it('should filter out duplicates when allowDuplicatedCategory = false', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        const result = useAppSelector(state => selectDomainOfDataByKey(state, 'xAxis', '0'));
        spy(result);
        return null;
      };
      render(
        <BarChart data={PageData} width={100} height={100}>
          <XAxis dataKey="uv" type={type} allowDuplicatedCategory={false} />
          <Customized component={Comp} />
        </BarChart>,
      );
      expect(spy).toHaveBeenLastCalledWith([400, 300, 200, 278, 189]);
    });

    it('should filter away nulls and undefineds', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        const result = useAppSelector(state => selectDomainOfDataByKey(state, 'xAxis', '0'));
        spy(result);
        return null;
      };
      render(
        <BarChart
          data={[{ x: null }, { x: undefined }, { x: 'Monday' }, { x: 'Tuesday' }, { x: 'Wednesday' }]}
          width={100}
          height={100}
        >
          <XAxis dataKey="x" type={type} allowDuplicatedCategory={false} />
          <Customized component={Comp} />
        </BarChart>,
      );
      expect(spy).toHaveBeenLastCalledWith(['Monday', 'Tuesday', 'Wednesday']);
    });

    it('should replace everything that is not a number, string, or Date, with empty string', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        const result = useAppSelector(state => selectDomainOfDataByKey(state, 'xAxis', '0'));
        spy(result);
        return null;
      };
      render(
        <BarChart
          data={[
            { x: null },
            { x: undefined },
            { x: [] },
            { x: function anon() {} },
            { x: {} },
            { x: NaN },
            { x: new Map() },
            { x: Symbol.for('mock symbol') },
            { x: new Promise(() => {}) },
            { x: 'Monday' },
            { x: 'Tuesday' },
            { x: 'Wednesday' },
          ]}
          width={100}
          height={100}
        >
          <XAxis dataKey="x" type={type} allowDuplicatedCategory={false} />
          <Customized component={Comp} />
        </BarChart>,
      );
      expect(spy).toHaveBeenLastCalledWith(['', '', '', '', '', '', '', 'Monday', 'Tuesday', 'Wednesday']);
    });
  });
});
