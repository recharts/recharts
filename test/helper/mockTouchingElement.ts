import { TooltipIndex } from '../../src/state/tooltipSlice';
import { DataKey } from '../../src/util/types';
import { DATA_ITEM_DATAKEY_ATTRIBUTE_NAME, DATA_ITEM_INDEX_ATTRIBUTE_NAME } from '../../src/util/Constants';

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
 * @param dataKey the dataKey of the item that user is touching
 * @returns void
 */
export function mockTouchingElement(touchItemIndex: TooltipIndex, dataKey: DataKey<any>): void {
  const fakeElement = document.createElement('g');
  fakeElement.setAttribute(DATA_ITEM_INDEX_ATTRIBUTE_NAME, touchItemIndex);
  fakeElement.setAttribute(DATA_ITEM_DATAKEY_ATTRIBUTE_NAME, String(dataKey));
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
