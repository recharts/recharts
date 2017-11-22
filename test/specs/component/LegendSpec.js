import React from 'react';
import { mount, render } from 'enzyme';
import { expect } from 'chai';
import { Surface, Legend, LineChart, Line } from 'recharts';

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
      <div className='customized-legend'>test</div>
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

  it('Renders `strokeDasharray` (if present) in Legend when iconType is set to `plainline`', () => {

    const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100}
    ];

    const wrapper = render(
      <LineChart width={600} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <Legend iconType='plainline' />
        <Line type='monotone' dataKey='pv' stroke='#8884d8' activeDot={{r: 8}} strokeDasharray='5 5' />
        <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
      </LineChart>
    );

    expect(wrapper.find('.recharts-default-legend').length).to.equal(1);
    expect(wrapper.find('.recharts-default-legend .recharts-legend-item').length).to.equal(2);
    expect(wrapper.find('.recharts-default-legend .recharts-legend-item path').length).to.equal(0);
    expect(wrapper.find('.recharts-default-legend .recharts-legend-item line').length).to.equal(2);

  });

  it('Does not render `strokeDasharray` (if not present) in Legend when iconType is set to something else than `plainline`', () => {

    const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100}
    ];

    const wrapper = render(
      <LineChart width={600} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <Legend iconType='line' />
        <Line type='monotone' dataKey='pv' stroke='#8884d8' activeDot={{r: 8}} strokeDasharray='5 5' />
        <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
      </LineChart>
    );

    expect(wrapper.find('.recharts-default-legend').length).to.equal(1);
    expect(wrapper.find('.recharts-default-legend .recharts-legend-item').length).to.equal(2);
    expect(wrapper.find('.recharts-default-legend .recharts-legend-item path').length).to.equal(2);
    expect(wrapper.find('.recharts-default-legend .recharts-legend-item line').length).to.equal(0);

  });

});
