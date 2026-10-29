import { describe, expect, it } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import {
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  RechartsFill,
  RechartsThemeProvider,
  lightTheme,
  pattern,
  patterns,
} from '../../../src';
import { assertNotNull } from '../../helper/assertNotNull';

const data = [
  { subject: 'a', uv: 1 },
  { subject: 'b', uv: 3 },
  { subject: 'c', uv: 2 },
];

function renderRadar(fill: string | RechartsFill | undefined) {
  return render(
    <RechartsThemeProvider value={{ ...lightTheme, graphicalItems: [{ fill: 'purple', stroke: 'indigo' }] }}>
      <RadarChart width={400} height={400} data={data}>
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar dataKey="uv" id="my-radar" fill={fill} legendType="rect" isAnimationActive={false} />
        <Legend />
      </RadarChart>
    </RechartsThemeProvider>,
  );
}

function getPolygon(container: Element): Element {
  const polygon = container.querySelector('.recharts-radar-polygon path');
  assertNotNull(polygon);
  return polygon;
}

describe('Radar with a fill object', () => {
  it('should paint the polygon with the definition, in the theme color', () => {
    const { container } = renderRadar({ definition: pattern(patterns.diagonal) });

    expect(getPolygon(container)).toHaveAttribute('fill', 'url(#my-radar-fill)');
    expect(container.querySelector('pattern#my-radar-fill rect')).toHaveAttribute('fill', 'purple');
  });

  it('should use the explicit color as the base color', () => {
    const { container } = renderRadar({ color: 'blue', definition: pattern(patterns.dots) });

    expect(container.querySelector('pattern#my-radar-fill rect')).toHaveAttribute('fill', 'blue');
  });

  it('should draw the definition in the legend icon', () => {
    const { container } = renderRadar({ definition: pattern(patterns.dots) });

    const legendPattern = container.querySelector('.recharts-legend-item pattern');
    assertNotNull(legendPattern);
    expect(container.querySelector('.recharts-legend-icon')).toHaveAttribute('fill', `url(#${legendPattern.id})`);
  });

  it('should paint with the definition from the theme', () => {
    const { container } = render(
      <RechartsThemeProvider
        value={{ ...lightTheme, graphicalItems: [{ fill: 'teal', fillDefinition: pattern(patterns.star) }] }}
      >
        <RadarChart width={400} height={400} data={data}>
          <PolarAngleAxis dataKey="subject" />
          <Radar dataKey="uv" id="my-radar" isAnimationActive={false} />
        </RadarChart>
      </RechartsThemeProvider>,
    );

    expect(getPolygon(container)).toHaveAttribute('fill', 'url(#my-radar-fill)');
    expect(container.querySelector('pattern#my-radar-fill rect')).toHaveAttribute('fill', 'teal');
  });

  it('should keep working with a string fill', () => {
    const { container } = renderRadar('blue');

    expect(getPolygon(container)).toHaveAttribute('fill', 'blue');
    expect(container.querySelector('#my-radar-fill')).not.toBeInTheDocument();
  });
});
