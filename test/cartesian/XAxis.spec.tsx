import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ScatterChart, Scatter, LineChart, Line, XAxis, YAxis, BarChart, Bar, Customized } from '../../src';
import { selectAxisSettings } from '../../src/state/axisSelectors';
import { useAppSelector } from '../../src/state/hooks';
import { expectXAxisTicks } from '../helper/expectAxisTicks';

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

  it('Render 1 x-CartesianAxis and 1 y-CartesianAxis ticks in ScatterChart', () => {
    const { container } = render(
      <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey="x" name="stature" unit="cm" />
        <YAxis dataKey="y" name="weight" unit="kg" />
        <Scatter name="A school" data={data} fill="#ff7300" />
      </ScatterChart>,
    );

    expect(container.querySelectorAll('.recharts-cartesian-axis-line')).toHaveLength(2);
  });

  it('should throw when attempting to render outside of Chart', () => {
    expect(() => render(<XAxis dataKey="x" name="stature" unit="cm" />)).toThrow(
      'Invariant failed: Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?',
    );
  });

  it("Don't render x-axis when hide is set to be true", () => {
    const { container } = render(
      <LineChart width={400} height={400} data={lineData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis hide />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );

    expect(container.querySelectorAll('.xAxis .recharts-xAxis')).toHaveLength(0);
  });

  it('Render ticks of XAxis when specify ticks', () => {
    const { container } = render(
      <LineChart width={400} height={400} data={lineData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis ticks={[0, 4]} />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );

    expect(container.querySelectorAll('.xAxis .recharts-cartesian-axis-tick')).toHaveLength(2);
  });

  it('Render ticks with tickFormatter', () => {
    const { container } = render(
      <LineChart width={400} height={400} data={lineData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey="name" tickFormatter={(value, i) => `${i}`} />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );

    expect(container.querySelectorAll('.xAxis .recharts-cartesian-axis-tick')[0]).toHaveTextContent('0');
  });

  it('Render duplicated ticks of XAxis', () => {
    const { container } = render(
      <LineChart width={600} height={300} data={lineData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="name" interval={0} />
        <YAxis />
        <Line type="monotone" dataKey="balance" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>,
    );

    expect(container.querySelectorAll('.recharts-xAxis .recharts-cartesian-axis-tick')).toHaveLength(lineData.length);
  });

  it('Render ticks of when the scale of XAxis is time', () => {
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
      </LineChart>,
    );

    expect(container.querySelectorAll('.recharts-xAxis .recharts-cartesian-axis-tick')).toHaveLength(timeData.length);
  });

  it('Render Bars with gap', () => {
    const { container } = render(
      <BarChart width={300} height={300} data={data}>
        <Bar dataKey="y" isAnimationActive={false} />
        <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} padding="gap" />
        <YAxis dataKey="y" />
      </BarChart>,
    );

    const bar = container.querySelector('.recharts-rectangle');
    expect(parseInt(bar?.getAttribute('x') as string, 10)).toEqual(70);
  });

  it('Render Bars with no gap', () => {
    const { container } = render(
      <BarChart width={300} height={300} data={data}>
        <Bar dataKey="y" isAnimationActive={false} />
        <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} padding="no-gap" />
        <YAxis dataKey="y" />
      </BarChart>,
    );

    const bar = container.querySelector('.recharts-rectangle');
    expect(parseInt(bar?.getAttribute('x') as string, 10)).toEqual(66);
  });

  it('Render axis with tick for a single data point', () => {
    const { container } = render(
      <BarChart width={300} height={300} data={data.slice(0, 1)}>
        <Bar dataKey="y" isAnimationActive={false} />
        <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} />
        <YAxis dataKey="y" />
      </BarChart>,
    );

    const tick = container.querySelector('.xAxis .recharts-cartesian-axis-tick-value');
    expect(tick).toBeInTheDocument();
    expect(tick.textContent).toEqual('100');
    expect(tick?.getAttribute('x')).toEqual('180');

    // For a single data point, unless barSize is given, the bar will have no width and thus not be rendered.
    // This test merely confirms this known limitation.
    const bar = container.querySelector('.recharts-rectangle');
    expect(bar).not.toBeInTheDocument();
  });

  it('Should render the YAxis line without any ticks', () => {
    const barData = [{ day: '05-01' }, { day: '05-02' }];
    const { container } = render(
      <BarChart width={300} height={300} data={barData}>
        <Bar dataKey="y" isAnimationActive={false} />
        <XAxis dataKey="y" type="number" />
      </BarChart>,
    );
    const ticksGroup = container.getElementsByClassName('recharts-cartesian-axis-tick-line');
    expect(ticksGroup).toHaveLength(0);

    const axisLine = container.getElementsByClassName('recharts-cartesian-axis-line');
    expect(axisLine).toHaveLength(1);
  });

  it('Render Bars for a single data point with barSize=50%', () => {
    const { container } = render(
      <BarChart width={300} height={300} data={data.slice(0, 1)} barSize="50%">
        <Bar dataKey="y" isAnimationActive={false} />
        <XAxis dataKey="x" type="number" domain={[50, 150]} />
        <YAxis dataKey="y" />
      </BarChart>,
    );

    const bar = container.querySelector('.recharts-rectangle');
    expect(bar).toBeInTheDocument();
    expect(bar?.getAttribute('x')).toEqual('123');
    expect(bar?.getAttribute('width')).toEqual('115');
  });

  it('Render Bars for a single data point with barSize=20% and no-gap', () => {
    const { container } = render(
      <BarChart width={300} height={300} data={data.slice(0, 1)} barSize="20%">
        <Bar dataKey="y" isAnimationActive={false} />
        <XAxis dataKey="x" type="number" domain={[100, 150]} padding="no-gap" />
        <YAxis dataKey="y" />
      </BarChart>,
    );

    const bar = container.querySelector('.recharts-rectangle');
    expect(bar).toBeInTheDocument();
    expect(bar?.getAttribute('x')).toEqual('42');
    expect(bar?.getAttribute('width')).toEqual('46');
  });

  test('Render no ticks if type is category and data is empty', () => {
    const { container } = render(
      <BarChart width={300} height={300} data={[]}>
        <Bar dataKey="y" isAnimationActive={false} />
        <XAxis dataKey="x" />
        <YAxis dataKey="y" />
      </BarChart>,
    );

    expect(container.querySelectorAll('.recharts-xAxis .recharts-cartesian-axis-tick')).toHaveLength(0);
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
      expect(spy).toHaveBeenLastCalledWith({
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
      });
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
      expect(spy).toHaveBeenLastCalledWith({
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
        },
        bar: undefined,
      });
      rerender(
        <BarChart width={100} height={100}>
          <XAxis xAxisId="foo" scale="log" type="number" />
          <XAxis xAxisId="bar" scale="utc" type="category" />
          <Customized component={Comp} />
        </BarChart>,
      );
      expect(spy).toHaveBeenLastCalledWith({
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
        },
      });
      rerender(
        <BarChart width={100} height={100}>
          <XAxis xAxisId="bar" scale="utc" type="category" />
          <Customized component={Comp} />
        </BarChart>,
      );

      expect(spy).toHaveBeenLastCalledWith({
        foo: undefined,
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
        },
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
    it('should start from 0 and calculate domain max by default', () => {
      const { container } = render(
        <BarChart width={300} height={300} data={data}>
          <Bar dataKey="y" isAnimationActive={false} />
          <XAxis dataKey="x" type="number" />
          <YAxis dataKey="y" />
        </BarChart>,
      );
      expectXAxisTicks(container, ['0', '45', '90', '135', '180']);
    });

    describe.each([true, false, undefined])('auto domain with allowDataOverflow = %s', allowDataOverflow => {
      it('should render ticks from domain auto, auto', () => {
        const { container } = render(
          <BarChart width={300} height={300} data={data}>
            <Bar dataKey="y" isAnimationActive={false} />
            <XAxis dataKey="x" type="number" domain={['auto', 'auto']} allowDataOverflow={allowDataOverflow} />
            <YAxis dataKey="y" />
          </BarChart>,
        );
        expectXAxisTicks(container, ['100', '120', '140', '160', '180']);
      });

      it('should render ticks from number, auto', () => {
        const { container } = render(
          <BarChart width={300} height={300} data={data}>
            <Bar dataKey="y" isAnimationActive={false} />
            <XAxis dataKey="x" type="number" domain={[-55, 'auto']} allowDataOverflow={allowDataOverflow} />
            <YAxis dataKey="y" />
          </BarChart>,
        );
        expectXAxisTicks(container, ['-60', '0', '60', '120', '180']);
      });

      it('should render ticks from auto, number', () => {
        const { container } = render(
          <BarChart width={300} height={300} data={data}>
            <Bar dataKey="y" isAnimationActive={false} />
            <XAxis dataKey="x" type="number" domain={['auto', 555]} allowDataOverflow={allowDataOverflow} />
            <YAxis dataKey="y" />
          </BarChart>,
        );
        expectXAxisTicks(container, ['0', '150', '300', '450', '600']);
      });
    });

    it('should allow to expand the domain', () => {
      const { container } = render(
        <BarChart width={300} height={300} data={data}>
          <Bar dataKey="y" isAnimationActive={false} />
          <XAxis dataKey="x" type="number" domain={[-500, 500]} />
          <YAxis dataKey="y" />
        </BarChart>,
      );
      expectXAxisTicks(container, ['-500', '-250', '0', '250', '500']);
    });

    it('should shrink down, but respect the data domain, if the provided domain is smaller than the data', () => {
      const { container, rerender } = render(
        <BarChart width={300} height={300} data={data}>
          <Bar dataKey="y" isAnimationActive={false} />
          <XAxis dataKey="x" type="number" domain={[-100, 100]} />
          <YAxis dataKey="y" />
        </BarChart>,
      );
      expectXAxisTicks(container, ['-100', '-30', '40', '170']);

      rerender(
        <BarChart width={300} height={300} data={data}>
          <Bar dataKey="y" isAnimationActive={false} />
          <XAxis dataKey="x" type="number" domain={[130, 175]} />
          <YAxis dataKey="y" />
        </BarChart>,
      );
      expectXAxisTicks(container, ['100', '120', '140', '175']);

      rerender(
        <BarChart width={300} height={300} data={data}>
          <Bar dataKey="y" isAnimationActive={false} />
          <XAxis dataKey="x" type="number" domain={[130, 150]} />
          <YAxis dataKey="y" />
        </BarChart>,
      );
      expectXAxisTicks(container, ['100', '120', '140', '170']);
    });

    it('should default to dataMin, dataMax for domain where the larger number is first', () => {
      const { container } = render(
        <BarChart width={300} height={300} data={data}>
          <Bar dataKey="y" isAnimationActive={false} />
          <XAxis dataKey="x" type="number" domain={[100, 0]} />
          <YAxis dataKey="y" />
        </BarChart>,
      );
      expectXAxisTicks(container, ['100', '120', '140', '170']);
    });

    it('should render one tick for domain that does not have any gap', () => {
      const { container } = render(
        <BarChart width={300} height={300} data={data}>
          <Bar dataKey="y" isAnimationActive={false} />
          <XAxis dataKey="x" type="number" domain={[150, 150]} allowDataOverflow />
          <YAxis dataKey="y" />
        </BarChart>,
      );
      expectXAxisTicks(container, ['150']);
    });

    it('should shrink properly when allowDataOverflow = true', () => {
      const { container } = render(
        <BarChart width={300} height={300} data={data}>
          <Bar dataKey="y" isAnimationActive={false} />
          <XAxis dataKey="x" type="number" domain={[0, 100]} allowDataOverflow />
          <YAxis dataKey="y" />
        </BarChart>,
      );
      expectXAxisTicks(container, ['0', '25', '50', '75', '100']);
    });

    it('should allow providing more tickCount', () => {
      const { container } = render(
        <BarChart width={300} height={300} data={data}>
          <Bar dataKey="y" isAnimationActive={false} />
          <XAxis dataKey="x" type="number" tickCount={7} />
          <YAxis dataKey="y" />
        </BarChart>,
      );
      expectXAxisTicks(container, ['0', '30', '60', '90', '120', '150', '180']);
    });

    it('should allow providing less tickCount', () => {
      const { container } = render(
        <BarChart width={300} height={300} data={data}>
          <Bar dataKey="y" isAnimationActive={false} />
          <XAxis dataKey="x" type="number" tickCount={3} />
          <YAxis dataKey="y" />
        </BarChart>,
      );
      expectXAxisTicks(container, ['0', '85', '170']);
    });

    it('should make ticks from dataMin, dataMax', () => {
      const { container } = render(
        <BarChart width={300} height={300} data={data}>
          <Bar dataKey="y" isAnimationActive={false} />
          <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} allowDataOverflow />
          <YAxis dataKey="y" />
        </BarChart>,
      );
      expectXAxisTicks(container, ['100', '120', '140', '170']);
    });

    it('should default to dataMin, dataMax ANYWAY when domain is provided as strings? I do not understand this behaviour.', () => {
      const { container } = render(
        <BarChart width={300} height={300} data={data}>
          <Bar dataKey="y" isAnimationActive={false} />
          {/* omg recharts just completely ignores this when it's defined as strings */}
          <XAxis dataKey="x" type="number" domain={['-500', '500']} allowDataOverflow />
          <YAxis dataKey="y" />
        </BarChart>,
      );
      expectXAxisTicks(container, ['100', '120', '140', '170']);
    });

    it('should allow a function that returns a domain, and pass inside a computed domain and allowDataOverflow prop', () => {
      const spy = vi.fn();
      spy.mockReturnValue([-500, 500]);
      const { container, rerender } = render(
        <BarChart width={300} height={300} data={data}>
          <Bar dataKey="y" isAnimationActive={false} />
          <XAxis dataKey="x" type="number" domain={spy} allowDataOverflow />
          <YAxis dataKey="y" />
        </BarChart>,
      );
      expectXAxisTicks(container, ['-500', '-250', '0', '250', '500']);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith([100, 170], true);

      rerender(
        <BarChart width={300} height={300} data={data}>
          <Bar dataKey="y" isAnimationActive={false} />
          <XAxis dataKey="x" type="number" domain={spy} allowDataOverflow={false} />
          <YAxis dataKey="y" />
        </BarChart>,
      );
      expectXAxisTicks(container, ['-500', '-250', '0', '250', '500']);
      expect(spy).toHaveBeenCalledTimes(2);
      expect(spy).toHaveBeenLastCalledWith([100, 170], false);
    });

    it(`should allow array of functions,
              and give them first and last elements of the data domain
              - but this time, no allowDataOverflow parameter!`, () => {
      const spyMin = vi.fn().mockReturnValue(-500);
      const spyMax = vi.fn().mockReturnValue(500);
      const { container } = render(
        <BarChart width={300} height={300} data={data}>
          <Bar dataKey="y" isAnimationActive={false} />
          <XAxis dataKey="x" type="number" domain={[spyMin, spyMax]} allowDataOverflow />
          <YAxis dataKey="y" />
        </BarChart>,
      );
      expectXAxisTicks(container, ['-500', '-250', '0', '250', '500']);
      expect(spyMin).toHaveBeenCalledTimes(1);
      expect(spyMax).toHaveBeenCalledTimes(1);
      expect(spyMin).toHaveBeenCalledWith(100);
      expect(spyMax).toHaveBeenCalledWith(170);
    });

    it('should allow mixing numbers and functions', () => {
      const { container } = render(
        <BarChart width={300} height={300} data={data}>
          <Bar dataKey="y" isAnimationActive={false} />
          <XAxis dataKey="x" type="number" domain={[-500, () => 500]} allowDataOverflow />
          <YAxis dataKey="y" />
        </BarChart>,
      );
      expectXAxisTicks(container, ['-500', '-250', '0', '250', '500']);
    });

    it.todo('allowDecimals');
  });

  describe('categorical domain', () => {
    it('should list items as literals and do not sort', () => {
      const { container } = render(
        <BarChart width={300} height={300} data={data}>
          <Bar dataKey="y" isAnimationActive={false} />
          <XAxis dataKey="x" type="category" />
          <YAxis dataKey="y" />
        </BarChart>,
      );
      expectXAxisTicks(container, ['100', '120', '170', '140', '150', '110']);
    });
  });
});
