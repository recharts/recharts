import React from 'react';
import { expect } from 'chai';
import { RadialBarChart, RadialBar, Legend, Sector, Tooltip } from 'recharts';
import { mount, render } from 'enzyme';

describe('<RadialBarChart />', () => {
  const data = [
    { name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8' },
    { name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed' },
    { name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1' },
    { name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d' },
    { name: '40-49', uv: 8.63, pv: 3908, fill: '#a4de6c' },
    { name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57' },
    { name: 'unknow', uv: 6.67, pv: 4800, fill: '#ffc658' },
  ];

  it('Renders 7 sectors in simple RadialBarChart', () => {
    const label = { orientation: 'outer' };
    const wrapper = render(
      <RadialBarChart
        width={500}
        height={300}
        cx={150}
        cy={150}
        innerRadius={20}
        outerRadius={140}
        barSize={10}
        data={data}
      >
        <RadialBar
          minAngle={15}
          label={label}
          background
          clockWise
          dataKey="uv"
          isAnimationActive={false}
        />
      </RadialBarChart>
    );
    expect(wrapper.find('.recharts-radial-bar-sector').length).to.equal(data.length);
  });

  it('Don\'t renders any sectors when no RadialBar is added', () => {
    const label = { orientation: 'outer' };
    const wrapper = render(
      <RadialBarChart
        width={500}
        height={300}
        cx={150}
        cy={150}
        innerRadius={20}
        outerRadius={140}
        barSize={10}
        data={data}
      />
    );
    expect(wrapper.find('.recharts-radial-bar-sector').length).to.equal(0);
  });

  it('Don\'t renders any sectors when width or height is smaller than 0', () => {
    const label = { orientation: 'outer' };
    const wrapper = render(
      <RadialBarChart
        width={0}
        height={300}
        cx={150}
        cy={150}
        innerRadius={20}
        outerRadius={140}
        barSize={10}
        data={data}
      />
    );
    expect(wrapper.find('.recharts-radial-bar-sector').length).to.equal(0);
  });

  it('Renders sectors when barSize is not specified', () => {
    const label = { orientation: 'outer' };
    const wrapper = render(
      <RadialBarChart
        width={500}
        height={300}
        cx={150}
        cy={150}
        innerRadius={20}
        outerRadius={140}
        data={data}
      >
        <RadialBar
          minAngle={15}
          label={label}
          background
          clockWise
          dataKey="uv"
          isAnimationActive={false}
        />
      </RadialBarChart>
    );
    expect(wrapper.find('.recharts-radial-bar-sector').length).to.equal(7);
  });

  it('Renders 7 sectors in simple RadialBarChart', () => {
    const label = { orientation: 'outer' };
    const wrapper = render(
      <RadialBarChart
        width={500}
        height={300}
        cx={150}
        cy={150}
        innerRadius={20}
        outerRadius={140}
        barSize={10}
        data={data}
      >
        <RadialBar
          startAngle={0}
          endAngle={180}
          minAngle={15}
          label={label}
          background
          clockWise
          dataKey="uv"
          isAnimationActive={false}
        />
      </RadialBarChart>
    );
    expect(wrapper.find('.recharts-radial-bar-sector').length).to.equal(7);
  });

  it('Renders 7 customized shape when shape is set to be a react element', () => {
    const label = { orientation: 'outer' };
    const Shape = props =>
      <Sector {...props} className="customized-shape" />
    ;
    const wrapper = render(
      <RadialBarChart
        width={500}
        height={300}
        cx={150}
        cy={150}
        innerRadius={20}
        outerRadius={140}
        barSize={10}
        data={data}
      >
        <RadialBar
          shape={<Shape />}
          minAngle={15}
          label={label}
          background
          clockWise
          dataKey="uv"
          isAnimationActive={false}
        />
      </RadialBarChart>
    );
    expect(wrapper.find('.customized-shape').length).to.equal(7);
  });

  it('Renders 7 customized shape when shape is set to be a function', () => {
    const label = { orientation: 'outer' };
    const renderShape = props =>
      <Sector {...props} className="customized-shape" />
    ;
    const wrapper = render(
      <RadialBarChart
        width={500}
        height={300}
        cx={150}
        cy={150}
        innerRadius={20}
        outerRadius={140}
        barSize={10}
        data={data}
      >
        <RadialBar
          shape={renderShape}
          minAngle={15}
          label={label}
          background
          clockWise
          dataKey="uv"
          isAnimationActive={false}
        />
      </RadialBarChart>
    );
    expect(wrapper.find('.customized-shape').length).to.equal(7);
  });

  it('Renders 7 legend item when add a Legend element', () => {
    const wrapper = render(
      <RadialBarChart
        width={500}
        height={300}
        cx={150}
        cy={150}
        innerRadius={20}
        outerRadius={140}
        barSize={10}
        data={data}
      >
        <RadialBar
          minAngle={15}
          background
          clockWise
          dataKey="uv"
          isAnimationActive={false}
        />
        <Legend />
      </RadialBarChart>
    );
    expect(wrapper.find('.recharts-legend-wrapper').length).to.equal(1);
    expect(wrapper.find('.recharts-legend-item').length).to.equal(7);
  });

  // it('Renders tooltip when add a Tooltip element', () => {
  //   const wrapper = mount(
  //     <RadialBarChart
  //       width={500}
  //       height={300}
  //       cx={150}
  //       cy={150}
  //       innerRadius={20}
  //       outerRadius={140}
  //       barSize={10}
  //       data={data}
  //     >
  //       <RadialBar
  //         minAngle={15}
  //         background
  //         clockWise
  //         dataKey="uv"
  //         isAnimationActive={false}
  //       />
  //       <Tooltip />
  //     </RadialBarChart>
  //   );
  //   wrapper.setState({
  //     isTooltipActive: true,
  //     activeTooltipCoord: {
  //       x: 95,
  //       y: 21,
  //     },
  //     activeTooltipLabel: 'test',
  //     activeTooltipPayload: [{name: 'test', value: 1}],
  //   });
  //   expect(wrapper.find('.recharts-tooltip-wrapper').length).to.equal(1);
  //   expect(wrapper.find('.recharts-default-tooltip').length).to.equal(1);
  // });
});
