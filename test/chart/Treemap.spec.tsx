import React from 'react';
import { describe, test, expect, it, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Customized, Tooltip, Treemap, XAxis, YAxis } from '../../src';
import { exampleTreemapData } from '../_data';
import { TreemapNode, addToTreemapNodeIndex, computeNode, treemapPayloadSearcher } from '../../src/chart/Treemap';
import { useChartHeight, useChartWidth, useMargin, useViewBox } from '../../src/context/chartLayoutContext';
import { getTooltip, showTooltip } from '../component/Tooltip/tooltipTestHelpers';
import { treemapNodeChartMouseHoverTooltipSelector } from '../component/Tooltip/tooltipMouseHoverSelectors';

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

  describe('with Tooltip trigger=hover', () => {
    it('should display Tooltip on mouse enter on a Node and hide it on mouse leave', () => {
      const { container } = render(
        <Treemap width={1000} height={500} data={exampleTreemapData}>
          <Tooltip trigger="hover" />
        </Treemap>,
      );

      const tooltip = getTooltip(container);
      expect(tooltip).not.toBeVisible();

      const tooltipTriggerElement = showTooltip(container, treemapNodeChartMouseHoverTooltipSelector);

      expect(tooltip).toBeVisible();

      fireEvent.mouseOut(tooltipTriggerElement);

      expect(tooltip).not.toBeVisible();
    });

    it('should display/hide Tooltip on mouse enter/leave when custom content is passed as a function', () => {
      const { container } = render(
        <Treemap
          width={1000}
          height={500}
          data={exampleTreemapData}
          content={props => {
            const { depth, x, y, width, height, index, name } = props;

            return (
              <g>
                <rect
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  style={{
                    fill: '#111',
                    stroke: '#fff',
                    strokeWidth: 2 / (depth + 1e-10),
                    strokeOpacity: 1 / (depth + 1e-10),
                  }}
                  // needed for unit tests to find the tooltip
                  className="recharts-rectangle"
                />
                {depth === 1 ? (
                  <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="#fff" fontSize={14}>
                    {name}
                  </text>
                ) : null}
                {depth === 1 ? (
                  <text x={x + 4} y={y + 18} fill="#fff" fontSize={16} fillOpacity={0.9}>
                    {index + 1}
                  </text>
                ) : null}
              </g>
            );
          }}
        >
          <Tooltip trigger="hover" />
        </Treemap>,
      );

      const tooltip = getTooltip(container);
      expect(tooltip).not.toBeVisible();

      const tooltipTriggerElement = showTooltip(container, treemapNodeChartMouseHoverTooltipSelector);

      expect(tooltip).toBeVisible();

      fireEvent.mouseOut(tooltipTriggerElement);

      expect(tooltip).not.toBeVisible();
    });

    it('should display/hide Tooltip on mouse enter/leave when custom content is passed as React component', () => {
      const CustomNode = (props: TreemapNode) => {
        const { depth, x, y, width, height, index, name } = props;

        return (
          <g>
            <rect
              x={x}
              y={y}
              width={width}
              height={height}
              style={{
                fill: '#111',
                stroke: '#fff',
                strokeWidth: 2 / (depth + 1e-10),
                strokeOpacity: 1 / (depth + 1e-10),
              }}
              // needed for unit tests to find the tooltip
              className="recharts-rectangle"
            />
            {depth === 1 ? (
              <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="#fff" fontSize={14}>
                {name}
              </text>
            ) : null}
            {depth === 1 ? (
              <text x={x + 4} y={y + 18} fill="#fff" fontSize={16} fillOpacity={0.9}>
                {index + 1}
              </text>
            ) : null}
          </g>
        );
      };

      const { container } = render(
        // @ts-expect-error typescript yells because we didn't pass props
        <Treemap width={1000} height={500} data={exampleTreemapData} content={<CustomNode />}>
          <Tooltip trigger="hover" />
        </Treemap>,
      );

      const tooltip = getTooltip(container);
      expect(tooltip).not.toBeVisible();

      const tooltipTriggerElement = showTooltip(container, treemapNodeChartMouseHoverTooltipSelector);

      expect(tooltip).toBeVisible();

      fireEvent.mouseOut(tooltipTriggerElement);

      expect(tooltip).not.toBeVisible();
    });

    it('should not display Tooltip when clicking on a Node', () => {
      const { container } = render(
        <Treemap width={1000} height={500} data={exampleTreemapData}>
          <Tooltip trigger="hover" />
        </Treemap>,
      );

      const tooltip = getTooltip(container);
      const tooltipTriggerElement = container.querySelector(treemapNodeChartMouseHoverTooltipSelector);
      expect(tooltip).not.toBeVisible();

      fireEvent.click(tooltipTriggerElement);

      expect(tooltip).not.toBeVisible();
    });
  });

  describe('with Tooltip trigger=click', () => {
    it('should display Tooltip on mouse enter on a Node and keep it on mouse leave', () => {
      const { container } = render(
        <Treemap width={1000} height={500} data={exampleTreemapData}>
          <Tooltip trigger="click" />
        </Treemap>,
      );

      const tooltip = getTooltip(container);
      expect(tooltip).not.toBeVisible();

      const tooltipTriggerElement = container.querySelector(treemapNodeChartMouseHoverTooltipSelector);
      fireEvent.click(tooltipTriggerElement);

      expect(tooltip).toBeVisible();

      fireEvent.click(tooltipTriggerElement);

      expect(tooltip).toBeVisible();
    });

    it('should do nothing on hover over Node', () => {
      const { container } = render(
        <Treemap width={1000} height={500} data={exampleTreemapData}>
          <Tooltip trigger="click" />
        </Treemap>,
      );

      const tooltip = getTooltip(container);
      showTooltip(container, treemapNodeChartMouseHoverTooltipSelector);
      expect(tooltip).not.toBeVisible();
    });
  });

  describe('Treemap layout context', () => {
    it('should set width and height and margin in state', () => {
      const sizeSpy = vi.fn();
      const viewBoxSpy = vi.fn();
      const marginSpy = vi.fn();
      const Comp = (): null => {
        const width = useChartWidth();
        const height = useChartHeight();
        sizeSpy({ width, height });
        viewBoxSpy(useViewBox());
        marginSpy(useMargin());
        return null;
      };
      render(
        <Treemap width={100} height={50}>
          <Customized component={<Comp />} />
        </Treemap>,
      );
      expect(marginSpy).toHaveBeenLastCalledWith({
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
      });
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
    const activeIndex = addToTreemapNodeIndex(4);
    expect(activeIndex).toEqual('children[4]');
    expect(treemapPayloadSearcher(computedRootNode, activeIndex)).toBe(computedRootNode.children[4]);
  });

  it('should return index for nested node and then look it up', () => {
    const level1 = computedRootNode.children[0];
    const activeIndex1 = addToTreemapNodeIndex(0);
    const level2 = level1.children[1];
    const activeIndex2 = addToTreemapNodeIndex(1, activeIndex1);
    expect(activeIndex2).toEqual('children[0]children[1]');
    expect(level1).toBeDefined();
    expect(level2).toBeDefined();
    expect(treemapPayloadSearcher(computedRootNode, activeIndex1)).toBe(level1);
    expect(treemapPayloadSearcher(computedRootNode, activeIndex2)).toBe(level2);
  });
});
