import React from 'react';
import { afterEach, beforeEach, describe, test, expect, it, vi } from 'vitest';
import { render, fireEvent, within } from '@testing-library/react';
import { LabelList, RechartsThemeProvider, Tooltip, Treemap, XAxis, YAxis } from '../../src';
import { exampleTreemapData } from '../_data';
import { TreemapNode, addToTreemapNodeIndex, computeNode, treemapPayloadSearcher } from '../../src/chart/Treemap';
import { useChartHeight, useChartWidth, useMargin, useViewBox } from '../../src/context/chartLayoutContext';
import { getTooltip, showTooltip } from '../component/Tooltip/tooltipTestHelpers';
import { treemapNodeChartMouseHoverTooltipSelector } from '../component/Tooltip/tooltipMouseHoverSelectors';
import { assertNotNull } from '../helper/assertNotNull';
import { mockTouchingElement } from '../helper/mockTouchingElement';
import { Props as LabelProps } from '../../src/component/Label';

const multiLevelInsetData = [
  {
    name: 'Root A',
    children: [
      {
        name: 'A1',
        children: [{ name: 'A1a', value: 100 }],
      },
    ],
  },
];

const siblingGapData = [
  { name: 'Left', value: 100 },
  { name: 'Right', value: 100 },
];

describe('<Treemap />', () => {
  it.each([
    {
      description: 'node names by default',
      dataKey: undefined,
      expected: ['Tile: Left', 'Tile: Right'],
    },
    {
      description: 'names from the payload',
      dataKey: 'name',
      expected: ['Tile: Left', 'Tile: Right'],
    },
    {
      description: 'values from the payload',
      dataKey: 'value',
      expected: ['Tile: 100', 'Tile: 100'],
    },
  ])('renders explicit LabelList with $description', ({ dataKey, expected }) => {
    const { container } = render(
      <Treemap
        width={400}
        height={250}
        data={siblingGapData}
        isAnimationActive={false}
        nameKey="name"
        dataKey="value"
        label={false}
      >
        <LabelList dataKey={dataKey} formatter={value => `Tile: ${value}`} fill="black" />
      </Treemap>,
    );

    const labels = container.querySelectorAll('.recharts-label-list .recharts-label');

    // Explicit labels work even when automatic labels are disabled.
    // Only data tiles receive labels, not the synthetic root.
    expect(labels).toHaveLength(2);
    expect(Array.from(labels, label => label.textContent)).toEqual(expected);
    expect(container.querySelectorAll('.recharts-rectangle')).toHaveLength(3);
  });

  it('updates explicit LabelList entries after navigating into a nested tile', () => {
    const { container } = render(
      <Treemap
        width={400}
        height={250}
        data={[
          {
            name: 'Group',
            children: [{ name: 'Child', value: 100 }],
          },
        ]}
        isAnimationActive={false}
        nameKey="name"
        dataKey="value"
        type="nest"
        label={false}
      >
        <LabelList fill="black" />
      </Treemap>,
    );

    const readLabels = () =>
      Array.from(container.querySelectorAll('.recharts-label-list .recharts-label'), label => label.textContent);

    // Descendants are not labelled until their level is displayed.
    expect(readLabels()).toEqual(['Group']);

    const groupTile = container.querySelector('.recharts-treemap-depth-1 .recharts-rectangle');
    assertNotNull(groupTile);
    fireEvent.click(groupTile);

    expect(readLabels()).toEqual(['Child']);
  });

  it('updates built-in label visibility when the label prop changes', () => {
    const props = {
      width: 400,
      height: 250,
      data: siblingGapData,
      isAnimationActive: false,
      nameKey: 'name',
      dataKey: 'value',
    };

    const { container, rerender } = render(<Treemap {...props} />);
    const { queryByText } = within(container);

    // Default labels remain visible.
    expect(queryByText('Left')).toBeInTheDocument();
    expect(queryByText('Right')).toBeInTheDocument();

    rerender(<Treemap {...props} label={false} />);

    // Hiding labels must not remove the tiles.
    expect(queryByText('Left')).not.toBeInTheDocument();
    expect(queryByText('Right')).not.toBeInTheDocument();
    expect(container.querySelectorAll('.recharts-rectangle')).toHaveLength(3);

    rerender(<Treemap {...props} label />);

    // Labels can be enabled again without changing the data.
    expect(queryByText('Left')).toBeInTheDocument();
    expect(queryByText('Right')).toBeInTheDocument();
    expect(container.querySelectorAll('.recharts-rectangle')).toHaveLength(3);
  });

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

  test('uses the same drawing height for nest layout and surface', () => {
    const chartHeight = 250;
    const { container } = render(
      <Treemap
        width={500}
        height={chartHeight}
        data={exampleTreemapData}
        isAnimationActive={false}
        nameKey="name"
        dataKey="value"
        type="nest"
      />,
    );

    const depth0Rect = container.querySelector<SVGPathElement>('.recharts-treemap-depth-0 .recharts-rectangle');
    assertNotNull(depth0Rect);
    expect(depth0Rect.getAttribute('height')).toBe(String(chartHeight - 30));
  });

  test('renders nested children directly on top of parent when nodeInset is not set', () => {
    const { container } = render(
      <Treemap
        width={500}
        height={250}
        data={multiLevelInsetData}
        isAnimationActive={false}
        dataKey="value"
        nameKey="name"
      />,
    );

    const depth1Rect = container.querySelector<SVGRectElement>('.recharts-treemap-depth-1 .recharts-rectangle');
    const depth2Rect = container.querySelector<SVGRectElement>('.recharts-treemap-depth-2 .recharts-rectangle');
    assertNotNull(depth1Rect);
    assertNotNull(depth2Rect);

    expect(depth2Rect.getAttribute('x')).toBe(depth1Rect.getAttribute('x'));
    expect(depth2Rect.getAttribute('y')).toBe(depth1Rect.getAttribute('y'));
    expect(depth2Rect.getAttribute('width')).toBe(depth1Rect.getAttribute('width'));
    expect(depth2Rect.getAttribute('height')).toBe(depth1Rect.getAttribute('height'));
  });

  test('insets nested children when nodeInset is set', () => {
    const nodeInset = 8;
    const { container } = render(
      <Treemap
        width={500}
        height={250}
        data={multiLevelInsetData}
        isAnimationActive={false}
        dataKey="value"
        nameKey="name"
        nodeInset={nodeInset}
      />,
    );

    const depth1Rect = container.querySelector<SVGRectElement>('.recharts-treemap-depth-1 .recharts-rectangle');
    const depth2Rect = container.querySelector<SVGRectElement>('.recharts-treemap-depth-2 .recharts-rectangle');
    assertNotNull(depth1Rect);
    assertNotNull(depth2Rect);

    const depth1X = Number(depth1Rect.getAttribute('x'));
    const depth1Y = Number(depth1Rect.getAttribute('y'));
    const depth1Width = Number(depth1Rect.getAttribute('width'));
    const depth1Height = Number(depth1Rect.getAttribute('height'));
    const depth2X = Number(depth2Rect.getAttribute('x'));
    const depth2Y = Number(depth2Rect.getAttribute('y'));
    const depth2Width = Number(depth2Rect.getAttribute('width'));
    const depth2Height = Number(depth2Rect.getAttribute('height'));

    expect(depth2X).toBe(depth1X + nodeInset);
    expect(depth2Y).toBe(depth1Y + nodeInset);
    expect(depth2Width).toBe(depth1Width - nodeInset * 2);
    expect(depth2Height).toBe(depth1Height - nodeInset * 2);
  });

  test('renders sibling nodes without spacing when nodeGap is not set', () => {
    const { container } = render(
      <Treemap
        width={500}
        height={250}
        data={siblingGapData}
        isAnimationActive={false}
        dataKey="value"
        nameKey="name"
      />,
    );

    const depth1Rects = container.querySelectorAll<SVGRectElement>('.recharts-treemap-depth-1 .recharts-rectangle');
    expect(depth1Rects).toHaveLength(2);

    const firstRect = depth1Rects[0];
    const secondRect = depth1Rects[1];
    assertNotNull(firstRect);
    assertNotNull(secondRect);

    const firstX = Number(firstRect.getAttribute('x'));
    const firstY = Number(firstRect.getAttribute('y'));
    const firstWidth = Number(firstRect.getAttribute('width'));
    const firstHeight = Number(firstRect.getAttribute('height'));
    const secondX = Number(secondRect.getAttribute('x'));
    const secondY = Number(secondRect.getAttribute('y'));
    const secondWidth = Number(secondRect.getAttribute('width'));
    const secondHeight = Number(secondRect.getAttribute('height'));
    const gapX = Math.max(secondX - (firstX + firstWidth), firstX - (secondX + secondWidth), 0);
    const gapY = Math.max(secondY - (firstY + firstHeight), firstY - (secondY + secondHeight), 0);

    expect(Math.max(gapX, gapY)).toBe(0);
  });

  test('adds spacing between sibling nodes when nodeGap is set', () => {
    const nodeGap = 10;
    const { container } = render(
      <Treemap
        width={500}
        height={250}
        data={siblingGapData}
        isAnimationActive={false}
        dataKey="value"
        nameKey="name"
        nodeGap={nodeGap}
      />,
    );

    const depth1Rects = container.querySelectorAll<SVGRectElement>('.recharts-treemap-depth-1 .recharts-rectangle');
    expect(depth1Rects).toHaveLength(2);

    const firstRect = depth1Rects[0];
    const secondRect = depth1Rects[1];
    assertNotNull(firstRect);
    assertNotNull(secondRect);

    const firstX = Number(firstRect.getAttribute('x'));
    const firstY = Number(firstRect.getAttribute('y'));
    const firstWidth = Number(firstRect.getAttribute('width'));
    const firstHeight = Number(firstRect.getAttribute('height'));
    const secondX = Number(secondRect.getAttribute('x'));
    const secondY = Number(secondRect.getAttribute('y'));
    const secondWidth = Number(secondRect.getAttribute('width'));
    const secondHeight = Number(secondRect.getAttribute('height'));
    const gapX = Math.max(secondX - (firstX + firstWidth), firstX - (secondX + secondWidth), 0);
    const gapY = Math.max(secondY - (firstY + firstHeight), firstY - (secondY + secondHeight), 0);

    expect(Math.max(gapX, gapY)).toBe(nodeGap);
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
    expect(within(container).getByText('U')).toBeInTheDocument();
  });

  test('breadcrumb navigation allows going back to root', () => {
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

    // Initially at root level with many nodes
    const initialNodeCount = container.querySelectorAll('.recharts-rectangle').length;
    expect(initialNodeCount).toBeGreaterThan(4);

    // Click into a nested node
    const nodeWithChildren = getByText('A');
    fireEvent.click(nodeWithChildren);

    // Should now show fewer nodes (the children of A)
    expect(container.querySelectorAll('.recharts-rectangle').length).toBeLessThan(initialNodeCount);

    // Find and click the root breadcrumb to go back
    const breadcrumbWrapper = container.querySelector('.recharts-treemap-nest-index-wrapper');
    expect(breadcrumbWrapper).toBeInTheDocument();

    // The first breadcrumb should be "root"
    const rootBreadcrumb = breadcrumbWrapper?.querySelector('.recharts-treemap-nest-index-box');
    expect(rootBreadcrumb).toBeInTheDocument();
    if (rootBreadcrumb) {
      fireEvent.click(rootBreadcrumb);
    }

    // Should be back at root level with original node count
    expect(container.querySelectorAll('.recharts-rectangle').length).toBe(initialNodeCount);
  });

  test('keeps the same breadcrumb elements across re-renders', () => {
    const props = {
      data: exampleTreemapData,
      dataKey: 'value',
      height: 250,
      isAnimationActive: false,
      nameKey: 'name',
      type: 'nest' as const,
      width: 500,
    };
    const { container, getByText, rerender } = render(<Treemap {...props} />);

    fireEvent.click(getByText('A'));

    const before = Array.from(container.querySelectorAll('.recharts-treemap-nest-index-box'));
    expect(before).toHaveLength(2);

    rerender(<Treemap {...props} />);

    const after = Array.from(container.querySelectorAll('.recharts-treemap-nest-index-box'));
    expect(after).toHaveLength(2);
    // React must reuse the nodes rather than unmounting and recreating them: a breadcrumb that is
    // replaced between mousedown and mouseup never receives the click.
    expect(after[0]).toBe(before[0]);
    expect(after[1]).toBe(before[1]);
  });

  test('clicking current root cell in nest mode does not drill repeatedly', () => {
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

    fireEvent.click(getByText('A'));

    const breadcrumbCountBefore = container.querySelectorAll('.recharts-treemap-nest-index-box').length;
    const currentRootCell = container.querySelector<SVGPathElement>('.recharts-treemap-depth-0 .recharts-rectangle');
    assertNotNull(currentRootCell);

    fireEvent.click(currentRootCell);

    const breadcrumbCountAfter = container.querySelectorAll('.recharts-treemap-nest-index-box').length;
    expect(breadcrumbCountAfter).toBe(breadcrumbCountBefore);
  });

  test('does not render drill-down arrow on current root cell in nest mode', () => {
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

    fireEvent.click(getByText('A'));

    const rootLayer = container.querySelector('.recharts-treemap-depth-0');
    assertNotNull(rootLayer);
    expect(rootLayer.querySelector('.recharts-polygon')).not.toBeInTheDocument();
  });

  test('renders custom nestIndexContent when provided as function', () => {
    const customContent = vi.fn((item: TreemapNode, i: number) => (
      <span data-testid={`breadcrumb-${i}`}>Custom: {item.name || 'root'}</span>
    ));

    const { getByText, getByTestId } = render(
      <Treemap
        width={500}
        height={250}
        data={exampleTreemapData}
        isAnimationActive={false}
        nameKey="name"
        dataKey="value"
        type="nest"
        nestIndexContent={customContent}
      />,
    );

    // Click into a nested node to trigger breadcrumb render
    const nodeWithChildren = getByText('A');
    fireEvent.click(nodeWithChildren);

    // Custom content should be rendered
    expect(customContent).toHaveBeenCalled();
    expect(getByTestId('breadcrumb-0')).toBeInTheDocument();
    expect(getByTestId('breadcrumb-1')).toBeInTheDocument();
  });

  test('clicking leaf nodes in nest mode does not navigate', () => {
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

    const initialNodeCount = container.querySelectorAll('.recharts-rectangle').length;

    // Click into A first (which has children)
    const nodeWithChildren = getByText('A');
    fireEvent.click(nodeWithChildren);

    const nestedNodeCount = container.querySelectorAll('.recharts-rectangle').length;
    expect(nestedNodeCount).toBeLessThan(initialNodeCount);

    // Now try clicking U (a leaf node with no children)
    const leafNode = getByText('U');
    fireEvent.click(leafNode);

    // Node count should remain the same - clicking leaf doesn't navigate further
    expect(container.querySelectorAll('.recharts-rectangle').length).toBe(nestedNodeCount);
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
      assertNotNull(tooltipTriggerElement);
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
      assertNotNull(tooltipTriggerElement);
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
          <Comp />
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
      expect(sizeSpy).toHaveBeenCalledTimes(1);
      expect(viewBoxSpy).toHaveBeenCalledTimes(1);
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
    nameKey: 'name',
    nestedActiveTooltipIndex: undefined,
  });
  it('should return index for root node and then look it up', () => {
    expect(computedRootNode.children?.[4]).toBeDefined();
    const activeIndex = addToTreemapNodeIndex(4);
    expect(activeIndex).toEqual('children[4]');
    expect(treemapPayloadSearcher(computedRootNode, activeIndex)).toBe(computedRootNode.children?.[4]);
  });

  it('should return index for nested node and then look it up', () => {
    const level1 = computedRootNode.children?.[0];
    assertNotNull(level1);
    const activeIndex1 = addToTreemapNodeIndex(0);
    const level2 = level1.children?.[1];
    const activeIndex2 = addToTreemapNodeIndex(1, activeIndex1);
    expect(activeIndex2).toEqual('children[0]children[1]');
    expect(level2).toBeDefined();
    expect(treemapPayloadSearcher(computedRootNode, activeIndex1)).toBe(level1);
    expect(treemapPayloadSearcher(computedRootNode, activeIndex2)).toBe(level2);
  });
});

