import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { Selector } from '@reduxjs/toolkit';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ComposedChart,
  Line,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  Scatter,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from '../../../src';
import { PageData } from '../../_data';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { RechartsRootState } from '../../../src/state/store';
import { expectTooltipPayload, showTooltip } from './tooltipTestHelpers';
import {
  barChartMouseHoverTooltipSelector,
  composedChartMouseHoverTooltipSelector,
  pieChartMouseHoverTooltipSelector,
  radarChartMouseHoverTooltipSelector,
  radialBarChartMouseHoverTooltipSelector,
} from './tooltipMouseHoverSelectors';
import { selectTooltipPayload } from '../../../src/state/selectors/selectors';
import { mockGetBoundingClientRect } from '../../helper/mockGetBoundingClientRect';

describe('itemSorter in ComposedChart', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

  describe('without name prop', () => {
    function renderTestCase<T>(
      itemSorter: TooltipProps<number, string>['itemSorter'],
      selector?: Selector<RechartsRootState, T, never>,
    ) {
      return createSelectorTestCase(({ children }) => (
        <ComposedChart width={300} height={300} data={PageData}>
          <Area dataKey="uv" />
          <Bar dataKey="pv" />
          <Line dataKey="amt" />
          <Scatter dataKey="uv" />
          <YAxis dataKey="pv" />
          <XAxis dataKey="name" />
          <Tooltip itemSorter={itemSorter} />
          {children}
        </ComposedChart>
      ))(selector);
    }

    describe('when itemSorter is undefined', () => {
      it('should render payload sorted by name', () => {
        const { container } = renderTestCase(undefined);
        showTooltip(container, composedChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page D', [
          'amt : 2400',
          'name : Page D',
          'pv : 9800',
          'pv : 9800',
          'uv : 200',
        ]);
      });

      it('should select payload sorted by name', () => {
        const { spy } = renderTestCase(undefined, state => selectTooltipPayload(state, 'axis', 'hover', '0'));
        expect(spy).toHaveBeenLastCalledWith([
          {
            color: '#3182bd',
            dataKey: 'uv',
            fill: '#3182bd',
            hide: false,
            name: 'uv',
            nameKey: undefined,
            payload: {
              amt: 2400,
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            stroke: '#3182bd',
            strokeWidth: undefined,
            type: undefined,
            unit: undefined,
            value: 400,
          },
          {
            color: undefined,
            dataKey: 'pv',
            fill: undefined,
            hide: false,
            name: 'pv',
            nameKey: undefined,
            payload: {
              amt: 2400,
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            stroke: undefined,
            strokeWidth: undefined,
            type: undefined,
            unit: undefined,
            value: 2400,
          },
          {
            color: '#3182bd',
            dataKey: 'amt',
            fill: '#fff',
            hide: false,
            name: 'amt',
            nameKey: undefined,
            payload: {
              amt: 2400,
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            stroke: '#3182bd',
            strokeWidth: 1,
            type: undefined,
            unit: undefined,
            value: 2400,
          },
          {
            color: undefined,
            dataKey: 'name',
            fill: undefined,
            hide: false,
            name: 'name',
            nameKey: undefined,
            payload: {
              amt: 2400,
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            stroke: undefined,
            strokeWidth: undefined,
            type: undefined,
            unit: '',
            value: 'Page A',
          },
          {
            color: undefined,
            dataKey: 'pv',
            fill: undefined,
            hide: false,
            name: 'pv',
            nameKey: undefined,
            payload: {
              amt: 2400,
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            stroke: undefined,
            strokeWidth: undefined,
            type: undefined,
            unit: '',
            value: 2400,
          },
        ]);
        expect(spy).toHaveBeenCalledTimes(3);
      });
    });

    describe('when itemSorter=`dataKey`', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase('dataKey');
        showTooltip(container, composedChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page D', [
          'amt : 2400',
          'name : Page D',
          'pv : 9800',
          'pv : 9800',
          'uv : 200',
        ]);
      });
    });

    describe('when itemSorter=`value`', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase('value');
        showTooltip(container, composedChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page D', [
          'uv : 200',
          'amt : 2400',
          'pv : 9800',
          'name : Page D',
          'pv : 9800',
        ]);
      });
    });

    describe('when itemSorter=`name`', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase('name');
        showTooltip(container, composedChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page D', [
          'amt : 2400',
          'name : Page D',
          'pv : 9800',
          'pv : 9800',
          'uv : 200',
        ]);
      });
    });

    describe('when itemSorter is a function', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase(item => item.value);
        showTooltip(container, composedChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page D', [
          'uv : 200',
          'amt : 2400',
          'pv : 9800',
          'name : Page D',
          'pv : 9800',
        ]);
      });

      it('should call the function once for every payload item, and pass the item as an argument', () => {
        const spy = vi.fn();
        const { container } = renderTestCase(spy);
        expect(spy).toHaveBeenCalledTimes(0);
        showTooltip(container, composedChartMouseHoverTooltipSelector);
        expect(spy).toHaveBeenCalledTimes(5);
        expect(spy).toHaveBeenNthCalledWith(1, {
          color: '#3182bd',
          dataKey: 'uv',
          fill: '#3182bd',
          hide: false,
          name: 'uv',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page D',
            pv: 9800,
            uv: 200,
          },
          stroke: '#3182bd',
          strokeWidth: undefined,
          type: undefined,
          unit: undefined,
          value: 200,
        });
        expect(spy).toHaveBeenNthCalledWith(2, {
          color: undefined,
          dataKey: 'pv',
          fill: undefined,
          hide: false,
          name: 'pv',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page D',
            pv: 9800,
            uv: 200,
          },
          stroke: undefined,
          strokeWidth: undefined,
          type: undefined,
          unit: undefined,
          value: 9800,
        });
        expect(spy).toHaveBeenNthCalledWith(3, {
          color: '#3182bd',
          dataKey: 'amt',
          fill: '#fff',
          hide: false,
          name: 'amt',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page D',
            pv: 9800,
            uv: 200,
          },
          stroke: '#3182bd',
          strokeWidth: 1,
          type: undefined,
          unit: undefined,
          value: 2400,
        });
        expect(spy).toHaveBeenNthCalledWith(4, {
          color: undefined,
          dataKey: 'name',
          fill: undefined,
          hide: false,
          name: 'name',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page D',
            pv: 9800,
            uv: 200,
          },
          stroke: undefined,
          strokeWidth: undefined,
          type: undefined,
          unit: '',
          value: 'Page D',
        });
        expect(spy).toHaveBeenNthCalledWith(5, {
          color: undefined,
          dataKey: 'pv',
          fill: undefined,
          hide: false,
          name: 'pv',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page D',
            pv: 9800,
            uv: 200,
          },
          stroke: undefined,
          strokeWidth: undefined,
          type: undefined,
          unit: '',
          value: 9800,
        });
      });
    });
  });

  describe('with name prop', () => {
    function renderTestCase<T>(
      itemSorter: TooltipProps<number, string>['itemSorter'],
      selector?: Selector<RechartsRootState, T, never>,
    ) {
      return createSelectorTestCase(({ children }) => (
        <ComposedChart width={300} height={300} data={PageData}>
          <Line dataKey="amt" name="Line" />
          <Area dataKey="uv" name="Area" />
          <Bar dataKey="pv" name="Bar" />
          <Scatter dataKey="uv" name="Scatter" />
          <YAxis dataKey="pv" name="YAxis" />
          <XAxis dataKey="name" name="XAxis" />
          <Tooltip itemSorter={itemSorter} />
          {children}
        </ComposedChart>
      ))(selector);
    }

    describe('when itemSorter is undefined', () => {
      it('should render payload sorted by name', () => {
        const { container } = renderTestCase(undefined);
        showTooltip(container, composedChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page D', [
          'Area : 200',
          'Bar : 9800',
          'Line : 2400',
          'XAxis : Page D',
          'YAxis : 9800',
        ]);
      });

      it('should select payload sorted by name', () => {
        const { spy } = renderTestCase(undefined, state => selectTooltipPayload(state, 'axis', 'hover', '0'));
        expect(spy).toHaveBeenLastCalledWith([
          {
            color: '#3182bd',
            dataKey: 'amt',
            fill: '#fff',
            hide: false,
            name: 'Line',
            nameKey: undefined,
            payload: {
              amt: 2400,
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            stroke: '#3182bd',
            strokeWidth: 1,
            type: undefined,
            unit: undefined,
            value: 2400,
          },
          {
            color: '#3182bd',
            dataKey: 'uv',
            fill: '#3182bd',
            hide: false,
            name: 'Area',
            nameKey: undefined,
            payload: {
              amt: 2400,
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            stroke: '#3182bd',
            strokeWidth: undefined,
            type: undefined,
            unit: undefined,
            value: 400,
          },
          {
            color: undefined,
            dataKey: 'pv',
            fill: undefined,
            hide: false,
            name: 'Bar',
            nameKey: undefined,
            payload: {
              amt: 2400,
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            stroke: undefined,
            strokeWidth: undefined,
            type: undefined,
            unit: undefined,
            value: 2400,
          },
          {
            color: undefined,
            dataKey: 'name',
            fill: undefined,
            hide: false,
            name: 'XAxis',
            nameKey: undefined,
            payload: {
              amt: 2400,
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            stroke: undefined,
            strokeWidth: undefined,
            type: undefined,
            unit: '',
            value: 'Page A',
          },
          {
            color: undefined,
            dataKey: 'pv',
            fill: undefined,
            hide: false,
            name: 'YAxis',
            nameKey: undefined,
            payload: {
              amt: 2400,
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            stroke: undefined,
            strokeWidth: undefined,
            type: undefined,
            unit: '',
            value: 2400,
          },
        ]);
        expect(spy).toHaveBeenCalledTimes(3);
      });
    });

    describe('when itemSorter=`dataKey`', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase('dataKey');
        showTooltip(container, composedChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page D', [
          'Line : 2400',
          'XAxis : Page D',
          'Bar : 9800',
          'YAxis : 9800',
          'Area : 200',
        ]);
      });
    });

    describe('when itemSorter=`value`', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase('value');
        showTooltip(container, composedChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page D', [
          'Area : 200',
          'Line : 2400',
          'Bar : 9800',
          'XAxis : Page D',
          'YAxis : 9800',
        ]);
      });
    });

    describe('when itemSorter=`name`', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase('name');
        showTooltip(container, composedChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page D', [
          'Area : 200',
          'Bar : 9800',
          'Line : 2400',
          'XAxis : Page D',
          'YAxis : 9800',
        ]);
      });
    });

    describe('when itemSorter is a function', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase(item => item.value);
        showTooltip(container, composedChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page D', [
          'Area : 200',
          'Line : 2400',
          'Bar : 9800',
          'XAxis : Page D',
          'YAxis : 9800',
        ]);
      });

      it('should call the function once for every payload item, and pass the item as an argument', () => {
        const spy = vi.fn();
        const { container } = renderTestCase(spy);
        expect(spy).toHaveBeenCalledTimes(0);
        showTooltip(container, composedChartMouseHoverTooltipSelector);
        expect(spy).toHaveBeenCalledTimes(5);
        expect(spy).toHaveBeenNthCalledWith(1, {
          color: '#3182bd',
          dataKey: 'amt',
          fill: '#fff',
          hide: false,
          name: 'Line',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page D',
            pv: 9800,
            uv: 200,
          },
          stroke: '#3182bd',
          strokeWidth: 1,
          type: undefined,
          unit: undefined,
          value: 2400,
        });
        expect(spy).toHaveBeenNthCalledWith(2, {
          color: '#3182bd',
          dataKey: 'uv',
          fill: '#3182bd',
          hide: false,
          name: 'Area',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page D',
            pv: 9800,
            uv: 200,
          },
          stroke: '#3182bd',
          strokeWidth: undefined,
          type: undefined,
          unit: undefined,
          value: 200,
        });
        expect(spy).toHaveBeenNthCalledWith(3, {
          color: undefined,
          dataKey: 'pv',
          fill: undefined,
          hide: false,
          name: 'Bar',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page D',
            pv: 9800,
            uv: 200,
          },
          stroke: undefined,
          strokeWidth: undefined,
          type: undefined,
          unit: undefined,
          value: 9800,
        });
        expect(spy).toHaveBeenNthCalledWith(4, {
          color: undefined,
          dataKey: 'name',
          fill: undefined,
          hide: false,
          name: 'XAxis',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page D',
            pv: 9800,
            uv: 200,
          },
          stroke: undefined,
          strokeWidth: undefined,
          type: undefined,
          unit: '',
          value: 'Page D',
        });
        expect(spy).toHaveBeenNthCalledWith(5, {
          color: undefined,
          dataKey: 'pv',
          fill: undefined,
          hide: false,
          name: 'YAxis',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page D',
            pv: 9800,
            uv: 200,
          },
          stroke: undefined,
          strokeWidth: undefined,
          type: undefined,
          unit: '',
          value: 9800,
        });
      });
    });
  });
});

