import { expect } from 'vitest';
import { fireEvent } from '@testing-library/react';
import { assertNotNull } from '../../helper/assertNotNull';
import { Coordinate } from '../../../src/util/types';

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
 * Whenever you're trying to use this function, remember to mock the bounding rect call too, otherwise the jsdom environment
 * will never recognize the mouse event as a chart event. Example:
 *
 * mockGetBoundingClientRect({ width: 100, height: 100 });
 *
 * @param container Element rendered in the test
 * @param selector Tooltip reacts to different triggers based on props, this is the selector that will be used to find the trigger element. If undefined then uses the container element itself.
 * @param coordinates X, Y coordinate of the mouse event
 * @param debug Optional function that will be called if the tooltip trigger element is not found
 * @returns Tooltip trigger element
 */
export function showTooltipOnCoordinate(
  container: Element,
  selector: string | undefined,
  coordinates: MouseCoordinate | undefined,
  debug?: () => void,
): Element {
  const tooltipTriggerElement = selector != null ? container.querySelector(selector) : container;
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
 * Whenever you're trying to use this function, remember to mock the bounding rect call too, otherwise the jsdom environment
 * will never recognize the touch event as a chart event.
 *
 * @param container Element rendered in the test
 * @param selector Tooltip reacts to different triggers based on props, this is the selector that will be used to find the trigger element. If undefined then uses the container element itself.
 * @param coordinates X, Y coordinate of the touch event
 * @param debug Optional function that will be called if the tooltip trigger element is not found
 * @returns Tooltip trigger element
 */
export function showTooltipOnCoordinateTouch(
  container: Element,
  selector: string | undefined,
  coordinates: MouseCoordinate | undefined,
  debug?: () => void,
): Element {
  const tooltipTriggerElement = selector != null ? container.querySelector(selector) : container;
  if (tooltipTriggerElement == null && debug != null) {
    debug();
  }
  assertNotNull(tooltipTriggerElement);
  expect(tooltipTriggerElement).toBeInTheDocument();
  expect(tooltipTriggerElement).toBeVisible();
  fireEvent.touchMove(tooltipTriggerElement, { touches: [coordinates] });
  return tooltipTriggerElement;
}

/**
 * Test helper that will simulate a mouse over event on a given element which should trigger the tooltip to show.
 * This function will use default coordinates of 200, 200.
 *
 * Whenever you're trying to use this function, remember to mock the bounding rect call too, otherwise the jsdom environment
 * will never recognize the mouse event as a chart event. Example:
 *
 * mockGetBoundingClientRect({ width: 100, height: 100 });
 *
 * @param container Element rendered in the test
 * @param selector Tooltip reacts to different triggers based on props, this is the selector that will be used to find the trigger element. If undefined then uses the container element itself.
 * @param debug Optional function that will be called if the tooltip trigger element is not found
 * @returns Tooltip trigger element
 */
export function showTooltip(container: Element, selector?: string, debug?: () => void): Element {
  return showTooltipOnCoordinate(container, selector, defaultCoordinates, debug);
}

export function hideTooltip(container: Element, mouseHoverSelector: string): void {
  const element = container.querySelector(mouseHoverSelector);
  fireEvent.mouseLeave(element);
}

export function expectTooltipNotVisible(container: Element) {
  assertNotNull(container);
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

/**
 * Will expect the tooltip to be visible and at the expected coordinate.
 * When using this function, remember to also mock the bounding rect call.
 * Browsers do this automatically; jsdom, however, by default returns 0, 0 and Tooltip
 * interprets that as "I should not be visible".
 *
 * Example mock might look like this:
 * <code>
        mockGetBoundingClientRect({
          width: 10,
          height: 10,
        });
 </code>
 *
 * @param container parent where the Tooltip will be located
 * @param expectedCoordinate x, y expected coordinate of the tooltip
 * @returns void
 */
export function expectTooltipCoordinate(container: Element, expectedCoordinate: Coordinate): void {
  const tooltip = getTooltip(container);
  expect(tooltip).toBeInTheDocument();
  expect(tooltip).toBeVisible();
  const { transform } = tooltip.style;
  expect(transform).toContain(`translate(${expectedCoordinate.x}px, ${expectedCoordinate.y}px)`);
}
