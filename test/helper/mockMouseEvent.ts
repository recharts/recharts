import { fireEvent } from '@testing-library/react';

// https://github.com/testing-library/react-testing-library/issues/268
// eslint-disable-next-line no-undef
interface MouseEventWithOffsets extends MouseEventInit {
  pageX?: number;
  pageY?: number;
  offsetX?: number;
  offsetY?: number;
  x?: number;
  y?: number;
}

export const mockMouseEvent = (
  eventName: string,
  element: Window | Document | Node | Element,
  eventInit: MouseEventWithOffsets,
) => {
  const mouseEvent = new MouseEvent(eventName, { bubbles: true, cancelable: true });
  Object.assign(mouseEvent, eventInit);

  return {
    fire: () => fireEvent(element, mouseEvent),
  };
};