describe('itemSorter in PieChart', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

  function renderTestCase<T>(
    itemSorter: TooltipProps<number, string>['itemSorter'],
    selector?: Selector<RechartsRootState, T, never>,
  ) {
    return createSelectorTestCase(({ children }) => (
      <PieChart width={300} height={300}>
        <Pie data={PageData} dataKey="uv" isAnimationActive={false} />
        <Tooltip itemSorter={itemSorter} />
        {children}
      </PieChart>
    ))(selector);
  }

  describe('when itemSorter is undefined', () => {
    it('should render only one item in the Tooltip so there is nothing to sort', () => {
      const { container } = renderTestCase(undefined);
      showTooltip(container, pieChartMouseHoverTooltipSelector);
      expectTooltipPayload(container, '', ['Page A : 400']);
    });

    it('should select payload with only one item so there is nothing to sort', () => {
      const { spy } = renderTestCase(undefined, state => selectTooltipPayload(state, 'item', 'hover', '0'));
      expect(spy).toHaveBeenLastCalledWith([
        {
          color: undefined,
          dataKey: 'uv',
          fill: undefined,
          hide: false,
          name: 'Page A',
          nameKey: 'name',
          payload: {
            amt: 2400,
            name: 'Page A',
            pv: 2400,
            uv: 400,
          },
          stroke: '#fff',
          strokeWidth: undefined,
          type: undefined,
          unit: undefined,
          value: 400,
        },
      ]);
    });
  });
});

