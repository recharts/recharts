import ReactDOM from 'react-dom';
import React from 'react';
import { shallow, render } from 'enzyme';
import { expect } from 'chai';
import { Text } from 'recharts';

describe('<Text />', () => {
  it('Does not wrap long text if enough width', () => {
    const wrapper = shallow(
      <Text width={144}>This is really long text</Text>
    );

    expect(wrapper.instance().state.wordsByLines.length).to.equal(1);
  });

  it('Wraps long text if not enough width', () => {
    const wrapper = shallow(
      <Text width={143}>This is really long text</Text>
    );

    expect(wrapper.instance().state.wordsByLines.length).to.equal(2);
  });

  it('Wraps long text if styled and not enough room', () => {
    const wrapper = shallow(
      <Text width={144} style={{ fontWeight: 900 }}>This is really long text</Text>
    );

    expect(wrapper.instance().state.wordsByLines.length).to.equal(2);
  });

  it('Does not perform word length calculation if width or fit props not set', () => {
    const wrapper = shallow(
      <Text>This is really long text</Text>
    );

    expect(wrapper.instance().state.wordsByLines.length).to.equal(1);
    expect(wrapper.instance().state.wordsByLines[0].width).to.equal(undefined);
  });
});