describe('<Treemap /> mouse events', () => {
  const data = [
    { name: 'A', size: 24593 },
    { name: 'B', size: 1302 },
    { name: 'C', size: 652 },
    { name: 'D', size: 636 },
    { name: 'E', size: 6703 },
  ];

  test('renders a treemap with basic data', () => {
    const { container } = render(<Treemap width={500} height={250} data={data} nameKey="name" dataKey="size" />);

    expect(container.querySelectorAll('.recharts-treemap-depth-1')).toHaveLength(data.length);
  });

  it('should call onMouseEnter with correct arguments', () => {
    const onMouseEnter = vi.fn();
    const onMouseLeave = vi.fn();
    const onClick = vi.fn();

    const { container } = render(
      <Treemap
        width={500}
        height={250}
        data={data}
        nameKey="name"
        dataKey="size"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        isAnimationActive={false}
      />,
    );

    const firstNode = container.querySelectorAll('.recharts-treemap-depth-1 g')[0];
    expect(firstNode).toBeInTheDocument();

    fireEvent.mouseEnter(firstNode);
    expect(onMouseEnter).toHaveBeenCalled();
    expect(onMouseEnter).toHaveBeenCalledTimes(1);
    expect(onMouseEnter.mock.calls[0]).toHaveLength(2);
    const arg1 = onMouseEnter.mock.calls[0][0];
    // when I use `toHaveBeenLastCalledWith` then vitest fails with OOME when trying to match the synthetic event object
    // expect(onMouseEnter).toHaveBeenLastCalledWith({
    const expectedTreemapNode: TreemapNode = {
      id: expect.stringMatching(/^recharts-treemap-+/),
      width: 363,
      height: 250,
      name: 'A',
      size: 24593,
      children: null,
      value: 24593,
      depth: 1,
      index: 0,
      tooltipIndex: 'children[0]',
      area: 90719.61872159594,
      x: 0,
      y: 0,
      root: {
        children: [
          {
            name: 'A',
            size: 24593,
            children: null,
            value: 24593,
            depth: 1,
            index: 0,
            tooltipIndex: 'children[0]',
            area: 90719.61872159594,
            x: 0,
            y: 0,
            width: 363,
            height: 250,
          },
          {
            name: 'B',
            size: 1302,
            children: null,
            value: 1302,
            depth: 1,
            index: 1,
            tooltipIndex: 'children[1]',
            area: 4802.868441244172,
            x: 363,
            y: 0,
            height: 70,
            width: 69,
          },
          {
            name: 'C',
            size: 652,
            children: null,
            value: 652,
            depth: 1,
            index: 2,
            tooltipIndex: 'children[2]',
            area: 2405.1230596706605,
            x: 432,
            y: 0,
            height: 70,
            width: 34,
          },
          {
            name: 'D',
            size: 636,
            children: null,
            value: 636,
            depth: 1,
            index: 3,
            tooltipIndex: 'children[3]',
            area: 2346.1016348934663,
            x: 466,
            y: 0,
            height: 70,
            width: 34,
          },
          {
            name: 'E',
            size: 6703,
            children: null,
            value: 6703,
            depth: 1,
            index: 4,
            tooltipIndex: 'children[4]',
            area: 24726.28814259576,
            x: 363,
            y: 70,
            height: 180,
            width: 137,
          },
        ],
        x: 0,
        y: 0,
        width: 500,
        height: 250,
        name: '',
        value: 33886,
        depth: 0,
        index: 0,
        tooltipIndex: '',
      },
    };
    expect(arg1).toEqual(expectedTreemapNode);
    const arg2 = onMouseEnter.mock.calls[0][1];
    expect(arg2.type).toBe('mouseenter');
    expect(arg2.target).toBeInstanceOf(SVGElement);
    expect(arg2.target.tagName).toBe('g');
    expect(arg2.target.classList.toString()).toEqual('recharts-layer');

    expect(onMouseLeave).not.toHaveBeenCalled();
    expect(onClick).not.toHaveBeenCalled();
  });

  it('should call onMouseLeave when moving between nodes', () => {
    const onMouseLeave = vi.fn();
    const onMouseEnter = vi.fn();

    const { container } = render(
      <Treemap
        width={500}
        height={250}
        data={data}
        nameKey="name"
        dataKey="size"
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
        isAnimationActive={false}
      />,
    );

    const nodes = container.querySelectorAll('.recharts-treemap-depth-1 g');
    expect(nodes[0]).toBeInTheDocument();
    expect(nodes[1]).toBeInTheDocument();

    fireEvent.mouseEnter(nodes[0]);
    expect(onMouseEnter).toHaveBeenCalledTimes(1);

    fireEvent.mouseLeave(nodes[0]);
    expect(onMouseLeave).toHaveBeenCalledTimes(1);

    fireEvent.mouseEnter(nodes[1]);
    expect(onMouseEnter).toHaveBeenCalledTimes(2);

    // should still be called only once
    expect(onMouseLeave).toHaveBeenCalledTimes(1);

    // should be called with two arguments
    expect(onMouseLeave.mock.calls[0]).toHaveLength(2);
    const arg1 = onMouseLeave.mock.calls[0][0];
    const expectedNode: TreemapNode = {
      id: expect.stringMatching(/^recharts-treemap-+/),
      area: 90719.61872159594,
      children: null,
      depth: 1,
      height: 250,
      index: 0,
      name: 'A',
      size: 24593,
      tooltipIndex: 'children[0]',
      value: 24593,
      width: 363,
      x: 0,
      y: 0,
      root: {
        children: [
          {
            name: 'A',
            size: 24593,
            children: null,
            value: 24593,
            depth: 1,
            index: 0,
            tooltipIndex: 'children[0]',
            area: 90719.61872159594,
            x: 0,
            y: 0,
            width: 363,
            height: 250,
          },
          {
            name: 'B',
            size: 1302,
            children: null,
            value: 1302,
            depth: 1,
            index: 1,
            tooltipIndex: 'children[1]',
            area: 4802.868441244172,
            x: 363,
            y: 0,
            height: 70,
            width: 69,
          },
          {
            name: 'C',
            size: 652,
            children: null,
            value: 652,
            depth: 1,
            index: 2,
            tooltipIndex: 'children[2]',
            area: 2405.1230596706605,
            x: 432,
            y: 0,
            height: 70,
            width: 34,
          },
          {
            name: 'D',
            size: 636,
            children: null,
            value: 636,
            depth: 1,
            index: 3,
            tooltipIndex: 'children[3]',
            area: 2346.1016348934663,
            x: 466,
            y: 0,
            height: 70,
            width: 34,
          },
          {
            name: 'E',
            size: 6703,
            children: null,
            value: 6703,
            depth: 1,
            index: 4,
            tooltipIndex: 'children[4]',
            area: 24726.28814259576,
            x: 363,
            y: 70,
            height: 180,
            width: 137,
          },
        ],
        x: 0,
        y: 0,
        width: 500,
        height: 250,
        name: '',
        value: 33886,
        depth: 0,
        index: 0,
        tooltipIndex: '',
      },
    };
    expect(arg1).toEqual(expectedNode);
    const arg2 = onMouseLeave.mock.calls[0][1];
    expect(arg2.type).toBe('mouseleave');
    expect(arg2.target).toBeInstanceOf(SVGElement);
    expect(arg2.target.tagName).toBe('g');
    expect(arg2.target.classList.toString()).toEqual('recharts-layer');
  });

  it('should call onClick with correct arguments', () => {
    const onClick = vi.fn();
    const { container } = render(
      <Treemap
        width={500}
        height={250}
        data={data}
        nameKey="name"
        dataKey="size"
        onClick={onClick}
        isAnimationActive={false}
      />,
    );

    const firstNode = container.querySelectorAll('.recharts-treemap-depth-1 g')[0];
    expect(firstNode).toBeInTheDocument();

    fireEvent.click(firstNode);
    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick.mock.calls[0]).toHaveLength(1); // this doesn't pass the event? why?
    const arg1 = onClick.mock.calls[0][0];
    const expectedNode: TreemapNode = {
      id: expect.stringMatching(/^recharts-treemap-+/),
      area: 90719.61872159594,
      children: null,
      depth: 1,
      height: 250,
      index: 0,
      name: 'A',
      root: {
        children: [
          {
            area: 90719.61872159594,
            children: null,
            depth: 1,
            height: 250,
            index: 0,
            name: 'A',
            size: 24593,
            tooltipIndex: 'children[0]',
            value: 24593,
            width: 363,
            x: 0,
            y: 0,
          },
          {
            area: 4802.868441244172,
            children: null,
            depth: 1,
            height: 70,
            index: 1,
            name: 'B',
            size: 1302,
            tooltipIndex: 'children[1]',
            value: 1302,
            width: 69,
            x: 363,
            y: 0,
          },
          {
            area: 2405.1230596706605,
            children: null,
            depth: 1,
            height: 70,
            index: 2,
            name: 'C',
            size: 652,
            tooltipIndex: 'children[2]',
            value: 652,
            width: 34,
            x: 432,
            y: 0,
          },
          {
            area: 2346.1016348934663,
            children: null,
            depth: 1,
            height: 70,
            index: 3,
            name: 'D',
            size: 636,
            tooltipIndex: 'children[3]',
            value: 636,
            width: 34,
            x: 466,
            y: 0,
          },
          {
            area: 24726.28814259576,
            children: null,
            depth: 1,
            height: 180,
            index: 4,
            name: 'E',
            size: 6703,
            tooltipIndex: 'children[4]',
            value: 6703,
            width: 137,
            x: 363,
            y: 70,
          },
        ],
        depth: 0,
        height: 250,
        index: 0,
        name: '',
        tooltipIndex: '',
        value: 33886,
        width: 500,
        x: 0,
        y: 0,
      },
      size: 24593,
      tooltipIndex: 'children[0]',
      value: 24593,
      width: 363,
      x: 0,
      y: 0,
    };
    expect(arg1).toEqual(expectedNode);
  });

  it('should not call touch event handlers', () => {
    mockTouchingElement('0', 'size');
    const onTouchMove = vi.fn();
    const onTouchEnd = vi.fn();
    const { container } = render(
      <Treemap
        width={500}
        height={250}
        data={data}
        nameKey="name"
        dataKey="size"
        // @ts-expect-error typescript is correct here - indeed Treemap does not fire touch events. It shows Tooltip internally but doesn't allow external handlers
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        isAnimationActive={false}
      />,
    );

    const firstNode = container.querySelectorAll('.recharts-treemap-depth-1 g')[0];
    expect(firstNode).toBeInTheDocument();

    fireEvent.touchMove(firstNode, { touches: [{ clientX: 200, clientY: 200 }] });
    expect(onTouchMove).toHaveBeenCalledTimes(0);
  });
});

