import React from 'react';
import { render } from '@testing-library/react';
import { describe, test, it, expect, vi } from 'vitest';
import { AreaChart, Area, BarChart, Bar, LineChart, Line, CartesianGrid, Tooltip, YAxis, Customized } from '../../src';
import { AxisDomain, StackOffsetType } from '../../src/util/types';
import { pageData } from '../../storybook/stories/data';
import { useAppSelector } from '../../src/state/hooks';
import { selectAxisDomain, selectAxisSettings } from '../../src/state/axisSelectors';
import { YAxisSettings } from '../../src/state/axisMapSlice';
import { expectYAxisTicks } from '../helper/expectAxisTicks';

describe('<YAxis />', () => {
  const data = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 300, pv: 1398, amt: 2400 },
    { name: 'Page C', uv: 200, pv: 9800, amt: 2400 },
    { name: 'Page D', uv: 278, pv: 3908, amt: 2400 },
    { name: 'Page E', uv: 189, pv: 4800, amt: 2400 },
  ];

  it('Should render 3 y-CartesianAxis in AreaChart', () => {
    const { container } = render(
      <AreaChart width={600} height={400} data={data}>
        <YAxis type="number" yAxisId={0} stroke="#ff7300" />
        <YAxis type="number" orient="right" yAxisId={1} stroke="#387908" />
        <YAxis type="number" orient="right" yAxisId={2} stroke="#38abc8" />
        <Area dataKey="uv" stroke="#ff7300" fill="#ff7300" strokeWidth={2} yAxisId={0} />
        <Area dataKey="pv" stroke="#387908" fill="#387908" strokeWidth={2} yAxisId={1} />
        <Area dataKey="amt" stroke="#38abc8" fill="#38abc8" strokeWidth={2} yAxisId={2} />
      </AreaChart>,
    );

    expect(container.querySelectorAll('.recharts-cartesian-axis-line')).toHaveLength(3);
  });

  it('Should render 5 ticks', () => {
    render(
      <AreaChart width={600} height={400} data={data}>
        <YAxis type="number" stroke="#ff7300" />
        <Area dataKey="uv" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );
    const ticks = document.querySelectorAll('text');

    expect(ticks).toHaveLength(5);
    expect(ticks[1].getAttribute('y')).toBe('297.5');
  });

  const casesThatShowTicks: [number, AxisDomain, string][] = [
    // [ticksLength, domain, textContentOfTickElement]
    [5, [0, 10000], '10000'],
    [4, [0, 'dataMax'], '9800'],
    [4, [0, 'dataMax - 100'], '9800'],
  ];

  test.each(casesThatShowTicks)('Should render %s ticks when domain={%s}', (length, domain, textContent) => {
    render(
      <AreaChart width={600} height={400} data={data}>
        <YAxis type="number" stroke="#ff7300" domain={domain} />
        <Area dataKey="uv" stroke="#ff7300" fill="#ff7300" />
        <Area dataKey="pv" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );
    const ticks = document.querySelectorAll('text');

    expect(ticks).toHaveLength(length);
    expect(ticks[ticks.length - 1]).toHaveTextContent(textContent);
  });

  it('Render 1 ticks when domain={[0, 1000]} and dataKey is "noExist"', () => {
    render(
      <AreaChart width={600} height={400} data={data}>
        <YAxis stroke="#ff7300" domain={[0, 1000]} />
        <Area dataKey="noExist" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );
    const ticks = document.querySelectorAll('text');

    expect(ticks).toHaveLength(5);
    expect(ticks[1].getAttribute('y')).toBe('297.5');
  });

  const casesThatDoNotShowTicks: [AxisDomain][] = [[[0, 'dataMax + 100']], [[0, 'dataMax - 100']], [['auto', 'auto']]];

  test.each(casesThatDoNotShowTicks)('Should render 0 ticks when domain={%s} and dataKey is "noExist" ', domain => {
    render(
      <AreaChart width={600} height={400} data={data}>
        <YAxis stroke="#ff7300" domain={domain} />
        <Area dataKey="noExist" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );
    const ticks = document.querySelectorAll('text');

    expect(ticks).toHaveLength(0);
  });

  it('Render 4 ticks', () => {
    render(
      <AreaChart width={600} height={400} data={data}>
        <YAxis type="number" stroke="#ff7300" ticks={[0, 400, 800, 1200]} />
        <Area dataKey="uv" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );
    const ticks = document.querySelectorAll('text');

    expect(ticks[0]).toHaveTextContent('0');
    expect(ticks[1]).toHaveTextContent('400');
    expect(ticks[2]).toHaveTextContent('800');
    expect(ticks[3]).toHaveTextContent('1200');
  });

  it('Renders axis based on specified domain when data overflow is allowed', () => {
    /*
     * We take domain values that have nothing to do with the test data to make sure they're really used.
     * We generate a random integer between 1 and 100.
     */
    const domainStart = Math.round(Math.random() * 100);
    const domainEnd = domainStart + Math.round(Math.random() * 100);

    render(
      <AreaChart width={600} height={400} data={data}>
        <YAxis type="number" stroke="#ff7300" domain={[domainStart, domainEnd]} allowDataOverflow />
        <Area dataKey="uv" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );

    // all ticks
    const ticks = document.querySelectorAll('.recharts-cartesian-axis-tick');

    // value of each tick
    const tickValues: number[] = [];
    ticks.forEach(tick => {
      const tickValueText = tick.textContent;
      expect(tickValueText).toBeTruthy();
      // convert string to number
      if (tickValueText) tickValues.push(Number(tickValueText));
    });

    const tickValueMax = Math.max(...tickValues);
    const tickValueMin = Math.min(...tickValues);

    expect(tickValueMin).toBe(domainStart);
    expect(tickValueMax).toBe(domainEnd);
  });

  it('Render ticks reversed', () => {
    render(
      <AreaChart width={600} height={400} data={data}>
        <YAxis reversed type="number" stroke="#ff7300" />
        <Area dataKey="uv" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );
    const ticks = document.querySelectorAll('text');

    expect(ticks).toHaveLength(5);
    expect(ticks[1].getAttribute('y')).toBe('102.5');
  });

  it('Should skip rendering ticks with empty text', () => {
    const areaData = [
      { day: '05-01', weather: 'sunny' },
      { day: '05-02' },
      { day: '05-03', weather: 'cloudy' },
      { day: '05-04', weather: 'rain' },
    ];
    render(
      <AreaChart width={400} height={400} data={areaData}>
        <YAxis type="category" />
        <Area type="stepAfter" dataKey="weather" stroke="#0088FE" />
      </AreaChart>,
    );
    const ticks = document.querySelectorAll('text');

    expect(ticks).toHaveLength(3);
  });

  it('Should render the YAxis line without any ticks', () => {
    const areaData = [{ day: '05-01' }, { day: '05-02' }];
    const { container } = render(
      <AreaChart width={400} height={400} data={areaData}>
        <YAxis type="category" />
        <Area type="stepAfter" dataKey="weather" stroke="#0088FE" />
      </AreaChart>,
    );
    const ticksGroup = container.getElementsByClassName('recharts-cartesian-axis-tick-line');
    expect(ticksGroup).toHaveLength(0);

    const axisLine = container.getElementsByClassName('recharts-cartesian-axis-line');
    expect(axisLine).toHaveLength(1);
  });

  it('should throw when attempting to render outside of Chart', () => {
    expect(() => render(<YAxis dataKey="x" name="stature" unit="cm" />)).toThrow(
      'Invariant failed: Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?',
    );
  });

  it('Render identical ticks when data is hidden and includeHidden is true', () => {
    const wrapperBothShowing = render(
      <BarChart width={600} height={400} data={data}>
        <YAxis type="number" stroke="#ff7300" includeHidden />
        <Bar dataKey="pv" stroke="#ff7300" fill="#ff7300" isAnimationActive={false} />
        <Bar dataKey="amt" stroke="#ff7300" fill="#ff7300" isAnimationActive={false} />
      </BarChart>,
    );

    const wrapperFirstHidden = render(
      <BarChart width={600} height={400} data={data}>
        <YAxis type="number" stroke="#ff7300" includeHidden />
        <Bar dataKey="pv" stroke="#ff7300" fill="#ff7300" isAnimationActive={false} hide />
        <Bar dataKey="amt" stroke="#ff7300" fill="#ff7300" isAnimationActive={false} />
      </BarChart>,
    );

    const wrapperSecondHidden = render(
      <BarChart width={600} height={400} data={data}>
        <YAxis type="number" stroke="#ff7300" includeHidden />
        <Bar dataKey="pv" stroke="#ff7300" fill="#ff7300" isAnimationActive={false} />
        <Bar dataKey="amt" stroke="#ff7300" fill="#ff7300" isAnimationActive={false} hide />
      </BarChart>,
    );

    const ticksBothShowing = wrapperBothShowing.container.querySelectorAll('text');
    const ticksFirstHidden = wrapperFirstHidden.container.querySelectorAll('text');
    const ticksSecondHidden = wrapperSecondHidden.container.querySelectorAll('text');

    expect(ticksFirstHidden.length).toBe(ticksBothShowing.length);
    expect(ticksFirstHidden[0].getAttribute('y')).toBe(ticksBothShowing[0].getAttribute('y'));
    expect(ticksFirstHidden[3].getAttribute('y')).toBe(ticksBothShowing[3].getAttribute('y'));

    expect(ticksSecondHidden.length).toBe(ticksBothShowing.length);
    expect(ticksSecondHidden[0].getAttribute('y')).toBe(ticksBothShowing[0].getAttribute('y'));
    expect(ticksSecondHidden[3].getAttribute('y')).toBe(ticksBothShowing[3].getAttribute('y'));

    const barsBothShowing = wrapperBothShowing.container.querySelectorAll('recharts-bar-rectangle > path');
    const barsFirstHidden = wrapperFirstHidden.container.querySelectorAll('recharts-bar-rectangle > path');
    const barsSecondHidden = wrapperSecondHidden.container.querySelectorAll('recharts-bar-rectangle > path');

    // spreading to match indices, as barsBothShowing will get Rectangles from the first Bar, then the second
    expect(
      [...Array.from(barsSecondHidden), ...Array.from(barsFirstHidden)].every((bar, i) => {
        return bar.getAttribute('height') === barsBothShowing[i].getAttribute('height');
      }),
    ).toBe(true);
  });

  it('should render all labels in an example', () => {
    const { getByText } = render(
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <YAxis />
        <Area type="monotone" dataKey="uv" stroke="#000" fill="url(#splitColor)" />
      </AreaChart>,
    );
    expect(getByText('0')).toBeVisible();
    expect(getByText('100')).toBeVisible();
    expect(getByText('200')).toBeVisible();
    expect(getByText('300')).toBeVisible();
    expect(getByText('400')).toBeVisible();
  });

  it('should render all labels in another example', () => {
    const { container } = render(
      <LineChart
        width={500}
        height={300}
        data={pageData}
        accessibilityLayer
        margin={{
          top: 5,
          right: 5,
          bottom: 5,
          left: 0,
        }}
      >
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        <Tooltip />
      </LineChart>,
    );
    const allLabels = container.querySelectorAll('.recharts-yAxis .recharts-text.recharts-cartesian-axis-tick-value');
    expect.soft(allLabels).toHaveLength(5);
    const allText = Array.from(allLabels).map(el => el.textContent);
    expect.soft(allText).toHaveLength(5);
    expect(allText).toContain('0');
    expect(allText).toContain('400');
    expect(allText).toContain('800');
    expect(allText).toContain('1200');
    expect(allText).toContain('1600');
  });

  describe('state integration', () => {
    it('should publish its configuration to redux store', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        const settings = useAppSelector(state => selectAxisSettings(state, 'yAxis', 'foo'));
        spy(settings);
        return null;
      };
      const { container } = render(
        <BarChart width={100} height={100}>
          <YAxis yAxisId="foo" scale="log" type="number" />
          <Customized component={Comp} />
        </BarChart>,
      );
      expect(container.querySelector('.yAxis')).toBeVisible();
      expect(spy).toHaveBeenCalledTimes(3);
      const expectedSettings: YAxisSettings = {
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
          top: 0,
          bottom: 0,
        },
      };
      expect(spy).toHaveBeenLastCalledWith(expectedSettings);
    });

    it('should remove the configuration from store when DOM element is removed', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        const foo = useAppSelector(state => selectAxisSettings(state, 'yAxis', 'foo'));
        const bar = useAppSelector(state => selectAxisSettings(state, 'yAxis', 'bar'));
        spy({ foo, bar });
        return null;
      };
      const { rerender } = render(
        <BarChart width={100} height={100}>
          <YAxis yAxisId="foo" scale="log" type="number" />
          <Customized component={Comp} />
        </BarChart>,
      );
      const expectedSettings1: YAxisSettings = {
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
          top: 0,
          bottom: 0,
        },
      };
      expect(spy).toHaveBeenLastCalledWith({
        foo: expectedSettings1,
        bar: undefined,
      });
      rerender(
        <BarChart width={100} height={100}>
          <YAxis yAxisId="foo" scale="log" type="number" />
          <YAxis yAxisId="bar" scale="utc" type="category" />
          <Customized component={Comp} />
        </BarChart>,
      );
      const expectedSettings2: {
        bar: YAxisSettings;
        foo: YAxisSettings;
      } = {
        foo: {
          id: 'foo',
          scale: 'log',
          type: 'number',
          allowDataOverflow: false,
          allowDuplicatedCategory: true,
          dataKey: undefined,
          domain: undefined,
          padding: {
            top: 0,
            bottom: 0,
          },
          allowDecimals: true,
          tickCount: 5,
        },
        bar: {
          id: 'bar',
          scale: 'utc',
          type: 'category',
          allowDataOverflow: false,
          allowDuplicatedCategory: true,
          dataKey: undefined,
          domain: undefined,
          padding: {
            top: 0,
            bottom: 0,
          },
          allowDecimals: true,
          tickCount: 5,
        },
      };
      expect(spy).toHaveBeenLastCalledWith(expectedSettings2);
      rerender(
        <BarChart width={100} height={100}>
          <YAxis yAxisId="bar" scale="utc" type="category" />
          <Customized component={Comp} />
        </BarChart>,
      );

      const expectedSettings3: YAxisSettings = {
        tickCount: 5,
        id: 'bar',
        scale: 'utc',
        type: 'category',
        allowDataOverflow: false,
        allowDuplicatedCategory: true,
        dataKey: undefined,
        domain: undefined,
        padding: {
          top: 0,
          bottom: 0,
        },
        allowDecimals: true,
      };
      expect(spy).toHaveBeenLastCalledWith({
        foo: undefined,
        bar: expectedSettings3,
      });
      rerender(
        <BarChart width={100} height={100}>
          <Customized component={Comp} />
        </BarChart>,
      );

      expect(spy).toHaveBeenLastCalledWith({
        foo: undefined,
        bar: undefined,
      });
    });
  });

  describe('in stacked BarChart', () => {
    it.each([undefined, 'none'])(
      'should render sum of stacked values with stackOffset = %s',
      (stackOffset: StackOffsetType | undefined) => {
        const stackedData = [
          {
            x: 100,
            y: 200,
          },
        ];
        const domainSpy = vi.fn();
        const Comp = (): null => {
          const domain = useAppSelector(state => selectAxisDomain(state, 'yAxis', 0));
          domainSpy(domain);
          return null;
        };
        const { container, rerender } = render(
          <BarChart width={100} height={100} data={stackedData} stackOffset={stackOffset}>
            <YAxis />
            <Bar dataKey="x" stackId="a" />
            <Customized component={<Comp />} />
          </BarChart>,
        );
        expectYAxisTicks(container, [
          {
            textContent: '0',
            x: '57',
            y: '95',
          },
          {
            textContent: '25',
            x: '57',
            y: '72.5',
          },
          {
            textContent: '50',
            x: '57',
            y: '50',
          },
          {
            textContent: '75',
            x: '57',
            y: '27.5',
          },
          {
            textContent: '100',
            x: '57',
            y: '5',
          },
        ]);
        expect(domainSpy).toHaveBeenLastCalledWith([0, 100]);
        rerender(
          <BarChart width={100} height={100} data={stackedData}>
            <YAxis />
            <Bar dataKey="x" stackId="a" />
            <Bar dataKey="y" stackId="a" />
            <Customized component={<Comp />} />
          </BarChart>,
        );
        expectYAxisTicks(container, [
          {
            textContent: '0',
            x: '57',
            y: '95',
          },
          {
            textContent: '75',
            x: '57',
            y: '72.5',
          },
          {
            textContent: '150',
            x: '57',
            y: '50',
          },
          {
            textContent: '225',
            x: '57',
            y: '27.5',
          },
          {
            textContent: '300',
            x: '57',
            y: '5',
          },
        ]);
        expect(domainSpy).toHaveBeenLastCalledWith([0, 300]);
      },
    );

    it.each([undefined, false])('should ignore domain of hidden items when includeHidden=%s', includeHidden => {
      const stackedData = [
        {
          x: 100,
          y: 200,
        },
      ];
      const domainSpy = vi.fn();
      const Comp = (): null => {
        const domain = useAppSelector(state => selectAxisDomain(state, 'yAxis', 0));
        domainSpy(domain);
        return null;
      };
      const { container } = render(
        <BarChart width={100} height={100} data={stackedData}>
          <YAxis includeHidden={includeHidden} />
          <Bar dataKey="x" stackId="a" />
          <Bar dataKey="y" stackId="a" hide />
          <Customized component={<Comp />} />
        </BarChart>,
      );
      expectYAxisTicks(container, [
        {
          textContent: '0',
          x: '57',
          y: '95',
        },
        {
          textContent: '25',
          x: '57',
          y: '72.5',
        },
        {
          textContent: '50',
          x: '57',
          y: '50',
        },
        {
          textContent: '75',
          x: '57',
          y: '27.5',
        },
        {
          textContent: '100',
          x: '57',
          y: '5',
        },
      ]);
      expect(domainSpy).toHaveBeenLastCalledWith([0, 100]);
    });

    it('should ignore domain of hidden items with includeHidden! this feels like a bug to me - why does this not work for stacked data?', () => {
      const stackedData = [
        {
          x: 10,
          y: 200,
        },
      ];
      const domainSpy = vi.fn();
      const Comp = (): null => {
        const domain = useAppSelector(state => selectAxisDomain(state, 'yAxis', 0));
        domainSpy(domain);
        return null;
      };
      const { container, rerender } = render(
        <BarChart width={100} height={100} data={stackedData}>
          <YAxis includeHidden />
          <Bar dataKey="x" stackId="a" />
          <Bar dataKey="y" stackId="a" hide />
          <Customized component={<Comp />} />
        </BarChart>,
      );
      // includeHidden does not work with stacked data, why?
      expectYAxisTicks(container, [
        {
          textContent: '0',
          x: '57',
          y: '95',
        },
        {
          textContent: '3',
          x: '57',
          y: '72.5',
        },
        {
          textContent: '6',
          x: '57',
          y: '50',
        },
        {
          textContent: '9',
          x: '57',
          y: '27.5',
        },
        {
          textContent: '12',
          x: '57',
          y: '5',
        },
      ]);
      expect(domainSpy).toHaveBeenLastCalledWith([0, 200]);

      // the same data, when not stacked, are included when includeHidden is true.
      rerender(
        <BarChart width={100} height={100} data={stackedData}>
          <YAxis includeHidden />
          <Bar dataKey="x" />
          <Bar dataKey="y" hide />
          <Customized component={<Comp />} />
        </BarChart>,
      );

      expectYAxisTicks(container, [
        {
          textContent: '0',
          x: '57',
          y: '95',
        },
        {
          textContent: '50',
          x: '57',
          y: '72.5',
        },
        {
          textContent: '100',
          x: '57',
          y: '50',
        },
        {
          textContent: '150',
          x: '57',
          y: '27.5',
        },
        {
          textContent: '200',
          x: '57',
          y: '5',
        },
      ]);
      expect(domainSpy).toHaveBeenLastCalledWith([0, 200]);
    });

    it('should render positive and negative ticks with stackOffset = "sign"', () => {
      const stackedSignedData = [
        {
          x: 100,
          y: -2000,
        },
      ];
      const domainSpy = vi.fn();
      const Comp = (): null => {
        const domain = useAppSelector(state => selectAxisDomain(state, 'yAxis', 0));
        domainSpy(domain);
        return null;
      };
      const { container } = render(
        <BarChart width={100} height={100} data={stackedSignedData} stackOffset="sign">
          <YAxis />
          <Bar dataKey="x" stackId="a" />
          <Bar dataKey="y" stackId="a" />
          <Customized component={<Comp />} />
        </BarChart>,
      );
      expectYAxisTicks(container, [
        {
          textContent: '-2100',
          x: '57',
          y: '95',
        },
        {
          textContent: '-1400',
          x: '57',
          y: '72.5',
        },
        {
          textContent: '-700',
          x: '57',
          y: '50',
        },
        {
          textContent: '0',
          x: '57',
          y: '27.5',
        },
        {
          textContent: '700',
          x: '57',
          y: '5',
        },
      ]);
      expect(domainSpy).toHaveBeenLastCalledWith([-2000, 100]);
    });

    it('should render ticks between 0 and 1 with stackOffset = "expand"', () => {
      const stackedData = [
        {
          x: 100,
          y: 200,
        },
      ];
      const domainSpy = vi.fn();
      const Comp = (): null => {
        const domain = useAppSelector(state => selectAxisDomain(state, 'yAxis', 0));
        domainSpy(domain);
        return null;
      };
      const { container } = render(
        <BarChart width={100} height={100} data={stackedData} stackOffset="expand">
          <YAxis />
          <Bar dataKey="x" stackId="a" />
          <Bar dataKey="y" stackId="a" />
          <Customized component={<Comp />} />
        </BarChart>,
      );
      expectYAxisTicks(container, [
        {
          textContent: '0',
          x: '57',
          y: '95',
        },
        {
          textContent: '0.25',
          x: '57',
          y: '72.5',
        },
        {
          textContent: '0.5',
          x: '57',
          y: '50',
        },
        {
          textContent: '0.75',
          x: '57',
          y: '27.5',
        },
        {
          textContent: '1',
          x: '57',
          y: '5',
        },
      ]);
      expect(domainSpy).toHaveBeenLastCalledWith([0, 1]);
    });

    it('should render ticks with stackOffset = "wiggle"', () => {
      const stackedData = [
        {
          x: 100,
          y: 200,
        },
      ];
      const domainSpy = vi.fn();
      const Comp = (): null => {
        const domain = useAppSelector(state => selectAxisDomain(state, 'yAxis', 0));
        domainSpy(domain);
        return null;
      };
      const { container } = render(
        <BarChart width={100} height={100} data={stackedData} stackOffset="wiggle">
          <YAxis />
          <Bar dataKey="x" stackId="a" />
          <Bar dataKey="y" stackId="a" />
          <Customized component={<Comp />} />
        </BarChart>,
      );
      expectYAxisTicks(container, [
        {
          textContent: '0',
          x: '57',
          y: '95',
        },
        {
          textContent: '75',
          x: '57',
          y: '72.5',
        },
        {
          textContent: '150',
          x: '57',
          y: '50',
        },
        {
          textContent: '225',
          x: '57',
          y: '27.5',
        },
        {
          textContent: '300',
          x: '57',
          y: '5',
        },
      ]);
      expect(domainSpy).toHaveBeenLastCalledWith([0, 300]);
    });

    it('should render ticks with stackOffset = "silhouette"', () => {
      const stackedData = [
        {
          x: 100,
          y: 200,
        },
      ];
      const domainSpy = vi.fn();
      const Comp = (): null => {
        const domain = useAppSelector(state => selectAxisDomain(state, 'yAxis', 0));
        domainSpy(domain);
        return null;
      };
      const { container } = render(
        <BarChart width={100} height={100} data={stackedData} stackOffset="silhouette">
          <YAxis />
          <Bar dataKey="x" stackId="a" />
          <Bar dataKey="y" stackId="a" />
          <Customized component={<Comp />} />
        </BarChart>,
      );
      expectYAxisTicks(container, [
        {
          textContent: '-150',
          x: '57',
          y: '95',
        },
        {
          textContent: '-75',
          x: '57',
          y: '72.5',
        },
        {
          textContent: '0',
          x: '57',
          y: '50',
        },
        {
          textContent: '75',
          x: '57',
          y: '27.5',
        },
        {
          textContent: '150',
          x: '57',
          y: '5',
        },
      ]);
      expect(domainSpy).toHaveBeenLastCalledWith([-150, 150]);
    });

    it('should ignore negative values with stackOffset = "positive"', () => {
      const stackedData = [
        {
          x: 100,
          y: -200,
        },
      ];
      const domainSpy = vi.fn();
      const Comp = (): null => {
        const domain = useAppSelector(state => selectAxisDomain(state, 'yAxis', 0));
        domainSpy(domain);
        return null;
      };
      const { container } = render(
        <BarChart width={100} height={100} data={stackedData} stackOffset="positive">
          <YAxis />
          <Bar dataKey="x" stackId="a" />
          <Bar dataKey="y" stackId="a" />
          <Customized component={<Comp />} />
        </BarChart>,
      );
      expectYAxisTicks(container, [
        {
          textContent: '0',
          x: '57',
          y: '95',
        },
        {
          textContent: '25',
          x: '57',
          y: '72.5',
        },
        {
          textContent: '50',
          x: '57',
          y: '50',
        },
        {
          textContent: '75',
          x: '57',
          y: '27.5',
        },
        {
          textContent: '100',
          x: '57',
          y: '5',
        },
      ]);
      expect(domainSpy).toHaveBeenLastCalledWith([0, 100]);
    });
  });
});
