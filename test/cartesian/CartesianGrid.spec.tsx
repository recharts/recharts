import React from 'react';
import { describe, test, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import {
  CartesianGrid,
  LineChart,
  ComposedChart,
  Customized,
  BarChart,
  ScatterChart,
  AreaChart,
  Area,
  YAxis,
  XAxis,
  Brush,
  Legend,
  Line,
  Tooltip,
} from '../../src';
import {
  AxisPropsForCartesianGridTicksGeneration,
  GridLineTypeFunctionProps,
  HorizontalCoordinatesGenerator,
  VerticalCoordinatesGenerator,
} from '../../src/cartesian/CartesianGrid';
import { ChartOffset, Margin } from '../../src/util/types';
import { assertNotNull } from '../helper/assertNotNull';
import { pageData } from '../../storybook/stories/data';
import { selectAxisScale } from '../../src/state/selectors/axisSelectors';
import { useAppSelector } from '../../src/state/hooks';

const allChartsThatSupportCartesianGrid = [
  { ChartElement: AreaChart, testName: 'AreaElement' },
  { ChartElement: ComposedChart, testName: 'ComposedChart' },
  { ChartElement: BarChart, testName: 'BarChart' },
  { ChartElement: LineChart, testName: 'LineChart' },
  { ChartElement: ScatterChart, testName: 'ScatterChart' },
];

type ExpectedHorizontalLine = {
  y: string;
};

function expectHorizontalGridLines(container: Element, expectedLines: ReadonlyArray<ExpectedHorizontalLine>) {
  const horizontalLines = container.querySelectorAll('.recharts-cartesian-grid-horizontal line');
  assertNotNull(horizontalLines);
  const horizontalLinesContexts = Array.from(horizontalLines).map(line => ({
    y: line.getAttribute('y1'),
  }));
  expect(horizontalLinesContexts).toEqual(expectedLines);
  horizontalLines.forEach(line => {
    expect(line.getAttribute('y1')).toEqual(line.getAttribute('y2'));
    expect.soft(line).toHaveAttribute('x1', expect.any(String));
    expect.soft(line).toHaveAttribute('x2', expect.any(String));
  });
}

type ExpectedVerticalLine = {
  x: string;
};

function expectVerticalGridLines(container: Element, expectedLines: ReadonlyArray<ExpectedVerticalLine>) {
  const verticalLines = container.querySelectorAll('.recharts-cartesian-grid-vertical line');
  assertNotNull(verticalLines);
  const verticalLinesContexts = Array.from(verticalLines).map(line => ({
    x: line.getAttribute('x1'),
  }));
  expect(verticalLinesContexts).toEqual(expectedLines);
  verticalLines.forEach(line => {
    expect(line.getAttribute('x1')).toEqual(line.getAttribute('x2'));
    expect.soft(line).toHaveAttribute('y1', expect.any(String));
    expect.soft(line).toHaveAttribute('y2', expect.any(String));
  });
}

describe('CartesianGrid', () => {
  test('renders 2 grid lines in an empty chart', () => {
    const { container } = render(
      <AreaChart width={500} height={500}>
        <CartesianGrid />
      </AreaChart>,
    );
    expectHorizontalGridLines(container, [
      {
        y: '5',
      },
      {
        y: '495',
      },
    ]);
    expectVerticalGridLines(container, [
      {
        x: '5',
      },
      {
        x: '495',
      },
    ]);
  });

  it('renders more grid lines when the chart has data', () => {
    const { container } = render(
      <AreaChart width={500} height={500} data={pageData}>
        <Area dataKey="pv" />
        <CartesianGrid />
      </AreaChart>,
    );
    expectHorizontalGridLines(container, [
      {
        y: '495',
      },
      {
        y: '372.5',
      },
      {
        y: '250',
      },
      {
        y: '127.5',
      },
      {
        y: '5',
      },
    ]);
    expectVerticalGridLines(container, [
      {
        x: '5',
      },
      {
        x: '86.66666666666667',
      },
      {
        x: '168.33333333333334',
      },
      {
        x: '250',
      },
      {
        x: '331.6666666666667',
      },
      {
        x: '413.33333333333337',
      },
      {
        x: '495',
      },
    ]);
  });

  it('renders as many grid lines as the axis has ticks', () => {
    const { container } = render(
      <AreaChart width={500} height={500} data={pageData}>
        <Area dataKey="pv" />
        <YAxis tickCount={6} />
        <XAxis dataKey="uv" type="number" tickCount={3} />
        <CartesianGrid />
      </AreaChart>,
    );
    expectHorizontalGridLines(container, [
      {
        y: '465',
      },
      {
        y: '373',
      },
      {
        y: '281',
      },
      {
        y: '189',
      },
      {
        y: '96.99999999999999',
      },
      {
        y: '5',
      },
    ]);
    expectVerticalGridLines(container, [
      {
        x: '65',
      },
      {
        x: '280',
      },
      {
        x: '495',
      },
    ]);
  });

  it('should render fewer ticks when clipped by a Brush', () => {
    const { container } = render(
      <AreaChart width={500} height={500} data={pageData}>
        <Area dataKey="pv" />
        <CartesianGrid />
        <Brush startIndex={0} endIndex={2} />
      </AreaChart>,
    );
    expectHorizontalGridLines(container, [
      {
        y: '455',
      },
      {
        y: '342.5',
      },
      {
        y: '230',
      },
      {
        y: '117.5',
      },
      {
        y: '5',
      },
    ]);
    expectVerticalGridLines(container, [
      {
        x: '5',
      },
      {
        x: '250',
      },
      {
        x: '495',
      },
    ]);
  });

  it('should render all ticks from LineChart Biaxial storybook', () => {
    const scaleSpy = vi.fn();
    const Comp = (): null => {
      const scale = useAppSelector(state => selectAxisScale(state, 'yAxis', 'left', false));
      scaleSpy(scale?.domain());
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
        <CartesianGrid yAxisId="left" strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Legend />
        <Line yAxisId="left" type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
        <Tooltip />
        <Customized component={<Comp />} />
      </LineChart>,
    );

    expect(scaleSpy).toHaveBeenLastCalledWith([0, 1200]);
    expectHorizontalGridLines(container, [
      {
        y: '265',
      },
      {
        y: '200',
      },
      {
        y: '135',
      },
      {
        y: '70',
      },
      {
        y: '5',
      },
    ]);
    expectVerticalGridLines(container, [
      {
        x: '80',
      },
      {
        x: '135',
      },
      {
        x: '190',
      },
      {
        x: '245',
      },
      {
        x: '300',
      },
      {
        x: '355',
      },
      {
        x: '410',
      },
    ]);
  });
});

describe.each(allChartsThatSupportCartesianGrid)('<CartesianGrid /> when child of $testName', ({ ChartElement }) => {
  describe('when horizontalPoints and verticalPoints are set explicitly', () => {
    const horizontalPoints = [10, 20, 30, 100, 400];
    /**
     * JavaScript produces numbers like this when multiplying floats, for example:
     * 1.1 * 1.1 * 100
     * 1.1 * 2.1 * 100
     */
    const floatingPointPrecisionExamples = [121.0000000000002, 231.0000000000005];
    const verticalPoints = [100, 200, 300, 400];

    const chartMargin: Margin = {
      bottom: 11,
      left: 12,
      right: 13,
      top: 14,
    };

    const expectedOffset: ChartOffset = {
      bottom: 11,
      brushBottom: 11,
      height: 175,
      left: 12,
      right: 13,
      top: 14,
      width: 275,
    };

    const exampleCartesianGridDimensions = {
      x: 1,
      y: 2,
      width: 300,
      height: 200,
    };

    describe('layout and size when set explicitly in $testName', () => {
      it('should put x, y, width and height as coordinates to the background', () => {
        const { container } = render(
          <ChartElement width={500} height={500}>
            <CartesianGrid
              {...exampleCartesianGridDimensions}
              fill="green"
              ry={10}
              verticalPoints={verticalPoints}
              horizontalPoints={horizontalPoints}
            />
          </ChartElement>,
        );
        const background = container.querySelector('rect.recharts-cartesian-grid-bg');
        expect.soft(background).toHaveAttribute('x', '1');
        expect.soft(background).toHaveAttribute('y', '2');
        expect.soft(background).toHaveAttribute('width', '300');
        expect.soft(background).toHaveAttribute('height', '200');
        expect.soft(background).toHaveAttribute('ry', '10');
      });

      it('should put x, y, width and height as coordinates to all lines', () => {
        const { container } = render(
          <ChartElement width={500} height={500}>
            <CartesianGrid
              {...exampleCartesianGridDimensions}
              verticalPoints={verticalPoints}
              horizontalPoints={horizontalPoints}
            />
          </ChartElement>,
        );
        const horizontalLines = container.querySelectorAll('.recharts-cartesian-grid-horizontal line');
        expect(horizontalLines).toHaveLength(horizontalPoints.length);
        horizontalLines.forEach(line => {
          expect.soft(line).toHaveAttribute('x', '1');
          expect.soft(line).toHaveAttribute('y', '2');
          expect.soft(line).toHaveAttribute('x1', '1');
          expect.soft(line).toHaveAttribute('x2', '301');
          expect.soft(line).toHaveAttribute('y1', expect.any(String));
          expect.soft(line).toHaveAttribute('y2', expect.any(String));
          expect(line.getAttribute('y1')).toEqual(line.getAttribute('y2'));
        });
        expectHorizontalGridLines(container, [
          {
            y: '10',
          },
          {
            y: '20',
          },
          {
            y: '30',
          },
          {
            y: '100',
          },
          {
            y: '400',
          },
        ]);
        const verticalLines = container.querySelectorAll('.recharts-cartesian-grid-vertical line');
        expect(verticalLines).toHaveLength(verticalPoints.length);
        verticalLines.forEach(line => {
          expect.soft(line).toHaveAttribute('x', '1');
          expect.soft(line).toHaveAttribute('y', '2');
          expect.soft(line).toHaveAttribute('x1', expect.any(String));
          expect.soft(line).toHaveAttribute('x2', expect.any(String));
          expect(line.getAttribute('x1')).toEqual(line.getAttribute('x2'));
          expect.soft(line).toHaveAttribute('y1', '2');
          expect.soft(line).toHaveAttribute('y2', '202');
        });
        expectVerticalGridLines(container, [
          {
            x: '100',
          },
          {
            x: '200',
          },
          {
            x: '300',
          },
          {
            x: '400',
          },
        ]);
      });

      it('should put x, y, width and height as coordinates to all stripes', () => {
        const { container } = render(
          <ChartElement width={500} height={500}>
            <CartesianGrid
              {...exampleCartesianGridDimensions}
              verticalPoints={verticalPoints}
              horizontalPoints={horizontalPoints}
              horizontalFill={['red', 'black']}
              verticalFill={['green', 'blue']}
            />
          </ChartElement>,
        );
        const horizontalStripes = container.querySelectorAll('.recharts-cartesian-gridstripes-horizontal rect');
        expect(horizontalStripes).toHaveLength(5);
        horizontalStripes.forEach(stripe => {
          expect.soft(stripe).toHaveAttribute('x', '1');
          expect.soft(stripe).toHaveAttribute('y', expect.any(String));
          expect.soft(stripe).toHaveAttribute('width', '300');
          expect.soft(stripe).toHaveAttribute('height', expect.any(String));
        });
        const verticalStripes = container.querySelectorAll('.recharts-cartesian-gridstripes-vertical rect');
        expect(verticalStripes).toHaveLength(4);
        verticalStripes.forEach(stripe => {
          expect.soft(stripe).toHaveAttribute('x', expect.any(String));
          expect.soft(stripe).toHaveAttribute('y', '2');
          expect.soft(stripe).toHaveAttribute('width', expect.any(String));
          expect.soft(stripe).toHaveAttribute('height', '200');
        });
      });
    });

    describe('layout and size when inherited from parent chart', () => {
      it('should put x, y, width and height as coordinates to the background', () => {
        const { container } = render(
          <ChartElement margin={chartMargin} width={500} height={400}>
            <CartesianGrid fill="green" verticalPoints={verticalPoints} horizontalPoints={horizontalPoints} />
          </ChartElement>,
        );
        const background = container.querySelector('rect.recharts-cartesian-grid-bg');
        expect.soft(background).toHaveAttribute('x', '12');
        expect.soft(background).toHaveAttribute('y', '14');
        expect.soft(background).toHaveAttribute('width', '475');
        expect.soft(background).toHaveAttribute('height', '375');
      });

      it('should put x, y, width and height as coordinates to all lines', () => {
        const { container } = render(
          <ChartElement margin={chartMargin} width={500} height={400}>
            <CartesianGrid fill="green" verticalPoints={verticalPoints} horizontalPoints={horizontalPoints} />
          </ChartElement>,
        );
        const horizontalLines = container.querySelectorAll('.recharts-cartesian-grid-horizontal line');
        expect(horizontalLines).toHaveLength(5);
        horizontalLines.forEach(line => {
          expect.soft(line).toHaveAttribute('x', '12');
          expect.soft(line).toHaveAttribute('y', '14');
          expect.soft(line).toHaveAttribute('x1', '12');
          expect.soft(line).toHaveAttribute('x2', '487');
        });
        const verticalLines = container.querySelectorAll('.recharts-cartesian-grid-vertical line');
        expect(verticalLines).toHaveLength(4);
        verticalLines.forEach(line => {
          expect.soft(line).toHaveAttribute('x', '12');
          expect.soft(line).toHaveAttribute('y', '14');
          expect.soft(line).toHaveAttribute('y1', '14');
          expect.soft(line).toHaveAttribute('y2', '389');
        });
      });

      it('should put x, y, width and height as coordinates to all stripes', () => {
        const { container } = render(
          <ChartElement margin={chartMargin} width={500} height={400}>
            <CartesianGrid
              fill="green"
              verticalPoints={verticalPoints}
              horizontalPoints={horizontalPoints}
              horizontalFill={['red', 'black']}
              verticalFill={['green', 'blue']}
            />
          </ChartElement>,
        );
        const horizontalStripes = container.querySelectorAll('.recharts-cartesian-gridstripes-horizontal rect');
        expect(horizontalStripes).toHaveLength(5);
        horizontalStripes.forEach(stripe => {
          expect.soft(stripe).toHaveAttribute('x', '12');
          expect.soft(stripe).toHaveAttribute('width', '475');
        });
        const verticalStripes = container.querySelectorAll('.recharts-cartesian-gridstripes-vertical rect');
        expect(verticalStripes).toHaveLength(5);
        verticalStripes.forEach(stripe => {
          expect.soft(stripe).toHaveAttribute('y', '14');
          expect.soft(stripe).toHaveAttribute('height', '375');
        });
      });
    });

    describe('grid', () => {
      describe('basic features', () => {
        it('should render on its own, outside of Recharts', () => {
          const { container } = render(
            <ChartElement width={500} height={500}>
              <CartesianGrid
                {...exampleCartesianGridDimensions}
                verticalPoints={verticalPoints}
                horizontalPoints={horizontalPoints}
              />
            </ChartElement>,
          );
          const allLines = container.querySelectorAll('line');
          expect.soft(allLines).toHaveLength(9);
          for (let i = 0; i < allLines.length; i++) {
            const line = allLines[i];
            expect.soft(line).toHaveAttribute('stroke', '#ccc');
            expect.soft(line).toHaveAttribute('fill', 'none');
          }
          expect
            .soft(container.querySelectorAll('.recharts-cartesian-grid-horizontal line'))
            .toHaveLength(horizontalPoints.length);
          expect
            .soft(container.querySelectorAll('.recharts-cartesian-grid-vertical line'))
            .toHaveLength(verticalPoints.length);
        });

        test('Render 5 horizontal lines and 4 vertical lines in simple CartesianGrid', () => {
          const { container } = render(
            <ChartElement width={500} height={500}>
              <CartesianGrid
                {...exampleCartesianGridDimensions}
                verticalPoints={verticalPoints}
                horizontalPoints={horizontalPoints}
              />
            </ChartElement>,
          );
          expect.soft(container.querySelectorAll('line')).toHaveLength(9);
          expect
            .soft(container.querySelectorAll('.recharts-cartesian-grid-horizontal line'))
            .toHaveLength(horizontalPoints.length);
          expect
            .soft(container.querySelectorAll('.recharts-cartesian-grid-vertical line'))
            .toHaveLength(verticalPoints.length);
        });

        test.each([0, -1, NaN, -Infinity])("Don't render any lines when width is %s", w => {
          const { container } = render(
            <ChartElement width={w} height={500}>
              <CartesianGrid
                width={w}
                height={500}
                verticalPoints={verticalPoints}
                horizontalPoints={horizontalPoints}
              />
            </ChartElement>,
          );
          expect(container.querySelectorAll('line')).toHaveLength(0);
        });

        test.each([0, -1, NaN, -Infinity])("Don't render any lines when height is %s", h => {
          const { container } = render(
            <ChartElement width={500} height={h}>
              <CartesianGrid
                width={500}
                height={h}
                verticalPoints={verticalPoints}
                horizontalPoints={horizontalPoints}
              />
            </ChartElement>,
          );
          expect(container.querySelectorAll('line')).toHaveLength(0);
        });
      });

      describe('horizontalPoints without generator', () => {
        it('should not render any lines if horizontal=false', () => {
          const { container } = render(
            <ChartElement width={500} height={500}>
              <CartesianGrid
                {...exampleCartesianGridDimensions}
                horizontal={false}
                verticalPoints={verticalPoints}
                horizontalPoints={horizontalPoints}
              />
            </ChartElement>,
          );
          expect.soft(container.querySelectorAll('line')).toHaveLength(verticalPoints.length);
          expect.soft(container.querySelectorAll('.recharts-cartesian-grid-horizontal line')).toHaveLength(0);
          expect
            .soft(container.querySelectorAll('.recharts-cartesian-grid-vertical line'))
            .toHaveLength(verticalPoints.length);
        });

        it('should render all lines if horizontal=true', () => {
          const { container } = render(
            <ChartElement width={500} height={500}>
              <CartesianGrid
                {...exampleCartesianGridDimensions}
                horizontal
                verticalPoints={verticalPoints}
                horizontalPoints={horizontalPoints}
              />
            </ChartElement>,
          );
          expect.soft(container.querySelectorAll('line')).toHaveLength(9);
          expect
            .soft(container.querySelectorAll('.recharts-cartesian-grid-horizontal line'))
            .toHaveLength(horizontalPoints.length);
          expect
            .soft(container.querySelectorAll('.recharts-cartesian-grid-vertical line'))
            .toHaveLength(verticalPoints.length);
        });

        it('should render all lines if horizontal is undefined', () => {
          const { container } = render(
            <ChartElement width={500} height={500}>
              <CartesianGrid
                {...exampleCartesianGridDimensions}
                verticalPoints={verticalPoints}
                horizontalPoints={horizontalPoints}
              />
            </ChartElement>,
          );
          expect.soft(container.querySelectorAll('line')).toHaveLength(9);
          expect
            .soft(container.querySelectorAll('.recharts-cartesian-grid-horizontal line'))
            .toHaveLength(horizontalPoints.length);
          expect
            .soft(container.querySelectorAll('.recharts-cartesian-grid-vertical line'))
            .toHaveLength(verticalPoints.length);
        });
      });

      describe('verticalPoints without generator', () => {
        it('should not render any lines if vertical=false', () => {
          const { container } = render(
            <ChartElement width={500} height={500}>
              <CartesianGrid
                {...exampleCartesianGridDimensions}
                vertical={false}
                verticalPoints={verticalPoints}
                horizontalPoints={horizontalPoints}
              />
            </ChartElement>,
          );
          expect.soft(container.querySelectorAll('line')).toHaveLength(horizontalPoints.length);
          expect
            .soft(container.querySelectorAll('.recharts-cartesian-grid-horizontal line'))
            .toHaveLength(horizontalPoints.length);
          expect.soft(container.querySelectorAll('.recharts-cartesian-grid-vertical line')).toHaveLength(0);
        });

        it('should render all lines if vertical=true', () => {
          const { container } = render(
            <ChartElement width={500} height={500}>
              <CartesianGrid
                {...exampleCartesianGridDimensions}
                vertical
                verticalPoints={verticalPoints}
                horizontalPoints={horizontalPoints}
              />
            </ChartElement>,
          );
          expect.soft(container.querySelectorAll('line')).toHaveLength(9);
          expect
            .soft(container.querySelectorAll('.recharts-cartesian-grid-horizontal line'))
            .toHaveLength(horizontalPoints.length);
          expect
            .soft(container.querySelectorAll('.recharts-cartesian-grid-vertical line'))
            .toHaveLength(verticalPoints.length);
        });

        it('should render all lines if vertical is undefined', () => {
          const { container } = render(
            <ChartElement width={500} height={500}>
              <CartesianGrid
                {...exampleCartesianGridDimensions}
                verticalPoints={verticalPoints}
                horizontalPoints={horizontalPoints}
              />
            </ChartElement>,
          );
          expect.soft(container.querySelectorAll('line')).toHaveLength(9);
          expect
            .soft(container.querySelectorAll('.recharts-cartesian-grid-horizontal line'))
            .toHaveLength(horizontalPoints.length);
          expect
            .soft(container.querySelectorAll('.recharts-cartesian-grid-vertical line'))
            .toHaveLength(verticalPoints.length);
        });
      });

      describe('horizontalCoordinatesGenerator', () => {
        it('should render lines that the generator returns', () => {
          const horizontalCoordinatesGenerator: HorizontalCoordinatesGenerator = vi.fn().mockReturnValue([3, 4]);
          const { container } = render(
            <ChartElement width={500} height={500}>
              <CartesianGrid
                {...exampleCartesianGridDimensions}
                horizontalCoordinatesGenerator={horizontalCoordinatesGenerator}
              />
            </ChartElement>,
          );

          expect(horizontalCoordinatesGenerator).toHaveBeenCalledTimes(1);

          const allLines = container.querySelectorAll('.recharts-cartesian-grid-horizontal line');
          expect(allLines).toHaveLength(2);
          expect.soft(allLines[0]).toHaveAttribute('x', '1');
          expect.soft(allLines[0]).toHaveAttribute('x1', '1');
          expect.soft(allLines[0]).toHaveAttribute('x2', '301');
          expect.soft(allLines[0]).toHaveAttribute('y', '2');
          expect.soft(allLines[0]).toHaveAttribute('y1', '3');
          expect.soft(allLines[0]).toHaveAttribute('y2', '3');
          expect.soft(allLines[1]).toHaveAttribute('x', '1');
          expect.soft(allLines[1]).toHaveAttribute('x1', '1');
          expect.soft(allLines[1]).toHaveAttribute('x2', '301');
          expect.soft(allLines[1]).toHaveAttribute('y', '2');
          expect.soft(allLines[1]).toHaveAttribute('y1', '4');
          expect.soft(allLines[1]).toHaveAttribute('y2', '4');
        });

        it('if both horizontalCoordinatesGenerator and horizontalPoints are present then horizontalPoints win', () => {
          const horizontalCoordinatesGenerator: HorizontalCoordinatesGenerator = vi.fn().mockReturnValue([1, 2]);
          expect(horizontalPoints.length).not.toBe(2);
          const { container } = render(
            <ChartElement width={500} height={500}>
              <CartesianGrid
                {...exampleCartesianGridDimensions}
                horizontalCoordinatesGenerator={horizontalCoordinatesGenerator}
                horizontalPoints={horizontalPoints}
              />
            </ChartElement>,
          );

          expect(horizontalCoordinatesGenerator).not.toHaveBeenCalled();

          const allLines = container.querySelectorAll('.recharts-cartesian-grid-horizontal line');
          expect(allLines).toHaveLength(horizontalPoints.length);
        });

        it('should pass props to the generator', () => {
          const horizontalCoordinatesGenerator: HorizontalCoordinatesGenerator = vi.fn().mockReturnValue([]);
          render(
            <ChartElement width={300} height={200} margin={chartMargin}>
              <CartesianGrid
                {...exampleCartesianGridDimensions}
                horizontalCoordinatesGenerator={horizontalCoordinatesGenerator}
              />
            </ChartElement>,
          );

          expect(horizontalCoordinatesGenerator).toHaveBeenCalledTimes(1);
          const expectedYAxis: AxisPropsForCartesianGridTicksGeneration = {
            angle: 0,
            interval: 'preserveEnd',
            minTickGap: 5,
            orientation: 'left',
            tick: true,
            tickFormatter: undefined,
            unit: undefined,
            axisType: 'yAxis',
            categoricalDomain: undefined,
            duplicateDomain: undefined,
            isCategorical: false,
            niceTicks: undefined,
            range: [189, 14],
            realScaleType: 'linear',
            scale: undefined,
            tickCount: 5,
            ticks: undefined,
            type: 'number',
          };
          expect(horizontalCoordinatesGenerator).toHaveBeenCalledWith(
            {
              yAxis: expectedYAxis,
              width: 300,
              height: 200,
              offset: expectedOffset,
            },
            undefined,
          );
        });

        it(`should set syncWithTicks=true, and ticks=horizontalValues,
      when horizontalValues is provided, even if the explicit syncWithTicks is false`, () => {
          const horizontalCoordinatesGenerator: HorizontalCoordinatesGenerator = vi.fn().mockReturnValue([]);
          render(
            <ChartElement width={300} height={200} margin={chartMargin}>
              <CartesianGrid
                {...exampleCartesianGridDimensions}
                horizontalCoordinatesGenerator={horizontalCoordinatesGenerator}
                syncWithTicks={false}
                horizontalValues={['a', 'b']}
              />
            </ChartElement>,
          );

          expect(horizontalCoordinatesGenerator).toHaveBeenCalledTimes(1);
          const expectedYAxis: AxisPropsForCartesianGridTicksGeneration = {
            angle: 0,
            interval: 'preserveEnd',
            minTickGap: 5,
            orientation: 'left',
            tick: true,
            tickFormatter: undefined,
            unit: undefined,
            axisType: 'yAxis',
            categoricalDomain: undefined,
            duplicateDomain: undefined,
            isCategorical: false,
            niceTicks: undefined,
            range: [189, 14],
            realScaleType: 'linear',
            scale: undefined,
            tickCount: 5,
            ticks: ['a', 'b'],
            type: 'number',
          };
          expect(horizontalCoordinatesGenerator).toHaveBeenCalledWith(
            {
              yAxis: expectedYAxis,
              width: 300,
              height: 200,
              offset: expectedOffset,
            },
            true,
          );
        });

        test.each([true, false, undefined])(
          'should set syncWithTicks as %s when horizontalValues is provided but is empty',
          syncWithTicks => {
            const horizontalCoordinatesGenerator: HorizontalCoordinatesGenerator = vi.fn().mockReturnValue([]);
            render(
              <ChartElement width={300} height={200} margin={chartMargin}>
                <CartesianGrid
                  {...exampleCartesianGridDimensions}
                  horizontalCoordinatesGenerator={horizontalCoordinatesGenerator}
                  syncWithTicks={syncWithTicks}
                  horizontalValues={[]}
                />
              </ChartElement>,
            );

            expect(horizontalCoordinatesGenerator).toHaveBeenCalledTimes(1);
            const expectedYAxis: AxisPropsForCartesianGridTicksGeneration = {
              angle: 0,
              interval: 'preserveEnd',
              minTickGap: 5,
              orientation: 'left',
              tick: true,
              tickFormatter: undefined,
              unit: undefined,
              axisType: 'yAxis',
              categoricalDomain: undefined,
              duplicateDomain: undefined,
              isCategorical: false,
              niceTicks: undefined,
              range: [189, 14],
              realScaleType: 'linear',
              scale: undefined,
              tickCount: 5,
              ticks: undefined,
              type: 'number',
            };
            expect(horizontalCoordinatesGenerator).toHaveBeenCalledWith(
              {
                yAxis: expectedYAxis,
                width: 300,
                height: 200,
                offset: expectedOffset,
              },
              syncWithTicks,
            );
          },
        );

        test.each([true, false, undefined])(
          'should pass props to the generator when syncWithTicks is %s',
          syncWithTicks => {
            const horizontalCoordinatesGenerator: HorizontalCoordinatesGenerator = vi.fn().mockReturnValue([]);
            render(
              <ChartElement width={300} height={200} margin={chartMargin}>
                <CartesianGrid
                  {...exampleCartesianGridDimensions}
                  horizontalCoordinatesGenerator={horizontalCoordinatesGenerator}
                  syncWithTicks={syncWithTicks}
                />
              </ChartElement>,
            );

            expect(horizontalCoordinatesGenerator).toHaveBeenCalledTimes(1);
            const expectedYAxis: AxisPropsForCartesianGridTicksGeneration = {
              angle: 0,
              interval: 'preserveEnd',
              minTickGap: 5,
              orientation: 'left',
              tick: true,
              tickFormatter: undefined,
              unit: undefined,
              axisType: 'yAxis',
              categoricalDomain: undefined,
              duplicateDomain: undefined,
              isCategorical: false,
              niceTicks: undefined,
              range: [189, 14],
              realScaleType: 'linear',
              scale: undefined,
              tickCount: 5,
              ticks: undefined,
              type: 'number',
            };
            expect(horizontalCoordinatesGenerator).toHaveBeenCalledWith(
              {
                yAxis: expectedYAxis,
                width: 300,
                height: 200,
                offset: expectedOffset,
              },
              syncWithTicks,
            );
          },
        );

        test.each([{ gen: [] }, { gen: null }, { gen: undefined }, { gen: 'some random string' }, { gen: NaN }])(
          'should render nothing if the generator returns $gen',
          ({ gen }) => {
            const horizontalCoordinatesGenerator: HorizontalCoordinatesGenerator = vi.fn().mockReturnValue(gen);
            const { container } = render(
              <ChartElement width={500} height={500}>
                <CartesianGrid
                  {...exampleCartesianGridDimensions}
                  horizontalCoordinatesGenerator={horizontalCoordinatesGenerator}
                />
              </ChartElement>,
            );

            expect(horizontalCoordinatesGenerator).toHaveBeenCalledTimes(1);

            const allLines = container.querySelectorAll('.recharts-cartesian-grid-horizontal line');
            expect(allLines).toHaveLength(0);
          },
        );

        it('should generate its own ticks if neither horizontalPoints nor horizontalCoordinatesGenerator are provided', () => {
          const { container } = render(
            <ChartElement width={500} height={500}>
              <CartesianGrid x={0} y={0} width={500} height={500} />
            </ChartElement>,
          );

          const allLines = container.querySelectorAll('.recharts-cartesian-grid-horizontal line');
          expect(allLines).toHaveLength(2);
          expect.soft(allLines[0]).toHaveAttribute('x', '0');
          expect.soft(allLines[0]).toHaveAttribute('x1', '0');
          expect.soft(allLines[0]).toHaveAttribute('x2', '500');
          expect.soft(allLines[0]).toHaveAttribute('y', '0');
          expect.soft(allLines[0]).toHaveAttribute('y1', '5');
          expect.soft(allLines[0]).toHaveAttribute('y2', '5');
          expect.soft(allLines[1]).toHaveAttribute('x', '0');
          expect.soft(allLines[1]).toHaveAttribute('x1', '0');
          expect.soft(allLines[1]).toHaveAttribute('x2', '500');
          expect.soft(allLines[1]).toHaveAttribute('y', '0');
          expect.soft(allLines[1]).toHaveAttribute('y1', '495');
          expect.soft(allLines[1]).toHaveAttribute('y2', '495');
        });
      });

      describe('verticalCoordinatesGenerator', () => {
        it('should render lines that the generator returns', () => {
          const verticalCoordinatesGenerator: VerticalCoordinatesGenerator = vi.fn().mockReturnValue([3, 4]);
          const { container } = render(
            <ChartElement width={500} height={500}>
              <CartesianGrid
                {...exampleCartesianGridDimensions}
                verticalCoordinatesGenerator={verticalCoordinatesGenerator}
              />
            </ChartElement>,
          );

          expect(verticalCoordinatesGenerator).toHaveBeenCalledTimes(1);

          const allLines = container.querySelectorAll('.recharts-cartesian-grid-vertical line');
          expect(allLines).toHaveLength(2);
          expect.soft(allLines[0]).toHaveAttribute('x', '1');
          expect.soft(allLines[0]).toHaveAttribute('x1', '3');
          expect.soft(allLines[0]).toHaveAttribute('x2', '3');
          expect.soft(allLines[0]).toHaveAttribute('y', '2');
          expect.soft(allLines[0]).toHaveAttribute('y1', '2');
          expect.soft(allLines[0]).toHaveAttribute('y2', '202');
          expect.soft(allLines[1]).toHaveAttribute('x', '1');
          expect.soft(allLines[1]).toHaveAttribute('x1', '4');
          expect.soft(allLines[1]).toHaveAttribute('x2', '4');
          expect.soft(allLines[1]).toHaveAttribute('y', '2');
          expect.soft(allLines[1]).toHaveAttribute('y1', '2');
          expect.soft(allLines[1]).toHaveAttribute('y2', '202');
        });

        it('if both verticalCoordinatesGenerator and verticalPoints are present then verticalPoints wins', () => {
          const verticalCoordinatesGenerator: VerticalCoordinatesGenerator = vi.fn().mockReturnValue([1, 2]);
          expect(verticalPoints.length).not.toBe(2);
          const { container } = render(
            <ChartElement width={500} height={500}>
              <CartesianGrid
                {...exampleCartesianGridDimensions}
                verticalCoordinatesGenerator={verticalCoordinatesGenerator}
                verticalPoints={verticalPoints}
              />
            </ChartElement>,
          );

          expect(verticalCoordinatesGenerator).not.toHaveBeenCalled();

          const allLines = container.querySelectorAll('.recharts-cartesian-grid-vertical line');
          expect(allLines).toHaveLength(verticalPoints.length);
        });

        it('should pass props to the generator', () => {
          const verticalCoordinatesGenerator: VerticalCoordinatesGenerator = vi.fn().mockReturnValue([]);
          render(
            <ChartElement width={300} height={200} margin={chartMargin}>
              <CartesianGrid
                {...exampleCartesianGridDimensions}
                verticalCoordinatesGenerator={verticalCoordinatesGenerator}
              />
            </ChartElement>,
          );

          expect(verticalCoordinatesGenerator).toHaveBeenCalledTimes(1);
          const expectedXAxis: AxisPropsForCartesianGridTicksGeneration = {
            angle: 0,
            axisType: 'xAxis',
            categoricalDomain: undefined,
            duplicateDomain: undefined,
            interval: 'preserveEnd',
            isCategorical: true,
            minTickGap: 5,
            niceTicks: undefined,
            orientation: 'bottom',
            range: [12, 287],
            realScaleType: expect.any(String),
            scale: undefined,
            tick: true,
            tickCount: 5, // different charts have different defaults for realScaleType
            tickFormatter: undefined,
            ticks: undefined,
            type: 'category',
            unit: undefined,
          };
          expect(verticalCoordinatesGenerator).toHaveBeenCalledWith(
            {
              xAxis: expectedXAxis,
              width: 300,
              height: 200,
              offset: expectedOffset,
            },
            undefined,
          );
        });

        it(`should set syncWithTicks=true, and ticks=verticalValues,
      when verticalValues is provided, even if the explicit syncWithTicks is false`, () => {
          const verticalCoordinatesGenerator: VerticalCoordinatesGenerator = vi.fn().mockReturnValue([]);
          render(
            <ChartElement width={300} height={200} margin={chartMargin}>
              <CartesianGrid
                {...exampleCartesianGridDimensions}
                verticalCoordinatesGenerator={verticalCoordinatesGenerator}
                syncWithTicks={false}
                verticalValues={['a', 'b']}
              />
            </ChartElement>,
          );

          expect(verticalCoordinatesGenerator).toHaveBeenCalledTimes(1);
          const expectedXAxis: AxisPropsForCartesianGridTicksGeneration = {
            angle: 0,
            axisType: 'xAxis',
            categoricalDomain: undefined,
            duplicateDomain: undefined,
            interval: 'preserveEnd',
            isCategorical: true,
            minTickGap: 5,
            niceTicks: undefined,
            orientation: 'bottom',
            range: [12, 287],
            realScaleType: expect.any(String),
            scale: undefined,
            tick: true,
            tickCount: 5, // different charts have different defaults for realScaleType
            tickFormatter: undefined,
            ticks: ['a', 'b'],
            type: 'category',
            unit: undefined,
          };
          expect(verticalCoordinatesGenerator).toHaveBeenCalledWith(
            {
              xAxis: expectedXAxis,
              width: 300,
              height: 200,
              offset: expectedOffset,
            },
            true,
          );
        });

        test.each([true, false, undefined])(
          'should set syncWithTicks as %s when horizontalValues is provided but is empty',
          syncWithTicks => {
            const verticalCoordinatesGenerator: VerticalCoordinatesGenerator = vi.fn().mockReturnValue([]);
            render(
              <ChartElement width={300} height={200} margin={chartMargin}>
                <CartesianGrid
                  {...exampleCartesianGridDimensions}
                  verticalCoordinatesGenerator={verticalCoordinatesGenerator}
                  syncWithTicks={syncWithTicks}
                  horizontalValues={[]}
                />
              </ChartElement>,
            );

            expect(verticalCoordinatesGenerator).toHaveBeenCalledTimes(1);
            const expectedXAxis: AxisPropsForCartesianGridTicksGeneration = {
              angle: 0,
              axisType: 'xAxis',
              categoricalDomain: undefined,
              duplicateDomain: undefined,
              interval: 'preserveEnd',
              isCategorical: true,
              minTickGap: 5,
              niceTicks: undefined,
              orientation: 'bottom',
              range: [12, 287],
              realScaleType: expect.any(String),
              scale: undefined,
              tick: true,
              tickCount: 5, // different charts have different defaults for realScaleType
              tickFormatter: undefined,
              ticks: undefined,
              type: 'category',
              unit: undefined,
            };
            expect(verticalCoordinatesGenerator).toHaveBeenCalledWith(
              {
                xAxis: expectedXAxis,
                width: 300,
                height: 200,
                offset: expectedOffset,
              },
              syncWithTicks,
            );
          },
        );

        test.each([true, false, undefined])(
          'should pass props to the generator when syncWithTicks is %s',
          syncWithTicks => {
            const verticalCoordinatesGenerator: VerticalCoordinatesGenerator = vi.fn().mockReturnValue([]);
            render(
              <ChartElement width={300} height={200} margin={chartMargin}>
                <CartesianGrid
                  {...exampleCartesianGridDimensions}
                  verticalCoordinatesGenerator={verticalCoordinatesGenerator}
                  syncWithTicks={syncWithTicks}
                />
              </ChartElement>,
            );

            expect(verticalCoordinatesGenerator).toHaveBeenCalledTimes(1);
            const expectedXAxis: AxisPropsForCartesianGridTicksGeneration = {
              angle: 0,
              axisType: 'xAxis',
              categoricalDomain: undefined,
              duplicateDomain: undefined,
              interval: 'preserveEnd',
              isCategorical: true,
              minTickGap: 5,
              niceTicks: undefined,
              orientation: 'bottom',
              range: [12, 287],
              realScaleType: expect.any(String),
              scale: undefined,
              tick: true,
              tickCount: 5, // different charts have different defaults for realScaleType
              tickFormatter: undefined,
              ticks: undefined,
              type: 'category',
              unit: undefined,
            };
            expect(verticalCoordinatesGenerator).toHaveBeenCalledWith(
              {
                xAxis: expectedXAxis,
                width: 300,
                height: 200,
                offset: expectedOffset,
              },
              syncWithTicks,
            );
          },
        );

        test.each([{ gen: [] }, { gen: null }, { gen: undefined }, { gen: 'some random string' }, { gen: NaN }])(
          'should render nothing if the generator returns $gen',
          ({ gen }) => {
            const verticalCoordinatesGenerator: VerticalCoordinatesGenerator = vi.fn().mockReturnValue(gen);
            const { container } = render(
              <ChartElement width={500} height={500}>
                <CartesianGrid
                  {...exampleCartesianGridDimensions}
                  verticalCoordinatesGenerator={verticalCoordinatesGenerator}
                />
              </ChartElement>,
            );

            expect(verticalCoordinatesGenerator).toHaveBeenCalledTimes(1);

            const allLines = container.querySelectorAll('.recharts-cartesian-grid-vertical line');
            expect(allLines).toHaveLength(0);
          },
        );

        it('should generate its own ticks if neither verticalPoints nor verticalCoordinatesGenerator are provided', () => {
          const { container } = render(
            <LineChart width={500} height={500}>
              <CartesianGrid {...exampleCartesianGridDimensions} />
            </LineChart>,
          );

          const allLines = container.querySelectorAll('.recharts-cartesian-grid-vertical line');
          expect(allLines).toHaveLength(2);
          expect.soft(allLines[0]).toHaveAttribute('x', '1');
          expect.soft(allLines[0]).toHaveAttribute('x1', '5');
          expect.soft(allLines[0]).toHaveAttribute('x2', '5');
          expect.soft(allLines[0]).toHaveAttribute('y', '2');
          expect.soft(allLines[0]).toHaveAttribute('y1', '2');
          expect.soft(allLines[0]).toHaveAttribute('y2', '202');
          expect.soft(allLines[1]).toHaveAttribute('x', '1');
          expect.soft(allLines[1]).toHaveAttribute('x1', '495');
          expect.soft(allLines[1]).toHaveAttribute('x2', '495');
          expect.soft(allLines[1]).toHaveAttribute('y', '2');
          expect.soft(allLines[1]).toHaveAttribute('y1', '2');
          expect.soft(allLines[1]).toHaveAttribute('y2', '202');
        });
      });

      describe('horizontal as a function', () => {
        it('should pass props, add default stroke, and then render result of the function', () => {
          const horizontal = vi.fn().mockReturnValue(<g data-testid="my_mock_line" />);
          const { container } = render(
            <ChartElement width={500} height={500}>
              <CartesianGrid
                {...exampleCartesianGridDimensions}
                verticalPoints={verticalPoints}
                horizontalPoints={horizontalPoints}
                horizontal={horizontal}
              />
            </ChartElement>,
          );
          expect(horizontal).toHaveBeenCalledTimes(horizontalPoints.length);

          const expectedProps: GridLineTypeFunctionProps = {
            stroke: '#ccc',
            fill: 'none',
            height: 200,
            width: 300,
            vertical: true,
            horizontalFill: [],
            horizontalPoints,
            verticalFill: [],
            verticalPoints,
            horizontal,
            key: expect.stringMatching(/line-[0-9]/),
            x: 1,
            y: 2,
            x1: 1,
            x2: 301,
            y1: expect.any(Number),
            y2: expect.any(Number),
            index: expect.any(Number),
            offset: {
              bottom: 5,
              brushBottom: 5,
              height: 490,
              left: 5,
              right: 5,
              top: 5,
              width: 490,
            },
            xAxis: {
              angle: 0,
              axisType: 'xAxis',
              categoricalDomain: undefined,
              duplicateDomain: undefined,
              interval: 'preserveEnd',
              isCategorical: true,
              minTickGap: 5,
              niceTicks: undefined,
              orientation: 'bottom',
              range: [5, 495],
              realScaleType: expect.any(String),
              scale: undefined,
              tick: true,
              tickCount: 5, // different charts have different defaults for realScaleType
              tickFormatter: undefined,
              ticks: undefined,
              type: 'category',
              unit: undefined,
            },
            yAxis: {
              angle: 0,
              axisType: 'yAxis',
              categoricalDomain: undefined,
              duplicateDomain: undefined,
              interval: 'preserveEnd',
              isCategorical: false,
              minTickGap: 5,
              niceTicks: undefined,
              orientation: 'left',
              range: [495, 5],
              realScaleType: 'linear',
              scale: undefined,
              tick: true,
              tickCount: 5,
              tickFormatter: undefined,
              ticks: undefined,
              type: 'number',
              unit: undefined,
            },
          };
          expect(horizontal).toHaveBeenCalledWith(expectedProps);

          expect(container.querySelectorAll('[data-testid=my_mock_line]')).toHaveLength(horizontalPoints.length);
        });
      });

      describe('horizontal as an element', () => {
        it('should pass props, add default stroke, and then render result of the function', () => {
          const spy = vi.fn();
          const Horizontal = (props: unknown) => {
            spy(props);
            return <g data-testid="my_mock_line" />;
          };
          const { container } = render(
            <ChartElement width={500} height={500}>
              <CartesianGrid
                {...exampleCartesianGridDimensions}
                verticalPoints={verticalPoints}
                horizontalPoints={horizontalPoints}
                horizontal={<Horizontal />}
              />
            </ChartElement>,
          );
          expect(spy).toHaveBeenCalledTimes(horizontalPoints.length);

          const expectedProps: GridLineTypeFunctionProps = {
            stroke: '#ccc',
            fill: 'none',
            height: 200,
            width: 300,
            vertical: true,
            horizontalFill: [],
            horizontalPoints,
            verticalFill: [],
            verticalPoints,
            horizontal: <Horizontal />,
            key: undefined,
            x: 1,
            y: 2,
            x1: 1,
            x2: 301,
            y1: expect.any(Number),
            y2: expect.any(Number),
            index: expect.any(Number),
            offset: {
              bottom: 5,
              brushBottom: 5,
              height: 490,
              left: 5,
              right: 5,
              top: 5,
              width: 490,
            },
            xAxis: {
              angle: 0,
              axisType: 'xAxis',
              categoricalDomain: undefined,
              duplicateDomain: undefined,
              interval: 'preserveEnd',
              isCategorical: true,
              minTickGap: 5,
              niceTicks: undefined,
              orientation: 'bottom',
              range: [5, 495],
              realScaleType: expect.any(String),
              scale: undefined,
              tick: true,
              tickCount: 5, // different charts have different defaults for realScaleType
              tickFormatter: undefined,
              ticks: undefined,
              type: 'category',
              unit: undefined,
            },
            yAxis: {
              angle: 0,
              axisType: 'yAxis',
              categoricalDomain: undefined,
              duplicateDomain: undefined,
              interval: 'preserveEnd',
              isCategorical: false,
              minTickGap: 5,
              niceTicks: undefined,
              orientation: 'left',
              range: [495, 5],
              realScaleType: 'linear',
              scale: undefined,
              tick: true,
              tickCount: 5,
              tickFormatter: undefined,
              ticks: undefined,
              type: 'number',
              unit: undefined,
            },
          };
          expect(spy).toHaveBeenCalledWith(expectedProps);

          expect(container.querySelectorAll('[data-testid=my_mock_line]')).toHaveLength(horizontalPoints.length);
        });
      });

      describe('vertical as a function', () => {
        it('should pass props, add default stroke, and then render result of the function', () => {
          const vertical = vi.fn().mockReturnValue(<g data-testid="my_mock_line" />);
          const { container } = render(
            <ChartElement width={500} height={500}>
              <CartesianGrid
                {...exampleCartesianGridDimensions}
                verticalPoints={verticalPoints}
                horizontalPoints={horizontalPoints}
                vertical={vertical}
              />
            </ChartElement>,
          );
          expect(vertical).toHaveBeenCalledTimes(verticalPoints.length);

          const expectedProps: GridLineTypeFunctionProps = {
            stroke: '#ccc',
            fill: 'none',
            height: 200,
            width: 300,
            horizontal: true,
            horizontalFill: [],
            horizontalPoints,
            verticalFill: [],
            verticalPoints,
            vertical,
            key: expect.stringMatching(/line-[0-9]/),
            x: 1,
            y: 2,
            x1: expect.any(Number),
            x2: expect.any(Number),
            y1: 2,
            y2: 202,
            index: expect.any(Number),
            offset: {
              bottom: 5,
              brushBottom: 5,
              height: 490,
              left: 5,
              right: 5,
              top: 5,
              width: 490,
            },
            xAxis: {
              angle: 0,
              axisType: 'xAxis',
              categoricalDomain: undefined,
              duplicateDomain: undefined,
              interval: 'preserveEnd',
              isCategorical: true,
              minTickGap: 5,
              niceTicks: undefined,
              orientation: 'bottom',
              range: [5, 495],
              realScaleType: expect.any(String),
              scale: undefined,
              tick: true,
              tickCount: 5, // different charts have different defaults for realScaleType
              tickFormatter: undefined,
              ticks: undefined,
              type: 'category',
              unit: undefined,
            },
            yAxis: {
              angle: 0,
              axisType: 'yAxis',
              categoricalDomain: undefined,
              duplicateDomain: undefined,
              interval: 'preserveEnd',
              isCategorical: false,
              minTickGap: 5,
              niceTicks: undefined,
              orientation: 'left',
              range: [495, 5],
              realScaleType: 'linear',
              scale: undefined,
              tick: true,
              tickCount: 5,
              tickFormatter: undefined,
              ticks: undefined,
              type: 'number',
              unit: undefined,
            },
          };
          expect(vertical).toHaveBeenCalledWith(expectedProps);

          expect(container.querySelectorAll('[data-testid=my_mock_line]')).toHaveLength(verticalPoints.length);
        });
      });

      describe('vertical as an element', () => {
        it('should pass props, add default stroke, and then render result of the function', () => {
          const spy = vi.fn();
          const Vertical = (props: unknown) => {
            spy(props);
            return <g data-testid="my_mock_line" />;
          };
          const { container } = render(
            <ChartElement width={500} height={500}>
              <CartesianGrid
                {...exampleCartesianGridDimensions}
                verticalPoints={verticalPoints}
                horizontalPoints={horizontalPoints}
                vertical={<Vertical />}
              />
            </ChartElement>,
          );
          expect(spy).toHaveBeenCalledTimes(verticalPoints.length);

          const expectedProps: GridLineTypeFunctionProps = {
            stroke: '#ccc',
            fill: 'none',
            height: 200,
            width: 300,
            horizontal: true,
            horizontalFill: [],
            horizontalPoints,
            verticalFill: [],
            verticalPoints,
            vertical: <Vertical />,
            offset: {
              bottom: 5,
              brushBottom: 5,
              height: 490,
              left: 5,
              right: 5,
              top: 5,
              width: 490,
            },
            xAxis: {
              angle: 0,
              axisType: 'xAxis',
              categoricalDomain: undefined,
              duplicateDomain: undefined,
              interval: 'preserveEnd',
              isCategorical: true,
              minTickGap: 5,
              niceTicks: undefined,
              orientation: 'bottom',
              range: [5, 495],
              realScaleType: expect.any(String),
              scale: undefined,
              tick: true,
              tickCount: 5, // different charts have different defaults for realScaleType
              tickFormatter: undefined,
              ticks: undefined,
              type: 'category',
              unit: undefined,
            },
            yAxis: {
              angle: 0,
              axisType: 'yAxis',
              categoricalDomain: undefined,
              duplicateDomain: undefined,
              interval: 'preserveEnd',
              isCategorical: false,
              minTickGap: 5,
              niceTicks: undefined,
              orientation: 'left',
              range: [495, 5],
              realScaleType: 'linear',
              scale: undefined,
              tick: true,
              tickCount: 5,
              tickFormatter: undefined,
              ticks: undefined,
              type: 'number',
              unit: undefined,
            },
            key: undefined,
            x: 1,
            y: 2,
            x1: expect.any(Number),
            x2: expect.any(Number),
            y1: 2,
            y2: 202,
            index: expect.any(Number),
          };
          expect(spy).toHaveBeenCalledWith(expectedProps);

          expect(container.querySelectorAll('[data-testid=my_mock_line]')).toHaveLength(verticalPoints.length);
        });
      });
    });

    describe('stripes', () => {
      const emptyFillCases: { fill: string[] | undefined }[] = [{ fill: [] }, { fill: undefined }];

      describe('horizontal stripes', () => {
        test.each([true, undefined])('should render horizontal stripes if horizontal prop = %s', horizontal => {
          const extraSpaceAtTheTopOfChart = 7;
          const { container } = render(
            <CartesianGrid
              {...exampleCartesianGridDimensions}
              height={Math.max(...horizontalPoints) + extraSpaceAtTheTopOfChart}
              verticalPoints={verticalPoints}
              horizontalPoints={horizontalPoints}
              horizontalFill={['red', 'green']}
              fillOpacity="20%"
              horizontal={horizontal}
            />,
          );
          const allStripes = container.querySelectorAll('.recharts-cartesian-gridstripes-horizontal rect');
          expect(allStripes).toHaveLength(horizontalPoints.length + 1);

          for (let i = 0; i < allStripes.length; i++) {
            const element = allStripes[i];
            expect.soft(element).toHaveAttribute('x', '1');
            expect.soft(element).toHaveAttribute('stroke', 'none');
            expect.soft(element).toHaveAttribute('fill-opacity', '20%');
            expect.soft(element).toHaveClass('recharts-cartesian-grid-bg');
          }

          expect(allStripes[0]).toHaveAttribute('fill', 'red');
          expect(allStripes[0]).toHaveAttribute('y', '0');
          expect(allStripes[0]).toHaveAttribute('height', '10');

          expect(allStripes[1]).toHaveAttribute('fill', 'green');
          expect(allStripes[1]).toHaveAttribute('y', '10');
          expect(allStripes[1]).toHaveAttribute('height', '10');

          expect(allStripes[2]).toHaveAttribute('fill', 'red');
          expect(allStripes[2]).toHaveAttribute('y', '20');
          expect(allStripes[2]).toHaveAttribute('height', '10');

          expect(allStripes[3]).toHaveAttribute('fill', 'green');
          expect(allStripes[3]).toHaveAttribute('y', '30');
          expect(allStripes[3]).toHaveAttribute('height', '70');

          expect(allStripes[4]).toHaveAttribute('fill', 'red');
          expect(allStripes[4]).toHaveAttribute('y', '100');
          expect(allStripes[4]).toHaveAttribute('height', '300');

          expect(allStripes[5]).toHaveAttribute('fill', 'green');
          expect(allStripes[5]).toHaveAttribute('y', '400');
          expect(allStripes[5]).toHaveAttribute(
            'height',
            String(extraSpaceAtTheTopOfChart + exampleCartesianGridDimensions.y),
          );
        });

        it('should render stripes defined by horizontalCoordinatesGenerator', () => {
          const horizontalCoordinatesGenerator: HorizontalCoordinatesGenerator = vi.fn().mockReturnValue([1, 2]);
          const { container } = render(
            <ChartElement width={500} height={500}>
              <CartesianGrid
                {...exampleCartesianGridDimensions}
                horizontalCoordinatesGenerator={horizontalCoordinatesGenerator}
                horizontalFill={['red', 'green']}
              />
            </ChartElement>,
          );

          expect(horizontalCoordinatesGenerator).toHaveBeenCalledTimes(1);

          const allLines = container.querySelectorAll('.recharts-cartesian-gridstripes-horizontal rect');
          expect(allLines).toHaveLength(3);
        });

        it('should not render anything if horizontal=false', () => {
          const extraSpaceAtTheTopOfChart = 1;
          const { container } = render(
            <CartesianGrid
              {...exampleCartesianGridDimensions}
              height={Math.max(...horizontalPoints) + extraSpaceAtTheTopOfChart}
              verticalPoints={verticalPoints}
              horizontalPoints={horizontalPoints}
              horizontalFill={['red', 'green']}
              fillOpacity="20%"
              horizontal={false}
            />,
          );
          const allStripes = container.querySelectorAll('.recharts-cartesian-gridstripes-horizontal rect');
          expect(allStripes).toHaveLength(0);
        });

        test.each(emptyFillCases)('should render nothing if horizontalFill is $fill', ({ fill }) => {
          const { container } = render(
            <CartesianGrid
              {...exampleCartesianGridDimensions}
              height={Math.max(...horizontalPoints) + 1}
              verticalPoints={verticalPoints}
              horizontalPoints={horizontalPoints}
              horizontalFill={fill}
            />,
          );
          const allStripes = container.querySelectorAll('.recharts-cartesian-gridstripes-horizontal rect');
          expect(allStripes).toHaveLength(0);
        });

        it('should leave out the stripe at the beginning if the smallest horizontalPoints happens to be exactly at position y', () => {
          const { container } = render(
            <CartesianGrid
              {...exampleCartesianGridDimensions}
              y={Math.min(...horizontalPoints)}
              height={Math.max(...horizontalPoints) + 1}
              verticalPoints={verticalPoints}
              horizontalPoints={horizontalPoints}
              horizontalFill={['red', 'green']}
            />,
          );
          const allStripes = container.querySelectorAll('.recharts-cartesian-gridstripes-horizontal rect');
          expect(allStripes).toHaveLength(horizontalPoints.length);
        });

        it('render the stripe at the beginning if the smallest horizontalPoints is smaller than position y', () => {
          const { container } = render(
            <CartesianGrid
              {...exampleCartesianGridDimensions}
              y={Math.min(...horizontalPoints) - 1}
              height={Math.max(...horizontalPoints) + 1}
              verticalPoints={verticalPoints}
              horizontalPoints={horizontalPoints}
              horizontalFill={['red', 'green']}
            />,
          );
          const allStripes = container.querySelectorAll('.recharts-cartesian-gridstripes-horizontal rect');
          /*
           * This feels to me like a bug. This stripe is outside of the rendered Grid, why should it be visible?
           */
          expect(allStripes).toHaveLength(horizontalPoints.length + 1);
        });

        it('removes the one stripe at the end if it would render outside of the Grid', () => {
          const { container } = render(
            <CartesianGrid
              {...exampleCartesianGridDimensions}
              y={0}
              height={Math.max(...horizontalPoints) - 1}
              verticalPoints={verticalPoints}
              horizontalPoints={horizontalPoints}
              horizontalFill={['red', 'green']}
            />,
          );
          const allStripes = container.querySelectorAll('.recharts-cartesian-gridstripes-horizontal rect');
          expect(allStripes).toHaveLength(horizontalPoints.length);
        });

        it('removes still only one stripe even if all of them render outside of the grid', () => {
          const { container } = render(
            <CartesianGrid
              {...exampleCartesianGridDimensions}
              height={1}
              verticalPoints={verticalPoints}
              horizontalPoints={horizontalPoints}
              horizontalFill={['red', 'green']}
            />,
          );
          const allStripes = container.querySelectorAll('.recharts-cartesian-gridstripes-horizontal rect');
          /*
           * Why remove only one? None of them are visible
           */
          expect(allStripes).toHaveLength(horizontalPoints.length);
        });

        it('should round horizontalPoints [https://github.com/recharts/recharts/pull/3075]', () => {
          const { container } = render(
            <CartesianGrid
              x={0}
              y={0}
              width={500}
              height={500}
              verticalPoints={verticalPoints}
              horizontalPoints={floatingPointPrecisionExamples}
              horizontalFill={['red', 'green']}
            />,
          );
          const allStripes = container.querySelectorAll('.recharts-cartesian-gridstripes-horizontal rect');
          /*
           * This feels to me like a bug. This stripe is outside of the rendered Grid, why should it be visible?
           */
          expect(allStripes).toHaveLength(floatingPointPrecisionExamples.length + 1);

          expect.soft(allStripes[0]).toHaveAttribute('height', '121');
          expect.soft(allStripes[1]).toHaveAttribute('height', '110');
          /*
           * Without the rounding, these will have height of something like
           * 268.99999999999994
           * which makes the browser render a very thin line and it looks ugly.
           */
          expect.soft(allStripes[2]).toHaveAttribute('height', '269');
        });

        it('should ignore stripes that have computed height 0', () => {
          const { container } = render(
            <CartesianGrid
              {...exampleCartesianGridDimensions}
              verticalPoints={verticalPoints}
              horizontalPoints={[10, 20, 10, 500]}
              horizontalFill={['red', 'green']}
            />,
          );
          const allStripes = container.querySelectorAll('.recharts-cartesian-gridstripes-horizontal rect');
          expect(allStripes).toHaveLength(3);

          expect.soft(allStripes[0]).toHaveAttribute('height', '10');
          expect.soft(allStripes[0]).toHaveAttribute('y', '0');

          // even though the horizontalPoints do define double 10, 10 ... the stripe is not rendered

          expect.soft(allStripes[1]).toHaveAttribute('height', '10');
          expect.soft(allStripes[1]).toHaveAttribute('y', '10');

          expect.soft(allStripes[2]).toHaveAttribute('height', '480');
          expect.soft(allStripes[2]).toHaveAttribute('y', '20');
        });
      });
      describe('vertical stripes', () => {
        test.each([true, undefined])('should render vertical stripes if vertical prop = %s', vertical => {
          const extraSpaceAtTheEndOfChart = 7;
          const { container } = render(
            <CartesianGrid
              {...exampleCartesianGridDimensions}
              width={Math.max(...verticalPoints) + extraSpaceAtTheEndOfChart}
              verticalPoints={verticalPoints}
              verticalFill={['red', 'green']}
              fillOpacity="20%"
              vertical={vertical}
            />,
          );
          const allStripes = container.querySelectorAll('.recharts-cartesian-gridstripes-vertical rect');
          expect(allStripes).toHaveLength(verticalPoints.length + 1);

          for (let i = 0; i < allStripes.length; i++) {
            const element = allStripes[i];
            expect.soft(element).toHaveAttribute('y', '2');
            expect.soft(element).toHaveAttribute('height', '200');
            expect.soft(element).toHaveAttribute('stroke', 'none');
            expect.soft(element).toHaveAttribute('fill-opacity', '20%');
            expect.soft(element).toHaveClass('recharts-cartesian-grid-bg');
          }

          expect.soft(allStripes[0]).toHaveAttribute('fill', 'red');
          expect.soft(allStripes[0]).toHaveAttribute('x', '0');
          expect.soft(allStripes[0]).toHaveAttribute('width', '100');

          expect.soft(allStripes[1]).toHaveAttribute('fill', 'green');
          expect.soft(allStripes[1]).toHaveAttribute('x', '100');
          expect.soft(allStripes[1]).toHaveAttribute('width', '100');

          expect.soft(allStripes[2]).toHaveAttribute('fill', 'red');
          expect.soft(allStripes[2]).toHaveAttribute('x', '200');
          expect.soft(allStripes[2]).toHaveAttribute('width', '100');

          expect.soft(allStripes[3]).toHaveAttribute('fill', 'green');
          expect.soft(allStripes[3]).toHaveAttribute('x', '300');
          expect.soft(allStripes[3]).toHaveAttribute('width', '100');

          expect.soft(allStripes[4]).toHaveAttribute('fill', 'red');
          expect.soft(allStripes[4]).toHaveAttribute('x', '400');
          expect
            .soft(allStripes[4])
            .toHaveAttribute('width', String(extraSpaceAtTheEndOfChart + exampleCartesianGridDimensions.x));
        });

        it('should render stripes defined by verticalCoordinatesGenerator', () => {
          const verticalCoordinatesGenerator: VerticalCoordinatesGenerator = vi.fn().mockReturnValue([1, 2]);
          const { container } = render(
            <ChartElement width={500} height={500}>
              <CartesianGrid
                x={0}
                y={0}
                width={500}
                height={500}
                verticalCoordinatesGenerator={verticalCoordinatesGenerator}
                verticalFill={['red', 'green']}
              />
            </ChartElement>,
          );

          expect(verticalCoordinatesGenerator).toHaveBeenCalledTimes(1);

          const allLines = container.querySelectorAll('.recharts-cartesian-gridstripes-vertical rect');
          expect(allLines).toHaveLength(3);
        });

        it('should not render anything if vertical=false', () => {
          const extraSpaceAtTheTopOfChart = 1;
          const { container } = render(
            <CartesianGrid
              {...exampleCartesianGridDimensions}
              width={Math.max(...verticalPoints) + extraSpaceAtTheTopOfChart}
              verticalPoints={verticalPoints}
              verticalFill={['red', 'green']}
              fillOpacity="20%"
              vertical={false}
            />,
          );
          const allStripes = container.querySelectorAll('.recharts-cartesian-gridstripes-vertical rect');
          expect(allStripes).toHaveLength(0);
        });

        test.each(emptyFillCases)('should render nothing if verticalFill is $fill', ({ fill }) => {
          const { container } = render(
            <CartesianGrid
              {...exampleCartesianGridDimensions}
              width={Math.max(...verticalPoints) + 1}
              verticalPoints={verticalPoints}
              verticalFill={fill}
            />,
          );
          const allStripes = container.querySelectorAll('.recharts-cartesian-gridstripes-vertical rect');
          expect(allStripes).toHaveLength(0);
        });

        it('should leave out the stripe at the beginning if the smallest verticalPoints happens to be exactly at position x', () => {
          const { container } = render(
            <CartesianGrid
              {...exampleCartesianGridDimensions}
              x={Math.min(...verticalPoints)}
              width={Math.max(...verticalPoints) + 1}
              verticalPoints={verticalPoints}
              verticalFill={['red', 'green']}
            />,
          );
          const allStripes = container.querySelectorAll('.recharts-cartesian-gridstripes-vertical rect');
          expect(allStripes).toHaveLength(verticalPoints.length);
        });

        it('render the stripe at the beginning if the smallest verticalPoints is smaller than position x', () => {
          const { container } = render(
            <CartesianGrid
              {...exampleCartesianGridDimensions}
              x={Math.min(...verticalPoints) - 1}
              width={Math.max(...verticalPoints) + 1}
              verticalPoints={verticalPoints}
              verticalFill={['red', 'green']}
            />,
          );
          const allStripes = container.querySelectorAll('.recharts-cartesian-gridstripes-vertical rect');
          /*
           * This feels to me like a bug. This stripe is outside of the rendered Grid, why should it be visible?
           */
          expect(allStripes).toHaveLength(verticalPoints.length + 1);
        });

        it('removes the one stripe at the end if it would render outside of the Grid', () => {
          const { container } = render(
            <CartesianGrid
              {...exampleCartesianGridDimensions}
              width={Math.max(...verticalPoints) - 1}
              verticalPoints={verticalPoints}
              verticalFill={['red', 'green']}
            />,
          );
          const allStripes = container.querySelectorAll('.recharts-cartesian-gridstripes-vertical rect');
          expect(allStripes).toHaveLength(verticalPoints.length);
        });

        it('removes still only one stripe even if all of them render outside of the grid', () => {
          const { container } = render(
            <CartesianGrid
              {...exampleCartesianGridDimensions}
              width={1}
              verticalPoints={verticalPoints}
              verticalFill={['red', 'green']}
            />,
          );
          const allStripes = container.querySelectorAll('.recharts-cartesian-gridstripes-vertical rect');
          /*
           * Why remove only one? None of them are visible
           */
          expect(allStripes).toHaveLength(verticalPoints.length);
        });

        it('should round verticalPoints [https://github.com/recharts/recharts/pull/3075]', () => {
          const { container } = render(
            <CartesianGrid
              x={0}
              y={0}
              width={500}
              height={500}
              verticalPoints={floatingPointPrecisionExamples}
              verticalFill={['red', 'green']}
            />,
          );
          const allStripes = container.querySelectorAll('.recharts-cartesian-gridstripes-vertical rect');
          /*
           * This feels to me like a bug. This stripe is outside of the rendered Grid, why should it be visible?
           */
          expect(allStripes).toHaveLength(floatingPointPrecisionExamples.length + 1);
          for (let i = 0; i < allStripes.length; i++) {
            const stripe = allStripes[i];
            expect(stripe).toHaveAttribute('height', '500');
          }

          expect.soft(allStripes[0]).toHaveAttribute('width', '121');
          expect.soft(allStripes[1]).toHaveAttribute('width', '110');
          /*
           * Without the rounding, these will have width of something like
           * 268.99999999999994
           * which makes the browser render a very thin line and it looks ugly.
           */
          expect.soft(allStripes[2]).toHaveAttribute('width', '269');
        });

        it('should ignore stripes that have computed width 0', () => {
          const { container } = render(
            <CartesianGrid
              {...exampleCartesianGridDimensions}
              verticalPoints={[10, 20, 10, 500]}
              verticalFill={['red', 'green']}
            />,
          );
          const allStripes = container.querySelectorAll('.recharts-cartesian-gridstripes-vertical rect');
          expect(allStripes).toHaveLength(3);

          expect.soft(allStripes[0]).toHaveAttribute('width', '10');
          expect.soft(allStripes[0]).toHaveAttribute('height', '200');
          expect.soft(allStripes[0]).toHaveAttribute('x', '0');
          expect.soft(allStripes[0]).toHaveAttribute('y', '2');

          // even though the verticalPoints do define double 10, 10 ... the stripe is not rendered

          expect.soft(allStripes[1]).toHaveAttribute('width', '10');
          expect.soft(allStripes[1]).toHaveAttribute('height', '200');
          expect.soft(allStripes[1]).toHaveAttribute('x', '10');
          expect.soft(allStripes[1]).toHaveAttribute('y', '2');

          expect.soft(allStripes[2]).toHaveAttribute('width', '480');
          expect.soft(allStripes[2]).toHaveAttribute('height', '200');
          expect.soft(allStripes[2]).toHaveAttribute('x', '20');
          expect.soft(allStripes[2]).toHaveAttribute('y', '2');
        });
      });
    });

    describe('offset prop', () => {
      it('should not pass the offset prop anywhere', () => {
        const { container } = render(
          <ChartElement width={500} height={500}>
            <CartesianGrid
              {...exampleCartesianGridDimensions}
              verticalPoints={verticalPoints}
              horizontalPoints={horizontalPoints}
            />
          </ChartElement>,
        );
        // select everything
        const allElements = container.querySelectorAll('*');
        // check that the selector worked
        expect(allElements.length).toBeGreaterThan(0);
        for (let i = 0; i < allElements.length; i++) {
          const element = allElements[0];
          expect(element).not.toHaveAttribute('offset');
        }
      });
    });
  });
});
