import React from 'react';
import { expect } from 'chai';
import { Surface, Sector } from 'recharts';
import { mount, render } from 'enzyme';

describe('<Sector />', () => {
  it('Render 1 sector in simple Sector', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <Sector fill="#ff7902" cx={200} cy={300} innerRadius={150} outerRadius={200} endAngle={90} />
      </Surface>,
    );

    expect(wrapper.find('.recharts-sector').length).to.equal(1);
  });

  it('Render 1 sector when cornerRadius > 0', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <Sector fill="#ff7902" cx={200} cy={300} innerRadius={150} outerRadius={200} cornerRadius={10} endAngle={90} />
      </Surface>,
    );

    const sectors = wrapper.find('.recharts-sector');
    expect(sectors.length).to.equal(1);
    const path = sectors[0].attribs.d;
    expect(path).to.not.be.empty;
    expect(path.length - path.split('A').join('').length).to.equal(6);
  });

  it('Sets sector titles using name and value', () => {
    const wrapper = mount(
      <Surface width={500} height={500}>
        <Sector
          name="sector name"
          value={1}
          fill="#ff7902"
          cx={200}
          cy={300}
          innerRadius={150}
          outerRadius={200}
          cornerRadius={10}
          endAngle={90}
        />
      </Surface>,
    );
    const sectorTitle = wrapper.find('.recharts-surface').find('title');
    expect(sectorTitle.children().text()).to.equal('sector name 1');
  });

  it("Don't render any sector when props is invalid", () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <Sector fill="#ff7902" cx={200} cy={300} innerRadius={200} outerRadius={150} endAngle={90} />
        <Sector fill="#ff7902" cx={200} cy={300} innerRadius={150} outerRadius={200} startAngle={90} endAngle={90} />
      </Surface>,
    );
    expect(wrapper.find('.recharts-sector').length).to.equal(0);
  });
});
