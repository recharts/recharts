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
      <Text width={200} style={{ fontFamily: 'Courier' }}>This is really long text for 200px</Text>
    );

    expect(wrapper.instance().state.wordsByLines.length).to.equal(2);
  });

  it('Wraps long text if styled but would have had enough room', () => {
    const wrapper = shallow(
      <Text width={300} style={{ fontSize: '2em', fontFamily: 'Courier' }}>This is really long text</Text>
    );

    expect(wrapper.instance().state.wordsByLines.length).to.equal(2);
  });

  it('Does not perform word length calculation if width or scaleToFit props not set', () => {
    const wrapper = shallow(
      <Text>This is really long text</Text>
    );

    expect(wrapper.instance().state.wordsByLines.length).to.equal(1);
    expect(wrapper.instance().state.wordsByLines[0].width).to.equal(undefined);
  });

  it('Render 0 success when specify the width', () => {
    const wrapper = render(
      <Text x={0} y={0} width={30}>{0}</Text>
    );

    setTimeout(() => {
      expect(wrapper.text()).to.contain('0');
    }, 1000);
  });

  it('Render 0 success when not specify the width', () => {
    const wrapper = render(
      <Text x={0} y={0}>{0}</Text>
    );

    setTimeout(() => {
      expect(wrapper.text()).to.contain('0');
    }, 1000);
  });

  it('Render text when x or y is a percentage', () => {
    const wrapper = render(
      <Text x="50%" y="50%">anything</Text>
    );

    setTimeout(() => {
      expect(wrapper.text()).to.contain('anything');
    }, 1000);
  });

  it("Don't Render text when x or y is NaN ", () => {
    const wrapperNan = render(
      <Text x={NaN} y={10}>anything</Text>
    );

    expect(wrapperNan.text()).to.not.contain('anything');
  });

  it('Only split contents on breaking spaces', () => {
    const testString = 'These spaces\tshould\nbreak,\rbut\xA0these\xA0should\xA0not.';
    const wrapper = shallow(
      <Text width="auto">{testString}</Text>
    );

    expect(wrapper.instance().state.wordsByLines.length).to.equal(5);
  });

  describe('maxLines', () => {
    it('does not do anything when maxLines are not exceeded', () => {
      const withMaxLines = shallow(
        <Text width={500} maxLines={3}>test</Text>
      )

      const withoutMaxLines = shallow(
        <Text width={500} maxLines={3}>test</Text>
      )

      expect(withMaxLines.text()).to.equal(withoutMaxLines.text());
    });

    it('limits the output to maxLines', () => {
      const testString = 'Lorem ratione omnis fuga dignissimos in amet. Minus quam architecto non ea iste! Nihil amet in itaque error velit. Corporis autem sequi aut temporibus placeat. Perferendis quos veritatis quasi pariatur!'

      const wrapper = shallow(<Text width={200} maxLines={2}>{testString}</Text>)

      expect(wrapper.instance().state.wordsByLines <= 2)
    });

    it('adds an ellipsis at the end of the truncated line', () => {
      const testString = 'Sit totam suscipit aliquid suscipit eius, cupiditate Aut excepturi ipsum ut suscipit facilis debitis Provident impedit a distinctio neque quaerat Optio quo quibusdam possimus provident accusantium. Molestiae similique nemo labore'

      const wrapper = shallow(<Text width={200} maxLines={2}>{testString}</Text>)
      const text = wrapper.text()

      expect(text[text.length - 1]).to.equal("…")
    });

    it('adds an ellipsis at the end of a very long word', () => {
      const testString = 'longwooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooord'

      const wrapper = shallow(<Text width={200} maxLines={1}>{testString}</Text>)
      const text = wrapper.text()

      expect(text[text.length - 1]).to.equal("…")
    });
  });
});