describe('itemSorter in RadarChart', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

  describe('without name prop', () => {
    function renderTestCase<T>(
      itemSorter: TooltipProps<number, string>['itemSorter'],
      selector?: Selector<RechartsRootState, T, never>,
    ) {
      return createSelectorTestCase(({ children }) => (
        <RadarChart width={600} height={600} data={PageData}>
          <Radar dataKey="uv" isAnimationActive={false} />
          <Radar dataKey="pv" isAnimationActive={false} />
          <Radar dataKey="amt" isAnimationActive={false} />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis dataKey="uv" />
          <Tooltip itemSorter={itemSorter} />
          {children}
        </RadarChart>
      ))(selector);
    }

    describe('when itemSorter is undefined', () => {
      it('should render payload sorted by name', () => {
        const { container } = renderTestCase(undefined);
        showTooltip(container, radarChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page F', ['amt : 2400', 'pv : 4800', 'uv : 189']);
      });

      it('should select payload sorted by name', () => {
        const { spy } = renderTestCase(undefined, state => selectTooltipPayload(state, 'axis', 'hover', '0'));
        expect(spy).toHaveBeenLastCalledWith([
          {
            color: undefined,
            dataKey: 'uv',
            fill: undefined,
            hide: false,
            name: 'uv',
            nameKey: undefined,
            payload: {
              amt: 2400,
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            stroke: undefined,
            strokeWidth: undefined,
            type: undefined,
            unit: '',
            value: 400,
          },
          {
            color: undefined,
            dataKey: 'pv',
            fill: undefined,
            hide: false,
            name: 'pv',
            nameKey: undefined,
            payload: {
              amt: 2400,
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            stroke: undefined,
            strokeWidth: undefined,
            type: undefined,
            unit: '',
            value: 2400,
          },
          {
            color: undefined,
            dataKey: 'amt',
            fill: undefined,
            hide: false,
            name: 'amt',
            nameKey: undefined,
            payload: {
              amt: 2400,
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            stroke: undefined,
            strokeWidth: undefined,
            type: undefined,
            unit: '',
            value: 2400,
          },
        ]);
      });
    });

    describe('when itemSorter=`dataKey`', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase('dataKey');
        showTooltip(container, radarChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page F', ['amt : 2400', 'pv : 4800', 'uv : 189']);
      });
    });

    describe('when itemSorter=`value`', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase('value');
        showTooltip(container, radarChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page F', ['uv : 189', 'amt : 2400', 'pv : 4800']);
      });
    });

    describe('when itemSorter=`name`', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase('name');
        showTooltip(container, radarChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page F', ['amt : 2400', 'pv : 4800', 'uv : 189']);
      });
    });

    describe('when itemSorter is a function', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase(item => item.value);
        showTooltip(container, radarChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page F', ['uv : 189', 'amt : 2400', 'pv : 4800']);
      });

      it('should call the function once for every payload item, and pass the item as an argument', () => {
        const spy = vi.fn();
        const { container } = renderTestCase(spy);
        expect(spy).toHaveBeenCalledTimes(0);
        showTooltip(container, radarChartMouseHoverTooltipSelector);
        expect(spy).toHaveBeenCalledTimes(3);
        expect(spy).toHaveBeenNthCalledWith(1, {
          color: undefined,
          dataKey: 'uv',
          fill: undefined,
          hide: false,
          name: 'uv',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page F',
            pv: 4800,
            uv: 189,
          },
          stroke: undefined,
          strokeWidth: undefined,
          type: undefined,
          unit: '',
          value: 189,
        });
        expect(spy).toHaveBeenNthCalledWith(2, {
          color: undefined,
          dataKey: 'pv',
          fill: undefined,
          hide: false,
          name: 'pv',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page F',
            pv: 4800,
            uv: 189,
          },
          stroke: undefined,
          strokeWidth: undefined,
          type: undefined,
          unit: '',
          value: 4800,
        });
        expect(spy).toHaveBeenNthCalledWith(3, {
          color: undefined,
          dataKey: 'amt',
          fill: undefined,
          hide: false,
          name: 'amt',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page F',
            pv: 4800,
            uv: 189,
          },
          stroke: undefined,
          strokeWidth: undefined,
          type: undefined,
          unit: '',
          value: 2400,
        });
      });
    });
  });

  describe('with name prop', () => {
    function renderTestCase<T>(
      itemSorter: TooltipProps<number, string>['itemSorter'],
      selector?: Selector<RechartsRootState, T, never>,
    ) {
      return createSelectorTestCase(({ children }) => (
        <RadarChart width={600} height={600} data={PageData}>
          <Radar dataKey="uv" isAnimationActive={false} name="Radar-uv" />
          <Radar dataKey="pv" isAnimationActive={false} name="Radar-pv" />
          <Radar dataKey="amt" isAnimationActive={false} name="Radar-amt" />
          <PolarAngleAxis dataKey="name" name="PolarAngleAxis" />
          <PolarRadiusAxis dataKey="uv" name="PolarRadiusAxis" />
          <Tooltip itemSorter={itemSorter} />
          {children}
        </RadarChart>
      ))(selector);
    }

    describe('when itemSorter is undefined', () => {
      it('should render payload sorted by name', () => {
        const { container } = renderTestCase(undefined);
        showTooltip(container, radarChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page F', ['Radar-amt : 2400', 'Radar-pv : 4800', 'Radar-uv : 189']);
      });

      it('should select payload sorted by name', () => {
        const { spy } = renderTestCase(undefined, state => selectTooltipPayload(state, 'axis', 'hover', '0'));
        expect(spy).toHaveBeenLastCalledWith([
          {
            color: undefined,
            dataKey: 'uv',
            fill: undefined,
            hide: false,
            name: 'Radar-uv',
            nameKey: undefined,
            payload: {
              amt: 2400,
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            stroke: undefined,
            strokeWidth: undefined,
            type: undefined,
            unit: '',
            value: 400,
          },
          {
            color: undefined,
            dataKey: 'pv',
            fill: undefined,
            hide: false,
            name: 'Radar-pv',
            nameKey: undefined,
            payload: {
              amt: 2400,
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            stroke: undefined,
            strokeWidth: undefined,
            type: undefined,
            unit: '',
            value: 2400,
          },
          {
            color: undefined,
            dataKey: 'amt',
            fill: undefined,
            hide: false,
            name: 'Radar-amt',
            nameKey: undefined,
            payload: {
              amt: 2400,
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            stroke: undefined,
            strokeWidth: undefined,
            type: undefined,
            unit: '',
            value: 2400,
          },
        ]);
      });
    });

    describe('when itemSorter=`dataKey`', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase('dataKey');
        showTooltip(container, radarChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page F', ['Radar-amt : 2400', 'Radar-pv : 4800', 'Radar-uv : 189']);
      });
    });

    describe('when itemSorter=`value`', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase('value');
        showTooltip(container, radarChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page F', ['Radar-uv : 189', 'Radar-amt : 2400', 'Radar-pv : 4800']);
      });
    });

    describe('when itemSorter=`name`', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase('name');
        showTooltip(container, radarChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page F', ['Radar-amt : 2400', 'Radar-pv : 4800', 'Radar-uv : 189']);
      });
    });
  });
});

