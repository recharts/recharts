import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Cursor, CursorProps } from '../../src/component/Cursor';
import { Tooltip, TooltipProps } from '../../src/component/Tooltip';
import { assertNotNull } from '../helper/assertNotNull';

function getTooltipElement(props: TooltipProps<any, any>) {
  return <Tooltip {...props} />;
}

const defaultProps: CursorProps = {
  activeCoordinate: {
    x: 0,
    y: 0,
  },
  activePayload: [],
  activeTooltipIndex: 0,
  chartName: '',
  element: getTooltipElement({}),
  isActive: true,
  layout: 'horizontal',
  offset: {},
  tooltipAxisBandSize: 0,
  tooltipEventType: 'axis',
};

describe('Cursor', () => {
  it('should render curve cursor by default', () => {
    const { container } = render(
      <svg width={100} height={100}>
        <Cursor {...defaultProps} />
      </svg>,
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
      <svg width={100} height={100}>
        <Cursor {...props} />
      </svg>,
    );
    expect(getByText('I am a cursor.')).toBeVisible();
  });

  it('should render cross cursor for scatter chart', () => {
    const props: CursorProps = {
      ...defaultProps,
      chartName: 'ScatterChart',
    };
    const { container } = render(
      <svg width={100} height={100}>
        <Cursor {...props} />
      </svg>,
    );
    const cursor = container.querySelector('.recharts-cross');
    assertNotNull(cursor);
    expect(cursor).toBeVisible();
  });

  it('should render rectangle cursor for bar chart', () => {
    const props: CursorProps = {
      ...defaultProps,
      offset: {
        top: 0,
        height: 2,
      },
      tooltipAxisBandSize: 1,
      chartName: 'BarChart',
    };
    const { container } = render(
      <svg width={100} height={100}>
        <Cursor {...props} />
      </svg>,
    );
    const cursor = container.querySelector('.recharts-rectangle');
    assertNotNull(cursor);
    expect(cursor).toBeVisible();
  });

  it('should render sector cursor for radial layout charts', () => {
    const props: CursorProps = {
      ...defaultProps,
      activeCoordinate: {
        endAngle: 2,
        radius: 1,
        startAngle: 1,
        x: 0,
        y: 0,
      },
      layout: 'radial',
    };
    const { container } = render(
      <svg width={100} height={100}>
        <Cursor {...props} />
      </svg>,
    );
    const cursor = container.querySelector('.recharts-sector');
    assertNotNull(cursor);
    expect(cursor).toBeVisible();
  });
});
