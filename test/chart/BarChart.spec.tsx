import { render } from '@testing-library/react';
import React from 'react';
import { Bar, BarChart, Rectangle, RectangleProps, Tooltip, XAxis, YAxis } from '../../src';
import { mockMouseEvent } from '../helper/mockMouseEvent';

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
    jest.useFakeTimers();

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
    const mouseOverEvent = mockMouseEvent('mouseover', chart!, { pageX: 100, pageY: 100 });

    mouseOverEvent.fire();

    jest.runAllTimers();
    const bar = container.querySelectorAll('.recharts-active-bar');
    expect(bar).toHaveLength(1);
  });

  test('Renders customized active bar when activeBar set to be a function', () => {
    jest.useFakeTimers();

    const { container } = render(
      <div style={{ height: 200, width: 700 }}>
        <BarChart width={700} height={200} data={data}>
          <Bar
            dataKey="uv"
            stackId="test"
            fill="#ff7300"
            activeBar={(props: RectangleProps) => {
              return <Rectangle {...props} name={props.name} />;
            }}
          />
          <Tooltip />
        </BarChart>
        ,
      </div>,
    );

    const chart = container.querySelector('.recharts-wrapper');
    const mouseOverEvent = mockMouseEvent('mouseover', chart!, { pageX: 100, pageY: 100 });

    mouseOverEvent.fire();

    jest.runAllTimers();
    const bar = container.querySelectorAll('.recharts-active-bar');
    expect(bar).toHaveLength(1);
  });

  test('Renders customized active bar when activeBar set to be a ReactElement', () => {
    jest.useFakeTimers();

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
    const mouseOverEvent = mockMouseEvent('mouseover', chart!, { pageX: 100, pageY: 100 });

    mouseOverEvent.fire();

    jest.runAllTimers();
    const bar = container.querySelectorAll('.recharts-active-bar');
    expect(bar).toHaveLength(1);
  });

  test('Renders customized active bar when activeBar is set to be a truthy boolean', () => {
    jest.useFakeTimers();

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
    const mouseOverEvent = mockMouseEvent('mouseover', chart!, { pageX: 100, pageY: 100 });

    mouseOverEvent.fire();

    jest.runAllTimers();
    const bar = container.querySelectorAll('.recharts-active-bar');
    expect(bar).toHaveLength(1);
  });

  test('Does not render customized active bar when activeBar set to be a falsy boolean', () => {
    jest.useFakeTimers();

    const { container } = render(
      <div style={{ height: 200, width: 700 }}>
        <BarChart width={700} height={200} data={data}>
          <Bar dataKey="uv" stackId="test" fill="#ff7300" activeBar={false} />
          <Tooltip />
        </BarChart>
      </div>,
    );

    const chart = container.querySelector('.recharts-wrapper');
    const mouseOverEvent = mockMouseEvent('mouseover', chart!, { pageX: 100, pageY: 100 });

    mouseOverEvent.fire();

    jest.runAllTimers();
    const bar = container.querySelectorAll('.recharts-active-bar');
    expect(bar).toHaveLength(0);
  });

  test('Renders customized active bar when activeBar set to be an object', () => {
    jest.useFakeTimers();

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
    const mouseOverEvent = mockMouseEvent('mouseover', chart!, { pageX: 100, pageY: 100 });

    mouseOverEvent.fire();

    jest.runAllTimers();
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
});
