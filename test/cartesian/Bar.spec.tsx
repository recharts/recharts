import React, { ComponentType, ReactNode } from 'react';
import { describe, expect, it, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import uniqueId from 'lodash/uniqueId';
import { Bar, Legend, LegendType, XAxis, YAxis } from '../../src';
import {
  allCategoricalsChartsExcept,
  BarChartCase,
  ComposedChartCase,
  includingCompact,
} from '../helper/parameterizedTestCases';

type TestCase = {
  ChartElement: ComponentType<{ children?: ReactNode; width?: number; height?: number; data?: any[] }>;
  testName: string;
};

const chartsThatSupportBar: ReadonlyArray<TestCase> = [ComposedChartCase, BarChartCase];

const chartsThatDoNotSupportBar: ReadonlyArray<TestCase> = includingCompact(
  allCategoricalsChartsExcept(chartsThatSupportBar),
);

const data = [
  { x: 10, y: 50, width: 20, height: 50, value: 100, label: 'test1' },
  { x: 50, y: 50, width: 20, height: 50, value: 200, label: 'test2' },
  { x: 90, y: 50, width: 20, height: 50, value: 300, label: 'test3' },
  { x: 130, y: 50, width: 20, height: 50, value: 400, label: 'test4' },
  { x: 170, y: 50, width: 20, height: 50, value: 500, label: 'test5' },
];

describe.each(includingCompact(chartsThatSupportBar))('<Bar /> as a child of $testName', ({ ChartElement }) => {
  it(`Render ${data.length} rectangles in horizontal Bar`, () => {
    const { container } = render(
      <ChartElement>
        <Bar isAnimationActive={false} layout="horizontal" data={data} dataKey="value" />
      </ChartElement>,
    );

    expect(container.querySelectorAll('.recharts-bar-rectangle')).toHaveLength(data.length);
  });

  it(`Render ${data.length} rectangles in vertical Bar`, () => {
    const { container } = render(
      <ChartElement>
        <Bar isAnimationActive={false} layout="vertical" data={data} dataKey="value" />
      </ChartElement>,
    );

    expect(container.querySelectorAll('.recharts-bar-rectangle')).toHaveLength(data.length);
  });

  it("Don't render any rectangle when data is empty", () => {
    const { container } = render(
      <ChartElement>
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
        <ChartElement>
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
        <ChartElement>
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
        onMouseEnter: expect.any(Function),
        onMouseLeave: expect.any(Function),
        onClick: expect.any(Function),
        width: 20,
        x: expect.any(Number),
        y: 50,
      };
      const backgroundComponent = (props: unknown) => {
        expect.soft(props).toEqual(expectedProps);
        return <></>;
      };
      render(
        <ChartElement>
          <Bar data={composedDataWithBackground} background={backgroundComponent} dataKey="value" />
        </ChartElement>,
      );
    });
  });

  describe('label', () => {
    describe('as boolean', () => {
      it('should draw default labels when label = true', () => {
        const { container } = render(
          <ChartElement>
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
          <ChartElement>
            <Bar isAnimationActive data={data} label dataKey="value" />
          </ChartElement>,
        );
        const labels = container.querySelectorAll('.recharts-text.recharts-label');
        expect(labels).toHaveLength(0);
      });

      it('should not draw labels when label = false', () => {
        const { container } = render(
          <ChartElement>
            <Bar isAnimationActive={false} data={data} label={false} dataKey="value" />
          </ChartElement>,
        );
        const labels = container.querySelectorAll('.recharts-text.recharts-label');
        expect(labels).toHaveLength(0);
      });
    });

    describe('as svg properties object', () => {
      it('should draw labels and add extra props from the object', () => {
        const { container } = render(
          <ChartElement>
            <Bar
              isAnimationActive={false}
              data={data}
              label={{
                fill: 'red',
                elevation: 9,
              }}
              dataKey="value"
            />
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
          expect(l).toHaveAttribute('fill', 'red');
          expect(l).toHaveAttribute('elevation', '9');
        });
      });

      it('should overwrite the recharts-label className but keep recharts-text className', () => {
        const { container } = render(
          <ChartElement>
            <Bar
              isAnimationActive={false}
              data={data}
              label={{
                className: 'my-test-class',
              }}
              dataKey="value"
            />
          </ChartElement>,
        );
        const labels = container.querySelectorAll('.recharts-text.recharts-label');
        expect(labels).toHaveLength(0);
        const customLabels = container.querySelectorAll('.my-test-class');
        expect(customLabels).toHaveLength(data.length);
        customLabels.forEach(l => {
          expect(l).toHaveAttribute('class', 'recharts-text my-test-class');
        });
      });
    });

    describe('as function', () => {
      it('should pass props to the label function', () => {
        const spy = vi.fn().mockReturnValue(null);
        render(
          <ChartElement>
            <Bar isAnimationActive={false} data={data} label={spy} dataKey="value" />
          </ChartElement>,
        );
        expect(spy).toHaveBeenCalledTimes(data.length);
        expect(spy).toBeCalledWith(
          {
            content: spy,
            height: 50,
            index: expect.any(Number),
            offset: 5,
            parentViewBox: undefined,
            textBreakAll: undefined,
            value: expect.any(Number),
            viewBox: {
              height: 50,
              width: 20,
              x: expect.any(Number),
              y: 50,
            },
            width: 20,
            x: expect.any(Number),
            y: 50,
          },
          {}, // this object arrives as a second argument, I am not sure where that comes from
        );
      });

      it('should render what the label function returned', () => {
        const labelFn = () => <g className="my-mock-class" />;
        const { container } = render(
          <ChartElement>
            <Bar isAnimationActive={false} data={data} label={labelFn} dataKey="value" />
          </ChartElement>,
        );
        const labels = container.querySelectorAll('.my-mock-class');
        expect(labels).toHaveLength(data.length);
        labels.forEach(l => {
          expect.soft(l).not.toHaveAttribute('x');
          expect.soft(l).not.toHaveAttribute('y');
          expect.soft(l).not.toHaveAttribute('height');
          expect.soft(l).not.toHaveAttribute('offset');
          expect.soft(l).not.toHaveAttribute('text-anchor');
          expect.soft(l).not.toHaveAttribute('width');
          expect.soft(l).not.toHaveAttribute('fill');
        });
      });

      it('should pass props to the minPointSize function', () => {
        const spy = vi.fn().mockImplementation(() => 5);
        render(
          <ChartElement data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar isAnimationActive={false} minPointSize={spy} dataKey="value" />
          </ChartElement>,
        );
        expect(spy).toHaveBeenCalledTimes(data.length);
        // expect it to be called with the value and the value's index
        expect(spy).toBeCalledWith(expect.any(Number), expect.any(Number));
      });

      it('should render with varying minPointSize as per function results', () => {
        const highLowData = [
          { name: 'test1', value: 100 },
          { name: 'test2', value: 0 },
          { name: 'test3', value: 1 },
        ];
        const { container } = render(
          <ChartElement data={highLowData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar isAnimationActive={false} minPointSize={(value: number) => (value > 0 ? 2 : 0)} dataKey="value" />
          </ChartElement>,
        );
        const rects = container.querySelectorAll<SVGPathElement>('.recharts-bar-rectangle > .recharts-rectangle');
        // expect only 2 rects, the one with 0 value does not render
        expect(rects).toHaveLength(2);

        // value of 100 should have height greater than 1
        expect(Number(rects[0].getAttribute('height'))).toBeGreaterThan(1);
        // value of 1 should have height greater than 0 due to minPointSize
        expect(Number(rects[1].getAttribute('height'))).toBeGreaterThan(0);
      });
    });

    describe('as a custom Element', () => {
      it(`should render what the function returned, and then inject extra sneaky props in it
                - but not all of them, and not the same as in the other ways of rendering labels`, () => {
        const MyLabel = <g className="my-mock-class" />;
        const { container } = render(
          <ChartElement>
            <Bar isAnimationActive={false} data={data} label={MyLabel} dataKey="value" />
          </ChartElement>,
        );
        const labels = container.querySelectorAll('.my-mock-class');
        expect(labels).toHaveLength(data.length);
        labels.forEach(l => {
          expect.soft(l).toHaveAttribute('x', expect.any(String));
          expect.soft(l).toHaveAttribute('y', '50'); // this number is different from the other renders - not sure why
          expect.soft(l).toHaveAttribute('height', '50');
          expect.soft(l).toHaveAttribute('offset', '5');
          expect.soft(l).not.toHaveAttribute('text-anchor', 'middle');
          expect.soft(l).toHaveAttribute('width', '20');
          expect.soft(l).not.toHaveAttribute('fill', '#808080');
        });
      });
    });
  });
});

