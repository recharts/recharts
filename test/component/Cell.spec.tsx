import { render } from '@testing-library/react';
import React from 'react';

import { Cell } from '../../src';

describe('<Cell />', () => {
  it('Render empty dom', () => {
    const { container } = render(<Cell />);
    expect(container).toBeEmptyDOMElement();
  });
});
