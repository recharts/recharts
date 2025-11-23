import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { PageData } from '../../_data';
import { Area, AreaChart, Tooltip } from '../../../src';
import { expectLastCalledWith } from '../../helper/expectLastCalledWith';
import { showTooltip } from './tooltipTestHelpers';
import { areaChartMouseHoverTooltipSelector } from './tooltipMouseHoverSelectors';
import { mockGetBoundingClientRect } from '../../helper/mockGetBoundingClientRect';

const commonChartProps = {
  width: 400,
  height: 400,
};

describe('Tooltip.content', () => {
  const spy = vi.fn();

  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
    spy.mockClear();
  });

  const renderTestCase = createSelectorTestCase(({ children }) => (
    <AreaChart {...commonChartProps} data={PageData}>
      <Area dataKey="uv" unit="kg" />
      <Area dataKey="pv" unit="$$$" name="My custom name" />
      <Area dataKey="amt" />
      <Tooltip content={spy} />
      {children}
    </AreaChart>
  ));

  it('should be called and receive payload before any user interactions', () => {
    expect(spy).toHaveBeenCalledTimes(0);
    renderTestCase();
    expect(spy).toHaveBeenCalledTimes(2);
    expectLastCalledWith(
      spy,
      {
        accessibilityLayer: true,
        active: false,
        activeIndex: null,
        allowEscapeViewBox: {
          x: false,
          y: false,
        },
        animationDuration: 400,
        animationEasing: 'ease',
        axisId: 0,
        content: spy,
        contentStyle: {},
        coordinate: undefined,
        cursor: true,
        filterNull: true,
        isAnimationActive: 'auto',
        itemSorter: 'name',
        itemStyle: {},
        label: undefined,
        labelStyle: {},
        offset: 10,
        payload: [],
        reverseDirection: {
          x: false,
          y: false,
        },
        separator: ' : ',
        trigger: 'hover',
        useTranslate3d: false,
        wrapperStyle: {},
      },
      expect.any(Object),
    );
  });

  it('should be called and receive payload on hover', () => {
    const { container, debug } = renderTestCase();
    showTooltip(container, areaChartMouseHoverTooltipSelector, debug);
    expect(spy).toHaveBeenCalledTimes(3);
    expectLastCalledWith(
      spy,
      {
        accessibilityLayer: true,
        active: true,
        activeIndex: '2',
        allowEscapeViewBox: {
          x: false,
          y: false,
        },
        animationDuration: 400,
        animationEasing: 'ease',
        axisId: 0,
        content: spy,
        contentStyle: {},
        coordinate: {
          x: 161,
          y: 200,
        },
        cursor: true,
        filterNull: true,
        isAnimationActive: 'auto',
        itemSorter: 'name',
        itemStyle: {},
        label: 2,
        labelStyle: {},
        offset: 10,
        payload: [
          {
            color: '#3182bd',
            dataKey: 'uv',
            fill: '#3182bd',
            hide: false,
            name: 'uv',
            nameKey: undefined,
            payload: {
              amt: 2400,
              name: 'Page C',
              pv: 1398,
              uv: 300,
            },
            stroke: '#3182bd',
            strokeWidth: undefined,
            type: undefined,
            unit: 'kg',
            value: 300,
          },
          {
            color: '#3182bd',
            dataKey: 'pv',
            fill: '#3182bd',
            hide: false,
            name: 'My custom name',
            nameKey: undefined,
            payload: {
              amt: 2400,
              name: 'Page C',
              pv: 1398,
              uv: 300,
            },
            stroke: '#3182bd',
            strokeWidth: undefined,
            type: undefined,
            unit: '$$$',
            value: 1398,
          },
          {
            color: '#3182bd',
            dataKey: 'amt',
            fill: '#3182bd',
            hide: false,
            name: 'amt',
            nameKey: undefined,
            payload: {
              amt: 2400,
              name: 'Page C',
              pv: 1398,
              uv: 300,
            },
            stroke: '#3182bd',
            strokeWidth: undefined,
            type: undefined,
            unit: undefined,
            value: 2400,
          },
        ],
        reverseDirection: {
          x: false,
          y: false,
        },
        separator: ' : ',
        trigger: 'hover',
        useTranslate3d: false,
        wrapperStyle: {},
      },
      expect.any(Object),
    );
  });
});
