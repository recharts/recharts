import React, { FC, useState } from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, MockInstance, test, vi } from 'vitest';
import {
  Brush,
  CartesianAxis,
  CartesianGrid,
  Customized,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from '../../src';
import { assertNotNull } from '../helper/assertNotNull';
import { CurveType } from '../../src/shape/Curve';
import { lineChartMouseHoverTooltipSelector } from '../component/Tooltip/tooltipMouseHoverSelectors';
import { PageData } from '../_data';
import { expectXAxisTicks } from '../helper/expectAxisTicks';
import { generateMockData } from '../helper/generateMockData';
import { useAppSelector } from '../../src/state/hooks';
import { pageData } from '../../storybook/stories/data';
import { selectAxisRangeWithReverse, selectTicksOfGraphicalItem } from '../../src/state/selectors/axisSelectors';
import { createSelectorTestCase, createSynchronisedSelectorTestCase } from '../helper/createSelectorTestCase';
import { selectTooltipPayload } from '../../src/state/selectors/selectors';
import { expectTooltipPayload, showTooltip } from '../component/Tooltip/tooltipTestHelpers';
import { TickItem } from '../../src/util/types';
import { MouseHandlerDataParam } from '../../src/synchronisation/types';
import { mockGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';
import { useChartHeight, useChartWidth, useViewBox } from '../../src/context/chartLayoutContext';
import { expectLines } from '../helper/expectLine';

import { useClipPathId } from '../../src/container/ClipPathProvider';

describe('<LineChart />', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

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
    expect(line.getAttributeNames().sort()).toEqual([
      'class',
      'd',
      'fill',
      'height',
      'stroke',
      'stroke-dasharray',
      'stroke-width',
      'width',
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
    expect(line.getAttributeNames().sort()).toEqual([
      'class',
      'd',
      'fill',
      'height',
      'stroke',
      'stroke-dasharray',
      'stroke-width',
      'width',
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

  test('renders two lines with two axes', () => {
    const xAxisRangeSpy = vi.fn();
    const xAxisLineTicks = vi.fn();

    const Comp = (): null => {
      xAxisRangeSpy(useAppSelector(state => selectAxisRangeWithReverse(state, 'xAxis', 0, false)));
      xAxisLineTicks(useAppSelector(state => selectTicksOfGraphicalItem(state, 'xAxis', 0, false)));
      return null;
    };
    const { container } = render(
      <LineChart
        width={500}
        height={300}
        data={pageData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid yAxisId="left" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Legend />
        <Line yAxisId="left" dataKey="pv" />
        <Line yAxisId="right" dataKey="uv" />
        <Customized component={<Comp />} />
      </LineChart>,
    );

    expect(xAxisRangeSpy).toHaveBeenLastCalledWith([80, 410]);
    expect(xAxisLineTicks).toHaveBeenLastCalledWith([
      {
        coordinate: 80,
        index: 0,
        offset: 0,
        value: 'Page A',
      },
      {
        coordinate: 135,
        index: 1,
        offset: 0,
        value: 'Page B',
      },
      {
        coordinate: 190,
        index: 2,
        offset: 0,
        value: 'Page C',
      },
      {
        coordinate: 245,
        index: 3,
        offset: 0,
        value: 'Page D',
      },
      {
        coordinate: 300,
        index: 4,
        offset: 0,
        value: 'Page E',
      },
      {
        coordinate: 355,
        index: 5,
        offset: 0,
        value: 'Page F',
      },
      {
        coordinate: 410,
        index: 6,
        offset: 0,
        value: 'Page G',
      },
    ]);

    const allLines = container.querySelectorAll('.recharts-line .recharts-line-curve');
    expect(allLines).toHaveLength(2);
    const line1 = allLines[0];
    assertNotNull(line1);
    expect(line1.getAttributeNames().sort()).toEqual([
      'class',
      'd',
      'fill',
      'height',
      'stroke',
      'stroke-dasharray',
      'stroke-width',
      'width',
    ]);
    expect(line1).toHaveAttribute('stroke', '#3182bd');
    expect(line1).toHaveAttribute('stroke-width', '1');
    expect(line1).toHaveAttribute('fill', 'none');
    expect(line1).toHaveAttribute('width', '330');
    expect(line1).toHaveAttribute('height', '160');
    expect(line1).toHaveAttribute('class', 'recharts-curve recharts-line-curve');
    expect(line1).toHaveAttribute('stroke-dasharray', '0px 0px');
    expect(line1).toHaveAttribute('d', 'M80,58.333L135,58.333L190,36.067L245,18.6L300,5L355,17.267L410,74.333');

    const line2 = allLines[1];
    assertNotNull(line2);
    expect(line2.getAttributeNames().sort()).toEqual([
      'class',
      'd',
      'fill',
      'height',
      'stroke',
      'stroke-dasharray',
      'stroke-width',
      'width',
    ]);
    expect(line2).toHaveAttribute('stroke', '#3182bd');
    expect(line2).toHaveAttribute('stroke-width', '1');
    expect(line2).toHaveAttribute('fill', 'none');
    expect(line2).toHaveAttribute('width', '330');
    expect(line2).toHaveAttribute('height', '160');
    expect(line2).toHaveAttribute('class', 'recharts-curve recharts-line-curve');
    expect(line2).toHaveAttribute('stroke-dasharray', '0px 0px');
    expect(line2).toHaveAttribute('d', 'M80,106L135,106L190,78.2L245,25.3L300,17L355,13L410,25');
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

  test('Adds a tick and datapoint when adding values to data array in state', () => {
    const Example = () => {
      const [_data, setData] = useState(PageData);
      return (
        <>
          <button
            type="button"
            onClick={() => {
              setData(d => [...d, { name: 'Page X', uv: 23092, pv: 223, amt: 2322 }]);
            }}
          >
            Click Me
          </button>
          <LineChart width={400} height={400} data={_data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <Line isAnimationActive={false} label dataKey="uv" stroke="#ff7300" />
            <XAxis dataKey="name" />
          </LineChart>
        </>
      );
    };

    const { container } = render(<Example />);

    const labels = container.querySelectorAll('.recharts-label');
    expect(labels).toHaveLength(6);

    act(() => {
      screen.getByText('Click Me').click();
    });

    expect(container.querySelectorAll('.recharts-label')).toHaveLength(7);

    expect(screen.getByText('Page X')).toBeInTheDocument();
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
        pathRef: expect.any(Object),
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
        pathRef: expect.any(Object),
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
        pathRef: expect.any(Object),
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
    expect(dotC.getAttributeNames().sort()).toEqual([
      'class',
      'cx',
      'cy',
      'fill',
      'height',
      'r',
      'stroke',
      'stroke-width',
      'width',
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

  describe('Tooltip integration', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart width={100} height={100} data={PageData}>
        <Line dataKey="y" isAnimationActive={false} />
        {children}
      </LineChart>
    ));

    it('should select tooltip payload', () => {
      const { spy } = renderTestCase(state => selectTooltipPayload(state, 'axis', 'hover', '0'));
      expect(spy).toHaveBeenLastCalledWith([
        {
          color: '#3182bd',
          dataKey: 'y',
          fill: '#fff',
          hide: false,
          name: 'y',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page A',
            pv: 2400,
            uv: 400,
          },
          stroke: '#3182bd',
          strokeWidth: 1,
          type: undefined,
          unit: undefined,
          value: undefined,
        },
      ]);
      expect(spy).toHaveBeenCalledTimes(2);
    });
  });

  test('Render a line with clipDot option on the dot and expect attributes not to be NaN', () => {
    const { container } = render(
      <LineChart width={100} height={100} data={PageData}>
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

  describe('LineChart - test ref access', () => {
    test('should allow access to the main SVG through the ref prop forwarded from CategoricalChart', () => {
      /*
       * This is a breaking change from v2.0.0, where the ref was not forwarded
       * and used to refer to the CategoricalChartWrapper component instead.
       * In 3.0 we no longer use CategoricalChartWrapper, and the ref now refers to the main SVG element.
       */
      let refNode: SVGSVGElement | null = null;

      const MyComponent = () => {
        return (
          <LineChart
            width={100}
            height={100}
            data={PageData}
            ref={node => {
              refNode = node;
            }}
          >
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            <Tooltip />
            <XAxis dataKey="name" />
          </LineChart>
        );
      };

      render(<MyComponent />);

      expect(refNode).toBeDefined();
      expect(refNode).not.toBeNull();
      expect(refNode.tagName).toBe('svg');
      expect(refNode).toHaveAttribute('class', 'recharts-surface');
    });
  });

  describe('LineChart layout context', () => {
    it('should provide viewBox', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        spy(useViewBox());
        return null;
      };

      render(
        <LineChart width={100} height={50} barSize={20}>
          <Comp />
        </LineChart>,
      );

      expect(spy).toHaveBeenCalledWith({ height: 40, width: 90, x: 5, y: 5 });
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should provide clipPathId', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        spy(useClipPathId());
        return null;
      };

      render(
        <LineChart width={100} height={50} barSize={20}>
          <Comp />
        </LineChart>,
      );

      expect(spy).toHaveBeenCalledWith(expect.stringMatching(/recharts\d+-clip/));
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should provide width', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        spy(useChartWidth());
        return null;
      };

      render(
        <LineChart width={100} height={50} barSize={20}>
          <Comp />
        </LineChart>,
      );

      expect(spy).toHaveBeenCalledWith(100);
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should provide height', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        spy(useChartHeight());
        return null;
      };

      render(
        <LineChart width={100} height={50} barSize={20}>
          <Comp />
        </LineChart>,
      );

      expect(spy).toHaveBeenCalledWith(50);
      expect(spy).toHaveBeenCalledTimes(1);
    });
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
    expect(axisSpy).toHaveBeenCalledTimes(3);

    fireEvent.mouseEnter(container, { clientX: 30, clientY: 200, bubbles: true, cancelable: true });
    fireEvent.mouseMove(container, { clientX: 200, clientY: 200, bubbles: true, cancelable: true });
    fireEvent.mouseLeave(container);

    spies.forEach(el => expect(el).toHaveBeenCalledTimes(1));
    expect(axisSpy).toHaveBeenCalledTimes(3);
  });

  // protect against the future where someone might mess up our clean rendering
  test("should only render Line once when the brush moves but doesn't change start/end indices", () => {
    const { container } = render(chart);

    spies.forEach(el => expect(el).toHaveBeenCalledTimes(1));
    expect(axisSpy).toHaveBeenCalledTimes(3);

    const leftCursor = container.querySelector('.recharts-brush-traveller');
    assertNotNull(leftCursor);

    fireEvent.mouseDown(leftCursor, { clientX: 0, clientY: 0, bubbles: true, cancelable: true });
    fireEvent.mouseMove(window, { clientX: 0, clientY: 0, bubbles: true, cancelable: true });

    fireEvent.mouseUp(window);

    spies.forEach(el => expect(el).toHaveBeenCalledTimes(1));
    expect(axisSpy).toHaveBeenCalledTimes(3);
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
    expect(axisSpy).toHaveBeenCalledTimes(3);

    fireEvent.mouseEnter(container, { clientX: 30, clientY: 200, bubbles: true, cancelable: true });

    fireEvent.mouseMove(container, { clientX: 200, clientY: 200, bubbles: true, cancelable: true });

    fireEvent.mouseLeave(container);

    spies.forEach(el => expect(el).toHaveBeenCalledTimes(1));
    expect(axisSpy).toHaveBeenCalledTimes(3);
  });

  // protect against the future where someone might mess up our clean rendering
  test("should only render Line once when the brush moves but doesn't change start/end indices", () => {
    const { container } = render(chart);

    spies.forEach(el => expect(el).toHaveBeenCalledTimes(1));
    expect(axisSpy).toHaveBeenCalledTimes(3);

    const leftCursor = container.querySelector('.recharts-brush-traveller');
    assertNotNull(leftCursor);
    fireEvent.mouseDown(leftCursor, { clientX: 0, clientY: 0, bubbles: true, cancelable: true });
    fireEvent.mouseMove(window, { clientX: 0, clientY: 0, bubbles: true, cancelable: true });
    fireEvent.mouseUp(window);

    spies.forEach(el => expect(el).toHaveBeenCalledTimes(1));
    expect(axisSpy).toHaveBeenCalledTimes(3);
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

  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

  beforeAll(() => {
    vi.useFakeTimers();
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  function hoverOverFirstLineItem(container: Element) {
    const chartWidth = width - margin.left - margin.right;
    const dotSpacing = chartWidth / (PageData.length - 1);

    fireEvent.mouseOver(container, {
      bubbles: true,
      cancelable: true,
      clientX: margin.left + 0.1 * dotSpacing,
      clientY: height / 2,
    });
    vi.advanceTimersByTime(100);
  }

  describe.each(['index', undefined] as const)('when syncMethod=%s', syncMethod => {
    const renderTestCase = createSynchronisedSelectorTestCase(
      ({ children }) => (
        <LineChart width={width} height={height} data={PageData} margin={margin} syncId="test" syncMethod={syncMethod}>
          <Line isAnimationActive={false} type="monotone" dataKey="uv" stroke="#ff7300" />
          <Tooltip />
          <XAxis dataKey="name" />
          {children}
        </LineChart>
      ),
      ({ children }) => (
        <LineChart width={width} height={height} data={data2} margin={margin} syncId="test" syncMethod={syncMethod}>
          <Line isAnimationActive={false} type="monotone" dataKey="uv" stroke="#ff7300" />
          <Tooltip />
          <XAxis dataKey="name" />
          {children}
        </LineChart>
      ),
    );
    test('should show tooltips for both charts MouseEnter and hide on MouseLeave/Escape', async () => {
      const { container, wrapperA, wrapperB } = renderTestCase();

      expect(container.querySelectorAll('.recharts-tooltip-cursor')).toHaveLength(0);

      const firstChart = wrapperA.querySelector('.recharts-wrapper');

      assertNotNull(firstChart);

      // simulate entering just past Page A of Chart1 to test snapping of the cursor line
      hoverOverFirstLineItem(firstChart);

      // There are two tooltips - one for each LineChart as they have the same syncId
      const tooltipCursors = container.querySelectorAll('.recharts-tooltip-cursor');
      expect(tooltipCursors).toHaveLength(2);

      // make sure tooltips display the correct values, i.e. the value of the first item in the data
      expectTooltipPayload(wrapperA, 'Page A', ['uv : 400']);
      expectTooltipPayload(wrapperB, 'Page F', ['uv : 500']);

      // Check the activeDots are highlighted
      const activeDotNodes = container.querySelectorAll('.recharts-active-dot');
      expect(activeDotNodes).toHaveLength(2);

      // simulate leaving the area
      fireEvent.mouseLeave(firstChart);
      vi.advanceTimersByTime(100);
      expect(container.querySelectorAll('.recharts-tooltip-cursor')).toHaveLength(0);

      // hover on the same spot again
      hoverOverFirstLineItem(firstChart);
      expect(container.querySelectorAll('.recharts-tooltip-cursor')).toHaveLength(2);
    });
  });

  describe('when syncMethod=value', () => {
    const renderTestCase = createSynchronisedSelectorTestCase(
      ({ children }) => (
        <LineChart width={width} height={height} data={PageData} margin={margin} syncId="test" syncMethod="value">
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          <Tooltip />
          <XAxis dataKey="name" />
          {children}
        </LineChart>
      ),
      ({ children }) => (
        <LineChart width={width} height={height} data={data2} margin={margin} syncId="test" syncMethod="value">
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          <Tooltip />
          <XAxis dataKey="name" />
          {children}
        </LineChart>
      ),
    );

    test('should show tooltips for both charts on MouseEnter and hide on MouseLeave', async () => {
      const { container, wrapperA, wrapperB } = renderTestCase();

      // simulate entering just past Page A of Chart1 to test snapping of the cursor line
      expect(container.querySelectorAll('.recharts-tooltip-cursor')).toHaveLength(0);

      const firstChart = wrapperA.querySelector('.recharts-wrapper');

      assertNotNull(firstChart);

      hoverOverFirstLineItem(firstChart);

      // There are two tooltips - one for each LineChart as they have the same syncId
      const tooltipCursors = container.querySelectorAll('.recharts-tooltip-cursor');
      expect(tooltipCursors).toHaveLength(2);

      // make sure tooltips display the correct values, synced by XAxis label
      expectTooltipPayload(wrapperA, 'Page A', ['uv : 400']);
      expectTooltipPayload(wrapperB, 'Page A', ['uv : 230']);

      // Check the activeDots are highlighted
      expect(container.querySelectorAll('.recharts-active-dot')).toHaveLength(2);

      // simulate leaving the area
      fireEvent.mouseLeave(firstChart);
      vi.advanceTimersByTime(100);

      expect(container.querySelectorAll('.recharts-active-dot')).toHaveLength(0);
    });
  });

  describe('when syncMethod=value but with the other example reported in https://github.com/recharts/recharts/issues/5740', () => {
    const series = [
      {
        name: 'Series 1',
        data: [
          { x: 0, y: 0 },
          { x: 1, y: 1 },
          { x: 2, y: 2 },
        ],
      },
    ];

    const series2 = [
      {
        name: 'Series 2',
        data: [
          { x: 1, y: 0 },
          { x: 2, y: 1 },
          { x: 3, y: 2 },
        ],
      },
    ];

    const renderTestCase = createSynchronisedSelectorTestCase(
      ({ children }) => (
        <LineChart width={width} height={height} margin={margin} syncId="test" syncMethod="value">
          <XAxis dataKey="x" type="number" domain={[0, 3]} />
          <YAxis dataKey="y" />
          <Tooltip cursor={{ stroke: 'red' }} />
          {series.map(s => (
            <Line dataKey="y" data={s.data} name={s.name} key={s.name} />
          ))}
          {children}
        </LineChart>
      ),
      ({ children }) => (
        <LineChart width={width} height={height} margin={margin} syncId="test" syncMethod="value">
          <XAxis dataKey="x" type="number" domain={[0, 3]} />
          <YAxis dataKey="y" />
          <Tooltip cursor={{ stroke: 'red', strokeWidth: '5px' }} />
          {series2.map(s => (
            <Line dataKey="y" data={s.data} name={s.name} key={s.name} />
          ))}
          <Brush />
          {children}
        </LineChart>
      ),
    );

    test('should show tooltips for both charts on MouseEnter and hide on MouseLeave', async () => {
      const { container, wrapperA, wrapperB } = renderTestCase();

      // simulate entering just past Page A of Chart1 to test snapping of the cursor line
      expect(container.querySelectorAll('.recharts-tooltip-cursor')).toHaveLength(0);

      const firstChart = wrapperA.querySelector('.recharts-wrapper');

      assertNotNull(firstChart);

      showTooltip(container, lineChartMouseHoverTooltipSelector);

      // There are two tooltips - one for each LineChart as they have the same syncId
      const tooltipCursors = container.querySelectorAll('.recharts-tooltip-cursor');
      expect(tooltipCursors).toHaveLength(2);

      // make sure tooltips display the correct values, synced by XAxis label
      expectTooltipPayload(wrapperA, '1', ['Series 1 : 1']);
      expectTooltipPayload(wrapperB, '1', ['Series 2 : 0']);

      // Check the activeDots are highlighted
      expect(container.querySelectorAll('.recharts-active-dot')).toHaveLength(2);

      // simulate leaving the area
      fireEvent.mouseLeave(firstChart);
      vi.advanceTimersByTime(100);

      expect(container.querySelectorAll('.recharts-active-dot')).toHaveLength(0);
    });
  });

  describe('when syncMethod=<function>', () => {
    const syncMethodFunction = (tooltipTicks: ReadonlyArray<TickItem>, data: MouseHandlerDataParam) => {
      return (Number(data.activeTooltipIndex) + 1) % tooltipTicks.length;
    };

    const renderTestCase = createSynchronisedSelectorTestCase(
      ({ children }) => (
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
          {children}
        </LineChart>
      ),
      ({ children }) => (
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
          {children}
        </LineChart>
      ),
    );

    test('should show tooltips for both charts on MouseEnter and hide on MouseLeave', async () => {
      const { container, wrapperA, wrapperB } = renderTestCase();

      // simulate entering just past Page A of Chart1 to test snapping of the cursor line
      expect(container.querySelectorAll('.recharts-tooltip-cursor')).toHaveLength(0);

      const firstChart = wrapperA.querySelector('.recharts-wrapper');
      assertNotNull(firstChart);

      hoverOverFirstLineItem(firstChart);

      // There are two tooltips - one for each LineChart as they have the same syncId
      expect(container.querySelectorAll('.recharts-tooltip-cursor')).toHaveLength(2);

      // mouse hovered over first item which is page A in the original PageData
      expectTooltipPayload(wrapperA, 'Page A', ['uv : 400']);
      // the function always returns 1 which means the second element in the data2 array
      expectTooltipPayload(wrapperB, 'Page E', ['uv : 550']);

      // Check the activeDots are highlighted
      expect(container.querySelectorAll('.recharts-active-dot')).toHaveLength(2);

      // simulate leaving the area
      fireEvent.mouseLeave(firstChart);
      vi.advanceTimersByTime(100);
      expect(container.querySelectorAll('.recharts-active-dot')).toHaveLength(0);
    });
  });
});

describe('<LineChart /> with dataKey as a function', () => {
  const data1 = [
    { x: { value: 1 }, name: 'x1' },
    { x: { value: 2 }, name: 'x2' },
    { x: { value: 3 }, name: 'x3' },
  ];
  const data2 = [
    { y: { value: 3 }, name: 'y1' },
    { y: { value: 2 }, name: 'y2' },
    { y: { value: 1 }, name: 'y3' },
  ];
  const dataKey1 = (d: any) => {
    return d.x.value;
  };
  const dataKey2 = (d: any) => {
    return d.y.value;
  };

  it('should use the return value as data points', () => {
    const { container, rerender } = render(
      <LineChart width={300} height={300} data={data1}>
        <Line dataKey={dataKey1} isAnimationActive={false} />
      </LineChart>,
    );
    expectLines(container, [{ d: 'M5,198.333L150,101.667L295,5' }]);

    rerender(
      <LineChart width={300} height={300} data={data2}>
        <Line dataKey={dataKey2} isAnimationActive={false} />
      </LineChart>,
    );

    expectLines(container, [{ d: 'M5,5L150,101.667L295,198.333' }]);
  });

  it('should call the function and give it the latest data', () => {
    const spy = vi.fn();
    const { rerender } = render(
      <LineChart width={300} height={300} data={data1}>
        <Line dataKey={spy} />
      </LineChart>,
    );

    expect(spy).toHaveBeenCalledTimes(data1.length * 6);
    expect(spy).toHaveBeenNthCalledWith(1, data1[0]);
    expect(spy).toHaveBeenNthCalledWith(2, data1[1]);
    expect(spy).toHaveBeenNthCalledWith(3, data1[2]);

    spy.mockReset();

    rerender(
      <LineChart width={300} height={300} data={data2}>
        <Line dataKey={spy} />
      </LineChart>,
    );

    expect(spy).toHaveBeenCalledTimes(data2.length * 6);
    expect(spy).toHaveBeenNthCalledWith(1, data2[0]);
    expect(spy).toHaveBeenNthCalledWith(2, data2[1]);
    expect(spy).toHaveBeenNthCalledWith(3, data2[2]);
  });

  test('reproducing https://github.com/recharts/recharts/issues/4935', () => {
    const dataKey1Spy = vi.fn(dataKey1);
    const dataKey2Spy = vi.fn(dataKey2);
    const Reproduction = () => {
      const [useData2, setUseData2] = useState(false);

      return (
        <>
          <button type="button" onClick={() => setUseData2(true)}>
            Use data2
          </button>
          <LineChart width={300} height={300} data={useData2 ? data2 : data1}>
            <Line dataKey={useData2 ? dataKey2Spy : dataKey1Spy} isAnimationActive={false} />
          </LineChart>
        </>
      );
    };

    const { container } = render(<Reproduction />);
    expectLines(container, [{ d: 'M5,198.333L150,101.667L295,5' }]);
    expect(dataKey1Spy).toHaveBeenCalledTimes(data1.length * 7);
    expect(dataKey1Spy).toHaveBeenNthCalledWith(1, data1[0]);
    expect(dataKey1Spy).toHaveBeenLastCalledWith(data1[2]);
    expect(dataKey2Spy).toHaveBeenCalledTimes(0);

    fireEvent.click(screen.getByText('Use data2'));

    expectLines(container, [{ d: 'M5,5L150,101.667L295,198.333' }]);
    expect(dataKey1Spy).toHaveBeenCalledTimes(data1.length * 9);

    expect(dataKey2Spy).toHaveBeenCalledTimes(data2.length * 7);
    expect(dataKey2Spy).toHaveBeenNthCalledWith(1, data2[0]);
    expect(dataKey2Spy).toHaveBeenLastCalledWith(data2[2]);
  });
});