describe('itemSorter in RadialBarChart', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

  describe('without name prop', () => {
    function renderTestCase<T>(
      itemSorter: TooltipProps<number, string>['itemSorter'],
      selector?: Selector<RechartsRootState, T, never>,
    ) {
      return createSelectorTestCase(({ children }) => (
        <RadialBarChart width={600} height={600} data={PageData}>
          <RadialBar dataKey="uv" isAnimationActive={false} />
          <RadialBar dataKey="pv" isAnimationActive={false} />
          <RadialBar dataKey="amt" isAnimationActive={false} />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis dataKey="uv" />
          <Tooltip itemSorter={itemSorter} />
          {children}
        </RadialBarChart>
      ))(selector);
    }

    describe('when itemSorter is undefined', () => {
      it('should render payload sorted by name', () => {
        const { container } = renderTestCase(undefined);
        showTooltip(container, radialBarChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, '400', ['amt : 2400', 'pv : 2400', 'uv : 400']);
      });

      it('should select payload sorted by name', () => {
        const { spy } = renderTestCase(undefined, state => selectTooltipPayload(state, 'axis', 'hover', '0'));
        expect(spy).toHaveBeenLastCalledWith([
          {
            color: undefined,
            dataKey: 'uv',
            fill: undefined,
            hide: false,
            name: 'uv',
            nameKey: undefined,
            payload: {
              amt: 2400,
              background: {
                cx: 300,
                cy: 300,
                endAngle: 360,
                innerRadius: 70.8,
                outerRadius: 98.8,
                startAngle: 0,
              },
              cx: 300,
              cy: 300,
              endAngle: NaN,
              innerRadius: 70.8,
              name: 'Page A',
              outerRadius: 98.8,
              payload: {
                amt: 2400,
                name: 'Page A',
                pv: 2400,
                uv: 400,
              },
              pv: 2400,
              startAngle: undefined,
              uv: 400,
              value: 400,
            },
            stroke: undefined,
            strokeWidth: undefined,
            type: undefined,
            unit: '',
            value: 400,
          },
          {
            color: undefined,
            dataKey: 'pv',
            fill: undefined,
            hide: false,
            name: 'pv',
            nameKey: undefined,
            payload: {
              amt: 2400,
              background: {
                cx: 300,
                cy: 300,
                endAngle: 360,
                innerRadius: 102.8,
                outerRadius: 130.8,
                startAngle: 0,
              },
              cx: 300,
              cy: 300,
              endAngle: NaN,
              innerRadius: 102.8,
              name: 'Page A',
              outerRadius: 130.8,
              payload: {
                amt: 2400,
                name: 'Page A',
                pv: 2400,
                uv: 400,
              },
              pv: 2400,
              startAngle: undefined,
              uv: 400,
              value: 2400,
            },
            stroke: undefined,
            strokeWidth: undefined,
            type: undefined,
            unit: '',
            value: 2400,
          },
          {
            color: undefined,
            dataKey: 'amt',
            fill: undefined,
            hide: false,
            name: 'amt',
            nameKey: undefined,
            payload: {
              amt: 2400,
              background: {
                cx: 300,
                cy: 300,
                endAngle: 360,
                innerRadius: 134.8,
                outerRadius: 162.8,
                startAngle: 0,
              },
              cx: 300,
              cy: 300,
              endAngle: NaN,
              innerRadius: 134.8,
              name: 'Page A',
              outerRadius: 162.8,
              payload: {
                amt: 2400,
                name: 'Page A',
                pv: 2400,
                uv: 400,
              },
              pv: 2400,
              startAngle: undefined,
              uv: 400,
              value: 2400,
            },
            stroke: undefined,
            strokeWidth: undefined,
            type: undefined,
            unit: '',
            value: 2400,
          },
        ]);
      });
    });

    describe('when itemSorter=`dataKey`', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase('dataKey');
        showTooltip(container, radialBarChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, '400', ['amt : 2400', 'pv : 2400', 'uv : 400']);
      });
    });

    describe('when itemSorter=`value`', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase('value');
        showTooltip(container, radialBarChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, '400', ['uv : 400', 'pv : 2400', 'amt : 2400']);
      });
    });

    describe('when itemSorter=`name`', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase('name');
        showTooltip(container, radialBarChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, '400', ['amt : 2400', 'pv : 2400', 'uv : 400']);
      });
    });

    describe('when itemSorter is a function', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase(item => item.value);
        showTooltip(container, radialBarChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, '400', ['uv : 400', 'pv : 2400', 'amt : 2400']);
      });

      it('should call the function once for every payload item, and pass the item as an argument', () => {
        const spy = vi.fn();
        const { container } = renderTestCase(spy);
        expect(spy).toHaveBeenCalledTimes(0);
        showTooltip(container, radialBarChartMouseHoverTooltipSelector);
        expect(spy).toHaveBeenCalledTimes(3);
        expect(spy).toHaveBeenNthCalledWith(1, {
          color: undefined,
          dataKey: 'uv',
          fill: undefined,
          hide: false,
          name: 'uv',
          nameKey: undefined,
          payload: {
            amt: 2400,
            background: {
              cx: 300,
              cy: 300,
              endAngle: 360,
              innerRadius: 70.8,
              outerRadius: 98.8,
              startAngle: 0,
            },
            cx: 300,
            cy: 300,
            endAngle: NaN,
            innerRadius: 70.8,
            name: 'Page A',
            outerRadius: 98.8,
            payload: {
              amt: 2400,
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            pv: 2400,
            startAngle: undefined,
            uv: 400,
            value: 400,
          },
          stroke: undefined,
          strokeWidth: undefined,
          type: undefined,
          unit: '',
          value: 400,
        });
        expect(spy).toHaveBeenNthCalledWith(2, {
          color: undefined,
          dataKey: 'pv',
          fill: undefined,
          hide: false,
          name: 'pv',
          nameKey: undefined,
          payload: {
            amt: 2400,
            background: {
              cx: 300,
              cy: 300,
              endAngle: 360,
              innerRadius: 102.8,
              outerRadius: 130.8,
              startAngle: 0,
            },
            cx: 300,
            cy: 300,
            endAngle: NaN,
            innerRadius: 102.8,
            name: 'Page A',
            outerRadius: 130.8,
            payload: {
              amt: 2400,
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            pv: 2400,
            startAngle: undefined,
            uv: 400,
            value: 2400,
          },
          stroke: undefined,
          strokeWidth: undefined,
          type: undefined,
          unit: '',
          value: 2400,
        });
        expect(spy).toHaveBeenNthCalledWith(3, {
          color: undefined,
          dataKey: 'amt',
          fill: undefined,
          hide: false,
          name: 'amt',
          nameKey: undefined,
          payload: {
            amt: 2400,
            background: {
              cx: 300,
              cy: 300,
              endAngle: 360,
              innerRadius: 134.8,
              outerRadius: 162.8,
              startAngle: 0,
            },
            cx: 300,
            cy: 300,
            endAngle: NaN,
            innerRadius: 134.8,
            name: 'Page A',
            outerRadius: 162.8,
            payload: {
              amt: 2400,
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            pv: 2400,
            startAngle: undefined,
            uv: 400,
            value: 2400,
          },
          stroke: undefined,
          strokeWidth: undefined,
          type: undefined,
          unit: '',
          value: 2400,
        });
      });
    });
  });

  describe('with name prop', () => {
    function renderTestCase<T>(
      itemSorter: TooltipProps<number, string>['itemSorter'],
      selector?: Selector<RechartsRootState, T, never>,
    ) {
      return createSelectorTestCase(({ children }) => (
        <RadialBarChart width={600} height={600} data={PageData}>
          <RadialBar dataKey="uv" isAnimationActive={false} name="RadialBar-uv" />
          <RadialBar dataKey="pv" isAnimationActive={false} name="RadialBar-pv" />
          <RadialBar dataKey="amt" isAnimationActive={false} name="RadialBar-amt" />
          <PolarAngleAxis dataKey="name" name="PolarAngleAxis" />
          <PolarRadiusAxis dataKey="uv" name="PolarRadiusAxis" />
          <Tooltip itemSorter={itemSorter} />
          {children}
        </RadialBarChart>
      ))(selector);
    }

    describe('when itemSorter is undefined', () => {
      it('should render payload sorted by name', () => {
        const { container } = renderTestCase(undefined);
        showTooltip(container, radialBarChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, '400', ['RadialBar-amt : 2400', 'RadialBar-pv : 2400', 'RadialBar-uv : 400']);
      });

      it('should select payload sorted by name', () => {
        const { spy } = renderTestCase(undefined, state => selectTooltipPayload(state, 'axis', 'hover', '0'));
        expect(spy).toHaveBeenLastCalledWith([
          {
            color: undefined,
            dataKey: 'uv',
            fill: undefined,
            hide: false,
            name: 'RadialBar-uv',
            nameKey: undefined,
            payload: {
              amt: 2400,
              background: {
                cx: 300,
                cy: 300,
                endAngle: 360,
                innerRadius: 70.8,
                outerRadius: 98.8,
                startAngle: 0,
              },
              cx: 300,
              cy: 300,
              endAngle: NaN,
              innerRadius: 70.8,
              name: 'Page A',
              outerRadius: 98.8,
              payload: {
                amt: 2400,
                name: 'Page A',
                pv: 2400,
                uv: 400,
              },
              pv: 2400,
              startAngle: undefined,
              uv: 400,
              value: 400,
            },
            stroke: undefined,
            strokeWidth: undefined,
            type: undefined,
            unit: '',
            value: 400,
          },
          {
            color: undefined,
            dataKey: 'pv',
            fill: undefined,
            hide: false,
            name: 'RadialBar-pv',
            nameKey: undefined,
            payload: {
              amt: 2400,
              background: {
                cx: 300,
                cy: 300,
                endAngle: 360,
                innerRadius: 102.8,
                outerRadius: 130.8,
                startAngle: 0,
              },
              cx: 300,
              cy: 300,
              endAngle: NaN,
              innerRadius: 102.8,
              name: 'Page A',
              outerRadius: 130.8,
              payload: {
                amt: 2400,
                name: 'Page A',
                pv: 2400,
                uv: 400,
              },
              pv: 2400,
              startAngle: undefined,
              uv: 400,
              value: 2400,
            },
            stroke: undefined,
            strokeWidth: undefined,
            type: undefined,
            unit: '',
            value: 2400,
          },
          {
            color: undefined,
            dataKey: 'amt',
            fill: undefined,
            hide: false,
            name: 'RadialBar-amt',
            nameKey: undefined,
            payload: {
              amt: 2400,
              background: {
                cx: 300,
                cy: 300,
                endAngle: 360,
                innerRadius: 134.8,
                outerRadius: 162.8,
                startAngle: 0,
              },
              cx: 300,
              cy: 300,
              endAngle: NaN,
              innerRadius: 134.8,
              name: 'Page A',
              outerRadius: 162.8,
              payload: {
                amt: 2400,
                name: 'Page A',
                pv: 2400,
                uv: 400,
              },
              pv: 2400,
              startAngle: undefined,
              uv: 400,
              value: 2400,
            },
            stroke: undefined,
            strokeWidth: undefined,
            type: undefined,
            unit: '',
            value: 2400,
          },
        ]);
      });
    });

    describe('when itemSorter=`dataKey`', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase('dataKey');
        showTooltip(container, radialBarChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, '400', ['RadialBar-amt : 2400', 'RadialBar-pv : 2400', 'RadialBar-uv : 400']);
      });
    });

    describe('when itemSorter=`value`', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase('value');
        showTooltip(container, radialBarChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, '400', ['RadialBar-uv : 400', 'RadialBar-pv : 2400', 'RadialBar-amt : 2400']);
      });
    });

    describe('when itemSorter=`name`', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase('name');
        showTooltip(container, radialBarChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, '400', ['RadialBar-amt : 2400', 'RadialBar-pv : 2400', 'RadialBar-uv : 400']);
      });
    });

    describe('when itemSorter is a function', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase(item => item.value);
        showTooltip(container, radialBarChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, '400', ['RadialBar-uv : 400', 'RadialBar-pv : 2400', 'RadialBar-amt : 2400']);
      });

      it('should call the function once for every payload item, and pass the item as an argument', () => {
        const spy = vi.fn();
        const { container } = renderTestCase(spy);
        expect(spy).toHaveBeenCalledTimes(0);
        showTooltip(container, radialBarChartMouseHoverTooltipSelector);
        expect(spy).toHaveBeenCalledTimes(3);
        expect(spy).toHaveBeenNthCalledWith(1, {
          color: undefined,
          dataKey: 'uv',
          fill: undefined,
          hide: false,
          name: 'RadialBar-uv',
          nameKey: undefined,
          payload: {
            amt: 2400,
            background: {
              cx: 300,
              cy: 300,
              endAngle: 360,
              innerRadius: 70.8,
              outerRadius: 98.8,
              startAngle: 0,
            },
            cx: 300,
            cy: 300,
            endAngle: NaN,
            innerRadius: 70.8,
            name: 'Page A',
            outerRadius: 98.8,
            payload: {
              amt: 2400,
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            pv: 2400,
            startAngle: undefined,
            uv: 400,
            value: 400,
          },
          stroke: undefined,
          strokeWidth: undefined,
          type: undefined,
          unit: '',
          value: 400,
        });
        expect(spy).toHaveBeenNthCalledWith(2, {
          color: undefined,
          dataKey: 'pv',
          fill: undefined,
          hide: false,
          name: 'RadialBar-pv',
          nameKey: undefined,
          payload: {
            amt: 2400,
            background: {
              cx: 300,
              cy: 300,
              endAngle: 360,
              innerRadius: 102.8,
              outerRadius: 130.8,
              startAngle: 0,
            },
            cx: 300,
            cy: 300,
            endAngle: NaN,
            innerRadius: 102.8,
            name: 'Page A',
            outerRadius: 130.8,
            payload: {
              amt: 2400,
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            pv: 2400,
            startAngle: undefined,
            uv: 400,
            value: 2400,
          },
          stroke: undefined,
          strokeWidth: undefined,
          type: undefined,
          unit: '',
          value: 2400,
        });
        expect(spy).toHaveBeenNthCalledWith(3, {
          color: undefined,
          dataKey: 'amt',
          fill: undefined,
          hide: false,
          name: 'RadialBar-amt',
          nameKey: undefined,
          payload: {
            amt: 2400,
            background: {
              cx: 300,
              cy: 300,
              endAngle: 360,
              innerRadius: 134.8,
              outerRadius: 162.8,
              startAngle: 0,
            },
            cx: 300,
            cy: 300,
            endAngle: NaN,
            innerRadius: 134.8,
            name: 'Page A',
            outerRadius: 162.8,
            payload: {
              amt: 2400,
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            pv: 2400,
            startAngle: undefined,
            uv: 400,
            value: 2400,
          },
          stroke: undefined,
          strokeWidth: undefined,
          type: undefined,
          unit: '',
          value: 2400,
        });
      });
    });
  });
});