describe.each(chartsThatSupportBar)('<Bar /> as a child of $testName', ({ ChartElement }) => {
  /**
   * legend does not render in the compact chart so that's why this excludes the compact cases
   */
  describe('legendType', () => {
    const allLegendTypesExceptNone: ReadonlyArray<LegendType> = [
      'circle',
      'cross',
      'diamond',
      'line',
      'plainline',
      'rect',
      'square',
      'star',
      'triangle',
      'wye',
    ];

    test.each(allLegendTypesExceptNone)('should render legendType %s', legendType => {
      const { container } = render(
        <ChartElement>
          <Bar data={data} dataKey="value" legendType={legendType} />
          <Legend />
        </ChartElement>,
      );
      const legendIcon = container.querySelectorAll('.recharts-legend-item-text');
      expect(legendIcon).toHaveLength(1);
    });

    it('should not render any legend if legendType = none', () => {
      const { container } = render(
        <ChartElement>
          <Bar data={data} dataKey="value" legendType="none" />
          <Legend />
        </ChartElement>,
      );
      const legendIcon = container.querySelectorAll('.recharts-legend-item-text');
      expect(legendIcon).toHaveLength(0);
    });
  });
});

describe.each(chartsThatDoNotSupportBar)('<Bar /> as a child of $testName', ({ ChartElement }) => {
  it('should not render anything', () => {
    const { container } = render(
      <ChartElement>
        <Bar isAnimationActive={false} layout="horizontal" data={data} dataKey="value" data-testid="customized-bar" />
      </ChartElement>,
    );

    expect(container.querySelectorAll('.recharts-bar-rectangle')).toHaveLength(0);
  });
});
