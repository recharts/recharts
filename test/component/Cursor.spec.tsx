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
  layout: undefined,
  offset: undefined,
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
          <CursorInternal {...props} coordinate={coordinate} />
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
            <Cursor {...defaultProps} coordinate={baseCoord} />
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
            <Cursor {...props} />
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
            <Cursor {...defaultProps} coordinate={baseCoord} />
          </svg>
        </RechartsStoreProvider>,
      );
      const cursor = container.querySelector('.recharts-cross');
      assertNotNull(cursor);
      expect(cursor).toBeVisible();
    });

    it('should render sector cursor for radial layout charts', () => {
      const coordinate = { endAngle: 2, radius: 1, startAngle: 1, x: 0, y: 0 };
      const payload = [{ value: 'test', name: 'test' }];
      const { container } = render(
        <RechartsStoreProvider preloadedState={preloadedRadialState}>
          <svg width={100} height={100}>
            <Cursor {...defaultProps} coordinate={coordinate} payload={payload} />
          </svg>
        </RechartsStoreProvider>,
      );
      const cursor = container.querySelector('.recharts-sector');
      assertNotNull(cursor);
      expect(cursor).toBeVisible();
    });
  });
});
