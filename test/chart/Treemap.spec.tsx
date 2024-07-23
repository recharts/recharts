import React from 'react';
import { describe, test, expect, it, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Customized, Treemap, XAxis, YAxis } from '../../src';
import { exampleTreemapData } from '../_data';
import { TreemapNode, addToTreemapNodeIndex, computeNode, treemapPayloadSearcher } from '../../src/chart/Treemap';
import { useChartHeight, useChartWidth, useViewBox } from '../../src/context/chartLayoutContext';

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

  test('navigates through nested nodes correctly', () => {
    const { container, getByText } = render(
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
    expect(container.querySelectorAll('.recharts-treemap-depth-1')).toHaveLength(20);

    const nodeWithChildren = getByText('A');
    fireEvent.click(nodeWithChildren);

    expect(container.querySelectorAll('.recharts-rectangle')).toHaveLength(4);
    expect(container.querySelectorAll('.recharts-treemap-depth-1')).toHaveLength(3);
    expect(container.querySelectorAll('.recharts-treemap-depth-1')[0]).toHaveTextContent('U');
  });

  describe('Treemap layout context', () => {
    it('should set width and height in state', () => {
      const sizeSpy = vi.fn();
      const viewBoxSpy = vi.fn();
      const Comp = (): null => {
        const width = useChartWidth();
        const height = useChartHeight();
        sizeSpy({ width, height });
        viewBoxSpy(useViewBox());
        return null;
      };
      render(
        <Treemap width={100} height={50}>
          <Customized component={<Comp />} />
        </Treemap>,
      );
      expect(sizeSpy).toHaveBeenLastCalledWith({ width: 100, height: 50 });
      expect(viewBoxSpy).toHaveBeenLastCalledWith({ x: 0, y: 0, width: 100, height: 50 });
      expect(sizeSpy).toHaveBeenCalledTimes(3);
      expect(viewBoxSpy).toHaveBeenCalledTimes(3);
    });

    it('should not throw if axes are provided - they are not an allowed child', () => {
      expect(() =>
        render(
          <Treemap width={100} height={50}>
            <XAxis dataKey="number" type="number" />
            <YAxis type="category" dataKey="name" />
          </Treemap>,
        ),
      ).not.toThrow();
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
