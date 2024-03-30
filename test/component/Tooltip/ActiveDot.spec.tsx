import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Area, AreaChart, ComposedChart, Line, LineChart, Radar, RadarChart, Tooltip } from '../../../src';
import { PageData } from '../../_data';
import { showTooltip } from './tooltipTestHelpers';
import {
  areaChartMouseHoverTooltipSelector,
  composedChartMouseHoverTooltipSelector,
  lineChartMouseHoverTooltipSelector,
  radarChartMouseHoverTooltipSelector,
} from './tooltipMouseHoverSelectors';

const commonChartProps = {
  width: 400,
  height: 400,
  data: PageData,
};

describe('ActiveDot', () => {
  describe('as a child of AreaChart', () => {
    it('should render default activeDot and give it props', () => {
      const { container, debug } = render(
        <AreaChart {...commonChartProps}>
          <Area dataKey="uv" />
          <Tooltip />
        </AreaChart>,
      );
      expect(container.querySelector('.recharts-active-dot')).not.toBeInTheDocument();
      showTooltip(container, areaChartMouseHoverTooltipSelector, debug);
      const activeDot = container.querySelector('.recharts-active-dot');
      expect(activeDot).toBeVisible();
      expect(activeDot.getAttributeNames()).toEqual(['class']);
      expect(activeDot.getAttribute('class')).toEqual('recharts-layer recharts-active-dot');

      const circle = activeDot.querySelector('circle');
      expect(circle).toBeVisible();
      expect(circle.getAttributeNames()).toEqual(['cx', 'cy', 'r', 'fill', 'stroke-width', 'stroke', 'class']);
      expect(circle.getAttribute('class')).toEqual('recharts-dot');
      expect(circle.getAttribute('cx')).toEqual('161');
      expect(circle.getAttribute('cy')).toEqual('102.5');
      expect(circle.getAttribute('r')).toEqual('4');
      expect(circle.getAttribute('fill')).toEqual('#3182bd');
      expect(circle.getAttribute('stroke-width')).toEqual('2');
      expect(circle.getAttribute('stroke')).toEqual('#fff');
    });

    it('should clone custom Dot element and inject extra sneaky props', () => {
      const { container, debug } = render(
        <AreaChart {...commonChartProps}>
          <Area dataKey="uv" activeDot={<g data-testid="my-custom-dot" />} />
          <Tooltip />
        </AreaChart>,
      );
      expect(container.querySelector('.recharts-active-dot')).not.toBeInTheDocument();
      expect(container.querySelector('[data-testid="my-custom-dot"]')).not.toBeInTheDocument();
      showTooltip(container, areaChartMouseHoverTooltipSelector, debug);
      const activeDot = container.querySelector('.recharts-active-dot');
      expect(activeDot).toBeVisible();
      expect(activeDot.getAttributeNames()).toEqual(['class']);
      expect(activeDot.getAttribute('class')).toEqual('recharts-layer recharts-active-dot');

      const customElement = activeDot.querySelector('[data-testid="my-custom-dot"]');
      expect(customElement).toBeVisible();
      expect(customElement.getAttributeNames()).toEqual([
        'data-testid',
        'index',
        'dataKey',
        'cx',
        'cy',
        'r',
        'fill',
        'stroke-width',
        'stroke',
        'payload',
        'value',
      ]);
      expect(customElement.getAttribute('data-testid')).toEqual('my-custom-dot');
      expect(customElement.getAttribute('index')).toEqual('2');
      expect(customElement.getAttribute('dataKey')).toEqual('uv');
      expect(customElement.getAttribute('cx')).toEqual('161');
      expect(customElement.getAttribute('cy')).toEqual('102.5');
      expect(customElement.getAttribute('r')).toEqual('4');
      expect(customElement.getAttribute('fill')).toEqual('#3182bd');
      expect(customElement.getAttribute('stroke-width')).toEqual('2');
      expect(customElement.getAttribute('stroke')).toEqual('#fff');
      expect(customElement.getAttribute('payload')).toEqual('[object Object]'); // sic!
      expect(customElement.getAttribute('value')).toEqual('0,300');
    });

    it('should render custom Dot component, give it props, and render what it returned', () => {
      const spy = vi.fn();
      const MyCustomDot = (props: unknown) => {
        spy(props);
        return <g data-testid="my-custom-dot" />;
      };
      const { container, debug } = render(
        <AreaChart {...commonChartProps}>
          <Area dataKey="uv" activeDot={MyCustomDot} />
          <Tooltip />
        </AreaChart>,
      );
      expect(spy).toHaveBeenCalledTimes(0);
      expect(container.querySelector('.recharts-active-dot')).not.toBeInTheDocument();
      showTooltip(container, areaChartMouseHoverTooltipSelector, debug);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(container.querySelector('.recharts-active-dot')).toBeVisible();
      expect(spy).toHaveBeenCalledWith({
        cx: 161,
        cy: 102.5,
        dataKey: 'uv',
        fill: '#3182bd',
        index: 2,
        key: 'item-0-activePoint-2',
        payload: {
          amt: 2400,
          name: 'Page C',
          pv: 1398,
          uv: 300,
        },
        r: 4,
        stroke: '#fff',
        strokeWidth: 2,
        value: [0, 300],
      });
    });
  });

  describe('as a child of LineChart', () => {
    it('should render default activeDot and give it props', () => {
      const { container, debug } = render(
        <LineChart {...commonChartProps}>
          <Line dataKey="uv" />
          <Tooltip />
        </LineChart>,
      );
      expect(container.querySelector('.recharts-active-dot')).not.toBeInTheDocument();
      showTooltip(container, lineChartMouseHoverTooltipSelector, debug);
      const activeDot = container.querySelector('.recharts-active-dot');
      expect(activeDot).toBeVisible();
      expect(activeDot.getAttributeNames()).toEqual(['class']);
      expect(activeDot.getAttribute('class')).toEqual('recharts-layer recharts-active-dot');

      const circle = activeDot.querySelector('circle');
      expect(circle).toBeVisible();
      expect(circle.getAttributeNames()).toEqual(['cx', 'cy', 'r', 'fill', 'stroke-width', 'stroke', 'class']);
      expect(circle.getAttribute('class')).toEqual('recharts-dot');
      expect(circle.getAttribute('cx')).toEqual('161');
      expect(circle.getAttribute('cy')).toEqual('102.5');
      expect(circle.getAttribute('r')).toEqual('4');
      expect(circle.getAttribute('fill')).toEqual('#3182bd');
      expect(circle.getAttribute('stroke-width')).toEqual('2');
      expect(circle.getAttribute('stroke')).toEqual('#fff');
    });

    it('should clone custom Dot element and inject extra sneaky props', () => {
      const { container, debug } = render(
        <LineChart {...commonChartProps}>
          <Line dataKey="uv" activeDot={<g data-testid="my-custom-dot" />} />
          <Tooltip />
        </LineChart>,
      );
      expect(container.querySelector('.recharts-active-dot')).not.toBeInTheDocument();
      expect(container.querySelector('[data-testid="my-custom-dot"]')).not.toBeInTheDocument();
      showTooltip(container, lineChartMouseHoverTooltipSelector, debug);
      const activeDot = container.querySelector('.recharts-active-dot');
      expect(activeDot).toBeVisible();
      expect(activeDot.getAttributeNames()).toEqual(['class']);
      expect(activeDot.getAttribute('class')).toEqual('recharts-layer recharts-active-dot');

      const customElement = activeDot.querySelector('[data-testid="my-custom-dot"]');
      expect(customElement).toBeVisible();
      expect(customElement.getAttributeNames()).toEqual([
        'data-testid',
        'index',
        'dataKey',
        'cx',
        'cy',
        'r',
        'fill',
        'stroke-width',
        'stroke',
        'payload',
        'value',
      ]);
      expect(customElement.getAttribute('data-testid')).toEqual('my-custom-dot');
      expect(customElement.getAttribute('index')).toEqual('2');
      expect(customElement.getAttribute('dataKey')).toEqual('uv');
      expect(customElement.getAttribute('cx')).toEqual('161');
      expect(customElement.getAttribute('cy')).toEqual('102.5');
      expect(customElement.getAttribute('r')).toEqual('4');
      expect(customElement.getAttribute('fill')).toEqual('#3182bd');
      expect(customElement.getAttribute('stroke-width')).toEqual('2');
      expect(customElement.getAttribute('stroke')).toEqual('#fff');
      expect(customElement.getAttribute('payload')).toEqual('[object Object]'); // sic!
      expect(customElement.getAttribute('value')).toEqual('300');
    });

    it('should render custom Dot component, give it props, and render what it returned', () => {
      const spy = vi.fn();
      const MyCustomDot = (props: unknown) => {
        spy(props);
        return <g data-testid="my-custom-dot" />;
      };
      const { container, debug } = render(
        <LineChart {...commonChartProps}>
          <Line dataKey="uv" activeDot={MyCustomDot} />
          <Tooltip />
        </LineChart>,
      );
      expect(spy).toHaveBeenCalledTimes(0);
      expect(container.querySelector('.recharts-active-dot')).not.toBeInTheDocument();
      showTooltip(container, lineChartMouseHoverTooltipSelector, debug);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(container.querySelector('.recharts-active-dot')).toBeVisible();
      expect(spy).toHaveBeenCalledWith({
        cx: 161,
        cy: 102.5,
        dataKey: 'uv',
        fill: '#3182bd',
        index: 2,
        key: 'item-0-activePoint-2',
        payload: {
          amt: 2400,
          name: 'Page C',
          pv: 1398,
          uv: 300,
        },
        r: 4,
        stroke: '#fff',
        strokeWidth: 2,
        value: 300,
      });
    });
  });

  describe('as a child of ComposedChart with Line', () => {
    it('should render default activeDot and give it props', () => {
      const { container, debug } = render(
        <ComposedChart {...commonChartProps}>
          <Line dataKey="uv" />
          <Tooltip />
        </ComposedChart>,
      );
      expect(container.querySelector('.recharts-active-dot')).not.toBeInTheDocument();
      showTooltip(container, composedChartMouseHoverTooltipSelector, debug);
      const activeDot = container.querySelector('.recharts-active-dot');
      expect(activeDot).toBeVisible();
      expect(activeDot.getAttributeNames()).toEqual(['class']);
      expect(activeDot.getAttribute('class')).toEqual('recharts-layer recharts-active-dot');

      const circle = activeDot.querySelector('circle');
      expect(circle).toBeVisible();
      expect(circle.getAttributeNames()).toEqual(['cx', 'cy', 'r', 'fill', 'stroke-width', 'stroke', 'class']);
      expect(circle.getAttribute('class')).toEqual('recharts-dot');
      expect(circle.getAttribute('cx')).toEqual('161');
      expect(circle.getAttribute('cy')).toEqual('102.5');
      expect(circle.getAttribute('r')).toEqual('4');
      expect(circle.getAttribute('fill')).toEqual('#3182bd');
      expect(circle.getAttribute('stroke-width')).toEqual('2');
      expect(circle.getAttribute('stroke')).toEqual('#fff');
    });

    it('should clone custom Dot element and inject extra sneaky props', () => {
      const { container, debug } = render(
        <ComposedChart {...commonChartProps}>
          <Line dataKey="uv" activeDot={<g data-testid="my-custom-dot" />} />
          <Tooltip />
        </ComposedChart>,
      );
      expect(container.querySelector('.recharts-active-dot')).not.toBeInTheDocument();
      expect(container.querySelector('[data-testid="my-custom-dot"]')).not.toBeInTheDocument();
      showTooltip(container, composedChartMouseHoverTooltipSelector, debug);
      const activeDot = container.querySelector('.recharts-active-dot');
      expect(activeDot).toBeVisible();
      expect(activeDot.getAttributeNames()).toEqual(['class']);
      expect(activeDot.getAttribute('class')).toEqual('recharts-layer recharts-active-dot');

      const customElement = activeDot.querySelector('[data-testid="my-custom-dot"]');
      expect(customElement).toBeVisible();
      expect(customElement.getAttributeNames()).toEqual([
        'data-testid',
        'index',
        'dataKey',
        'cx',
        'cy',
        'r',
        'fill',
        'stroke-width',
        'stroke',
        'payload',
        'value',
      ]);
      expect(customElement.getAttribute('data-testid')).toEqual('my-custom-dot');
      expect(customElement.getAttribute('index')).toEqual('2');
      expect(customElement.getAttribute('dataKey')).toEqual('uv');
      expect(customElement.getAttribute('cx')).toEqual('161');
      expect(customElement.getAttribute('cy')).toEqual('102.5');
      expect(customElement.getAttribute('r')).toEqual('4');
      expect(customElement.getAttribute('fill')).toEqual('#3182bd');
      expect(customElement.getAttribute('stroke-width')).toEqual('2');
      expect(customElement.getAttribute('stroke')).toEqual('#fff');
      expect(customElement.getAttribute('payload')).toEqual('[object Object]'); // sic!
      expect(customElement.getAttribute('value')).toEqual('300');
    });

    it('should render custom Dot component, give it props, and render what it returned', () => {
      const spy = vi.fn();
      const MyCustomDot = (props: unknown) => {
        spy(props);
        return <g data-testid="my-custom-dot" />;
      };
      const { container, debug } = render(
        <ComposedChart {...commonChartProps}>
          <Line dataKey="uv" activeDot={MyCustomDot} />
          <Tooltip />
        </ComposedChart>,
      );
      expect(spy).toHaveBeenCalledTimes(0);
      expect(container.querySelector('.recharts-active-dot')).not.toBeInTheDocument();
      showTooltip(container, composedChartMouseHoverTooltipSelector, debug);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(container.querySelector('.recharts-active-dot')).toBeVisible();
      expect(spy).toHaveBeenCalledWith({
        cx: 161,
        cy: 102.5,
        dataKey: 'uv',
        fill: '#3182bd',
        index: 2,
        key: 'item-0-activePoint-2',
        payload: {
          amt: 2400,
          name: 'Page C',
          pv: 1398,
          uv: 300,
        },
        r: 4,
        stroke: '#fff',
        strokeWidth: 2,
        value: 300,
      });
    });
  });

  describe('as a child of RadarChart', () => {
    it('should render default activeDot and give it props', () => {
      const { container, debug } = render(
        <RadarChart height={600} width={600} data={PageData}>
          <Radar dataKey="uv" />
          <Tooltip />
        </RadarChart>,
      );
      expect(container.querySelector('.recharts-active-dot')).not.toBeInTheDocument();
      showTooltip(container, radarChartMouseHoverTooltipSelector, debug);
      const activeDot = container.querySelector('.recharts-active-dot');
      expect(activeDot).toBeVisible();
      expect(activeDot.getAttributeNames()).toEqual(['class']);
      expect(activeDot.getAttribute('class')).toEqual('recharts-layer recharts-active-dot');

      const circle = activeDot.querySelector('circle');
      expect(circle).toBeVisible();
      // Not sure why does Radar activeDot not have fill but for some reason it does not.
      expect(circle.getAttributeNames()).toEqual(['cx', 'cy', 'r', /* 'fill', */ 'stroke-width', 'stroke', 'class']);
      expect(circle.getAttribute('class')).toEqual('recharts-dot');
      expect(circle.getAttribute('cx')).toEqual('203.42950722399726');
      expect(circle.getAttribute('cy')).toEqual('244.245');
      expect(circle.getAttribute('r')).toEqual('4');
      expect(circle.getAttribute('stroke-width')).toEqual('2');
      expect(circle.getAttribute('stroke')).toEqual('#fff');
    });

    it('should clone custom Dot element and inject extra sneaky props', () => {
      const { container, debug } = render(
        <RadarChart height={600} width={600} data={PageData}>
          <Radar dataKey="uv" activeDot={<g data-testid="my-custom-dot" />} />
          <Tooltip />
        </RadarChart>,
      );
      expect(container.querySelector('.recharts-active-dot')).not.toBeInTheDocument();
      expect(container.querySelector('[data-testid="my-custom-dot"]')).not.toBeInTheDocument();
      showTooltip(container, radarChartMouseHoverTooltipSelector, debug);
      const activeDot = container.querySelector('.recharts-active-dot');
      expect(activeDot).toBeVisible();
      expect(activeDot.getAttributeNames()).toEqual(['class']);
      expect(activeDot.getAttribute('class')).toEqual('recharts-layer recharts-active-dot');

      const customElement = activeDot.querySelector('[data-testid="my-custom-dot"]');
      expect(customElement).toBeVisible();
      expect(customElement.getAttributeNames()).toEqual([
        'data-testid',
        'index',
        'dataKey',
        'cx',
        'cy',
        'r',
        // 'fill',
        'stroke-width',
        'stroke',
        'payload',
        'value',
      ]);
      expect(customElement.getAttribute('data-testid')).toEqual('my-custom-dot');
      expect(customElement.getAttribute('index')).toEqual('5');
      expect(customElement.getAttribute('dataKey')).toEqual('uv');
      expect(customElement.getAttribute('cx')).toEqual('203.42950722399726');
      expect(customElement.getAttribute('cy')).toEqual('244.245');
      expect(customElement.getAttribute('r')).toEqual('4');
      expect(customElement.getAttribute('stroke-width')).toEqual('2');
      expect(customElement.getAttribute('stroke')).toEqual('#fff');
      expect(customElement.getAttribute('payload')).toEqual('[object Object]'); // sic!
      expect(customElement.getAttribute('value')).toEqual('189');
    });

    it('should render custom Dot component, give it props, and render what it returned', () => {
      const spy = vi.fn();
      const MyCustomDot = (props: unknown) => {
        spy(props);
        return <g data-testid="my-custom-dot" />;
      };
      const { container, debug } = render(
        <RadarChart height={600} width={600} data={PageData}>
          <Radar dataKey="uv" activeDot={MyCustomDot} />
          <Tooltip />
        </RadarChart>,
      );
      expect(spy).toHaveBeenCalledTimes(0);
      expect(container.querySelector('.recharts-active-dot')).not.toBeInTheDocument();
      showTooltip(container, radarChartMouseHoverTooltipSelector, debug);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(container.querySelector('.recharts-active-dot')).toBeVisible();
      expect(spy).toHaveBeenCalledWith({
        cx: 203.42950722399726,
        cy: 244.245,
        dataKey: 'uv',
        index: 5,
        key: 'item-0-activePoint-5',
        payload: {
          amt: 2400,
          name: 'Page F',
          pv: 4800,
          uv: 189,
        },
        r: 4,
        stroke: '#fff',
        strokeWidth: 2,
        value: 189,
      });
    });
  });
});
