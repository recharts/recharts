import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { useAppSelector } from '../../src/state/hooks';
import {
  selectAxisScale,
  selectAxisDomain,
  selectHasBar,
  selectCalculatedXAxisPadding,
  selectSmallestDistanceBetweenValues,
  selectCartesianGraphicalItemsData,
  selectAllDataSquished,
} from '../../src/state/axisSelectors';
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
  PieChart,
  Pie,
  LineChart,
  Brush,
} from '../../src';
import { misbehavedData, PageData } from '../_data';
import { ExpectAxisDomain, expectXAxisTicks } from '../helper/expectAxisTicks';
import { addCartesianGraphicalItem } from '../../src/state/graphicalItemsSlice';
import { generateMockData } from '../helper/generateMockData';
import { AxisId } from '../../src/state/axisMapSlice';

const defaultAxisId: AxisId = 0;

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
    const result = selectAxisScale(initialState, 'yAxis', 'foo');
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
    const scaleDomainSpy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectAxisScale(state, 'xAxis', '0'));
      scaleDomainSpy(result.scale?.domain());
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
    expect(scaleDomainSpy).toHaveBeenLastCalledWith(['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F']);
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
      expect(spy).toHaveBeenLastCalledWith([0, 400]);
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

    it('should return 0,0 if the data is not numerical', () => {
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
      expect(spy).toHaveBeenLastCalledWith([0, 0]);
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

    it('should squish all data defined on all items, ignore chart root data, compute min, max of the combination, and then readjust it based on nice ticks', () => {
      const axisDomainSpy = vi.fn();
      const Comp = (): null => {
        const result = useAppSelector(state => selectAxisDomain(state, 'xAxis', 0));
        axisDomainSpy(result);
        return null;
      };
      const { container } = render(
        <ComposedChart
          data={[
            // by far the largest here, but ignored!
            { x: 100000, y: 99999 },
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
      expect(axisDomainSpy).toHaveBeenLastCalledWith([0, 220]);
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
      'should return domain as array indexes when allowDuplicatedCategory = %s',
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
        expect(spy).toHaveBeenLastCalledWith([0, 1, 2, 3, 4, 5]);
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

    it('with allowDuplicatedCategory=true, and the data has duplicates, it should return domain as array indexes', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        const result = useAppSelector(state => selectAxisDomain(state, 'xAxis', '0'));
        spy(result);
        return null;
      };
      const { container } = render(
        <BarChart data={misbehavedData} width={100} height={100}>
          <XAxis dataKey="x" type={type} allowDuplicatedCategory />
          <Customized component={Comp} />
        </BarChart>,
      );
      expect(spy).toHaveBeenLastCalledWith([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
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

    it('with allowDuplicatedCategory=true, but the data has no duplicates, it should return domain as strings', () => {
      const data = [{ x: 'Jan' }, { x: 'Feb' }, { x: 'Mar' }, { x: 'Apr' }, { x: 'May' }, { x: 'Jun' }];
      const spy = vi.fn();
      const Comp = (): null => {
        const result = useAppSelector(state => selectAxisDomain(state, 'xAxis', '0'));
        spy(result);
        return null;
      };
      const { container } = render(
        <BarChart data={data} width={100} height={100}>
          <XAxis dataKey="x" type={type} allowDuplicatedCategory />
          <Customized component={Comp} />
        </BarChart>,
      );
      expect(spy).toHaveBeenLastCalledWith(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']);
      expectXAxisTicks(container, [
        {
          textContent: 'Jan',
          x: '12.5',
          y: '73',
        },
        {
          textContent: 'Feb',
          x: '27.5',
          y: '73',
        },
        {
          textContent: 'Mar',
          x: '42.5',
          y: '73',
        },
        {
          textContent: 'Apr',
          x: '57.5',
          y: '73',
        },
        {
          textContent: 'May',
          x: '72.5',
          y: '73',
        },
        {
          textContent: 'Jun',
          x: '87.5',
          y: '73',
        },
      ]);
    });

    it('with allowDuplicatedCategory=false, should return domain as deduplicated strings', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        const result = useAppSelector(state => selectAxisDomain(state, 'xAxis', '0'));
        spy(result);
        return null;
      };
      const { container } = render(
        <BarChart data={misbehavedData} width={100} height={100}>
          <XAxis dataKey="x" type={type} allowDuplicatedCategory={false} />
          <Customized component={Comp} />
        </BarChart>,
      );
      expect(spy).toHaveBeenLastCalledWith(['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']);
      expectXAxisTicks(container, [
        {
          textContent: '',
          x: '10',
          y: '73',
        },
        {
          textContent: 'Jan',
          x: '20',
          y: '73',
        },
        {
          textContent: 'Feb',
          x: '30',
          y: '73',
        },
        {
          textContent: 'Mar',
          x: '40',
          y: '73',
        },
        {
          textContent: 'Apr',
          x: '50',
          y: '73',
        },
        {
          textContent: 'May',
          x: '60',
          y: '73',
        },
        {
          textContent: 'Jun',
          x: '70',
          y: '73',
        },
        {
          textContent: 'Jul',
          x: '80',
          y: '73',
        },
        {
          textContent: 'Aug',
          x: '90',
          y: '73',
        },
      ]);
    });

    it('should return array indexes if dataKey is undefined', () => {
      const data = [{ x: 'Monday' }, { x: 'Tuesday' }, { x: 'Wednesday' }];
      const spy = vi.fn();
      const Comp = (): null => {
        const result = useAppSelector(state => selectAxisDomain(state, 'xAxis', '0'));
        spy(result);
        return null;
      };
      const { container } = render(
        <BarChart data={data} width={100} height={100}>
          <XAxis type={type} allowDuplicatedCategory={false} />
          <Customized component={Comp} />
        </BarChart>,
      );
      expect(spy).toHaveBeenLastCalledWith([0, 1, 2]);
      expectXAxisTicks(container, [
        {
          textContent: '0',
          x: '20',
          y: '73',
        },
        {
          textContent: '1',
          x: '50',
          y: '73',
        },
        {
          textContent: '2',
          x: '80',
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

describe('selectCalculatedPadding', () => {
  it('should return undefined when called outside of Redux context', () => {
    const Comp = (): null => {
      const result = useAppSelector(state => selectCalculatedXAxisPadding(state, 0));
      expect(result).toBeUndefined();
      return null;
    };
    render(<Comp />);
  });

  it('should return 0 when called with initial state', () => {
    const initialState: RechartsRootState = createRechartsStore().getState();
    const result = selectCalculatedXAxisPadding(initialState, 0);
    expect(result).toBe(0);
  });

  it('should return 0 when padding is explicitly provided on XAxis', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectCalculatedXAxisPadding(state, 0));
      spy(result);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <XAxis dataKey="name" padding={{ left: 11, right: 13 }} />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(0);
  });

  it('should return a number when padding is "gap"', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectCalculatedXAxisPadding(state, 0));
      spy(result);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <XAxis dataKey="pv" padding="gap" type="number" />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(1.247917162580338);
  });

  it('should return a number when padding is "no-gap"', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectCalculatedXAxisPadding(state, 0));
      spy(result);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <XAxis dataKey="pv" padding="no-gap" type="number" />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(0.9955652016293147);
  });

  it('should return 0 when padding=no-gap and there is only one data point on the chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectCalculatedXAxisPadding(state, 0));
      spy(result);
      return null;
    };
    render(
      <BarChart data={[PageData[0]]} width={100} height={100}>
        <XAxis dataKey="pv" padding="no-gap" type="number" />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(0);
  });

  it('should return 0 when padding is an object', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectCalculatedXAxisPadding(state, 0));
      spy(result);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <XAxis dataKey="pv" padding={{ left: 11, right: 13 }} type="number" />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(0);
  });
});

describe('selectSmallestDistanceBetweenValues', () => {
  it('should return undefined when called outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const result = useAppSelector(state => selectSmallestDistanceBetweenValues(state, 'xAxis', 0));
      expect(result).toBeUndefined();
      return null;
    };
    render(<Comp />);
  });

  it('should return undefined when called with initial state', () => {
    const initialState: RechartsRootState = createRechartsStore().getState();
    const result = selectSmallestDistanceBetweenValues(initialState, 'xAxis', 0);
    expect(result).toBeUndefined();
  });

  it('should return undefined if there is no data in the chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectSmallestDistanceBetweenValues(state, 'xAxis', 0));
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

  it.each([undefined, 'category'] as const)('should return undefined if XAxis type=%s', type => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectSmallestDistanceBetweenValues(state, 'xAxis', 0));
      spy(result);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <Bar dataKey="pv" />
        <XAxis dataKey="name" type={type} />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenCalledWith(undefined);
  });

  it('should return the smallest distance, in percent, between values if type=number', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectSmallestDistanceBetweenValues(state, 'xAxis', 0));
      spy(result);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <XAxis dataKey="pv" type="number" />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(0.02773149250178529);
  });

  it('should return the smallest distance, in percent, between values if type=number', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectSmallestDistanceBetweenValues(state, 'xAxis', 0));
      spy(result);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <XAxis dataKey="pv" type="number" />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(0.02773149250178529);
  });

  it('should return Infinity, if the data is an empty array', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectSmallestDistanceBetweenValues(state, 'xAxis', 0));
      spy(result);
      return null;
    };
    render(
      <BarChart data={[]} width={100} height={100}>
        <XAxis dataKey="pv" type="number" />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(Infinity);
  });

  it('should return Infinity, if the data has only one entry', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectSmallestDistanceBetweenValues(state, 'xAxis', 0));
      spy(result);
      return null;
    };
    render(
      <BarChart data={[PageData[0]]} width={100} height={100}>
        <XAxis dataKey="pv" type="number" />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(Infinity);
  });

  it('should return 0 if the data has two items with the same value', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectSmallestDistanceBetweenValues(state, 'xAxis', 0));
      spy(result);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <XAxis dataKey="uv" type="number" />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(0);
  });
});

