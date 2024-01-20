import React from 'react';
import { describe, test, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { scaleLinear } from 'victory-vendor/d3-scale';
import { Surface, CartesianGrid } from '../../src';
import { HorizontalCoordinatesGenerator, Props, VerticalCoordinatesGenerator } from '../../src/cartesian/CartesianGrid';

describe('<CartesianGrid />', () => {
  const horizontalPoints = [10, 20, 30, 100, 400];
  const verticalPoints = [100, 200, 300, 400];

  describe('basic features', () => {
    it('should render on its own, outside of Recharts', () => {
      const { container } = render(
        <CartesianGrid
          x={0}
          y={0}
          width={500}
          height={500}
          verticalPoints={verticalPoints}
          horizontalPoints={horizontalPoints}
        />,
      );
      expect.soft(container.querySelectorAll('line')).toHaveLength(9);
      expect
        .soft(container.querySelectorAll('.recharts-cartesian-grid-horizontal line'))
        .toHaveLength(horizontalPoints.length);
      expect
        .soft(container.querySelectorAll('.recharts-cartesian-grid-vertical line'))
        .toHaveLength(verticalPoints.length);
    });

    test('Render 5 horizontal lines and 4 vertical lines in simple CartesianGrid', () => {
      const { container } = render(
        <Surface width={500} height={500}>
          <CartesianGrid
            x={0}
            y={0}
            width={500}
            height={500}
            verticalPoints={verticalPoints}
            horizontalPoints={horizontalPoints}
          />
        </Surface>,
      );
      expect.soft(container.querySelectorAll('line')).toHaveLength(9);
      expect
        .soft(container.querySelectorAll('.recharts-cartesian-grid-horizontal line'))
        .toHaveLength(horizontalPoints.length);
      expect
        .soft(container.querySelectorAll('.recharts-cartesian-grid-vertical line'))
        .toHaveLength(verticalPoints.length);
    });

    test("Don't render any lines when verticalPoints and horizontalPoints are empty", () => {
      const { container } = render(
        <Surface width={500} height={500}>
          <CartesianGrid width={500} height={500} />
        </Surface>,
      );
      expect(container.querySelectorAll('line')).toHaveLength(0);
    });

    test.each([0, -1, NaN, Infinity])("Don't render any lines when width is %s", w => {
      const { container } = render(
        <Surface width={500} height={500}>
          <CartesianGrid width={w} height={500} verticalPoints={verticalPoints} horizontalPoints={horizontalPoints} />
        </Surface>,
      );
      expect(container.querySelectorAll('line')).toHaveLength(0);
    });

    test.each([0, -1, NaN, Infinity])("Don't render any lines when height is %s", h => {
      const { container } = render(
        <Surface width={500} height={500}>
          <CartesianGrid width={h} height={500} verticalPoints={verticalPoints} horizontalPoints={horizontalPoints} />
        </Surface>,
      );
      expect(container.querySelectorAll('line')).toHaveLength(0);
    });
  });

  describe('horizontalPoints without generator', () => {
    it('should not render any lines if horizontal=false', () => {
      const { container } = render(
        <Surface width={500} height={500}>
          <CartesianGrid
            x={0}
            y={0}
            width={500}
            height={500}
            horizontal={false}
            verticalPoints={verticalPoints}
            horizontalPoints={horizontalPoints}
          />
        </Surface>,
      );
      expect.soft(container.querySelectorAll('line')).toHaveLength(verticalPoints.length);
      expect.soft(container.querySelectorAll('.recharts-cartesian-grid-horizontal line')).toHaveLength(0);
      expect
        .soft(container.querySelectorAll('.recharts-cartesian-grid-vertical line'))
        .toHaveLength(verticalPoints.length);
    });

    it('should render all lines if horizontal=true', () => {
      const { container } = render(
        <Surface width={500} height={500}>
          <CartesianGrid
            x={0}
            y={0}
            width={500}
            height={500}
            horizontal
            verticalPoints={verticalPoints}
            horizontalPoints={horizontalPoints}
          />
        </Surface>,
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
        <Surface width={500} height={500}>
          <CartesianGrid
            x={0}
            y={0}
            width={500}
            height={500}
            verticalPoints={verticalPoints}
            horizontalPoints={horizontalPoints}
          />
        </Surface>,
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
        <Surface width={500} height={500}>
          <CartesianGrid
            x={0}
            y={0}
            width={500}
            height={500}
            vertical={false}
            verticalPoints={verticalPoints}
            horizontalPoints={horizontalPoints}
          />
        </Surface>,
      );
      expect.soft(container.querySelectorAll('line')).toHaveLength(horizontalPoints.length);
      expect
        .soft(container.querySelectorAll('.recharts-cartesian-grid-horizontal line'))
        .toHaveLength(horizontalPoints.length);
      expect.soft(container.querySelectorAll('.recharts-cartesian-grid-vertical line')).toHaveLength(0);
    });

    it('should render all lines if vertical=true', () => {
      const { container } = render(
        <Surface width={500} height={500}>
          <CartesianGrid
            x={0}
            y={0}
            width={500}
            height={500}
            vertical
            verticalPoints={verticalPoints}
            horizontalPoints={horizontalPoints}
          />
        </Surface>,
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
        <Surface width={500} height={500}>
          <CartesianGrid
            x={0}
            y={0}
            width={500}
            height={500}
            verticalPoints={verticalPoints}
            horizontalPoints={horizontalPoints}
          />
        </Surface>,
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
      const horizontalCoordinatesGenerator: HorizontalCoordinatesGenerator = vi.fn().mockReturnValue([1, 2]);
      const { container } = render(
        <Surface width={500} height={500}>
          <CartesianGrid
            x={0}
            y={0}
            width={500}
            height={500}
            horizontalCoordinatesGenerator={horizontalCoordinatesGenerator}
          />
        </Surface>,
      );

      expect(horizontalCoordinatesGenerator).toHaveBeenCalledOnce();

      const allLines = container.querySelectorAll('.recharts-cartesian-grid-horizontal line');
      expect(allLines).toHaveLength(2);
      expect.soft(allLines[0]).toHaveAttribute('x', '0');
      expect.soft(allLines[0]).toHaveAttribute('x1', '0');
      expect.soft(allLines[0]).toHaveAttribute('x2', '500');
      expect.soft(allLines[0]).toHaveAttribute('y', '0');
      expect.soft(allLines[0]).toHaveAttribute('y1', '1');
      expect.soft(allLines[0]).toHaveAttribute('y2', '1');
      expect.soft(allLines[1]).toHaveAttribute('x', '0');
      expect.soft(allLines[1]).toHaveAttribute('x1', '0');
      expect.soft(allLines[1]).toHaveAttribute('x2', '500');
      expect.soft(allLines[1]).toHaveAttribute('y', '0');
      expect.soft(allLines[1]).toHaveAttribute('y1', '2');
      expect.soft(allLines[1]).toHaveAttribute('y2', '2');
    });

    it('if both horizontalCoordinatesGenerator and horizontalPoints are present then horizontalPoints win', () => {
      const horizontalCoordinatesGenerator: HorizontalCoordinatesGenerator = vi.fn().mockReturnValue([1, 2]);
      expect(horizontalPoints.length).not.toBe(2);
      const { container } = render(
        <Surface width={500} height={500}>
          <CartesianGrid
            x={0}
            y={0}
            width={500}
            height={500}
            horizontalCoordinatesGenerator={horizontalCoordinatesGenerator}
            horizontalPoints={horizontalPoints}
          />
        </Surface>,
      );

      expect(horizontalCoordinatesGenerator).not.toHaveBeenCalled();

      const allLines = container.querySelectorAll('.recharts-cartesian-grid-horizontal line');
      expect(allLines).toHaveLength(horizontalPoints.length);
    });

    it('should pass props to the generator', () => {
      const horizontalCoordinatesGenerator: HorizontalCoordinatesGenerator = vi.fn().mockReturnValue([]);
      const yAxis: Props['yAxis'] = {
        scale: scaleLinear(),
        ticks: ['x', 'y', 'x'],
      };
      // @ts-expect-error Recharts offset type conflicts with SVG offset type
      const offset: Props['offset'] = {};
      render(
        <Surface width={500} height={500}>
          <CartesianGrid
            x={0}
            y={0}
            width={500}
            height={500}
            yAxis={yAxis}
            horizontalCoordinatesGenerator={horizontalCoordinatesGenerator}
            chartWidth={300}
            chartHeight={200}
            offset={offset}
          />
        </Surface>,
      );

      expect(horizontalCoordinatesGenerator).toHaveBeenCalledOnce();
      expect(horizontalCoordinatesGenerator).toHaveBeenCalledWith(
        {
          yAxis,
          width: 300,
          height: 200,
          offset,
        },
        undefined,
      );
    });

    it(`should set syncWithTicks=true, and ticks=horizontalValues,
      when horizontalValues is provided, even if the explicit syncWithTicks is false`, () => {
      const horizontalCoordinatesGenerator: HorizontalCoordinatesGenerator = vi.fn().mockReturnValue([]);
      const yAxis: Props['yAxis'] = {
        scale: scaleLinear(),
        ticks: ['x', 'y', 'x'],
      };
      // @ts-expect-error Recharts offset type conflicts with SVG offset type
      const offset: Props['offset'] = {};
      render(
        <Surface width={500} height={500}>
          <CartesianGrid
            x={0}
            y={0}
            width={500}
            height={500}
            yAxis={yAxis}
            horizontalCoordinatesGenerator={horizontalCoordinatesGenerator}
            chartWidth={300}
            chartHeight={200}
            offset={offset}
            syncWithTicks={false}
            horizontalValues={['a', 'b']}
          />
        </Surface>,
      );

      const yAxisExpected = {
        ...yAxis,
        ticks: ['a', 'b'],
      };

      expect(horizontalCoordinatesGenerator).toHaveBeenCalledOnce();
      expect(horizontalCoordinatesGenerator).toHaveBeenCalledWith(
        {
          yAxis: yAxisExpected,
          width: 300,
          height: 200,
          offset,
        },
        true,
      );
    });

    test.each([true, false, undefined])(
      'should set syncWithTicks as %s when horizontalValues is provided but is empty',
      syncWithTicks => {
        const horizontalCoordinatesGenerator: HorizontalCoordinatesGenerator = vi.fn().mockReturnValue([]);
        const yAxis: Props['yAxis'] = {
          scale: scaleLinear(),
        };
        // @ts-expect-error Recharts offset type conflicts with SVG offset type
        const offset: Props['offset'] = {};
        render(
          <Surface width={500} height={500}>
            <CartesianGrid
              x={0}
              y={0}
              width={500}
              height={500}
              yAxis={yAxis}
              horizontalCoordinatesGenerator={horizontalCoordinatesGenerator}
              chartWidth={300}
              chartHeight={200}
              offset={offset}
              syncWithTicks={syncWithTicks}
              horizontalValues={[]}
            />
          </Surface>,
        );

        const yAxisExpected = {
          ...yAxis,
          ticks: undefined,
        };

        expect(horizontalCoordinatesGenerator).toHaveBeenCalledOnce();
        expect(horizontalCoordinatesGenerator).toHaveBeenCalledWith(
          {
            yAxis: yAxisExpected,
            width: 300,
            height: 200,
            offset,
          },
          syncWithTicks,
        );
      },
    );

    test.each([true, false, undefined])(
      'should pass props to the generator when syncWithTicks is %s',
      syncWithTicks => {
        const horizontalCoordinatesGenerator: HorizontalCoordinatesGenerator = vi.fn().mockReturnValue([]);
        const yAxis: Props['yAxis'] = {
          scale: scaleLinear(),
        };
        // @ts-expect-error Recharts offset type conflicts with SVG offset type
        const offset: Props['offset'] = {};
        render(
          <Surface width={500} height={500}>
            <CartesianGrid
              x={0}
              y={0}
              width={500}
              height={500}
              yAxis={yAxis}
              horizontalCoordinatesGenerator={horizontalCoordinatesGenerator}
              chartWidth={300}
              chartHeight={200}
              offset={offset}
              syncWithTicks={syncWithTicks}
            />
          </Surface>,
        );

        const yAxisExpected = {
          ...yAxis,
          ticks: undefined,
        };

        expect(horizontalCoordinatesGenerator).toHaveBeenCalledOnce();
        expect(horizontalCoordinatesGenerator).toHaveBeenCalledWith(
          {
            yAxis: yAxisExpected,
            width: 300,
            height: 200,
            offset,
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
          <Surface width={500} height={500}>
            <CartesianGrid
              x={0}
              y={0}
              width={500}
              height={500}
              horizontalCoordinatesGenerator={horizontalCoordinatesGenerator}
            />
          </Surface>,
        );

        expect(horizontalCoordinatesGenerator).toHaveBeenCalledOnce();

        const allLines = container.querySelectorAll('.recharts-cartesian-grid-horizontal line');
        expect(allLines).toHaveLength(0);
      },
    );
  });

  describe('verticalCoordinatesGenerator', () => {
    it('should render lines that the generator returns', () => {
      const verticalCoordinatesGenerator: VerticalCoordinatesGenerator = vi.fn().mockReturnValue([1, 2]);
      const { container } = render(
        <Surface width={500} height={500}>
          <CartesianGrid
            x={0}
            y={0}
            width={500}
            height={500}
            verticalCoordinatesGenerator={verticalCoordinatesGenerator}
          />
        </Surface>,
      );

      expect(verticalCoordinatesGenerator).toHaveBeenCalledOnce();

      const allLines = container.querySelectorAll('.recharts-cartesian-grid-vertical line');
      expect(allLines).toHaveLength(2);
      expect.soft(allLines[0]).toHaveAttribute('x', '0');
      expect.soft(allLines[0]).toHaveAttribute('x1', '1');
      expect.soft(allLines[0]).toHaveAttribute('x2', '1');
      expect.soft(allLines[0]).toHaveAttribute('y', '0');
      expect.soft(allLines[0]).toHaveAttribute('y1', '0');
      expect.soft(allLines[0]).toHaveAttribute('y2', '500');
      expect.soft(allLines[1]).toHaveAttribute('x', '0');
      expect.soft(allLines[1]).toHaveAttribute('x2', '2');
      expect.soft(allLines[1]).toHaveAttribute('x2', '2');
      expect.soft(allLines[1]).toHaveAttribute('y', '0');
      expect.soft(allLines[1]).toHaveAttribute('y1', '0');
      expect.soft(allLines[1]).toHaveAttribute('y2', '500');
    });

    it('if both verticalCoordinatesGenerator and verticalPoints are present then verticalPoints wins', () => {
      const verticalCoordinatesGenerator: VerticalCoordinatesGenerator = vi.fn().mockReturnValue([1, 2]);
      expect(verticalPoints.length).not.toBe(2);
      const { container } = render(
        <Surface width={500} height={500}>
          <CartesianGrid
            x={0}
            y={0}
            width={500}
            height={500}
            verticalCoordinatesGenerator={verticalCoordinatesGenerator}
            verticalPoints={verticalPoints}
          />
        </Surface>,
      );

      expect(verticalCoordinatesGenerator).not.toHaveBeenCalled();

      const allLines = container.querySelectorAll('.recharts-cartesian-grid-vertical line');
      expect(allLines).toHaveLength(verticalPoints.length);
    });

    it('should pass props to the generator', () => {
      const verticalCoordinatesGenerator: VerticalCoordinatesGenerator = vi.fn().mockReturnValue([]);
      const xAxis: Props['xAxis'] = {
        scale: scaleLinear(),
        ticks: ['x', 'y', 'x'],
      };
      // @ts-expect-error Recharts offset type conflicts with SVG offset type
      const offset: Props['offset'] = {};
      render(
        <Surface width={500} height={500}>
          <CartesianGrid
            x={0}
            y={0}
            width={500}
            height={500}
            xAxis={xAxis}
            verticalCoordinatesGenerator={verticalCoordinatesGenerator}
            chartWidth={300}
            chartHeight={200}
            offset={offset}
          />
        </Surface>,
      );

      expect(verticalCoordinatesGenerator).toHaveBeenCalledOnce();
      expect(verticalCoordinatesGenerator).toHaveBeenCalledWith(
        {
          xAxis,
          width: 300,
          height: 200,
          offset,
        },
        undefined,
      );
    });

    it(`should set syncWithTicks=true, and ticks=verticalValues,
      when verticalValues is provided, even if the explicit syncWithTicks is false`, () => {
      const verticalCoordinatesGenerator: VerticalCoordinatesGenerator = vi.fn().mockReturnValue([]);
      const xAxis: Props['xAxis'] = {
        scale: scaleLinear(),
        ticks: ['x', 'y', 'x'],
      };
      // @ts-expect-error Recharts offset type conflicts with SVG offset type
      const offset: Props['offset'] = {};
      render(
        <Surface width={500} height={500}>
          <CartesianGrid
            x={0}
            y={0}
            width={500}
            height={500}
            xAxis={xAxis}
            verticalCoordinatesGenerator={verticalCoordinatesGenerator}
            chartWidth={300}
            chartHeight={200}
            offset={offset}
            syncWithTicks={false}
            verticalValues={['a', 'b']}
          />
        </Surface>,
      );

      const xAxisExpected = {
        ...xAxis,
        ticks: ['a', 'b'],
      };

      expect(verticalCoordinatesGenerator).toHaveBeenCalledOnce();
      expect(verticalCoordinatesGenerator).toHaveBeenCalledWith(
        {
          xAxis: xAxisExpected,
          width: 300,
          height: 200,
          offset,
        },
        true,
      );
    });

    test.each([true, false, undefined])(
      'should set syncWithTicks as %s when horizontalValues is provided but is empty',
      syncWithTicks => {
        const verticalCoordinatesGenerator: VerticalCoordinatesGenerator = vi.fn().mockReturnValue([]);
        const xAxis: Props['xAxis'] = {
          scale: scaleLinear(),
        };
        // @ts-expect-error Recharts offset type conflicts with SVG offset type
        const offset: Props['offset'] = {};
        render(
          <Surface width={500} height={500}>
            <CartesianGrid
              x={0}
              y={0}
              width={500}
              height={500}
              xAxis={xAxis}
              verticalCoordinatesGenerator={verticalCoordinatesGenerator}
              chartWidth={300}
              chartHeight={200}
              offset={offset}
              syncWithTicks={syncWithTicks}
              horizontalValues={[]}
            />
          </Surface>,
        );

        const xAxisExpected = {
          ...xAxis,
          ticks: undefined,
        };

        expect(verticalCoordinatesGenerator).toHaveBeenCalledOnce();
        expect(verticalCoordinatesGenerator).toHaveBeenCalledWith(
          {
            xAxis: xAxisExpected,
            width: 300,
            height: 200,
            offset,
          },
          syncWithTicks,
        );
      },
    );

    test.each([true, false, undefined])(
      'should pass props to the generator when syncWithTicks is %s',
      syncWithTicks => {
        const verticalCoordinatesGenerator: VerticalCoordinatesGenerator = vi.fn().mockReturnValue([]);
        const xAxis: Props['xAxis'] = {
          scale: scaleLinear(),
        };
        // @ts-expect-error Recharts offset type conflicts with SVG offset type
        const offset: Props['offset'] = {};
        render(
          <Surface width={500} height={500}>
            <CartesianGrid
              x={0}
              y={0}
              width={500}
              height={500}
              xAxis={xAxis}
              verticalCoordinatesGenerator={verticalCoordinatesGenerator}
              chartWidth={300}
              chartHeight={200}
              offset={offset}
              syncWithTicks={syncWithTicks}
            />
          </Surface>,
        );

        const xAxisExpected = {
          ...xAxis,
          ticks: undefined,
        };

        expect(verticalCoordinatesGenerator).toHaveBeenCalledOnce();
        expect(verticalCoordinatesGenerator).toHaveBeenCalledWith(
          {
            xAxis: xAxisExpected,
            width: 300,
            height: 200,
            offset,
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
          <Surface width={500} height={500}>
            <CartesianGrid
              x={0}
              y={0}
              width={500}
              height={500}
              verticalCoordinatesGenerator={verticalCoordinatesGenerator}
            />
          </Surface>,
        );

        expect(verticalCoordinatesGenerator).toHaveBeenCalledOnce();

        const allLines = container.querySelectorAll('.recharts-cartesian-grid-horizontal line');
        expect(allLines).toHaveLength(0);
      },
    );
  });
});
