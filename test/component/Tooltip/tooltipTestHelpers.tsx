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

export type MouseCoordinate = { clientX: number; clientY: number };

const defaultCoordinates: MouseCoordinate = { clientX: 200, clientY: 200 };

/**
 * Test helper that will simulate a mouse over event on a given element which should trigger the tooltip to show.
 *
 * @param container Element rendered in the test
 * @param selector Tooltip reacts to different triggers based on props, this is the selector that will be used to find the trigger element
 * @param coordinates X, Y coordinate of the mouse event
 * @param debug Optional function that will be called if the tooltip trigger element is not found
 * @returns Tooltip trigger element
 */
export function showTooltipOnCoordinate(
  container: Element,
  selector: string,
  coordinates: MouseCoordinate | undefined,
  debug?: () => void,
): Element {
  const tooltipTriggerElement = container.querySelector(selector);
  if (tooltipTriggerElement == null && debug != null) {
    debug();
  }
  assertNotNull(tooltipTriggerElement);
  expect(tooltipTriggerElement).toBeInTheDocument();
  expect(tooltipTriggerElement).toBeVisible();
  fireEvent.mouseOver(tooltipTriggerElement, coordinates ?? defaultCoordinates);
  return tooltipTriggerElement;
}

/**
 * Test helper that will simulate a mouse over event on a given element which should trigger the tooltip to show.
 * This function will use default coordinates of 200, 200.
 *
 * @param container Element rendered in the test
 * @param selector Tooltip reacts to different triggers based on props, this is the selector that will be used to find the trigger element
 * @param debug Optional function that will be called if the tooltip trigger element is not found
 * @returns Tooltip trigger element
 */
export function showTooltip(container: Element, selector: string, debug?: () => void): Element {
  return showTooltipOnCoordinate(container, selector, defaultCoordinates, debug);
}

export function expectTooltipNotVisible(container: Element) {
  const tooltip = getTooltip(container);
  expect(tooltip).not.toBeVisible();
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