describe('selectCartesianGraphicalItemsData', () => {
  it('should return undefined when called outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const payload = useAppSelector(state => selectCartesianGraphicalItemsData(state, 'xAxis', 'x'));
      expect(payload).toBe(undefined);
      return null;
    };
    render(<Comp />);
  });

  it('should return empty array for initial state', () => {
    const store = createRechartsStore();
    expect(selectCartesianGraphicalItemsData(store.getState(), 'xAxis', 'x')).toEqual([]);
  });

  it('should be stable', () => {
    const store = createRechartsStore();
    store.dispatch(addCartesianGraphicalItem({ dataKey: undefined, data: PageData, xAxisId: 'x' }));
    const result1 = selectCartesianGraphicalItemsData(store.getState(), 'xAxis', 'x');
    const result2 = selectCartesianGraphicalItemsData(store.getState(), 'xAxis', 'x');
    expect(result1).toBe(result2);
  });

  it('should return empty array in an empty chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const tooltipData = useAppSelector(state => selectCartesianGraphicalItemsData(state, 'xAxis', defaultAxisId));
      spy(tooltipData);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenLastCalledWith([]);
  });

  it('should return all data defined on graphical items', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const graphicalItemsData = useAppSelector(state =>
        selectCartesianGraphicalItemsData(state, 'xAxis', defaultAxisId),
      );
      spy(graphicalItemsData);
      return null;
    };
    render(
      <ComposedChart data={PageData} width={100} height={100}>
        <Area dataKey="" data={[1, 2, 3]} />
        <Area dataKey="" data={[10, 20, 30]} />
        <Line data={[4, 5, 6]} />
        <Line data={[40, 50, 60]} />
        <Scatter data={[7, 8, 9]} />
        <Scatter data={[70, 80, 90]} />
        <Customized component={Comp} />
      </ComposedChart>,
    );
    // as opposed to the tooltip data selector - this one stores all original data without transformation.
    expect(spy).toHaveBeenLastCalledWith(
      expect.arrayContaining([
        [1, 2, 3],
        [10, 20, 30],
        [4, 5, 6],
        [40, 50, 60],
        [7, 8, 9],
        [70, 80, 90],
      ]),
    );
    expect(spy).toHaveBeenCalledTimes(3);
  });

  it('should return nothing for graphical items that do not have any explicit data prop on them', () => {
    const spy = vi.fn();
    const domainSpy = vi.fn();
    const Comp = (): null => {
      const tooltipData = useAppSelector(state => selectCartesianGraphicalItemsData(state, 'xAxis', defaultAxisId));
      spy(tooltipData);
      return null;
    };
    const { container } = render(
      <ComposedChart data={PageData} width={100} height={100}>
        <Area dataKey="" />
        <Area dataKey="" data={[10, 20, 30]} />
        <Line />
        <Line data={[40, 50, 60]} />
        <Scatter />
        <Scatter data={[70, 80, 90]} />
        <XAxis />
        <Customized component={Comp} />
        <Customized component={<ExpectAxisDomain axisType="xAxis" assert={domainSpy} />} />
      </ComposedChart>,
    );
    // Scatter - surprises again - and provides empty array instead of proper undefined like the other elements! Coincidentally that makes no difference
    expect(spy).toHaveBeenLastCalledWith(
      // the order is arbitrary
      expect.arrayContaining([[10, 20, 30], [40, 50, 60], [], [70, 80, 90]]),
    );
    expect(domainSpy).toHaveBeenLastCalledWith([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    expectXAxisTicks(container, [
      {
        textContent: '0',
        x: '5',
        y: '73',
      },
      {
        textContent: '1',
        x: '16.25',
        y: '73',
      },
      {
        textContent: '2',
        x: '27.5',
        y: '73',
      },
      {
        textContent: '3',
        x: '38.75',
        y: '73',
      },
      {
        textContent: '4',
        x: '50',
        y: '73',
      },
      {
        textContent: '5',
        x: '61.25',
        y: '73',
      },
      {
        textContent: '6',
        x: '72.5',
        y: '73',
      },
      {
        textContent: '7',
        x: '83.75',
        y: '73',
      },
      {
        textContent: '8',
        x: '95',
        y: '73',
      },
    ]);
  });

  it('should not return any data defined on Pies - that one will have its own independent selector', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const tooltipData = useAppSelector(state => selectCartesianGraphicalItemsData(state, 'xAxis', defaultAxisId));
      spy(tooltipData);
      return null;
    };
    render(
      <PieChart width={100} height={100}>
        <Customized component={Comp} />
        <Pie data={[{ x: 1 }, { x: 2 }, { x: 3 }]} dataKey="x" />
        <Pie data={[{ y: 10 }, { y: 20 }, { y: 30 }]} dataKey="y" />
      </PieChart>,
    );
    /*
     * okay Pie surprises again - it adds ton of extra other properties to the original array
     * and then it pretends it was there from the start.
     * Well in this test let's pretend that's not happening and assume it provides the original array instead.
     */
    expect(spy).toHaveBeenLastCalledWith([]);
  });
});

