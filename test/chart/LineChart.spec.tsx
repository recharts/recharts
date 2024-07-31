import React, { FC } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { describe, MockInstance, test, vi } from 'vitest';
import { Brush, CartesianAxis, Customized, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from '../../src';
import { assertNotNull } from '../helper/assertNotNull';
import { testChartLayoutContext } from '../util/context';
import { CurveType } from '../../src/shape/Curve';
import { lineChartMouseHoverTooltipSelector } from '../component/Tooltip/tooltipMouseHoverSelectors';
import { PageData } from '../_data';
import { expectXAxisTicks } from '../helper/expectAxisTicks';
import { generateMockData } from '../helper/generateMockData';
import { useClipPathId, useViewBox } from '../../src/context/chartLayoutContext';
import { useAppSelector } from '../../src/state/hooks';

describe('<LineChart />', () => {
  test('Render 1 line in simple LineChart', () => {
    const { container } = render(
      <LineChart width={400} height={400} data={PageData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );
    const allLines = container.querySelectorAll('.recharts-line .recharts-line-curve');
    expect(allLines).toHaveLength(1);
    const line = allLines[0];
    assertNotNull(line);
    expect(line.getAttributeNames()).toEqual([
      'stroke',
      'stroke-width',
      'fill',
      'width',
      'height',
      'class',
      'stroke-dasharray',
      'd',
    ]);
    expect(line).toHaveAttribute('stroke', '#ff7300');
    expect(line).toHaveAttribute('stroke-width', '1');
    expect(line).toHaveAttribute('fill', 'none');
    expect(line).toHaveAttribute('width', '360');
    expect(line).toHaveAttribute('height', '360');
    expect(line).toHaveAttribute('class', 'recharts-curve recharts-line-curve');
    expect(line).toHaveAttribute('stroke-dasharray', '0px 0px');
    expect(line).toHaveAttribute(
      'd',
      'M20,20C44,65,68,110,92,110C116,110,140,110,164,110C188,110,212,200,236,200C260,200,284,129.8,308,129.8C332,129.8,356,169.85,380,209.9',
    );
  });

  test('Renders the same 1 line but smaller when LineChart has <XAxis /> and <YAxis />', () => {
    const { container } = render(
      <LineChart width={400} height={400} data={PageData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis />
        <YAxis type="category" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );

    const allLines = container.querySelectorAll('.recharts-line .recharts-line-curve');
    expect(allLines).toHaveLength(1);
    const line = allLines[0];
    assertNotNull(line);
    expect(line.getAttributeNames()).toEqual([
      'stroke',
      'stroke-width',
      'fill',
      'width',
      'height',
      'class',
      'stroke-dasharray',
      'd',
    ]);
    expect(line).toHaveAttribute('stroke', '#ff7300');
    expect(line).toHaveAttribute('stroke-width', '1');
    expect(line).toHaveAttribute('fill', 'none');
    expect(line).toHaveAttribute('width', '300');
    expect(line).toHaveAttribute('height', '330');
    expect(line).toHaveAttribute('class', 'recharts-curve recharts-line-curve');
    expect(line).toHaveAttribute('stroke-dasharray', '0px 0px');
    expect(line).toHaveAttribute(
      'd',
      'M80,350C100,308.75,120,267.5,140,267.5C160,267.5,180,267.5,200,267.5C220,267.5,240,212.5,260,185C280,157.5,300,130,320,102.5C340,75,360,47.5,380,20',
    );
  });

  test('Sets title and description correctly', () => {
    const { container } = render(
      <LineChart title="Chart title" desc="Chart description" width={400} height={400} data={PageData}>
        <Line type="monotone" dataKey="uv" />
      </LineChart>,
    );
    expect(container.querySelector('title')).toHaveTextContent('Chart title');
    expect(container.querySelector('desc')).toHaveTextContent('Chart description');
  });

  describe('curve type', () => {
    type CurveTestCase = {
      curve: CurveType;
      expectedD: string;
    };
    const allCurves: ReadonlyArray<CurveTestCase> = [
      {
        curve: 'basis',
        expectedD:
          'M80,350L90,336.25C100,322.5,120,295,140,281.25C160,267.5,180,267.5,200,253.75C220,240,240,212.5,260,185C280,157.5,300,130,320,102.5C340,75,360,47.5,370,33.75L380,20',
      },
      {
        curve: 'basisClosed',
        expectedD:
          'M140,281.25C160,267.5,180,267.5,200,253.75C220,240,240,212.5,260,185C280,157.5,300,130,320,102.5C340,75,360,47.5,320,88.75C280,130,180,240,140,281.25C100,322.5,120,295,140,281.25',
      },
      {
        curve: 'basisOpen',
        expectedD: 'M140,281.25C160,267.5,180,267.5,200,253.75C220,240,240,212.5,260,185C280,157.5,300,130,320,102.5',
      },
      {
        curve: 'bumpX',
        expectedD:
          'M80,350C110,350,110,267.5,140,267.5C170,267.5,170,267.5,200,267.5C230,267.5,230,185,260,185C290,185,290,102.5,320,102.5C350,102.5,350,20,380,20',
      },
      {
        curve: 'bumpY',
        expectedD:
          'M80,350C80,308.75,140,308.75,140,267.5C140,267.5,200,267.5,200,267.5C200,226.25,260,226.25,260,185C260,143.75,320,143.75,320,102.5C320,61.25,380,61.25,380,20',
      },
      {
        curve: 'bump',
        expectedD:
          'M80,350C110,350,110,267.5,140,267.5C170,267.5,170,267.5,200,267.5C230,267.5,230,185,260,185C290,185,290,102.5,320,102.5C350,102.5,350,20,380,20',
      },
      { curve: 'linear', expectedD: 'M80,350L140,267.5L200,267.5L260,185L320,102.5L380,20' },
      { curve: 'linearClosed', expectedD: 'M80,350L140,267.5L200,267.5L260,185L320,102.5L380,20Z' },
      {
        curve: 'natural',
        expectedD:
          'M80,350C100,313.158,120,276.316,140,267.5C160,258.684,180,277.895,200,267.5C220,257.105,240,217.105,260,185C280,152.895,300,128.684,320,102.5C340,76.316,360,48.158,380,20',
      },
      {
        curve: 'monotoneX',
        expectedD:
          'M80,350C100,308.75,120,267.5,140,267.5C160,267.5,180,267.5,200,267.5C220,267.5,240,212.5,260,185C280,157.5,300,130,320,102.5C340,75,360,47.5,380,20',
      },
      {
        curve: 'monotoneY',
        expectedD:
          'M80,350C90,322.5,100,295,140,267.5C140,267.5,200,267.5,200,267.5C240,240,240,212.5,260,185C280,157.5,300,130,320,102.5C340,75,360,47.5,380,20',
      },
      {
        curve: 'monotone',
        expectedD:
          'M80,350C100,308.75,120,267.5,140,267.5C160,267.5,180,267.5,200,267.5C220,267.5,240,212.5,260,185C280,157.5,300,130,320,102.5C340,75,360,47.5,380,20',
      },
      {
        curve: 'step',
        expectedD:
          'M80,350L110,350L110,267.5L170,267.5L170,267.5L230,267.5L230,185L290,185L290,102.5L350,102.5L350,20L380,20',
      },
      {
        curve: 'stepBefore',
        expectedD: 'M80,350L80,267.5L140,267.5L140,267.5L200,267.5L200,185L260,185L260,102.5L320,102.5L320,20L380,20',
      },
      {
        curve: 'stepAfter',
        expectedD: 'M80,350L140,350L140,267.5L200,267.5L200,267.5L260,267.5L260,185L320,185L320,102.5L380,102.5L380,20',
      },
    ];

    it.each(allCurves)('should render d=$expectedD when curve type=$curve', ({ curve, expectedD }) => {
      const { container } = render(
        <LineChart width={400} height={400} data={PageData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <XAxis />
          <YAxis type="category" />
          <Line type={curve} dataKey="uv" stroke="#ff7300" />
        </LineChart>,
      );
      const curves = container.querySelectorAll('.recharts-line .recharts-line-curve');
      expect(curves).toHaveLength(1);
      expect(curves[0]).toHaveAttribute('d', expectedD);
    });
  });

  test('Render smooth curve when type of Line is monotone', () => {
    const { container } = render(
      <LineChart width={400} height={400} data={PageData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
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
    assertNotNull(path);

    expect(path.length - path.split('M').join('').length).toEqual(2);
  });

  test('Render one path when connectNulls is true', () => {
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

    assertNotNull(path);

    expect(path.length - path.split('M').join('').length).toEqual(1);
  });

  test('Renders customized active dot when activeDot is set to be a ReactElement', () => {
    const ActiveDot: FC<{ cx?: number; cy?: number }> = ({ cx, cy }) => (
      <circle cx={cx} cy={cy} r={10} className="customized-active-dot" />
    );

    const { container } = render(
      <LineChart width={400} height={400} data={PageData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line activeDot={<ActiveDot />} type="monotone" dataKey="uv" stroke="#ff7300" />
        <Tooltip />
      </LineChart>,
    );

    const chart = container.querySelector('.recharts-wrapper');
    assertNotNull(chart);
    expect(container.querySelectorAll('.customized-active-dot')).toHaveLength(0);

    fireEvent.mouseOver(chart, { bubbles: true, cancelable: true, clientX: 200, clientY: 200 });

    expect(container.querySelectorAll('.customized-active-dot')).toHaveLength(1);
  });

  test('Renders 1 dot no line when the length of data is 1', () => {
    const { container } = render(
      <LineChart
        width={400}
        height={400}
        data={PageData.slice(0, 1)}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <Line isAnimationActive={false} label type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );
    expect(container.querySelectorAll('.recharts-line .recharts-line-curve')).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-line .recharts-line-dot')).toHaveLength(1);
  });

  test('Renders 6 labels when label = true', () => {
    const { container } = render(
      <LineChart width={400} height={400} data={PageData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line isAnimationActive={false} label type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );
    const labels = container.querySelectorAll('.recharts-label');
    expect(labels).toHaveLength(6);

    labels.forEach(l => {
      expect(l.getAttributeNames()).toEqual(['offset', 'x', 'y', 'class', 'text-anchor', 'fill']);
      expect(l).toHaveAttribute('offset', '5');
      expect(l).toHaveAttribute('class', 'recharts-text recharts-label');
      expect(l).toHaveAttribute('text-anchor', 'middle');
      expect(l).toHaveAttribute('fill', '#808080');
    });

    expect(labels[0]).toHaveAttribute('x', '20');
    expect(labels[0]).toHaveAttribute('y', '20');
    expect(labels[0]).toHaveTextContent('400');

    expect(labels[1]).toHaveAttribute('x', '92');
    expect(labels[1]).toHaveAttribute('y', '110');
    expect(labels[1]).toHaveTextContent('300');

    expect(labels[2]).toHaveAttribute('x', '164');
    expect(labels[2]).toHaveAttribute('y', '110');
    expect(labels[2]).toHaveTextContent('300');

    expect(labels[3]).toHaveAttribute('x', '236');
    expect(labels[3]).toHaveAttribute('y', '200');
    expect(labels[3]).toHaveTextContent('200');

    expect(labels[4]).toHaveAttribute('x', '308');
    expect(labels[4]).toHaveAttribute('y', '129.8');
    expect(labels[4]).toHaveTextContent('278');

    expect(labels[5]).toHaveAttribute('x', '380');
    expect(labels[5]).toHaveAttribute('y', '209.9');
    expect(labels[5]).toHaveTextContent('189');
  });

  test('Renders 6 labels when label is a function', () => {
    const renderLabel = (props: { x: number; y: number; key: string }) => {
      const { x, y, key } = props;
      return (
        <text className="customized-label" x={x} y={y} key={key}>
          test
        </text>
      );
    };

    const { container } = render(
      <LineChart width={400} height={400} data={PageData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line isAnimationActive={false} label={renderLabel} dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );

    const labels = container.querySelectorAll('.customized-label');
    expect(labels).toHaveLength(6);
  });

  test('Renders 6 labels when label is a react element', () => {
    const CustomizedLabel = (props: { x?: number; y?: number; key?: string }) => {
      const { x, y, key } = props;
      return (
        <text className="customized-label" x={x} y={y} key={key}>
          test
        </text>
      );
    };
    const { container } = render(
      <LineChart width={400} height={400} data={PageData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line isAnimationActive={false} label={<CustomizedLabel />} dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );

    const labels = container.querySelectorAll('.customized-label');
    expect(labels).toHaveLength(6);
  });

  test('Renders 6 dots when dot = true', () => {
    const { container } = render(
      <LineChart width={400} height={400} data={PageData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line isAnimationActive={false} dot type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );
    expect(container.querySelectorAll('.recharts-line-dot')).toHaveLength(6);
  });

  test('Renders 6 dots when dot is a function', () => {
    const renderDot = (props: any) => {
      const { cx, cy, key } = props;

      return <circle className="customized-dot" key={key} cx={cx} cy={cy} r={10} />;
    };
    const { container } = render(
      <LineChart width={400} height={400} data={PageData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line isAnimationActive={false} dot={renderDot} type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );
    expect(container.querySelectorAll('.customized-dot')).toHaveLength(6);
  });

  test('Renders 6 dots when dot is a react element', () => {
    const Dot = (props: { cx?: number; cy?: number; key?: string }) => {
      const { cx, cy, key } = props;

      return <circle className="customized-dot" key={key} cx={cx} cy={cy} r={10} />;
    };
    const { container } = render(
      <LineChart width={400} height={400} data={PageData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line isAnimationActive={false} dot={<Dot />} type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );
    expect(container.querySelectorAll('.customized-dot')).toHaveLength(6);
  });

  test('click on Curve should invoke onClick callback', () => {
    const onClick = vi.fn();
    const onMouseDown = vi.fn();
    const onMouseUp = vi.fn();
    const { container } = render(
      <LineChart width={400} height={400} data={PageData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
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
    assertNotNull(curve);
    expect(onMouseDown).not.toHaveBeenCalled();
    expect(onClick).not.toHaveBeenCalled();
    expect(onMouseUp).not.toHaveBeenCalled();

    fireEvent.mouseDown(curve, { clientX: 13, clientY: 17 });
    expect(onMouseDown).toHaveBeenCalledWith(
      expect.objectContaining({
        className: 'recharts-line-curve',
        clipPath: null,
        connectNulls: false,
        fill: 'none',
        height: 360,
        layout: 'horizontal',
        onClick,
        onMouseDown,
        onMouseUp,
        pathRef: expect.any(Function),
        points: expect.any(Array),
        stroke: '#ff7300',
        strokeDasharray: '0px 0px',
        strokeWidth: 1,
        type: 'monotone',
        width: 360,
      }),
      expect.objectContaining({ clientX: 13, clientY: 17, type: 'mousedown' }),
    );
    expect(onClick).not.toHaveBeenCalled();
    expect(onMouseUp).not.toHaveBeenCalled();

    fireEvent.mouseUp(curve, { clientX: 29, clientY: 37 });

    expect(onMouseUp).toHaveBeenCalledWith(
      expect.objectContaining({
        className: 'recharts-line-curve',
        clipPath: null,
        connectNulls: false,
        fill: 'none',
        height: 360,
        layout: 'horizontal',
        onClick,
        onMouseDown,
        onMouseUp,
        pathRef: expect.any(Function),
        points: expect.any(Array),
        stroke: '#ff7300',
        strokeDasharray: '0px 0px',
        strokeWidth: 1,
        type: 'monotone',
        width: 360,
      }),
      expect.objectContaining({ clientX: 29, clientY: 37, type: 'mouseup' }),
    );
    expect(onClick).not.toHaveBeenCalled();

    fireEvent.click(curve, { clientX: 19, clientY: 23 });

    expect(onClick).toHaveBeenCalledWith(
      expect.objectContaining({
        className: 'recharts-line-curve',
        clipPath: null,
        connectNulls: false,
        fill: 'none',
        height: 360,
        layout: 'horizontal',
        onClick,
        onMouseDown,
        onMouseUp,
        pathRef: expect.any(Function),
        points: expect.any(Array),
        stroke: '#ff7300',
        strokeDasharray: '0px 0px',
        strokeWidth: 1,
        type: 'monotone',
        width: 360,
      }),
      expect.objectContaining({ clientX: 19, clientY: 23, type: 'click' }),
    );
  });

  test('should show tooltip cursor on MouseEnter and MouseMove and hide on MouseLeave', () => {
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };
    const height = 400;
    const width = 400;
    const { container } = render(
      <LineChart width={width} height={height} data={PageData} margin={margin} throttleDelay={0}>
        <Line isAnimationActive={false} type="monotone" dataKey="uv" stroke="#ff7300" />
        <Tooltip />
        <Brush />
      </LineChart>,
    );

    const chartWidth = width - margin.left - margin.right;
    const dotSpacing = chartWidth / (PageData.length - 1);

    // simulate entering just past Page A to test snapping of the cursor line
    expect(container.querySelectorAll('.recharts-tooltip-cursor')).toHaveLength(0);
    const tooltipTrigger: Node = container.querySelector(lineChartMouseHoverTooltipSelector);
    fireEvent.mouseMove(tooltipTrigger, {
      clientX: margin.left + 0.1 * dotSpacing,
      clientY: height / 2,
    });
    // fireEvent.mouseEnter(container, { clientX: margin.left + 0.1 * dotSpacing, clientY: height / 2 });

    const tooltipCursors1 = container.querySelectorAll('.recharts-tooltip-cursor');
    expect(tooltipCursors1).toHaveLength(1);

    // make sure tooltip is in the right spot.
    const chartBottom = height - margin.top - 2 * margin.bottom;
    const expectedX1 = margin.left;
    expect(tooltipCursors1[0]).toHaveAttribute('d', `M${expectedX1},${margin.top}L${expectedX1},${chartBottom}`);
    expect(tooltipCursors1[0]).toHaveAttribute('d', 'M20,20L20,340');

    // simulate moving 10 pixels past the PageC Dot
    const allDots = container.querySelectorAll('.recharts-line-dot');
    expect(allDots).toHaveLength(PageData.length);

    const dotC = allDots[2];
    assertNotNull(dotC);
    expect(dotC.getAttributeNames()).toEqual([
      'r',
      'stroke',
      'stroke-width',
      'fill',
      'width',
      'height',
      'cx',
      'cy',
      'class',
    ]);
    expect(dotC).toHaveAttribute('cx', '164');
    expect(dotC).toHaveAttribute('width', '360');

    const expectedX2 = margin.left + dotSpacing * 2;
    expect(expectedX2).toEqual(164);
    fireEvent.mouseMove(tooltipTrigger, { clientX: expectedX2 + 0.1 * dotSpacing, clientY: height / 2 });

    const tooltipCursors2 = container.querySelectorAll('.recharts-tooltip-cursor');
    expect(tooltipCursors2).toHaveLength(1);

    expect(tooltipCursors2[0]).toHaveAttribute('d', `M${expectedX2},${margin.top}L${expectedX2},${chartBottom}`);

    // simulate leaving the area
    fireEvent.mouseLeave(tooltipTrigger);
    expect(container.querySelectorAll('.recharts-tooltip-cursor')).toHaveLength(0);
  });

  test('Should update the line chart when the brush changes', () => {
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };
    const height = 400;
    const width = 400;
    const { container } = render(
      <LineChart width={width} height={height} data={PageData} margin={margin}>
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
    const rightCursor = container.querySelectorAll('.recharts-brush-traveller')[1];

    // move the left cursor to the right 200px

    fireEvent.mouseDown(leftCursor, { clientX: 0, clientY: 0, bubbles: true, cancelable: true });
    fireEvent.mouseMove(window, { clientX: 200, clientY: 0, bubbles: true, cancelable: true });
    fireEvent.mouseUp(window);

    // move the right cursor to the left 60px
    fireEvent.mouseDown(rightCursor, { clientX: 400, clientY: 0, bubbles: true, cancelable: true });
    fireEvent.mouseMove(window, { clientX: 340, clientY: 0, bubbles: true, cancelable: true });
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

describe('<LineChart /> and various data sources', () => {
  const randData = generateMockData(10, 38405);
  const data1 = randData.slice(0, 5);
  const data2 = randData.slice(5);

  function expectLabels(container: HTMLElement, expectedTextContents: ReadonlyArray<string>): void {
    const labels = container.querySelectorAll('.recharts-label');
    const actualTextContents = Array.from(labels).map(el => el.textContent);
    expect(actualTextContents).toEqual(expectedTextContents);
  }

  it('should render chart with one line and data on root chart', () => {
    const { container } = render(
      <LineChart width={400} height={400} data={data1}>
        <Line isAnimationActive={false} label dataKey="x" />
        <XAxis dataKey="label" />
      </LineChart>,
    );
    expectLabels(container, ['258', '295', '193', '168', '117']);
    expectXAxisTicks(container, [
      {
        textContent: 'Iter: 0',
        x: '5',
        y: '373',
      },
      {
        textContent: 'Iter: 1',
        x: '102.5',
        y: '373',
      },
      {
        textContent: 'Iter: 2',
        x: '200',
        y: '373',
      },
      {
        textContent: 'Iter: 3',
        x: '297.5',
        y: '373',
      },
      {
        textContent: 'Iter: 4',
        x: '395',
        y: '373',
      },
    ]);
  });

  it('should render chart with three lines and data on root chart', () => {
    const { container } = render(
      <LineChart width={400} height={400} data={data1}>
        <Line isAnimationActive={false} label dataKey="x" />
        <Line isAnimationActive={false} label dataKey="y" />
        <XAxis dataKey="label" />
      </LineChart>,
    );
    expectLabels(container, ['258', '295', '193', '168', '117', '597', '745', '657', '538', '762']);
    expectXAxisTicks(container, [
      {
        textContent: 'Iter: 0',
        x: '5',
        y: '373',
      },
      {
        textContent: 'Iter: 1',
        x: '102.5',
        y: '373',
      },
      {
        textContent: 'Iter: 2',
        x: '200',
        y: '373',
      },
      {
        textContent: 'Iter: 3',
        x: '297.5',
        y: '373',
      },
      {
        textContent: 'Iter: 4',
        x: '395',
        y: '373',
      },
    ]);
  });

  it('should render the chart when the same data are defined on Line elements and not on the chart', () => {
    const { container } = render(
      <LineChart width={400} height={400}>
        <Line data={data1} isAnimationActive={false} label dataKey="x" />
        <Line data={data1} isAnimationActive={false} label dataKey="y" />
        <XAxis dataKey="label" />
      </LineChart>,
    );
    expectLabels(container, ['258', '295', '193', '168', '117', '597', '745', '657', '538', '762']);
    // sic! the XAxis renders all ticks twice!
    expectXAxisTicks(container, [
      {
        textContent: 'Iter: 0',
        x: '5',
        y: '373',
      },
      {
        textContent: 'Iter: 1',
        x: '48.333333333333336',
        y: '373',
      },
      {
        textContent: 'Iter: 2',
        x: '91.66666666666667',
        y: '373',
      },
      {
        textContent: 'Iter: 3',
        x: '135',
        y: '373',
      },
      {
        textContent: 'Iter: 4',
        x: '178.33333333333334',
        y: '373',
      },
      {
        textContent: 'Iter: 0',
        x: '221.66666666666669',
        y: '373',
      },
      {
        textContent: 'Iter: 1',
        x: '265',
        y: '373',
      },
      {
        textContent: 'Iter: 2',
        x: '308.33333333333337',
        y: '373',
      },
      {
        textContent: 'Iter: 3',
        x: '351.6666666666667',
        y: '373',
      },
      {
        textContent: 'Iter: 4',
        x: '395',
        y: '373',
      },
    ]);
  });

  it('should render the chart when the same data are defined on Line elements and not on the chart with allowDuplicateCategory', () => {
    const { container } = render(
      <LineChart width={400} height={400}>
        <Line data={data1} isAnimationActive={false} label dataKey="x" />
        <Line data={data1} isAnimationActive={false} label dataKey="y" />
        <XAxis dataKey="label" allowDuplicatedCategory={false} />
      </LineChart>,
    );
    expectLabels(container, ['258', '295', '193', '168', '117', '597', '745', '657', '538', '762']);
    expectXAxisTicks(container, [
      {
        textContent: 'Iter: 0',
        x: '5',
        y: '373',
      },
      {
        textContent: 'Iter: 1',
        x: '102.5',
        y: '373',
      },
      {
        textContent: 'Iter: 2',
        x: '200',
        y: '373',
      },
      {
        textContent: 'Iter: 3',
        x: '297.5',
        y: '373',
      },
      {
        textContent: 'Iter: 4',
        x: '395',
        y: '373',
      },
    ]);
  });

  it('should render the chart when the same data are defined on Line elements and not on the chart - with a custom domain perhaps?', () => {
    const { container } = render(
      <LineChart width={400} height={400}>
        <Line data={data1} isAnimationActive={false} label dataKey="x" />
        <Line data={data1} isAnimationActive={false} label dataKey="y" />
        <XAxis dataKey="label" domain={['Iter: 0', 'Iter: 1', 'Iter: 2', 'Iter: 3', 'Iter: 4']} />
      </LineChart>,
    );
    expectLabels(container, ['258', '295', '193', '168', '117', '597', '745', '657', '538', '762']);
    // sic! the XAxis renders all ticks twice -anyway- and ignores my attempt at setting a domain
    expectXAxisTicks(container, [
      {
        textContent: 'Iter: 0',
        x: '5',
        y: '373',
      },
      {
        textContent: 'Iter: 1',
        x: '48.333333333333336',
        y: '373',
      },
      {
        textContent: 'Iter: 2',
        x: '91.66666666666667',
        y: '373',
      },
      {
        textContent: 'Iter: 3',
        x: '135',
        y: '373',
      },
      {
        textContent: 'Iter: 4',
        x: '178.33333333333334',
        y: '373',
      },
      {
        textContent: 'Iter: 0',
        x: '221.66666666666669',
        y: '373',
      },
      {
        textContent: 'Iter: 1',
        x: '265',
        y: '373',
      },
      {
        textContent: 'Iter: 2',
        x: '308.33333333333337',
        y: '373',
      },
      {
        textContent: 'Iter: 3',
        x: '351.6666666666667',
        y: '373',
      },
      {
        textContent: 'Iter: 4',
        x: '395',
        y: '373',
      },
    ]);
  });

  it(`should render the chart when the same data are defined on Line elements and not on the chart
            - with a custom domain and allowDuplicateCategory=false`, () => {
    const { container } = render(
      <LineChart width={400} height={400}>
        <Line data={data1} isAnimationActive={false} label dataKey="x" />
        <Line data={data1} isAnimationActive={false} label dataKey="y" />
        <XAxis
          dataKey="label"
          // here is a duplicate, on purpose
          domain={['Iter: 0', 'Iter: 0', 'Iter: 1', 'Iter: 2', 'Iter: 3', 'Iter: 4']}
          allowDuplicatedCategory={false}
        />
      </LineChart>,
    );
    expectLabels(container, ['258', '295', '193', '168', '117', '597', '745', '657', '538', '762']);
    // so XAxis will filter the provided domain for duplicates, too
    expectXAxisTicks(container, [
      {
        textContent: 'Iter: 0',
        x: '5',
        y: '373',
      },
      {
        textContent: 'Iter: 1',
        x: '102.5',
        y: '373',
      },
      {
        textContent: 'Iter: 2',
        x: '200',
        y: '373',
      },
      {
        textContent: 'Iter: 3',
        x: '297.5',
        y: '373',
      },
      {
        textContent: 'Iter: 4',
        x: '395',
        y: '373',
      },
    ]);
  });

  it('should render the same chart when the different data are defined on Line elements and not on the chart', () => {
    const { container } = render(
      <LineChart width={400} height={400}>
        <Line data={data1} isAnimationActive={false} label dataKey="x" />
        <Line data={data2} isAnimationActive={false} label dataKey="y" />
        <XAxis dataKey="label" />
      </LineChart>,
    );
    expectLabels(container, ['258', '295', '193', '168', '117', '770', '622', '670', '495', '603']);
    // okay this is reasonable
    expectXAxisTicks(container, [
      {
        textContent: 'Iter: 0',
        x: '5',
        y: '373',
      },
      {
        textContent: 'Iter: 1',
        x: '48.333333333333336',
        y: '373',
      },
      {
        textContent: 'Iter: 2',
        x: '91.66666666666667',
        y: '373',
      },
      {
        textContent: 'Iter: 3',
        x: '135',
        y: '373',
      },
      {
        textContent: 'Iter: 4',
        x: '178.33333333333334',
        y: '373',
      },
      {
        textContent: 'Iter: 5',
        x: '221.66666666666669',
        y: '373',
      },
      {
        textContent: 'Iter: 6',
        x: '265',
        y: '373',
      },
      {
        textContent: 'Iter: 7',
        x: '308.33333333333337',
        y: '373',
      },
      {
        textContent: 'Iter: 8',
        x: '351.6666666666667',
        y: '373',
      },
      {
        textContent: 'Iter: 9',
        x: '395',
        y: '373',
      },
    ]);
  });

  it('should render chart where some data are defined on the line and some on the chart', () => {
    const { container } = render(
      <LineChart width={400} height={400} data={data2}>
        <Line data={data1} isAnimationActive={false} label dataKey="x" />
        <Line isAnimationActive={false} label dataKey="y" />
        <XAxis dataKey="label" />
      </LineChart>,
    );
    expectLabels(container, ['258', '295', '193', '168', '117', '770', '622', '670', '495', '603']);
    // this is bad - XAxis ignores ticks from the Chart root
    expectXAxisTicks(container, [
      {
        textContent: 'Iter: 0',
        x: '5',
        y: '373',
      },
      {
        textContent: 'Iter: 1',
        x: '102.5',
        y: '373',
      },
      {
        textContent: 'Iter: 2',
        x: '200',
        y: '373',
      },
      {
        textContent: 'Iter: 3',
        x: '297.5',
        y: '373',
      },
      {
        textContent: 'Iter: 4',
        x: '395',
        y: '373',
      },
    ]);
  });
});

describe('<LineChart /> - Pure Rendering', () => {
  const pureElements = [Line];

  const spies: Array<MockInstance<() => React.ReactElement | null>> = [];
  // CartesianAxis is what is actually render for XAxis and YAxis
  let axisSpy: MockInstance<() => React.ReactElement | null>;

  beforeEach(() => {
    pureElements.forEach((el, i) => {
      spies[i] = vi.spyOn(el.prototype, 'render');
    });
    axisSpy = vi.spyOn(CartesianAxis.prototype, 'render');
  });

  const chart = (
    <LineChart width={400} height={400} data={PageData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
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
    expect(axisSpy).toHaveBeenCalledTimes(4);

    fireEvent.mouseEnter(container, { clientX: 30, clientY: 200, bubbles: true, cancelable: true });
    fireEvent.mouseMove(container, { clientX: 200, clientY: 200, bubbles: true, cancelable: true });
    fireEvent.mouseLeave(container);

    spies.forEach(el => expect(el).toHaveBeenCalledTimes(1));
    expect(axisSpy).toHaveBeenCalledTimes(4);
  });

  // protect against the future where someone might mess up our clean rendering
  test("should only render Line once when the brush moves but doesn't change start/end indices", () => {
    const { container } = render(chart);

    spies.forEach(el => expect(el).toHaveBeenCalledTimes(1));
    expect(axisSpy).toHaveBeenCalledTimes(4);

    const leftCursor = container.querySelector('.recharts-brush-traveller');
    assertNotNull(leftCursor);

    fireEvent.mouseDown(leftCursor, { clientX: 0, clientY: 0, bubbles: true, cancelable: true });
    fireEvent.mouseMove(window, { clientX: 0, clientY: 0, bubbles: true, cancelable: true });

    fireEvent.mouseUp(window);

    spies.forEach(el => expect(el).toHaveBeenCalledTimes(1));
    expect(axisSpy).toHaveBeenCalledTimes(4);
  });
});

describe('<LineChart /> - Pure Rendering with legend', () => {
  const pureElements = [Line];

  const spies: Array<MockInstance<() => React.ReactElement | null>> = [];
  // CartesianAxis is what is actually render for XAxis and YAxis
  let axisSpy: MockInstance<() => React.ReactElement | null>;

  beforeEach(() => {
    pureElements.forEach((el, i) => {
      spies[i] = vi.spyOn(el.prototype, 'render');
    });
    axisSpy = vi.spyOn(CartesianAxis.prototype, 'render');
  });

  const chart = (
    <LineChart width={400} height={400} data={PageData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
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
    expect(axisSpy).toHaveBeenCalledTimes(4);

    fireEvent.mouseEnter(container, { clientX: 30, clientY: 200, bubbles: true, cancelable: true });

    fireEvent.mouseMove(container, { clientX: 200, clientY: 200, bubbles: true, cancelable: true });

    fireEvent.mouseLeave(container);

    spies.forEach(el => expect(el).toHaveBeenCalledTimes(1));
    expect(axisSpy).toHaveBeenCalledTimes(4);
  });

  // protect against the future where someone might mess up our clean rendering
  test("should only render Line once when the brush moves but doesn't change start/end indices", () => {
    const { container } = render(chart);

    spies.forEach(el => expect(el).toHaveBeenCalledTimes(1));
    expect(axisSpy).toHaveBeenCalledTimes(4);

    const leftCursor = container.querySelector('.recharts-brush-traveller');
    assertNotNull(leftCursor);
    fireEvent.mouseDown(leftCursor, { clientX: 0, clientY: 0, bubbles: true, cancelable: true });
    fireEvent.mouseMove(window, { clientX: 0, clientY: 0, bubbles: true, cancelable: true });
    fireEvent.mouseUp(window);

    spies.forEach(el => expect(el).toHaveBeenCalledTimes(1));
    expect(axisSpy).toHaveBeenCalledTimes(4);
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
    vi.useFakeTimers();
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  test('should show tooltips for both charts synced by index on MouseEnter and hide on MouseLeave/Escape', async () => {
    const { container, getByText } = render(
      <div>
        <LineChart width={width} height={height} data={PageData} margin={margin} syncId="test">
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
    const dotSpacing = chartWidth / (PageData.length - 1);

    expect(container.querySelectorAll('.recharts-tooltip-cursor')).toHaveLength(0);

    const firstChart = container.querySelector('.recharts-wrapper');

    assertNotNull(firstChart);

    // simulate entering just past Page A of Chart1 to test snapping of the cursor line
    fireEvent.mouseOver(firstChart, {
      bubbles: true,
      cancelable: true,
      clientX: margin.left + 0.1 * dotSpacing,
      clientY: height / 2,
    });
    vi.advanceTimersByTime(100);

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
    vi.advanceTimersByTime(100);
    expect(container.querySelectorAll('.recharts-tooltip-cursor')).toHaveLength(0);

    fireEvent.mouseOver(firstChart, {
      bubbles: true,
      cancelable: true,
      clientX: margin.left + 0.1 * dotSpacing,
      clientY: height / 2,
    });
    vi.advanceTimersByTime(100);
    expect(container.querySelectorAll('.recharts-tooltip-cursor')).toHaveLength(2);
  });

  test("should show tooltips using syncMethod: 'value' for both charts on MouseEnter and hide on MouseLeave", async () => {
    const chart1 = (
      <LineChart width={width} height={height} data={PageData} margin={margin} syncId="test" syncMethod="value">
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
    const dotSpacing = chartWidth / (PageData.length - 1);

    // simulate entering just past Page A of Chart1 to test snapping of the cursor line
    expect(container.querySelectorAll('.recharts-tooltip-cursor')).toHaveLength(0);

    const firstChart = container.querySelector('.recharts-wrapper');

    assertNotNull(firstChart);

    fireEvent.mouseOver(firstChart, { bubbles: true, clientX: margin.left + 0.1 * dotSpacing, clientY: height / 2 });
    vi.advanceTimersByTime(100);

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
    vi.advanceTimersByTime(100);

    expect(container.querySelectorAll('.recharts-active-dot')).toHaveLength(0);
  });

  /**
   * Tooltip tries to read payload from Redux but tooltip synchronisation is not in redux yet and so this test fails
   * TODO implement tooltip sync in redux and then enable this test again
   * https://github.com/recharts/recharts/issues/4548
   */
  test.fails(
    'should show tooltips using syncMethod: [function] for both charts on MouseEnter and hide on MouseLeave',
    async () => {
      const syncMethodFunction = () => {
        return 1;
      };

      const chart1 = (
        <LineChart
          width={width}
          height={height}
          data={PageData}
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
      const dotSpacing = chartWidth / (PageData.length - 1);

      // simulate entering just past Page A of Chart1 to test snapping of the cursor line
      expect(container.querySelectorAll('.recharts-tooltip-cursor')).toHaveLength(0);

      const firstChart = container.querySelector('.recharts-wrapper');
      assertNotNull(firstChart);

      fireEvent.mouseOver(firstChart, { bubbles: true, clientX: margin.left + 0.1 * dotSpacing, clientY: height / 2 });
      vi.advanceTimersByTime(100);

      // There are two tooltips - one for each LineChart as they have the same syncId
      expect(container.querySelectorAll('.recharts-tooltip-cursor')).toHaveLength(2);

      // make sure tooltips display the correct values, synced by data value
      expect(screen.queryByText('300')).toBeTruthy();
      expect(screen.queryByText('550')).toBeTruthy();

      // Check the activeDots are highlighted
      expect(container.querySelectorAll('.recharts-active-dot')).toHaveLength(2);

      // simulate leaving the area
      fireEvent.mouseLeave(firstChart);
      vi.advanceTimersByTime(100);
      expect(container.querySelectorAll('.recharts-active-dot')).toHaveLength(0);
    },
  );

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

  describe('LineChart layout context', () => {
    it(
      'should provide viewBox and clipPathId if there are no axes',
      testChartLayoutContext(
        props => (
          <LineChart width={100} height={50} barSize={20}>
            {props.children}
          </LineChart>
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
      'should set width and height in context',
      testChartLayoutContext(
        props => (
          <LineChart width={100} height={50} barSize={20}>
            {props.children}
          </LineChart>
        ),
        ({ width: w, height: h }) => {
          expect(w).toBe(100);
          expect(h).toBe(50);
        },
      ),
    );

    it('should provide axisMaps if axes are specified', () => {
      const clipPathSpy = vi.fn();
      const viewBoxSpy = vi.fn();
      const xAxisMapSpy = vi.fn();
      const yAxisMapSpy = vi.fn();
      const Comp = (): null => {
        clipPathSpy(useClipPathId());
        viewBoxSpy(useViewBox());
        xAxisMapSpy(useAppSelector(state => state.axis.xAxisMap));
        yAxisMapSpy(useAppSelector(state => state.axis.yAxisMap));
        return null;
      };
      render(
        <LineChart width={100} height={50} barSize={20}>
          <XAxis dataKey="number" type="number" />
          <YAxis type="category" dataKey="name" />
          <Customized component={<Comp />} />
        </LineChart>,
      );
      expect(clipPathSpy).toHaveBeenLastCalledWith(expect.stringMatching(/recharts\d+-clip/));
      expect(viewBoxSpy).toHaveBeenLastCalledWith({ height: 10, width: 30, x: 65, y: 5 });
      expect(viewBoxSpy).toHaveBeenCalledTimes(3);
      expect(xAxisMapSpy).toHaveBeenLastCalledWith({
        '0': {
          allowDataOverflow: false,
          allowDecimals: true,
          allowDuplicatedCategory: true,
          axisType: 'xAxis',
          bandSize: 0,
          categoricalDomain: [],
          dataKey: 'number',
          domain: [0, -Infinity],
          duplicateDomain: undefined,
          height: 30,
          hide: false,
          isCategorical: true,
          layout: 'horizontal',
          mirror: false,
          niceTicks: [0, -Infinity, -Infinity, -Infinity, -Infinity],
          orientation: 'bottom',
          originalDomain: [0, 'auto'],
          padding: {
            left: 0,
            right: 0,
          },
          realScaleType: 'linear',
          reversed: false,
          scale: expect.any(Function),
          tickCount: 5,
          type: 'number',
          width: 30,
          x: 65,
          xAxisId: 0,
          y: 15,
        },
      });
      expect(yAxisMapSpy).toHaveBeenLastCalledWith({
        '0': {
          allowDataOverflow: false,
          allowDecimals: true,
          allowDuplicatedCategory: true,
          axisType: 'yAxis',
          bandSize: 0,
          categoricalDomain: undefined,
          dataKey: 'name',
          domain: [],
          duplicateDomain: undefined,
          height: 10,
          hide: false,
          isCategorical: false,
          layout: 'horizontal',
          mirror: false,
          orientation: 'left',
          originalDomain: undefined,
          padding: {
            bottom: 0,
            top: 0,
          },
          realScaleType: 'point',
          reversed: false,
          scale: expect.any(Function),
          tickCount: 5,
          type: 'category',
          width: 60,
          x: 5,
          y: 5,
          yAxisId: 0,
        },
      });
    });
  });
});
