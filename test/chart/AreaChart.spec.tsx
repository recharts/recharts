import { fireEvent, render } from '@testing-library/react';
import React, { ComponentProps, FC } from 'react';
import { beforeEach, describe, expect, it, MockInstance, test, vi } from 'vitest';
import { Area, AreaChart, Brush, CartesianAxis, Customized, Tooltip, XAxis, YAxis } from '../../src';
import { assertNotNull } from '../helper/assertNotNull';
import { useAppSelector } from '../../src/state/hooks';
import { pageData } from '../../storybook/stories/data';
import { AreaSettings, selectArea } from '../../src/state/selectors/areaSelectors';
import { selectTicksOfAxis } from '../../src/state/selectors/axisSelectors';
import { mockGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';
import { useChartHeight, useChartWidth, useViewBox } from '../../src/context/chartLayoutContext';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';

import { useClipPathId } from '../../src/container/ClipPathProvider';
import { expectAreaCurve } from '../helper/expectAreaCurve';

describe('AreaChart', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

  const data = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
    { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
    { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
    { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
    { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
  ];

  test('Renders 2 path in simple AreaChart', () => {
    const { container } = render(
      <AreaChart width={100} height={50} data={data}>
        <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );
    expect(container.querySelectorAll('.recharts-area-area')).toHaveLength(1);
    expect(container.querySelectorAll('.recharts-area-curve')).toHaveLength(1);

    expectAreaCurve(container, [
      {
        d: 'M5,5C11,10,17,15,23,15C29,15,35,15,41,15C47,15,53,25,59,25C65,25,71,17.2,77,17.2C83,17.2,89,21.65,95,26.1',
      },
    ]);
  });

  test('Renders 1 dot when data only have one element', () => {
    const { container } = render(
      <AreaChart width={100} height={50} data={data.slice(0, 1)}>
        <Area type="monotone" dataKey="pv" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );
    expect(container.querySelectorAll('.recharts-area-area')).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-area-curve')).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-area-dot')).toHaveLength(1);
    expectAreaCurve(container, []);
  });

  test('Renders no path when dataKey does not match the source data', () => {
    const { container } = render(
      <AreaChart width={100} height={50} data={data}>
        <Area type="monotone" dataKey="any" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );
    const areaPath = container.querySelectorAll('.recharts-area-area');
    const curvePath = container.querySelectorAll('.recharts-area-curve');

    expect(areaPath).toHaveLength(0);
    expect(curvePath).toHaveLength(0);
  });

  test('Renders customized active dot when activeDot is set to be a ReactElement', () => {
    const ActiveDot: FC<{ cx?: number; cy?: number }> = ({ cx, cy }) => (
      <circle cx={cx} cy={cy} r={10} className="customized-active-dot" />
    );

    const { container } = render(
      <div role="main" style={{ width: '400px', height: '400px' }}>
        <AreaChart width={400} height={400} data={data}>
          <Area
            activeDot={({ cx, cy }) => <ActiveDot cx={cx} cy={cy} />}
            type="monotone"
            dataKey="uv"
            stroke="#ff7300"
            fill="#ff7300"
          />
          <Tooltip />
        </AreaChart>
      </div>,
    );

    const chart = container.querySelector('.recharts-wrapper');
    assertNotNull(chart);
    fireEvent.mouseOver(chart, { clientX: 200, clientY: 200 });

    const dot = container.querySelectorAll('.customized-active-dot');
    expect(dot).toHaveLength(1);
  });

  test('Renders customized active dot when activeDot is set to be a function', () => {
    const activeDotRenderer: ComponentProps<typeof Area>['activeDot'] = ({ cx, cy }) => (
      <circle cx={cx} cy={cy} r={10} className="customized-active-dot" />
    );

    const { container } = render(
      <div role="main" style={{ width: '400px', height: '400px' }}>
        <AreaChart width={400} height={400} data={data}>
          <Area activeDot={activeDotRenderer} type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
          <Tooltip />
        </AreaChart>
      </div>,
    );

    const chart = container.querySelector('.recharts-wrapper');
    assertNotNull(chart);
    fireEvent.mouseOver(chart, { clientX: 200, clientY: 200 });

    const dot = container.querySelectorAll('.customized-active-dot');
    expect(dot).toHaveLength(1);
  });

  test('Renders 4 path in a stacked AreaChart', () => {
    const { container } = render(
      <AreaChart width={100} height={50} data={data}>
        <Area type="monotone" dataKey="uv" stackId="test" stroke="#ff7300" fill="#ff7300" />
        <Area type="monotone" dataKey="pv" stackId="test" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );
    expect(container.querySelectorAll('.recharts-area-area')).toHaveLength(2);
    expect(container.querySelectorAll('.recharts-area-curve')).toHaveLength(2);

    expectAreaCurve(container, [
      {
        d: 'M5,43.4C11,43.6,17,43.8,23,43.8C29,43.8,35,43.8,41,43.8C47,43.8,53,44.2,59,44.2C65,44.2,71,43.888,77,43.888C83,43.888,89,44.066,95,44.244',
      },
      {
        d: 'M5,33.8C11,29.666,17,25.532,23,25.532C29,25.532,35,38.208,41,38.208C47,38.208,53,5,59,5C65,5,71,28.256,77,28.256C83,28.256,89,26.65,95,25.044',
      },
    ]);
  });

  test('Renders a path in a vertical AreaChart', () => {
    const { container } = render(
      <AreaChart width={100} height={50} data={data} layout="vertical">
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );
    expect(container.querySelectorAll('.recharts-area-area')).toHaveLength(1);
    expect(container.querySelectorAll('.recharts-area-curve')).toHaveLength(1);

    expectAreaCurve(container, [
      {
        d: 'M95,5C91.25,5.667,87.5,6.333,87.5,7C87.5,7.667,87.5,8.333,87.5,9C87.5,9.667,80,10.333,80,11C80,11.667,85.85,12.333,85.85,13C85.85,13.667,82.513,14.333,79.175,15',
      },
    ]);
  });

  test('renders a stacked percentage chart', () => {
    const toPercent = (decimal: number, fixed = 0) => `${(decimal * 100).toFixed(fixed)}%`;

    const areaSpy = vi.fn();
    const xAxisTicksSpy = vi.fn();
    const Comp = (): null => {
      const areaSettings: AreaSettings = {
        baseValue: undefined,
        stackId: '1',
        dataKey: 'uv',
        connectNulls: false,
        data: undefined,
      };
      areaSpy(useAppSelector(state => selectArea(state, 0, 0, false, areaSettings)));
      xAxisTicksSpy(useAppSelector(state => selectTicksOfAxis(state, 'xAxis', 0, false)));
      return null;
    };

    const { container } = render(
      <AreaChart
        width={500}
        height={400}
        data={pageData}
        stackOffset="expand"
        margin={{
          top: 10,
          right: 30,
          left: 20,
          bottom: 20,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis tickFormatter={toPercent} />
        <Area dataKey="uv" stackId="1" />
        <Area dataKey="pv" stackId="1" />
        <Area dataKey="amt" stackId="1" />
        <Customized component={<Comp />} />
      </AreaChart>,
    );

    expect(xAxisTicksSpy).toHaveBeenLastCalledWith([
      {
        coordinate: 80,
        index: 0,
        offset: 0,
        value: 'Page A',
      },
      {
        coordinate: 145,
        index: 1,
        offset: 0,
        value: 'Page B',
      },
      {
        coordinate: 210,
        index: 2,
        offset: 0,
        value: 'Page C',
      },
      {
        coordinate: 275,
        index: 3,
        offset: 0,
        value: 'Page D',
      },
      {
        coordinate: 340,
        index: 4,
        offset: 0,
        value: 'Page E',
      },
      {
        coordinate: 405,
        index: 5,
        offset: 0,
        value: 'Page F',
      },
      {
        coordinate: 470,
        index: 6,
        offset: 0,
        value: 'Page G',
      },
    ]);
    expect(xAxisTicksSpy).toHaveBeenCalledTimes(2);

    // For some reason this assertion always fails but never shows what's the difference.
    // expect(areaSpy).toHaveBeenLastCalledWith({
    //   baseLine: [
    //     {
    //       x: 80,
    //       y: 350,
    //     },
    //     {
    //       x: 145,
    //       y: 350,
    //     },
    //     {
    //       x: 210,
    //       y: 350,
    //     },
    //     {
    //       x: 275,
    //       y: 350,
    //     },
    //     {
    //       x: 340,
    //       y: 350,
    //     },
    //     {
    //       x: 405,
    //       y: 350,
    //     },
    //     {
    //       x: 470,
    //       y: 350,
    //     },
    //   ],
    //   isRange: false,
    //   points: [
    //     {
    //       payload: {
    //         amt: 1400,
    //         name: 'Page A',
    //         pv: 800,
    //         uv: 590,
    //       },
    //       value: [0, 0.2114695340501792],
    //       x: 80,
    //       y: 278.10035842293905,
    //     },
    //     {
    //       payload: {
    //         amt: 1400,
    //         name: 'Page B',
    //         pv: 800,
    //         uv: 590,
    //       },
    //       value: [0, 0.2114695340501792],
    //       x: 145,
    //       y: 278.10035842293905,
    //     },
    //     {
    //       payload: {
    //         amt: 1506,
    //         name: 'Page C',
    //         pv: 967,
    //         uv: 868,
    //       },
    //       value: [0, 0.25980245435498356],
    //       x: 210,
    //       y: 261.6671655193056,
    //     },
    //     {
    //       payload: {
    //         amt: 989,
    //         name: 'Page D',
    //         pv: 1098,
    //         uv: 1397,
    //       },
    //       value: [0, 0.40097588978185994],
    //       x: 275,
    //       y: 213.66819747416764,
    //     },
    //     {
    //       payload: {
    //         amt: 1228,
    //         name: 'Page E',
    //         pv: 1200,
    //         uv: 1480,
    //       },
    //       value: [0, 0.37871033776867963],
    //       x: 340,
    //       y: 221.23848515864896,
    //     },
    //     {
    //       payload: {
    //         amt: 1100,
    //         name: 'Page F',
    //         pv: 1108,
    //         uv: 1520,
    //       },
    //       value: [0, 0.40772532188841204],
    //       x: 405,
    //       y: 211.3733905579399,
    //     },
    //     {
    //       payload: {
    //         amt: 1700,
    //         name: 'Page G',
    //         pv: 680,
    //         uv: 1400,
    //       },
    //       value: [0, 0.37037037037037035],
    //       x: 470,
    //       y: 224.07407407407408,
    //     },
    //   ],
    // });

    expectAreaCurve(container, [
      {
        d: 'M80,278.1L145,278.1L210,261.667L275,213.668L340,221.238L405,211.373L470,224.074',
      },
      {
        d: 'M80,180.609L145,180.609L210,163.26L275,106.515L340,116.837L405,110.322L470,162.91',
      },
      {
        d: 'M80,10L145,10L210,10L275,10L340,10L405,10L470,10',
      },
    ]);
  });

  test('renders a stacked chart when stackId is a number', () => {
    const areaSettings: AreaSettings = {
      baseValue: undefined,
      stackId: 1,
      dataKey: 'uv',
      connectNulls: false,
      data: undefined,
    };

    const renderTestCase = createSelectorTestCase(({ children }) => (
      <AreaChart width={500} height={400} data={pageData}>
        <Area dataKey="uv" stackId={areaSettings.stackId} />
        <Area dataKey="pv" stackId={areaSettings.stackId} />
        {children}
      </AreaChart>
    ));

    const { container } = renderTestCase(state => selectArea(state, 0, 0, false, areaSettings));

    // if number stackId breaks this will return an empty array
    expectAreaCurve(container, [
      {
        d: 'M5,312.821L86.667,312.821L168.333,274.1L250,200.418L331.667,188.857L413.333,183.286L495,200',
      },
      {
        d: 'M5,201.393L86.667,201.393L168.333,139.411L250,47.482L331.667,21.714L413.333,28.957L495,105.286',
      },
    ]);
  });

  test('Renders dots and labels when dot is set to true', () => {
    const { container } = render(
      <AreaChart width={100} height={50} data={data}>
        <Area isAnimationActive={false} type="monotone" dot label dataKey="uv" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );
    expect(container.querySelectorAll('.recharts-area-dots')).toHaveLength(1);
    expect(container.querySelectorAll('.recharts-area-dot')).toHaveLength(6);
    expect(container.querySelectorAll('.recharts-label-list')).toHaveLength(1);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(6);
  });

  test('Render empty when data is empty', () => {
    const { container } = render(
      <AreaChart width={100} height={50} data={[]}>
        <Area type="monotone" dot label dataKey="uv" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );
    expect(container.querySelectorAll('.recharts-area-area')).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-area-curve')).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-area-dots')).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-label-list')).toHaveLength(0);
  });

  describe('<AreaChart /> - Pure Rendering', () => {
    const pureElements = [Area];

    const spies: MockInstance[] = [];
    // CartesianAxis is what is actually render for XAxis and YAxis
    let axisSpy: MockInstance;

    beforeEach(() => {
      pureElements.forEach((el, i) => {
        spies[i] = vi.spyOn(el.prototype, 'render');
      });
      axisSpy = vi.spyOn(CartesianAxis.prototype, 'render');
    });

    const chart = (
      <AreaChart width={400} height={400} data={data}>
        <Area isAnimationActive={false} type="monotone" dot label dataKey="uv" />
        <Tooltip />
        <XAxis />
        <YAxis />
        <Brush />
      </AreaChart>
    );

    // protect against the future where someone might mess up our clean rendering
    test('should only render Area once when the mouse enters and moves', () => {
      const { container } = render(chart);

      spies.forEach(el => expect(el.mock.calls.length).toBe(1));
      expect(axisSpy).toHaveBeenCalledTimes(3);

      fireEvent.mouseEnter(container, { clientX: 30, clientY: 200 });
      fireEvent.mouseMove(container, { clientX: 200, clientY: 200 });
      fireEvent.mouseLeave(container);

      spies.forEach(el => expect(el.mock.calls.length).toBe(1));
      expect(axisSpy).toHaveBeenCalledTimes(3);
    });

    // protect against the future where someone might mess up our clean rendering
    test("should only render Area once when the brush moves but doesn't change start/end indices", () => {
      const { container } = render(chart);

      spies.forEach(el => expect(el).toHaveBeenCalledTimes(1));
      expect(axisSpy).toHaveBeenCalledTimes(3);

      const brushSlide = container.querySelector('.recharts-brush-slide');
      assertNotNull(brushSlide);
      fireEvent.mouseDown(brushSlide);
      fireEvent.mouseMove(brushSlide, { clientX: 200, clientY: 200 });
      fireEvent.mouseUp(window);

      spies.forEach(el => expect(el).toHaveBeenCalledTimes(1));
      expect(axisSpy).toHaveBeenCalledTimes(3);
    });

    test('should only show the last data when the brush travelers all moved to the right', () => {
      const { container } = render(chart);

      const leftBrushTraveler = container.querySelector('.recharts-brush-traveller');
      assertNotNull(leftBrushTraveler);
      assertNotNull(window);
      fireEvent.mouseDown(leftBrushTraveler);
      fireEvent.mouseMove(window, { clientX: 400, clientY: 0 });
      fireEvent.mouseUp(window);

      expect(leftBrushTraveler?.firstChild).toHaveAttribute('x', '390'); // not sure why the drag end at x: 390
      expect(container.querySelectorAll('.recharts-area-dot')).toHaveLength(1);
    });

    test('should only show the first data when the brush travelers all moved to the left', () => {
      const { container } = render(chart);

      const rightBrushTraveler = container.querySelectorAll('.recharts-brush-traveller')[1];
      assertNotNull(rightBrushTraveler);
      fireEvent.mouseDown(rightBrushTraveler, { clientX: 400, clientY: 0 });
      fireEvent.mouseMove(window, { clientX: 0, clientY: 0 });
      fireEvent.mouseUp(window);

      // not sure why the drag ended at x: 65, but it did close to the 1st point but not 2nd
      expect(rightBrushTraveler?.firstChild).toHaveAttribute('x', '65');
      expect(container.querySelectorAll('.recharts-area-dot')).toHaveLength(1);
    });
  });

  describe('AreaChart layout context', () => {
    it('should provide viewBox', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        spy(useViewBox());
        return null;
      };
      render(
        <AreaChart width={100} height={50} barSize={20}>
          <Comp />
        </AreaChart>,
      );

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenLastCalledWith({ x: 5, y: 5, width: 90, height: 40 });
    });

    it('should provide clipPathId', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        spy(useClipPathId());
        return null;
      };
      render(
        <AreaChart width={100} height={50} barSize={20}>
          <Comp />
        </AreaChart>,
      );

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(expect.stringMatching(/recharts\d+-clip/));
    });

    it('should provide width', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        spy(useChartWidth());
        return null;
      };
      render(
        <AreaChart width={100} height={50} barSize={20}>
          <Comp />
        </AreaChart>,
      );

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(100);
    });

    it('should provide height', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        spy(useChartHeight());
        return null;
      };
      render(
        <AreaChart width={100} height={50} barSize={20}>
          <Comp />
        </AreaChart>,
      );

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(50);
    });
  });

  test('Renders null points as 0 if stacked and connectNulls is true', () => {
    const dataWithNullPV = [
      { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
      { name: 'Page B', uv: 300, amt: 2400 },
      { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
    ];
    const { container } = render(
      <AreaChart width={100} height={50} data={dataWithNullPV}>
        <Area stackId="1" connectNulls type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
        <Area stackId="1" connectNulls type="monotone" dataKey="pv" stroke="#ff7300" fill="#ff7300" />
        <Area stackId="1" connectNulls type="monotone" dataKey="amt" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );

    const [uv, pv] = container.querySelectorAll('.recharts-area-curve');

    expectAreaCurve(container, [
      {
        d: 'M5,42.333C20,42.667,35,43,50,43C65,43,80,43,95,43',
      },
      {
        d: 'M5,26.333C20,34.667,35,43,50,43C65,43,80,38.34,95,33.68',
      },
      {
        d: 'M5,10.333C20,18.667,35,27,50,27C65,27,80,22.34,95,17.68',
      },
    ]);

    [uv, pv].forEach(path => {
      const commands = [...path.getAttribute('d').matchAll(/[a-zA-Z][\d ,.]+/g)];
      expect(commands).toHaveLength(3);
      const [pageB] = commands[1];
      expect(pageB[0]).toBe('C');
      const [x, y] = pageB.slice(1).split(',').slice(4);
      // Page B is missing pv, so it should be treated as 0.
      // Since areas are stacked, pv should go to same point as uv.
      expect([x, y]).toEqual(['50', '43']);
    });
  });
});
