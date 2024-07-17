import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it, test, vi } from 'vitest';
import {
  Bar,
  BarChart,
  Brush,
  CartesianGrid,
  Customized,
  Legend,
  Line,
  LineChart,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from '../../src';
import {
  selectAllXAxesOffsetSteps,
  selectAxisSettings,
  selectCartesianGraphicalItemsData,
  selectDisplayedData,
  selectXAxisPosition,
} from '../../src/state/selectors/axisSelectors';
import { useAppSelector } from '../../src/state/hooks';
import { ExpectAxisDomain, expectXAxisTicks } from '../helper/expectAxisTicks';
import { XAxisSettings } from '../../src/state/axisMapSlice';
import { assertNotNull } from '../helper/assertNotNull';
import { AxisDomainType } from '../../src/util/types';
import { pageData } from '../../storybook/stories/data';

describe('<XAxis />', () => {
  const data = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 },
  ];
  const lineData = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
    { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
    { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
    { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
    { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
  ];
  const dataWithSmallNumbers = [{ x: 0.1 }, { x: 0.3 }, { x: 0.5 }, { x: 0.7 }, { x: 0.9 }];
  const dataWithDecimalNumbers = [{ x: 4.1 }, { x: 6.3 }, { x: 12.5 }, { x: 3.7 }, { x: 7.9 }];

  it('Render 1 x-CartesianAxis and 1 y-CartesianAxis ticks in ScatterChart', () => {
    const axisDomainSpy = vi.fn();
    const { container } = render(
      <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey="x" name="stature" unit="cm" />
        <YAxis dataKey="y" name="weight" unit="kg" />
        <Scatter name="A school" data={data} fill="#ff7300" />
        <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
      </ScatterChart>,
    );

    expect(container.querySelectorAll('.recharts-cartesian-axis-line')).toHaveLength(2);
    expect(axisDomainSpy).toHaveBeenLastCalledWith([100, 120, 170, 140, 150, 110]);
  });

  it('should throw when attempting to render outside of Chart', () => {
    expect(() => render(<XAxis dataKey="x" name="stature" unit="cm" />)).toThrow(
      'Invariant failed: Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?',
    );
  });

  it("Don't render x-axis when hide is set to be true", () => {
    const axisDomainSpy = vi.fn();
    const { container } = render(
      <LineChart width={400} height={400} data={lineData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis hide />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
      </LineChart>,
    );

    expect(container.querySelectorAll('.xAxis .recharts-xAxis')).toHaveLength(0);
    expect(axisDomainSpy).toHaveBeenLastCalledWith([0, 1, 2, 3, 4, 5]);
  });

  it('Render ticks of XAxis when specify ticks', () => {
    const axisDomainSpy = vi.fn();
    const { container } = render(
      <LineChart width={400} height={400} data={lineData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis ticks={[0, 4]} />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
      </LineChart>,
    );

    expect(container.querySelectorAll('.xAxis .recharts-cartesian-axis-tick')).toHaveLength(2);
    expectXAxisTicks(container, [
      {
        textContent: '0',
        x: '20',
        y: '358',
      },
      {
        textContent: '4',
        x: '308',
        y: '358',
      },
    ]);
    expect(axisDomainSpy).toHaveBeenLastCalledWith([0, 1, 2, 3, 4, 5]);
  });

  it('Render ticks with tickFormatter', () => {
    const spy = vi.fn();
    const { container } = render(
      <LineChart width={400} height={400} data={lineData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey="name" tickFormatter={(_, i) => `${i}`} />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
      </LineChart>,
    );

    expect(container.querySelectorAll('.xAxis .recharts-cartesian-axis-tick')[0]).toHaveTextContent('0');
    expectXAxisTicks(container, [
      {
        textContent: '0',
        x: '20',
        y: '358',
      },
      {
        textContent: '1',
        x: '92',
        y: '358',
      },
      {
        textContent: '2',
        x: '164',
        y: '358',
      },
      {
        textContent: '3',
        x: '236',
        y: '358',
      },
      {
        textContent: '4',
        x: '308',
        y: '358',
      },
      {
        textContent: '5',
        x: '380',
        y: '358',
      },
    ]);
    expect(spy).toHaveBeenLastCalledWith(['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F']);
  });

  it('should render array indexes when dataKey is not specified', () => {
    const axisDomainSpy = vi.fn();
    const { container } = render(
      <LineChart width={400} height={400} data={lineData}>
        <XAxis />
        <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
      </LineChart>,
    );

    expect(container.querySelectorAll('.xAxis .recharts-cartesian-axis-tick')[0]).toHaveTextContent('0');
    expectXAxisTicks(container, [
      {
        textContent: '0',
        x: '5',
        y: '373',
      },
      {
        textContent: '1',
        x: '83',
        y: '373',
      },
      {
        textContent: '2',
        x: '161',
        y: '373',
      },
      {
        textContent: '3',
        x: '239',
        y: '373',
      },
      {
        textContent: '4',
        x: '317',
        y: '373',
      },
      {
        textContent: '5',
        x: '395',
        y: '373',
      },
    ]);
    expect(axisDomainSpy).toHaveBeenLastCalledWith([0, 1, 2, 3, 4, 5]);
  });

  it('should not render any ticks when dataKey is specified but does not match the data', () => {
    const spy = vi.fn();
    const { container } = render(
      <LineChart width={400} height={400} data={lineData}>
        <XAxis dataKey="foo" />
        <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
      </LineChart>,
    );

    expectXAxisTicks(container, []);
    expect(spy).toHaveBeenLastCalledWith([]);
  });

  it('Render duplicated ticks of XAxis', () => {
    const spy = vi.fn();
    const { container } = render(
      <LineChart width={600} height={300} data={lineData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="name" interval={0} />
        <YAxis />
        <Line type="monotone" dataKey="balance" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
      </LineChart>,
    );

    expect(container.querySelectorAll('.recharts-xAxis .recharts-cartesian-axis-tick')).toHaveLength(lineData.length);
    expectXAxisTicks(container, [
      {
        textContent: 'Page A',
        x: '80',
        y: '273',
      },
      {
        textContent: 'Page B',
        x: '178',
        y: '273',
      },
      {
        textContent: 'Page C',
        x: '276',
        y: '273',
      },
      {
        textContent: 'Page D',
        x: '374',
        y: '273',
      },
      {
        textContent: 'Page E',
        x: '472',
        y: '273',
      },
      {
        textContent: 'Page F',
        x: '570',
        y: '273',
      },
    ]);
    expect(spy).toHaveBeenLastCalledWith(['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F']);
  });

  it('Render ticks of when the scale of XAxis is time', () => {
    // This test assumes UTC timezone because it renders strings that include timezone
    expect(new Date().getTimezoneOffset()).toEqual(0);
    const spy = vi.fn();
    const timeData = [
      {
        x: new Date('2019-07-04T00:00:00.000Z'),
        y: 5,
      },
      {
        x: new Date('2019-07-05T00:00:00.000Z'),
        y: 30,
      },
      {
        x: new Date('2019-07-06T00:00:00.000Z'),
        y: 50,
      },
      {
        x: new Date('2019-07-07T00:00:00.000Z'),
        y: 43,
      },
      {
        x: new Date('2019-07-08T00:00:00.000Z'),
        y: 20,
      },
      {
        x: new Date('2019-07-09T00:00:00.000Z'),
        y: -20,
      },
      {
        x: new Date('2019-07-10T00:00:00.000Z'),
        y: 30,
      },
    ];

    const { container } = render(
      <LineChart width={600} height={300} data={timeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis
          dataKey="x"
          domain={[timeData[0].x.getTime(), timeData[timeData.length - 1].x.getTime()]}
          scale="time"
          type="number"
        />
        <YAxis />
        <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
      </LineChart>,
    );

    expect(container.querySelectorAll('.recharts-xAxis .recharts-cartesian-axis-tick')).toHaveLength(timeData.length);
    expectXAxisTicks(container, [
      {
        textContent: 'Thu Jul 04 2019 00:00:00 GMT+0000 (Coordinated Universal Time)',
        x: '80',
        y: '273',
      },
      {
        textContent: 'Fri Jul 05 2019 00:00:00 GMT+0000 (Coordinated Universal Time)',
        x: '161.66666666666669',
        y: '273',
      },
      {
        textContent: 'Sat Jul 06 2019 00:00:00 GMT+0000 (Coordinated Universal Time)',
        x: '243.33333333333334',
        y: '273',
      },
      {
        textContent: 'Sun Jul 07 2019 00:00:00 GMT+0000 (Coordinated Universal Time)',
        x: '325',
        y: '273',
      },
      {
        textContent: 'Mon Jul 08 2019 00:00:00 GMT+0000 (Coordinated Universal Time)',
        x: '406.6666666666667',
        y: '273',
      },
      {
        textContent: 'Tue Jul 09 2019 00:00:00 GMT+0000 (Coordinated Universal Time)',
        x: '488.3333333333333',
        y: '273',
      },
      {
        textContent: 'Wed Jul 10 2019 00:00:00 GMT+0000 (Coordinated Universal Time)',
        x: '570',
        y: '273',
      },
    ]);
    expect(spy).toHaveBeenLastCalledWith([new Date('2019-07-04T00:00:00.000Z'), new Date('2019-07-10T00:00:00.000Z')]);
  });

  it('Render Bars with gap', () => {
    const spy = vi.fn();
    const { container } = render(
      <BarChart width={300} height={300} data={data}>
        <Bar dataKey="y" isAnimationActive={false} />
        <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} padding="gap" />
        <YAxis dataKey="y" />
        <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
      </BarChart>,
    );

    const bar = container.querySelector('.recharts-rectangle');
    assertNotNull(bar);
    expect(bar.getAttribute('x')).toEqual('70.16326530612245');
    expect(spy).toHaveBeenLastCalledWith([100, 170]);
    expectXAxisTicks(container, [
      {
        textContent: '100',
        x: '81.42857142857143',
        y: '273',
      },
      {
        textContent: '120',
        x: '137.75510204081633',
        y: '273',
      },
      {
        textContent: '140',
        x: '194.0816326530612',
        y: '273',
      },
      {
        textContent: '170',
        x: '278.57142857142856',
        y: '273',
      },
    ]);
  });

  it('Render Bars with gap in 10000 width chart and somehow is still decides to render 4 ticks instead of the default 5', () => {
    const spy = vi.fn();
    const { container } = render(
      <BarChart width={10000} height={300} data={data}>
        <Bar dataKey="y" isAnimationActive={false} />
        <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} padding="gap" />
        <YAxis dataKey="y" />
        <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
      </BarChart>,
    );

    const bar = container.querySelector('.recharts-rectangle');
    assertNotNull(bar);
    expect(bar.getAttribute('x')).toEqual('287.9183673469387');
    expect(spy).toHaveBeenLastCalledWith([100, 170]);
    expectXAxisTicks(container, [
      {
        textContent: '100',
        x: '774.2857142857142',
        y: '273',
      },
      {
        textContent: '120',
        x: '3206.1224489795923',
        y: '273',
      },
      {
        textContent: '140',
        x: '5637.95918367347',
        y: '273',
      },
      {
        textContent: '170',
        x: '9285.714285714286',
        y: '273',
      },
    ]);
  });

  describe.each(['gap', 'no-gap', { left: 3, right: 5 }] as const)('padding: %s', padding => {
    /* I am not entirely certain what is the relationship between the tickCount prop, and the actual tick count */
    it.each([
      { providedTickCount: 3, expectedTickCount: 3 },
      { providedTickCount: 5, expectedTickCount: 4 },
      { providedTickCount: 7, expectedTickCount: 5 },
      { providedTickCount: 11, expectedTickCount: 11 },
      { providedTickCount: 13, expectedTickCount: 12 },
      { providedTickCount: 17, expectedTickCount: 15 },
      { providedTickCount: 19, expectedTickCount: 18 },
      { providedTickCount: 29, expectedTickCount: 24 },
    ])(
      'renders $expectedTickCount ticks when tickCount=$providedTickCount',
      ({ providedTickCount, expectedTickCount }) => {
        const spy = vi.fn();
        const { container } = render(
          <BarChart width={100000} height={300} data={data}>
            <Bar dataKey="y" isAnimationActive={false} />
            <XAxis
              dataKey="x"
              type="number"
              domain={['dataMin', 'dataMax']}
              padding={padding}
              tickCount={providedTickCount}
            />
            <YAxis dataKey="y" />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </BarChart>,
        );

        expect(spy).toHaveBeenLastCalledWith([100, 170]);
        const allTicks = container.querySelectorAll('.recharts-xAxis .recharts-cartesian-axis-tick-value');
        expect(allTicks).toHaveLength(expectedTickCount);
      },
    );
  });

  it('Render Bars with gap when there are duplicate values in the data', () => {
    const spy = vi.fn();
    const { container } = render(
      <BarChart width={300} height={300} data={data}>
        <Bar dataKey="x" isAnimationActive={false} />
        <XAxis dataKey="y" type="number" domain={['dataMin', 'dataMax']} padding="gap" />
        <YAxis dataKey="x" />
        <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
      </BarChart>,
    );
    const bar = container.querySelector('.recharts-rectangle');
    assertNotNull(bar);
    expect(bar.getAttribute('x')).toEqual('138.49777777777777');
    expect(spy).toHaveBeenLastCalledWith([100, 400]);
    expectXAxisTicks(container, [
      {
        textContent: '100',
        x: '72.66666666666667',
        y: '273',
      },
      {
        textContent: '175',
        x: '126.33333333333333',
        y: '273',
      },
      {
        textContent: '250',
        x: '180',
        y: '273',
      },
      {
        textContent: '325',
        x: '233.66666666666666',
        y: '273',
      },
      {
        textContent: '400',
        x: '287.3333333333333',
        y: '273',
      },
    ]);
  });

  it('Render Bars with no gap', () => {
    const spy = vi.fn();
    const { container } = render(
      <BarChart width={300} height={300} data={data}>
        <Bar dataKey="y" isAnimationActive={false} />
        <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} padding="no-gap" />
        <YAxis dataKey="y" />
        <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
      </BarChart>,
    );

    const bar = container.querySelector('.recharts-rectangle');
    assertNotNull(bar);
    expect(bar.getAttribute('x')).toEqual('66.2928279883382');
    expectXAxisTicks(container, [
      {
        textContent: '100',
        x: '77.95510204081633',
        y: '273',
      },
      {
        textContent: '120',
        x: '136.266472303207',
        y: '273',
      },
      {
        textContent: '140',
        x: '194.57784256559765',
        y: '273',
      },
      {
        textContent: '170',
        x: '282.0448979591837',
        y: '273',
      },
    ]);
    expect(spy).toHaveBeenLastCalledWith([100, 170]);
  });

  it('Render Bars with custom gap', () => {
    const spy = vi.fn();
    const { container } = render(
      <BarChart width={300} height={300} data={data}>
        <Bar dataKey="y" isAnimationActive={false} />
        <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} padding={{ left: 11, right: 17 }} />
        <YAxis dataKey="y" />
        <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
      </BarChart>,
    );

    const bar = container.querySelector('.recharts-rectangle');
    assertNotNull(bar);
    expect(bar.getAttribute('x')).toEqual('64.45714285714286');
    expectXAxisTicks(container, [
      {
        textContent: '100',
        x: '76',
        y: '273',
      },
      {
        textContent: '120',
        x: '133.71428571428572',
        y: '273',
      },
      {
        textContent: '140',
        x: '191.42857142857144',
        y: '273',
      },
      {
        textContent: '170',
        x: '278',
        y: '273',
      },
    ]);
    expect(spy).toHaveBeenLastCalledWith([100, 170]);
  });

  it('Render Bars with padding on the left', () => {
    const spy = vi.fn();
    const { container } = render(
      <BarChart width={300} height={300} data={data}>
        <Bar dataKey="y" isAnimationActive={false} />
        <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} padding={{ left: 19 }} />
        <YAxis dataKey="y" />
        <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
      </BarChart>,
    );

    const bar = container.querySelector('.recharts-rectangle');
    assertNotNull(bar);
    expect(bar.getAttribute('x')).toEqual('71.94285714285715');
    expectXAxisTicks(container, [
      {
        textContent: '100',
        x: '84',
        y: '273',
      },
      {
        textContent: '120',
        x: '144.28571428571428',
        y: '273',
      },
      {
        textContent: '140',
        x: '204.57142857142856',
        y: '273',
      },
      {
        textContent: '170',
        x: '295',
        y: '273',
      },
    ]);
    expect(spy).toHaveBeenLastCalledWith([100, 170]);
  });

  it('Render Bars with padding on the right', () => {
    const spy = vi.fn();
    const { container } = render(
      <BarChart width={300} height={300} data={data}>
        <Bar dataKey="y" isAnimationActive={false} />
        <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} padding={{ right: 23 }} />
        <YAxis dataKey="y" />
        <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
      </BarChart>,
    );

    const bar = container.querySelector('.recharts-rectangle');
    assertNotNull(bar);
    expect(bar.getAttribute('x')).toEqual('53.17142857142858');
    expectXAxisTicks(container, [
      {
        textContent: '100',
        x: '65',
        y: '273',
      },
      {
        textContent: '120',
        x: '124.14285714285714',
        y: '273',
      },
      {
        textContent: '140',
        x: '183.28571428571428',
        y: '273',
      },
      {
        textContent: '170',
        x: '272',
        y: '273',
      },
    ]);
    expect(spy).toHaveBeenLastCalledWith([100, 170]);
  });

  it('Render axis with tick for a single data point', () => {
    const spy = vi.fn();
    const { container } = render(
      <BarChart width={300} height={300} data={data.slice(0, 1)}>
        <Bar dataKey="y" isAnimationActive={false} />
        <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} />
        <YAxis dataKey="y" />
        <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
      </BarChart>,
    );

    const tick = container.querySelector('.xAxis .recharts-cartesian-axis-tick-value');
    assertNotNull(tick);
    expect(tick).toBeInTheDocument();
    expect(tick.textContent).toEqual('100');
    expect(tick.getAttribute('x')).toEqual('180');

    // For a single data point, unless barSize is given, the bar will have no width and thus not be rendered.
    // This test merely confirms this known limitation.
    const bar = container.querySelector('.recharts-rectangle');
    expect(bar).not.toBeInTheDocument();
    expectXAxisTicks(container, [
      {
        textContent: '100',
        x: '180',
        y: '273',
      },
    ]);
    expect(spy).toHaveBeenLastCalledWith([100, 100]);
  });

  it('Should render the axis line without any ticks', () => {
    const spy = vi.fn();
    const barData = [{ day: '05-01' }, { day: '05-02' }];
    const { container } = render(
      <BarChart width={300} height={300} data={barData}>
        <Bar dataKey="y" isAnimationActive={false} />
        <XAxis dataKey="y" type="number" />
        <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
      </BarChart>,
    );
    const ticksGroup = container.getElementsByClassName('recharts-cartesian-axis-tick-line');
    expect(ticksGroup).toHaveLength(0);

    const axisLine = container.getElementsByClassName('recharts-cartesian-axis-line');
    expect(axisLine).toHaveLength(1);
    expectXAxisTicks(container, []);
    expect(spy).toHaveBeenLastCalledWith(undefined);
  });

  it('Render Bars for a single data point with barSize=50%', () => {
    const spy = vi.fn();
    const { container } = render(
      <BarChart width={300} height={300} data={data.slice(0, 1)} barSize="50%">
        <Bar dataKey="y" isAnimationActive={false} />
        <XAxis dataKey="x" type="number" domain={[50, 150]} />
        <YAxis dataKey="y" />
        <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
      </BarChart>,
    );

    const bar = container.querySelector('.recharts-rectangle');
    assertNotNull(bar);
    expect(bar).toBeInTheDocument();
    expect(bar.getAttribute('x')).toEqual('123');
    expect(bar.getAttribute('width')).toEqual('115');
    expectXAxisTicks(container, [
      {
        textContent: '50',
        x: '65',
        y: '273',
      },
      {
        textContent: '75',
        x: '122.5',
        y: '273',
      },
      {
        textContent: '100',
        x: '180',
        y: '273',
      },
      {
        textContent: '125',
        x: '237.5',
        y: '273',
      },
      {
        textContent: '150',
        x: '295',
        y: '273',
      },
    ]);
    expect(spy).toHaveBeenLastCalledWith([50, 150]);
  });

  it('Render Bars for a single data point with barSize=20% and no-gap', () => {
    const spy = vi.fn();
    const { container } = render(
      <BarChart width={300} height={300} data={data.slice(0, 1)} barSize="20%">
        <Bar dataKey="y" isAnimationActive={false} />
        <XAxis dataKey="x" type="number" domain={[100, 150]} padding="no-gap" />
        <YAxis dataKey="y" />
        <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
      </BarChart>,
    );

    const bar = container.querySelector('.recharts-rectangle');
    assertNotNull(bar);
    expect(bar).toBeInTheDocument();
    expect(bar.getAttribute('x')).toEqual('42');
    expect(bar.getAttribute('width')).toEqual('46');
    expectXAxisTicks(container, [
      {
        textContent: '100',
        x: '65',
        y: '273',
      },
      {
        textContent: '115',
        x: '134',
        y: '273',
      },
      {
        textContent: '130',
        x: '203',
        y: '273',
      },
      {
        textContent: '150',
        x: '295',
        y: '273',
      },
    ]);
    expect(spy).toHaveBeenLastCalledWith([100, 150]);
  });

  test('Render no ticks if type is category and data is empty', () => {
    const spy = vi.fn();
    const { container } = render(
      <BarChart width={300} height={300} data={[]}>
        <Bar dataKey="y" isAnimationActive={false} />
        <XAxis dataKey="x" />
        <YAxis dataKey="y" />
        <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
      </BarChart>,
    );

    expect(container.querySelectorAll('.recharts-xAxis .recharts-cartesian-axis-tick')).toHaveLength(0);
    expectXAxisTicks(container, []);
    expect(spy).toHaveBeenLastCalledWith([]);
  });

  it('should render multiple axes', () => {
    const topOffsetStepsSpy = vi.fn();
    const bottomOffsetStepsSpy = vi.fn();
    const axisAPositionSpy = vi.fn();
    const axisBPositionSpy = vi.fn();
    const axisCPositionSpy = vi.fn();
    const axisDPositionSpy = vi.fn();
    const Comp = (): null => {
      topOffsetStepsSpy(useAppSelector(state => selectAllXAxesOffsetSteps(state, 'top', false)));
      bottomOffsetStepsSpy(useAppSelector(state => selectAllXAxesOffsetSteps(state, 'bottom', false)));
      axisAPositionSpy(useAppSelector(state => selectXAxisPosition(state, 'a')));
      axisBPositionSpy(useAppSelector(state => selectXAxisPosition(state, 'b')));
      axisCPositionSpy(useAppSelector(state => selectXAxisPosition(state, 'c')));
      axisDPositionSpy(useAppSelector(state => selectXAxisPosition(state, 'd')));
      return null;
    };
    const { container } = render(
      <LineChart width={700} height={700} data={pageData}>
        <XAxis dataKey="name" xAxisId="a" orientation="top" height={40} />
        <XAxis dataKey="uv" xAxisId="b" height={50} />
        <XAxis dataKey="pv" type="number" xAxisId="c" height={60} />
        <XAxis dataKey="amt" type="number" orientation="top" xAxisId="d" height={70} />
        <Line dataKey="name" xAxisId="a" />
        <Line dataKey="uv" xAxisId="b" />
        <Line dataKey="pv" xAxisId="c" />
        <Line dataKey="amt" xAxisId="d" />
        <Tooltip defaultIndex={2} />
        <Customized component={<Comp />} />
      </LineChart>,
    );

    expectXAxisTicks(container, [
      {
        textContent: 'Page A',
        x: '5',
        y: '107',
      },
      {
        textContent: 'Page B',
        x: '120',
        y: '107',
      },
      {
        textContent: 'Page C',
        x: '235',
        y: '107',
      },
      {
        textContent: 'Page D',
        x: '350',
        y: '107',
      },
      {
        textContent: 'Page E',
        x: '465',
        y: '107',
      },
      {
        textContent: 'Page F',
        x: '580',
        y: '107',
      },
      {
        textContent: 'Page G',
        x: '695',
        y: '107',
      },
      {
        textContent: '590',
        x: '5',
        y: '593',
      },
      {
        textContent: '590',
        x: '120',
        y: '593',
      },
      {
        textContent: '868',
        x: '235',
        y: '593',
      },
      {
        textContent: '1397',
        x: '350',
        y: '593',
      },
      {
        textContent: '1480',
        x: '465',
        y: '593',
      },
      {
        textContent: '1520',
        x: '580',
        y: '593',
      },
      {
        textContent: '1400',
        x: '695',
        y: '593',
      },
      {
        textContent: '0',
        x: '5',
        y: '643',
      },
      {
        textContent: '300',
        x: '177.5',
        y: '643',
      },
      {
        textContent: '600',
        x: '350',
        y: '643',
      },
      {
        textContent: '900',
        x: '522.5',
        y: '643',
      },
      {
        textContent: '1200',
        x: '695',
        y: '643',
      },
      {
        textContent: '0',
        x: '5',
        y: '67',
      },
      {
        textContent: '450',
        x: '177.5',
        y: '67',
      },
      {
        textContent: '900',
        x: '350',
        y: '67',
      },
      {
        textContent: '1350',
        x: '522.5',
        y: '67',
      },
      {
        textContent: '1800',
        x: '695',
        y: '67',
      },
    ]);
    expect(topOffsetStepsSpy).toHaveBeenLastCalledWith({
      a: 75,
      d: 5,
    });
    expect(bottomOffsetStepsSpy).toHaveBeenLastCalledWith({
      b: 585,
      c: 635,
    });
    expect(axisAPositionSpy).toHaveBeenLastCalledWith({
      x: 5,
      y: 75,
    });
    expect(axisBPositionSpy).toHaveBeenLastCalledWith({
      x: 5,
      y: 585,
    });
    expect(axisCPositionSpy).toHaveBeenLastCalledWith({
      x: 5,
      y: 635,
    });
    expect(axisDPositionSpy).toHaveBeenLastCalledWith({
      x: 5,
      y: 5,
    });
  });

  it('should render multiple axes with some ticks mirrored', () => {
    const { container } = render(
      <LineChart width={700} height={700} data={pageData}>
        <XAxis dataKey="name" xAxisId="a" orientation="top" height={40} />
        <XAxis mirror dataKey="uv" xAxisId="b" height={50} />
        <XAxis dataKey="pv" type="number" xAxisId="c" height={60} />
        <XAxis mirror dataKey="amt" type="number" orientation="top" xAxisId="d" height={70} />
        <Line dataKey="name" xAxisId="a" />
        <Line dataKey="uv" xAxisId="b" />
        <Line dataKey="pv" xAxisId="c" />
        <Line dataKey="amt" xAxisId="d" />
        <Tooltip defaultIndex={2} />
      </LineChart>,
    );

    expectXAxisTicks(container, [
      {
        textContent: 'Page A',
        x: '5',
        y: '37',
      },
      {
        textContent: 'Page B',
        x: '120',
        y: '37',
      },
      {
        textContent: 'Page C',
        x: '235',
        y: '37',
      },
      {
        textContent: 'Page D',
        x: '350',
        y: '37',
      },
      {
        textContent: 'Page E',
        x: '465',
        y: '37',
      },
      {
        textContent: 'Page F',
        x: '580',
        y: '37',
      },
      {
        textContent: 'Page G',
        x: '695',
        y: '37',
      },
      {
        textContent: '590',
        x: '5',
        y: '627',
      },
      {
        textContent: '590',
        x: '120',
        y: '627',
      },
      {
        textContent: '868',
        x: '235',
        y: '627',
      },
      {
        textContent: '1397',
        x: '350',
        y: '627',
      },
      {
        textContent: '1480',
        x: '465',
        y: '627',
      },
      {
        textContent: '1520',
        x: '580',
        y: '627',
      },
      {
        textContent: '1400',
        x: '695',
        y: '627',
      },
      {
        textContent: '0',
        x: '5',
        y: '643',
      },
      {
        textContent: '300',
        x: '177.5',
        y: '643',
      },
      {
        textContent: '600',
        x: '350',
        y: '643',
      },
      {
        textContent: '900',
        x: '522.5',
        y: '643',
      },
      {
        textContent: '1200',
        x: '695',
        y: '643',
      },
      {
        textContent: '0',
        x: '5',
        y: '53',
      },
      {
        textContent: '450',
        x: '177.5',
        y: '53',
      },
      {
        textContent: '900',
        x: '350',
        y: '53',
      },
      {
        textContent: '1350',
        x: '522.5',
        y: '53',
      },
      {
        textContent: '1800',
        x: '695',
        y: '53',
      },
    ]);
  });

  it('should not leave space for hidden axes', () => {
    const topOffsetStepsSpy = vi.fn();
    const bottomOffsetStepsSpy = vi.fn();
    const axisAPositionSpy = vi.fn();
    const axisBPositionSpy = vi.fn();
    const axisCPositionSpy = vi.fn();
    const axisDPositionSpy = vi.fn();
    const Comp = (): null => {
      topOffsetStepsSpy(useAppSelector(state => selectAllXAxesOffsetSteps(state, 'top', false)));
      bottomOffsetStepsSpy(useAppSelector(state => selectAllXAxesOffsetSteps(state, 'bottom', false)));
      axisAPositionSpy(useAppSelector(state => selectXAxisPosition(state, 'a')));
      axisBPositionSpy(useAppSelector(state => selectXAxisPosition(state, 'b')));
      axisCPositionSpy(useAppSelector(state => selectXAxisPosition(state, 'c')));
      axisDPositionSpy(useAppSelector(state => selectXAxisPosition(state, 'd')));
      return null;
    };
    const { container } = render(
      <LineChart width={700} height={700} data={pageData}>
        <XAxis dataKey="name" xAxisId="a" orientation="top" height={40} />
        <XAxis dataKey="uv" xAxisId="b" height={50} />
        <XAxis hide dataKey="pv" type="number" xAxisId="c" height={60} />
        <XAxis hide dataKey="amt" type="number" orientation="top" xAxisId="d" height={70} />
        <Line dataKey="name" xAxisId="a" />
        <Line dataKey="uv" xAxisId="b" />
        <Line dataKey="pv" xAxisId="c" />
        <Line dataKey="amt" xAxisId="d" />
        <Tooltip defaultIndex={2} />
        <Customized component={<Comp />} />
      </LineChart>,
    );

    expectXAxisTicks(container, [
      {
        textContent: 'Page A',
        x: '5',
        y: '37',
      },
      {
        textContent: 'Page B',
        x: '120',
        y: '37',
      },
      {
        textContent: 'Page C',
        x: '235',
        y: '37',
      },
      {
        textContent: 'Page D',
        x: '350',
        y: '37',
      },
      {
        textContent: 'Page E',
        x: '465',
        y: '37',
      },
      {
        textContent: 'Page F',
        x: '580',
        y: '37',
      },
      {
        textContent: 'Page G',
        x: '695',
        y: '37',
      },
      {
        textContent: '590',
        x: '5',
        y: '653',
      },
      {
        textContent: '590',
        x: '120',
        y: '653',
      },
      {
        textContent: '868',
        x: '235',
        y: '653',
      },
      {
        textContent: '1397',
        x: '350',
        y: '653',
      },
      {
        textContent: '1480',
        x: '465',
        y: '653',
      },
      {
        textContent: '1520',
        x: '580',
        y: '653',
      },
      {
        textContent: '1400',
        x: '695',
        y: '653',
      },
    ]);
    expect(topOffsetStepsSpy).toHaveBeenLastCalledWith({
      a: 5,
      d: -65,
    });
    expect(bottomOffsetStepsSpy).toHaveBeenLastCalledWith({
      b: 645,
      c: 695,
    });
    expect(axisAPositionSpy).toHaveBeenLastCalledWith({
      x: 5,
      y: 5,
    });
    expect(axisBPositionSpy).toHaveBeenLastCalledWith({
      x: 5,
      y: 645,
    });
    expect(axisCPositionSpy).toHaveBeenLastCalledWith({
      x: 5,
      y: 695,
    });
    expect(axisDPositionSpy).toHaveBeenLastCalledWith({
      x: 5,
      y: -65,
    });
  });

  describe('state integration', () => {
    it('should publish its configuration to redux store', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        const settings = useAppSelector(state => selectAxisSettings(state, 'xAxis', 'foo'));
        spy(settings);
        return null;
      };
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
          />
          <Customized component={Comp} />
        </BarChart>,
      );
      expect(container.querySelector('.xAxis')).toBeVisible();
      expect(spy).toHaveBeenCalledTimes(3);
      const expectedSettings: XAxisSettings = {
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
      };
      expect(spy).toHaveBeenLastCalledWith(expectedSettings);
    });

    it('should remove the configuration from store when DOM element is removed', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        const foo = useAppSelector(state => selectAxisSettings(state, 'xAxis', 'foo'));
        const bar = useAppSelector(state => selectAxisSettings(state, 'xAxis', 'bar'));
        spy({ foo, bar });
        return null;
      };
      const { rerender } = render(
        <BarChart width={100} height={100}>
          <XAxis xAxisId="foo" scale="log" type="number" />
          <Customized component={Comp} />
        </BarChart>,
      );
      const expectedSettings1: XAxisSettings = {
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
      };
      expect(spy).toHaveBeenLastCalledWith({
        foo: expectedSettings1,
        bar: undefined,
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
        },
        bar: {
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
        },
      };
      expect(spy).toHaveBeenLastCalledWith(expectedSettings2);
      rerender(
        <BarChart width={100} height={100}>
          <XAxis xAxisId="bar" scale="utc" type="category" />
          <Customized component={Comp} />
        </BarChart>,
      );

      const expectedSettings3: XAxisSettings = {
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

  describe('numerical domain', () => {
    type XAxisTestCase = {
      name: string;
      Component: React.ComponentType<{ children: React.ReactNode }>;
    };

    const testCases: XAxisTestCase[] = [
      {
        name: 'data defined on chart root',
        Component: ({ children }) => (
          <BarChart width={300} height={300} data={data}>
            {children}
          </BarChart>
        ),
      },
      {
        name: 'data defined on graphical element',
        Component: ({ children }) => (
          <LineChart width={300} height={300}>
            <Line data={data} />
            {children}
          </LineChart>
        ),
      },
    ];

    describe.each(testCases)('when $name', ({ Component }) => {
      it('should start from 0 and calculate domain max by default', () => {
        const spy = vi.fn();
        const { container } = render(
          <Component>
            <XAxis dataKey="x" type="number" />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </Component>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '0',
            x: '5',
            y: '273',
          },
          {
            textContent: '45',
            x: '77.5',
            y: '273',
          },
          {
            textContent: '90',
            x: '150',
            y: '273',
          },
          {
            textContent: '135',
            x: '222.5',
            y: '273',
          },
          {
            textContent: '180',
            x: '295',
            y: '273',
          },
        ]);
        expect(spy).toHaveBeenLastCalledWith([0, 180]);
      });

      it('should reverse ticks', () => {
        const spy = vi.fn();
        const { container } = render(
          <Component>
            <XAxis dataKey="x" type="number" reversed />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </Component>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '0',
            x: '295',
            y: '273',
          },
          {
            textContent: '45',
            x: '222.5',
            y: '273',
          },
          {
            textContent: '90',
            x: '150',
            y: '273',
          },
          {
            textContent: '135',
            x: '77.5',
            y: '273',
          },
          {
            textContent: '180',
            x: '5',
            y: '273',
          },
        ]);
        expect(spy).toHaveBeenLastCalledWith([0, 180]);
      });

      it('should reverse ticks', () => {
        const spy = vi.fn();
        const { container } = render(
          <Component>
            <XAxis dataKey="x" type="number" reversed />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </Component>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '0',
            x: '295',
            y: '273',
          },
          {
            textContent: '45',
            x: '222.5',
            y: '273',
          },
          {
            textContent: '90',
            x: '150',
            y: '273',
          },
          {
            textContent: '135',
            x: '77.5',
            y: '273',
          },
          {
            textContent: '180',
            x: '5',
            y: '273',
          },
        ]);
        expect(spy).toHaveBeenLastCalledWith([0, 180]);
      });

      describe.each([true, false, undefined])('auto domain with allowDataOverflow = %s', allowDataOverflow => {
        it('should render ticks from domain auto, auto', () => {
          const spy = vi.fn();
          const { container } = render(
            <Component>
              <XAxis dataKey="x" type="number" domain={['auto', 'auto']} allowDataOverflow={allowDataOverflow} />
              <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
            </Component>,
          );
          expectXAxisTicks(container, [
            {
              textContent: '100',
              x: '5',
              y: '273',
            },
            {
              textContent: '120',
              x: '77.5',
              y: '273',
            },
            {
              textContent: '140',
              x: '150',
              y: '273',
            },
            {
              textContent: '160',
              x: '222.5',
              y: '273',
            },
            {
              textContent: '180',
              x: '295',
              y: '273',
            },
          ]);
          expect(spy).toHaveBeenLastCalledWith([100, 180]);
        });

        it('should render ticks from number, auto', () => {
          const spy = vi.fn();
          const { container } = render(
            <Component>
              <XAxis dataKey="x" type="number" domain={[-55, 'auto']} allowDataOverflow={allowDataOverflow} />
              <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
            </Component>,
          );
          expectXAxisTicks(container, [
            {
              textContent: '-60',
              x: '5',
              y: '273',
            },
            {
              textContent: '0',
              x: '77.5',
              y: '273',
            },
            {
              textContent: '60',
              x: '150',
              y: '273',
            },
            {
              textContent: '120',
              x: '222.5',
              y: '273',
            },
            {
              textContent: '180',
              x: '295',
              y: '273',
            },
          ]);
          expect(spy).toHaveBeenLastCalledWith([-60, 180]);
        });

        it('should render ticks from auto, number', () => {
          const spy = vi.fn();
          const { container } = render(
            <Component>
              <XAxis dataKey="x" type="number" domain={['auto', 555]} allowDataOverflow={allowDataOverflow} />
              <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
            </Component>,
          );
          expectXAxisTicks(container, [
            {
              textContent: '0',
              x: '5',
              y: '273',
            },
            {
              textContent: '150',
              x: '77.5',
              y: '273',
            },
            {
              textContent: '300',
              x: '150',
              y: '273',
            },
            {
              textContent: '450',
              x: '222.5',
              y: '273',
            },
            {
              textContent: '600',
              x: '295',
              y: '273',
            },
          ]);
          expect(spy).toHaveBeenLastCalledWith([0, 600]);
        });
      });

      it('should allow to expand the domain', () => {
        const spy = vi.fn();
        const { container } = render(
          <Component>
            <XAxis dataKey="x" type="number" domain={[-500, 500]} />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </Component>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '-500',
            x: '5',
            y: '273',
          },
          {
            textContent: '-250',
            x: '77.5',
            y: '273',
          },
          {
            textContent: '0',
            x: '150',
            y: '273',
          },
          {
            textContent: '250',
            x: '222.5',
            y: '273',
          },
          {
            textContent: '500',
            x: '295',
            y: '273',
          },
        ]);
        expect(spy).toHaveBeenLastCalledWith([-500, 500]);
      });

      it('should shrink down, but respect the data domain, if the provided domain is smaller than the data', () => {
        const spy = vi.fn();
        const { container, rerender } = render(
          <Component>
            <XAxis dataKey="x" type="number" domain={[-100, 100]} />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </Component>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '-100',
            x: '5',
            y: '273',
          },
          {
            textContent: '-30',
            x: '80.18518518518519',
            y: '273',
          },
          {
            textContent: '40',
            x: '155.37037037037038',
            y: '273',
          },
          {
            textContent: '170',
            x: '295',
            y: '273',
          },
        ]);
        expect(spy).toHaveBeenLastCalledWith([-100, 170]);

        rerender(
          <Component>
            <XAxis dataKey="x" type="number" domain={[130, 175]} />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </Component>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '100',
            x: '5',
            y: '273',
          },
          {
            textContent: '120',
            x: '82.33333333333334',
            y: '273',
          },
          {
            textContent: '140',
            x: '159.66666666666669',
            y: '273',
          },
          {
            textContent: '175',
            x: '295',
            y: '273',
          },
        ]);
        expect(spy).toHaveBeenLastCalledWith([100, 175]);

        rerender(
          <Component>
            <XAxis dataKey="x" type="number" domain={[130, 150]} />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </Component>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '100',
            x: '5',
            y: '273',
          },
          {
            textContent: '120',
            x: '87.85714285714285',
            y: '273',
          },
          {
            textContent: '140',
            x: '170.7142857142857',
            y: '273',
          },
          {
            textContent: '170',
            x: '295',
            y: '273',
          },
        ]);
        expect(spy).toHaveBeenLastCalledWith([100, 170]);
      });

      it('should default to dataMin, dataMax for domain where the larger number is first', () => {
        const spy = vi.fn();
        const { container } = render(
          <Component>
            <XAxis dataKey="x" type="number" domain={[100, 0]} />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </Component>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '100',
            x: '5',
            y: '273',
          },
          {
            textContent: '120',
            x: '87.85714285714285',
            y: '273',
          },
          {
            textContent: '140',
            x: '170.7142857142857',
            y: '273',
          },
          {
            textContent: '170',
            x: '295',
            y: '273',
          },
        ]);
        expect(spy).toHaveBeenLastCalledWith([100, 170]);
      });

      it('should reverse domain where the larger number is first, and allowDataOverflow is true', () => {
        const spy = vi.fn();
        const { container } = render(
          <Component>
            <XAxis dataKey="x" type="number" domain={[100, 0]} allowDataOverflow />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </Component>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '100',
            x: '5',
            y: '273',
          },
          {
            textContent: '75',
            x: '77.5',
            y: '273',
          },
          {
            textContent: '50',
            x: '150',
            y: '273',
          },
          {
            textContent: '25',
            x: '222.5',
            y: '273',
          },
          {
            textContent: '0',
            x: '295',
            y: '273',
          },
        ]);
        expect(spy).toHaveBeenLastCalledWith([100, 0]);
      });

      it('should render one tick for domain that does not have any gap', () => {
        const spy = vi.fn();
        const { container } = render(
          <Component>
            <XAxis dataKey="x" type="number" domain={[150, 150]} allowDataOverflow />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </Component>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '150',
            x: '150',
            y: '273',
          },
        ]);
        expect(spy).toHaveBeenLastCalledWith([150, 150]);
      });

      it('should shrink properly when allowDataOverflow = true', () => {
        const spy = vi.fn();
        const { container } = render(
          <Component>
            <XAxis dataKey="x" type="number" domain={[0, 100]} allowDataOverflow />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </Component>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '0',
            x: '5',
            y: '273',
          },
          {
            textContent: '25',
            x: '77.5',
            y: '273',
          },
          {
            textContent: '50',
            x: '150',
            y: '273',
          },
          {
            textContent: '75',
            x: '222.5',
            y: '273',
          },
          {
            textContent: '100',
            x: '295',
            y: '273',
          },
        ]);
        expect(spy).toHaveBeenLastCalledWith([0, 100]);
      });

      it('should allow providing more tickCount', () => {
        const spy = vi.fn();
        const { container } = render(
          <Component>
            <XAxis dataKey="x" type="number" tickCount={7} />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </Component>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '0',
            x: '5',
            y: '273',
          },
          {
            textContent: '30',
            x: '53.33333333333333',
            y: '273',
          },
          {
            textContent: '60',
            x: '101.66666666666666',
            y: '273',
          },
          {
            textContent: '90',
            x: '150',
            y: '273',
          },
          {
            textContent: '120',
            x: '198.33333333333331',
            y: '273',
          },
          {
            textContent: '150',
            x: '246.66666666666669',
            y: '273',
          },
          {
            textContent: '180',
            x: '295',
            y: '273',
          },
        ]);
        expect(spy).toHaveBeenLastCalledWith([0, 180]);
      });

      it('should allow providing less tickCount', () => {
        const spy = vi.fn();
        const { container } = render(
          <Component>
            <XAxis dataKey="x" type="number" tickCount={3} />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </Component>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '0',
            x: '5',
            y: '273',
          },
          {
            textContent: '85',
            x: '150',
            y: '273',
          },
          {
            textContent: '170',
            x: '295',
            y: '273',
          },
        ]);
        expect(spy).toHaveBeenLastCalledWith([0, 170]);
      });

      it('should make ticks from dataMin, dataMax', () => {
        const spy = vi.fn();
        const { container } = render(
          <Component>
            <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} allowDataOverflow />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </Component>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '100',
            x: '5',
            y: '273',
          },
          {
            textContent: '120',
            x: '87.85714285714285',
            y: '273',
          },
          {
            textContent: '140',
            x: '170.7142857142857',
            y: '273',
          },
          {
            textContent: '170',
            x: '295',
            y: '273',
          },
        ]);
        expect(spy).toHaveBeenLastCalledWith([100, 170]);
      });

      it('should default to dataMin, dataMax when domain is provided as an array of invalid values', () => {
        const spy = vi.fn();
        const { container } = render(
          <Component>
            <XAxis
              dataKey="x"
              type="number"
              domain={['not a valid number', 'not a valid number either']}
              allowDataOverflow
            />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </Component>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '100',
            x: '5',
            y: '273',
          },
          {
            textContent: '120',
            x: '87.85714285714285',
            y: '273',
          },
          {
            textContent: '140',
            x: '170.7142857142857',
            y: '273',
          },
          {
            textContent: '170',
            x: '295',
            y: '273',
          },
        ]);
        expect(spy).toHaveBeenLastCalledWith([100, 170]);
      });

      it('should allow a function that returns a domain, and pass inside a computed domain and allowDataOverflow prop', () => {
        const reduxDomainSpy = vi.fn();
        const domainPropSpy = vi.fn();
        domainPropSpy.mockReturnValue([-500, 500]);
        const { container, rerender } = render(
          <Component>
            <XAxis dataKey="x" type="number" domain={domainPropSpy} allowDataOverflow />
            <Customized component={<ExpectAxisDomain assert={reduxDomainSpy} axisType="xAxis" />} />
          </Component>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '-500',
            x: '5',
            y: '273',
          },
          {
            textContent: '-250',
            x: '77.5',
            y: '273',
          },
          {
            textContent: '0',
            x: '150',
            y: '273',
          },
          {
            textContent: '250',
            x: '222.5',
            y: '273',
          },
          {
            textContent: '500',
            x: '295',
            y: '273',
          },
        ]);
        // expect(domainPropSpy).toHaveBeenCalledTimes(12); // this is called 12 times with data defined on chart root and 14 times when data defined on graphical items
        expect(domainPropSpy).toHaveBeenCalledWith([100, 170], true);

        rerender(
          <Component>
            <XAxis dataKey="x" type="number" domain={domainPropSpy} allowDataOverflow={false} />
            <Customized component={<ExpectAxisDomain assert={reduxDomainSpy} axisType="xAxis" />} />
          </Component>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '-500',
            x: '5',
            y: '273',
          },
          {
            textContent: '-250',
            x: '77.5',
            y: '273',
          },
          {
            textContent: '0',
            x: '150',
            y: '273',
          },
          {
            textContent: '250',
            x: '222.5',
            y: '273',
          },
          {
            textContent: '500',
            x: '295',
            y: '273',
          },
        ]);
        // hah that's quite a few calls isn't it. TODO let's see if it improves once we remove the old, generateCategoricalChart code path
        // expect(domainPropSpy).toHaveBeenCalledTimes(27); // TODO also not stable, sometimes 24 and sometimes 27 because of different code paths when data is defined on root vs graphical item
        expect(domainPropSpy).toHaveBeenLastCalledWith([100, 170], false);
        expect(reduxDomainSpy).toHaveBeenLastCalledWith([-500, 500]);
      });

      it(`should allow array of functions,
              and give them first and last elements of the data domain
              - but this time, no allowDataOverflow parameter!`, () => {
        const reduxDomainSpy = vi.fn();
        const spyMin = vi.fn().mockReturnValue(-500);
        const spyMax = vi.fn().mockReturnValue(500);
        const { container } = render(
          <Component>
            <XAxis dataKey="x" type="number" domain={[spyMin, spyMax]} allowDataOverflow />
            <Customized component={<ExpectAxisDomain assert={reduxDomainSpy} axisType="xAxis" />} />
          </Component>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '-500',
            x: '5',
            y: '273',
          },
          {
            textContent: '-250',
            x: '77.5',
            y: '273',
          },
          {
            textContent: '0',
            x: '150',
            y: '273',
          },
          {
            textContent: '250',
            x: '222.5',
            y: '273',
          },
          {
            textContent: '500',
            x: '295',
            y: '273',
          },
        ]);
        // expect(spyMin).toHaveBeenCalledTimes(12); // TODO this is not stable, sometimes it reports 12 and sometimes it reports 14, because of different code paths when data is defined on root vs graphical item
        // expect(spyMax).toHaveBeenCalledTimes(12); // TODO this is not stable, sometimes it reports 12 and sometimes it reports 14, because of different code paths when data is defined on root vs graphical item
        expect(spyMin).toHaveBeenCalledWith(100);
        expect(spyMax).toHaveBeenCalledWith(170);
        expect(reduxDomainSpy).toHaveBeenLastCalledWith([-500, 500]);
      });

      it('should allow mixing numbers and functions', () => {
        const spy = vi.fn();
        const { container } = render(
          <Component>
            <XAxis dataKey="x" type="number" domain={[-500, () => 500]} allowDataOverflow />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </Component>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '-500',
            x: '5',
            y: '273',
          },
          {
            textContent: '-250',
            x: '77.5',
            y: '273',
          },
          {
            textContent: '0',
            x: '150',
            y: '273',
          },
          {
            textContent: '250',
            x: '222.5',
            y: '273',
          },
          {
            textContent: '500',
            x: '295',
            y: '273',
          },
        ]);
        expect(spy).toHaveBeenLastCalledWith([-500, 500]);
      });
    });

    describe('when data is defined on multiple graphical elements', () => {
      const spy = vi.fn();
      const data1 = data.slice(0, 3);
      const data2 = data.slice(3);
      it('should merge and display domain of all data', () => {
        const { container } = render(
          <LineChart width={300} height={300}>
            <Line data={data1} />
            <Line data={data2} />
            <XAxis dataKey="x" type="number" />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </LineChart>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '0',
            x: '5',
            y: '273',
          },
          {
            textContent: '45',
            x: '77.5',
            y: '273',
          },
          {
            textContent: '90',
            x: '150',
            y: '273',
          },
          {
            textContent: '135',
            x: '222.5',
            y: '273',
          },
          {
            textContent: '180',
            x: '295',
            y: '273',
          },
        ]);
        expect(spy).toHaveBeenLastCalledWith([0, 180]);
      });

      it('should only display domain of data with matching xAxisId', () => {
        const reduxDefaultDomainSpy = vi.fn();
        const reduxDomainSpyA = vi.fn();
        const reduxDomainSpyB = vi.fn();
        const { container } = render(
          <LineChart width={300} height={300}>
            <Line data={data1} xAxisId="xa" />
            <Line data={data2} xAxisId="xb" />
            <XAxis dataKey="x" type="number" xAxisId="xa" />
            <XAxis dataKey="x" type="number" xAxisId="xb" />
            <Customized component={<ExpectAxisDomain assert={reduxDefaultDomainSpy} axisType="xAxis" />} />
            <Customized component={<ExpectAxisDomain assert={reduxDomainSpyA} axisType="xAxis" axisId="xa" />} />
            <Customized component={<ExpectAxisDomain assert={reduxDomainSpyB} axisType="xAxis" axisId="xb" />} />
          </LineChart>,
        );
        const allXAxes = container.querySelectorAll('.recharts-xAxis');
        expect(allXAxes).toHaveLength(2);
        expectXAxisTicks(allXAxes[0], [
          {
            textContent: '0',
            x: '5',
            y: '243',
          },
          {
            textContent: '45',
            x: '77.5',
            y: '243',
          },
          {
            textContent: '90',
            x: '150',
            y: '243',
          },
          {
            textContent: '135',
            x: '222.5',
            y: '243',
          },
          {
            textContent: '180',
            x: '295',
            y: '243',
          },
        ]);
        expectXAxisTicks(allXAxes[1], [
          {
            textContent: '0',
            x: '5',
            y: '273',
          },
          {
            textContent: '40',
            x: '77.5',
            y: '273',
          },
          {
            textContent: '80',
            x: '150',
            y: '273',
          },
          {
            textContent: '120',
            x: '222.5',
            y: '273',
          },
          {
            textContent: '160',
            x: '295',
            y: '273',
          },
        ]);
        expect(reduxDefaultDomainSpy).toHaveBeenLastCalledWith(undefined);
        expect(reduxDomainSpyA).toHaveBeenLastCalledWith([0, 180]);
        expect(reduxDomainSpyB).toHaveBeenLastCalledWith([0, 160]);
      });

      it('should only display domain of data with matching xAxisId, and dataMin dataMax domains', () => {
        const reduxDefaultDomainSpy = vi.fn();
        const reduxDomainSpyA = vi.fn();
        const reduxDomainSpyB = vi.fn();
        const { container } = render(
          <LineChart width={300} height={300}>
            <Line data={data1} xAxisId="xa" />
            <Line data={data2} xAxisId="xb" />
            <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} xAxisId="xa" />
            <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} xAxisId="xb" />
            <Customized component={<ExpectAxisDomain assert={reduxDefaultDomainSpy} axisType="xAxis" />} />
            <Customized component={<ExpectAxisDomain assert={reduxDomainSpyA} axisType="xAxis" axisId="xa" />} />
            <Customized component={<ExpectAxisDomain assert={reduxDomainSpyB} axisType="xAxis" axisId="xb" />} />
          </LineChart>,
        );
        const allXAxes = container.querySelectorAll('.recharts-xAxis');
        expect(allXAxes).toHaveLength(2);
        expectXAxisTicks(allXAxes[0], [
          {
            textContent: '100',
            x: '5',
            y: '243',
          },
          {
            textContent: '120',
            x: '87.85714285714285',
            y: '243',
          },
          {
            textContent: '140',
            x: '170.7142857142857',
            y: '243',
          },
          {
            textContent: '170',
            x: '295',
            y: '243',
          },
        ]);
        expectXAxisTicks(allXAxes[1], [
          {
            textContent: '110',
            x: '5',
            y: '273',
          },
          {
            textContent: '120',
            x: '77.5',
            y: '273',
          },
          {
            textContent: '130',
            x: '150',
            y: '273',
          },
          {
            textContent: '140',
            x: '222.5',
            y: '273',
          },
          {
            textContent: '150',
            x: '295',
            y: '273',
          },
        ]);
        expect(reduxDefaultDomainSpy).toHaveBeenLastCalledWith(undefined);
        expect(reduxDomainSpyA).toHaveBeenLastCalledWith([100, 170]);
        expect(reduxDomainSpyB).toHaveBeenLastCalledWith([110, 150]);
      });
    });

    describe('allowDecimals', () => {
      it('should show decimals in small numbers by default', () => {
        const spy = vi.fn();
        const { container } = render(
          <BarChart width={300} height={300} data={dataWithSmallNumbers}>
            <XAxis dataKey="x" type="number" />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </BarChart>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '0',
            x: '5',
            y: '273',
          },
          {
            textContent: '0.25',
            x: '77.5',
            y: '273',
          },
          {
            textContent: '0.5',
            x: '150',
            y: '273',
          },
          {
            textContent: '0.75',
            x: '222.5',
            y: '273',
          },
          {
            textContent: '1',
            x: '295',
            y: '273',
          },
        ]);
        expect(spy).toHaveBeenLastCalledWith([0, 1]);
      });

      it('should not allow decimals in small numbers if allowDecimals is false', () => {
        const spy = vi.fn();
        const { container } = render(
          <BarChart width={300} height={300} data={dataWithSmallNumbers}>
            <XAxis dataKey="x" type="number" allowDecimals={false} />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </BarChart>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '0',
            x: '5',
            y: '273',
          },
          {
            textContent: '1',
            x: '77.5',
            y: '273',
          },
          {
            textContent: '2',
            x: '150',
            y: '273',
          },
          {
            textContent: '3',
            x: '222.5',
            y: '273',
          },
          {
            textContent: '4',
            x: '295',
            y: '273',
          },
        ]);
        expect(spy).toHaveBeenLastCalledWith([0, 4]);
      });

      it.each([true, false, undefined])(
        'should generate nice rounded ticks even if the data has decimals in it with allowDecimals=%s',
        allowDecimals => {
          const spy = vi.fn();
          const { container } = render(
            <BarChart width={300} height={300} data={dataWithDecimalNumbers}>
              <XAxis dataKey="x" type="number" allowDecimals={allowDecimals} />
              <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
            </BarChart>,
          );
          expectXAxisTicks(container, [
            {
              textContent: '0',
              x: '5',
              y: '273',
            },
            {
              textContent: '4',
              x: '77.5',
              y: '273',
            },
            {
              textContent: '8',
              x: '150',
              y: '273',
            },
            {
              textContent: '12',
              x: '222.5',
              y: '273',
            },
            {
              textContent: '16',
              x: '295',
              y: '273',
            },
          ]);
          expect(spy).toHaveBeenLastCalledWith([0, 16]);
        },
      );
    });

    describe('interval', () => {
      it('should display all ticks with interval = 0', () => {
        const spy = vi.fn();
        const { container } = render(
          <BarChart width={300} height={300} data={data}>
            <XAxis dataKey="x" type="number" interval={0} />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </BarChart>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '0',
            x: '5',
            y: '273',
          },
          {
            textContent: '45',
            x: '77.5',
            y: '273',
          },
          {
            textContent: '90',
            x: '150',
            y: '273',
          },
          {
            textContent: '135',
            x: '222.5',
            y: '273',
          },
          {
            textContent: '180',
            x: '295',
            y: '273',
          },
        ]);
        expect(spy).toHaveBeenLastCalledWith([0, 180]);
      });

      it('should display every second tick with interval = 1', () => {
        const spy = vi.fn();
        const { container } = render(
          <BarChart width={300} height={300} data={data}>
            <XAxis dataKey="x" type="number" interval={1} />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </BarChart>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '0',
            x: '5',
            y: '273',
          },
          {
            textContent: '90',
            x: '150',
            y: '273',
          },
          {
            textContent: '180',
            x: '295',
            y: '273',
          },
        ]);
        expect(spy).toHaveBeenLastCalledWith([0, 180]);
      });

      it('should display every third tick with interval = 2', () => {
        const spy = vi.fn();
        const { container } = render(
          <BarChart width={300} height={300} data={data}>
            <XAxis dataKey="x" type="number" interval={2} />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </BarChart>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '0',
            x: '5',
            y: '273',
          },
          {
            textContent: '135',
            x: '222.5',
            y: '273',
          },
        ]);
        expect(spy).toHaveBeenLastCalledWith([0, 180]);
      });

      it('should add more ticks with tickCount and then reduce them again with interval', () => {
        const spy = vi.fn();
        const { container } = render(
          <BarChart width={300} height={300} data={data}>
            <XAxis dataKey="x" type="number" tickCount={20} interval={2} />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </BarChart>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '0',
            x: '5',
            y: '273',
          },
          {
            textContent: '27',
            x: '50.78947368421052',
            y: '273',
          },
          {
            textContent: '54',
            x: '96.57894736842104',
            y: '273',
          },
          {
            textContent: '81',
            x: '142.36842105263156',
            y: '273',
          },
          {
            textContent: '108',
            x: '188.15789473684208',
            y: '273',
          },
          {
            textContent: '135',
            x: '233.94736842105263',
            y: '273',
          },
          {
            textContent: '162',
            x: '279.7368421052631',
            y: '273',
          },
        ]);
        expect(spy).toHaveBeenLastCalledWith([0, 171]);
      });

      it('should attempt to show the ticks start with interval = preserveStart', () => {
        const { container } = render(
          <BarChart width={30} height={300} data={data}>
            <XAxis dataKey="x" type="number" interval="preserveStart" tickCount={20} />
          </BarChart>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '0',
            x: '5',
            y: '273',
          },
          {
            textContent: '45',
            x: '10.263157894736842',
            y: '273',
          },
          {
            textContent: '90',
            x: '15.526315789473683',
            y: '273',
          },
          {
            textContent: '135',
            x: '20.789473684210527',
            y: '273',
          },
        ]);
      });

      it('should attempt to show the ticks end with interval = preserveEnd', () => {
        const { container } = render(
          <BarChart width={30} height={300} data={data}>
            <XAxis dataKey="x" type="number" interval="preserveEnd" tickCount={20} />
          </BarChart>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '36',
            x: '9.210526315789473',
            y: '273',
          },
          {
            textContent: '81',
            x: '14.473684210526315',
            y: '273',
          },
          {
            textContent: '126',
            x: '19.736842105263158',
            y: '273',
          },
          {
            textContent: '171',
            x: '25',
            y: '273',
          },
        ]);
      });

      it('should attempt to show the ticks start and end with interval = preserveStartEnd', () => {
        const { container } = render(
          <BarChart width={30} height={300} data={data}>
            <XAxis dataKey="x" type="number" interval="preserveStartEnd" tickCount={20} />
          </BarChart>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '0',
            x: '5',
            y: '273',
          },
          {
            textContent: '45',
            x: '10.263157894736842',
            y: '273',
          },
          {
            textContent: '90',
            x: '15.526315789473683',
            y: '273',
          },
          {
            textContent: '171',
            x: '25',
            y: '273',
          },
        ]);
      });

      it('should do ... same thing as preserveStart? with interval = equidistantPreserveStart', () => {
        const { container } = render(
          <BarChart width={30} height={300} data={data}>
            <XAxis dataKey="x" type="number" interval="equidistantPreserveStart" tickCount={20} />
          </BarChart>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '0',
            x: '5',
            y: '273',
          },
          {
            textContent: '45',
            x: '10.263157894736842',
            y: '273',
          },
          {
            textContent: '90',
            x: '15.526315789473683',
            y: '273',
          },
          {
            textContent: '135',
            x: '20.789473684210527',
            y: '273',
          },
        ]);
      });
    });
  });

  describe('categorical domain', () => {
    it('should list items as literals and do not sort', () => {
      const spy = vi.fn();
      const { container } = render(
        <BarChart width={300} height={300} data={data}>
          <XAxis dataKey="x" type="category" />
          <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
        </BarChart>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '100',
          x: '29.166666666666668',
          y: '273',
        },
        {
          textContent: '120',
          x: '77.5',
          y: '273',
        },
        {
          textContent: '170',
          x: '125.83333333333334',
          y: '273',
        },
        {
          textContent: '140',
          x: '174.16666666666666',
          y: '273',
        },
        {
          textContent: '150',
          x: '222.5',
          y: '273',
        },
        {
          textContent: '110',
          x: '270.83333333333337',
          y: '273',
        },
      ]);
      expect(spy).toHaveBeenLastCalledWith([100, 120, 170, 140, 150, 110]);
    });

    it('should reverse ticks', () => {
      const spy = vi.fn();
      const { container } = render(
        <BarChart width={300} height={300} data={data}>
          <XAxis dataKey="x" type="category" reversed />
          <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
        </BarChart>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '100',
          x: '270.83333333333337',
          y: '273',
        },
        {
          textContent: '120',
          x: '222.5',
          y: '273',
        },
        {
          textContent: '170',
          x: '174.16666666666666',
          y: '273',
        },
        {
          textContent: '140',
          x: '125.83333333333334',
          y: '273',
        },
        {
          textContent: '150',
          x: '77.5',
          y: '273',
        },
        {
          textContent: '110',
          x: '29.166666666666668',
          y: '273',
        },
      ]);
      expect(spy).toHaveBeenLastCalledWith([100, 120, 170, 140, 150, 110]);
    });

    it.each([undefined, true])(
      'should replace domain of duplicates with array indexes when allowDuplicatedCategory=%s',
      allowDuplicatedCategory => {
        const spy = vi.fn();
        const { container } = render(
          <BarChart width={300} height={300} data={data}>
            <XAxis dataKey="z" type="category" allowDuplicatedCategory={allowDuplicatedCategory} />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </BarChart>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '200',
            x: '29.166666666666668',
            y: '273',
          },
          {
            textContent: '260',
            x: '77.5',
            y: '273',
          },
          {
            textContent: '400',
            x: '125.83333333333334',
            y: '273',
          },
          {
            textContent: '280',
            x: '174.16666666666666',
            y: '273',
          },
          {
            textContent: '500',
            x: '222.5',
            y: '273',
          },
          {
            textContent: '200',
            x: '270.83333333333337',
            y: '273',
          },
        ]);
        expect(spy).toHaveBeenLastCalledWith([0, 1, 2, 3, 4, 5]);
      },
    );

    it('should remove duplicates from the end when allowDuplicatedCategory=false', () => {
      const spy = vi.fn();
      const { container } = render(
        <BarChart width={300} height={300} data={data}>
          <XAxis dataKey="z" type="category" allowDuplicatedCategory={false} />
          <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
        </BarChart>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '200',
          x: '34',
          y: '273',
        },
        {
          textContent: '260',
          x: '92',
          y: '273',
        },
        {
          textContent: '400',
          x: '150',
          y: '273',
        },
        {
          textContent: '280',
          x: '208',
          y: '273',
        },
        {
          textContent: '500',
          x: '266',
          y: '273',
        },
      ]);
      expect(spy).toHaveBeenLastCalledWith([200, 260, 400, 280, 500]);
    });

    it.each([undefined, 0, -1, 3, 7, 100, Infinity, NaN])('should ignore tickCount = %s', tickCount => {
      const spy = vi.fn();
      const { container } = render(
        <BarChart width={300} height={300} data={data}>
          <XAxis dataKey="z" type="category" tickCount={tickCount} />
          <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
        </BarChart>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '200',
          x: '29.166666666666668',
          y: '273',
        },
        {
          textContent: '260',
          x: '77.5',
          y: '273',
        },
        {
          textContent: '400',
          x: '125.83333333333334',
          y: '273',
        },
        {
          textContent: '280',
          x: '174.16666666666666',
          y: '273',
        },
        {
          textContent: '500',
          x: '222.5',
          y: '273',
        },
        {
          textContent: '200',
          x: '270.83333333333337',
          y: '273',
        },
      ]);
      expect(spy).toHaveBeenLastCalledWith([0, 1, 2, 3, 4, 5]);
    });

    const variousDomains: ReadonlyArray<{ domain: ReadonlyArray<string> | ReadonlyArray<number> | undefined }> = [
      { domain: undefined },
      { domain: [0, 100] },
      { domain: ['Winter', 'Summer'] },
      { domain: ['200', '400', '500', '200'] },
      { domain: ['200', '260', '400', '280', '500', '200', '100', '600'] },
    ];

    it.each(variousDomains)('should ignore user provided domain $domain', ({ domain }) => {
      const spy = vi.fn();
      const { container } = render(
        <BarChart width={300} height={300} data={data}>
          <XAxis dataKey="z" type="category" domain={domain} />
          <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
        </BarChart>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '200',
          x: '29.166666666666668',
          y: '273',
        },
        {
          textContent: '260',
          x: '77.5',
          y: '273',
        },
        {
          textContent: '400',
          x: '125.83333333333334',
          y: '273',
        },
        {
          textContent: '280',
          x: '174.16666666666666',
          y: '273',
        },
        {
          textContent: '500',
          x: '222.5',
          y: '273',
        },
        {
          textContent: '200',
          x: '270.83333333333337',
          y: '273',
        },
      ]);
      expect(spy).toHaveBeenLastCalledWith([0, 1, 2, 3, 4, 5]);
    });

    describe.each([true, false, undefined])('allowDecimals=%s', () => {
      const spy = vi.fn();
      it('should have no effect whatsoever on small numbers', () => {
        const { container } = render(
          <BarChart width={300} height={300} data={dataWithSmallNumbers}>
            <XAxis dataKey="x" type="category" allowDecimals={false} />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </BarChart>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '0.1',
            x: '34',
            y: '273',
          },
          {
            textContent: '0.3',
            x: '92',
            y: '273',
          },
          {
            textContent: '0.5',
            x: '150',
            y: '273',
          },
          {
            textContent: '0.7',
            x: '208',
            y: '273',
          },
          {
            textContent: '0.9',
            x: '266',
            y: '273',
          },
        ]);
        expect(spy).toHaveBeenLastCalledWith([0.1, 0.3, 0.5, 0.7, 0.9]);
      });

      it('should have no effect whatsoever on decimal numbers', () => {
        const reduxDomainSpy = vi.fn();
        const { container } = render(
          <BarChart width={300} height={300} data={dataWithDecimalNumbers}>
            <XAxis dataKey="x" type="category" allowDecimals={false} />
            <Customized component={<ExpectAxisDomain assert={reduxDomainSpy} axisType="xAxis" />} />
          </BarChart>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '4.1',
            x: '34',
            y: '273',
          },
          {
            textContent: '6.3',
            x: '92',
            y: '273',
          },
          {
            textContent: '12.5',
            x: '150',
            y: '273',
          },
          {
            textContent: '3.7',
            x: '208',
            y: '273',
          },
          {
            textContent: '7.9',
            x: '266',
            y: '273',
          },
        ]);
        expect(reduxDomainSpy).toHaveBeenLastCalledWith([4.1, 6.3, 12.5, 3.7, 7.9]);
      });
    });

    describe('when data is defined on multiple graphical elements', () => {
      const data1 = data.slice(0, 3);
      const data2 = data.slice(3);

      it('should merge and display domain of all data', () => {
        const spy = vi.fn();
        const { container } = render(
          <LineChart width={300} height={300}>
            <Line data={data1} />
            <Line data={data2} />
            <XAxis dataKey="z" type="category" />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </LineChart>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '200',
            x: '5',
            y: '273',
          },
          {
            textContent: '260',
            x: '63',
            y: '273',
          },
          {
            textContent: '400',
            x: '121',
            y: '273',
          },
          {
            textContent: '280',
            x: '179',
            y: '273',
          },
          {
            textContent: '500',
            x: '237',
            y: '273',
          },
          {
            textContent: '200',
            x: '295',
            y: '273',
          },
        ]);
        expect(spy).toHaveBeenLastCalledWith([0, 1, 2, 3, 4, 5]);
      });

      it('should merge and display domain of all data, and remove duplicates, even when the duplicates are defined on different elements', () => {
        const spy = vi.fn();
        const { container } = render(
          <LineChart width={300} height={300}>
            <Line data={data1} />
            <Line data={data2} />
            <XAxis dataKey="z" type="category" allowDuplicatedCategory={false} />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </LineChart>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '200',
            x: '5',
            y: '273',
          },
          {
            textContent: '260',
            x: '77.5',
            y: '273',
          },
          {
            textContent: '400',
            x: '150',
            y: '273',
          },
          {
            textContent: '280',
            x: '222.5',
            y: '273',
          },
          {
            textContent: '500',
            x: '295',
            y: '273',
          },
        ]);
        expect(spy).toHaveBeenLastCalledWith([200, 260, 400, 280, 500]);
      });

      it.each([true, false, undefined])(
        'should only display domain of data with matching xAxisId when allowDuplicatedCategory=%s',
        allowDuplicatedCategory => {
          const defaultReduxDomainSpy = vi.fn();
          const reduxDomainSpyA = vi.fn();
          const reduxDomainSpyB = vi.fn();
          const { container } = render(
            <LineChart width={300} height={300}>
              <Line data={data1} xAxisId="xa" />
              <Line data={data2} xAxisId="xb" />
              <XAxis dataKey="z" type="category" xAxisId="xa" allowDuplicatedCategory={allowDuplicatedCategory} />
              <XAxis dataKey="z" type="category" xAxisId="xb" allowDuplicatedCategory={allowDuplicatedCategory} />
              <Customized component={<ExpectAxisDomain assert={defaultReduxDomainSpy} axisType="xAxis" />} />
              <Customized component={<ExpectAxisDomain assert={reduxDomainSpyA} axisType="xAxis" axisId="xa" />} />
              <Customized component={<ExpectAxisDomain assert={reduxDomainSpyB} axisType="xAxis" axisId="xb" />} />
            </LineChart>,
          );
          const allXAxes = container.querySelectorAll('.recharts-xAxis');
          expect(allXAxes).toHaveLength(2);
          expectXAxisTicks(allXAxes[0], [
            {
              textContent: '200',
              x: '5',
              y: '243',
            },
            {
              textContent: '260',
              x: '150',
              y: '243',
            },
            {
              textContent: '400',
              x: '295',
              y: '243',
            },
          ]);
          expectXAxisTicks(allXAxes[1], [
            {
              textContent: '280',
              x: '5',
              y: '273',
            },
            {
              textContent: '500',
              x: '150',
              y: '273',
            },
            {
              textContent: '200',
              x: '295',
              y: '273',
            },
          ]);
          expect(defaultReduxDomainSpy).toHaveBeenLastCalledWith(undefined);
          expect(reduxDomainSpyA).toHaveBeenLastCalledWith([200, 260, 400]);
          expect(reduxDomainSpyB).toHaveBeenLastCalledWith([280, 500, 200]);
        },
      );
    });

    describe('interval', () => {
      it('should display all ticks when interval = 0', () => {
        const axisDomainSpy = vi.fn();
        const { container } = render(
          <BarChart width={300} height={300} data={data}>
            <XAxis dataKey="z" type="category" interval={0} />
            <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
          </BarChart>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '200',
            x: '29.166666666666668',
            y: '273',
          },
          {
            textContent: '260',
            x: '77.5',
            y: '273',
          },
          {
            textContent: '400',
            x: '125.83333333333334',
            y: '273',
          },
          {
            textContent: '280',
            x: '174.16666666666666',
            y: '273',
          },
          {
            textContent: '500',
            x: '222.5',
            y: '273',
          },
          {
            textContent: '200',
            x: '270.83333333333337',
            y: '273',
          },
        ]);
        expect(axisDomainSpy).toHaveBeenLastCalledWith([0, 1, 2, 3, 4, 5]);
      });

      it('should display every second tick when interval = 1', () => {
        const axisDomainSpy = vi.fn();
        const { container } = render(
          <BarChart width={300} height={300} data={data}>
            <XAxis dataKey="z" type="category" interval={1} />
            <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
          </BarChart>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '200',
            x: '29.166666666666668',
            y: '273',
          },
          {
            textContent: '400',
            x: '125.83333333333334',
            y: '273',
          },
          {
            textContent: '500',
            x: '222.5',
            y: '273',
          },
        ]);
        expect(axisDomainSpy).toHaveBeenLastCalledWith([0, 1, 2, 3, 4, 5]);
      });

      it('should display every third tick when interval = 2', () => {
        const axisDomainSpy = vi.fn();
        const { container } = render(
          <BarChart width={300} height={300} data={data}>
            <XAxis dataKey="z" type="category" interval={2} />
            <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
          </BarChart>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '200',
            x: '29.166666666666668',
            y: '273',
          },
          {
            textContent: '280',
            x: '174.16666666666666',
            y: '273',
          },
        ]);
        expect(axisDomainSpy).toHaveBeenLastCalledWith([0, 1, 2, 3, 4, 5]);
      });

      it('should attempt to show the ticks start with interval = preserveStart', () => {
        const axisDomainSpy = vi.fn();
        const { container } = render(
          <BarChart width={30} height={300} data={data}>
            <XAxis dataKey="x" type="category" interval="preserveStart" tickCount={20} />
            <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
          </BarChart>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '100',
            x: '6.666666666666667',
            y: '273',
          },
          {
            textContent: '170',
            x: '13.333333333333334',
            y: '273',
          },
          {
            textContent: '150',
            x: '20.000000000000004',
            y: '273',
          },
        ]);
        expect(axisDomainSpy).toHaveBeenLastCalledWith([100, 120, 170, 140, 150, 110]);
      });

      it('should attempt to show the ticks end with interval = preserveEnd', () => {
        const spy = vi.fn();
        const { container } = render(
          <BarChart width={30} height={300} data={data}>
            <XAxis dataKey="x" type="category" interval="preserveEnd" tickCount={20} />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </BarChart>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '120',
            x: '10',
            y: '273',
          },
          {
            textContent: '140',
            x: '16.666666666666668',
            y: '273',
          },
          {
            textContent: '110',
            x: '23.333333333333336',
            y: '273',
          },
        ]);
        expect(spy).toHaveBeenLastCalledWith([100, 120, 170, 140, 150, 110]);
      });

      it('should attempt to show the ticks start and end with interval = preserveStartEnd', () => {
        const spy = vi.fn();
        const { container } = render(
          <BarChart width={30} height={300} data={data}>
            <XAxis dataKey="x" type="category" interval="preserveStartEnd" tickCount={20} />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </BarChart>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '100',
            x: '6.666666666666667',
            y: '273',
          },
          {
            textContent: '170',
            x: '13.333333333333334',
            y: '273',
          },
          {
            textContent: '110',
            x: '23.333333333333336',
            y: '273',
          },
        ]);
        expect(spy).toHaveBeenLastCalledWith([100, 120, 170, 140, 150, 110]);
      });

      it('should do ... same thing as preserveStart? with interval = equidistantPreserveStart', () => {
        const spy = vi.fn();
        const { container } = render(
          <BarChart width={30} height={300} data={data}>
            <XAxis dataKey="x" type="category" interval="equidistantPreserveStart" tickCount={20} />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </BarChart>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '100',
            x: '6.666666666666667',
            y: '273',
          },
          {
            textContent: '170',
            x: '13.333333333333334',
            y: '273',
          },
          {
            textContent: '150',
            x: '20.000000000000004',
            y: '273',
          },
        ]);
        expect(spy).toHaveBeenLastCalledWith([100, 120, 170, 140, 150, 110]);
      });
    });
  });

  describe('brush and startIndex + endIndex', () => {
    it('should hide ticks when Brush travellers move', () => {
      const axisDomainSpy = vi.fn();
      const { container, rerender } = render(
        <BarChart width={300} height={300} data={data}>
          <XAxis dataKey="x" type="category" />
          <Brush />
          <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
        </BarChart>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '100',
          x: '29.166666666666668',
          y: '233',
        },
        {
          textContent: '120',
          x: '77.5',
          y: '233',
        },
        {
          textContent: '170',
          x: '125.83333333333334',
          y: '233',
        },
        {
          textContent: '140',
          x: '174.16666666666666',
          y: '233',
        },
        {
          textContent: '150',
          x: '222.5',
          y: '233',
        },
        {
          textContent: '110',
          x: '270.83333333333337',
          y: '233',
        },
      ]);
      expect(axisDomainSpy).toHaveBeenLastCalledWith([100, 120, 170, 140, 150, 110]);

      rerender(
        <BarChart width={300} height={300} data={data}>
          <XAxis dataKey="x" type="category" />
          <Brush startIndex={1} endIndex={4} />
          <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
        </BarChart>,
      );

      expectXAxisTicks(container, [
        {
          textContent: '120',
          x: '41.25',
          y: '233',
        },
        {
          textContent: '170',
          x: '113.75',
          y: '233',
        },
        {
          textContent: '140',
          x: '186.25',
          y: '233',
        },
        {
          textContent: '150',
          x: '258.75',
          y: '233',
        },
      ]);
      expect(axisDomainSpy).toHaveBeenLastCalledWith([120, 170, 140, 150]);
    });
  });

  describe('layout=vertical', () => {
    it.each(['category', undefined])(
      'should render categorical XAxis when type=%s',
      (axisDomainType: AxisDomainType) => {
        const axisDomainSpy = vi.fn();
        const { container } = render(
          <BarChart width={300} height={300} layout="vertical" data={data}>
            <XAxis dataKey="z" type={axisDomainType} />
            <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
          </BarChart>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '200',
            x: '34',
            y: '273',
          },
          {
            textContent: '260',
            x: '92',
            y: '273',
          },
          {
            textContent: '400',
            x: '150',
            y: '273',
          },
          {
            textContent: '280',
            x: '208',
            y: '273',
          },
          {
            textContent: '500',
            x: '266',
            y: '273',
          },
        ]);
        expect(axisDomainSpy).toHaveBeenLastCalledWith([200, 260, 400, 280, 500]);
      },
    );

    it.each(['category', undefined])(
      'should render categorical XAxis, but ignore allowDuplicatedCategory when type=%s',
      (axisDomainType: AxisDomainType) => {
        const axisDomainSpy = vi.fn();
        const { container } = render(
          <BarChart width={300} height={300} layout="vertical" data={data}>
            <XAxis dataKey="z" type={axisDomainType} allowDuplicatedCategory />
            <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
          </BarChart>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '200',
            x: '34',
            y: '273',
          },
          {
            textContent: '260',
            x: '92',
            y: '273',
          },
          {
            textContent: '400',
            x: '150',
            y: '273',
          },
          {
            textContent: '280',
            x: '208',
            y: '273',
          },
          {
            textContent: '500',
            x: '266',
            y: '273',
          },
        ]);
        expect(axisDomainSpy).toHaveBeenLastCalledWith([200, 260, 400, 280, 500]);
      },
    );

    it('should allow switching to number', () => {
      const axisDomainSpy = vi.fn();
      const { container } = render(
        <BarChart width={300} height={300} layout="vertical" data={data}>
          <XAxis dataKey="z" type="number" />
          <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
        </BarChart>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '0',
          x: '5',
          y: '273',
        },
        {
          textContent: '150',
          x: '77.5',
          y: '273',
        },
        {
          textContent: '300',
          x: '150',
          y: '273',
        },
        {
          textContent: '450',
          x: '222.5',
          y: '273',
        },
        {
          textContent: '600',
          x: '295',
          y: '273',
        },
      ]);
      expect(axisDomainSpy).toHaveBeenLastCalledWith([0, 600]);
    });

    it('should render with in LineChart VerticalWithSpecifiedDomain', () => {
      const axisDomainSpy = vi.fn();
      const axisSettingsSpy = vi.fn();
      const displayedDataSpy = vi.fn();
      const itemDataSpy = vi.fn();
      const Comp = (): null => {
        axisSettingsSpy(useAppSelector(state => selectAxisSettings(state, 'xAxis', 0)));
        displayedDataSpy(useAppSelector(state => selectDisplayedData(state, 'xAxis', 0)));
        itemDataSpy(useAppSelector(state => selectCartesianGraphicalItemsData(state, 'xAxis', 0)));
        return null;
      };
      const { container } = render(
        <LineChart
          layout="vertical"
          width={500}
          height={300}
          data={pageData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 'dataMax + 1000']} />
          <YAxis dataKey="name" type="category" />
          <Legend />
          <Line dataKey="pv" stroke="#8884d8" />
          <Line dataKey="uv" stroke="#82ca9d" />
          <Tooltip />
          <Customized component={<Comp />} />
          <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
        </LineChart>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '0',
          x: '80',
          y: '273',
        },
        {
          textContent: '650',
          x: '180.59523809523813',
          y: '273',
        },
        {
          textContent: '1300',
          x: '281.1904761904762',
          y: '273',
        },
        {
          textContent: '2520',
          x: '470',
          y: '273',
        },
      ]);
      const expectedSettings: XAxisSettings = {
        mirror: false,
        orientation: 'bottom',
        height: 30,
        ticks: undefined,
        includeHidden: false,
        allowDataOverflow: false,
        allowDecimals: true,
        allowDuplicatedCategory: true,
        dataKey: undefined,
        domain: [0, 'dataMax + 1000'],
        id: 0,
        padding: {
          left: 0,
          right: 0,
        },
        scale: 'auto',
        tickCount: 5,
        type: 'number',
        reversed: false,
      };
      expect(axisSettingsSpy).toHaveBeenLastCalledWith(expectedSettings);
      expect(itemDataSpy).toHaveBeenLastCalledWith([]);
      expect(itemDataSpy).toHaveBeenCalledTimes(3);
      expect(displayedDataSpy).toHaveBeenLastCalledWith(pageData);
      // oof
      expect(axisDomainSpy).toHaveBeenCalledTimes(21);
      expect(axisDomainSpy).toHaveBeenLastCalledWith([0, 2520]);
    });
  });

  describe.todo('in vertical stacked BarChart');
  describe.todo('with custom tickFormatter');
});
