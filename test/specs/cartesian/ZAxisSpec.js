import React from 'react';
import { expect } from 'chai';
import { Surface, ZAxis } from 'recharts';
import { mount, render } from 'enzyme';

describe('<ZAxis />', () => {
  it('Don\'t render anything', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <ZAxis dataKey={'x'} name="stature" unit="cm" />
      </Surface>
    );

    expect(wrapper.find('svg').children.length).to.equal(1);
    expect(wrapper.find('svg noscript').children.length).to.equal(1);
  });
});
