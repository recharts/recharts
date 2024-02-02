import React, { ComponentType, FC, ReactNode } from 'react';
import { describe, test, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  Area,
  AreaChart,
  BarChart,
  ComposedChart,
  FunnelChart,
  LineChart,
  PieChart,
  RadarChart,
  RadialBarChart,
  ScatterChart,
  YAxis,
} from '../../src';
import { LayoutType } from '../../src/util/types';

type TestCase = {
  ChartElement: ComponentType<{
    children?: ReactNode;
    width?: number;
    height?: number;
    data?: any[];
    layout?: LayoutType;
  }>;
  testName: string;
};

const chartsThatSupportArea: ReadonlyArray<TestCase> = [
  { ChartElement: ComposedChart, testName: 'ComposedChart' },
  { ChartElement: AreaChart, testName: 'AreaElement' },
];

const chartsThatDoNotSupportArea: ReadonlyArray<TestCase> = [
  { ChartElement: BarChart, testName: 'BarChart' },
  { ChartElement: LineChart, testName: 'LineChart' },
  { ChartElement: ScatterChart, testName: 'ScatterChart' },
  { ChartElement: PieChart, testName: 'PieChart' },
  { ChartElement: RadarChart, testName: 'RadarChart' },
  { ChartElement: RadialBarChart, testName: 'RadialBarChart' },
  { ChartElement: ScatterChart, testName: 'ScatterChart' },
  { ChartElement: FunnelChart, testName: 'FunnelChart' },
  // Treemap and Sankey do not accept children
  // { ChartElement: Treemap, testName: 'Treemap' },
  // { ChartElement: Sankey, testName: 'Sankey' },
];

const data = [
  { x: 10, y: 50, value: 100 },
  { x: 50, y: 50, value: 100 },
  { x: 90, y: 50, value: 100 },
  { x: 130, y: 50, value: 100 },
  { x: 170, y: 50, value: 100 },
];

