import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { describe, test, it, expect, vi } from 'vitest';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  YAxis,
  ReferenceDot,
  ReferenceArea,
  ReferenceLine,
  XAxis,
  ComposedChart,
  YAxisProps,
} from '../../../src';
import { AxisDomain, CategoricalDomain, NumberDomain, StackOffsetType } from '../../../src/util/types';
import { pageData, rangeData } from '../../../storybook/stories/data';
import { useAppSelector } from '../../../src/state/hooks';
import { implicitYAxis, selectAxisDomain, selectAxisSettings } from '../../../src/state/selectors/axisSelectors';
import { YAxisSettings } from '../../../src/state/cartesianAxisSlice';
import { expectYAxisTicks } from '../../helper/expectAxisTicks';
import { IfOverflow } from '../../../src/util/IfOverflow';
import { useIsPanorama } from '../../../src/context/PanoramaContext';
import { mockGetBoundingClientRect } from '../../helper/mockGetBoundingClientRect';
import { getCalculatedYAxisWidth } from '../../../src/util/YAxisUtils';

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

  it('should render ticks from Area with range', () => {
    const domainSpy = vi.fn();
    const Comp = (): null => {
      const isPanorama = useIsPanorama();
      const domain = useAppSelector(state => selectAxisDomain(state, 'yAxis', 0, isPanorama));
      domainSpy(domain);
      return null;
    };
    const { container } = render(
      <AreaChart
        width={500}
        height={400}
        data={rangeData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <XAxis dataKey="day" />
        <YAxis />
        <Area dataKey="temperature" stroke="#d82428" fill="#8884d8" />
        <Tooltip defaultIndex={4} active />
        <Comp />
      </AreaChart>,
    );

    expectYAxisTicks(container, [
      {
        textContent: '-6',
        x: '52',
        y: '370',
      },
      {
        textContent: '0',
        x: '52',
        y: '280',
      },
      {
        textContent: '6',
        x: '52',
        y: '190',
      },
      {
        textContent: '12',
        x: '52',
        y: '100',
      },
      {
        textContent: '18',
        x: '52',
        y: '10',
      },
    ]);
    expect(domainSpy).toHaveBeenLastCalledWith([-3, 16]);
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

  it('should render multiple axes', () => {
    const { container } = render(
      <AreaChart width={600} height={400} data={data}>
        <YAxis yAxisId="a" />
        <Area dataKey="uv" yAxisId="a" />
        <YAxis yAxisId="b" />
        <Area dataKey="pv" yAxisId="b" />
        <YAxis yAxisId="c" orientation="right" />
        <Area dataKey="amt" yAxisId="c" />
        <YAxis yAxisId="d" type="category" orientation="right" />
        <Area dataKey="name" yAxisId="d" />
      </AreaChart>,
    );

    expectYAxisTicks(container, [
      {
        textContent: '0',
        x: '117',
        y: '395',
      },
      {
        textContent: '100',
        x: '117',
        y: '297.5',
      },
      {
        textContent: '200',
        x: '117',
        y: '200',
      },
      {
        textContent: '300',
        x: '117',
        y: '102.5',
      },
      {
        textContent: '400',
        x: '117',
        y: '5',
      },
      {
        textContent: '0',
        x: '57',
        y: '395',
      },
      {
        textContent: '2500',
        x: '57',
        y: '297.5',
      },
      {
        textContent: '5000',
        x: '57',
        y: '200',
      },
      {
        textContent: '7500',
        x: '57',
        y: '102.5',
      },
      {
        textContent: '10000',
        x: '57',
        y: '5',
      },
      {
        textContent: '0',
        x: '483',
        y: '395',
      },
      {
        textContent: '600',
        x: '483',
        y: '297.5',
      },
      {
        textContent: '1200',
        x: '483',
        y: '200',
      },
      {
        textContent: '1800',
        x: '483',
        y: '102.5',
      },
      {
        textContent: '2400',
        x: '483',
        y: '5',
      },
      {
        textContent: 'Page A',
        x: '543',
        y: '395',
      },
      {
        textContent: 'Page B',
        x: '543',
        y: '297.5',
      },
      {
        textContent: 'Page C',
        x: '543',
        y: '200',
      },
      {
        textContent: 'Page D',
        x: '543',
        y: '102.5',
      },
      {
        textContent: 'Page E',
        x: '543',
        y: '5',
      },
    ]);
  });

  it('should render multiple axes with some ticks mirrored', () => {
    const { container } = render(
      <AreaChart width={600} height={400} data={data}>
        <YAxis yAxisId="a" />
        <Area dataKey="uv" yAxisId="a" />
        <YAxis mirror yAxisId="b" />
        <Area dataKey="pv" yAxisId="b" />
        <YAxis yAxisId="c" orientation="right" />
        <Area dataKey="amt" yAxisId="c" />
        <YAxis mirror yAxisId="d" type="category" orientation="right" />
        <Area dataKey="name" yAxisId="d" />
      </AreaChart>,
    );

    expectYAxisTicks(container, [
      {
        textContent: '0',
        x: '57',
        y: '395',
      },
      {
        textContent: '100',
        x: '57',
        y: '297.5',
      },
      {
        textContent: '200',
        x: '57',
        y: '200',
      },
      {
        textContent: '300',
        x: '57',
        y: '102.5',
      },
      {
        textContent: '400',
        x: '57',
        y: '5',
      },
      {
        textContent: '0',
        x: '73',
        y: '395',
      },
      {
        textContent: '2500',
        x: '73',
        y: '297.5',
      },
      {
        textContent: '5000',
        x: '73',
        y: '200',
      },
      {
        textContent: '7500',
        x: '73',
        y: '102.5',
      },
      {
        textContent: '10000',
        x: '73',
        y: '5',
      },
      {
        textContent: '0',
        x: '543',
        y: '395',
      },
      {
        textContent: '600',
        x: '543',
        y: '297.5',
      },
      {
        textContent: '1200',
        x: '543',
        y: '200',
      },
      {
        textContent: '1800',
        x: '543',
        y: '102.5',
      },
      {
        textContent: '2400',
        x: '543',
        y: '5',
      },
      {
        textContent: 'Page A',
        x: '527',
        y: '395',
      },
      {
        textContent: 'Page B',
        x: '527',
        y: '297.5',
      },
      {
        textContent: 'Page C',
        x: '527',
        y: '200',
      },
      {
        textContent: 'Page D',
        x: '527',
        y: '102.5',
      },
      {
        textContent: 'Page E',
        x: '527',
        y: '5',
      },
    ]);
  });

  it('should not leave space for hidden axes', () => {
    const { container } = render(
      <AreaChart width={600} height={400} data={data}>
        <YAxis yAxisId="a" />
        <Area dataKey="uv" yAxisId="a" />
        <YAxis yAxisId="b" hide />
        <Area dataKey="pv" yAxisId="b" />
        <YAxis yAxisId="c" orientation="right" />
        <Area dataKey="amt" yAxisId="c" />
        <YAxis yAxisId="d" type="category" orientation="right" hide />
        <Area dataKey="name" yAxisId="d" />
      </AreaChart>,
    );
    expectYAxisTicks(container, [
      {
        textContent: '0',
        x: '57',
        y: '395',
      },
      {
        textContent: '100',
        x: '57',
        y: '297.5',
      },
      {
        textContent: '200',
        x: '57',
        y: '200',
      },
      {
        textContent: '300',
        x: '57',
        y: '102.5',
      },
      {
        textContent: '400',
        x: '57',
        y: '5',
      },
      {
        textContent: '0',
        x: '543',
        y: '395',
      },
      {
        textContent: '600',
        x: '543',
        y: '297.5',
      },
      {
        textContent: '1200',
        x: '543',
        y: '200',
      },
      {
        textContent: '1800',
        x: '543',
        y: '102.5',
      },
      {
        textContent: '2400',
        x: '543',
        y: '5',
      },
    ]);
  });

  it('Renders evenly distributed ticks when domain={[0, 1000]} and dataKey is "noExist", and allowDataOverflow', () => {
    const domain = [0, 1000] as const;
    const { container } = render(
      <AreaChart width={600} height={400} data={data}>
        <YAxis stroke="#ff7300" domain={domain} allowDataOverflow />
        <Area dataKey="noExist" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );
    expectYAxisTicks(container, [
      {
        textContent: '0',
        x: '57',
        y: '395',
      },
      {
        textContent: '250',
        x: '57',
        y: '297.5',
      },
      {
        textContent: '500',
        x: '57',
        y: '200',
      },
      {
        textContent: '750',
        x: '57',
        y: '102.5',
      },
      {
        textContent: '1000',
        x: '57',
        y: '5',
      },
    ]);
  });

  it('Renders no ticks when domain={[0, 1000]} and dataKey is "noExist", and allowDataOverflow=false', () => {
    const { container } = render(
      <AreaChart width={600} height={400} data={data}>
        <YAxis stroke="#ff7300" domain={[0, 1000]} allowDataOverflow={false} />
        <Area dataKey="noExist" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );
    expectYAxisTicks(container, []);
  });

  it('Renders no ticks when dataKey is "noExist"', () => {
    const { container } = render(
      <AreaChart width={600} height={400} data={data}>
        <YAxis />
        <Area dataKey="noExist" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );
    expectYAxisTicks(container, []);
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
    const { container } = render(
      <AreaChart width={600} height={400} data={data}>
        <YAxis type="number" stroke="#ff7300" ticks={[0, 400, 800, 1200]} />
        <Area dataKey="uv" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );
    expectYAxisTicks(container, [
      {
        textContent: '0',
        x: '57',
        y: '395',
      },
      {
        textContent: '400',
        x: '57',
        y: '265.00000000000006',
      },
      {
        textContent: '800',
        x: '57',
        y: '135.00000000000003',
      },
      {
        textContent: '1200',
        x: '57',
        y: '5',
      },
    ]);
  });

  it('Should pass data, index, and event to the onClick event handler', () => {
    const onClickFn = vi.fn();
    const { container } = render(
      <AreaChart width={600} height={400} data={data}>
        <YAxis type="number" stroke="#ff7300" ticks={[0, 400, 800, 1200]} onClick={onClickFn} />
        <Area dataKey="uv" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );
    const ticksGroup = container.getElementsByClassName('recharts-cartesian-axis-tick');
    expect(ticksGroup).toHaveLength(4);

    const firstTick = ticksGroup[0];

    const eventData = {
      coordinate: 395,
      isShow: true,
      offset: 0,
      tickCoord: 395,
      value: 0,
      index: 0,
    };
    const eventIndex = 0;
    const eventExpect = expect.objectContaining({
      type: 'click',
      pageX: 0,
      pageY: 0,
      target: expect.any(Object),
    });

    // click
    fireEvent.click(firstTick);
    expect(onClickFn).toHaveBeenCalledWith(eventData, eventIndex, eventExpect);

    // onMouseEnter/onMouseLeave cause vitest to exit unexpectedly, why?
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
    const { container } = render(
      <AreaChart width={600} height={400} data={data}>
        <YAxis reversed type="number" stroke="#ff7300" />
        <Area dataKey="uv" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );
    expectYAxisTicks(container, [
      {
        textContent: '0',
        x: '57',
        y: '5',
      },
      {
        textContent: '100',
        x: '57',
        y: '102.5',
      },
      {
        textContent: '200',
        x: '57',
        y: '200',
      },
      {
        textContent: '300',
        x: '57',
        y: '297.5',
      },
      {
        textContent: '400',
        x: '57',
        y: '395',
      },
    ]);
  });

  it('Should skip rendering ticks with empty text', () => {
    const areaData = [
      { day: '05-01', weather: 'sunny' },
      { day: '05-02' },
      { day: '05-03', weather: 'cloudy' },
      { day: '05-04', weather: 'rain' },
    ];
    const { container } = render(
      <AreaChart width={400} height={400} data={areaData}>
        <YAxis type="category" />
        <Area type="stepAfter" dataKey="weather" stroke="#0088FE" />
      </AreaChart>,
    );
    expectYAxisTicks(container, [
      {
        textContent: 'sunny',
        x: '57',
        y: '395',
      },
      {
        textContent: 'cloudy',
        x: '57',
        y: '200',
      },
      {
        textContent: 'rain',
        x: '57',
        y: '5',
      },
    ]);
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

    expectYAxisTicks(container, []);
  });

  it('should not render anything when attempting to render outside of Chart', () => {
    const { container } = render(<YAxis dataKey="x" name="stature" unit="cm" />);
    expect(container.querySelectorAll('.recharts-cartesian-axis-line')).toHaveLength(0);
  });

  describe('includeHidden', () => {
    it.each([undefined, true, false])('should show ticks for visibleData when includeHidden=%s', includeHidden => {
      const domainSpy = vi.fn();
      const Comp = (): null => {
        const isPanorama = useIsPanorama();
        const domain = useAppSelector(state => selectAxisDomain(state, 'yAxis', 0, isPanorama));
        domainSpy(domain);
        return null;
      };
      const { container } = render(
        <BarChart width={600} height={400} data={data}>
          <YAxis includeHidden={includeHidden} />
          <Bar dataKey="pv" />
          <Bar dataKey="uv" />
          <Comp />
        </BarChart>,
      );
      expectYAxisTicks(container, [
        {
          textContent: '0',
          x: '57',
          y: '395',
        },
        {
          textContent: '2500',
          x: '57',
          y: '297.5',
        },
        {
          textContent: '5000',
          x: '57',
          y: '200',
        },
        {
          textContent: '7500',
          x: '57',
          y: '102.5',
        },
        {
          textContent: '10000',
          x: '57',
          y: '5',
        },
      ]);
      expect(domainSpy).toHaveBeenLastCalledWith([0, 9800]);
    });

    it.each([false, undefined])('should exclude hidden items domain when includeHidden=%s', includeHidden => {
      const domainSpy = vi.fn();
      const Comp = (): null => {
        const isPanorama = useIsPanorama();
        const domain = useAppSelector(state => selectAxisDomain(state, 'yAxis', 0, isPanorama));
        domainSpy(domain);
        return null;
      };
      const { container } = render(
        <BarChart width={600} height={400} data={data}>
          <YAxis includeHidden={includeHidden} />
          <Bar dataKey="pv" hide />
          <Bar dataKey="uv" />
          <Comp />
        </BarChart>,
      );
      expectYAxisTicks(container, [
        {
          textContent: '0',
          x: '57',
          y: '395',
        },
        {
          textContent: '100',
          x: '57',
          y: '297.5',
        },
        {
          textContent: '200',
          x: '57',
          y: '200',
        },
        {
          textContent: '300',
          x: '57',
          y: '102.5',
        },
        {
          textContent: '400',
          x: '57',
          y: '5',
        },
      ]);
      expect(domainSpy).toHaveBeenLastCalledWith([0, 400]);
    });

    it('should include hidden data domain when includeHidden=true', () => {
      const domainSpy = vi.fn();
      const Comp = (): null => {
        const isPanorama = useIsPanorama();
        const domain = useAppSelector(state => selectAxisDomain(state, 'yAxis', 0, isPanorama));
        domainSpy(domain);
        return null;
      };
      const { container } = render(
        <BarChart width={600} height={400} data={data}>
          <YAxis includeHidden />
          <Bar dataKey="pv" hide />
          <Bar dataKey="uv" />
          <Comp />
        </BarChart>,
      );
      expectYAxisTicks(container, [
        {
          textContent: '0',
          x: '57',
          y: '395',
        },
        {
          textContent: '2500',
          x: '57',
          y: '297.5',
        },
        {
          textContent: '5000',
          x: '57',
          y: '200',
        },
        {
          textContent: '7500',
          x: '57',
          y: '102.5',
        },
        {
          textContent: '10000',
          x: '57',
          y: '5',
        },
      ]);
      expect(domainSpy).toHaveBeenLastCalledWith([0, 9800]);
    });
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
      const fakeTickFormatter = () => '';
      const { container } = render(
        <BarChart width={100} height={100}>
          <YAxis
            yAxisId="foo"
            scale="log"
            type="number"
            includeHidden
            reversed
            ticks={[1, 2, 3]}
            width={32}
            orientation="right"
            mirror
            name="axis name"
            unit="axis unit"
            interval={9}
            angle={17}
            tick={false}
            minTickGap={8}
            tickFormatter={fakeTickFormatter}
          />
          <Comp />
        </BarChart>,
      );
      expect(container.querySelector('.yAxis')).toBeVisible();
      expect(spy).toHaveBeenCalledTimes(2);
      const expectedSettings: YAxisSettings = {
        angle: 17,
        minTickGap: 8,
        tick: false,
        tickFormatter: fakeTickFormatter,
        interval: 9,
        name: 'axis name',
        unit: 'axis unit',
        hide: false,
        orientation: 'right',
        mirror: true,
        width: 32,
        ticks: [1, 2, 3],
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
          top: 0,
          bottom: 0,
        },
        reversed: true,
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
          <Comp />
        </BarChart>,
      );
      const expectedSettings1: YAxisSettings = {
        angle: 0,
        minTickGap: 5,
        tick: true,
        tickFormatter: undefined,
        interval: 'preserveEnd',
        name: undefined,
        unit: undefined,
        orientation: 'left',
        mirror: false,
        width: 60,
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
          top: 0,
          bottom: 0,
        },
        reversed: false,
        hide: false,
      };
      expect(spy).toHaveBeenLastCalledWith({
        foo: expectedSettings1,
        bar: implicitYAxis,
      });
      rerender(
        <BarChart width={100} height={100}>
          <YAxis yAxisId="foo" scale="log" type="number" />
          <YAxis yAxisId="bar" scale="utc" type="category" />
          <Comp />
        </BarChart>,
      );
      const expectedSettings2: {
        bar: YAxisSettings;
        foo: YAxisSettings;
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
          orientation: 'left',
          mirror: false,
          width: 60,
          includeHidden: false,
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
          reversed: false,
          ticks: undefined,
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
          orientation: 'left',
          mirror: false,
          width: 60,
          includeHidden: false,
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
          reversed: false,
          ticks: undefined,
        },
      };
      expect(spy).toHaveBeenLastCalledWith(expectedSettings2);
      rerender(
        <BarChart width={100} height={100}>
          <YAxis yAxisId="bar" scale="utc" type="category" />
          <Comp />
        </BarChart>,
      );

      const expectedSettings3: YAxisSettings = {
        angle: 0,
        minTickGap: 5,
        tick: true,
        tickFormatter: undefined,
        interval: 'preserveEnd',
        name: undefined,
        unit: undefined,
        hide: false,
        mirror: false,
        orientation: 'left',
        width: 60,
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
          top: 0,
          bottom: 0,
        },
        allowDecimals: true,
        reversed: false,
      };
      expect(spy).toHaveBeenLastCalledWith({
        foo: implicitYAxis,
        bar: expectedSettings3,
      });
      rerender(
        <BarChart width={100} height={100}>
          <Comp />
        </BarChart>,
      );

      expect(spy).toHaveBeenLastCalledWith({
        foo: implicitYAxis,
        bar: implicitYAxis,
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
          const isPanorama = useIsPanorama();
          const domain = useAppSelector(state => selectAxisDomain(state, 'yAxis', 0, isPanorama));
          domainSpy(domain);
          return null;
        };
        const { container, rerender } = render(
          <BarChart width={100} height={100} data={stackedData} stackOffset={stackOffset}>
            <YAxis />
            <Bar dataKey="x" stackId="a" />
            <Comp />
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
            <Comp />
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
        const isPanorama = useIsPanorama();
        const domain = useAppSelector(state => selectAxisDomain(state, 'yAxis', 0, isPanorama));
        domainSpy(domain);
        return null;
      };
      const { container } = render(
        <BarChart width={100} height={100} data={stackedData}>
          <YAxis includeHidden={includeHidden} />
          <Bar dataKey="x" stackId="a" />
          <Bar dataKey="y" stackId="a" hide />
          <Comp />
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

    it('should include domain of hidden items when includeHidden=true', () => {
      const stackedData = [
        {
          x: 10,
          y: 200,
        },
      ];
      const domainSpy = vi.fn();
      const Comp = (): null => {
        const isPanorama = useIsPanorama();
        const domain = useAppSelector(state => selectAxisDomain(state, 'yAxis', 0, isPanorama));
        domainSpy(domain);
        return null;
      };
      const { container, rerender } = render(
        <BarChart width={100} height={100} data={stackedData}>
          <YAxis includeHidden />
          <Bar dataKey="x" stackId="a" />
          <Bar dataKey="y" stackId="a" hide />
          <Comp />
        </BarChart>,
      );
      expectYAxisTicks(container, [
        {
          textContent: '0',
          x: '57',
          y: '95',
        },
        {
          textContent: '55',
          x: '57',
          y: '72.5',
        },
        {
          textContent: '110',
          x: '57',
          y: '50',
        },
        {
          textContent: '165',
          x: '57',
          y: '27.5',
        },
        {
          textContent: '220',
          x: '57',
          y: '5',
        },
      ]);
      expect(domainSpy).toHaveBeenLastCalledWith([0, 210]);

      // the same data, not stacked
      rerender(
        <BarChart width={100} height={100} data={stackedData}>
          <YAxis includeHidden />
          <Bar dataKey="x" />
          <Bar dataKey="y" hide />
          <Comp />
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
        const isPanorama = useIsPanorama();
        const domain = useAppSelector(state => selectAxisDomain(state, 'yAxis', 0, isPanorama));
        domainSpy(domain);
        return null;
      };
      const { container } = render(
        <BarChart width={100} height={100} data={stackedSignedData} stackOffset="sign">
          <YAxis />
          <Bar dataKey="x" stackId="a" />
          <Bar dataKey="y" stackId="a" />
          <Comp />
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
      // -2000, 100 is the correct domain - the tick generator decides to extend it beyond, to 700. But the domain ends at 100.
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
        const isPanorama = useIsPanorama();
        const domain = useAppSelector(state => selectAxisDomain(state, 'yAxis', 0, isPanorama));
        domainSpy(domain);
        return null;
      };
      const { container } = render(
        <BarChart width={100} height={100} data={stackedData} stackOffset="expand">
          <YAxis />
          <Bar dataKey="x" stackId="a" />
          <Bar dataKey="y" stackId="a" />
          <Comp />
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
        const isPanorama = useIsPanorama();
        const domain = useAppSelector(state => selectAxisDomain(state, 'yAxis', 0, isPanorama));
        domainSpy(domain);
        return null;
      };
      const { container } = render(
        <BarChart width={100} height={100} data={stackedData} stackOffset="wiggle">
          <YAxis />
          <Bar dataKey="x" stackId="a" />
          <Bar dataKey="y" stackId="a" />
          <Comp />
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
        const isPanorama = useIsPanorama();
        const domain = useAppSelector(state => selectAxisDomain(state, 'yAxis', 0, isPanorama));
        domainSpy(domain);
        return null;
      };
      const { container } = render(
        <BarChart width={100} height={100} data={stackedData} stackOffset="silhouette">
          <YAxis />
          <Bar dataKey="x" stackId="a" />
          <Bar dataKey="y" stackId="a" />
          <Comp />
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
        const isPanorama = useIsPanorama();
        const domain = useAppSelector(state => selectAxisDomain(state, 'yAxis', 0, isPanorama));
        domainSpy(domain);
        return null;
      };
      const { container } = render(
        <BarChart width={100} height={100} data={stackedData} stackOffset="positive">
          <YAxis />
          <Bar dataKey="x" stackId="a" />
          <Bar dataKey="y" stackId="a" />
          <Comp />
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

  describe('with reference elements', () => {
    const casesThatDoNotExtendDomain: ReadonlyArray<IfOverflow | undefined> = [
      'discard',
      'hidden',
      'visible',
      undefined,
    ];

    it('should render usual domain when without reference elements', () => {
      const domainSpy = vi.fn();
      const Comp = (): null => {
        const isPanorama = useIsPanorama();
        const domain = useAppSelector(state => selectAxisDomain(state, 'yAxis', 0, isPanorama));
        domainSpy(domain);
        return null;
      };
      const { container } = render(
        <LineChart width={100} height={100} data={pageData}>
          <YAxis />
          <Line dataKey="pv" />
          <Comp />
        </LineChart>,
      );
      expectYAxisTicks(container, [
        {
          textContent: '0',
          x: '57',
          y: '95',
        },
        {
          textContent: '300',
          x: '57',
          y: '72.5',
        },
        {
          textContent: '600',
          x: '57',
          y: '50',
        },
        {
          textContent: '900',
          x: '57',
          y: '27.5',
        },
        {
          textContent: '1200',
          x: '57',
          y: '5',
        },
      ]);
      expect(domainSpy).toHaveBeenLastCalledWith([0, 1200]);
    });

    describe('ReferenceDot', () => {
      const ChartWithReferenceDot = (props: {
        ifOverflow: IfOverflow | undefined;
        domainSpy: (domain: NumberDomain | CategoricalDomain) => void;
      }) => {
        const Comp = (): null => {
          const isPanorama = useIsPanorama();
          const domain = useAppSelector(state => selectAxisDomain(state, 'yAxis', 0, isPanorama));
          props.domainSpy(domain);
          return null;
        };
        return (
          <LineChart width={100} height={100} data={pageData}>
            <YAxis />
            <Line dataKey="pv" />
            {/* the r prop is ignored from domain extension - perhaps it should expand the domain too? */}
            <ReferenceDot x={9999} y={2000} r={500} ifOverflow={props.ifOverflow} />
            <Comp />
          </LineChart>
        );
      };

      it.each(casesThatDoNotExtendDomain)('should not extend domain when ifOverflow=%s', ifOverflow => {
        const domainSpy = vi.fn();
        const { container } = render(<ChartWithReferenceDot ifOverflow={ifOverflow} domainSpy={domainSpy} />);
        expectYAxisTicks(container, [
          {
            textContent: '0',
            x: '57',
            y: '95',
          },
          {
            textContent: '300',
            x: '57',
            y: '72.5',
          },
          {
            textContent: '600',
            x: '57',
            y: '50',
          },
          {
            textContent: '900',
            x: '57',
            y: '27.5',
          },
          {
            textContent: '1200',
            x: '57',
            y: '5',
          },
        ]);
        expect(domainSpy).toHaveBeenLastCalledWith([0, 1200]);
      });

      it('should extend domain when ifOverflow=extendDomain', () => {
        const domainSpy = vi.fn();
        const { container } = render(<ChartWithReferenceDot ifOverflow="extendDomain" domainSpy={domainSpy} />);
        expectYAxisTicks(container, [
          {
            textContent: '0',
            x: '57',
            y: '95',
          },
          {
            textContent: '500',
            x: '57',
            y: '72.5',
          },
          {
            textContent: '1000',
            x: '57',
            y: '50',
          },
          {
            textContent: '1500',
            x: '57',
            y: '27.5',
          },
          {
            textContent: '2000',
            x: '57',
            y: '5',
          },
        ]);
        expect(domainSpy).toHaveBeenLastCalledWith([0, 2000]);
      });
    });

    describe('ReferenceArea', () => {
      const ChartWithReferenceArea = (props: {
        ifOverflow: IfOverflow | undefined;
        domainSpy: (domain: NumberDomain | CategoricalDomain) => void;
      }) => {
        const Comp = (): null => {
          const isPanorama = useIsPanorama();
          const domain = useAppSelector(state => selectAxisDomain(state, 'yAxis', 0, isPanorama));
          props.domainSpy(domain);
          return null;
        };
        return (
          <LineChart width={100} height={100} data={pageData}>
            <YAxis />
            <Line dataKey="pv" />
            <ReferenceArea x1={-10} x2={3000} y1={-100} y2={5000} ifOverflow={props.ifOverflow} />
            <Comp />
          </LineChart>
        );
      };

      it.each(casesThatDoNotExtendDomain)('should not extend domain when ifOverflow=%s', ifOverflow => {
        const domainSpy = vi.fn();
        const { container } = render(<ChartWithReferenceArea ifOverflow={ifOverflow} domainSpy={domainSpy} />);
        expectYAxisTicks(container, [
          {
            textContent: '0',
            x: '57',
            y: '95',
          },
          {
            textContent: '300',
            x: '57',
            y: '72.5',
          },
          {
            textContent: '600',
            x: '57',
            y: '50',
          },
          {
            textContent: '900',
            x: '57',
            y: '27.5',
          },
          {
            textContent: '1200',
            x: '57',
            y: '5',
          },
        ]);
        expect(domainSpy).toHaveBeenLastCalledWith([0, 1200]);
      });

      it('should extend domain when ifOverflow=extendDomain', () => {
        const domainSpy = vi.fn();
        const { container } = render(<ChartWithReferenceArea ifOverflow="extendDomain" domainSpy={domainSpy} />);
        expectYAxisTicks(container, [
          {
            textContent: '-2000',
            x: '57',
            y: '95',
          },
          {
            textContent: '0',
            x: '57',
            y: '72.5',
          },
          {
            textContent: '2000',
            x: '57',
            y: '50',
          },
          {
            textContent: '4000',
            x: '57',
            y: '27.5',
          },
          {
            textContent: '6000',
            x: '57',
            y: '5',
          },
        ]);
        expect(domainSpy).toHaveBeenLastCalledWith([-100, 5000]);
      });
    });

    describe('ReferenceArea without any graphical elements', () => {
      it('should render ticks following the domain of the area', () => {
        const axisDomainSpy = vi.fn();
        const Comp = (): null => {
          const isPanorama = useIsPanorama();
          const domain = useAppSelector(state => selectAxisDomain(state, 'yAxis', 0, isPanorama));
          axisDomainSpy(domain);
          return null;
        };
        const { container } = render(
          <ComposedChart
            width={500}
            height={500}
            data={pageData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis type="number" />
            <ReferenceArea
              x1="Page B"
              x2="Page E"
              y1={1890}
              y2={-1000}
              stroke="red"
              strokeOpacity={0.3}
              ifOverflow="extendDomain"
            />
            <Comp />
          </ComposedChart>,
        );
        expect(axisDomainSpy).toHaveBeenLastCalledWith([-1000, 1890]);
        expectYAxisTicks(container, [
          {
            textContent: '-1900',
            x: '72',
            y: '465',
          },
          {
            textContent: '-950',
            x: '72',
            y: '350',
          },
          {
            textContent: '0',
            x: '72',
            y: '235',
          },
          {
            textContent: '950',
            x: '72',
            y: '120',
          },
          {
            textContent: '1900',
            x: '72',
            y: '5',
          },
        ]);
      });
    });

    describe('ReferenceLine with one dimension', () => {
      const ChartWithReferenceLine = (props: {
        ifOverflow: IfOverflow | undefined;
        domainSpy: (domain: NumberDomain | CategoricalDomain) => void;
      }) => {
        const Comp = (): null => {
          const isPanorama = useIsPanorama();
          const domain = useAppSelector(state => selectAxisDomain(state, 'yAxis', 0, isPanorama));
          props.domainSpy(domain);
          return null;
        };
        return (
          <LineChart width={100} height={100} data={pageData}>
            <YAxis />
            <Line dataKey="pv" />
            <ReferenceLine y={2000} ifOverflow={props.ifOverflow} />
            <Comp />
          </LineChart>
        );
      };

      it.each(casesThatDoNotExtendDomain)('should not extend domain when ifOverflow=%s', ifOverflow => {
        const domainSpy = vi.fn();
        const { container } = render(<ChartWithReferenceLine ifOverflow={ifOverflow} domainSpy={domainSpy} />);
        expectYAxisTicks(container, [
          {
            textContent: '0',
            x: '57',
            y: '95',
          },
          {
            textContent: '300',
            x: '57',
            y: '72.5',
          },
          {
            textContent: '600',
            x: '57',
            y: '50',
          },
          {
            textContent: '900',
            x: '57',
            y: '27.5',
          },
          {
            textContent: '1200',
            x: '57',
            y: '5',
          },
        ]);
        expect(domainSpy).toHaveBeenLastCalledWith([0, 1200]);
      });

      it('should extend domain when ifOverflow=extendDomain', () => {
        const domainSpy = vi.fn();
        const { container } = render(<ChartWithReferenceLine ifOverflow="extendDomain" domainSpy={domainSpy} />);
        expectYAxisTicks(container, [
          {
            textContent: '0',
            x: '57',
            y: '95',
          },
          {
            textContent: '500',
            x: '57',
            y: '72.5',
          },
          {
            textContent: '1000',
            x: '57',
            y: '50',
          },
          {
            textContent: '1500',
            x: '57',
            y: '27.5',
          },
          {
            textContent: '2000',
            x: '57',
            y: '5',
          },
        ]);
        expect(domainSpy).toHaveBeenLastCalledWith([0, 2000]);
      });
    });

    describe('ReferenceLine with segment', () => {
      const ChartWithReferenceLineWithSegment = (props: {
        ifOverflow: IfOverflow | undefined;
        domainSpy: (domain: NumberDomain | CategoricalDomain) => void;
      }) => {
        const Comp = (): null => {
          const isPanorama = useIsPanorama();
          const domain = useAppSelector(state => selectAxisDomain(state, 'yAxis', 0, isPanorama));
          props.domainSpy(domain);
          return null;
        };
        return (
          <LineChart width={100} height={100} data={pageData}>
            <YAxis />
            <Line dataKey="pv" />
            <ReferenceLine
              segment={[
                { x: 'Page A', y: 100 },
                { x: 'Page B', y: 2000 },
              ]}
              ifOverflow={props.ifOverflow}
            />
            <Comp />
          </LineChart>
        );
      };

      it.each(casesThatDoNotExtendDomain)('should not extend domain when ifOverflow=%s', ifOverflow => {
        const domainSpy = vi.fn();
        const { container } = render(
          <ChartWithReferenceLineWithSegment ifOverflow={ifOverflow} domainSpy={domainSpy} />,
        );
        expectYAxisTicks(container, [
          {
            textContent: '0',
            x: '57',
            y: '95',
          },
          {
            textContent: '300',
            x: '57',
            y: '72.5',
          },
          {
            textContent: '600',
            x: '57',
            y: '50',
          },
          {
            textContent: '900',
            x: '57',
            y: '27.5',
          },
          {
            textContent: '1200',
            x: '57',
            y: '5',
          },
        ]);
        expect(domainSpy).toHaveBeenLastCalledWith([0, 1200]);
      });

      it(`should NOT extend domain even when ifOverflow=extendDomain ! No clue why, this looks to me like a bug`, () => {
        const domainSpy = vi.fn();
        const { container } = render(
          <ChartWithReferenceLineWithSegment ifOverflow="extendDomain" domainSpy={domainSpy} />,
        );
        expectYAxisTicks(container, [
          {
            textContent: '0',
            x: '57',
            y: '95',
          },
          {
            textContent: '300',
            x: '57',
            y: '72.5',
          },
          {
            textContent: '600',
            x: '57',
            y: '50',
          },
          {
            textContent: '900',
            x: '57',
            y: '27.5',
          },
          {
            textContent: '1200',
            x: '57',
            y: '5',
          },
        ]);
        expect(domainSpy).toHaveBeenLastCalledWith([0, 1200]);
      });
    });
  });

  it('should render the axis when wrapped in a custom component', () => {
    /*
     * https://github.com/recharts/recharts/issues/5445#issuecomment-2628711736
     */
    const YAxisWrapper = (props: YAxisProps) => {
      return <YAxis {...props} />;
    };

    const { container } = render(
      <BarChart width={100} height={100}>
        <YAxisWrapper />
      </BarChart>,
    );

    expect(container.querySelector('.yAxis')).toBeVisible();
  });

  it('should render the y-axis with given width in the prop', () => {
    const yAxisWidth = 40;

    const { container } = render(
      <BarChart width={100} height={100} data={data}>
        <YAxis width={yAxisWidth} />
        <Bar dataKey="amt" />
      </BarChart>,
    );

    const yAxis = container.querySelector('.yAxis');
    const yAxisLine = yAxis.querySelector('line');

    expect(yAxis).toBeVisible();
    expect(yAxisLine).toHaveAttribute('width', String(yAxisWidth));
  });

  it('should render y-axis with dynamically calculated width', async () => {
    mockGetBoundingClientRect({ width: 80, height: 30 });

    const { container } = render(
      <BarChart width={400} height={300} data={data}>
        <YAxis width="auto" ticks={[0, 800, 1600, 2400]} />
        <Bar dataKey="amt" />
      </BarChart>,
    );

    // Get all tick elements from the rendered Y-axis
    const tickElements = container.querySelectorAll('.recharts-cartesian-axis-tick-value');

    const yAxis = container.querySelector('.yAxis');
    const yAxisLine = yAxis.querySelector('line');

    const calculatedYAxisWidth = getCalculatedYAxisWidth({
      ticks: Array.from(tickElements),
      tickSize: 6,
      tickMargin: 2,
      label: undefined,
      labelGapWithTick: 5,
    });

    expect(calculatedYAxisWidth).toBe(88); // 80 width + 6 tick size + 2 tick margin
    expect(yAxisLine).toHaveAttribute('width', '88');
  });
});
