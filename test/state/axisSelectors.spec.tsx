import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { useAppSelector } from '../../src/state/hooks';
import { selectAxisScale, selectAxisDomain, selectHasBar } from '../../src/state/axisSelectors';
import { createRechartsStore, RechartsRootState } from '../../src/state/store';
import {
  Bar,
  BarChart,
  XAxis,
  Customized,
  ComposedChart,
  Area,
  Line,
  Scatter,
  YAxis,
  RadialBarChart,
  RadialBar,
} from '../../src';
import { PageData } from '../_data';
import { expectXAxisTicks } from '../helper/expectAxisTicks';

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

  it('should set the scale domain and range based on the axis type, and data', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectAxisScale(state, 'xAxis', '0'));
      spy(result.scale?.domain());
      return null;
    };
    const { container } = render(
      <BarChart data={PageData} width={100} height={100}>
        <Bar dataKey="uv" />
        <XAxis dataKey="name" />
        <Customized component={Comp} />
      </BarChart>,
    );
    expectXAxisTicks(container, [
      {
        textContent: 'Page A',
        x: '12.5',
        y: '73',
      },
      {
        textContent: 'Page B',
        x: '27.5',
        y: '73',
      },
      {
        textContent: 'Page C',
        x: '42.5',
        y: '73',
      },
      {
        textContent: 'Page D',
        x: '57.5',
        y: '73',
      },
      {
        textContent: 'Page E',
        x: '72.5',
        y: '73',
      },
      {
        textContent: 'Page F',
        x: '87.5',
        y: '73',
      },
    ]);
    expect(spy).toHaveBeenLastCalledWith(['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F']);
  });
});