describe.each(chartsThatSupportArea)('<Area /> as a child of $testName', ({ ChartElement }) => {
  describe('label', () => {
    test('Render customized label when label is set to be a function', () => {
      const renderLabel = (props: { index: number; x: number; y: number }) => {
        const { index, x, y } = props;

        return (
          <text key={index} x={x} y={y} className="customized-label">
            Customized Label
          </text>
        );
      };

      render(
        <ChartElement width={500} height={500} data={data}>
          <Area dataKey="value" isAnimationActive={false} baseLine={200} label={renderLabel} />
        </ChartElement>,
      );

      expect(screen.getAllByText('Customized Label')).toHaveLength(data.length);
    });

    test('Render customized label when label is set to be a react element', () => {
      const Label: FC<{ index: number; x: number; y: number }> = props => {
        const { index, x, y } = props;

        return (
          <text key={index} x={x} y={y} className="customized-label">
            Customized Label
          </text>
        );
      };

      render(
        <ChartElement width={500} height={500} data={data}>
          <Area
            dataKey="value"
            isAnimationActive={false}
            baseLine={200}
            label={({ index, x, y }: { index: number; x: number; y: number }) => <Label index={index} x={x} y={y} />}
          />
        </ChartElement>,
      );

      expect(screen.getAllByText('Customized Label')).toHaveLength(data.length);
    });
  });

  describe('dot', () => {
    test('Render customized dot when dot is set to be a function', () => {
      const renderDot = (props: { cx: number; cy: number }) => {
        const { cx, cy } = props;

        return <circle role="cell" key={cx} x={cx} y={cy} r={5} className="customized-dot" />;
      };

      render(
        <ChartElement width={500} height={500} data={data}>
          <Area dataKey="value" isAnimationActive={false} baseLine={200} dot={renderDot} />
        </ChartElement>,
      );

      expect(screen.getAllByRole('cell')).toHaveLength(data.length);
    });

    test('Render customized dot when dot is set to be a react element', () => {
      const CustomizedDot: FC<{ cx?: number; cy?: number }> = ({ cx, cy }) => (
        <circle role="cell" cx={cx} cy={cy} r={5} className="customized-dot" />
      );

      render(
        <ChartElement width={500} height={500} data={data}>
          <Area
            dataKey="value"
            isAnimationActive={false}
            baseLine={200}
            dot={({ cx, cy }) => <CustomizedDot key={`${cx}-${cy}`} cx={cx} cy={cy} />}
          />
        </ChartElement>,
      );

      expect(screen.getAllByRole('cell')).toHaveLength(data.length);
    });

    test('Does not throw when dot is null', () => {
      const { container } = render(
        <ChartElement width={500} height={500} data={data}>
          {/* Test that the error Cannot read properties of null (reading 'clipDot') does not appear in JS projects */}
          {/* @ts-expect-error TypeScript correctly flags this as an error, but we want to have a test for it regardless */}
          <Area dataKey="value" dot={null} />
        </ChartElement>,
      );

      expect(container.querySelectorAll('.recharts-area-area')).toHaveLength(1);
      expect(container.querySelectorAll('.recharts-area-curve')).toHaveLength(1);
      expect(container.querySelectorAll('.recharts-area-dot')).toHaveLength(0);
    });
  });

  describe('baseValue', () => {
    describe('horizontal layout with numeric Y axis', () => {
      const layout = 'horizontal';
      it('should default baseValue to zero if no domain is defined in the axis', () => {
        const { container } = render(
          <ChartElement width={500} height={500} data={data} layout={layout}>
            <Area dataKey="value" />
            <YAxis />
          </ChartElement>,
        );
        const curves = container.querySelectorAll('.recharts-curve');
        expect(curves).toHaveLength(2);
        expect
          .soft(curves[0])
          .toHaveAttribute('d', 'M65,5L172.5,5L280,5L387.5,5L495,5L495,495L387.5,495L280,495L172.5,495L65,495Z');
        expect.soft(curves[1]).toHaveAttribute('d', 'M65,5L172.5,5L280,5L387.5,5L495,5');
      });

      it('should default baseValue to the first number in domain', () => {
        const { container } = render(
          <ChartElement width={500} height={500} data={data} layout={layout}>
            <Area dataKey="value" />
            <YAxis domain={[20, 300]} />
          </ChartElement>,
        );
        const curves = container.querySelectorAll('.recharts-curve');
        expect(curves).toHaveLength(2);
        expect
          .soft(curves[0])
          .toHaveAttribute(
            'd',
            'M65,355L172.5,355L280,355L387.5,355L495,355L495,495L387.5,495L280,495L172.5,495L65,495Z',
          );
        expect.soft(curves[1]).toHaveAttribute('d', 'M65,355L172.5,355L280,355L387.5,355L495,355');
      });

      it('should set baseValue to dataMin', () => {
        const { container } = render(
          <ChartElement width={500} height={500} data={data} layout={layout}>
            <Area dataKey="value" baseValue="dataMin" />
            <YAxis domain={[20, 300]} />
          </ChartElement>,
        );
        const curves = container.querySelectorAll('.recharts-curve');
        expect(curves).toHaveLength(2);
        expect
          .soft(curves[0])
          .toHaveAttribute(
            'd',
            'M65,355L172.5,355L280,355L387.5,355L495,355L495,495L387.5,495L280,495L172.5,495L65,495Z',
          );
        expect.soft(curves[1]).toHaveAttribute('d', 'M65,355L172.5,355L280,355L387.5,355L495,355');
      });

      it('should set baseValue to dataMax', () => {
        const { container } = render(
          <ChartElement width={500} height={500} data={data} layout={layout}>
            <Area dataKey="value" baseValue="dataMax" />
            <YAxis domain={[20, 300]} />
          </ChartElement>,
        );
        const curves = container.querySelectorAll('.recharts-curve');
        expect(curves).toHaveLength(2);
        expect
          .soft(curves[0])
          .toHaveAttribute('d', 'M65,355L172.5,355L280,355L387.5,355L495,355L495,5L387.5,5L280,5L172.5,5L65,5Z');
        expect.soft(curves[1]).toHaveAttribute('d', 'M65,355L172.5,355L280,355L387.5,355L495,355');
      });
    });

    describe.todo('horizontal layout with categorical Y axis');
    describe.todo('vertical layout with numeric X axis');
    describe.todo('vertical layout with categorical X axis');

    describe('with no axes', () => {
      it('should default baseValue to 0', () => {
        const { container } = render(
          <ChartElement width={500} height={500} data={data}>
            <Area dataKey="value" />
          </ChartElement>,
        );
        const curves = container.querySelectorAll('.recharts-curve');
        expect(curves).toHaveLength(2);
        expect
          .soft(curves[0])
          .toHaveAttribute('d', 'M5,5L127.5,5L250,5L372.5,5L495,5L495,495L372.5,495L250,495L127.5,495L5,495Z');
        expect.soft(curves[1]).toHaveAttribute('d', 'M5,5L127.5,5L250,5L372.5,5L495,5');
      });

      it('should set baseValue to a number', () => {
        const { container } = render(
          <ChartElement width={500} height={500} data={data}>
            <Area dataKey="value" baseValue={9} />
          </ChartElement>,
        );
        const curves = container.querySelectorAll('.recharts-curve');
        expect(curves).toHaveLength(2);
        expect
          .soft(curves[0])
          .toHaveAttribute(
            'd',
            'M5,5L127.5,5L250,5L372.5,5L495,5L495,450.9L372.5,450.9L250,450.9L127.5,450.9L5,450.9Z',
          );
        expect.soft(curves[1]).toHaveAttribute('d', 'M5,5L127.5,5L250,5L372.5,5L495,5');
      });

      it('should set baseValue to 0 when dataMin', () => {
        const { container } = render(
          <ChartElement width={500} height={500} data={data}>
            <Area dataKey="value" baseValue="dataMin" />
          </ChartElement>,
        );
        const curves = container.querySelectorAll('.recharts-curve');
        expect(curves).toHaveLength(2);
        expect
          .soft(curves[0])
          .toHaveAttribute('d', 'M5,5L127.5,5L250,5L372.5,5L495,5L495,495L372.5,495L250,495L127.5,495L5,495Z');
        expect.soft(curves[1]).toHaveAttribute('d', 'M5,5L127.5,5L250,5L372.5,5L495,5');
      });

      it('should set baseValue to dataMax', () => {
        const { container } = render(
          <ChartElement width={500} height={500} data={data}>
            <Area dataKey="value" baseValue="dataMax" />
          </ChartElement>,
        );
        const curves = container.querySelectorAll('.recharts-curve');
        expect(curves).toHaveLength(2);
        expect
          .soft(curves[0])
          .toHaveAttribute('d', 'M5,5L127.5,5L250,5L372.5,5L495,5L495,5L372.5,5L250,5L127.5,5L5,5Z');
        expect.soft(curves[1]).toHaveAttribute('d', 'M5,5L127.5,5L250,5L372.5,5L495,5');
      });
    });
  });

  test.each([{ myData: undefined }, { myData: [] }])("Don't render any path when data is $myData", ({ myData }) => {
    const { container } = render(
      <ChartElement width={500} height={500} data={myData}>
        <Area dataKey="value" />
      </ChartElement>,
    );

    expect(container.querySelectorAll('.recharts-area-area')).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-area-curve')).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-area-dot')).toHaveLength(0);
  });

  test('renders the curve with the stroke on top (2nd) of the curve with the fill (1st)', () => {
    const { container } = render(
      <ChartElement width={500} height={500} data={data}>
        <Area dataKey="value" baseLine={200} stroke="teal" fill="teal" />
      </ChartElement>,
    );

    const curveCount = container.querySelectorAll('.recharts-curve').length;

    expect(container.querySelectorAll('.recharts-curve')).toHaveLength(2);
    expect(container.querySelectorAll('.recharts-curve')[0]).toHaveAttribute('stroke', 'none');
    expect(container.querySelectorAll('.recharts-curve')[0]).toHaveAttribute('fill', 'teal');
    expect(container.querySelectorAll('.recharts-curve')[curveCount - 1]).toHaveAttribute('stroke', 'teal');
    expect(container.querySelectorAll('.recharts-curve')[curveCount - 1]).toHaveAttribute('fill', 'none');
  });
});

describe.each(chartsThatDoNotSupportArea)('<Area /> as a child of $testName', ({ ChartElement }) => {
  it('should not render any curves', () => {
    const { container } = render(
      <ChartElement width={500} height={500} data={data}>
        <Area dataKey="value" baseLine={200} stroke="teal" fill="teal" />
      </ChartElement>,
    );

    expect(container.querySelectorAll('.recharts-curve')).toHaveLength(0);
  });
});
