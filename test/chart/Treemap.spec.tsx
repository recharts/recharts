import React from 'react';
import { render } from '@testing-library/react';
import { Treemap, XAxis, YAxis } from '../../src';
import { testChartLayoutContext } from '../util/context';
import { exampleTreemapData } from '../_data';

describe('<Treemap />', () => {
  test('renders 20 rectangles in simple TreemapChart', () => {
    const { container } = render(
      <Treemap
        width={500}
        height={250}
        data={exampleTreemapData}
        isAnimationActive={false}
        nameKey="name"
        dataKey="value"
      />,
    );

    expect(container.querySelectorAll('.recharts-rectangle')).toHaveLength(24);
  });

  test('renders 21 rectangles in simple TreemapChart', () => {
    const { container } = render(
      <Treemap
        width={500}
        height={250}
        data={exampleTreemapData}
        isAnimationActive={false}
        nameKey="name"
        dataKey="value"
        type="nest"
      />,
    );

    expect(container.querySelectorAll('.recharts-rectangle')).toHaveLength(21);
  });

  describe('Treemap layout context', () => {
    it(
      'should not provide viewBox nor clipPathId nor any axes',
      testChartLayoutContext(
        props => (
          <Treemap width={100} height={50}>
            {props.children}
          </Treemap>
        ),
        ({ clipPathId, viewBox, xAxisMap, yAxisMap }) => {
          expect(clipPathId).toBe(undefined);
          expect(viewBox).toBe(undefined);
          expect(xAxisMap).toBe(undefined);
          expect(yAxisMap).toBe(undefined);
        },
      ),
    );

    it(
      'should not set width and height in context',
      testChartLayoutContext(
        props => (
          <Treemap width={100} height={50}>
            {props.children}
          </Treemap>
        ),
        ({ width, height }) => {
          expect(width).toBe(0);
          expect(height).toBe(0);
        },
      ),
    );

    it(
      'should provide default empty context even if axes are specified',
      testChartLayoutContext(
        props => (
          <Treemap width={100} height={50}>
            <XAxis dataKey="number" type="number" />
            <YAxis type="category" dataKey="name" />
            {props.children}
          </Treemap>
        ),
        ({ clipPathId, viewBox, xAxisMap, yAxisMap }) => {
          expect(clipPathId).toBe(undefined);
          expect(viewBox).toBe(undefined);
          expect(xAxisMap).toBe(undefined);
          expect(yAxisMap).toBe(undefined);
        },
      ),
    );
  });
});
