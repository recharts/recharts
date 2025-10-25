import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { Customized, Sankey, Tooltip, XAxis, YAxis } from '../../src';
import { exampleSankeyData } from '../_data';
import { useChartHeight, useChartWidth, useViewBox } from '../../src/context/chartLayoutContext';
import { useAppSelector } from '../../src/state/hooks';
import { assertNotNull } from '../helper/assertNotNull';
import {
  sankeyLinkMouseHoverTooltipSelector,
  sankeyNodeMouseHoverTooltipSelector,
} from '../component/Tooltip/tooltipMouseHoverSelectors';
import { getTooltip, showTooltip } from '../component/Tooltip/tooltipTestHelpers';

import { useClipPathId } from '../../src/container/ClipPathProvider';
import { expectLastCalledWith } from '../helper/expectLastCalledWith';
import { mockTouchingElement } from '../helper/mockTouchingElement';

describe('<Sankey />', () => {
  it('renders 48 nodes in simple SankeyChart', () => {
    const { container } = render(<Sankey width={1000} height={500} data={exampleSankeyData} />);

    expect(container.querySelectorAll('.recharts-sankey-node')).toHaveLength(48);
  });

  it('renders 68 links in simple SankeyChart', () => {
    const { container } = render(<Sankey width={1000} height={500} data={exampleSankeyData} />);

    expect(container.querySelectorAll('.recharts-sankey-link')).toHaveLength(68);
  });

  it('re-renders links and nodes when data changes', () => {
    const { container, rerender } = render(<Sankey width={1000} height={500} data={exampleSankeyData} />);

    expect(container.querySelectorAll('.recharts-sankey-node')).toHaveLength(48);
    expect(container.querySelectorAll('.recharts-sankey-link')).toHaveLength(68);

    const nextData = {
      nodes: [...exampleSankeyData.nodes, { name: 'New Node' }],
      links: [...exampleSankeyData.links, { source: 2, target: exampleSankeyData.nodes.length, value: 100.0 }],
    };

    rerender(<Sankey width={1000} height={500} data={nextData} />);

    expect(container.querySelectorAll('.recharts-sankey-node')).toHaveLength(49);
    expect(container.querySelectorAll('.recharts-sankey-link')).toHaveLength(69);
  });

  describe('Sankey layout context', () => {
    it('should provide viewBox, but not clipPathId', () => {
      const clipPathSpy = vi.fn();
      const viewBoxSpy = vi.fn();
      const Comp = (): null => {
        clipPathSpy(useClipPathId());
        viewBoxSpy(useViewBox());
        return null;
      };
      render(
        <Sankey width={1000} height={500} data={exampleSankeyData}>
          <Customized component={<Comp />} />
        </Sankey>,
      );
      expect(clipPathSpy).toHaveBeenLastCalledWith(undefined);
      expect(viewBoxSpy).toHaveBeenLastCalledWith({ x: 0, y: 0, width: 1000, height: 500 });
      expect(viewBoxSpy).toHaveBeenCalledTimes(1);
    });

    it('should set width and height in context', () => {
      const widthSpy = vi.fn();
      const heightSpy = vi.fn();
      const Comp = (): null => {
        widthSpy(useChartWidth());
        heightSpy(useChartHeight());
        return null;
      };
      render(
        <Sankey width={100} height={50} data={exampleSankeyData}>
          <Customized component={<Comp />} />
        </Sankey>,
      );
      expect(widthSpy).toHaveBeenLastCalledWith(100);
      expect(heightSpy).toHaveBeenLastCalledWith(50);
      expect(widthSpy).toHaveBeenCalledTimes(1);
      expect(heightSpy).toHaveBeenCalledTimes(1);
    });

    it('should not throw if axes are provided - they are not an allowed child anyway', () => {
      expect(() =>
        render(
          <Sankey width={1000} height={500} data={exampleSankeyData}>
            <XAxis dataKey="number" type="number" />
            <YAxis type="category" dataKey="name" />
          </Sankey>,
        ),
      ).not.toThrow();
    });
  });

  describe('with Tooltip trigger=hover', () => {
    it('should display Tooltip on mouse enter on Link and hide it on mouse leave', () => {
      const { container } = render(
        <Sankey width={1000} height={500} data={exampleSankeyData}>
          <XAxis dataKey="number" type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip trigger="hover" />
        </Sankey>,
      );

      const tooltip = getTooltip(container);
      expect(tooltip).not.toBeVisible();

      const tooltipTriggerElement = showTooltip(container, sankeyLinkMouseHoverTooltipSelector);

      expect(tooltip).toBeVisible();

      fireEvent.mouseOut(tooltipTriggerElement);

      expect(tooltip).not.toBeVisible();
    });

    it('should display Tooltip on mouse enter on a Node and hide it on mouse leave', () => {
      const { container } = render(
        <Sankey width={1000} height={500} data={exampleSankeyData}>
          <XAxis dataKey="number" type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip trigger="hover" />
        </Sankey>,
      );

      const tooltip = getTooltip(container);
      expect(tooltip).not.toBeVisible();

      const tooltipTriggerElement = showTooltip(container, sankeyNodeMouseHoverTooltipSelector);

      expect(tooltip).toBeVisible();

      fireEvent.mouseOut(tooltipTriggerElement);

      expect(tooltip).not.toBeVisible();
    });

    it('should not display Tooltip when clicking on a Link', () => {
      const { container } = render(
        <Sankey width={1000} height={500} data={exampleSankeyData}>
          <XAxis dataKey="number" type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip trigger="hover" />
        </Sankey>,
      );

      const tooltip = getTooltip(container);
      const tooltipTriggerElement = container.querySelector(sankeyLinkMouseHoverTooltipSelector);
      assertNotNull(tooltipTriggerElement);
      expect(tooltip).not.toBeVisible();

      fireEvent.click(tooltipTriggerElement);

      expect(tooltip).not.toBeVisible();
    });

    it('should not display Tooltip when clicking on a Node', () => {
      const { container } = render(
        <Sankey width={1000} height={500} data={exampleSankeyData}>
          <XAxis dataKey="number" type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip trigger="hover" />
        </Sankey>,
      );

      const tooltip = getTooltip(container);
      const tooltipTriggerElement = container.querySelector(sankeyNodeMouseHoverTooltipSelector);
      assertNotNull(tooltipTriggerElement);
      expect(tooltip).not.toBeVisible();

      fireEvent.click(tooltipTriggerElement);

      expect(tooltip).not.toBeVisible();
    });
  });

  describe('with Tooltip trigger=click', () => {
    it('should display Tooltip on mouse click on Link and keep it on second click', () => {
      const { container } = render(
        <Sankey width={1000} height={500} data={exampleSankeyData}>
          <XAxis dataKey="number" type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip trigger="click" />
        </Sankey>,
      );

      const tooltip = getTooltip(container);
      expect(tooltip).not.toBeVisible();

      const tooltipTriggerElement = container.querySelector(sankeyLinkMouseHoverTooltipSelector);
      assertNotNull(tooltipTriggerElement);
      fireEvent.click(tooltipTriggerElement);

      expect(tooltip).toBeVisible();

      fireEvent.click(tooltipTriggerElement);

      expect(tooltip).toBeVisible();
    });

    it('should display Tooltip on mouse enter on a Node and keep it on mouse leave', () => {
      const { container } = render(
        <Sankey width={1000} height={500} data={exampleSankeyData}>
          <XAxis dataKey="number" type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip trigger="click" />
        </Sankey>,
      );

      const tooltip = getTooltip(container);
      expect(tooltip).not.toBeVisible();

      const tooltipTriggerElement = container.querySelector(sankeyNodeMouseHoverTooltipSelector);
      assertNotNull(tooltipTriggerElement);
      fireEvent.click(tooltipTriggerElement);

      expect(tooltip).toBeVisible();

      fireEvent.click(tooltipTriggerElement);

      expect(tooltip).toBeVisible();
    });

    it('should do nothing on hover over Link or Node', () => {
      const { container } = render(
        <Sankey width={1000} height={500} data={exampleSankeyData}>
          <XAxis dataKey="number" type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip trigger="click" />
        </Sankey>,
      );

      const tooltip = getTooltip(container);
      showTooltip(container, sankeyLinkMouseHoverTooltipSelector);
      showTooltip(container, sankeyNodeMouseHoverTooltipSelector);
      expect(tooltip).not.toBeVisible();
    });
  });

  describe('tooltip state', () => {
    it('should start with tooltip inactive, and activate it on hover and click on a link', () => {
      const tooltipStateSpy = vi.fn();
      const Comp = (): null => {
        tooltipStateSpy(useAppSelector(state => state.tooltip.itemInteraction));
        return null;
      };
      const { container } = render(
        <Sankey width={1000} height={500} data={exampleSankeyData}>
          <XAxis dataKey="number" type="number" />
          <YAxis type="category" dataKey="name" />
          <Customized component={<Comp />} />
        </Sankey>,
      );
      expect(tooltipStateSpy).toHaveBeenLastCalledWith({
        click: {
          active: false,
          index: null,
          dataKey: undefined,
          coordinate: undefined,
        },
        hover: {
          active: false,
          index: null,
          dataKey: undefined,
          coordinate: undefined,
        },
      });
      expect(tooltipStateSpy).toHaveBeenCalledTimes(1);

      const tooltipTriggerElement = container.querySelector(sankeyLinkMouseHoverTooltipSelector);
      assertNotNull(tooltipTriggerElement);

      fireEvent.mouseOver(tooltipTriggerElement, { clientX: 200, clientY: 200 });

      expect(tooltipStateSpy).toHaveBeenLastCalledWith({
        click: {
          active: false,
          index: null,
          dataKey: undefined,
          coordinate: undefined,
        },
        hover: {
          active: true,
          index: 'link-0',
          dataKey: 'value',
          coordinate: {
            x: 80,
            y: 142.14339872499383,
          },
        },
      });
      expect(tooltipStateSpy).toHaveBeenCalledTimes(2);

      fireEvent.click(tooltipTriggerElement);

      expect(tooltipStateSpy).toHaveBeenLastCalledWith({
        click: {
          active: true,
          coordinate: {
            x: 80,
            y: 142.14339872499383,
          },
          dataKey: 'value',
          index: 'link-0',
        },
        hover: {
          active: true,
          index: 'link-0',
          dataKey: 'value',
          coordinate: {
            x: 80,
            y: 142.14339872499383,
          },
        },
      });
      expect(tooltipStateSpy).toHaveBeenCalledTimes(3);

      fireEvent.mouseLeave(tooltipTriggerElement);

      expect(tooltipStateSpy).toHaveBeenLastCalledWith({
        click: {
          active: true,
          coordinate: {
            x: 80,
            y: 142.14339872499383,
          },
          dataKey: 'value',
          index: 'link-0',
        },
        hover: {
          active: false,
          index: 'link-0',
          dataKey: 'value',
          coordinate: {
            x: 80,
            y: 142.14339872499383,
          },
        },
      });
      expect(tooltipStateSpy).toHaveBeenCalledTimes(4);
    });

    it('should start with tooltip inactive, and activate it on hover and click on a node', () => {
      const tooltipStateSpy = vi.fn();
      const Comp = (): null => {
        tooltipStateSpy(useAppSelector(state => state.tooltip.itemInteraction));
        return null;
      };
      const { container } = render(
        <Sankey width={1000} height={500} data={exampleSankeyData}>
          <XAxis dataKey="number" type="number" />
          <YAxis type="category" dataKey="name" />
          <Customized component={<Comp />} />
        </Sankey>,
      );
      expect(tooltipStateSpy).toHaveBeenLastCalledWith({
        click: {
          active: false,
          index: null,
          dataKey: undefined,
          coordinate: undefined,
        },
        hover: {
          active: false,
          index: null,
          dataKey: undefined,
          coordinate: undefined,
        },
      });
      expect(tooltipStateSpy).toHaveBeenCalledTimes(1);

      const tooltipTriggerElement = container.querySelector(sankeyNodeMouseHoverTooltipSelector);
      assertNotNull(tooltipTriggerElement);

      fireEvent.mouseOver(tooltipTriggerElement, { clientX: 200, clientY: 200 });

      expect(tooltipStateSpy).toHaveBeenLastCalledWith({
        click: {
          active: false,
          index: null,
          dataKey: undefined,
          coordinate: undefined,
        },
        hover: {
          active: true,
          index: 'node-0',
          dataKey: 'value',
          coordinate: {
            x: 10,
            y: 139.51593144373072,
          },
        },
      });
      expect(tooltipStateSpy).toHaveBeenCalledTimes(2);

      fireEvent.click(tooltipTriggerElement);

      expect(tooltipStateSpy).toHaveBeenLastCalledWith({
        click: {
          active: true,
          coordinate: {
            x: 10,
            y: 139.51593144373072,
          },
          dataKey: 'value',
          index: 'node-0',
        },
        hover: {
          active: true,
          coordinate: {
            x: 10,
            y: 139.51593144373072,
          },
          dataKey: 'value',
          index: 'node-0',
        },
      });
      expect(tooltipStateSpy).toHaveBeenCalledTimes(3);

      fireEvent.mouseLeave(tooltipTriggerElement);

      expect(tooltipStateSpy).toHaveBeenLastCalledWith({
        click: {
          active: true,
          coordinate: {
            x: 10,
            y: 139.51593144373072,
          },
          dataKey: 'value',
          index: 'node-0',
        },
        hover: {
          active: false,
          index: 'node-0',
          dataKey: 'value',
          coordinate: {
            x: 10,
            y: 139.51593144373072,
          },
        },
      });
      expect(tooltipStateSpy).toHaveBeenCalledTimes(4);
    });
  });

  describe('events', () => {
    it('should call onClick handler on links', () => {
      const onClick = vi.fn();
      const { container } = render(<Sankey width={1000} height={500} data={exampleSankeyData} onClick={onClick} />);

      const link = container.querySelector(sankeyLinkMouseHoverTooltipSelector);
      assertNotNull(link);

      fireEvent.click(link, { clientX: 200, clientY: 200 });
      expect(onClick).toHaveBeenCalledTimes(1);
      expectLastCalledWith(
        onClick,
        {
          index: 0,
          linkWidth: 13.172337974085991,
          payload: {
            dy: 13.172337974085991,
            source: {
              depth: 0,
              dx: 10,
              dy: 13.172337974085991,
              name: 'Agricultural waste',
              sourceLinks: [],
              sourceNodes: [],
              targetLinks: [0],
              targetNodes: [1],
              value: 124.729,
              x: 0,
              y: 127.92976245668771,
            },
            sy: 0,
            target: {
              depth: 1,
              dx: 10,
              dy: 41.07345963305562,
              name: 'Bio-conversion',
              sourceLinks: [65, 0, 51, 44],
              sourceNodes: [0, 34, 39, 45],
              targetLinks: [2, 3, 4, 1],
              targetNodes: [2, 3, 4, 5],
              value: 388.925,
              x: 140,
              y: 113.96304660380619,
            },
            ty: 19.221650415407733,
            value: 124.729,
          },
          sourceControlX: 80,
          sourceRelativeY: 0,
          sourceX: 15,
          sourceY: 139.51593144373072,
          targetControlX: 80,
          targetRelativeY: 19.221650415407733,
          targetX: 145,
          targetY: 144.77086600625694,
        },
        'link',
        expect.any(Object),
      );
    });

    it('should call onClick handler on nodes', () => {
      const onClick = vi.fn();
      const { container } = render(<Sankey width={1000} height={500} data={exampleSankeyData} onClick={onClick} />);

      const node = container.querySelector(sankeyNodeMouseHoverTooltipSelector);
      assertNotNull(node);

      fireEvent.click(node, { clientX: 200, clientY: 200 });
      expect(onClick).toHaveBeenCalledTimes(1);
      expectLastCalledWith(
        onClick,
        {
          height: 13.172337974085991,
          index: 0,
          payload: {
            depth: 0,
            dx: 10,
            dy: 13.172337974085991,
            name: 'Agricultural waste',
            sourceLinks: [],
            sourceNodes: [],
            targetLinks: [0],
            targetNodes: [1],
            value: 124.729,
            x: 0,
            y: 127.92976245668771,
          },
          width: 10,
          x: 5,
          y: 132.9297624566877,
        },
        'node',
        expect.any(Object),
      );
    });

    it('should call onMouseEnter and onMouseLeave handlers on links', () => {
      const onMouseEnter = vi.fn();
      const onMouseLeave = vi.fn();
      const { container } = render(
        <Sankey
          width={1000}
          height={500}
          data={exampleSankeyData}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />,
      );

      const link = container.querySelector(sankeyLinkMouseHoverTooltipSelector);
      assertNotNull(link);

      fireEvent.mouseEnter(link, { clientX: 200, clientY: 200 });
      expect(onMouseEnter).toHaveBeenCalledTimes(1);
      expectLastCalledWith(
        onMouseEnter,
        {
          sourceX: 15,
          targetX: 145,
          sourceY: 139.51593144373072,
          targetY: 144.77086600625694,
          sourceControlX: 80,
          targetControlX: 80,
          sourceRelativeY: 0,
          targetRelativeY: 19.221650415407733,
          linkWidth: 13.172337974085991,
          index: 0,
          payload: {
            source: {
              name: 'Agricultural waste',
              sourceNodes: [],
              sourceLinks: [],
              targetLinks: [0],
              targetNodes: [1],
              value: 124.729,
              depth: 0,
              x: 0,
              dx: 10,
              y: 127.92976245668771,
              dy: 13.172337974085991,
            },
            target: {
              name: 'Bio-conversion',
              sourceNodes: [0, 34, 39, 45],
              sourceLinks: [65, 0, 51, 44],
              targetLinks: [2, 3, 4, 1],
              targetNodes: [2, 3, 4, 5],
              value: 388.925,
              depth: 1,
              x: 140,
              dx: 10,
              y: 113.96304660380619,
              dy: 41.07345963305562,
            },
            value: 124.729,
            dy: 13.172337974085991,
            sy: 0,
            ty: 19.221650415407733,
          },
        },
        'link',
        expect.any(Object),
      );

      fireEvent.mouseLeave(link);
      expect(onMouseLeave).toHaveBeenCalledTimes(1);
      expectLastCalledWith(
        onMouseLeave,
        {
          sourceX: 15,
          targetX: 145,
          sourceY: 139.51593144373072,
          targetY: 144.77086600625694,
          sourceControlX: 80,
          targetControlX: 80,
          sourceRelativeY: 0,
          targetRelativeY: 19.221650415407733,
          linkWidth: 13.172337974085991,
          index: 0,
          payload: {
            source: {
              name: 'Agricultural waste',
              sourceNodes: [],
              sourceLinks: [],
              targetLinks: [0],
              targetNodes: [1],
              value: 124.729,
              depth: 0,
              x: 0,
              dx: 10,
              y: 127.92976245668771,
              dy: 13.172337974085991,
            },
            target: {
              name: 'Bio-conversion',
              sourceNodes: [0, 34, 39, 45],
              sourceLinks: [65, 0, 51, 44],
              targetLinks: [2, 3, 4, 1],
              targetNodes: [2, 3, 4, 5],
              value: 388.925,
              depth: 1,
              x: 140,
              dx: 10,
              y: 113.96304660380619,
              dy: 41.07345963305562,
            },
            value: 124.729,
            dy: 13.172337974085991,
            sy: 0,
            ty: 19.221650415407733,
          },
        },
        'link',
        expect.any(Object),
      );
    });

    it('should do nothing onMouseMove on links', () => {
      // looks like a bug or missed feature - why have enter + leave but no move?
      const onMouseMove = vi.fn();
      const { container } = render(
        <Sankey width={1000} height={500} data={exampleSankeyData} onMouseMove={onMouseMove} />,
      );

      const link = container.querySelector(sankeyLinkMouseHoverTooltipSelector);
      assertNotNull(link);

      fireEvent.mouseMove(link, { clientX: 200, clientY: 200 });
      expect(onMouseMove).toHaveBeenCalledTimes(0);
    });

    it('should call onMouseEnter and onMouseLeave handlers on nodes', () => {
      const onMouseEnter = vi.fn();
      const onMouseLeave = vi.fn();
      const { container } = render(
        <Sankey
          width={1000}
          height={500}
          data={exampleSankeyData}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />,
      );

      const node = container.querySelector(sankeyNodeMouseHoverTooltipSelector);
      assertNotNull(node);

      fireEvent.mouseEnter(node, { clientX: 200, clientY: 200 });
      expect(onMouseEnter).toHaveBeenCalledTimes(1);
      expectLastCalledWith(
        onMouseEnter,
        {
          height: 13.172337974085991,
          index: 0,
          payload: {
            name: 'Agricultural waste',
            sourceNodes: [],
            sourceLinks: [],
            targetLinks: [0],
            targetNodes: [1],
            value: 124.729,
            depth: 0,
            x: 0,
            dx: 10,
            y: 127.92976245668771,
            dy: 13.172337974085991,
          },
          width: 10,
          x: 5,
          y: 132.9297624566877,
        },
        'node',
        expect.any(Object),
      );

      fireEvent.mouseLeave(node);
      expect(onMouseLeave).toHaveBeenCalledTimes(1);
      expectLastCalledWith(
        onMouseLeave,
        {
          height: 13.172337974085991,
          index: 0,
          payload: {
            name: 'Agricultural waste',
            sourceNodes: [],
            sourceLinks: [],
            targetLinks: [0],
            targetNodes: [1],
            value: 124.729,
            depth: 0,
            x: 0,
            dx: 10,
            y: 127.92976245668771,
            dy: 13.172337974085991,
          },
          width: 10,
          x: 5,
          y: 132.9297624566877,
        },
        'node',
        expect.any(Object),
      );
    });

    it('should do nothing onMouseMove on nodes', () => {
      // looks like a bug or missed feature - why have enter + leave but no move?
      const onMouseMove = vi.fn();
      const { container } = render(
        <Sankey width={1000} height={500} data={exampleSankeyData} onMouseMove={onMouseMove} />,
      );

      const node = container.querySelector(sankeyNodeMouseHoverTooltipSelector);
      assertNotNull(node);

      fireEvent.mouseMove(node, { clientX: 200, clientY: 200 });
      expect(onMouseMove).toHaveBeenCalledTimes(0);
    });

    it('should do nothing onTouchMove on links', () => {
      // looks like a bug or missed feature
      mockTouchingElement('1', 'a');
      const onTouchMove = vi.fn();
      const onTouchEnd = vi.fn();
      const { container } = render(
        <Sankey width={1000} height={500} data={exampleSankeyData} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} />,
      );

      const link = container.querySelector(sankeyLinkMouseHoverTooltipSelector);
      assertNotNull(link);

      fireEvent.touchMove(link, { touches: [{ clientX: 200, clientY: 200 }] });
      expect(onTouchMove).toHaveBeenCalledTimes(0);

      fireEvent.touchEnd(link, { changedTouches: [{ clientX: 200, clientY: 200 }] });
      expect(onTouchEnd).toHaveBeenCalledTimes(0);
    });

    it('should do nothing onTouchMove and onTouchEnd on nodes', () => {
      // looks like a bug or missed feature
      mockTouchingElement('1', 'a');
      const onTouchMove = vi.fn();
      const onTouchEnd = vi.fn();
      const { container } = render(
        <Sankey width={1000} height={500} data={exampleSankeyData} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} />,
      );

      const node = container.querySelector(sankeyNodeMouseHoverTooltipSelector);
      assertNotNull(node);

      fireEvent.touchMove(node, { touches: [{ clientX: 200, clientY: 200 }] });
      expect(onTouchMove).toHaveBeenCalledTimes(0);

      fireEvent.touchEnd(node, { changedTouches: [{ clientX: 200, clientY: 200 }] });
      expect(onTouchEnd).toHaveBeenCalledTimes(0);
    });
  });
});
