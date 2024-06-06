import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Bar, BarChart, Customized, Line, LineChart, Scatter, ScatterChart, XAxis, YAxis } from '../../src';
import { selectAxisSettings } from '../../src/state/axisSelectors';
import { useAppSelector } from '../../src/state/hooks';
import { ExpectAxisDomain, expectXAxisTicks } from '../helper/expectAxisTicks';
import { XAxisSettings } from '../../src/state/axisMapSlice';
import { assertNotNull } from '../helper/assertNotNull';

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
    const spy = vi.fn();
    const { container } = render(
      <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey="x" name="stature" unit="cm" />
        <YAxis dataKey="y" name="weight" unit="kg" />
        <Scatter name="A school" data={data} fill="#ff7300" />
        <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
      </ScatterChart>,
    );

    expect(container.querySelectorAll('.recharts-cartesian-axis-line')).toHaveLength(2);
    expect(spy).toHaveBeenLastCalledWith([100, 120, 170, 140, 150, 110]);
  });

  it('should throw when attempting to render outside of Chart', () => {
    expect(() => render(<XAxis dataKey="x" name="stature" unit="cm" />)).toThrow(
      'Invariant failed: Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?',
    );
  });

  it("Don't render x-axis when hide is set to be true", () => {
    const spy = vi.fn();
    const { container } = render(
      <LineChart width={400} height={400} data={lineData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis hide />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
      </LineChart>,
    );

    expect(container.querySelectorAll('.xAxis .recharts-xAxis')).toHaveLength(0);
    expect(spy).toHaveBeenLastCalledWith(['', '', '', '', '', '', '']);
  });

  it('Render ticks of XAxis when specify ticks', () => {
    const spy = vi.fn();
    const { container } = render(
      <LineChart width={400} height={400} data={lineData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis ticks={[0, 4]} />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
      </LineChart>,
    );

    expect(container.querySelectorAll('.xAxis .recharts-cartesian-axis-tick')).toHaveLength(2);
    expectXAxisTicks(container, ['0', '4']);
    expect(spy).toHaveBeenLastCalledWith(['', '', '', '', '', '', '']);
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
    expectXAxisTicks(container, ['0', '1', '2', '3', '4', '5']);
    expect(spy).toHaveBeenLastCalledWith(['', 'Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F']);
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
    expectXAxisTicks(container, ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F']);
    expect(spy).toHaveBeenLastCalledWith(['', 'Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F']);
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
      'Thu Jul 04 2019 00:00:00 GMT+0000 (Coordinated Universal Time)',
      'Fri Jul 05 2019 00:00:00 GMT+0000 (Coordinated Universal Time)',
      'Sat Jul 06 2019 00:00:00 GMT+0000 (Coordinated Universal Time)',
      'Sun Jul 07 2019 00:00:00 GMT+0000 (Coordinated Universal Time)',
      'Mon Jul 08 2019 00:00:00 GMT+0000 (Coordinated Universal Time)',
      'Tue Jul 09 2019 00:00:00 GMT+0000 (Coordinated Universal Time)',
      'Wed Jul 10 2019 00:00:00 GMT+0000 (Coordinated Universal Time)',
    ]);
    expect(spy).toHaveBeenLastCalledWith([1562198400000, 1562716800000]);
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
    expect(parseInt(bar.getAttribute('x') as string, 10)).toEqual(70);
    expect(spy).toHaveBeenLastCalledWith([100, 170]);
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
    expect(parseInt(bar.getAttribute('x') as string, 10)).toEqual(66);
    expectXAxisTicks(container, ['100', '120', '140', '170']);
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
    expectXAxisTicks(container, ['100']);
    expect(spy).toHaveBeenLastCalledWith([100, 100]);
  });

  it('Should render the YAxis line without any ticks', () => {
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
    expectXAxisTicks(container, ['50', '75', '100', '125', '150']);
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
    expectXAxisTicks(container, ['100', '115', '130', '150']);
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
          <XAxis xAxisId="foo" scale="log" type="number" />
          <Customized component={Comp} />
        </BarChart>,
      );
      expect(container.querySelector('.xAxis')).toBeVisible();
      expect(spy).toHaveBeenCalledTimes(3);
      const expectedSettings: XAxisSettings = {
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
            left: 0,
            right: 0,
          },
          allowDecimals: true,
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
        expectXAxisTicks(container, ['0', '45', '90', '135', '180']);
        expect(spy).toHaveBeenLastCalledWith([0, 200]);
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
          expectXAxisTicks(container, ['100', '120', '140', '160', '180']);
          expect(spy).toHaveBeenLastCalledWith([100, 200]);
        });

        it('should render ticks from number, auto', () => {
          const spy = vi.fn();
          const { container } = render(
            <Component>
              <XAxis dataKey="x" type="number" domain={[-55, 'auto']} allowDataOverflow={allowDataOverflow} />
              <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
            </Component>,
          );
          expectXAxisTicks(container, ['-60', '0', '60', '120', '180']);
          expect(spy).toHaveBeenLastCalledWith([-55, 200]);
        });

        it('should render ticks from auto, number', () => {
          const spy = vi.fn();
          const { container } = render(
            <Component>
              <XAxis dataKey="x" type="number" domain={['auto', 555]} allowDataOverflow={allowDataOverflow} />
              <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
            </Component>,
          );
          expectXAxisTicks(container, ['0', '150', '300', '450', '600']);
          expect(spy).toHaveBeenLastCalledWith([100, 555]);
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
        expectXAxisTicks(container, ['-500', '-250', '0', '250', '500']);
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
        expectXAxisTicks(container, ['-100', '-30', '40', '170']);
        expect(spy).toHaveBeenLastCalledWith([-100, 170]);

        rerender(
          <Component>
            <XAxis dataKey="x" type="number" domain={[130, 175]} />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </Component>,
        );
        expectXAxisTicks(container, ['100', '120', '140', '175']);
        expect(spy).toHaveBeenLastCalledWith([100, 175]);

        rerender(
          <Component>
            <XAxis dataKey="x" type="number" domain={[130, 150]} />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </Component>,
        );
        expectXAxisTicks(container, ['100', '120', '140', '170']);
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
        expectXAxisTicks(container, ['100', '120', '140', '170']);
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
        expectXAxisTicks(container, ['100', '75', '50', '25', '0']);
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
        expectXAxisTicks(container, ['150']);
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
        expectXAxisTicks(container, ['0', '25', '50', '75', '100']);
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
        expectXAxisTicks(container, ['0', '30', '60', '90', '120', '150', '180']);
        expect(spy).toHaveBeenLastCalledWith([0, 200]);
      });

      it('should allow providing less tickCount', () => {
        const spy = vi.fn();
        const { container } = render(
          <Component>
            <XAxis dataKey="x" type="number" tickCount={3} />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </Component>,
        );
        expectXAxisTicks(container, ['0', '85', '170']);
        expect(spy).toHaveBeenLastCalledWith([0, 200]);
      });

      it('should make ticks from dataMin, dataMax', () => {
        const spy = vi.fn();
        const { container } = render(
          <Component>
            <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} allowDataOverflow />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </Component>,
        );
        expectXAxisTicks(container, ['100', '120', '140', '170']);
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
        expectXAxisTicks(container, ['100', '120', '140', '170']);
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
        expectXAxisTicks(container, ['-500', '-250', '0', '250', '500']);
        // expect(domainPropSpy).toHaveBeenCalledTimes(12); // TODO this is not stable, sometimes it reports 12 and sometimes it reports 14, investigate and fix - this is because all the dispatches inside generateCategoricalChart context
        expect(domainPropSpy).toHaveBeenCalledWith([100, 170], true);

        rerender(
          <Component>
            <XAxis dataKey="x" type="number" domain={domainPropSpy} allowDataOverflow={false} />
            <Customized component={<ExpectAxisDomain assert={reduxDomainSpy} axisType="xAxis" />} />
          </Component>,
        );
        expectXAxisTicks(container, ['-500', '-250', '0', '250', '500']);
        // hah that's quite a few calls isn't it. TODO let's see if it improves once we remove the old, generateCategoricalChart code path
        // expect(domainPropSpy).toHaveBeenCalledTimes(27); // TODO also not stable, sometimes 24 and sometimes 27, not sure why
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
        expectXAxisTicks(container, ['-500', '-250', '0', '250', '500']);
        // expect(spyMin).toHaveBeenCalledTimes(12); // TODO this is not stable, sometimes it reports 12 and sometimes it reports 14, investigate and fix
        // expect(spyMax).toHaveBeenCalledTimes(12); // TODO this is not stable, sometimes it reports 12 and sometimes it reports 14, investigate and fix
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
        expectXAxisTicks(container, ['-500', '-250', '0', '250', '500']);
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
        expectXAxisTicks(container, ['0', '45', '90', '135', '180']);
        expect(spy).toHaveBeenLastCalledWith([0, 200]);
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
        expectXAxisTicks(allXAxes[0], ['0', '45', '90', '135', '180']);
        expectXAxisTicks(allXAxes[1], ['0', '40', '80', '120', '160']);
        expect(reduxDefaultDomainSpy).toHaveBeenLastCalledWith(undefined);
        // TODO this is a regression - these two axes should have different domains.
        expect(reduxDomainSpyA).toHaveBeenLastCalledWith([0, 200]);
        expect(reduxDomainSpyB).toHaveBeenLastCalledWith([0, 200]);
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
        expectXAxisTicks(allXAxes[0], ['100', '120', '140', '170']);
        expectXAxisTicks(allXAxes[1], ['110', '120', '130', '140', '150']);
        expect(reduxDefaultDomainSpy).toHaveBeenLastCalledWith(undefined);
        // TODO this is a regression - these two axes should have different domains.
        expect(reduxDomainSpyA).toHaveBeenLastCalledWith([100, 170]);
        expect(reduxDomainSpyB).toHaveBeenLastCalledWith([100, 170]);
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
        expectXAxisTicks(container, ['0', '0.25', '0.5', '0.75', '1']);
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
        expectXAxisTicks(container, ['0', '1', '2', '3', '4']);
        expect(spy).toHaveBeenLastCalledWith([0, 5]);
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
          expectXAxisTicks(container, ['0', '4', '8', '12', '16']);
          expect(spy).toHaveBeenLastCalledWith([0, 18]);
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
        expectXAxisTicks(container, ['0', '45', '90', '135', '180']);
        expect(spy).toHaveBeenLastCalledWith([0, 200]);
      });

      it('should display every second tick with interval = 1', () => {
        const spy = vi.fn();
        const { container } = render(
          <BarChart width={300} height={300} data={data}>
            <XAxis dataKey="x" type="number" interval={1} />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </BarChart>,
        );
        expectXAxisTicks(container, ['0', '90', '180']);
        expect(spy).toHaveBeenLastCalledWith([0, 200]);
      });

      it('should display every third tick with interval = 2', () => {
        const spy = vi.fn();
        const { container } = render(
          <BarChart width={300} height={300} data={data}>
            <XAxis dataKey="x" type="number" interval={2} />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </BarChart>,
        );
        expectXAxisTicks(container, ['0', '135']);
        expect(spy).toHaveBeenLastCalledWith([0, 200]);
      });

      it('should add more ticks with tickCount and then reduce them again with interval', () => {
        const spy = vi.fn();
        const { container } = render(
          <BarChart width={300} height={300} data={data}>
            <XAxis dataKey="x" type="number" tickCount={20} interval={2} />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </BarChart>,
        );
        expectXAxisTicks(container, ['0', '27', '54', '81', '108', '135', '162']);
        expect(spy).toHaveBeenLastCalledWith([0, 200]);
      });

      it('should attempt to show the ticks start with interval = preserveStart', () => {
        const { container } = render(
          <BarChart width={30} height={300} data={data}>
            <XAxis dataKey="x" type="number" interval="preserveStart" tickCount={20} />
          </BarChart>,
        );
        expectXAxisTicks(container, ['0', '45', '90', '135']);
      });

      it('should attempt to show the ticks end with interval = preserveEnd', () => {
        const { container } = render(
          <BarChart width={30} height={300} data={data}>
            <XAxis dataKey="x" type="number" interval="preserveEnd" tickCount={20} />
          </BarChart>,
        );
        expectXAxisTicks(container, ['36', '81', '126', '171']);
      });

      it('should attempt to show the ticks start and end with interval = preserveStartEnd', () => {
        const { container } = render(
          <BarChart width={30} height={300} data={data}>
            <XAxis dataKey="x" type="number" interval="preserveStartEnd" tickCount={20} />
          </BarChart>,
        );
        expectXAxisTicks(container, ['0', '45', '90', '171']);
      });

      it('should do ... same thing as preserveStart? with interval = equidistantPreserveStart', () => {
        const { container } = render(
          <BarChart width={30} height={300} data={data}>
            <XAxis dataKey="x" type="number" interval="equidistantPreserveStart" tickCount={20} />
          </BarChart>,
        );
        expectXAxisTicks(container, ['0', '45', '90', '135']);
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
      expectXAxisTicks(container, ['100', '120', '170', '140', '150', '110']);
      expect(spy).toHaveBeenLastCalledWith([100, 120, 170, 140, 150, 110]);
    });

    it.each([undefined, true])('should allow duplicates when allowDuplicatedCategory=%s', allowDuplicatedCategory => {
      const spy = vi.fn();
      const { container } = render(
        <BarChart width={300} height={300} data={data}>
          <XAxis dataKey="z" type="category" allowDuplicatedCategory={allowDuplicatedCategory} />
          <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
        </BarChart>,
      );
      expectXAxisTicks(container, ['200', '260', '400', '280', '500', '200']);
      expect(spy).toHaveBeenLastCalledWith([200, 260, 400, 280, 500, 200]);
    });

    it('should remove duplicates from the end when allowDuplicatedCategory=false', () => {
      const spy = vi.fn();
      const { container } = render(
        <BarChart width={300} height={300} data={data}>
          <XAxis dataKey="z" type="category" allowDuplicatedCategory={false} />
          <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
        </BarChart>,
      );
      expectXAxisTicks(container, ['200', '260', '400', '280', '500']);
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
      expectXAxisTicks(container, ['200', '260', '400', '280', '500', '200']);
      expect(spy).toHaveBeenLastCalledWith([200, 260, 400, 280, 500, 200]);
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
      expectXAxisTicks(container, ['200', '260', '400', '280', '500', '200']);
      expect(spy).toHaveBeenLastCalledWith([200, 260, 400, 280, 500, 200]);
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
        expectXAxisTicks(container, ['0.1', '0.3', '0.5', '0.7', '0.9']);
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
        expectXAxisTicks(container, ['4.1', '6.3', '12.5', '3.7', '7.9']);
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
        expectXAxisTicks(container, ['200', '260', '400', '280', '500', '200']);
        expect(spy).toHaveBeenLastCalledWith([200, 260, 400, 280, 500, 200]);
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
        expectXAxisTicks(container, ['200', '260', '400', '280', '500']);
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
          expectXAxisTicks(allXAxes[0], ['200', '260', '400']);
          expectXAxisTicks(allXAxes[1], ['280', '500', '200']);
          expect(defaultReduxDomainSpy).toHaveBeenLastCalledWith(undefined);
          // TODO regression - these two axes should have different domains
          // expect(reduxDomainSpyA).toHaveBeenLastCalledWith([200, 260, 400, 280, 500, 200]); // TODO this is unstable - sometimes it returns the duplicates and sometimes it does not.
          // expect(reduxDomainSpyB).toHaveBeenLastCalledWith([200, 260, 400, 280, 500, 200]); // TODO this is unstable - sometimes it returns the duplicates and sometimes it does not.
        },
      );
    });

    describe('interval', () => {
      it('should display all ticks when interval = 0', () => {
        const spy = vi.fn();
        const { container } = render(
          <BarChart width={300} height={300} data={data}>
            <XAxis dataKey="z" type="category" interval={0} />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </BarChart>,
        );
        expectXAxisTicks(container, ['200', '260', '400', '280', '500', '200']);
        expect(spy).toHaveBeenLastCalledWith([200, 260, 400, 280, 500, 200]);
      });

      it('should display every second tick when interval = 1', () => {
        const spy = vi.fn();
        const { container } = render(
          <BarChart width={300} height={300} data={data}>
            <XAxis dataKey="z" type="category" interval={1} />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </BarChart>,
        );
        expectXAxisTicks(container, ['200', '400', '500']);
        expect(spy).toHaveBeenLastCalledWith([200, 260, 400, 280, 500, 200]);
      });

      it('should display every third tick when interval = 2', () => {
        const spy = vi.fn();
        const { container } = render(
          <BarChart width={300} height={300} data={data}>
            <XAxis dataKey="z" type="category" interval={2} />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </BarChart>,
        );
        expectXAxisTicks(container, ['200', '280']);
        expect(spy).toHaveBeenLastCalledWith([200, 260, 400, 280, 500, 200]);
      });

      it('should attempt to show the ticks start with interval = preserveStart', () => {
        const spy = vi.fn();
        const { container } = render(
          <BarChart width={30} height={300} data={data}>
            <XAxis dataKey="x" type="category" interval="preserveStart" tickCount={20} />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </BarChart>,
        );
        expectXAxisTicks(container, ['100', '170', '150']);
        expect(spy).toHaveBeenLastCalledWith([100, 120, 170, 140, 150, 110]);
      });

      it('should attempt to show the ticks end with interval = preserveEnd', () => {
        const spy = vi.fn();
        const { container } = render(
          <BarChart width={30} height={300} data={data}>
            <XAxis dataKey="x" type="category" interval="preserveEnd" tickCount={20} />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </BarChart>,
        );
        expectXAxisTicks(container, ['120', '140', '110']);
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
        expectXAxisTicks(container, ['100', '170', '110']);
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
        expectXAxisTicks(container, ['100', '170', '150']);
        expect(spy).toHaveBeenLastCalledWith([100, 120, 170, 140, 150, 110]);
      });
    });
  });
});
