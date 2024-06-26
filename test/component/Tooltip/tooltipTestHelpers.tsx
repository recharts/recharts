import { expect } from 'vitest';
import { fireEvent } from '@testing-library/react';
import { assertNotNull } from '../../helper/assertNotNull';

export function getTooltip(container: Element): HTMLElement {
  const allWrappers = container.querySelectorAll('.recharts-tooltip-wrapper');
  assertNotNull(allWrappers);
  expect(allWrappers).toHaveLength(1);
  const element = allWrappers[0];
  assertNotNull(element);
  if (!(element instanceof HTMLElement)) {
    throw new Error(`Expected instance of HTMLElement, instead received: [${element}]`);
  }
  return element;
}

export function showTooltip(container: Element, selector: string, debug?: () => void): Element {
  const tooltipTriggerElement = container.querySelector(selector);
  if (tooltipTriggerElement == null && debug != null) {
    debug();
  }
  assertNotNull(tooltipTriggerElement);
  expect(tooltipTriggerElement).toBeInTheDocument();
  expect(tooltipTriggerElement).toBeVisible();
  fireEvent.mouseOver(tooltipTriggerElement, { clientX: 200, clientY: 200 });
  return tooltipTriggerElement;
}

export function expectTooltipPayload(
  container: Element,
  expectedTooltipTitle: string,
  expectedTooltipContent: ReadonlyArray<string>,
) {
  const tooltip = getTooltip(container);
  expect(tooltip).toBeInTheDocument();
  expect(tooltip).toBeVisible();
  expect.soft(tooltip.querySelector('.recharts-tooltip-label').textContent).toBe(expectedTooltipTitle);
  const tooltipItems = tooltip.querySelectorAll('.recharts-tooltip-item');
  expect.soft(Array.from(tooltipItems).map(item => item.textContent)).toEqual(expectedTooltipContent);
}
