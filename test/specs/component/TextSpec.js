import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Text } from 'recharts';

describe('<Text />', () => {
  it('adds an ellipsis at the end of a very long word', () => {
    const testString = 'longwooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooord';

    const wrapper = shallow(
      <Text width={200} maxLines={1}>
        {testString}
      </Text>,
    );
    const text = wrapper.text();

    expect(text[text.length - 1]).to.equal('…');
  });
});
