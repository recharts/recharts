import { expect } from 'vitest';
import { assertNotNull } from './assertNotNull';

export function assertHasLegend(container: Element): ReadonlyArray<Element> {
  expect(container.querySelectorAll('.recharts-default-legend')).toHaveLength(1);
  return Array.from(container.querySelectorAll('.recharts-default-legend .recharts-legend-item'));
}

export function expectLegendLabels(
  container: Element,
  expectedLabels: null | ReadonlyArray<{
    textContent: string;
    textColor?: string;
    fill: string | null | undefined;
    stroke?: string;
  }>,
) {
  assertNotNull(container);

  if (expectedLabels == null) {
    expect(container.querySelectorAll('.recharts-default-legend')).toHaveLength(0);
    return;
  }

  const expectsStroke = expectedLabels.some(label => label.stroke != null);
  const expectsColor = expectedLabels.some(label => label.textColor !== undefined);

  const actualLabels = assertHasLegend(container).map(legend => ({
    textContent: legend.textContent,
    textColor: expectsColor ? legend.querySelector('.recharts-legend-item-text').style.color : undefined,
    fill: legend.querySelector('.recharts-legend-icon')?.getAttribute('fill'),
    stroke: expectsStroke ? legend.querySelector('.recharts-legend-icon')?.getAttribute('stroke') : undefined,
  }));

  expect(actualLabels).toEqual(expectedLabels);
}
