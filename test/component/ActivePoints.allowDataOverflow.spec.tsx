import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Area, AreaChart, Line, LineChart, Tooltip, XAxis, YAxis } from '../../src';
import { PageData } from '../_data';
import { assertNotNull } from '../helper/assertNotNull';
import { showTooltipOnCoordinate } from './Tooltip/tooltipTestHelpers';

/*
 * Regression test for https://github.com/recharts/recharts/issues/2608
 *
 * With `allowDataOverflow`, data outside the axis domain is drawn outside the plot area
 * and the graphical item is clipped to the plot area. The active dot shown on hover
 * must be clipped the same way, or it renders outside of the chart.
 */

// uv is 400 for "Page A", which is above this domain, so the first point overflows the plot area
const overflowingDomain: [number, number] = [0, 250];

function hoverFirstPoint(container: Element): void {
  // left edge of the plot area, nearest to the first data point
  showTooltipOnCoordinate(container, '.recharts-wrapper', { clientX: 70, clientY: 200 });
}

function getActiveDot(container: Element): Element {
  const activeDot = container.querySelector('.recharts-active-dot');
  assertNotNull(activeDot);
  return activeDot;
}

function getClipRect(container: Element, clipPathUrl: string): Element {
  const id = /^url\(#(.+)\)$/.exec(clipPathUrl)?.[1];
  assertNotNull(id);
  const rect = container.querySelector(`clipPath[id="${id}"] rect`);
  assertNotNull(rect);
  return rect;
}

function expectActiveDotOutsideAndClipped(container: Element): void {
  const activeDot = getActiveDot(container);
  const circle = activeDot.querySelector('circle');
  assertNotNull(circle);

  const clipPath = activeDot.getAttribute('clip-path');
  assertNotNull(clipPath);
  const rect = getClipRect(container, clipPath);

  // Sanity check: the hovered point really is above the plot area
  expect(Number(circle.getAttribute('cy'))).toBeLessThan(Number(rect.getAttribute('y')));
}

const cases: ReadonlyArray<{ name: string; renderChart: (yAxis: ReactNode) => ReactNode }> = [
  {
    name: 'Line',
    renderChart: yAxis => (
      <LineChart width={400} height={400} data={PageData}>
        <XAxis dataKey="name" />
        {yAxis}
        <Line dataKey="uv" isAnimationActive={false} />
        <Tooltip />
      </LineChart>
    ),
  },
  {
    name: 'Area',
    renderChart: yAxis => (
      <AreaChart width={400} height={400} data={PageData}>
        <XAxis dataKey="name" />
        {yAxis}
        <Area dataKey="uv" isAnimationActive={false} />
        <Tooltip />
      </AreaChart>
    ),
  },
];

describe.each(cases)('$name active dot with allowDataOverflow', ({ renderChart }) => {
  it('should clip the active dot to the plot area when the hovered point overflows the domain', () => {
    const { container } = render(renderChart(<YAxis domain={overflowingDomain} allowDataOverflow />));
    hoverFirstPoint(container);
    expectActiveDotOutsideAndClipped(container);
  });

  it('should not clip the active dot when allowDataOverflow is false', () => {
    const { container } = render(renderChart(<YAxis domain={overflowingDomain} />));
    hoverFirstPoint(container);
    expect(getActiveDot(container).hasAttribute('clip-path')).toBe(false);
  });
});
