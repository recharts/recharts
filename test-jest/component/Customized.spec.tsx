import React from 'react';
import { render } from '@testing-library/react';
import { Customized } from '../../src';

describe('<Customized />', () => {
  test('Render customized component by React.element', () => {
    function SvgElement() {
      return <rect className="customized-svg-element" />;
    }
    const { container } = render(<Customized component={<SvgElement />} />);
    expect(container.querySelectorAll('.customized-svg-element')).toHaveLength(1);
  });

  test('Render customized component by Function', () => {
    function rect() {
      return <rect className="customized-svg-element" />;
    }
    // eslint-disable-next-line react/jsx-no-bind
    const { container } = render(<Customized component={rect} />);
    expect(container.querySelectorAll('.customized-svg-element')).toHaveLength(1);
  });
});
