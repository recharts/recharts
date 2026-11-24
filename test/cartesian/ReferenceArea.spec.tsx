import React from 'react';
import { describe, expect, it, Mock, test, vi } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import {
  Bar,
  BarChart,
  Brush,
  IfOverflow,
  LabelProps,
  Line,
  LineChart,
  pattern,
  patterns,
  ReferenceArea,
  XAxis,
  YAxis,
} from '../../src';
import { useAppSelector } from '../../src/state/hooks';
import { selectReferenceAreasByAxis } from '../../src/state/selectors/axisSelectors';
import { userEventSetup } from '../helper/userEventSetup';
import { assertNotNull } from '../helper/assertNotNull';
import { expectLastCalledWith } from '../helper/expectLastCalledWith';

describe('<ReferenceArea />', () => {
  const data = [
    { name: '201102', uv: -6.11, pv: 0 },
    { name: '201103', uv: 0.39, pv: 0 },
    { name: '201104', uv: -1.37, pv: 0 },
    { name: '201105', uv: 1.16, pv: 0 },
    { name: '201106', uv: 1.29, pv: 0 },
    { name: '201107', uv: 0.09, pv: 0 },
    { name: '201108', uv: 0.53, pv: 0 },
    { name: '201109', uv: 2.52, pv: 0 },
    { name: '201110', uv: 0.79, pv: 0 },
    { name: '201111', uv: 2.94, pv: 0 },
    { name: '201112', uv: 4.3, pv: 0 },
  ];

  test('Render 1 rect in ReferenceArea', () => {
    const { container } = render(
      <BarChart
        width={1100}
        height={250}
        barGap={2}
        barSize={6}
        data={data}
        margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
      >
        <XAxis dataKey="name" orientation="top" />
        <YAxis tickCount={7} orientation="right" />
        <Bar dataKey="uv" />
        <ReferenceArea x1="201106" x2="201110" fill="#666" label="201106" />
        <ReferenceArea y1={0} y2={2} fill="#666" label="201106" />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-reference-area-rect')).toHaveLength(2);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(2);
  });

  it('should render nothing if neither XAxis not Bar are present', () => {
    const { container } = render(
      <BarChart
        width={1100}
        height={250}
        barGap={2}
        barSize={6}
        data={data}
        margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
      >
        <YAxis tickCount={7} orientation="right" />
        <ReferenceArea x1="201106" x2="201110" fill="#666" />
        <ReferenceArea y1={0} y2={2} fill="#999" />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-reference-area-rect')).toHaveLength(0);
  });

  it('should render nothing if neither YAxis not Bar are present', () => {
    const { container } = render(
      <BarChart
        width={1100}
        height={250}
        barGap={2}
        barSize={6}
        data={data}
        margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
      >
        <XAxis dataKey="name" orientation="top" />
        <ReferenceArea x1="201106" x2="201110" fill="#666" />
        <ReferenceArea y1={0} y2={2} fill="#999" />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-reference-area-rect')).toHaveLength(0);
  });

  it('should hallucinate XAxis props from Bar', () => {
    const { container } = render(
      <BarChart
        width={1100}
        height={250}
        barGap={2}
        barSize={6}
        data={data}
        margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
      >
        <YAxis tickCount={7} orientation="right" />
        <Bar dataKey="uv" />
        <ReferenceArea y1={0} y2={2} fill="#999" />
      </BarChart>,
    );
    const allAreas = container.querySelectorAll('.recharts-reference-area-rect');
    expect(allAreas).toHaveLength(1);
    const area = allAreas[0];
    expect(area).toHaveAttribute('d', 'M 20,109.4444 h 960 v 25.5556 h -960 Z');
  });

  test("Don't render any rect in ReferenceArea when no x1, x2, y1 or y2 is set", () => {
    const { container } = render(
      <BarChart
        width={1100}
        height={250}
        barGap={2}
        barSize={6}
        data={data}
        margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
      >
        <XAxis dataKey="name" orientation="top" />
        <YAxis tickCount={7} orientation="right" />
        <Bar dataKey="uv" />
        <ReferenceArea stroke="#666" label="0" />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-reference-area-rect')).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(0);
  });

  test('Render a rect in ReferenceArea when x1, x2, y1 or y2 is set', () => {
    const { container } = render(
      <BarChart
        width={1100}
        height={250}
        barGap={2}
        barSize={6}
        data={data}
        margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
      >
        <XAxis dataKey="name" orientation="top" />
        <YAxis tickCount={7} orientation="right" />
        <Bar dataKey="uv" />
        <ReferenceArea x1="201106" stroke="#666" label="0" />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-reference-area-rect')).toHaveLength(1);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(1);
  });

  test("Don't render any line or label when reference area is outside domain in ReferenceArea", () => {
    const { container } = render(
      <BarChart
        width={1100}
        height={250}
        barGap={2}
        barSize={6}
        data={data}
        margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
      >
        <XAxis dataKey="name" orientation="bottom" />
        <YAxis tickCount={7} orientation="right" />
        <Bar dataKey="uv" />
        <ReferenceArea y1={200} y2={300} fill="#666" />
        <ReferenceArea x1="20150201" x2="20150201" fill="#666" />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-reference-area-rect')).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(0);
  });

  test('Render line and label when ifOverflow is "extendDomain" in ReferenceArea', () => {
    const { container } = render(
      <BarChart
        width={1100}
        height={250}
        barGap={2}
        barSize={6}
        data={data}
        margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
      >
        <XAxis dataKey="name" />
        <YAxis tickCount={7} />
        <Bar dataKey="uv" />
        <ReferenceArea y1={200} y2={300} fill="#666" ifOverflow="extendDomain" />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-reference-area-rect')).toHaveLength(1);
  });

  describe('label', () => {
    it('should render label defined as a string', () => {
      const { container, getByText } = render(
        <BarChart
          width={1100}
          height={250}
          barGap={2}
          barSize={6}
          data={data}
          margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
        >
          <XAxis dataKey="name" orientation="top" />
          <YAxis tickCount={7} orientation="right" />
          <Bar dataKey="uv" />
          <ReferenceArea x1="201106" x2="201110" fill="#666" label="My label text" />
        </BarChart>,
      );
      expect(container.querySelectorAll('.recharts-label')).toHaveLength(1);
      expect(getByText('My label text')).toBeVisible();
    });

    it('should render label defined as a number', () => {
      const { container, getByText } = render(
        <BarChart
          width={1100}
          height={250}
          barGap={2}
          barSize={6}
          data={data}
          margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
        >
          <XAxis dataKey="name" orientation="top" />
          <YAxis tickCount={7} orientation="right" />
          <Bar dataKey="uv" />
          <ReferenceArea x1="201106" x2="201110" fill="#666" label={2024} />
        </BarChart>,
      );
      expect(container.querySelectorAll('.recharts-label')).toHaveLength(1);
      expect(getByText('2024')).toBeVisible();
    });

    it('should render label defined as a Label props object', () => {
      const { container, getByText } = render(
        <BarChart
          width={1100}
          height={250}
          barGap={2}
          barSize={6}
          data={data}
          margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
        >
          <XAxis dataKey="name" orientation="top" />
          <YAxis tickCount={7} orientation="right" />
          <Bar dataKey="uv" />
          <ReferenceArea
            x1="201106"
            x2="201110"
            fill="#666"
            label={{ value: 'This is not documented by it works perfectly fine', offset: 8 }}
          />
        </BarChart>,
      );
      expect(container.querySelectorAll('.recharts-label')).toHaveLength(1);
      expect(getByText('This is not documented by it works perfectly fine')).toBeVisible();
    });

    test('Render 1 line and 1 label when label is a function', () => {
      const renderLabel = (props: LabelProps) => {
        const { x, y } = props;

        return (
          <text className="customized-reference-area-label" x={x} y={y}>
            My custom label text
          </text>
        );
      };
      const { container, getByText } = render(
        <BarChart
          width={1100}
          height={250}
          barGap={2}
          barSize={6}
          data={data}
          margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
        >
          <XAxis dataKey="name" />
          <YAxis tickCount={7} />
          <Bar dataKey="uv" />
          <ReferenceArea x1="201106" x2="201110" fill="#666" label={renderLabel} />
        </BarChart>,
      );
      expect(container.querySelectorAll('.recharts-reference-area-rect')).toHaveLength(1);
      expect(container.querySelectorAll('.customized-reference-area-label')).toHaveLength(1);
      expect(getByText('My custom label text')).toBeVisible();
    });

    test.each([true, false])('should not render label when label=%s', label => {
      const { container } = render(
        <BarChart
          width={1100}
          height={250}
          barGap={2}
          barSize={6}
          data={data}
          margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
        >
          <XAxis dataKey="name" />
          <YAxis tickCount={7} />
          <Bar dataKey="uv" />
          <ReferenceArea x1="201106" x2="201110" fill="#666" label={label} />
        </BarChart>,
      );

      expect(container.querySelectorAll('.recharts-label')).toHaveLength(0);
    });

    test('Render custom label when label is react element', () => {
      const Label = ({ text, ...props }: { text: string }) => <text {...props}>{text}</text>;
      const { getByText } = render(
        <BarChart
          width={1100}
          height={250}
          barGap={2}
          barSize={6}
          data={data}
          margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
        >
          <XAxis dataKey="name" />
          <YAxis tickCount={7} />
          <Bar dataKey="uv" />
          <ReferenceArea
            x1="201106"
            x2="201110"
            fill="#666"
            label={<Label text="Custom Text" />}
            ifOverflow="extendDomain"
          />
        </BarChart>,
      );
      expect(getByText('Custom Text')).toBeVisible();
    });
  });

  describe('shape', () => {
    it('should render rectangle when shape is not defined', () => {
      const { container } = render(
        <BarChart width={200} height={200} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="uv" />
          <ReferenceArea
            x1="201106"
            x2="201110"
            fill="#666"
            radius={20}
            strokeWidth={3}
            fillOpacity={0.7}
            stroke="yellow"
          />
        </BarChart>,
      );
      const allAreas = container.querySelectorAll('.recharts-reference-area-rect');
      expect(allAreas).toHaveLength(1);
      const area = allAreas[0];
      expect
        .soft(area.getAttributeNames().sort())
        .toEqual([
          'class',
          'd',
          'fill',
          'fill-opacity',
          'height',
          'radius',
          'stroke',
          'stroke-width',
          'width',
          'x',
          'x1',
          'x2',
          'y',
        ]);
      expect.soft(area).toHaveAttribute('x', '112.2727');
      expect.soft(area).toHaveAttribute('y', '5');
      expect.soft(area).toHaveAttribute('width', '59.0909');
      expect.soft(area).toHaveAttribute('height', '160');
      expect.soft(area).toHaveAttribute('radius', '20');
      expect.soft(area).toHaveAttribute('x1', '201106');
      expect.soft(area).toHaveAttribute('x2', '201110');
      expect.soft(area).toHaveAttribute('fill', '#666');
      expect.soft(area).toHaveAttribute('stroke-width', '3');
      expect.soft(area).toHaveAttribute('fill-opacity', '0.7');
      expect.soft(area).toHaveAttribute('stroke', 'yellow');
      expect.soft(area).toHaveAttribute('class', 'recharts-rectangle recharts-reference-area-rect');
      expect.soft(area.getAttribute('d')).toMatchSnapshot();
    });

    it('should render when shape is a React Element', () => {
      const { getByTestId } = render(
        <BarChart width={200} height={200} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="uv" />
          <ReferenceArea
            x1="201106"
            x2="201110"
            fill="#666"
            shape={<g data-testid="my-custom-shape" />}
            radius={10}
            strokeWidth={3}
          />
        </BarChart>,
      );
      const area = getByTestId('my-custom-shape');
      expect(area).toBeVisible();
    });

    it('should inject extra props if shape is a React element', () => {
      const { getByTestId } = render(
        <BarChart width={200} height={200} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="uv" />
          <ReferenceArea
            x1="201106"
            x2="201110"
            fill="#666"
            shape={<g data-testid="my-custom-shape" />}
            radius={20}
            strokeWidth={3}
            fillOpacity={0.7}
            stroke="yellow"
          />
        </BarChart>,
      );
      const area = getByTestId('my-custom-shape');
      expect(area).toHaveAttribute('data-testid', 'my-custom-shape');
      expect
        .soft(area.getAttributeNames().sort())
        .toEqual([
          'data-testid',
          'fill',
          'fill-opacity',
          'height',
          'radius',
          'stroke',
          'stroke-width',
          'width',
          'x',
          'x1',
          'x2',
          'y',
        ]);
      expect.soft(area).toHaveAttribute('x', '112.27272727272728');
      expect.soft(area).toHaveAttribute('y', '5');
      expect.soft(area).toHaveAttribute('width', '59.09090909090909');
      expect.soft(area).toHaveAttribute('height', '160');
      expect.soft(area).toHaveAttribute('radius', '20');
      expect.soft(area).toHaveAttribute('x1', '201106');
      expect.soft(area).toHaveAttribute('x2', '201110');
      expect.soft(area).toHaveAttribute('fill', '#666');
      expect.soft(area).toHaveAttribute('stroke-width', '3');
      expect.soft(area).toHaveAttribute('radius', '20');
      expect.soft(area).toHaveAttribute('fill-opacity', '0.7');
      expect.soft(area).toHaveAttribute('stroke', 'yellow');
    });

    it('should render if shape is a function', () => {
      const { getByTestId } = render(
        <BarChart width={200} height={200} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="uv" />
          <ReferenceArea
            x1="201106"
            x2="201110"
            fill="#666"
            shape={() => <g data-testid="my-custom-shape" />}
            radius={10}
            strokeWidth={3}
          />
        </BarChart>,
      );
      const area = getByTestId('my-custom-shape');
      expect(area).toBeVisible();
    });

    it('should pass arguments to the shape function', () => {
      const spy = vi.fn();
      render(
        <BarChart width={200} height={200} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="uv" />
          <ReferenceArea x1="201106" x2="201110" fill="#666" shape={spy} radius={10} strokeWidth={3} />
        </BarChart>,
      );
      expect(spy).toHaveBeenCalledTimes(2);
      expect(spy).toHaveBeenCalledWith({
        clipPath: undefined,
        fill: '#666',
        fillOpacity: 0.5,
        height: 160,
        radius: 10,
        stroke: 'none',
        strokeWidth: 3,
        width: 59.09090909090909,
        x: 112.27272727272728,
        x1: '201106',
        x2: '201110',
        y: 5,
      });
    });

    it('should pass clip-path when ifOverflow=hidden', () => {
      const { container } = render(
        <BarChart width={200} height={200} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="uv" />
          <ReferenceArea x1="201106" x2="201110" ifOverflow="hidden" />
        </BarChart>,
      );
      const allAreas = container.querySelectorAll('.recharts-reference-area-rect');
      expect(allAreas).toHaveLength(1);
      const area = allAreas[0];
      expect(area).toHaveAttribute('clip-path');
      expect(area.getAttribute('clip-path')).toMatch(/url\(#recharts(\d+)-clip\)/);
    });

    test.each(['discard', 'extendDomain', 'visible'] satisfies ReadonlyArray<IfOverflow>)(
      'should pass no clip-path when ifOverflow=%s',
      ifOverflow => {
        const { container } = render(
          <BarChart width={200} height={200} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="uv" />
            <ReferenceArea x1="201106" x2="201110" ifOverflow={ifOverflow} />
          </BarChart>,
        );
        const allAreas = container.querySelectorAll('.recharts-reference-area-rect');
        expect(allAreas).toHaveLength(1);
        const area = allAreas[0];
        expect(area).not.toHaveAttribute('clip-path');
      },
    );

    it('should discard rect shape if it does not fit on the domain and ifOverflow=discard', () => {
      const { container } = render(
        <BarChart width={200} height={200} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="uv" />
          <ReferenceArea y1={100} y2={200} ifOverflow="discard" />
        </BarChart>,
      );
      const allAreas = container.querySelectorAll('.recharts-reference-area-rect');
      expect(allAreas).toHaveLength(0);
    });

    test.each(['extendDomain', 'visible', 'hidden'] satisfies ReadonlyArray<IfOverflow>)(
      'should draw the shape if it does not fit on the domain and ifOverflow=%s',
      ifOverflow => {
        const { container } = render(
          <BarChart width={200} height={200} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="uv" />
            <ReferenceArea y1={100} y2={200} ifOverflow={ifOverflow} />
          </BarChart>,
        );
        const allAreas = container.querySelectorAll('.recharts-reference-area-rect');
        expect(allAreas).toHaveLength(1);
      },
    );
  });

  describe('events', () => {
    it('should fire event handlers when provided', async () => {
      const userEvent = userEventSetup();
      const onClick: Mock<(e: React.MouseEvent) => void> = vi.fn();
      const onMouseEnter: Mock<(e: React.MouseEvent) => void> = vi.fn();
      const onMouseLeave: Mock<(e: React.MouseEvent) => void> = vi.fn();
      const onMouseOver: Mock<(e: React.MouseEvent) => void> = vi.fn();
      const onMouseOut: Mock<(e: React.MouseEvent) => void> = vi.fn();
      const onMouseMove: Mock<(e: React.MouseEvent) => void> = vi.fn();
      const onTouchStart: Mock<(e: React.TouchEvent) => void> = vi.fn();
      const onTouchMove: Mock<(e: React.TouchEvent) => void> = vi.fn();
      const onTouchEnd: Mock<(e: React.TouchEvent) => void> = vi.fn();

      const { container } = render(
        <LineChart
          width={100}
          height={100}
          data={[
            { x: 0, y: 0 },
            { x: 1, y: 1 },
          ]}
        >
          <YAxis dataKey="y" />
          <XAxis dataKey="x" />
          <ReferenceArea
            x1={0}
            y1={0}
            x2={1}
            y2={1}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            onMouseMove={onMouseMove}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          />
        </LineChart>,
      );

      const dot = container.querySelector('.recharts-reference-area-rect');
      assertNotNull(dot);

      await userEvent.click(dot);
      expect(onClick).toHaveBeenCalledTimes(1);
      expectLastCalledWith(onClick, expect.objectContaining({ type: 'click' }));

      await userEvent.hover(dot);
      expect(onMouseEnter).toHaveBeenCalledTimes(1);
      expect(onMouseEnter).toHaveBeenLastCalledWith(expect.objectContaining({ type: 'mouseenter' }));
      expect(onMouseOver).toHaveBeenCalledTimes(1);
      expect(onMouseOver).toHaveBeenLastCalledWith(expect.objectContaining({ type: 'mouseover' }));

      await userEvent.unhover(dot);
      expect(onMouseLeave).toHaveBeenCalledTimes(1);
      expect(onMouseLeave).toHaveBeenLastCalledWith(expect.objectContaining({ type: 'mouseleave' }));
      expect(onMouseOut).toHaveBeenCalledTimes(1);
      expect(onMouseOut).toHaveBeenLastCalledWith(expect.objectContaining({ type: 'mouseout' }));

      await userEvent.pointer({ target: dot, keys: '[MouseMove]' });
      expect(onMouseMove).toHaveBeenCalledTimes(1);
      expect(onMouseMove).toHaveBeenLastCalledWith(expect.objectContaining({ type: 'mousemove' }));

      fireEvent.touchStart(dot);
      expect(onTouchStart).toHaveBeenCalledTimes(1);
      expect(onTouchStart).toHaveBeenLastCalledWith(expect.objectContaining({ type: 'touchstart' }));

      fireEvent.touchMove(dot);
      expect(onTouchMove).toHaveBeenCalledTimes(1);
      expect(onTouchMove).toHaveBeenLastCalledWith(expect.objectContaining({ type: 'touchmove' }));

      fireEvent.touchEnd(dot);
      expect(onTouchEnd).toHaveBeenCalledTimes(1);
      expect(onTouchEnd).toHaveBeenLastCalledWith(expect.objectContaining({ type: 'touchend' }));
    });
  });

  describe('state integration', () => {
    it('should report its settings to Redux state, and remove it after removing from DOM', () => {
      const areaSpy = vi.fn();
      const Comp = (): null => {
        areaSpy(useAppSelector(state => selectReferenceAreasByAxis(state, 'yAxis', 0)));
        return null;
      };
      const { rerender } = render(
        <BarChart width={200} height={200} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="uv" />
          <ReferenceArea y1={1} y2={2} x1="category 3" x2="category 4" ifOverflow="extendDomain" />
          <Comp />
        </BarChart>,
      );

      expect(areaSpy).toHaveBeenLastCalledWith([
        {
          ifOverflow: 'extendDomain',
          x1: 'category 3',
          x2: 'category 4',
          xAxisId: 0,
          y1: 1,
          y2: 2,
          yAxisId: 0,
        },
      ]);
      expect(areaSpy).toHaveBeenCalledTimes(3);

      rerender(
        <BarChart width={200} height={200} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="uv" />
          <Comp />
        </BarChart>,
      );

      expect(areaSpy).toHaveBeenLastCalledWith([]);
      expect(areaSpy).toHaveBeenCalledTimes(5);
    });
  });

  describe('with an edge that is not a category on the axis', () => {
    test.each(['discard', 'hidden', 'visible'] satisfies ReadonlyArray<IfOverflow>)(
      'should not render a rect when x1 is before the brushed range and ifOverflow=%s',
      ifOverflow => {
        const { container } = render(
          <BarChart width={400} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="uv" isAnimationActive={false} />
            <ReferenceArea x1="201102" x2="201107" ifOverflow={ifOverflow} />
            <Brush dataKey="name" startIndex={4} endIndex={8} />
          </BarChart>,
        );
        expect(container.querySelectorAll('.recharts-reference-area-rect')).toHaveLength(0);
      },
    );

    test.each(['discard', 'hidden', 'visible'] satisfies ReadonlyArray<IfOverflow>)(
      'should not render a rect when x2 is after the brushed range and ifOverflow=%s',
      ifOverflow => {
        const { container } = render(
          <BarChart width={400} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="uv" isAnimationActive={false} />
            <ReferenceArea x1="201104" x2="201110" ifOverflow={ifOverflow} />
            <Brush dataKey="name" startIndex={0} endIndex={4} />
          </BarChart>,
        );
        expect(container.querySelectorAll('.recharts-reference-area-rect')).toHaveLength(0);
      },
    );

    it('should not render a rect when y1 is not a category on the YAxis', () => {
      const { container } = render(
        <BarChart width={400} height={300} data={data} layout="vertical">
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Bar dataKey="uv" isAnimationActive={false} />
          <ReferenceArea y1="201201" y2="201104" />
        </BarChart>,
      );
      expect(container.querySelectorAll('.recharts-reference-area-rect')).toHaveLength(0);
    });

    it('should still render a rect when both edges are in the brushed range', () => {
      const { container } = render(
        <BarChart width={400} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="uv" isAnimationActive={false} />
          <ReferenceArea x1="201107" x2="201108" />
          <Brush dataKey="name" startIndex={4} endIndex={8} />
        </BarChart>,
      );
      expect(container.querySelectorAll('.recharts-reference-area-rect')).toHaveLength(1);
    });
  });

  describe('with non-finite coordinates', () => {
    const logData = [
      { x: 1, y: 1 },
      { x: 10, y: 10 },
      { x: 100, y: 100 },
    ];

    test.each(['discard', 'hidden', 'visible', 'extendDomain'] satisfies ReadonlyArray<IfOverflow>)(
      'should not render area or label when a log scale maps y1=0 to a non-finite value and ifOverflow=%s',
      ifOverflow => {
        const { container } = render(
          <LineChart width={400} height={300} data={logData}>
            <XAxis dataKey="x" type="number" />
            <YAxis scale="log" domain={[1, 100]} allowDataOverflow />
            <ReferenceArea y1={0} y2={10} ifOverflow={ifOverflow} label="Zone" />
          </LineChart>,
        );
        expect(container.querySelectorAll('.recharts-reference-area')).toHaveLength(0);
        expect(container.querySelectorAll('.recharts-reference-area-rect')).toHaveLength(0);
        expect(container.querySelectorAll('.recharts-label')).toHaveLength(0);
      },
    );

    test.each(['discard', 'hidden', 'visible', 'extendDomain'] satisfies ReadonlyArray<IfOverflow>)(
      'should not render area or label when a log scale maps negative y1 to NaN and ifOverflow=%s',
      ifOverflow => {
        const { container } = render(
          <LineChart width={400} height={300} data={logData}>
            <XAxis dataKey="x" type="number" />
            <YAxis scale="log" domain={[1, 100]} allowDataOverflow />
            <ReferenceArea y1={-5} y2={10} ifOverflow={ifOverflow} label="Zone" />
          </LineChart>,
        );
        expect(container.querySelectorAll('.recharts-reference-area')).toHaveLength(0);
        expect(container.querySelectorAll('.recharts-reference-area-rect')).toHaveLength(0);
        expect(container.querySelectorAll('.recharts-label')).toHaveLength(0);
      },
    );

    it('should still render area and label on a log scale when coordinates are positive and finite', () => {
      const { container } = render(
        <LineChart width={400} height={300} data={logData}>
          <XAxis dataKey="x" type="number" />
          <YAxis scale="log" domain={[1, 100]} allowDataOverflow />
          <ReferenceArea y1={1} y2={10} ifOverflow="visible" label="Zone" />
        </LineChart>,
      );
      expect(container.querySelectorAll('.recharts-reference-area-rect')).toHaveLength(1);
      expect(container.querySelectorAll('.recharts-label')).toHaveLength(1);
    });

    it('should still render area and label on a numeric axis when coordinates are finite', () => {
      const { container } = render(
        <LineChart width={400} height={300} data={logData}>
          <XAxis dataKey="x" type="number" domain={[0, 100]} />
          <YAxis domain={[0, 100]} />
          <Line dataKey="y" isAnimationActive={false} />
          <ReferenceArea x1={10} x2={50} y1={10} y2={50} ifOverflow="visible" label="Zone" />
        </LineChart>,
      );
      expect(container.querySelectorAll('.recharts-reference-area-rect')).toHaveLength(1);
      expect(container.querySelectorAll('.recharts-label')).toHaveLength(1);
    });

    test.each(['Infinity', '-Infinity'])(
      'should not render area or label when string %s is passed on a numeric axis',
      badString => {
        const { container } = render(
          <LineChart width={400} height={300} data={logData}>
            <XAxis dataKey="x" type="number" domain={[0, 100]} />
            <YAxis domain={[0, 100]} />
            <Line dataKey="y" isAnimationActive={false} />
            <ReferenceArea<string | number, number> x1={badString} x2={50} ifOverflow="visible" label="Zone" />
          </LineChart>,
        );
        expect(container.querySelectorAll('.recharts-reference-area')).toHaveLength(0);
        expect(container.querySelectorAll('.recharts-reference-area-rect')).toHaveLength(0);
        expect(container.querySelectorAll('.recharts-label')).toHaveLength(0);
      },
    );

    test.each([
      { label: 'x1=NaN', coords: { x1: NaN, x2: 50 } },
      { label: 'x1=Infinity', coords: { x1: Infinity, x2: 50 } },
      { label: 'x1=-Infinity', coords: { x1: -Infinity, x2: 50 } },
      { label: 'x2=NaN', coords: { x1: 10, x2: NaN } },
      { label: 'x2=Infinity', coords: { x1: 10, x2: Infinity } },
      { label: 'x2=-Infinity', coords: { x1: 10, x2: -Infinity } },
      { label: 'y1=NaN', coords: { y1: NaN, y2: 50 } },
      { label: 'y1=Infinity', coords: { y1: Infinity, y2: 50 } },
      { label: 'y1=-Infinity', coords: { y1: -Infinity, y2: 50 } },
      { label: 'y2=NaN', coords: { y1: 10, y2: NaN } },
      { label: 'y2=Infinity', coords: { y1: 10, y2: Infinity } },
      { label: 'y2=-Infinity', coords: { y1: 10, y2: -Infinity } },
    ])('should not render area when $label on a numeric axis', ({ coords }) => {
      const { container } = render(
        <LineChart width={400} height={300} data={logData}>
          <XAxis dataKey="x" type="number" domain={[0, 100]} />
          <YAxis domain={[0, 100]} />
          <Line dataKey="y" isAnimationActive={false} />
          <ReferenceArea {...coords} ifOverflow="visible" label="Zone" />
        </LineChart>,
      );
      expect(container.querySelectorAll('.recharts-reference-area')).toHaveLength(0);
      expect(container.querySelectorAll('.recharts-reference-area-rect')).toHaveLength(0);
      expect(container.querySelectorAll('.recharts-label')).toHaveLength(0);
    });

    it('should not render area when finite endpoints overflow rectangle width to Infinity', () => {
      const { container } = render(
        <LineChart width={400} height={300} data={logData}>
          <XAxis dataKey="x" type="number" domain={[0, 100]} />
          <YAxis domain={[0, 100]} />
          <Line dataKey="y" isAnimationActive={false} />
          <ReferenceArea x1={-3e307} x2={3e307} ifOverflow="visible" label="Zone" />
        </LineChart>,
      );
      expect(container.querySelectorAll('.recharts-reference-area')).toHaveLength(0);
      expect(container.querySelectorAll('.recharts-reference-area-rect')).toHaveLength(0);
    });

    it('should not render area when finite endpoints overflow rectangle height to Infinity', () => {
      const { container } = render(
        <LineChart width={400} height={300} data={logData}>
          <XAxis dataKey="x" type="number" domain={[0, 100]} />
          <YAxis domain={[0, 100]} />
          <Line dataKey="y" isAnimationActive={false} />
          <ReferenceArea y1={-4e307} y2={4e307} ifOverflow="visible" label="Zone" />
        </LineChart>,
      );
      expect(container.querySelectorAll('.recharts-reference-area')).toHaveLength(0);
      expect(container.querySelectorAll('.recharts-reference-area-rect')).toHaveLength(0);
    });

    it('should not render SVG fill definitions when coordinates are non-finite', () => {
      const { container } = render(
        <LineChart width={400} height={300} data={logData}>
          <XAxis dataKey="x" type="number" />
          <YAxis scale="log" domain={[1, 100]} allowDataOverflow />
          <ReferenceArea
            y1={-5}
            y2={10}
            ifOverflow="visible"
            fill={{ color: 'blue', definition: pattern(patterns.diagonal) }}
          />
        </LineChart>,
      );
      expect(container.querySelectorAll('.recharts-reference-area')).toHaveLength(0);
      expect(container.querySelectorAll('defs pattern')).toHaveLength(0);
    });

    it('should not pass non-finite geometry to a custom shape or render a custom label when coordinates are non-finite', () => {
      const shapeSpy = vi.fn((_props: Record<string, unknown>) => <g data-testid="custom-area-shape" />);
      const { container } = render(
        <LineChart width={400} height={300} data={logData}>
          <XAxis dataKey="x" type="number" />
          <YAxis scale="log" domain={[1, 100]} allowDataOverflow />
          <ReferenceArea
            y1={0}
            y2={10}
            ifOverflow="visible"
            shape={shapeSpy}
            label={<text data-testid="custom-area-label">Zone</text>}
          />
        </LineChart>,
      );
      expect(shapeSpy).toHaveBeenCalled();
      const lastCallArgs = shapeSpy.mock.calls.at(-1)?.[0];
      expect(lastCallArgs).not.toHaveProperty('x');
      expect(lastCallArgs).not.toHaveProperty('y');
      expect(lastCallArgs).not.toHaveProperty('width');
      expect(lastCallArgs).not.toHaveProperty('height');
      expect(container.querySelectorAll('[data-testid="custom-area-label"]')).toHaveLength(0);
    });
  });
});
