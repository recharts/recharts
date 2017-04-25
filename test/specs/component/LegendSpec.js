import React from 'react';
import { mount, render } from 'enzyme';
import { expect } from 'chai';
import { Surface, Legend } from 'recharts';

describe('<Legend />', () => {
  const data = [
    { value: 'Apple', color: '#ff7300' },
    { value: 'Samsung', color: '#bb7300' },
    { value: 'Huawei', color: '#887300' },
    { value: 'Sony', color: '#667300' },
  ];

  it('Render 4 legend items in simple Legend', () => {
    const wrapper = render(
      <Legend width={500} height={30} payload={data} />
    );

    expect(wrapper.find('.recharts-default-legend').length).to.equal(1);
    expect(wrapper.find('.recharts-default-legend .recharts-legend-item').length).to.equal(4);
  });

  it('Render customized legend when content is set to be a react element', () => {
    const CustomizedLegend = () =>
      <div className="customized-legend">test</div>
    ;
    const wrapper = render(
      <Legend width={500} height={30} payload={data} content={<CustomizedLegend />} />
    );

    expect(wrapper.find('.recharts-default-legend').length).to.equal(0);
    expect(wrapper.find('.customized-legend').length).to.equal(1);
  });

  it('Does not render items with a type of `none`', () => {
    const dataWithNone = [
      { value: 'Apple', color: '#ff7300' },
      { value: 'Samsung', color: '#bb7300' },
      { value: 'Huawei', color: '#887300' },
      { value: 'Sony', type: 'none' },
    ];
    const wrapper = render(
      <Legend width={500} height={30} payload={dataWithNone} />
    );

    expect(wrapper.find('.recharts-default-legend').length).to.equal(1);
    expect(wrapper.find('.recharts-default-legend .recharts-legend-item').length).to.equal(3);
  });
});