describe('<Treemap /> shared labels', () => {
  const props = {
    width: 400,
    height: 250,
    data: siblingGapData,
    isAnimationActive: false,
    nameKey: 'name',
    dataKey: 'value',
  };

  function readLabels(container: Element) {
    return Array.from(container.querySelectorAll('.recharts-label-list .recharts-label'));
  }

  it('renders default names through LabelList without a synthetic-root label', () => {
    const { container } = render(<Treemap {...props} />);
    expect(readLabels(container).map(label => label.textContent)).toEqual(['Left', 'Right']);
    expect(container.querySelectorAll('.recharts-rectangle')).toHaveLength(3);
  });

  it('supports object labels with dataKey, formatter, position and explicit fill', () => {
    const { container } = render(
      <Treemap
        {...props}
        label={{
          dataKey: 'value',
          formatter: value => `Value: ${value}`,
          position: 'inside',
          fill: 'purple',
        }}
      />,
    );
    expect(readLabels(container).map(label => label.textContent)).toEqual(['Value: 100', 'Value: 100']);
    expect(readLabels(container).map(label => label.getAttribute('fill'))).toEqual(['purple', 'purple']);
  });

  it('supports function labels with values and calculated view boxes', () => {
    const custom = vi.fn(({ x, y, value }: LabelProps) => (
      <text x={x} y={y} data-testid="custom-label">
        {value}
      </text>
    ));
    const { container } = render(<Treemap {...props} label={custom} />);
    expect(Array.from(container.querySelectorAll('[data-testid="custom-label"]'), label => label.textContent)).toEqual([
      'Left',
      'Right',
    ]);
    expect(custom.mock.calls[0][0]).toEqual(
      expect.objectContaining({
        value: 'Left',
        viewBox: expect.objectContaining({ x: 0, y: 0 }),
      }),
    );
  });

  it('supports a React element label', () => {
    function Custom({ x, y, value }: LabelProps) {
      return <text x={x} y={y} data-testid="element-label">{`Custom: ${value}`}</text>;
    }
    const { container } = render(<Treemap {...props} label={<Custom />} />);
    expect(Array.from(container.querySelectorAll('[data-testid="element-label"]'), label => label.textContent)).toEqual(
      ['Custom: Left', 'Custom: Right'],
    );
  });

  it('replaces defaults with explicit LabelList children, including inside fragments', () => {
    const { container, rerender } = render(
      <Treemap {...props}>
        <>
          <LabelList dataKey="value" />
        </>
      </Treemap>,
    );
    expect(readLabels(container).map(label => label.textContent)).toEqual(['100', '100']);
    rerender(
      <Treemap {...props} label>
        <LabelList dataKey="value" />
      </Treemap>,
    );
    expect(readLabels(container).map(label => label.textContent)).toEqual(['Left', 'Right', '100', '100']);
  });

  it('size-filters default labels but not explicitly configured labels', () => {
    const { container, rerender } = render(<Treemap {...props} width={10} height={10} />);
    expect(readLabels(container)).toHaveLength(0);
    rerender(<Treemap {...props} width={10} height={10} label={{ fill: 'black' }} />);
    expect(readLabels(container)).toHaveLength(2);
  });

  it('recomputes names when nameKey changes without replacing data', () => {
    const data = [{ name: 'Original', title: 'Updated', value: 100 }];
    const { container, rerender } = render(<Treemap {...props} data={data} />);
    expect(readLabels(container).map(label => label.textContent)).toEqual(['Original']);
    rerender(<Treemap {...props} data={data} nameKey="title" />);
    expect(readLabels(container).map(label => label.textContent)).toEqual(['Updated']);
  });

  it('does not add default labels to custom tile content', () => {
    const { container } = render(<Treemap {...props} content={() => <rect data-testid="custom-tile" />} />);
    expect(readLabels(container)).toHaveLength(0);
    expect(container.querySelectorAll('[data-testid="custom-tile"]')).toHaveLength(3);
  });

  it('dispatches label hover to Tooltip and public hover callbacks', () => {
    const onMouseEnter = vi.fn();
    const onMouseLeave = vi.fn();
    const { container } = render(
      <Treemap {...props} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <Tooltip />
      </Treemap>,
    );
    const label = readLabels(container)[0];
    assertNotNull(label);
    fireEvent.mouseEnter(label);
    expect(getTooltip(container)).toBeVisible();
    expect(onMouseEnter).toHaveBeenCalledTimes(1);
    expect(onMouseEnter.mock.calls[0][0].name).toBe('Left');
    fireEvent.mouseLeave(label);
    expect(onMouseLeave).toHaveBeenCalledTimes(1);
  });

  it('dispatches label clicks to a click-triggered Tooltip exactly once', () => {
    const onClick = vi.fn();
    const { container } = render(
      <Treemap {...props} onClick={onClick}>
        <Tooltip trigger="click" />
      </Treemap>,
    );
    const label = readLabels(container)[0];
    assertNotNull(label);
    fireEvent.click(label);
    expect(getTooltip(container)).toBeVisible();
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick.mock.calls[0][0].name).toBe('Left');
  });

  it.each(['label', 'tile'])('navigates from a %s with only one onClick callback', target => {
    const onClick = vi.fn();
    const { container } = render(
      <Treemap
        {...props}
        type="nest"
        onClick={onClick}
        data={[{ name: 'Group', children: [{ name: 'Child', value: 100 }] }]}
      />,
    );
    const trigger =
      target === 'label'
        ? readLabels(container)[0]
        : container.querySelector('.recharts-treemap-depth-1 .recharts-rectangle');
    assertNotNull(trigger);
    fireEvent.click(trigger);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick.mock.calls[0][0].name).toBe('Group');
    expect(readLabels(container).map(label => label.textContent)).toEqual(['Child']);
    const breadcrumb = container.querySelector('.recharts-treemap-nest-index-box');
    assertNotNull(breadcrumb);
    fireEvent.click(breadcrumb);
    expect(readLabels(container).map(label => label.textContent)).toEqual(['Group']);
  });

  it('resolves label themes by branch rather than by flattened label index', () => {
    const { container } = render(
      <RechartsThemeProvider
        value={{
          graphicalItems: [
            { fill: 'red', label: { style: { fill: 'purple' } } },
            { fill: 'green', label: { style: { fill: 'orange' } } },
          ],
        }}
      >
        <Treemap
          {...props}
          data={[
            { name: 'Parent A', children: [{ name: 'Child A', value: 100 }] },
            { name: 'Parent B', children: [{ name: 'Child B', value: 100 }] },
          ]}
        />
      </RechartsThemeProvider>,
    );
    expect(readLabels(container).map(label => [label.textContent, label.getAttribute('fill')])).toEqual([
      ['Parent A', 'purple'],
      ['Child A', 'purple'],
      ['Parent B', 'orange'],
      ['Child B', 'orange'],
    ]);
  });

  it('uses the page background as the automatic inside-label color', () => {
    const { container } = render(
      <RechartsThemeProvider value={{ graphicalItems: [{ fill: 'navy' }], pageBackground: 'white' }}>
        <Treemap {...props} />
      </RechartsThemeProvider>,
    );
    expect(readLabels(container).map(label => label.getAttribute('fill'))).toEqual(['white', 'white']);
  });

  it('lets explicit label fill override the graphical-item label theme', () => {
    const { container } = render(
      <RechartsThemeProvider value={{ graphicalItems: [{ fill: 'navy', label: { style: { fill: 'purple' } } }] }}>
        <Treemap {...props} label={{ fill: 'orange' }} />
      </RechartsThemeProvider>,
    );
    expect(readLabels(container).map(label => label.getAttribute('fill'))).toEqual(['orange', 'orange']);
  });
});

