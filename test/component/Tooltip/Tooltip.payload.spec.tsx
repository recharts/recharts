import React, { ComponentType, ReactNode } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Area, AreaChart, Tooltip } from '../../../src';
import { restoreGetBoundingClientRect } from '../../helper/mockGetBoundingClientRect';
import { getTooltip, showTooltip } from './tooltipTestHelpers';
import { PageData } from '../../_data';

type TooltipPayloadTestCase = {
  // Identify which test is running
  name: string;
  mouseHoverSelector: string;
  Wrapper: ComponentType<{ children: ReactNode }>;
  expectedTooltipTitle: string;
  expectedTooltipContent: ReadonlyArray<string>;
};

const commonChartProps = {
  width: 400,
  height: 400,
};

const AreaChartTestCase: TooltipPayloadTestCase = {
  name: 'AreaChart',
  Wrapper: ({ children }) => (
    <AreaChart {...commonChartProps} data={PageData}>
      <Area dataKey="uv" unit="kg" />
      <Area dataKey="pv" unit="$$$" name="My custom name" />
      <Area dataKey="amt" />
      {children}
    </AreaChart>
  ),
  mouseHoverSelector: '.recharts-wrapper',
  expectedTooltipTitle: '2',
  expectedTooltipContent: ['uv : 300kg', 'My custom name : 1398$$$', 'amt : 2400'],
};

const testCases: ReadonlyArray<TooltipPayloadTestCase> = [AreaChartTestCase];

describe('Tooltip payload', () => {
  afterEach(() => {
    restoreGetBoundingClientRect();
  });

  describe.each(testCases)(
    'as a child of $name',
    ({ Wrapper, mouseHoverSelector, expectedTooltipTitle, expectedTooltipContent }) => {
      it('should render expected tooltip payload', () => {
        const { container, debug } = render(
          <Wrapper>
            <Tooltip />
          </Wrapper>,
        );

        expect(container.querySelector('.recharts-tooltip-item-name')).toBeNull();
        expect(container.querySelector('.recharts-tooltip-item-value')).toBeNull();

        showTooltip(container, mouseHoverSelector, debug);

        const tooltip = getTooltip(container);
        expect(tooltip).toBeInTheDocument();
        expect(tooltip).toBeVisible();
        expect(tooltip.querySelector('.recharts-tooltip-label').textContent).toBe(expectedTooltipTitle);
        const tooltipItems = tooltip.querySelectorAll('.recharts-tooltip-item');
        expect(tooltipItems).toHaveLength(expectedTooltipContent.length);
        expect(Array.from(tooltipItems).map(item => item.textContent)).toEqual(expectedTooltipContent);
      });
    },
  );
});