describe('selectAxisDomain', () => {
  it('should return undefined when called outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const result = useAppSelector(state => selectAxisDomain(state, 'xAxis', '0'));
      expect(result).toBeUndefined();
      return null;
    };
    render(<Customized component={Comp} />);
  });

  it('should return undefined when called with initial state', () => {
    const initialState: RechartsRootState = createRechartsStore().getState();
    const result = selectAxisDomain(initialState, 'xAxis', '0');
    expect(result).toBeUndefined();
  });

  it('should return undefined if there is no data in the chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectAxisDomain(state, 'xAxis', '0'));
      spy(result);
      return null;
    };
    const { container } = render(
      <BarChart data={[]} width={100} height={100}>
        <Bar dataKey="uv" />
        <XAxis dataKey="name" />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenCalledWith(undefined);
    expectXAxisTicks(container, []);
  });

  describe('XAxis with type = number', () => {
    it('should return highest and lowest number of the chart root data based on the axis dataKey', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        const result = useAppSelector(state => selectAxisDomain(state, 'xAxis', '0'));
        spy(result);
        return null;
      };
      const { container } = render(
        <BarChart data={PageData} width={100} height={100}>
          <XAxis dataKey="uv" type="number" />
          <Customized component={Comp} />
        </BarChart>,
      );
      expect(spy).toHaveBeenLastCalledWith([0, 405]);
      expectXAxisTicks(container, [
        {
          textContent: '0',
          x: '5',
          y: '73',
        },
        {
          textContent: '100',
          x: '27.5',
          y: '73',
        },
        {
          textContent: '200',
          x: '50',
          y: '73',
        },
        {
          textContent: '300',
          x: '72.5',
          y: '73',
        },
        {
          textContent: '400',
          x: '95',
          y: '73',
        },
      ]);
    });

    it('should return undefined if the data is not numerical', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        const result = useAppSelector(state => selectAxisDomain(state, 'xAxis', '0'));
        spy(result);
        return null;
      };
      const { container } = render(
        <BarChart data={PageData} width={100} height={100}>
          <XAxis dataKey="name" type="number" />
          <Customized component={Comp} />
        </BarChart>,
      );
      expect(spy).toHaveBeenLastCalledWith(undefined);
      expectXAxisTicks(container, []);
    });

    // this test fails because the generateCategoricalChart code path throws
    it.fails('should not throw an error when the data includes a Symbol', () => {
      const data = [{ x: Symbol.for('unit test') }];
      const spy = vi.fn();
      const Comp = (): null => {
        const result = useAppSelector(state => selectAxisDomain(state, 'xAxis', '0'));
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
        const result = useAppSelector(state => selectAxisDomain(state, 'xAxis', '0'));
        spy(result);
        return null;
      };
      const { container } = render(
        <BarChart data={data} width={100} height={100}>
          <XAxis dataKey="x" type="number" />
          <Customized component={Comp} />
        </BarChart>,
      );
      expect(spy).toHaveBeenLastCalledWith([0, 10000]);
      expectXAxisTicks(container, [
        {
          textContent: '0',
          x: '5',
          y: '73',
        },
        {
          textContent: '2500',
          x: '27.5',
          y: '73',
        },
        {
          textContent: '5000',
          x: '50',
          y: '73',
        },
        {
          textContent: '7500',
          x: '72.5',
          y: '73',
        },
        {
          textContent: '10000',
          x: '95',
          y: '73',
        },
      ]);
    });

    it('should squish all data defined on all items and chart root and return min, max of the combination', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        const result = useAppSelector(state => selectAxisDomain(state, 'xAxis', 0));
        spy(result);
        return null;
      };
      const { container } = render(
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
      expect(spy).toHaveBeenLastCalledWith([0, 225]);
      expectXAxisTicks(container, [
        {
          textContent: '0',
          x: '65',
          y: '73',
        },
        {
          textContent: '55',
          x: '72.5',
          y: '73',
        },
        {
          textContent: '110',
          x: '80',
          y: '73',
        },
        {
          textContent: '165',
          x: '87.5',
          y: '73',
        },
        {
          textContent: '220',
          x: '95',
          y: '73',
        },
      ]);
    });
  });

  describe.each(['category', undefined] as const)('XAxis with type = %s', type => {
    it('should return all strings', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        const result = useAppSelector(state => selectAxisDomain(state, 'xAxis', '0'));
        spy(result);
        return null;
      };
      const { container } = render(
        <BarChart data={PageData} width={100} height={100}>
          <XAxis dataKey="name" type={type} />
          <Customized component={Comp} />
        </BarChart>,
      );
      expect(spy).toHaveBeenLastCalledWith(['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F']);
      expectXAxisTicks(container, [
        {
          textContent: 'Page A',
          x: '12.5',
          y: '73',
        },
        {
          textContent: 'Page B',
          x: '27.5',
          y: '73',
        },
        {
          textContent: 'Page C',
          x: '42.5',
          y: '73',
        },
        {
          textContent: 'Page D',
          x: '57.5',
          y: '73',
        },
        {
          textContent: 'Page E',
          x: '72.5',
          y: '73',
        },
        {
          textContent: 'Page F',
          x: '87.5',
          y: '73',
        },
      ]);
    });

    it.each([true, undefined])(
      'should return all numbers including duplicates when allowDuplicatedCategory = %s',
      allowDuplicatedCategory => {
        const spy = vi.fn();
        const Comp = (): null => {
          const result = useAppSelector(state => selectAxisDomain(state, 'xAxis', '0'));
          spy(result);
          return null;
        };
        const { container } = render(
          <BarChart data={PageData} width={100} height={100}>
            <XAxis dataKey="uv" type={type} allowDuplicatedCategory={allowDuplicatedCategory} />
            <Customized component={Comp} />
          </BarChart>,
        );
        expect(spy).toHaveBeenLastCalledWith([400, 300, 300, 200, 278, 189]);
        expectXAxisTicks(container, [
          {
            textContent: '400',
            x: '12.5',
            y: '73',
          },
          {
            textContent: '300',
            x: '27.5',
            y: '73',
          },
          {
            textContent: '300',
            x: '42.5',
            y: '73',
          },
          {
            textContent: '200',
            x: '57.5',
            y: '73',
          },
          {
            textContent: '278',
            x: '72.5',
            y: '73',
          },
          {
            textContent: '189',
            x: '87.5',
            y: '73',
          },
        ]);
      },
    );

    it('should filter out duplicates when allowDuplicatedCategory = false', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        const result = useAppSelector(state => selectAxisDomain(state, 'xAxis', '0'));
        spy(result);
        return null;
      };
      const { container } = render(
        <BarChart data={PageData} width={100} height={100}>
          <XAxis dataKey="uv" type={type} allowDuplicatedCategory={false} />
          <Customized component={Comp} />
        </BarChart>,
      );
      expect(spy).toHaveBeenLastCalledWith([400, 300, 200, 278, 189]);
      expectXAxisTicks(container, [
        {
          textContent: '400',
          x: '14',
          y: '73',
        },
        {
          textContent: '300',
          x: '32',
          y: '73',
        },
        {
          textContent: '200',
          x: '50',
          y: '73',
        },
        {
          textContent: '278',
          x: '68',
          y: '73',
        },
        {
          textContent: '189',
          x: '86',
          y: '73',
        },
      ]);
    });

    it('should replace everything that is not a number, string, or Date, with empty string', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        const result = useAppSelector(state => selectAxisDomain(state, 'xAxis', '0'));
        spy(result);
        return null;
      };
      const { container } = render(
        <BarChart
          data={[
            { x: null },
            { x: 'Jan' },
            { x: undefined },
            { x: 'Feb' },
            { x: [] },
            { x: 'Mar' },
            { x: function anon() {} },
            { x: 'Apr' },
            { x: {} },
            { x: 'May' },
            { x: NaN },
            { x: 'Jun' },
            { x: new Map() },
            { x: 'Jul' },
            { x: Symbol.for('mock symbol') },
            { x: 'Aug' },
            { x: new Promise(() => {}) },
          ]}
          width={100}
          height={100}
        >
          <XAxis dataKey="x" type={type} allowDuplicatedCategory />
          <Customized component={Comp} />
        </BarChart>,
      );
      expect(spy).toHaveBeenLastCalledWith([
        '',
        'Jan',
        '',
        'Feb',
        '',
        'Mar',
        '',
        'Apr',
        '',
        'May',
        '',
        'Jun',
        '',
        'Jul',
        '',
        'Aug',
        '',
      ]);
      expectXAxisTicks(container, [
        {
          textContent: '',
          x: '7.647058823529411',
          y: '73',
        },
        {
          textContent: 'Jan',
          x: '12.941176470588234',
          y: '73',
        },
        {
          textContent: '',
          x: '18.235294117647058',
          y: '73',
        },
        {
          textContent: 'Feb',
          x: '23.529411764705884',
          y: '73',
        },
        {
          textContent: 'Mar',
          x: '28.823529411764707',
          y: '73',
        },
        {
          textContent: '',
          x: '34.11764705882353',
          y: '73',
        },
        {
          textContent: 'Apr',
          x: '39.411764705882355',
          y: '73',
        },
        {
          textContent: '',
          x: '44.705882352941174',
          y: '73',
        },
        {
          textContent: 'May',
          x: '50',
          y: '73',
        },
        {
          textContent: '',
          x: '55.294117647058826',
          y: '73',
        },
        {
          textContent: 'Jun',
          x: '60.588235294117645',
          y: '73',
        },
        {
          textContent: '',
          x: '65.88235294117646',
          y: '73',
        },
        {
          textContent: 'Jul',
          x: '71.17647058823529',
          y: '73',
        },
        {
          textContent: '',
          x: '76.47058823529412',
          y: '73',
        },
        {
          textContent: 'Aug',
          x: '81.76470588235293',
          y: '73',
        },
        {
          textContent: '',
          x: '87.05882352941175',
          y: '73',
        },
        {
          // no idea where the string 'undefined' comes from - the new implementation doesn't have it, breaking or not.
          textContent: 'undefined',
          x: '92.35294117647058',
          y: '73',
        },
      ]);
    });

    it('should replace everything that is not a number, string, or Date, with empty string, and not allow duplicates', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        const result = useAppSelector(state => selectAxisDomain(state, 'xAxis', '0'));
        spy(result);
        return null;
      };
      const { container } = render(
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
      expect(spy).toHaveBeenLastCalledWith(['', 'Monday', 'Tuesday', 'Wednesday']);
      expectXAxisTicks(container, [
        {
          textContent: '',
          x: '16.25',
          y: '73',
        },
        {
          textContent: 'Monday',
          x: '38.75',
          y: '73',
        },
        {
          textContent: 'Tuesday',
          x: '61.25',
          y: '73',
        },
        {
          textContent: 'Wednesday',
          x: '83.75',
          y: '73',
        },
      ]);
    });
  });
});

