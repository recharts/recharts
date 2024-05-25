import React from 'react';
import { render } from '@testing-library/react';
import { Treemap, XAxis, YAxis } from '../../src';
import { testChartLayoutContext } from '../util/context';
import { exampleTreemapData } from '../_data';
import { TreemapNode, addToTreemapNodeIndex, computeNode, treemapPayloadSearcher } from '../../src/chart/Treemap';

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
      'should provide viewBox but not clipPathId nor any axes',
      testChartLayoutContext(
        props => (
          <Treemap width={100} height={50}>
            {props.children}
          </Treemap>
        ),
        ({ clipPathId, viewBox, xAxisMap, yAxisMap }) => {
          expect(clipPathId).toBe(undefined);
          expect(viewBox).toEqual({ x: 0, y: 0, width: 100, height: 50 });
          expect(xAxisMap).toEqual({});
          expect(yAxisMap).toEqual({});
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

    it('should throw if axes are provided - they are not an allowed child anyway', () => {
      expect(() =>
        render(
          <Treemap width={100} height={50}>
            <XAxis dataKey="number" type="number" />
            <YAxis type="category" dataKey="name" />
          </Treemap>,
        ),
      ).toThrowError('Invariant failed: Could not find xAxis by id "0" [number]. There are no available ids.');
    });
  });
});

describe('addToTreemapNodeIndex + treemapPayloadSearcher tandem', () => {
  const dummyRoot: TreemapNode = {
    // @ts-expect-error Treemap types are a mess
    children: exampleTreemapData,
    value: 0,
    depth: 0,
    index: 0,
  };
  const computedRootNode: TreemapNode = computeNode({
    depth: 0,
    index: 0,
    node: dummyRoot,
    dataKey: 'value',
    nameKey: undefined,
    nestedActiveTooltipIndex: undefined,
  });
  it('should return index for root node and then look it up', () => {
    expect(computedRootNode.children[4]).toBeDefined();
    const activeIndex = addToTreemapNodeIndex(undefined, 4);
    expect(activeIndex).toEqual('children[4]');
    expect(treemapPayloadSearcher(computedRootNode, activeIndex)).toBe(computedRootNode.children[4]);
  });

  it('should return index for nested node and then look it up', () => {
    const level1 = computedRootNode.children[0];
    const activeIndex1 = addToTreemapNodeIndex(undefined, 0);
    const level2 = level1.children[1];
    const activeIndex2 = addToTreemapNodeIndex(activeIndex1, 1);
    expect(activeIndex2).toEqual('children[0]children[1]');
    expect(level1).toBeDefined();
    expect(level2).toBeDefined();
    expect(treemapPayloadSearcher(computedRootNode, activeIndex1)).toBe(level1);
    expect(treemapPayloadSearcher(computedRootNode, activeIndex2)).toBe(level2);
  });
});
