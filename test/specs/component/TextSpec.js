import ReactDOM from 'react-dom';
import React from 'react';
import { shallow, render } from 'enzyme';
import { expect } from 'chai';
import { Text } from 'recharts';

describe('<Text />', () => {
  it('Does not wrap long text if enough width', () => {
    const wrapper = shallow(
      <Text width={300} style={{ fontFamily: 'Courier' }}>This is really long text</Text>
    );

    expect(wrapper.instance().state.wordsByLines.length).to.equal(1);
  });

  it('Wraps long text if not enough width', () => {
    const wrapper = shallow(
      <Text width={200} style={{ fontFamily: 'Courier' }}>This is really long text</Text>
    );

    expect(wrapper.instance().state.wordsByLines.length).to.equal(2);
  });

  it('Wraps long text if styled but would have had enough room', () => {
    const wrapper = shallow(
      <Text width={300} style={{ fontSize: '2em', fontFamily: 'Courier' }}>This is really long text</Text>
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