describe('selectAllDataSquished', () => {
  const mockData = generateMockData(10, 982347);
  const data1 = mockData.slice(0, 5);
  const data2 = mockData.slice(5);

  it('should return undefined when called outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const result = useAppSelector(state => selectAllDataSquished(state, 'xAxis', defaultAxisId));
      expect(result).toBe(undefined);
      return null;
    };
    render(<Comp />);
  });

  it('should return undefined for initial state', () => {
    const store = createRechartsStore();
    expect(selectAllDataSquished(store.getState(), 'xAxis', defaultAxisId)).toEqual(undefined);
  });

  it('should return undefined in an empty chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectAllDataSquished(state, 'xAxis', defaultAxisId));
      spy(result);
      return null;
    };
    render(
      <BarChart width={100} height={100}>
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(undefined);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('should return undefined if there is no axis with matching ID', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectAllDataSquished(state, 'xAxis', defaultAxisId));
      spy(result);
      return null;
    };
    render(
      <LineChart width={100} height={100}>
        <Line data={data1} />
        <Line data={data2} />
        <Customized component={Comp} />
      </LineChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(undefined);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('should return data defined in all graphical items based on the input dataKey, and default axis ID', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectAllDataSquished(state, 'xAxis', defaultAxisId));
      spy(result);
      return null;
    };
    render(
      <LineChart width={100} height={100}>
        <Line data={data1} />
        <Line data={data2} />
        <XAxis dataKey="x" />
        <Customized component={Comp} />
      </LineChart>,
    );
    expect(spy).toHaveBeenLastCalledWith([
      { value: 211 },
      { value: 245 },
      { value: 266 },
      { value: 140 },
      { value: 131 },
      { value: 280 },
      { value: 294 },
      { value: 239 },
      { value: 293 },
      { value: 244 },
    ]);
    expect(spy).toHaveBeenCalledTimes(3);
  });

  it('should return data defined in graphical items with matching axis ID', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectAllDataSquished(state, 'xAxis', 'my axis id'));
      spy(result);
      return null;
    };
    render(
      <LineChart width={100} height={100}>
        <Line data={data2} xAxisId="my axis id" />
        <XAxis dataKey="x" xAxisId="my axis id" />
        <Line data={data1} xAxisId="some other ID" />
        <XAxis dataKey="y" xAxisId="some other ID" />
        <Customized component={Comp} />
      </LineChart>,
    );
    expect(spy).toHaveBeenLastCalledWith([
      { value: 280 },
      { value: 294 },
      { value: 239 },
      { value: 293 },
      { value: 244 },
    ]);
    expect(spy).toHaveBeenCalledTimes(3);
  });

  it('should return different data with different dataKey', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectAllDataSquished(state, 'xAxis', defaultAxisId));
      spy(result);
      return null;
    };
    render(
      <LineChart width={100} height={100}>
        <Line data={data1} />
        <Line data={data2} />
        <XAxis dataKey="y" />
        <Customized component={Comp} />
      </LineChart>,
    );
    expect(spy).toHaveBeenLastCalledWith([
      { value: 481 },
      { value: 672 },
      { value: 721 },
      { value: 446 },
      { value: 598 },
      { value: 774 },
      { value: 687 },
      { value: 762 },
      { value: 439 },
      { value: 569 },
    ]);
    expect(spy).toHaveBeenCalledTimes(3);
  });

  it('should return data defined in the chart root', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectAllDataSquished(state, 'xAxis', defaultAxisId));
      spy(result);
      return null;
    };
    render(
      <LineChart data={data1} width={100} height={100}>
        <Line />
        <XAxis dataKey="x" />
        <Customized component={Comp} />
      </LineChart>,
    );
    expect(spy).toHaveBeenLastCalledWith([
      { value: 211 },
      { value: 245 },
      { value: 266 },
      { value: 140 },
      { value: 131 },
    ]);
    expect(spy).toHaveBeenCalledTimes(3);
  });

  it('should not return data defined in the chart root if the axis ID does not match', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectAllDataSquished(state, 'xAxis', 'axis with this ID is not present'));
      spy(result);
      return null;
    };
    render(
      <LineChart data={data1} width={100} height={100}>
        <Customized component={Comp} />
        <XAxis dataKey="x" />
      </LineChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(undefined);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('should return array full of undefined when the dataKey does not match anything in the data', () => {
    const dataSpy = vi.fn();
    const domainSpy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectAllDataSquished(state, 'xAxis', defaultAxisId));
      dataSpy(result);
      return null;
    };
    render(
      <LineChart data={data1} width={100} height={100}>
        <Line />
        <XAxis dataKey="invalid dataKey" />
        <Customized component={Comp} />
        <Customized component={<ExpectAxisDomain axisType="xAxis" assert={domainSpy} />} />
      </LineChart>,
    );
    expect(dataSpy).toHaveBeenLastCalledWith([
      { value: undefined },
      { value: undefined },
      { value: undefined },
      { value: undefined },
      { value: undefined },
    ]);
    expect(domainSpy).toHaveBeenLastCalledWith([0, 1, 2, 3, 4]);
    expect(dataSpy).toHaveBeenCalledTimes(3);
  });

  it('should slice chart root data by dataStartIndex and dataEndIndex', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectAllDataSquished(state, 'xAxis', defaultAxisId));
      spy(result);
      return null;
    };
    render(
      <LineChart data={mockData} width={100} height={100}>
        <Line />
        <Brush startIndex={1} endIndex={4} />
        <XAxis dataKey="x" />
        <Customized component={Comp} />
      </LineChart>,
    );
    expect(spy).toHaveBeenLastCalledWith([{ value: 245 }, { value: 266 }, { value: 140 }, { value: 131 }]);
    expect(spy).toHaveBeenCalledTimes(3);
  });
});
