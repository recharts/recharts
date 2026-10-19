import { TooltipIndex } from '../../src/state/tooltipSlice';
import { DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME, DATA_ITEM_INDEX_ATTRIBUTE_NAME } from '../../src/util/Constants';
import { GraphicalItemId } from '../../src/state/graphicalItemsSlice';

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
 * @param graphicalItemId the graphical item id of the item that user is touching
 * @returns void
 */
export function mockTouchingElement(touchItemIndex: NonNullable<TooltipIndex>, graphicalItemId: GraphicalItemId): void {
  const fakeElement = document.createElement('g');
  fakeElement.setAttribute(DATA_ITEM_INDEX_ATTRIBUTE_NAME, touchItemIndex);
  fakeElement.setAttribute(DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME, graphicalItemId);
  document.elementFromPoint = () => fakeElement;
}

/**
 * This method will pretend that the user is touching an element that the chart actually rendered.
 *
 * Unlike mockTouchingElement, which invents an element that already carries the markers, this one
 * takes a real node out of the rendered DOM. Tests written against it only pass if the component
 * under test renders the markers itself - which is exactly what makes touch work for real users.
 *
 * @param element a node from the rendered chart
 * @return void
 */
export function mockTouchingRenderedElement(element: Element): void {
  document.elementFromPoint = () => element;
}

/**
 * This method will pretend that the user is touching a child of the annotated element.
 *
 * Items that render as a group - a custom `shape` that wraps its own paths, or an item with a
 * label painted on top - never have the markers on the innermost element that `elementFromPoint`
 * returns. This helper reproduces that shape, so the middleware has to walk up the tree to find
 * the item.
 *
 * @param touchItemIndex the index of the item that user is touching
 * @param graphicalItemId the graphical item id of the item that user is touching
 * @returns void
 */
export function mockTouchingNestedElement(
  touchItemIndex: NonNullable<TooltipIndex>,
  graphicalItemId: GraphicalItemId,
): void {
  const annotatedParent = document.createElement('g');
  annotatedParent.setAttribute(DATA_ITEM_INDEX_ATTRIBUTE_NAME, touchItemIndex);
  annotatedParent.setAttribute(DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME, graphicalItemId);
  const innerChild = document.createElement('path');
  annotatedParent.appendChild(innerChild);
  document.elementFromPoint = () => innerChild;
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
