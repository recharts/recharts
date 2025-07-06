import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useActiveTooltipDataPoints } from '../../src/hooks';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { Area, AreaChart, Bar, ComposedChart, Line, Scatter, ScatterChart, Tooltip, XAxis } from '../../src';
import { PageData } from '../_data';
import { hideTooltip, showTooltip, showTooltipClick } from '../component/Tooltip/tooltipTestHelpers';
import {
  areaChartMouseHoverTooltipSelector,
  composedChartMouseHoverTooltipSelector,
  scatterChartMouseHoverTooltipSelector,
} from '../component/Tooltip/tooltipMouseHoverSelectors';
import { mockGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';

describe('useActiveTooltipDataPoints', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

  describe('when called outside of a chart', () => {
    it('should return undefined', () => {
      const spy = vi.fn();
      const Comp = (): ReactNode => {
        const result = useActiveTooltipDataPoints();
        spy(result);
        return null;
      };
      render(<Comp />);
      expect(spy).toHaveBeenLastCalledWith(undefined);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('as a child of AreaChart', () => {
    describe('without Tooltip element', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <AreaChart width={400} height={400} data={PageData}>
          <Area dataKey="pv" />
          {children}
        </AreaChart>
      ));

      it('should return undefined before any interactions', () => {
        const { spy } = renderTestCase(useActiveTooltipDataPoints);
        expect(spy).toHaveBeenLastCalledWith(undefined);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should return data point after mouse hover', () => {
        const { container, spy } = renderTestCase(useActiveTooltipDataPoints);
        showTooltip(container, areaChartMouseHoverTooltipSelector);

        expect(spy).toHaveBeenLastCalledWith([
          {
            amt: 2400,
            name: 'Page C',
            pv: 1398,
            uv: 300,
          },
        ]);
        expect(spy).toHaveBeenCalledTimes(3);
      });

      it('should again return undefined after mouse leave', () => {
        const { container, spy } = renderTestCase(useActiveTooltipDataPoints);
        showTooltip(container, areaChartMouseHoverTooltipSelector);
        hideTooltip(container, areaChartMouseHoverTooltipSelector);

        expect(spy).toHaveBeenLastCalledWith(undefined);
        expect(spy).toHaveBeenCalledTimes(4);
      });

      it('should return undefined after click', () => {
        const { container, spy } = renderTestCase(useActiveTooltipDataPoints);
        showTooltipClick(container, areaChartMouseHoverTooltipSelector);

        expect(spy).toHaveBeenLastCalledWith(undefined);
        expect(spy).toHaveBeenCalledTimes(3);
      });
    });

    describe('with defaultIndex', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <AreaChart width={400} height={400} data={PageData}>
          <Area dataKey="pv" />
          <Tooltip defaultIndex={1} />
          {children}
        </AreaChart>
      ));

      it('should return data point before any interactions', () => {
        const { spy } = renderTestCase(useActiveTooltipDataPoints);
        expect(spy).toHaveBeenLastCalledWith([
          {
            amt: 2400,
            name: 'Page B',
            pv: 4567,
            uv: 300,
          },
        ]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should return new data point after mouse hover', () => {
        const { container, spy } = renderTestCase(useActiveTooltipDataPoints);
        showTooltip(container, areaChartMouseHoverTooltipSelector);

        expect(spy).toHaveBeenLastCalledWith([
          {
            amt: 2400,
            name: 'Page C',
            pv: 1398,
            uv: 300,
          },
        ]);
        expect(spy).toHaveBeenCalledTimes(3);
      });

      it('should return undefined after mouse leave', () => {
        const { container, spy } = renderTestCase(useActiveTooltipDataPoints);
        showTooltip(container, areaChartMouseHoverTooltipSelector);
        hideTooltip(container, areaChartMouseHoverTooltipSelector);

        expect(spy).toHaveBeenLastCalledWith(undefined);
        expect(spy).toHaveBeenCalledTimes(4);
      });

      it('should return the defaultIndex data point after click', () => {
        const { container, spy } = renderTestCase(useActiveTooltipDataPoints);
        showTooltipClick(container, areaChartMouseHoverTooltipSelector);

        expect(spy).toHaveBeenLastCalledWith([
          {
            amt: 2400,
            name: 'Page B',
            pv: 4567,
            uv: 300,
          },
        ]);
        expect(spy).toHaveBeenCalledTimes(3);
      });
    });

    describe('with trigger=hover and active=true', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <AreaChart width={400} height={400} data={PageData}>
          <Area dataKey="pv" />
          <Tooltip trigger="hover" active />
          {children}
        </AreaChart>
      ));

      it('should return undefined before any interactions', () => {
        const { spy } = renderTestCase(useActiveTooltipDataPoints);
        expect(spy).toHaveBeenLastCalledWith(undefined);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should return data point after hover', () => {
        const { container, spy } = renderTestCase(useActiveTooltipDataPoints);
        showTooltip(container, areaChartMouseHoverTooltipSelector);

        expect(spy).toHaveBeenLastCalledWith([
          {
            amt: 2400,
            name: 'Page C',
            pv: 1398,
            uv: 300,
          },
        ]);
        expect(spy).toHaveBeenCalledTimes(3);
      });

      it('should continue returning the same payload after mouse leave', () => {
        const { container, spy } = renderTestCase(useActiveTooltipDataPoints);
        showTooltip(container, areaChartMouseHoverTooltipSelector);
        hideTooltip(container, areaChartMouseHoverTooltipSelector);

        expect(spy).toHaveBeenLastCalledWith([
          {
            amt: 2400,
            name: 'Page C',
            pv: 1398,
            uv: 300,
          },
        ]);
        expect(spy).toHaveBeenCalledTimes(4);
      });

      it('should return undefined after click', () => {
        const { container, spy } = renderTestCase(useActiveTooltipDataPoints);
        showTooltipClick(container, areaChartMouseHoverTooltipSelector);

        expect(spy).toHaveBeenLastCalledWith(undefined);
        expect(spy).toHaveBeenCalledTimes(3);
      });
    });

    describe('with Tooltip trigger=click', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <AreaChart width={400} height={400} data={PageData}>
          <Area dataKey="pv" />
          <Tooltip trigger="click" />
          {children}
        </AreaChart>
      ));

      it('should return undefined before any interactions', () => {
        const { spy } = renderTestCase(useActiveTooltipDataPoints);
        expect(spy).toHaveBeenLastCalledWith(undefined);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should return data point after click', () => {
        const { container, spy } = renderTestCase(useActiveTooltipDataPoints);
        showTooltipClick(container, areaChartMouseHoverTooltipSelector);

        expect(spy).toHaveBeenLastCalledWith([
          {
            amt: 2400,
            name: 'Page C',
            pv: 1398,
            uv: 300,
          },
        ]);
        expect(spy).toHaveBeenCalledTimes(3);
      });

      it('should continue returning the same payload after mouse leave', () => {
        const { container, spy } = renderTestCase(useActiveTooltipDataPoints);
        showTooltipClick(container, areaChartMouseHoverTooltipSelector);
        hideTooltip(container, areaChartMouseHoverTooltipSelector);

        expect(spy).toHaveBeenLastCalledWith([
          {
            amt: 2400,
            name: 'Page C',
            pv: 1398,
            uv: 300,
          },
        ]);
        expect(spy).toHaveBeenCalledTimes(3);
      });

      it('should return undefined after hover', () => {
        const { container, spy } = renderTestCase(useActiveTooltipDataPoints);
        showTooltip(container, areaChartMouseHoverTooltipSelector);

        expect(spy).toHaveBeenLastCalledWith(undefined);
        expect(spy).toHaveBeenCalledTimes(3);
      });
    });
  });

  describe('as a child of ScatterChart', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <ScatterChart width={400} height={400} data={PageData}>
        <Scatter dataKey="pv" />
        {children}
      </ScatterChart>
    ));

    it('should deduplicate the data points and return only one element', () => {
      const { container, spy } = renderTestCase(useActiveTooltipDataPoints);
      showTooltip(container, scatterChartMouseHoverTooltipSelector);

      /*
       * Scatter specialty is that it shows two rows in the Tooltip,
       * one for the XAxis and another for the YAxis.
       * This is fine and there is another metadata in the internal structure that makes it make sense
       * but externally that looks just weird when it returns two of the same items.
       * So let's deduplicate.
       */
      expect(spy).toHaveBeenLastCalledWith([
        {
          amt: 2400,
          name: 'Page A',
          pv: 2400,
          uv: 400,
        },
      ]);
      expect(spy).toHaveBeenCalledTimes(4);
    });
  });

  describe('as a child of ComposedChart with multiple graphical items sharing the same data', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <ComposedChart width={400} height={400} data={PageData}>
        <Area dataKey="pv" />
        <Bar dataKey="uv" />
        <Line dataKey="amt" />
        {children}
      </ComposedChart>
    ));

    it('should return one deduplicated data point', () => {
      const { container, spy } = renderTestCase(useActiveTooltipDataPoints);
      showTooltip(container, composedChartMouseHoverTooltipSelector);

      expect(spy).toHaveBeenLastCalledWith([
        {
          amt: 2400,
          name: 'Page C',
          pv: 1398,
          uv: 300,
        },
      ]);
      expect(spy).toHaveBeenCalledTimes(3);
    });
  });

  describe('as a child of ComposedChart with multiple graphical items each with their own data', () => {
    const dataUv = PageData.map(p => ({ name: p.name, uv: p.uv }));
    const dataPv = PageData.map(p => ({ name: p.name, pv: p.pv }));
    const dataAmt = PageData.map(p => ({ name: p.name, amt: p.amt }));
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <ComposedChart width={400} height={400} data={PageData}>
        <Area data={dataPv} dataKey="pv" />
        <Area data={dataUv} dataKey="uv" />
        <Line data={dataAmt} dataKey="amt" />
        <XAxis dataKey="name" allowDuplicatedCategory={false} />
        {children}
      </ComposedChart>
    ));

    it('should return one data point for each graphical item', () => {
      const { container, spy } = renderTestCase(useActiveTooltipDataPoints);
      showTooltip(container, composedChartMouseHoverTooltipSelector);

      expect(spy).toHaveBeenLastCalledWith([
        { name: 'Page C', pv: 1398 },
        { name: 'Page C', uv: 300 },
        { amt: 2400, name: 'Page C' },
      ]);
      expect(spy).toHaveBeenCalledTimes(3);
    });
  });
});
