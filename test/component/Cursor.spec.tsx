import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Cursor, CursorProps } from '../../src/component/Cursor';
import { Tooltip, TooltipProps } from '../../src/component/Tooltip';
import { assertNotNull } from '../helper/assertNotNull';
import { TooltipContextProvider, TooltipContextValue } from '../../src/context/tooltipContext';
import { OffsetContext } from '../../src/context/chartLayoutContext';

function getTooltipElement(props: TooltipProps<any, any>) {
  return <Tooltip {...props} />;
}

const defaultProps: CursorProps = {
  chartName: '',
  element: getTooltipElement({}),
  layout: 'horizontal',
  tooltipAxisBandSize: 0,
  tooltipEventType: 'axis',
};

const tooltipContext: TooltipContextValue = {
  label: '',
  payload: [],
  coordinate: {
    x: 0,
    y: 0,
  },
  active: true,
  index: 0,
};

describe('Cursor', () => {
  it('should render curve cursor by default', () => {
    const { container } = render(
      <TooltipContextProvider value={tooltipContext}>
        <svg width={100} height={100}>
          <Cursor {...defaultProps} />
        </svg>
      </TooltipContextProvider>,
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
      element: getTooltipElement({ cursor: <MyCustomCursor /> }),
    };
    const { getByText } = render(
      <TooltipContextProvider value={tooltipContext}>
        <svg width={100} height={100}>
          <Cursor {...props} />
        </svg>
      </TooltipContextProvider>,
    );
    expect(getByText('I am a cursor.')).toBeVisible();
  });

  it('should render cross cursor for scatter chart', () => {
    const props: CursorProps = {
      ...defaultProps,
      chartName: 'ScatterChart',
    };
    const { container } = render(
      <TooltipContextProvider value={tooltipContext}>
        <svg width={100} height={100}>
          <Cursor {...props} />
        </svg>
      </TooltipContextProvider>,
    );
    const cursor = container.querySelector('.recharts-cross');
    assertNotNull(cursor);
    expect(cursor).toBeVisible();
  });

  it('should render rectangle cursor for bar chart', () => {
    const props: CursorProps = {
      ...defaultProps,
      tooltipAxisBandSize: 1,
      chartName: 'BarChart',
    };
    const { container } = render(
      <OffsetContext.Provider value={{ top: 0, height: 0 }}>
        <TooltipContextProvider value={tooltipContext}>
          <svg width={100} height={100}>
            <Cursor {...props} />
          </svg>
        </TooltipContextProvider>
      </OffsetContext.Provider>,
    );
    const cursor = container.querySelector('.recharts-rectangle');
    assertNotNull(cursor);
    expect(cursor).toBeVisible();
  });

  it('should render sector cursor for radial layout charts', () => {
    const props: CursorProps = {
      ...defaultProps,
      layout: 'radial',
    };
    const radialTooltipContext: TooltipContextValue = {
      ...tooltipContext,
      coordinate: {
        endAngle: 2,
        radius: 1,
        startAngle: 1,
        x: 0,
        y: 0,
      },
    };
    const { container } = render(
      <TooltipContextProvider value={radialTooltipContext}>
        <svg width={100} height={100}>
          <Cursor {...props} />
        </svg>
      </TooltipContextProvider>,
    );
    const cursor = container.querySelector('.recharts-sector');
    assertNotNull(cursor);
    expect(cursor).toBeVisible();
  });
});
