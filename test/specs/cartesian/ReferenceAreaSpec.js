import React from 'react';
import { expect } from 'chai';
import { BarChart, ReferenceArea, Bar, XAxis, YAxis } from 'recharts';
import { mount, render } from 'enzyme';

describe('<ReferenceArea />', () => {
  const data = [
    { name: '201102', uv: -6.11, pv: 0 },
    { name: '201103', uv: 0.39, pv: 0 },
    { name: '201104', uv: -1.37, pv: 0 },
    { name: '201105', uv: 1.16, pv: 0 },
    { name: '201106', uv: 1.29, pv: 0 },
    { name: '201107', uv: 0.09, pv: 0 },
    { name: '201108', uv: 0.53, pv: 0 },
    { name: '201109', uv: 2.52, pv: 0 },
    { name: '201110', uv: 0.79, pv: 0 },
    { name: '201111', uv: 2.94, pv: 0 },
    { name: '201112', uv: 4.3, pv: 0 },
  ];

  it('Render 1 rect in ReferenceArea', () => {
    const wrapper = render(
      <BarChart width={1100} height={250} barGap={2} barSize={6} data={data} margin={{ top: 20, right: 60, bottom: 0, left: 20 }}>
        <XAxis dataKey="name" orientation="top" />
        <YAxis tickCount={7} orientation="right" />
        <Bar dataKey="uv" />
        <ReferenceArea x1="201106" x2="201110" fill="#666" label="201106" />
        <ReferenceArea y1={0} y2={2} fill="#666" label="201106" />
      </BarChart>
    );
    expect(wrapper.find('.recharts-reference-area-rect').length).to.equal(2);
    expect(wrapper.find('.recharts-label').length).to.equal(2);
  });

  it('Don\'t render any rect in ReferenceArea when no x1, x2, y1 or y2 is set', () => {
    const wrapper = render(
      <BarChart width={1100} height={250} barGap={2} barSize={6} data={data} margin={{ top: 20, right: 60, bottom: 0, left: 20 }}>
        <XAxis dataKey="name" orientation="top" />
        <YAxis tickCount={7} orientation="right" />
        <Bar dataKey="uv" />
        <ReferenceArea stroke="#666" label="0" />
      </BarChart>
    );
    expect(wrapper.find('.recharts-reference-area-rect').length).to.equal(0);
    expect(wrapper.find('.recharts-label').length).to.equal(0);
  });

  it('Render a rect in ReferenceArea when x1, x2, y1 or y2 is set', () => {
    const wrapper = render(
      <BarChart width={1100} height={250} barGap={2} barSize={6} data={data} margin={{ top: 20, right: 60, bottom: 0, left: 20 }}>
        <XAxis dataKey="name" orientation="top" />
        <YAxis tickCount={7} orientation="right" />
        <Bar dataKey="uv" />
        <ReferenceArea x1="201106" stroke="#666" label="0" />
      </BarChart>
    );
    expect(wrapper.find('.recharts-reference-area-rect').length).to.equal(1);
    expect(wrapper.find('.recharts-label').length).to.equal(1);
  });

  it("Don't render any line or label when reference area is outside domain in ReferenceArea", () => {
    const wrapper = render(
      <BarChart width={1100} height={250} barGap={2} barSize={6} data={data} margin={{ top: 20, right: 60, bottom: 0, left: 20 }}>
        <XAxis dataKey="name" orientation="bottom" />
        <YAxis tickCount={7} orientation="right" />
        <Bar dataKey="uv" />
        <ReferenceArea y1={200} y2={300} fill="#666" />
        <ReferenceArea x1="20150201" x2="20150201" fill="#666" />
      </BarChart>
    );
    expect(wrapper.find('.recharts-reference-area-rect').length).to.equal(0);
    expect(wrapper.find('.recharts-label').length).to.equal(0);
  });

  it('Render line and label when alwaysShow is true in ReferenceArea', () => {
    const wrapper = render(
      <BarChart width={1100} height={250} barGap={2} barSize={6} data={data} margin={{ top: 20, right: 60, bottom: 0, left: 20 }}>
        <XAxis dataKey="name" />
        <YAxis tickCount={7} />
        <Bar dataKey="uv" />
        <ReferenceArea y1={200} y2={300} fill="#666" alwaysShow />
      </BarChart>
    );
    expect(wrapper.find('.recharts-reference-area-rect').length).to.equal(1);
  });

  it('Render 1 line and 1 label when label is set to be a function in ReferenceArea', () => {
    const renderLabel = (props) => {
      const { x, y } = props;

      return <text className="customized-reference-area-label" x={x} y={y}>any</text>;
    };
    const wrapper = render(
      <BarChart
        width={1100} height={250} barGap={2} barSize={6} data={data}
        margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
      >
        <XAxis dataKey="name" />
        <YAxis tickCount={7} />
        <Bar dataKey="uv" />
        <ReferenceArea x1="201106" x2="201110" fill="#666" label={renderLabel} />
      </BarChart>
    );
    expect(wrapper.find('.recharts-reference-area-rect').length).to.equal(1);
    expect(wrapper.find('.customized-reference-area-label').length).to.equal(1);
  });

  it("Don't Render 1 label when label is set to be a object", () => {
    const wrapper = render(
      <BarChart
        width={1100} height={250} barGap={2} barSize={6} data={data}
        margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
      >
        <XAxis dataKey="name" />
        <YAxis tickCount={7} />
        <Bar dataKey="uv" />
        <ReferenceArea x1="201106" x2="201110" fill="#666" label={{ a: 1 }} />
      </BarChart>
    );

    expect(wrapper.find('.recharts-label').length).to.equal(0);
  });

  it('Render custom lable when label is set to react element', () => {
    const Label = ({ text, ...props }) => <text {...props} >{text}</text>;
    const wrapper = render(
      <BarChart width={1100} height={250} barGap={2} barSize={6} data={data} margin={{ top: 20, right: 60, bottom: 0, left: 20 }}>
        <XAxis dataKey="name" />
        <YAxis tickCount={7} />
        <Bar dataKey="uv" />
        <ReferenceArea x1="201106" x2="201110" fill="#666" label={<Label text="Custom Text" />} alwaysShow />
      </BarChart>
    );
    expect(wrapper.find('.recharts-reference-area text').text()).to.equal('Custom Text');
  });
});
