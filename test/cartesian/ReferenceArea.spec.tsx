import React from 'react';
import { describe, vi, it, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BarChart, ReferenceArea, Bar, XAxis, YAxis, LabelProps, Customized } from '../../src';
import { IfOverflow } from '../../src/util/IfOverflow';
import { useAppSelector } from '../../src/state/hooks';
import { selectReferenceAreasByAxis } from '../../src/state/selectors/axisSelectors';

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
    expect(area).toHaveAttribute('d', 'M 20,109.44444444444444 h 960 v 25.555555555555557 h -960 Z');
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
            radius={10}
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
          'r',
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
      expect.soft(area).toHaveAttribute('radius', '10');
      expect.soft(area).toHaveAttribute('x1', '201106');
      expect.soft(area).toHaveAttribute('x2', '201110');
      expect.soft(area).toHaveAttribute('fill', '#666');
      expect.soft(area).toHaveAttribute('stroke-width', '3');
      expect.soft(area).toHaveAttribute('r', '10');
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
            radius={10}
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
          'r',
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
      expect.soft(area).toHaveAttribute('radius', '10');
      expect.soft(area).toHaveAttribute('x1', '201106');
      expect.soft(area).toHaveAttribute('x2', '201110');
      expect.soft(area).toHaveAttribute('fill', '#666');
      expect.soft(area).toHaveAttribute('stroke-width', '3');
      expect.soft(area).toHaveAttribute('r', '10');
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
        r: 10,
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
          <Customized component={<Comp />} />
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
      expect(areaSpy).toHaveBeenCalledTimes(2);

      rerender(
        <BarChart width={200} height={200} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="uv" />
          <Customized component={<Comp />} />
        </BarChart>,
      );

      expect(areaSpy).toHaveBeenLastCalledWith([]);
      expect(areaSpy).toHaveBeenCalledTimes(4);
    });
  });
});
