import { TooltipIndex } from '../../src/state/tooltipSlice';

/**
 * This method will pretend that the user is touching an element at the given index.
 * This is useful for testing purposes, as it allows us to simulate touch events
 * without having to actually touch the screen.
 *
 * jsdom does not support elementFromPoint because it doesn't support layouting
 * which is unfortunate because it is a very useful function for us
 * so we're left with mocking it out.
 * See https://github.com/jsdom/jsdom/issues/1435
 * @param touchItemIndex the index of the item that user is touching
 * @returns void
 */
export function mockTouchingElement(touchItemIndex: TooltipIndex): void {
  const fakeElement = document.createElement('g');
  fakeElement.setAttribute('data-recharts-item-index', touchItemIndex);
  document.elementFromPoint = () => fakeElement;
}

/**
 * This method will mock that the user is touching some element
 * that is not any of the chart elements.
 * @return void
 */
export function mockTouchingUnrelatedElement(): void {
  const fakeElement = document.createElement('g');
  document.elementFromPoint = () => fakeElement;
}