// Regression coverage for Treemap-specific label placement and event boundaries.
describe('<Treemap /> label rendering boundaries', () => {
  const props = {
    width: 400,
    height: 250,
    nameKey: 'name',
    dataKey: 'value',
    isAnimationActive: false,
  };

  it('keeps a parent default label before its full-size child tile', () => {
    const { container } = render(
      <Treemap {...props} data={[{ name: 'Parent', children: [{ name: 'Child', value: 100 }] }]} />,
    );
    const parent = container.querySelector('.recharts-treemap-depth-1 .recharts-label');
    const childTile = container.querySelector('.recharts-treemap-depth-2 .recharts-rectangle');
    assertNotNull(parent);
    assertNotNull(childTile);
    expect(parent.textContent).toBe('Parent');
    expect(parent.compareDocumentPosition(childTile) & Node.DOCUMENT_POSITION_FOLLOWING).not.toBe(0);
  });

  it('puts default labels inside the same animated layer as their tile', () => {
    const { container } = render(
      <Treemap {...props} data={[{ name: 'Leaf', value: 100 }]} isAnimationActive animationBegin={1000} />,
    );
    const label = container.querySelector('.recharts-treemap-depth-1 .recharts-label');
    const tile = container.querySelector('.recharts-treemap-depth-1 .recharts-rectangle');
    assertNotNull(label);
    assertNotNull(tile);
    const animatedLayer = tile.parentElement?.parentElement;
    assertNotNull(animatedLayer);
    expect(animatedLayer.contains(label)).toBe(true);
    expect(animatedLayer.getAttribute('style')).toContain('translate: -400px 0px');
  });

  it.each(['function', 'element'])('keeps chart interactions for %s content that does not forward handlers', kind => {
    const onClick = vi.fn();
    const onMouseEnter = vi.fn();
    const Custom = ({ value, x, y }: LabelProps) => (
      <text x={x} y={y} data-testid="interactive-custom-label">
        {value}
      </text>
    );
    const { container } = render(
      <Treemap
        {...props}
        data={[{ name: 'Group', children: [{ name: 'Child', value: 100 }] }]}
        type="nest"
        label={kind === 'function' ? Custom : <Custom />}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
      >
        <Tooltip />
      </Treemap>,
    );
    const label = container.querySelector('[data-testid="interactive-custom-label"]');
    assertNotNull(label);
    fireEvent.mouseEnter(label);
    expect(getTooltip(container)).toBeVisible();
    expect(onMouseEnter).toHaveBeenCalledTimes(1);
    fireEvent.click(label);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(container.querySelector('[data-testid="interactive-custom-label"]')?.textContent).toBe('Child');
  });

  it('composes configured label handlers with chart callbacks', () => {
    const labelClick = vi.fn();
    const chartClick = vi.fn();
    const labelHover = vi.fn();
    const chartHover = vi.fn();
    const { container } = render(
      <Treemap
        {...props}
        data={[{ name: 'Leaf', value: 100 }]}
        label={{ onClick: labelClick, onMouseEnter: labelHover }}
        onClick={chartClick}
        onMouseEnter={chartHover}
      />,
    );
    const label = container.querySelector('.recharts-label');
    assertNotNull(label);
    fireEvent.mouseEnter(label);
    fireEvent.click(label);
    expect(labelHover).toHaveBeenCalledTimes(1);
    expect(chartHover).toHaveBeenCalledTimes(1);
    expect(labelClick).toHaveBeenCalledTimes(1);
    expect(chartClick).toHaveBeenCalledTimes(1);
  });

  it('animates explicitly configured labels in their overlay layer', () => {
    const { container } = render(
      <Treemap {...props} data={[{ name: 'Leaf', value: 100 }]} isAnimationActive animationBegin={1000}>
        <LabelList dataKey="name" />
      </Treemap>,
    );
    const layer = container.querySelector('.recharts-treemap-configured-label');
    assertNotNull(layer);
    expect(layer.getAttribute('style')).toContain('translate: -400px 0px');
    expect(layer.textContent).toBe('Leaf');
  });
});