describe('selectHasBar', () => {
  it('should return undefined when called outside of Redux context', () => {
    const Comp = (): null => {
      const result = useAppSelector(selectHasBar);
      expect(result).toBe(undefined);
      return null;
    };
    render(<Comp />);
  });

  it('should return false when called with initial state', () => {
    const initialState: RechartsRootState = createRechartsStore().getState();
    const result = selectHasBar(initialState);
    expect(result).toBe(false);
  });

  it('should return true if there is a Bar in the chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(selectHasBar);
      spy(result);
      return null;
    };
    const { container, rerender } = render(
      <BarChart data={PageData} width={100} height={100}>
        <Bar dataKey="uv" />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(container.querySelector('.recharts-bar')).toBeVisible();
    expect(spy).toHaveBeenLastCalledWith(true);

    // returns false after Bar is removed from DOM
    rerender(
      <BarChart data={PageData} width={100} height={100}>
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(container.querySelector('.recharts-bar')).toBeNull();
    expect(spy).toHaveBeenLastCalledWith(false);
  });

  it('should return false if there is no Bar in the chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(selectHasBar);
      spy(result);
      return null;
    };
    const { container } = render(
      <BarChart data={PageData} width={100} height={100}>
        <Line dataKey="uv" />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(container.querySelector('.recharts-bar')).toBeNull();
    expect(spy).toHaveBeenLastCalledWith(false);
  });

  it('should return true if there are two Bars in the chart and then I remove one', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(selectHasBar);
      spy(result);
      return null;
    };
    const { container, rerender } = render(
      <BarChart data={PageData} width={100} height={100}>
        <Bar dataKey="uv" />
        <Bar dataKey="pv" />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-bar')).toHaveLength(2);
    expect(spy).toHaveBeenLastCalledWith(true);
    rerender(
      <BarChart data={PageData} width={100} height={100}>
        <Bar dataKey="uv" />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-bar')).toHaveLength(1);
    expect(spy).toHaveBeenLastCalledWith(true);
  });

  it('should return true if there is RadialBar in RadialChart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(selectHasBar);
      spy(result);
      return null;
    };
    const { container, rerender } = render(
      <RadialBarChart data={PageData} width={100} height={100}>
        <RadialBar dataKey="uv" />
        <Customized component={Comp} />
      </RadialBarChart>,
    );
    expect(container.querySelector('.recharts-radial-bar-sectors')).toBeVisible();
    expect(spy).toHaveBeenLastCalledWith(true);

    // returns false after the only RadialBar is removed from DOM
    rerender(
      <RadialBarChart data={PageData} width={100} height={100}>
        <Customized component={Comp} />
      </RadialBarChart>,
    );
    expect(container.querySelector('.recharts-radial-bar-sectors')).toBeNull();
    expect(spy).toHaveBeenLastCalledWith(false);
  });

  it('should return false if RadialBarChart has no RadialBar in it', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(selectHasBar);
      spy(result);
      return null;
    };
    const { container } = render(
      <RadialBarChart data={PageData} width={100} height={100}>
        <Customized component={Comp} />
      </RadialBarChart>,
    );
    expect(container.querySelector('.recharts-radial-bar-sectors')).toBeNull();
    expect(spy).toHaveBeenLastCalledWith(false);
  });
});