// Funnel, Treemap, Sankey - always only render one payload item so there is nothing to sort either

describe('itemSorter in stacked BarChart', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

  describe('without name prop', () => {
    function renderTestCase<T>(
      itemSorter: TooltipProps<number, string>['itemSorter'],
      selector?: Selector<RechartsRootState, T, never>,
    ) {
      return createSelectorTestCase(({ children }) => (
        <BarChart width={300} height={300} data={PageData}>
          <Bar dataKey="pv" stackId="stack-1" />
          <Bar dataKey="uv" stackId="stack-1" />
          <Bar dataKey="amt" stackId="stack-1" />
          <YAxis />
          <XAxis dataKey="name" />
          <Tooltip itemSorter={itemSorter} />
          {children}
        </BarChart>
      ))(selector);
    }

    describe('when itemSorter is undefined', () => {
      it('should render payload sorted by name', () => {
        const { container } = renderTestCase(undefined);
        showTooltip(container, barChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page D', ['amt : 2400', 'pv : 9800', 'uv : 200']);
      });

      it('should select payload sorted by name', () => {
        const { spy } = renderTestCase(undefined, state => selectTooltipPayload(state, 'axis', 'hover', '0'));
        expect(spy).toHaveBeenLastCalledWith([
          {
            color: undefined,
            dataKey: 'pv',
            fill: undefined,
            hide: false,
            name: 'pv',
            nameKey: undefined,
            payload: {
              amt: 2400,
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            stroke: undefined,
            strokeWidth: undefined,
            type: undefined,
            unit: undefined,
            value: 2400,
          },
          {
            color: undefined,
            dataKey: 'uv',
            fill: undefined,
            hide: false,
            name: 'uv',
            nameKey: undefined,
            payload: {
              amt: 2400,
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            stroke: undefined,
            strokeWidth: undefined,
            type: undefined,
            unit: undefined,
            value: 400,
          },
          {
            color: undefined,
            dataKey: 'amt',
            fill: undefined,
            hide: false,
            name: 'amt',
            nameKey: undefined,
            payload: {
              amt: 2400,
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            stroke: undefined,
            strokeWidth: undefined,
            type: undefined,
            unit: undefined,
            value: 2400,
          },
        ]);
      });
    });

    describe('when itemSorter=`dataKey`', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase('dataKey');
        showTooltip(container, barChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page D', ['amt : 2400', 'pv : 9800', 'uv : 200']);
      });
    });

    describe('when itemSorter=`value`', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase('value');
        showTooltip(container, barChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page D', ['uv : 200', 'amt : 2400', 'pv : 9800']);
      });
    });

    describe('when itemSorter=`name`', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase('name');
        showTooltip(container, barChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page D', ['amt : 2400', 'pv : 9800', 'uv : 200']);
      });
    });

    describe('when itemSorter is a function', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase(item => item.value);
        showTooltip(container, barChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page D', ['uv : 200', 'amt : 2400', 'pv : 9800']);
      });

      it('should call the function once for every payload item, and pass the item as an argument', () => {
        const spy = vi.fn();
        const { container } = renderTestCase(spy);
        expect(spy).toHaveBeenCalledTimes(0);
        showTooltip(container, barChartMouseHoverTooltipSelector);
        expect(spy).toHaveBeenCalledTimes(3);
        expect(spy).toHaveBeenNthCalledWith(1, {
          color: undefined,
          dataKey: 'pv',
          fill: undefined,
          hide: false,
          name: 'pv',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page D',
            pv: 9800,
            uv: 200,
          },
          stroke: undefined,
          strokeWidth: undefined,
          type: undefined,
          unit: undefined,
          value: 9800,
        });
        expect(spy).toHaveBeenNthCalledWith(2, {
          color: undefined,
          dataKey: 'uv',
          fill: undefined,
          hide: false,
          name: 'uv',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page D',
            pv: 9800,
            uv: 200,
          },
          stroke: undefined,
          strokeWidth: undefined,
          type: undefined,
          unit: undefined,
          value: 200,
        });
        expect(spy).toHaveBeenNthCalledWith(3, {
          color: undefined,
          dataKey: 'amt',
          fill: undefined,
          hide: false,
          name: 'amt',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page D',
            pv: 9800,
            uv: 200,
          },
          stroke: undefined,
          strokeWidth: undefined,
          type: undefined,
          unit: undefined,
          value: 2400,
        });
      });
    });
  });

  describe('with name prop', () => {
    function renderTestCase<T>(
      itemSorter: TooltipProps<number, string>['itemSorter'],
      selector?: Selector<RechartsRootState, T, never>,
    ) {
      return createSelectorTestCase(({ children }) => (
        <BarChart width={300} height={300} data={PageData}>
          <Bar dataKey="pv" stackId="stack-1" name="Bar-pv" />
          <Bar dataKey="uv" stackId="stack-1" name="Bar-uv" />
          <Bar dataKey="amt" stackId="stack-1" name="Bar-amt" />
          <YAxis name="YAxis" />
          <XAxis dataKey="name" name="XAxis" />
          <Tooltip itemSorter={itemSorter} />
          {children}
        </BarChart>
      ))(selector);
    }

    describe('when itemSorter is undefined', () => {
      it('should render payload sorted by name', () => {
        const { container } = renderTestCase(undefined);
        showTooltip(container, barChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page D', ['Bar-amt : 2400', 'Bar-pv : 9800', 'Bar-uv : 200']);
      });

      it('should select payload sorted by name', () => {
        const { spy } = renderTestCase(undefined, state => selectTooltipPayload(state, 'axis', 'hover', '0'));
        expect(spy).toHaveBeenLastCalledWith([
          {
            color: undefined,
            dataKey: 'pv',
            fill: undefined,
            hide: false,
            name: 'Bar-pv',
            nameKey: undefined,
            payload: {
              amt: 2400,
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            stroke: undefined,
            strokeWidth: undefined,
            type: undefined,
            unit: undefined,
            value: 2400,
          },
          {
            color: undefined,
            dataKey: 'uv',
            fill: undefined,
            hide: false,
            name: 'Bar-uv',
            nameKey: undefined,
            payload: {
              amt: 2400,
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            stroke: undefined,
            strokeWidth: undefined,
            type: undefined,
            unit: undefined,
            value: 400,
          },
          {
            color: undefined,
            dataKey: 'amt',
            fill: undefined,
            hide: false,
            name: 'Bar-amt',
            nameKey: undefined,
            payload: {
              amt: 2400,
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            stroke: undefined,
            strokeWidth: undefined,
            type: undefined,
            unit: undefined,
            value: 2400,
          },
        ]);
      });
    });

    describe('when itemSorter=`dataKey`', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase('dataKey');
        showTooltip(container, barChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page D', ['Bar-amt : 2400', 'Bar-pv : 9800', 'Bar-uv : 200']);
      });
    });

    describe('when itemSorter=`value`', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase('value');
        showTooltip(container, barChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page D', ['Bar-uv : 200', 'Bar-amt : 2400', 'Bar-pv : 9800']);
      });
    });

    describe('when itemSorter=`name`', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase('name');
        showTooltip(container, barChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page D', ['Bar-amt : 2400', 'Bar-pv : 9800', 'Bar-uv : 200']);
      });
    });

    describe('when itemSorter is a function', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase(item => item.value);
        showTooltip(container, barChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page D', ['Bar-uv : 200', 'Bar-amt : 2400', 'Bar-pv : 9800']);
      });

      it('should call the function once for every payload item, and pass the item as an argument', () => {
        const spy = vi.fn();
        const { container } = renderTestCase(spy);
        expect(spy).toHaveBeenCalledTimes(0);
        showTooltip(container, barChartMouseHoverTooltipSelector);
        expect(spy).toHaveBeenCalledTimes(3);
        expect(spy).toHaveBeenNthCalledWith(1, {
          color: undefined,
          dataKey: 'pv',
          fill: undefined,
          hide: false,
          name: 'Bar-pv',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page D',
            pv: 9800,
            uv: 200,
          },
          stroke: undefined,
          strokeWidth: undefined,
          type: undefined,
          unit: undefined,
          value: 9800,
        });
        expect(spy).toHaveBeenNthCalledWith(2, {
          color: undefined,
          dataKey: 'uv',
          fill: undefined,
          hide: false,
          name: 'Bar-uv',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page D',
            pv: 9800,
            uv: 200,
          },
          stroke: undefined,
          strokeWidth: undefined,
          type: undefined,
          unit: undefined,
          value: 200,
        });
        expect(spy).toHaveBeenNthCalledWith(3, {
          color: undefined,
          dataKey: 'amt',
          fill: undefined,
          hide: false,
          name: 'Bar-amt',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page D',
            pv: 9800,
            uv: 200,
          },
          stroke: undefined,
          strokeWidth: undefined,
          type: undefined,
          unit: undefined,
          value: 2400,
        });
      });
    });
  });
});

