import { fireEvent, render } from '@testing-library/react';
import React, { ComponentProps, FC } from 'react';
import { vi, MockInstance } from 'vitest';
import { Area, AreaChart, Brush, CartesianAxis, Tooltip, XAxis, YAxis } from '../../src';
import { assertNotNull } from '../helper/assertNotNull';
import { testChartLayoutContext } from '../util/context';

describe('AreaChart', () => {
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
  });

  test('Renders 1 dot when data only have one element', () => {
    const { container } = render(
      <AreaChart width={100} height={50} data={data.slice(0, 1)}>
        <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );
    expect(container.querySelectorAll('.recharts-area-area')).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-area-curve')).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-area-dot')).toHaveLength(1);
  });

  test('Renders empty path when all the data are null', () => {
    const { container } = render(
      <AreaChart width={100} height={50} data={data}>
        <Area type="monotone" dataKey="any" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );
    const areaPath = container.querySelectorAll('.recharts-area-area');
    const curvePath = container.querySelectorAll('.recharts-area-curve');

    expect(areaPath).toHaveLength(1);
    expect(curvePath).toHaveLength(1);
    areaPath.forEach(m => {
      expect(m).not.toHaveAttribute('d');
    });
    curvePath.forEach(m => {
      expect(m).not.toHaveAttribute('d');
    });
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
  });

  test('Renders 2 path in a vertical AreaChart', () => {
    const { container } = render(
      <AreaChart width={100} height={50} data={data} layout="vertical">
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );
    expect(container.querySelectorAll('.recharts-area-area')).toHaveLength(1);
    expect(container.querySelectorAll('.recharts-area-curve')).toHaveLength(1);
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
    expect(container.querySelectorAll('.recharts-area')).toHaveLength(0);
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
      expect(axisSpy).toHaveBeenCalledTimes(6);

      fireEvent.mouseEnter(container, { clientX: 30, clientY: 200 });
      fireEvent.mouseMove(container, { clientX: 200, clientY: 200 });
      fireEvent.mouseLeave(container);

      spies.forEach(el => expect(el.mock.calls.length).toBe(1));
      expect(axisSpy).toHaveBeenCalledTimes(6);
    });

    // protect against the future where someone might mess up our clean rendering
    test("should only render Area once when the brush moves but doesn't change start/end indices", () => {
      const { container } = render(chart);

      spies.forEach(el => expect(el).toHaveBeenCalledTimes(1));
      expect(axisSpy).toHaveBeenCalledTimes(6);

      const brushSlide = container.querySelector('.recharts-brush-slide');
      assertNotNull(brushSlide);
      fireEvent.mouseDown(brushSlide);
      fireEvent.mouseMove(brushSlide, { clientX: 200, clientY: 200 });
      fireEvent.mouseUp(window);

      spies.forEach(el => expect(el).toHaveBeenCalledTimes(1));
      expect(axisSpy).toHaveBeenCalledTimes(10);
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
    it(
      'should provide viewBox and offset and clipPathId if there are no axes',
      testChartLayoutContext(
        props => (
          <AreaChart width={100} height={50} barSize={20}>
            {props.children}
          </AreaChart>
        ),
        ({ clipPathId, viewBox, xAxisMap, yAxisMap, offset }) => {
          expect(clipPathId).toMatch(/recharts\d+-clip/);
          expect(viewBox).toEqual({ height: 40, width: 90, x: 5, y: 5 });
          expect(xAxisMap).toEqual({});
          expect(yAxisMap).toEqual({});
          expect(offset).toEqual({
            bottom: 5,
            brushBottom: 5,
            height: 40,
            left: 5,
            right: 5,
            top: 5,
            width: 90,
          });
        },
      ),
    );

    it(
      'should set width and height in context',
      testChartLayoutContext(
        props => (
          <AreaChart width={100} height={50} barSize={20}>
            {props.children}
          </AreaChart>
        ),
        ({ width, height }) => {
          expect(width).toBe(100);
          expect(height).toBe(50);
        },
      ),
    );

    it(
      'should provide axisMaps if axes are specified',
      testChartLayoutContext(
        props => (
          <AreaChart width={100} height={50} barSize={20}>
            <XAxis dataKey="number" type="number" />
            <YAxis type="category" dataKey="name" />
            {props.children}
          </AreaChart>
        ),
        ({ clipPathId, viewBox, xAxisMap, yAxisMap }) => {
          expect(clipPathId).toMatch(/recharts\d+-clip/);
          expect(viewBox).toEqual({ height: 10, width: 30, x: 65, y: 5 });
          expect(xAxisMap).toMatchInlineSnapshot(`
            {
              "0": {
                "allowDataOverflow": false,
                "allowDecimals": true,
                "allowDuplicatedCategory": true,
                "axisType": "xAxis",
                "bandSize": 0,
                "categoricalDomain": [],
                "dataKey": "number",
                "domain": [
                  0,
                  -Infinity,
                ],
                "duplicateDomain": undefined,
                "height": 30,
                "hide": false,
                "isCategorical": true,
                "layout": "horizontal",
                "mirror": false,
                "niceTicks": [
                  0,
                  -Infinity,
                  -Infinity,
                  -Infinity,
                  -Infinity,
                ],
                "orientation": "bottom",
                "originalDomain": [
                  0,
                  "auto",
                ],
                "padding": {
                  "left": 0,
                  "right": 0,
                },
                "realScaleType": "linear",
                "reversed": false,
                "scale": [Function],
                "tickCount": 5,
                "type": "number",
                "width": 30,
                "x": 65,
                "xAxisId": 0,
                "y": 15,
              },
            }
          `);
          expect(yAxisMap).toMatchInlineSnapshot(`
            {
              "0": {
                "allowDataOverflow": false,
                "allowDecimals": true,
                "allowDuplicatedCategory": true,
                "axisType": "yAxis",
                "bandSize": 0,
                "categoricalDomain": undefined,
                "dataKey": "name",
                "domain": [],
                "duplicateDomain": undefined,
                "height": 10,
                "hide": false,
                "isCategorical": false,
                "layout": "horizontal",
                "mirror": false,
                "orientation": "left",
                "originalDomain": undefined,
                "padding": {
                  "bottom": 0,
                  "top": 0,
                },
                "realScaleType": "point",
                "reversed": false,
                "scale": [Function],
                "tickCount": 5,
                "type": "category",
                "width": 60,
                "x": 5,
                "y": 5,
                "yAxisId": 0,
              },
            }
          `);
        },
      ),
    );
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
