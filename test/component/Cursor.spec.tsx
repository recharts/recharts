import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Cursor, CursorConnectedProps, CursorInternal, CursorProps } from '../../src/component/Cursor';
import { assertNotNull } from '../helper/assertNotNull';
import { RechartsRootState } from '../../src/state/store';
import { RechartsStoreProvider } from '../../src/state/RechartsStoreProvider';
import { arrayTooltipSearcher } from '../../src/state/optionsSlice';
import { produceState } from '../helper/produceState';
import { emptyOffset } from '../helper/offsetHelpers';
import { TooltipPayload } from '../../src/state/tooltipSlice';
import { Bar, BarChart, ComposedChart, Line, Tooltip, XAxis, YAxis } from '../../src';
import { PageData } from '../_data';
import { showTooltip } from './Tooltip/tooltipTestHelpers';
import {
  barChartMouseHoverTooltipSelector,
  composedChartMouseHoverTooltipSelector,
} from './Tooltip/tooltipMouseHoverSelectors';

const defaultProps: CursorProps = {
  cursor: true,
  tooltipEventType: 'axis',
  coordinate: undefined,
  payload: [],
  index: '0',
};

const baseCoord = {
  x: 0,
  y: 0,
};

const connectedProps: CursorConnectedProps = {
  chartName: '',
  layout: 'vertical',
  offset: emptyOffset,
  tooltipAxisBandSize: 0,
  ...defaultProps,
};

const preloadedState: Partial<RechartsRootState> = {
  options: {
    chartName: '',
    tooltipPayloadSearcher: arrayTooltipSearcher,
    eventEmitter: undefined,
    defaultTooltipEventType: 'axis',
  },
};

const preloadedRadialState: Partial<RechartsRootState> = produceState(draft => {
  draft.layout.layoutType = 'radial';
  draft.layout.margin = { top: 11, right: 22, bottom: 33, left: 4 };
  draft.tooltip.itemInteraction.hover.active = true;
});

