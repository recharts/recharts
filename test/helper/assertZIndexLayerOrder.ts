import { assertNotNull } from './assertNotNull';

/**
 * Checks that the `top` element is rendered later in the DOM than `bottom` element.
 * Because SVG does not support z-index directly we need to rely on the sibling order
 * to determine visual stacking.
 * @param front Element that is supposed to be rendered on top of `back` element
 * @param back Element that is supposed to be rendered below `front` element
 */
export function assertZIndexLayerOrder({ front, back }: { front: Element; back: Element }) {
  assertNotNull(front);
  assertNotNull(back);
  const position = back.compareDocumentPosition(front);
  const isFrontOnTop =
    position === Node.DOCUMENT_POSITION_FOLLOWING ||
    position === (Node.DOCUMENT_POSITION_FOLLOWING | Node.DOCUMENT_POSITION_CONTAINED_BY);
  if (!isFrontOnTop) {
    throw new Error('Expected front element to be rendered on top of back element');
  }
}
