import { fireEvent } from '@testing-library/react';
import { assertNotNull } from './assertNotNull';

export function clickOn(selector: string): (container: HTMLElement) => void {
  return function clickOnElement(container: HTMLElement): void {
    assertNotNull(container);
    const target = container.querySelector(selector);
    assertNotNull(target);
    fireEvent.click(target);
  };
}
