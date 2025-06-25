import { expect } from 'vitest';
import { assertNotNull } from './assertNotNull';

export function assertHasLegend(container: Element): ReadonlyArray<Element> {
  expect(container.querySelectorAll('.recharts-default-legend')).toHaveLength(1);
  return Array.from(container.querySelectorAll('.recharts-default-legend .recharts-legend-item'));
}

export function expectLegendLabels(
  container: Element,
  expectedLabels: undefined | ReadonlyArray<{ textContent: string; fill: string; stroke?: string }>,
) {
  assertNotNull(container);

  if (expectedLabels == null) {
    expect(container.querySelectorAll('.recharts-default-legend')).toHaveLength(0);
    return;
  }

  const expectsStroke = expectedLabels.some(label => label.stroke != null);

  const actualLabels = assertHasLegend(container).map(legend => ({
    textContent: legend.textContent,
    fill: legend.querySelector('.recharts-legend-icon')?.getAttribute('fill'),
    stroke: expectsStroke ? legend.querySelector('.recharts-legend-icon')?.getAttribute('stroke') : undefined,
  }));

  expect(actualLabels).toEqual(expectedLabels);
}
