import { describe, expect, it, vi } from 'vitest';
import React, { ReactNode } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { BarChart, Customized, XAxis } from '../../../src';
import { expectLastCalledWith } from '../../helper/expectLastCalledWith';
import { useAppSelector } from '../../../src/state/hooks';
import {
  implicitXAxis,
  selectRenderableAxisSettings,
  selectRenderedTicksOfAxis,
  selectXAxisSettings,
} from '../../../src/state/selectors/axisSelectors';
import { XAxisSettings } from '../../../src/state/cartesianAxisSlice';
import { createSelectorTestCase, rechartsTestRender } from '../../helper/createSelectorTestCase';
import { assertNotNull } from '../../helper/assertNotNull';
import { TickItem } from '../../../src/util/types';

describe('state integration', () => {
  it('should publish its configuration to redux store', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const settings = useAppSelector(state => selectRenderableAxisSettings(state, 'xAxis', 'foo'));
      spy(settings);
      return null;
    };
    const fakeTickFormatter = () => '';
    const { container } = render(
      <BarChart width={100} height={100}>
        <XAxis
          xAxisId="foo"
          scale="log"
          type="number"
          includeHidden
          ticks={[4, 5, 6]}
          height={31}
          orientation="top"
          mirror
          name="axis name"
          unit="axis unit"
          interval={7}
          angle={13}
          minTickGap={9}
          tick={false}
          tickFormatter={fakeTickFormatter}
        />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(container.querySelector('.xAxis')).toBeVisible();
    expect(spy).toHaveBeenCalledTimes(3);
    const expectedSettings: XAxisSettings = {
      angle: 13,
      minTickGap: 9,
      tick: false,
      tickFormatter: fakeTickFormatter,
      interval: 7,
      name: 'axis name',
      unit: 'axis unit',
      hide: false,
      mirror: true,
      orientation: 'top',
      height: 31,
      ticks: [4, 5, 6],
      includeHidden: true,
      tickCount: 5,
      allowDecimals: true,
      id: 'foo',
      scale: 'log',
      type: 'number',
      allowDataOverflow: false,
      allowDuplicatedCategory: true,
      dataKey: undefined,
      domain: undefined,
      padding: {
        left: 0,
        right: 0,
      },
      reversed: false,
      niceTicks: false,
    };
    expectLastCalledWith(spy, expectedSettings);
  });

  it('should remove the configuration from store when DOM element is removed', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const foo = useAppSelector(state => selectRenderableAxisSettings(state, 'xAxis', 'foo'));
      const bar = useAppSelector(state => selectRenderableAxisSettings(state, 'xAxis', 'bar'));
      spy({ foo, bar });
      return null;
    };
    const { rerender } = rechartsTestRender(
      <BarChart width={100} height={100}>
        <XAxis xAxisId="foo" scale="log" type="number" />
        <Customized component={Comp} />
      </BarChart>,
    );
    const expectedSettings1: XAxisSettings = {
      angle: 0,
      minTickGap: 5,
      tick: true,
      tickFormatter: undefined,
      interval: 'preserveEnd',
      name: undefined,
      unit: undefined,
      hide: false,
      mirror: false,
      height: 30,
      orientation: 'bottom',
      ticks: undefined,
      includeHidden: false,
      tickCount: 5,
      allowDecimals: true,
      id: 'foo',
      scale: 'log',
      type: 'number',
      allowDataOverflow: false,
      allowDuplicatedCategory: true,
      dataKey: undefined,
      domain: undefined,
      padding: {
        left: 0,
        right: 0,
      },
      reversed: false,
      niceTicks: false,
    };
    expectLastCalledWith(spy, {
      foo: expectedSettings1,
      bar: implicitXAxis,
    });
    rerender(
      <BarChart width={100} height={100}>
        <XAxis xAxisId="foo" scale="log" type="number" />
        <XAxis xAxisId="bar" scale="utc" type="category" />
        <Customized component={Comp} />
      </BarChart>,
    );
    const expectedSettings2: {
      bar: XAxisSettings;
      foo: XAxisSettings;
    } = {
      foo: {
        angle: 0,
        minTickGap: 5,
        tick: true,
        tickFormatter: undefined,
        interval: 'preserveEnd',
        name: undefined,
        unit: undefined,
        hide: false,
        mirror: false,
        orientation: 'bottom',
        height: 30,
        ticks: undefined,
        includeHidden: false,
        id: 'foo',
        scale: 'log',
        type: 'number',
        allowDataOverflow: false,
        allowDuplicatedCategory: true,
        dataKey: undefined,
        domain: undefined,
        padding: {
          left: 0,
          right: 0,
        },
        allowDecimals: true,
        tickCount: 5,
        reversed: false,
        niceTicks: false,
      },
      bar: {
        angle: 0,
        minTickGap: 5,
        tick: true,
        tickFormatter: undefined,
        interval: 'preserveEnd',
        name: undefined,
        unit: undefined,
        hide: false,
        mirror: false,
        orientation: 'bottom',
        height: 30,
        ticks: undefined,
        includeHidden: false,
        id: 'bar',
        scale: 'utc',
        type: 'category',
        allowDataOverflow: false,
        allowDuplicatedCategory: true,
        dataKey: undefined,
        domain: undefined,
        padding: {
          left: 0,
          right: 0,
        },
        allowDecimals: true,
        tickCount: 5,
        reversed: false,
        niceTicks: false,
      },
    };
    expectLastCalledWith(spy, expectedSettings2);
    rerender(
      <BarChart width={100} height={100}>
        <XAxis xAxisId="bar" scale="utc" type="category" />
        <Customized component={Comp} />
      </BarChart>,
    );

    const expectedSettings3: XAxisSettings = {
      angle: 0,
      minTickGap: 5,
      tick: true,
      tickFormatter: undefined,
      interval: 'preserveEnd',
      name: undefined,
      unit: undefined,
      hide: false,
      mirror: false,
      orientation: 'bottom',
      height: 30,
      ticks: undefined,
      includeHidden: false,
      tickCount: 5,
      id: 'bar',
      scale: 'utc',
      type: 'category',
      allowDataOverflow: false,
      allowDuplicatedCategory: true,
      dataKey: undefined,
      domain: undefined,
      padding: {
        left: 0,
        right: 0,
      },
      allowDecimals: true,
      reversed: false,
      niceTicks: false,
    };
    expectLastCalledWith(spy, {
      foo: implicitXAxis,
      bar: expectedSettings3,
    });
    rerender(
      <BarChart width={100} height={100}>
        <Customized component={Comp} />
      </BarChart>,
    );

    expectLastCalledWith(spy, {
      foo: implicitXAxis,
      bar: implicitXAxis,
    });
  });

  it('should remove old ID configuration when the ID changes', () => {
    const IDChangingComponent = ({ children }: { children: ReactNode }) => {
      const [id, setId] = React.useState('1');
      const onClick = () => setId('2');
      return (
        <>
          <button type="button" className="pushbutton" onClick={onClick}>
            Change ID
          </button>
          <BarChart width={100} height={100}>
            <XAxis xAxisId={id} scale="log" type="number" />
            {children}
          </BarChart>
        </>
      );
    };
    const renderTestCase = createSelectorTestCase(IDChangingComponent);

    const { spy, container } = renderTestCase(state => state.cartesianAxis.xAxis);

    expect(spy).toHaveBeenCalledTimes(3);

    // only id "1" exists
    const lastCallArgs1 = spy.mock.lastCall?.[0];
    assertNotNull(lastCallArgs1);
    expect(Object.keys(lastCallArgs1)).toEqual(['1']);

    fireEvent.click(container.getElementsByClassName('pushbutton')[0]);
    expect(spy).toHaveBeenCalledTimes(5);

    // only id "2" exists
    const lastCallArgs2 = spy.mock.lastCall?.[0];
    assertNotNull(lastCallArgs2);
    expect(Object.keys(lastCallArgs2)).toEqual(['2']);
  });

  it('should return stable reference when chart re-renders', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <BarChart width={100} height={100}>
        <XAxis xAxisId="foo" scale="log" type="number" />
        {children}
      </BarChart>
    ));

    const { spy, rerenderSameComponent } = renderTestCase(state => selectXAxisSettings(state, 'foo'));

    const expectedSettings: XAxisSettings = {
      angle: 0,
      minTickGap: 5,
      tick: true,
      tickFormatter: undefined,
      interval: 'preserveEnd',
      name: undefined,
      unit: undefined,
      hide: false,
      mirror: false,
      orientation: 'bottom',
      height: 30,
      ticks: undefined,
      includeHidden: false,
      tickCount: 5,
      allowDecimals: true,
      id: 'foo',
      scale: 'log',
      type: 'number',
      allowDataOverflow: false,
      allowDuplicatedCategory: true,
      dataKey: undefined,
      domain: undefined,
      padding: {
        left: 0,
        right: 0,
      },
      reversed: false,
      niceTicks: false,
    };
    expectLastCalledWith(spy, expectedSettings);

    rerenderSameComponent();
    expectLastCalledWith(spy, expectedSettings);
    expect(spy).toHaveBeenCalledTimes(4);

    // now assert that the 2nd and 3rd call have identical references (toBe)
    expect(spy.mock.calls[1][0]).toBe(spy.mock.calls[2][0]);
  });

  it('should not render anything when attempting to render outside of Chart', () => {
    const { container } = render(<XAxis dataKey="x" name="stature" unit="cm" />);
    expect(container.querySelectorAll('.recharts-cartesian-axis-line')).toHaveLength(0);
  });

  it('should publish rendered ticks to the store', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <BarChart width={100} height={100} data={[{ x: 'x-1' }, { x: 'x-2' }, { x: 'x-3' }]}>
        <XAxis xAxisId="foo" dataKey="x" />
        {children}
      </BarChart>
    ));

    const { spy } = renderTestCase(state => selectRenderedTicksOfAxis(state, 'xAxis', 'foo'));
    const expectedTicks: ReadonlyArray<TickItem> = [
      {
        coordinate: 20,
        index: 0,
        offset: 15,
        value: 'x-1',
      },
      {
        coordinate: 50,
        index: 1,
        offset: 15,
        value: 'x-2',
      },
      {
        coordinate: 80,
        index: 2,
        offset: 15,
        value: 'x-3',
      },
    ];
    expectLastCalledWith(spy, expectedTicks);
  });
});
