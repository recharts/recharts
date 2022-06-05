import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export function setup(jsx) {
  const { container } = render(jsx);
  return {
    user: userEvent.setup(),
    container
  };
}
