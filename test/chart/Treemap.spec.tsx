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
    expect(arg1).toEqual({
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
    });
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
    expect(arg1).toEqual({
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
    });
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
    expect(arg1).toEqual({
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
    });
  });
});
