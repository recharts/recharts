import React from 'react';
import { expect } from 'chai';
import { Surface, CartesianGrid } from 'recharts';
import { render } from 'enzyme';

describe('<CartesianGrid />', () => {
  const horizontalPoints = [10, 20, 30, 100, 400];
  const verticalPoints = [100, 200, 300, 400];
  const verticalFill=['#5ab8ff', '#eee'];
  const horizontalFill=['#faffb0', '#ededed'];

  it('Render 5 horizontal lines and 4 vertical lines in simple CartesianGrid', () => {
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

  it('Don\'t render any lines when verticalPoints and horizontalPoints are empty', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <CartesianGrid
          width={500}
          height={500}
        />
      </Surface>
    );
    expect(wrapper.find('line').length).to.equal(0);
  });

  it('Don\'t render any lines when width or height is smaller than 0', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <CartesianGrid
          width={0}
          height={500}
        />
      </Surface>
    );
    expect(wrapper.find('line').length).to.equal(0);
  });

  it('Render 5 vertical background lines in simple CartesianGrid', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <CartesianGrid
          width={500}
          height={500}
          verticalFill={verticalFill}
          verticalPoints={verticalPoints}
          horizontalPoints={horizontalPoints}
        />
      </Surface>
    );
    expect(wrapper.find('.recharts-cartesian-gridstripes-vertical').children.length).to.equal(4);
  });

  it('Render 5 horizontal background lines in simple CartesianGrid', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <CartesianGrid
          width={500}
          height={500}
          horizontalFill={horizontalFill}
          verticalPoints={verticalPoints}
          horizontalPoints={horizontalPoints}
        />
      </Surface>
    );
    expect(wrapper.find('.recharts-cartesian-gridstripes-horizontal').children.length).to.equal(5);
  });
});
