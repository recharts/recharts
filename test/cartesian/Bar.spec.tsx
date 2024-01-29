import React, { ComponentType, ReactNode } from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import uniqueId from 'lodash/uniqueId';
import {
  AreaChart,
  Bar,
  BarChart,
  ComposedChart,
  FunnelChart,
  LineChart,
  PieChart,
  RadarChart,
  RadialBarChart,
  ScatterChart,
} from '../../src';

type TestCase = {
  ChartElement: ComponentType<{ children?: ReactNode; width?: number; height?: number }>;
  testName: string;
};

const chartsThatSupportBar: ReadonlyArray<TestCase> = [
  { ChartElement: ComposedChart, testName: 'ComposedChart' },
  { ChartElement: BarChart, testName: 'BarChart' },
];

const chartsThatDoNotSupportBar: ReadonlyArray<TestCase> = [
  { ChartElement: AreaChart, testName: 'AreaElement' },
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
  { x: 10, y: 50, width: 20, height: 50, value: 100, label: 'test1' },
  { x: 50, y: 50, width: 20, height: 50, value: 200, label: 'test2' },
  { x: 90, y: 50, width: 20, height: 50, value: 300, label: 'test3' },
  { x: 130, y: 50, width: 20, height: 50, value: 400, label: 'test4' },
  { x: 170, y: 50, width: 20, height: 50, value: 500, label: 'test5' },
];

describe.each(chartsThatSupportBar)('<Bar /> as a child of $testName', ({ ChartElement }) => {
  it(`Render ${data.length} rectangles in horizontal Bar`, () => {
    const { container } = render(
      <ChartElement width={500} height={500}>
        <Bar isAnimationActive={false} layout="horizontal" data={data} dataKey="value" />
      </ChartElement>,
    );

    expect(container.querySelectorAll('.recharts-bar-rectangle')).toHaveLength(data.length);
  });

  it(`Render ${data.length} rectangles in vertical Bar`, () => {
    const { container } = render(
      <ChartElement width={500} height={500}>
        <Bar isAnimationActive={false} layout="vertical" data={data} dataKey="value" />
      </ChartElement>,
    );

    expect(container.querySelectorAll('.recharts-bar-rectangle')).toHaveLength(data.length);
  });

  it("Don't render any rectangle when data is empty", () => {
    const { container } = render(
      <ChartElement width={500} height={500}>
        <Bar data={[]} dataKey="value" />
      </ChartElement>,
    );

    expect(container.querySelectorAll('.recharts-bar-rectangle')).toHaveLength(0);
  });

  describe('With background', () => {
    const composedDataWithBackground = [
      {
        x: 10,
        y: 50,
        width: 20,
        height: 20,
        value: 40,
        label: 'test',
        background: { x: 10, y: 50, width: 20, height: 50 },
      },
      {
        x: 50,
        y: 50,
        width: 20,
        height: 50,
        value: 100,
        label: 'test',
        background: { x: 50, y: 50, width: 20, height: 50 },
      },
    ];

    it('Will create a background Rectangle with the passed in props', () => {
      const { container } = render(
        <ChartElement width={500} height={500}>
          <Bar data={composedDataWithBackground} background={{ fill: '#000' }} dataKey="value" />
        </ChartElement>,
      );

      expect(container.querySelectorAll('.recharts-bar-background-rectangle')).toHaveLength(
        composedDataWithBackground.length,
      );
    });

    it('Will accept a function for the background prop', () => {
      const className = 'test-custom-background';
      const backgroundComponent = () => {
        return <div key={uniqueId()} className={className} />;
      };
      const { container } = render(
        <ChartElement width={500} height={500}>
          <Bar data={composedDataWithBackground} background={backgroundComponent} dataKey="value" />
        </ChartElement>,
      );

      expect(container.querySelectorAll(`.${className}`)).toHaveLength(composedDataWithBackground.length);
    });

    it('should pass props to the custom background function', () => {
      const expectedProps = {
        className: 'recharts-bar-background-rectangle',
        dataKey: 'value',
        fill: '#eee',
        height: 50,
        index: expect.any(Number),
        label: 'test',
        onAnimationEnd: expect.any(Function),
        onAnimationStart: expect.any(Function),
        width: 20,
        x: expect.any(Number),
        y: 50,
      };
      const backgroundComponent = props => {
        expect.soft(props).toEqual(expectedProps);
        return <></>;
      };
      render(
        <ChartElement width={500} height={500}>
          <Bar data={composedDataWithBackground} background={backgroundComponent} dataKey="value" />
        </ChartElement>,
      );
    });
  });

  describe('label', () => {
    it('should draw default labels when label = true', () => {
      const { container } = render(
        <ChartElement width={500} height={500}>
          <Bar isAnimationActive={false} data={data} label dataKey="value" />
        </ChartElement>,
      );
      const labels = container.querySelectorAll('.recharts-text.recharts-label');
      expect(labels).toHaveLength(data.length);
      labels.forEach(l => {
        expect(l).toHaveAttribute('x', expect.any(String));
        expect(l).toHaveAttribute('y', '75');
        expect(l).toHaveAttribute('height', '50');
        expect(l).toHaveAttribute('offset', '5');
        expect(l).toHaveAttribute('text-anchor', 'middle');
        expect(l).toHaveAttribute('width', '20');
        expect(l).toHaveAttribute('fill', '#808080');
      });
    });

    it('should not draw labels while animating', () => {
      const { container } = render(
        <ChartElement width={500} height={500}>
          <Bar isAnimationActive data={data} label dataKey="value" />
        </ChartElement>,
      );
      const labels = container.querySelectorAll('.recharts-text.recharts-label');
      expect(labels).toHaveLength(0);
    });

    it('should not draw labels when label = false', () => {
      const { container } = render(
        <ChartElement width={500} height={500}>
          <Bar isAnimationActive={false} data={data} label={false} dataKey="value" />
        </ChartElement>,
      );
      const labels = container.querySelectorAll('.recharts-text.recharts-label');
      expect(labels).toHaveLength(0);
    });
  });
});

describe.each(chartsThatDoNotSupportBar)('<Bar /> as a child of $testName', ({ ChartElement }) => {
  it('should not render anything', () => {
    const { container } = render(
      <ChartElement width={500} height={500}>
        <Bar isAnimationActive={false} layout="horizontal" data={data} dataKey="value" data-testid="customized-bar" />
      </ChartElement>,
    );

    expect(container.querySelectorAll('.recharts-bar-rectangle')).toHaveLength(0);
  });
});