describe('<Treemap /> label background animation regressions', () => {
  const props = {
    width: 400,
    height: 250,
    data: [{ name: 'Leaf', value: 100 }],
    isAnimationActive: true,
    animationBegin: 1000,
    animationDuration: 3000,
  };
  const labelSettings = {
    position: 'inside' as const,
    angle: 30,
    background: { fill: 'white', stroke: 'black', style: { opacity: 0.75 } },
  };
  let getBBoxDescriptor: PropertyDescriptor | undefined;

  beforeEach(() => {
    getBBoxDescriptor = Object.getOwnPropertyDescriptor(SVGElement.prototype, 'getBBox');
    Object.defineProperty(SVGElement.prototype, 'getBBox', {
      configurable: true,
      value: () => ({ x: 180, y: 115, width: 40, height: 20 }),
    });
  });

  afterEach(() => {
    if (getBBoxDescriptor == null) {
      Reflect.deleteProperty(SVGElement.prototype, 'getBBox');
    } else {
      Object.defineProperty(SVGElement.prototype, 'getBBox', getBBoxDescriptor);
    }
  });

  it.each(['implicit', 'explicit'])('moves a portaled %s label background with its text', kind => {
    const { container } = render(
      <Treemap {...props} label={kind === 'implicit' ? labelSettings : false}>
        {kind === 'explicit' ? <LabelList {...labelSettings} /> : null}
      </Treemap>,
    );
    const layer = container.querySelector<SVGGElement>('.recharts-treemap-configured-label');
    const background = container.querySelector<SVGRectElement>('.recharts-text-background');
    const text = container.querySelector<SVGTextElement>('.recharts-label');
    assertNotNull(layer);
    assertNotNull(background);
    assertNotNull(text);
    expect(layer.contains(text)).toBe(true);
    expect(layer.contains(background)).toBe(false);
    expect(layer.style.translate).toBe('-400px 0px');
    expect(background.style.translate).toBe(layer.style.translate);
    expect(background.style.transition).toBe(layer.style.transition);
    expect(background.style.opacity).toBe('0.75');
    expect(background.getAttribute('fill')).toBe('white');
    expect(background.getAttribute('stroke')).toBe('black');
    expect(text.getAttribute('transform')).toContain('rotate(30');
    expect(background.getAttribute('transform')).toBe(text.getAttribute('transform'));
  });

  it('does not translate an inline background twice', () => {
    const { container } = render(
      <Treemap {...props} label={false}>
        <LabelList {...labelSettings} zIndex={0} />
      </Treemap>,
    );
    const layer = container.querySelector<SVGGElement>('.recharts-treemap-configured-label');
    const background = container.querySelector<SVGRectElement>('.recharts-text-background');
    assertNotNull(layer);
    assertNotNull(background);
    expect(layer.style.translate).toBe('-400px 0px');
    expect(layer.contains(background)).toBe(true);
    expect(background.style.translate).toBe('');
  });

  it('retains an explicit background zIndex while synchronizing translation', () => {
    const { container } = render(
      <Treemap {...props} label={{ position: 'inside', background: { zIndex: 500, fill: 'white' } }} />,
    );
    const background = container.querySelector<SVGRectElement>('.recharts-zIndex-layer_500 .recharts-text-background');
    const layer = container.querySelector<SVGGElement>('.recharts-treemap-configured-label');
    assertNotNull(background);
    assertNotNull(layer);
    expect(background.style.translate).toBe(layer.style.translate);
    expect(background.style.translate).toBe('-400px 0px');
  });

  it('synchronizes backgrounds enabled by a graphical-item theme', () => {
    const { container } = render(
      <RechartsThemeProvider value={{ graphicalItems: [{ fill: 'navy', label: { background: true } }] }}>
        <Treemap {...props} label={{ position: 'inside' }} />
      </RechartsThemeProvider>,
    );
    const background = container.querySelector<SVGRectElement>('.recharts-text-background');
    const layer = container.querySelector<SVGGElement>('.recharts-treemap-configured-label');
    assertNotNull(background);
    assertNotNull(layer);
    expect(background.style.translate).toBe(layer.style.translate);
    expect(background.style.translate).toBe('-400px 0px');
  });

  it('synchronizes default-label backgrounds with an explicit themed zIndex', () => {
    const { container } = render(
      <RechartsThemeProvider value={{ graphicalItems: [{ fill: 'navy', label: { background: { zIndex: 500 } } }] }}>
        <Treemap {...props} />
      </RechartsThemeProvider>,
    );
    const background = container.querySelector<SVGRectElement>('.recharts-zIndex-layer_500 .recharts-text-background');
    assertNotNull(background);
    expect(background.style.translate).toBe('-400px 0px');
  });

  it('removes the background translation when animation is disabled', () => {
    const { container, rerender } = render(<Treemap {...props} label={labelSettings} />);
    rerender(<Treemap {...props} label={labelSettings} isAnimationActive={false} />);
    const background = container.querySelector<SVGRectElement>('.recharts-text-background');
    const layer = container.querySelector<SVGGElement>('.recharts-treemap-configured-label');
    assertNotNull(background);
    assertNotNull(layer);
    expect(layer.style.translate).toBe('0px 0px');
    expect(background.style.translate).toBe(layer.style.translate);
    expect(background.style.transition).toBe('');
  });
});

