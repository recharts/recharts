import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from 'enzyme';
// eslint-disable-next-line import/no-extraneous-dependencies
import { expect } from 'chai';
// eslint-disable-next-line import/no-unresolved
import { Surface, Label, LineChart, Line, ReferenceLine } from 'recharts';

const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
  { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
  { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
  { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
  { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
];

describe('<Label />', () => {
  const polarViewBox = {
    cx: 50,
    cy: 50,
    innerRadius: 20,
    outerRadius: 80,
    startAngle: 0,
    endAngle: 90,
  };
  it('Render polar labels (postion="center")', () => {
    const wrapper = render(
      <Surface>
        <Label viewBox={polarViewBox} value="text" position="center" />
      </Surface>
    );
    const label = wrapper.find('.recharts-label');

    expect(label.length).to.equal(1);
    expect(label.attr('x')).to.equal(`${polarViewBox.cx}`);
    expect(label.attr('y')).to.equal(`${polarViewBox.cy}`);
  });

  it('Render polar labels (position="outside")', () => {
    const wrapper = render(
      <Surface>
        <Label viewBox={polarViewBox} value="text" position="outside" />
      </Surface>
    );
    const label = wrapper.find('.recharts-label');

    expect(label.length).to.equal(1);
    expect(label.attr('x')).to.equal('110.10407640085654');
    expect(label.attr('y')).to.equal('-10.104076400856535');
  });

  it('Render radial labels (position="insideStart")', () => {
    const wrapper = render(
      <Surface>
        <Label viewBox={polarViewBox} value="text" position="insideStart" />
      </Surface>
    );

    const label = wrapper.find('.recharts-radial-bar-label');

    expect(label.length).to.equal(1);
  });

  it('Render radial labels (position="insideEnd")', () => {
    const wrapper = render(
      <Surface>
        <Label viewBox={polarViewBox} value="text" position="insideEnd" />
      </Surface>
    );

    expect(wrapper.find('.recharts-radial-bar-label').length).to.equal(1);
  });
  it('Render radial labels (position="end")', () => {
    const wrapper = render(
      <Surface>
        <Label viewBox={polarViewBox} value="text" position="end" />
      </Surface>
    );

    expect(wrapper.find('.recharts-radial-bar-label').length).to.equal(1);
  });

  const cartesianViewBox = {
    x: 50,
    y: 50,
    width: 200,
    height: 200,
  };

  it('Render cartesian labels (postion="center")', () => {
    const wrapper = render(
      <Surface>
        <Label viewBox={cartesianViewBox} value="text" position="center" />
      </Surface>
    );
    const label = wrapper.find('.recharts-label');

    expect(label.length).to.equal(1);
    expect(label.attr('x')).to.equal(`${cartesianViewBox.x + cartesianViewBox.width / 2}`);
    expect(label.attr('y')).to.equal(`${cartesianViewBox.y + cartesianViewBox.height / 2}`);
  });

  it('Render label when content is a function, and return a simple string.', () => {
    const wrapper = render(
      <Surface>
        <Label viewBox={cartesianViewBox} value="text" position="center" content={({ value }) => (`${value}%`)} />
      </Surface>
    );
      
    setTimeout(() => {
      const label = wrapper.find('.recharts-label');
      expect(label.length).to.equal(1);
      expect(label.text()).to.equal('text%');
    }, 1000);

  });

  it('Render label by label = <Label />', () => {
    const wrapper = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        <ReferenceLine y={200} stroke="red" label={<Label value="Max PV PAGE" />} />
      </LineChart>
    );
    expect(wrapper.find('.recharts-line .recharts-line-curve').length).to.equal(1);
  });
});
