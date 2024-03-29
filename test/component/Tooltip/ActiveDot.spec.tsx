import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Area, AreaChart, Tooltip } from '../../../src';
import { PageData } from '../../_data';
import { showTooltip } from './tooltipTestHelpers';
import { areaChartMouseHoverTooltipSelector } from './tooltipMouseHoverSelectors';

const commonChartProps = {
  width: 400,
  height: 400,
  data: PageData,
};

describe('ActiveDot in AreaChart', () => {
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
    showTooltip(container, areaChartMouseHoverTooltipSelector, debug);
    expect(spy).toHaveBeenCalledTimes(1);
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
