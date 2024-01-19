import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { vi } from 'vitest';
import { Bar, BarChart, Rectangle, RectangleProps, Tooltip, XAxis, YAxis } from '../../src';
import { assertNotNull } from '../helper/assertNotNull';
import { testChartLayoutContext } from '../util/context';

type DataType = {
  name: string;
  uv: number;
  pv: number;
};

describe('<BarChart />', () => {
  const data: DataType[] = [
    { name: 'food', uv: 400, pv: 2400 },
    { name: 'cosmetic', uv: 300, pv: 4567 },
    { name: 'storage', uv: 300, pv: 1398 },
    { name: 'digital', uv: 200, pv: 9800 },
  ];

  type CustomLabelProps = Partial<{ x: number; y: number; index: number }>;

  beforeAll(() => {
    vi.useFakeTimers();
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  test('Renders 8 bars in simple BarChart', () => {
    const { container } = render(
      <BarChart width={100} height={50} data={data}>
        <Bar dataKey="uv" fill="#ff7300" isAnimationActive={false} />
        <Bar dataKey="pv" fill="#387908" isAnimationActive={false} />
      </BarChart>,
    );

    expect(container.querySelectorAll('.recharts-rectangle')).toHaveLength(8);
  });

  test('Render 4 labels when label is setted to be true', () => {
    const { container } = render(
      <BarChart width={100} height={50} data={data}>
        <Bar isAnimationActive={false} dataKey="uv" label fill="#ff7300" />
      </BarChart>,
    );

    expect(container.querySelectorAll('.recharts-label-list')).toHaveLength(1);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(4);
  });

  test('Renders 4 bar labels when label is set to be a react element', () => {
    const Label = (props: CustomLabelProps) => {
      const { x, y, index } = props;

      return (
        <text key={`label-${index}`} x={x} y={y} className="customized-label">
          test
        </text>
      );
    };

    const { container } = render(
      <BarChart width={100} height={50} data={data}>
        <Bar isAnimationActive={false} dataKey="uv" fill="#ff7300" label={<Label />} />
      </BarChart>,
    );

    expect(container.querySelectorAll('.customized-label')).toHaveLength(4);
  });

  test("Don't renders any bars when no Bar item is added", () => {
    const { container } = render(<BarChart width={100} height={50} data={data} />);

    expect(container.querySelectorAll('.recharts-rectangle')).toHaveLength(0);
  });

  test('Renders 8 bars in a vertical BarChart', () => {
    const { container } = render(
      <BarChart width={100} height={50} data={data} layout="vertical">
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" />
        <Bar dataKey="uv" fill="#ff7300" isAnimationActive={false} />
        <Bar dataKey="pv" fill="#387908" isAnimationActive={false} />
      </BarChart>,
    );

    expect(container.querySelectorAll('.recharts-rectangle')).toHaveLength(8);
  });

  test('Renders 8 bars in a stacked BarChart', () => {
    const { container } = render(
      <BarChart width={100} height={50} data={data}>
        <YAxis />
        <Bar dataKey="uv" stackId="test" fill="#ff7300" isAnimationActive={false} />
        <Bar dataKey="pv" stackId="test" fill="#387908" isAnimationActive={false} />
      </BarChart>,
    );

    expect(container.querySelectorAll('.recharts-rectangle')).toHaveLength(8);
  });

  test('Renders 4 bars in a stacked BarChart which only have one Bar', () => {
    const { container } = render(
      <BarChart width={100} height={50} data={data}>
        <YAxis />
        <Bar dataKey="uv" stackId="test" fill="#ff7300" isAnimationActive={false} />
      </BarChart>,
    );

    expect(container.querySelectorAll('.recharts-rectangle')).toHaveLength(4);
  });

  test('Renders tooltip when Tooltip item is added', () => {
    const { container } = render(
      <BarChart width={100} height={50} data={data}>
        <Bar dataKey="uv" stackId="test" fill="#ff7300" />
        <Bar dataKey="pv" stackId="test" fill="#387908" />
        <Tooltip />
      </BarChart>,
    );
    // Both the default Tooltip as well as the Tooltip wrapper are rendered even if not visible
    expect(container.querySelectorAll('.recharts-default-tooltip')).toHaveLength(1);
    expect(container.querySelectorAll('.recharts-tooltip-wrapper')).toHaveLength(1);
  });

  test('Renders customized active bar by default', () => {
    vi.useFakeTimers();

    const { container } = render(
      <div style={{ height: 200, width: 700 }}>
        <BarChart width={700} height={200} data={data}>
          <Bar dataKey="uv" stackId="test" fill="#ff7300" />
          <Tooltip />
        </BarChart>
        ,
      </div>,
    );

    const chart = container.querySelector('.recharts-wrapper');
    assertNotNull(chart);
    fireEvent.mouseOver(chart, { clientX: 100, clientY: 100 });

    vi.advanceTimersByTime(100);
    const bar = container.querySelectorAll('.recharts-active-bar');
    expect(bar).toHaveLength(1);
  });

  test('Renders customized active bar when activeBar set to be a function', () => {
    const { container } = render(
      <div style={{ height: 200, width: 700 }}>
        <BarChart width={700} height={200} data={data}>
          <Bar
            dataKey="uv"
            stackId="test"
            fill="#ff7300"
            activeBar={(props: RectangleProps) => {
              return <Rectangle {...props} name={props.name as string} />;
            }}
          />
          <Tooltip />
        </BarChart>
        ,
      </div>,
    );

    const chart = container.querySelector('.recharts-wrapper');
    assertNotNull(chart);
    fireEvent.mouseOver(chart, { clientX: 100, clientY: 100 });

    vi.advanceTimersByTime(100);
    const bar = container.querySelectorAll('.recharts-active-bar');
    expect(bar).toHaveLength(1);
  });

  test('Renders customized active bar when activeBar set to be a ReactElement', () => {
    const { container } = render(
      <div style={{ height: 200, width: 700 }}>
        <BarChart width={700} height={200} data={data}>
          <Bar dataKey="uv" stackId="test" fill="#ff7300" activeBar={<Rectangle />} />
          <Tooltip />
        </BarChart>
        ,
      </div>,
    );

    const chart = container.querySelector('.recharts-wrapper');
    assertNotNull(chart);
    fireEvent.mouseOver(chart, { clientX: 100, clientY: 100 });
    vi.advanceTimersByTime(100);

    const bar = container.querySelectorAll('.recharts-active-bar');
    expect(bar).toHaveLength(1);
  });

  test('Renders customized active bar when activeBar is set to be a truthy boolean', () => {
    const { container } = render(
      <div style={{ height: 200, width: 700 }}>
        <BarChart width={700} height={200} data={data}>
          <Bar dataKey="uv" stackId="test" fill="#ff7300" activeBar />
          <Tooltip />
        </BarChart>
        ,
      </div>,
    );

    const chart = container.querySelector('.recharts-wrapper');
    assertNotNull(chart);
    fireEvent.mouseOver(chart, { clientX: 100, clientY: 100 });

    vi.advanceTimersByTime(100);
    const bar = container.querySelectorAll('.recharts-active-bar');
    expect(bar).toHaveLength(1);
  });

  test('Does not render customized active bar when activeBar set to be a falsy boolean', () => {
    const { container } = render(
      <div style={{ height: 200, width: 700 }}>
        <BarChart width={700} height={200} data={data}>
          <Bar dataKey="uv" stackId="test" fill="#ff7300" activeBar={false} />
          <Tooltip />
        </BarChart>
      </div>,
    );

    const chart = container.querySelector('.recharts-wrapper');
    assertNotNull(chart);
    fireEvent.mouseOver(chart, { clientX: 100, clientY: 100 });

    vi.advanceTimersByTime(100);
    const bar = container.querySelectorAll('.recharts-active-bar');
    expect(bar).toHaveLength(0);
  });

  test('Renders customized active bar when activeBar set to be an object', () => {
    const { container } = render(
      <div style={{ height: 200, width: 700 }}>
        <BarChart width={700} height={200} data={data}>
          <Bar dataKey="uv" stackId="test" fill="#ff7300" activeBar={{ strokeWidth: 4, fill: 'green' }} />
          <Tooltip />
        </BarChart>
        ,
      </div>,
    );

    const chart = container.querySelector('.recharts-wrapper');
    assertNotNull(chart);
    fireEvent.mouseOver(chart, { clientX: 100, clientY: 100 });

    vi.advanceTimersByTime(100);
    const bar = container.querySelectorAll('.recharts-active-bar');
    expect(bar).toHaveLength(1);
  });

  test('Render empty when data is empty', () => {
    const { container } = render(
      <BarChart width={100} height={50} data={[]}>
        <Bar dataKey="uv" label fill="#ff7300" />
      </BarChart>,
    );
    expect(container.querySelectorAll('path')).toHaveLength(0);
  });

  test('Render customized shapem when shape is set to be a react element', () => {
    const Shape = (props: any) => {
      const { x, y } = props;

      return <circle className="customized-shape" cx={x} cy={y} r={8} />;
    };
    const { container } = render(
      <BarChart width={100} height={50} data={data}>
        <Bar dataKey="uv" label fill="#ff7300" shape={<Shape />} />
      </BarChart>,
    );
    expect(container.querySelectorAll('.customized-shape')).toHaveLength(4);
  });

  test('Render customized shapem when shape is set to be a function', () => {
    const renderShape = (props: RectangleProps & DataType) => {
      const { x, y } = props;

      return <circle className="customized-shape" cx={x} cy={y} r={8} />;
    };
    const { container } = render(
      <BarChart width={100} height={50} data={data}>
        <Bar dataKey="uv" label fill="#ff7300" shape={renderShape} />
      </BarChart>,
    );
    expect(container.querySelectorAll('.customized-shape')).toHaveLength(4);
  });

  describe('Render a bar', () => {
    const onePointData = [{ number: 1, name: 'food', uv: 400, pv: 2400 }];

    test('renders a bar if size is specified', () => {
      const { container } = render(
        <BarChart width={100} height={50} data={onePointData} barSize={20}>
          <XAxis dataKey="number" type="number" />
          <Bar dataKey="uv" name="uv" isAnimationActive={false} />
        </BarChart>,
      );

      const rectangles = container.querySelectorAll('.recharts-rectangle');
      expect(rectangles).toHaveLength(1);

      const rectangleProps = rectangles[0];
      expect(rectangleProps).toHaveAttribute('x', '85');
      expect(rectangleProps).toHaveAttribute('y', '5');
      expect(rectangleProps).toHaveAttribute('width', '20');
      expect(rectangleProps).toHaveAttribute('height', '10');
    });

    test('renders a bar if size is limited', () => {
      const { container } = render(
        <BarChart width={100} height={50} data={onePointData}>
          <XAxis dataKey="number" type="number" />
          <Bar dataKey="uv" name="uv" isAnimationActive={false} maxBarSize={40} />
        </BarChart>,
      );

      const rectangles = container.querySelectorAll('.recharts-rectangle');
      expect(rectangles).toHaveLength(1);

      const rectangleProps = rectangles[0];
      expect(rectangleProps).toHaveAttribute('x', '79');
      expect(rectangleProps).toHaveAttribute('y', '5');
      expect(rectangleProps).toHaveAttribute('width', '32');
      expect(rectangleProps).toHaveAttribute('height', '10');
    });
  });

  // guard against negative values in clipPath - ref https://github.com/recharts/recharts/issues/2009
  test('Renders a (Bar) chart with less width than left, right margin and less height than top, bottom margin', () => {
    const { container } = render(
      <BarChart
        width={50}
        height={80}
        data={data}
        margin={{
          top: 50,
          right: 100,
          left: 100,
          bottom: 50,
        }}
        layout="vertical"
      >
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Bar dataKey="pv" fill="#8884d8" isAnimationActive={false} />
      </BarChart>,
    );

    // expect nothing to render because height and width are 0
    expect(container.querySelectorAll('.recharts-rectangle')).toHaveLength(0);

    const clipPath = container.querySelector('#recharts53-clip');
    assertNotNull(clipPath);
    expect(clipPath.children[0]).not.toBeNull();

    // expect clipPath rect to have a width and height of 0
    expect(clipPath.children[0]).toHaveAttribute('width', '0');
    expect(clipPath.children[0]).toHaveAttribute('height', '0');
  });

  describe('BarChart layout context', () => {
    it(
      'should provide viewBox and clipPathId if there are no axes',
      testChartLayoutContext(
        props => (
          <BarChart width={100} height={50} barSize={20}>
            {props.children}
          </BarChart>
        ),
        ({ clipPathId, viewBox, xAxisMap, yAxisMap }) => {
          expect(clipPathId).toMatch(/recharts\d+-clip/);
          expect(viewBox).toEqual({ height: 40, width: 90, x: 5, y: 5 });
          expect(xAxisMap).toEqual({});
          expect(yAxisMap).toEqual({});
        },
      ),
    );

    it(
      'should provide axisMaps if axes are specified',
      testChartLayoutContext(
        props => (
          <BarChart width={100} height={50} barSize={20}>
            <XAxis dataKey="number" type="number" />
            <YAxis type="category" dataKey="name" />
            {props.children}
          </BarChart>
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
                "bandSize": 10,
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
                "realScaleType": "band",
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

  it(
    'should set width and height in context',
    testChartLayoutContext(
      props => (
        <BarChart width={100} height={50} barSize={20}>
          {props.children}
        </BarChart>
      ),
      ({ width, height }) => {
        expect(width).toBe(100);
        expect(height).toBe(50);
      },
    ),
  );
});