describe('<Treemap /> typography theme without graphical-item styles', () => {
  it.each([
    { typography: { fill: 'purple' }, expected: 'purple' },
    { typography: { color: 'green' }, expected: 'green' },
    { typography: { fill: 'purple', color: 'green' }, expected: 'purple' },
  ])('uses $expected for default labels with an empty graphicalItems palette', ({ typography, expected }) => {
    const { container } = render(
      <RechartsThemeProvider value={{ graphicalItems: [], typography }}>
        <Treemap width={400} height={250} data={siblingGapData} isAnimationActive={false} />
      </RechartsThemeProvider>,
    );
    const labels = container.querySelectorAll('.recharts-label');
    expect(labels).toHaveLength(2);
    expect(Array.from(labels, label => label.getAttribute('fill'))).toEqual([expected, expected]);
  });
});

describe('<Treemap /> touch label regressions', () => {
  const props = {
    width: 400,
    height: 250,
    data: siblingGapData,
    isAnimationActive: false,
  };
  let elementFromPointDescriptor: PropertyDescriptor | undefined;

  beforeEach(() => {
    elementFromPointDescriptor = Object.getOwnPropertyDescriptor(document, 'elementFromPoint');
  });

  afterEach(() => {
    if (elementFromPointDescriptor == null) {
      Reflect.deleteProperty(document, 'elementFromPoint');
    } else {
      Object.defineProperty(document, 'elementFromPoint', elementFromPointDescriptor);
    }
  });

  it.each(['default', 'configured', 'custom'])('finds the item from a %s label tspan', kind => {
    const custom = ({ x, y, value }: LabelProps) => (
      <text x={x} y={y}>
        <tspan>{value}</tspan>
      </text>
    );
    let label: React.ComponentProps<typeof Treemap>['label'] = true;
    if (kind === 'custom') {
      label = custom;
    } else if (kind === 'configured') {
      label = { position: 'inside' };
    }
    const { container } = render(
      <Treemap {...props} label={label}>
        <Tooltip />
      </Treemap>,
    );
    const spans = container.querySelectorAll('.recharts-label-list tspan');
    expect(spans).toHaveLength(2);
    const surface = container.querySelector('.recharts-surface');
    assertNotNull(surface);
    const hit = vi.fn();
    Object.defineProperty(document, 'elementFromPoint', { configurable: true, value: hit });

    hit.mockReturnValue(spans[0]);
    fireEvent.touchMove(surface, { touches: [{ clientX: 50, clientY: 50 }] });
    const tooltip = getTooltip(container);
    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveTextContent('Left');

    hit.mockReturnValue(spans[1]);
    fireEvent.touchMove(surface, { touches: [{ clientX: 300, clientY: 50 }] });
    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveTextContent('Right');
  });

  it('supports the existing detached elementFromPoint test helper', () => {
    const { container } = render(
      <Treemap {...props}>
        <Tooltip />
      </Treemap>,
    );
    const surface = container.querySelector('.recharts-surface');
    assertNotNull(surface);
    mockTouchingElement('children[0]', 'my-item-id');
    fireEvent.touchMove(surface, { touches: [{ clientX: 50, clientY: 50 }] });
    const tooltip = getTooltip(container);
    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveTextContent('Left');
  });

  it('ignores a hit belonging to another chart', () => {
    const { container } = render(
      <>
        <Treemap {...props}>
          <Tooltip />
        </Treemap>
        <Treemap {...props}>
          <Tooltip />
        </Treemap>
      </>,
    );
    const surfaces = container.querySelectorAll('.recharts-surface');
    const firstSurface = surfaces[0];
    const secondSurface = surfaces[1];
    assertNotNull(firstSurface);
    assertNotNull(secondSurface);
    const otherLabel = secondSurface.querySelector('tspan');
    assertNotNull(otherLabel);
    Object.defineProperty(document, 'elementFromPoint', {
      configurable: true,
      value: () => otherLabel,
    });
    fireEvent.touchMove(firstSurface, { touches: [{ clientX: 50, clientY: 50 }] });
    const firstChart = firstSurface.closest<HTMLDivElement>('.recharts-wrapper');
    assertNotNull(firstChart);
    expect(getTooltip(firstChart)).not.toBeVisible();
  });
});
