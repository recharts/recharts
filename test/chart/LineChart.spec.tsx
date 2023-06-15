import React, { FC } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import type { JSX } from '@babel/types';

import { LineChart, Line, XAxis, YAxis, Tooltip, Brush, CartesianAxis, Legend } from '../../src';

const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
  { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
  { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
  { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
  { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
];

describe('<LineChart />', () => {
  test('Render 1 line in simple LineChart', () => {
    const { container } = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );
    expect(container.querySelectorAll('.recharts-line .recharts-line-curve')).toHaveLength(1);
  });

  test('Render 1 line when LineChart has <XAxis /> and <YAxis />', () => {
    const { container } = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis />
        <YAxis type="category" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );
    expect(container.querySelectorAll('.recharts-line .recharts-line-curve')).toHaveLength(1);
  });

  test('Sets title and description correctly', () => {
    const { container } = render(
      <LineChart title="Chart title" desc="Chart description" width={400} height={400} data={data}>
        <Line type="monotone" dataKey="uv" />
      </LineChart>,
    );
    expect(container.querySelector('title')).toHaveTextContent('Chart title');
    expect(container.querySelector('desc')).toHaveTextContent('Chart description');
  });

  test('Render smooth curve when type of Line is monotone', () => {
    const { container } = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis />
        <YAxis type="category" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );
    const curves = container.querySelectorAll('.recharts-line .recharts-line-curve');
    expect(curves).toHaveLength(1);

    expect(curves[0].getAttribute('d')?.indexOf('C')).not.toEqual(-1);
  });

  test('Render two paths when connectNulls is false', () => {
    const breakData = [
      { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
      { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
      { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
      { name: 'Page D', uv: null, pv: 9800, amt: 2400 },
      { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
      { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
    ];

    const { container } = render(
      <LineChart width={400} height={400} data={breakData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis />
        <YAxis type="category" />
        <Line type="monotone" connectNulls={false} dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );
    const curves = container.querySelectorAll('.recharts-line .recharts-line-curve');
    expect(curves).toHaveLength(1);
    const path = curves[0].getAttribute('d');

    if (!path) {
      throw new Error('Path is null');
    }

    expect(path.length - path.split('M').join('').length).toEqual(2);
  });

  test('Render one paths when connectNulls is true', () => {
    const breakData = [
      { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
      { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
      { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
      { name: 'Page D', uv: null, pv: 9800, amt: 2400 },
      { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
      { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
    ];

    const { container } = render(
      <LineChart width={400} height={400} data={breakData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis />
        <YAxis type="category" />
        <Line type="monotone" connectNulls dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );
    const curves = container.querySelectorAll('.recharts-line .recharts-line-curve');
    expect(curves.length).toEqual(1);
    const path = curves[0].getAttribute('d');

    if (!path) {
      throw new Error('Path is null');
    }

    expect(path.length - path.split('M').join('').length).toEqual(1);
  });

  test('Renders customized active dot when activeDot is set to be a ReactElement', () => {
    jest.useFakeTimers();

    const ActiveDot: FC<{ cx?: number; cy?: number }> = ({ cx, cy }) => (
      <circle cx={cx} cy={cy} r={10} className="customized-active-dot" />
    );

    const { container } = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line activeDot={<ActiveDot />} type="monotone" dataKey="uv" stroke="#ff7300" />
        <Tooltip />
      </LineChart>,
    );

    const mouseEnterEvent = new MouseEvent('mouseover', { bubbles: true, cancelable: true });
    Object.assign(mouseEnterEvent, { pageX: 200, pageY: 200 });
    const chart = container.querySelector('.recharts-wrapper');
    if (!chart) {
      throw new Error('Chart is null');
    }

    fireEvent(chart, mouseEnterEvent);

    jest.runAllTimers();

    const dot = container.querySelectorAll('.customized-active-dot');
    expect(dot).toHaveLength(1);
  });

  test('Render 1 line in simple LineChart', () => {
    const { container } = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line strokeDasharray="5 5" type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );
    const curves = container.querySelectorAll('.recharts-line .recharts-line-curve');
    expect(curves).toHaveLength(1);
  });

  test('Renders 1 dot no line when the length of data is 1', () => {
    const { container } = render(
      <LineChart width={400} height={400} data={data.slice(0, 1)} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line isAnimationActive={false} label type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );
    expect(container.querySelectorAll('.recharts-line .recharts-line-curve')).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-line .recharts-line-dot')).toHaveLength(1);
  });

  test('Renders 6 labels when label is setted to be true', () => {
    const { container } = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line isAnimationActive={false} label type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(6);
  });

  test('Renders 6 labels when label is setted to be a function', () => {
    const renderLabel = (props: { x: number; y: number; key: string }) => {
      const { x, y, key } = props;
      return (
        <text className="customized-label" x={x} y={y} key={key}>
          test
        </text>
      );
    };

    const { container } = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line isAnimationActive={false} label={renderLabel} dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );

    const labels = container.querySelectorAll('.customized-label');
    expect(labels).toHaveLength(6);
  });

  test('Renders 6 labels when label is setted to be a react element', () => {
    const CustomizedLabel = (props: { x?: number; y?: number; key?: string }) => {
      const { x, y, key } = props;
      return (
        <text className="customized-label" x={x} y={y} key={key}>
          test
        </text>
      );
    };
    const { container } = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line isAnimationActive={false} label={<CustomizedLabel />} dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );

    const labels = container.querySelectorAll('.customized-label');
    expect(labels).toHaveLength(6);
  });

  test('Renders 6 dots when dot is setted to be true', () => {
    const { container } = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line isAnimationActive={false} dot type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );
    expect(container.querySelectorAll('.recharts-line-dot')).toHaveLength(6);
  });

  test('Renders 6 dots when dot is setted to be a function', () => {
    const renderDot = (props: any) => {
      const { cx, cy, key } = props;

      return <circle className="customized-dot" key={key} cx={cx} cy={cy} r={10} />;
    };
    const { container } = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line isAnimationActive={false} dot={renderDot} type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );
    expect(container.querySelectorAll('.customized-dot')).toHaveLength(6);
  });

  test('Renders 6 dots when dot is setted to be a react element', () => {
    const Dot = (props: { cx?: number; cy?: number; key?: string }) => {
      const { cx, cy, key } = props;

      return <circle className="customized-dot" key={key} cx={cx} cy={cy} r={10} />;
    };
    const { container } = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line isAnimationActive={false} dot={<Dot />} type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );
    expect(container.querySelectorAll('.customized-dot')).toHaveLength(6);
  });

  test('click on Curve should invoke onClick callback', () => {
    const onClick = jest.fn();
    const onMouseDown = jest.fn();
    const onMouseUp = jest.fn();
    const { container } = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line
          onClick={onClick}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          type="monotone"
          dataKey="uv"
          stroke="#ff7300"
        />
      </LineChart>,
    );

    const curve = container.querySelector('.recharts-line-curve');
    if (!curve) {
      throw new Error('Curve not found');
    }
    fireEvent.click(curve);
    fireEvent.mouseDown(curve);
    fireEvent.mouseUp(curve);

    expect(onClick).toHaveBeenCalled();
    expect(onMouseDown).toHaveBeenCalled();
    // TODO: figure out why onMouseUp is not fiering+
    // expect(onMouseUp).tohaveBeenCalled();
    // expect(propsOfCallback).to.include.all.keys(['className', 'points', 'connectNulls', 'type']);
    // expect(eventOfCallback).to.include.all.keys(['currentTarget', 'target']);
  });

  /*
  test('should show tooltip cursor on MouseEnter and MouseMove and hide on MouseLeave', () => {
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };
    const height = 400;
    const width = 400;
    const { container } = render(
      <LineChart width={width} height={height} data={data} margin={margin}>
        <Line isAnimationActive={false} type="monotone" dataKey="uv" stroke="#ff7300" />
        <Tooltip />
        <Brush />
      </LineChart>,
    );

    const chartWidth = width - margin.left - margin.right;
    const dotSpacing = chartWidth / (data.length - 1);

    // simulate entering just past Page A to test snapping of the cursor line
    expect(container.querySelectorAll('.recharts-tooltip-cursor')).toHaveLength(0);
    fireEvent.mouseMove(container, { clientX: margin.left + 0.1 * dotSpacing, clientY: height / 2 });
    // fireEvent.mouseEnter(container, { clientX: margin.left + 0.1 * dotSpacing, clientY: height / 2 });

    const tooltipCursors = container.querySelectorAll('.recharts-tooltip-cursor');
    expect(tooltipCursors).toHaveLength(1);

    // make sure tooltip is in the right spot.
    // const chartBottom = height - margin.top - 2 * margin.bottom;
    // let expectedX = margin.left;
    // expect(tooltipCursors.at(0).props().d).to.equal(`M${expectedX},${margin.top}L${expectedX},${chartBottom}`);

    // // simulate moving 10 pixels past the PageC Dot
    // expectedX = margin.left + dotSpacing * 2;
    // wrapper.simulate('mouseMove', { pageX: expectedX + 0.1 * dotSpacing, pageY: height / 2 });

    // tooltipCursors = wrapper.find('.recharts-tooltip-cursor').hostNodes();
    // expect(tooltipCursors.length).to.equal(1);

    // expect(tooltipCursors.at(0).props().d).to.equal(`M${expectedX},${margin.top}L${expectedX},${chartBottom}`);

    // // simulate leaving the area
    // wrapper.simulate('mouseLeave');
    // expect(wrapper.find('.recharts-tooltip-cursor').hostNodes.length).to.equal(0);
  }); */

  test('Should update the line chart when the brush changes', () => {
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };
    const height = 400;
    const width = 400;
    const { container } = render(
      <LineChart width={width} height={height} data={data} margin={margin}>
        <Line isAnimationActive={false} type="monotone" dataKey="uv" stroke="#ff7300" />
        <Tooltip />
        <Brush />
      </LineChart>,
    );

    const lineDots = container.querySelectorAll('.recharts-line .recharts-line-dots');
    expect(lineDots).toHaveLength(1);
    expect(lineDots[0].children).toHaveLength(6);

    // verify one of the dots that we expect to move when the brush happens
    expect(lineDots[0].children[2]).toHaveAttribute('cx', '164');
    expect(lineDots[0].children[2]).toHaveAttribute('cy', '100');

    // simulate a brush to only include the data elements at indices 2-4
    // find the left cursors
    const leftCursor = container.querySelectorAll('.recharts-brush-traveller')[0];
    const rightrCursor = container.querySelectorAll('.recharts-brush-traveller')[1];

    if (!leftCursor || !rightrCursor) {
      throw new Error('Cursors not found');
    }

    // move the left cursor to the right 200px
    const leftCursorMouseDownEvent = new MouseEvent('mousedown', { bubbles: true, cancelable: true });
    Object.assign(leftCursorMouseDownEvent, { pageX: 0, pageY: 0 });

    const leftCursorMouseMoveEvent = new MouseEvent('mousemove', { bubbles: true, cancelable: true });
    Object.assign(leftCursorMouseMoveEvent, { pageX: 200, pageY: 0 });

    fireEvent(leftCursor, leftCursorMouseDownEvent);
    fireEvent(window, leftCursorMouseMoveEvent);
    fireEvent.mouseUp(window);

    // move the right cursor to the left 60px
    const rightCursorMouseDownEvent = new MouseEvent('mousedown', { bubbles: true, cancelable: true });
    Object.assign(rightCursorMouseDownEvent, { pageX: 400, pageY: 0 });

    const rightCursorMouseMoveEvent = new MouseEvent('mousemove', { bubbles: true, cancelable: true });
    Object.assign(rightCursorMouseMoveEvent, { pageX: 340, pageY: 0 });

    fireEvent(rightrCursor, rightCursorMouseDownEvent);
    fireEvent(window, rightCursorMouseMoveEvent);
    fireEvent.mouseUp(window);

    // we should only have three dots now
    const newLineDots = container.querySelectorAll('.recharts-line .recharts-line-dots');
    expect(newLineDots).toHaveLength(1);
    expect(newLineDots[0].children).toHaveLength(3);

    // make sure the new first dot is the same as the old 2 dot, just in a new place
    expect(lineDots[0].children[0]).toHaveAttribute('cx', margin.left.toString());
    expect(lineDots[0].children[0]).toHaveAttribute('cy', '20');

    // verify one of the dots that we expect to move when the brush happens
    expect(lineDots[0].children[1]).toHaveAttribute('cx', '200');
    expect(lineDots[0].children[1]).toHaveAttribute('cy', '126.66666666666667');
  });
});

describe('<LineChart /> - Pure Rendering', () => {
  const pureElements = [Line];

  const spies: Array<jest.SpyInstance<JSX.Element | null, []>> = [];
  // CartesianAxis is what is actually render for XAxis and YAxis
  let axisSpy: jest.SpyInstance<JSX.Element | null, []>;

  // spy on each pure element before each test, and restore the spy afterwards
  beforeAll(() => {
    pureElements.forEach((el, i) => {
      spies[i] = jest.spyOn(el.prototype, 'render');
    });
    axisSpy = jest.spyOn(CartesianAxis.prototype, 'render');
  });
  afterEach(() => {
    pureElements.forEach((_el, i) => spies[i].mockReset());
    axisSpy.mockReset();
  });

  afterAll(() => {
    pureElements.forEach((_el, i) => spies[i].mockRestore());
    axisSpy.mockRestore();
  });

  const chart = (
    <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
      <Line isAnimationActive={false} type="monotone" dataKey="uv" stroke="#ff7300" />
      <Tooltip />
      <XAxis />
      <YAxis />
      <Brush />
    </LineChart>
  );

  // protect against the future where someone might mess up our clean rendering
  test('should only render Line once when the mouse enters and moves', () => {
    const { container } = render(chart);

    spies.forEach(el => expect(el).toHaveBeenCalledTimes(1));
    expect(axisSpy).toHaveBeenCalledTimes(2);

    const mouseEnterEvent = new MouseEvent('mouseenter', { bubbles: true, cancelable: true });
    Object.assign(mouseEnterEvent, { pageX: 30, pageY: 200 });
    fireEvent(container, mouseEnterEvent);

    const mouseMoveEvent = new MouseEvent('mousemove', { bubbles: true, cancelable: true });
    Object.assign(mouseMoveEvent, { pageX: 200, pageY: 200 });
    fireEvent(container, mouseMoveEvent);

    fireEvent.mouseLeave(container);

    spies.forEach(el => expect(el).toHaveBeenCalledTimes(1));
    expect(axisSpy).toHaveBeenCalledTimes(2);
  });

  // protect against the future where someone might mess up our clean rendering
  test("should only render Line once when the brush moves but doesn't change start/end indices", () => {
    const { container } = render(chart);

    spies.forEach(el => expect(el).toHaveBeenCalledTimes(1));
    expect(axisSpy).toHaveBeenCalledTimes(2);

    const leftCursor = container.querySelector('.recharts-brush-traveller');
    if (!leftCursor) {
      throw new Error('Cursor not found');
    }

    const mouseDownEvent = new MouseEvent('mousedown', { bubbles: true, cancelable: true });
    Object.assign(mouseDownEvent, { pageX: 0, pageY: 0 });

    const mouseMoveEvent = new MouseEvent('mousemove', { bubbles: true, cancelable: true });
    Object.assign(mouseMoveEvent, { pageX: 0, pageY: 0 });

    fireEvent(leftCursor, mouseDownEvent);
    fireEvent(window, mouseMoveEvent);
    fireEvent.mouseUp(window);

    spies.forEach(el => expect(el).toHaveBeenCalledTimes(1));
    expect(axisSpy).toHaveBeenCalledTimes(2);
  });
});

describe('<LineChart /> - Pure Rendering with legend', () => {
  const pureElements = [Line];

  const spies: Array<jest.SpyInstance<JSX.Element | null, []>> = [];
  // CartesianAxis is what is actually render for XAxis and YAxis
  let axisSpy: jest.SpyInstance<JSX.Element | null, []>;

  // spy on each pure element before each test, and restore the spy afterwards
  beforeAll(() => {
    pureElements.forEach((el, i) => {
      spies[i] = jest.spyOn(el.prototype, 'render');
    });
    axisSpy = jest.spyOn(CartesianAxis.prototype, 'render');
  });
  afterEach(() => {
    pureElements.forEach((_el, i) => spies[i].mockReset());
    axisSpy.mockReset();
  });
  afterAll(() => {
    pureElements.forEach((_el, i) => spies[i].mockRestore());
    axisSpy.mockRestore();
  });

  const chart = (
    <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
      <Line isAnimationActive={false} type="monotone" dataKey="uv" stroke="#ff7300" />
      <Tooltip />
      <XAxis />
      <YAxis />
      <Brush />
      <Legend />
    </LineChart>
  );

  // protect against the future where someone might mess up our clean rendering
  test('should only render Line once when the mouse enters and moves', () => {
    const { container } = render(chart);

    spies.forEach(el => expect(el).toHaveBeenCalledTimes(1));
    expect(axisSpy).toHaveBeenCalledTimes(2);

    const mouseEnterEvent = new MouseEvent('mouseenter', { bubbles: true, cancelable: true });
    Object.assign(mouseEnterEvent, { pageX: 30, pageY: 200 });
    fireEvent(container, mouseEnterEvent);

    const mouseMoveEvent = new MouseEvent('mousemove', { bubbles: true, cancelable: true });
    Object.assign(mouseMoveEvent, { pageX: 200, pageY: 200 });
    fireEvent(container, mouseMoveEvent);

    fireEvent.mouseLeave(container);

    spies.forEach(el => expect(el).toHaveBeenCalledTimes(1));
    expect(axisSpy).toHaveBeenCalledTimes(2);
  });

  // protect against the future where someone might mess up our clean rendering
  test("should only render Line once when the brush moves but doesn't change start/end indices", () => {
    const { container } = render(chart);

    spies.forEach(el => expect(el).toHaveBeenCalledTimes(1));
    expect(axisSpy).toHaveBeenCalledTimes(2);

    const leftCursor = container.querySelector('.recharts-brush-traveller');
    if (!leftCursor) {
      throw new Error('Cursor not found');
    }

    const mouseDownEvent = new MouseEvent('mousedown', { bubbles: true, cancelable: true });
    Object.assign(mouseDownEvent, { pageX: 0, pageY: 0 });

    const mouseMoveEvent = new MouseEvent('mousemove', { bubbles: true, cancelable: true });
    Object.assign(mouseMoveEvent, { pageX: 0, pageY: 0 });

    fireEvent(leftCursor, mouseDownEvent);
    fireEvent(window, mouseMoveEvent);
    fireEvent.mouseUp(window);

    spies.forEach(el => expect(el).toHaveBeenCalledTimes(1));
    expect(axisSpy).toHaveBeenCalledTimes(2);
  });
});

describe('<LineChart /> - Rendering two line charts with syncId', () => {
  const margin = { top: 20, right: 20, bottom: 20, left: 20 };
  const height = 400;
  const width = 400;

  // X Axis mirrored
  const data2 = [
    { name: 'Page F', uv: 500, pv: 4800, amt: 2400 },
    { name: 'Page E', uv: 550, pv: 3908, amt: 2400 },
    { name: 'Page D', uv: 800, pv: 9800, amt: 2400 },
    { name: 'Page C', uv: 100, pv: 1398, amt: 2400 },
    { name: 'Page B', uv: 678, pv: 4567, amt: 2400 },
    { name: 'Page A', uv: 230, pv: 2400, amt: 2400 },
  ];

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });
  test('should show tooltips for both charts synced by index on MouseEnter and hide on MouseLeave/Escape', async () => {
    jest.useFakeTimers();
    const { container, getByText } = render(
      <div>
        <LineChart width={width} height={height} data={data} margin={margin} syncId="test">
          <Line isAnimationActive={false} type="monotone" dataKey="uv" stroke="#ff7300" />
          <Tooltip />
          <XAxis dataKey="name" />
        </LineChart>
        <LineChart width={width} height={height} data={data2} margin={margin} syncId="test">
          <Line isAnimationActive={false} type="monotone" dataKey="uv" stroke="#ff7300" />
          <Tooltip />
          <XAxis dataKey="name" />
        </LineChart>
      </div>,
    );

    const chartWidth = width - margin.left - margin.right;
    const dotSpacing = chartWidth / (data.length - 1);

    // // simulate entering just past Page A of Chart1 to test snapping of the cursor line
    expect(container.querySelectorAll('.recharts-tooltip-cursor')).toHaveLength(0);

    const firstChart = container.querySelector('.recharts-wrapper');
    if (!firstChart) {
      throw new Error('Chart not found');
    }

    const mouseEnterEvent = new MouseEvent('mouseover', { bubbles: true, cancelable: true });
    Object.assign(mouseEnterEvent, { pageX: margin.left + 0.1 * dotSpacing, pageY: height / 2 });
    fireEvent(firstChart, mouseEnterEvent);

    jest.runAllTimers();

    // There are two tooltips - one for each LineChart as they have the same syncId
    const tooltipCursors = container.querySelectorAll('.recharts-tooltip-cursor');
    expect(tooltipCursors).toHaveLength(2);

    // make sure tooltips display the correct values, i.e. the value of the first item in the data
    expect(getByText('400')).toBeInTheDocument();
    expect(getByText('500')).toBeInTheDocument();

    // Check the activeDots are highlighted
    const activeDotNodes = container.querySelectorAll('.recharts-active-dot');
    expect(activeDotNodes).toHaveLength(2);

    // simulate leaving the area
    fireEvent.mouseLeave(firstChart);
    jest.runAllTimers();
    expect(container.querySelectorAll('.recharts-tooltip-cursor')).toHaveLength(0);

    fireEvent(firstChart, mouseEnterEvent);
    jest.runAllTimers();

    expect(container.querySelectorAll('.recharts-tooltip-cursor')).toHaveLength(2);
  });

  test("should show tooltips using syncMethod: 'value' for both charts on MouseEnter and hide on MouseLeave", async () => {
    const chart1 = (
      <LineChart width={width} height={height} data={data} margin={margin} syncId="test" syncMethod="value">
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        <Tooltip />
        <XAxis dataKey="name" />
      </LineChart>
    );
    const chart2 = (
      <LineChart width={width} height={height} data={data2} margin={margin} syncId="test" syncMethod="value">
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        <Tooltip />
        <XAxis dataKey="name" />
      </LineChart>
    );
    const { container, getByText } = render(
      <div>
        {chart1}
        {chart2}
      </div>,
    );

    const chartWidth = width - margin.left - margin.right;
    const dotSpacing = chartWidth / (data.length - 1);

    // simulate entering just past Page A of Chart1 to test snapping of the cursor line
    expect(container.querySelectorAll('.recharts-tooltip-cursor')).toHaveLength(0);

    const mouseEnterEvent = new MouseEvent('mouseover', { bubbles: true });
    Object.assign(mouseEnterEvent, { pageX: margin.left + 0.1 * dotSpacing, pageY: height / 2 });

    const firstChart = container.querySelector('.recharts-wrapper');
    if (!firstChart) {
      throw new Error('Chart not found');
    }

    fireEvent(firstChart, mouseEnterEvent);
    jest.runAllTimers();

    // There are two tooltips - one for each LineChart as they have the same syncId
    const tooltipCursors = container.querySelectorAll('.recharts-tooltip-cursor');
    expect(tooltipCursors).toHaveLength(2);

    // make sure tooltips display the correct values, synced by data value
    expect(getByText('400')).toBeInTheDocument();
    expect(getByText('230')).toBeInTheDocument();

    // Check the activeDots are highlighted
    expect(container.querySelectorAll('.recharts-active-dot')).toHaveLength(2);

    // simulate leaving the area
    fireEvent.mouseLeave(firstChart);
    jest.runAllTimers();

    expect(container.querySelectorAll('.recharts-active-dot')).toHaveLength(0);
  });

  test('should show tooltips using syncMethod: [function] for both charts on MouseEnter and hide on MouseLeave', async () => {
    const syncMethodFunction = () => {
      return 1;
    };

    const chart1 = (
      <LineChart
        width={width}
        height={height}
        data={data}
        margin={margin}
        syncId="test"
        syncMethod={syncMethodFunction}
      >
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        <Tooltip />
        <XAxis dataKey="name" />
      </LineChart>
    );
    const chart2 = (
      <LineChart
        width={width}
        height={height}
        data={data2}
        margin={margin}
        syncId="test"
        syncMethod={syncMethodFunction}
      >
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        <Tooltip />
        <XAxis dataKey="name" />
      </LineChart>
    );
    const { container } = render(
      <div>
        {chart1}
        {chart2}
      </div>,
    );

    const chartWidth = width - margin.left - margin.right;
    const dotSpacing = chartWidth / (data.length - 1);

    // simulate entering just past Page A of Chart1 to test snapping of the cursor line
    expect(container.querySelectorAll('.recharts-tooltip-cursor')).toHaveLength(0);

    const mouseOverEvent = new MouseEvent('mouseover', { bubbles: true });
    Object.assign(mouseOverEvent, { pageX: margin.left + 0.1 * dotSpacing, pageY: height / 2 });

    const firstChart = container.querySelector('.recharts-wrapper');
    if (!firstChart) {
      throw new Error('Chart not found');
    }

    fireEvent(firstChart, mouseOverEvent);
    jest.runAllTimers();

    // There are two tooltips - one for each LineChart as they have the same syncId
    expect(container.querySelectorAll('.recharts-tooltip-cursor')).toHaveLength(2);

    // make sure tooltips display the correct values, synced by data value
    expect(screen.queryByText('400')).toBeTruthy();
    expect(screen.queryByText('550')).toBeTruthy();

    // Check the activeDots are highlighted
    expect(container.querySelectorAll('.recharts-active-dot')).toHaveLength(2);

    // simulate leaving the area
    fireEvent.mouseLeave(firstChart);
    jest.runAllTimers();
    expect(container.querySelectorAll('.recharts-active-dot')).toHaveLength(0);
  });

  test('Render a line with clipDot option on the dot and expect attributes not to be NaN', () => {
    const { container } = render(
      <LineChart width={width} height={height} data={data2}>
        <Line type="monotone" dataKey="uv" stroke="#ff7300" dot={{ clipDot: false }} />
        <Tooltip />
        <XAxis dataKey="name" allowDataOverflow />
      </LineChart>,
    );

    expect(container.querySelectorAll('.recharts-line-curve')).toHaveLength(1);
    const clipPaths = container.getElementsByTagName('clipPath');
    for (let i = 0; i < clipPaths.length; i++) {
      const clipPath = clipPaths.item(i);
      const rects = clipPath && clipPath.getElementsByTagName('rect');
      for (let j = 0; j < clipPaths.length; j++) {
        const rect = rects?.item(j);
        if (rect) {
          expect(Number(rect.getAttribute('height'))).not.toBeNaN();
          expect(Number(rect.getAttribute('width'))).not.toBeNaN();
          expect(Number(rect.getAttribute('x'))).not.toBeNaN();
          expect(Number(rect.getAttribute('y'))).not.toBeNaN();
        }
      }
    }
  });
});
