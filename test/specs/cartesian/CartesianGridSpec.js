import React from 'react';
import { expect } from 'chai';
import { Surface, CartesianGrid } from 'recharts';
import { render } from 'enzyme';

describe('<CartesianGrid />', () => {
  const horizontalPoints = [10, 20, 30, 100, 400];
  const verticalPoints = [100, 200, 300, 400];

  it('renders 5 horizontal lines and 4 vertical lines in simple CartesianGrid', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <CartesianGrid
          width={500}
          height={500}
          verticalPoints={verticalPoints}
          horizontalPoints={horizontalPoints}
        />
      </Surface>
    );
    expect(wrapper.find('line').length).to.equal(9);
  });
});
