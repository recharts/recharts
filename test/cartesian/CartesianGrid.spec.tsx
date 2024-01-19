import React from 'react';
import { describe, test, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Surface, CartesianGrid } from '../../src';

describe('<CartesianGrid />', () => {
  const horizontalPoints = [10, 20, 30, 100, 400];
  const verticalPoints = [100, 200, 300, 400];

  describe('basic features', () => {
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

  describe.todo('horizontalCoordinatesGenerator');
  describe.todo('verticalCoordinatesGenerator');
});