describe('Cursor', () => {
  describe('Internal component', () => {
    it('should render a custom cursor', () => {
      function MyCustomCursor() {
        return <p>I am a cursor.</p>;
      }
      const props: CursorConnectedProps = {
        ...connectedProps,
        cursor: <MyCustomCursor />,
        coordinate: baseCoord,
      };
      const { getByText } = render(
        <svg width={100} height={100}>
          <CursorInternal {...props} />
        </svg>,
      );
      expect(getByText('I am a cursor.')).toBeVisible();
    });

    it('should render rectangle cursor for bar chart', () => {
      const props: CursorConnectedProps = {
        layout: 'horizontal',
        ...defaultProps,
        tooltipAxisBandSize: 1,
        chartName: 'BarChart',
        offset: emptyOffset,
        coordinate: baseCoord,
      };
      const { container } = render(
        <svg width={100} height={100}>
          <CursorInternal {...props} />
        </svg>,
      );
      const cursor = container.querySelector('.recharts-rectangle');
      assertNotNull(cursor);
      expect(cursor).toBeVisible();
    });

    it('should render rectangle cursor for a non-BarChart that contains a cartesian Bar', () => {
      const props: CursorConnectedProps = {
        layout: 'horizontal',
        ...defaultProps,
        tooltipAxisBandSize: 1,
        chartName: 'ComposedChart',
        hasCartesianBar: true,
        offset: emptyOffset,
        coordinate: baseCoord,
      };
      const { container } = render(
        <svg width={100} height={100}>
          <CursorInternal {...props} />
        </svg>,
      );
      expect(container.querySelector('.recharts-rectangle')).toBeVisible();
      expect(container.querySelector('.recharts-curve')).toBeNull();
    });

    it('should render curve cursor for a non-BarChart without a cartesian Bar', () => {
      const props: CursorConnectedProps = {
        layout: 'horizontal',
        ...defaultProps,
        tooltipAxisBandSize: 1,
        chartName: 'ComposedChart',
        hasCartesianBar: false,
        offset: emptyOffset,
        coordinate: baseCoord,
      };
      const { container } = render(
        <svg width={100} height={100}>
          <CursorInternal {...props} />
        </svg>,
      );
      expect(container.querySelector('.recharts-curve')).toBeVisible();
      expect(container.querySelector('.recharts-rectangle')).toBeNull();
    });

    it('should render sector cursor for radial layout charts', () => {
      const coordinate = { endAngle: 2, radius: 1, startAngle: 1, x: 0, y: 0 };
      const props: CursorConnectedProps = {
        chartName: '',
        offset: emptyOffset,
        tooltipAxisBandSize: 0,
        ...defaultProps,
        layout: 'radial',
        coordinate: {
          endAngle: 2,
          radius: 1,
          startAngle: 1,
          x: 0,
          y: 0,
        },
      };
      const { container } = render(
        <svg width={100} height={100}>
          <CursorInternal {...props} coordinate={coordinate} zIndex={0} />
        </svg>,
      );
      const cursor = container.querySelector('.recharts-sector');
      assertNotNull(cursor);
      expect(cursor).toBeVisible();
    });
  });

  describe('Connected component', () => {
    it('should render curve cursor by default', () => {
      const { container } = render(
        <RechartsStoreProvider preloadedState={preloadedState}>
          <svg width={100} height={100}>
            <Cursor {...defaultProps} coordinate={baseCoord} zIndex={0} />
          </svg>
        </RechartsStoreProvider>,
      );
      const cursor = container.querySelector('.recharts-curve');
      assertNotNull(cursor);
      expect(cursor).toBeVisible();
    });

    it('should render a custom cursor', () => {
      function MyCustomCursor() {
        return <p>I am a cursor.</p>;
      }
      const props: CursorProps = {
        ...defaultProps,
        cursor: <MyCustomCursor />,
        coordinate: baseCoord,
      };
      const { getByText } = render(
        <RechartsStoreProvider preloadedState={preloadedState}>
          <svg width={100} height={100}>
            <Cursor {...props} zIndex={0} />
          </svg>
        </RechartsStoreProvider>,
      );
      expect(getByText('I am a cursor.')).toBeVisible();
    });

    it('should render cross cursor for scatter chart', () => {
      const preloadedScatterState: Partial<RechartsRootState> = produceState(draft => {
        draft.options.chartName = 'ScatterChart';
        draft.options.tooltipPayloadSearcher = arrayTooltipSearcher;
        draft.tooltip.itemInteraction.hover.active = true;
      });
      const { container } = render(
        <RechartsStoreProvider preloadedState={preloadedScatterState}>
          <svg width={100} height={100}>
            <Cursor {...defaultProps} coordinate={baseCoord} zIndex={0} />
          </svg>
        </RechartsStoreProvider>,
      );
      const cursor = container.querySelector('.recharts-cross');
      assertNotNull(cursor);
      expect(cursor).toBeVisible();
    });

    it('should render sector cursor for radial layout charts', () => {
      const coordinate = { endAngle: 2, radius: 1, startAngle: 1, x: 0, y: 0 };
      const payload: TooltipPayload = [{ value: 'test', name: 'test', graphicalItemId: 'foo' }];
      const { container } = render(
        <RechartsStoreProvider preloadedState={preloadedRadialState}>
          <svg width={100} height={100}>
            <Cursor {...defaultProps} coordinate={coordinate} payload={payload} zIndex={0} />
          </svg>
        </RechartsStoreProvider>,
      );
      const cursor = container.querySelector('.recharts-sector');
      assertNotNull(cursor);
      expect(cursor).toBeVisible();
    });
  });

  describe('in charts', () => {
    const cursorSelector = '.recharts-tooltip-cursor';

    it('should render a band cursor in BarChart', () => {
      const { container } = render(
        <BarChart width={400} height={400} data={PageData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="uv" isAnimationActive={false} />
          <Tooltip />
        </BarChart>,
      );
      showTooltip(container, barChartMouseHoverTooltipSelector);
      const cursor = container.querySelector(cursorSelector);
      assertNotNull(cursor);
      expect(cursor).toHaveClass('recharts-rectangle');
    });

    it('should render a band cursor in ComposedChart that contains a Bar', () => {
      const { container } = render(
        <ComposedChart width={400} height={400} data={PageData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="uv" isAnimationActive={false} />
          <Line dataKey="pv" isAnimationActive={false} />
          <Tooltip />
        </ComposedChart>,
      );
      showTooltip(container, composedChartMouseHoverTooltipSelector);
      const cursor = container.querySelector(cursorSelector);
      assertNotNull(cursor);
      expect(cursor).toHaveClass('recharts-rectangle');
      expect(container.querySelector(`${cursorSelector}.recharts-curve`)).toBeNull();
    });

    it('should render a band cursor in vertical ComposedChart that contains a Bar', () => {
      const { container } = render(
        <ComposedChart width={400} height={400} data={PageData} layout="vertical">
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Bar dataKey="uv" isAnimationActive={false} />
          <Tooltip />
        </ComposedChart>,
      );
      showTooltip(container, composedChartMouseHoverTooltipSelector);
      const cursor = container.querySelector(cursorSelector);
      assertNotNull(cursor);
      expect(cursor).toHaveClass('recharts-rectangle');
    });

    it('should keep the line cursor in ComposedChart without a Bar', () => {
      const { container } = render(
        <ComposedChart width={400} height={400} data={PageData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Line dataKey="pv" isAnimationActive={false} />
          <Tooltip />
        </ComposedChart>,
      );
      showTooltip(container, composedChartMouseHoverTooltipSelector);
      const cursor = container.querySelector(cursorSelector);
      assertNotNull(cursor);
      expect(cursor).toHaveClass('recharts-curve');
    });
  });
});