describe('itemSorter in stacked AreaChart', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

  describe('without name prop', () => {
    function renderTestCase<T>(
      itemSorter: TooltipProps<number, string>['itemSorter'],
      selector?: Selector<RechartsRootState, T, never>,
    ) {
      return createSelectorTestCase(({ children }) => (
        <AreaChart width={300} height={300} data={PageData}>
          <Area dataKey="pv" stackId="stack-1" />
          <Area dataKey="uv" stackId="stack-1" />
          <Area dataKey="amt" stackId="stack-1" />
          <YAxis />
          <XAxis dataKey="name" />
          <Tooltip itemSorter={itemSorter} />
          {children}
        </AreaChart>
      ))(selector);
    }

    describe('when itemSorter is undefined', () => {
      it('should render payload sorted by name', () => {
        const { container } = renderTestCase(undefined);
        showTooltip(container, barChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page D', ['amt : 2400', 'pv : 9800', 'uv : 200']);
      });

      it('should select payload sorted by name', () => {
        const { spy } = renderTestCase(undefined, state => selectTooltipPayload(state, 'axis', 'hover', '0'));
        expect(spy).toHaveBeenLastCalledWith([
          {
            color: '#3182bd',
            dataKey: 'pv',
            fill: '#3182bd',
            hide: false,
            name: 'pv',
            nameKey: undefined,
            payload: {
              amt: 2400,
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            stroke: '#3182bd',
            strokeWidth: undefined,
            type: undefined,
            unit: undefined,
            value: 2400,
          },
          {
            color: '#3182bd',
            dataKey: 'uv',
            fill: '#3182bd',
            hide: false,
            name: 'uv',
            nameKey: undefined,
            payload: {
              amt: 2400,
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            stroke: '#3182bd',
            strokeWidth: undefined,
            type: undefined,
            unit: undefined,
            value: 400,
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
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            stroke: '#3182bd',
            strokeWidth: undefined,
            type: undefined,
            unit: undefined,
            value: 2400,
          },
        ]);
      });
    });

    describe('when itemSorter=`dataKey`', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase('dataKey');
        showTooltip(container, barChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page D', ['amt : 2400', 'pv : 9800', 'uv : 200']);
      });
    });

    describe('when itemSorter=`value`', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase('value');
        showTooltip(container, barChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page D', ['uv : 200', 'amt : 2400', 'pv : 9800']);
      });
    });

    describe('when itemSorter=`name`', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase('name');
        showTooltip(container, barChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page D', ['amt : 2400', 'pv : 9800', 'uv : 200']);
      });
    });

    describe('when itemSorter is a function', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase(item => item.value);
        showTooltip(container, barChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page D', ['uv : 200', 'amt : 2400', 'pv : 9800']);
      });

      it('should call the function once for every payload item, and pass the item as an argument', () => {
        const spy = vi.fn();
        const { container } = renderTestCase(spy);
        expect(spy).toHaveBeenCalledTimes(0);
        showTooltip(container, barChartMouseHoverTooltipSelector);
        expect(spy).toHaveBeenCalledTimes(3);
        expect(spy).toHaveBeenNthCalledWith(1, {
          color: '#3182bd',
          dataKey: 'pv',
          fill: '#3182bd',
          hide: false,
          name: 'pv',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page D',
            pv: 9800,
            uv: 200,
          },
          stroke: '#3182bd',
          strokeWidth: undefined,
          type: undefined,
          unit: undefined,
          value: 9800,
        });
        expect(spy).toHaveBeenNthCalledWith(2, {
          color: '#3182bd',
          dataKey: 'uv',
          fill: '#3182bd',
          hide: false,
          name: 'uv',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page D',
            pv: 9800,
            uv: 200,
          },
          stroke: '#3182bd',
          strokeWidth: undefined,
          type: undefined,
          unit: undefined,
          value: 200,
        });
        expect(spy).toHaveBeenNthCalledWith(3, {
          color: '#3182bd',
          dataKey: 'amt',
          fill: '#3182bd',
          hide: false,
          name: 'amt',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page D',
            pv: 9800,
            uv: 200,
          },
          stroke: '#3182bd',
          strokeWidth: undefined,
          type: undefined,
          unit: undefined,
          value: 2400,
        });
      });
    });
  });

  describe('with name prop', () => {
    function renderTestCase<T>(
      itemSorter: TooltipProps<number, string>['itemSorter'],
      selector?: Selector<RechartsRootState, T, never>,
    ) {
      return createSelectorTestCase(({ children }) => (
        <AreaChart width={300} height={300} data={PageData}>
          <Area dataKey="pv" stackId="stack-1" name="Area-pv" />
          <Area dataKey="uv" stackId="stack-1" name="Area-uv" />
          <Area dataKey="amt" stackId="stack-1" name="Area-amt" />
          <YAxis name="YAxis" />
          <XAxis dataKey="name" name="XAxis" />
          <Tooltip itemSorter={itemSorter} />
          {children}
        </AreaChart>
      ))(selector);
    }

    describe('when itemSorter is undefined', () => {
      it('should render payload by name', () => {
        const { container } = renderTestCase(undefined);
        showTooltip(container, barChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page D', ['Area-amt : 2400', 'Area-pv : 9800', 'Area-uv : 200']);
      });

      it('should select payload sorted by name', () => {
        const { spy } = renderTestCase(undefined, state => selectTooltipPayload(state, 'axis', 'hover', '0'));
        expect(spy).toHaveBeenLastCalledWith([
          {
            color: '#3182bd',
            dataKey: 'pv',
            fill: '#3182bd',
            hide: false,
            name: 'Area-pv',
            nameKey: undefined,
            payload: {
              amt: 2400,
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            stroke: '#3182bd',
            strokeWidth: undefined,
            type: undefined,
            unit: undefined,
            value: 2400,
          },
          {
            color: '#3182bd',
            dataKey: 'uv',
            fill: '#3182bd',
            hide: false,
            name: 'Area-uv',
            nameKey: undefined,
            payload: {
              amt: 2400,
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            stroke: '#3182bd',
            strokeWidth: undefined,
            type: undefined,
            unit: undefined,
            value: 400,
          },
          {
            color: '#3182bd',
            dataKey: 'amt',
            fill: '#3182bd',
            hide: false,
            name: 'Area-amt',
            nameKey: undefined,
            payload: {
              amt: 2400,
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            stroke: '#3182bd',
            strokeWidth: undefined,
            type: undefined,
            unit: undefined,
            value: 2400,
          },
        ]);
      });
    });

    describe('when itemSorter=`dataKey`', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase('dataKey');
        showTooltip(container, barChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page D', ['Area-amt : 2400', 'Area-pv : 9800', 'Area-uv : 200']);
      });
    });

    describe('when itemSorter=`value`', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase('value');
        showTooltip(container, barChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page D', ['Area-uv : 200', 'Area-amt : 2400', 'Area-pv : 9800']);
      });
    });

    describe('when itemSorter=`name`', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase('name');
        showTooltip(container, barChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page D', ['Area-amt : 2400', 'Area-pv : 9800', 'Area-uv : 200']);
      });
    });

    describe('when itemSorter is a function', () => {
      it('should render sorted payload', () => {
        const { container } = renderTestCase(item => item.value);
        showTooltip(container, barChartMouseHoverTooltipSelector);
        expectTooltipPayload(container, 'Page D', ['Area-uv : 200', 'Area-amt : 2400', 'Area-pv : 9800']);
      });

      it('should call the function once for every payload item, and pass the item as an argument', () => {
        const spy = vi.fn();
        const { container } = renderTestCase(spy);
        expect(spy).toHaveBeenCalledTimes(0);
        showTooltip(container, barChartMouseHoverTooltipSelector);
        expect(spy).toHaveBeenCalledTimes(3);
        expect(spy).toHaveBeenNthCalledWith(1, {
          color: '#3182bd',
          dataKey: 'pv',
          fill: '#3182bd',
          hide: false,
          name: 'Area-pv',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page D',
            pv: 9800,
            uv: 200,
          },
          stroke: '#3182bd',
          strokeWidth: undefined,
          type: undefined,
          unit: undefined,
          value: 9800,
        });
        expect(spy).toHaveBeenNthCalledWith(2, {
          color: '#3182bd',
          dataKey: 'uv',
          fill: '#3182bd',
          hide: false,
          name: 'Area-uv',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page D',
            pv: 9800,
            uv: 200,
          },
          stroke: '#3182bd',
          strokeWidth: undefined,
          type: undefined,
          unit: undefined,
          value: 200,
        });
        expect(spy).toHaveBeenNthCalledWith(3, {
          color: '#3182bd',
          dataKey: 'amt',
          fill: '#3182bd',
          hide: false,
          name: 'Area-amt',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page D',
            pv: 9800,
            uv: 200,
          },
          stroke: '#3182bd',
          strokeWidth: undefined,
          type: undefined,
          unit: undefined,
          value: 2400,
        });
      });
    });
  });
});
