import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { Customized, Sankey, XAxis, YAxis } from '../../src';
import { exampleSankeyData } from '../_data';
import { useChartHeight, useChartWidth, useClipPathId, useViewBox } from '../../src/context/chartLayoutContext';
import { useAppSelector } from '../../src/state/hooks';
import { assertNotNull } from '../helper/assertNotNull';
import {
  sankeyChartMouseHoverTooltipSelector,
  sankeyNodeChartMouseHoverTooltipSelector,
} from '../component/Tooltip/tooltipMouseHoverSelectors';

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
    it('should provide viewBox, but not clipPathId nor any axes', () => {
      const clipPathSpy = vi.fn();
      const viewBoxSpy = vi.fn();
      const xAxisMapSpy = vi.fn();
      const yAxisMapSpy = vi.fn();
      const Comp = (): null => {
        clipPathSpy(useClipPathId());
        viewBoxSpy(useViewBox());
        xAxisMapSpy(useAppSelector(state => state.axis.xAxisMap));
        yAxisMapSpy(useAppSelector(state => state.axis.yAxisMap));
        return null;
      };
      render(
        <Sankey width={1000} height={500} data={exampleSankeyData}>
          <Customized component={<Comp />} />
        </Sankey>,
      );
      expect(clipPathSpy).toHaveBeenLastCalledWith(undefined);
      expect(viewBoxSpy).toHaveBeenLastCalledWith({ x: 0, y: 0, width: 1000, height: 500 });
      expect(viewBoxSpy).toHaveBeenCalledTimes(3);
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
      expect(widthSpy).toHaveBeenCalledTimes(3);
      expect(heightSpy).toHaveBeenCalledTimes(3);
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
        activeClick: false,
        activeClickCoordinate: undefined,
        activeClickDataKey: undefined,
        activeClickIndex: null,
        activeHover: false,
        activeMouseOverCoordinate: undefined,
        activeMouseOverDataKey: undefined,
        activeMouseOverIndex: null,
      });
      expect(tooltipStateSpy).toHaveBeenCalledTimes(1);

      const tooltipTriggerElement = container.querySelector(sankeyChartMouseHoverTooltipSelector);
      assertNotNull(tooltipTriggerElement);

      fireEvent.mouseOver(tooltipTriggerElement, { clientX: 200, clientY: 200 });

      expect(tooltipStateSpy).toHaveBeenLastCalledWith({
        activeClick: false,
        activeClickCoordinate: undefined,
        activeClickDataKey: undefined,
        activeClickIndex: null,
        activeHover: true,
        activeMouseOverCoordinate: {
          x: 80,
          y: 142.14339872499383,
        },
        activeMouseOverDataKey: 'value',
        activeMouseOverIndex: 'link-0',
      });
      expect(tooltipStateSpy).toHaveBeenCalledTimes(2);

      fireEvent.click(tooltipTriggerElement);

      expect(tooltipStateSpy).toHaveBeenLastCalledWith({
        activeClick: true,
        activeClickCoordinate: {
          x: 80,
          y: 142.14339872499383,
        },
        activeClickDataKey: 'value',
        activeClickIndex: 'link-0',
        activeHover: true,
        activeMouseOverCoordinate: {
          x: 80,
          y: 142.14339872499383,
        },
        activeMouseOverDataKey: 'value',
        activeMouseOverIndex: 'link-0',
      });
      expect(tooltipStateSpy).toHaveBeenCalledTimes(3);

      fireEvent.mouseLeave(tooltipTriggerElement);

      expect(tooltipStateSpy).toHaveBeenLastCalledWith({
        activeClick: true,
        activeClickCoordinate: {
          x: 80,
          y: 142.14339872499383,
        },
        activeClickDataKey: 'value',
        activeClickIndex: 'link-0',
        activeHover: false,
        activeMouseOverCoordinate: {
          x: 80,
          y: 142.14339872499383,
        },
        activeMouseOverDataKey: undefined,
        activeMouseOverIndex: null,
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
        activeClick: false,
        activeClickCoordinate: undefined,
        activeClickDataKey: undefined,
        activeClickIndex: null,
        activeHover: false,
        activeMouseOverCoordinate: undefined,
        activeMouseOverDataKey: undefined,
        activeMouseOverIndex: null,
      });
      expect(tooltipStateSpy).toHaveBeenCalledTimes(1);

      const tooltipTriggerElement = container.querySelector(sankeyNodeChartMouseHoverTooltipSelector);
      assertNotNull(tooltipTriggerElement);

      fireEvent.mouseOver(tooltipTriggerElement, { clientX: 200, clientY: 200 });

      expect(tooltipStateSpy).toHaveBeenLastCalledWith({
        activeClick: false,
        activeClickCoordinate: undefined,
        activeClickDataKey: undefined,
        activeClickIndex: null,
        activeHover: true,
        activeMouseOverCoordinate: {
          x: 10,
          y: 139.51593144373072,
        },
        activeMouseOverDataKey: 'value',
        activeMouseOverIndex: 'node-0',
      });
      expect(tooltipStateSpy).toHaveBeenCalledTimes(2);

      fireEvent.click(tooltipTriggerElement);

      expect(tooltipStateSpy).toHaveBeenLastCalledWith({
        activeClick: true,
        activeClickCoordinate: {
          x: 10,
          y: 139.51593144373072,
        },
        activeClickDataKey: 'value',
        activeClickIndex: 'node-0',
        activeHover: true,
        activeMouseOverCoordinate: {
          x: 10,
          y: 139.51593144373072,
        },
        activeMouseOverDataKey: 'value',
        activeMouseOverIndex: 'node-0',
      });
      expect(tooltipStateSpy).toHaveBeenCalledTimes(3);

      fireEvent.mouseLeave(tooltipTriggerElement);

      expect(tooltipStateSpy).toHaveBeenLastCalledWith({
        activeClick: true,
        activeClickCoordinate: {
          x: 10,
          y: 139.51593144373072,
        },
        activeClickDataKey: 'value',
        activeClickIndex: 'node-0',
        activeHover: false,
        activeMouseOverCoordinate: {
          x: 10,
          y: 139.51593144373072,
        },
        activeMouseOverDataKey: undefined,
        activeMouseOverIndex: null,
      });
      expect(tooltipStateSpy).toHaveBeenCalledTimes(4);
    });
  });
});
