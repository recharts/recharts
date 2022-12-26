import React from 'react';
import { expect } from 'chai';
import { Surface, Symbols, LineChart, XAxis, Line, YAxis } from 'recharts';
import { render as enzymeRender } from 'enzyme';
import { render } from '@testing-library/react';

describe('<Symbols />', () => {
  it('Render 1 symbol', () => {
    const wrapper = enzymeRender(
      <Surface width={400} height={400}>
        <Symbols cx={100} cy={100} size={100} fill="#ff7300" />
      </Surface>,
    );

    expect(wrapper.find('.recharts-symbols').length).to.equal(1);
  });

  it('Render 1 symbol when type is wrong', () => {
    const wrapper = enzymeRender(
      <Surface width={400} height={400}>
        <Symbols cx={100} cy={100} size={100} type="anything" fill="#ff7300" />
      </Surface>,
    );

    expect(wrapper.find('.recharts-symbols').length).to.equal(1);
  });

  it("Don't render any symbol when cx is invalid", () => {
    const wrapper = enzymeRender(
      <Surface width={400} height={400}>
        <Symbols cy={100} size={100} fill="#ff7300" />
      </Surface>,
    );

    expect(wrapper.find('.recharts-symbols').length).to.equal(0);
  });

  it('Expect no points attribute on path', () => {
    const { container } = render(
      <LineChart
        width={400}
        height={400}
        data={[
          { name: 'test', uv: 100 },
          { name: 'test2', uv: 120 },
          { name: 'test3', uv: 150 },
        ]}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <XAxis />
        <YAxis type="category" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );

    const symbols = container.querySelectorAll('.recharts-line .recharts-line-curve');
    expect(symbols.length).to.equal(1);
    expect(symbols[0].attributes.getNamedItem('points')).equals(null);
  });
});
