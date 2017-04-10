import React from 'react';
import { expect } from 'chai';
import { BarChart, ReferenceDot, Bar, XAxis, YAxis } from 'recharts';
import { mount, render } from 'enzyme';

describe('<ReferenceDot />', () => {
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

  it('Render 1 dot and 1 label in ReferenceDot', () => {
    const wrapper = render(
      <BarChart width={1100} height={250} barGap={2} barSize={6} data={data} margin={{ top: 20, right: 60, bottom: 0, left: 20 }}>
        <XAxis dataKey="name" />
        <YAxis tickCount={7} />
        <Bar dataKey="uv" />
        <ReferenceDot x="201106" y={3} stroke="#666" label="201106" />
      </BarChart>
    );
    expect(wrapper.find('.recharts-reference-dot-dot').length).to.equal(1);
    expect(wrapper.find('.recharts-label').length).to.equal(1);
  });

  it("Don't render any dot or label when reference dot is outside domain in ReferenceDot", () => {
    const wrapper = render(
      <BarChart width={1100} height={250} barGap={2} barSize={6} data={data} margin={{ top: 20, right: 60, bottom: 0, left: 20 }}>
        <XAxis dataKey="name" />
        <YAxis tickCount={7} orientation="right" />
        <Bar dataKey="uv" />
        <ReferenceDot x="201106" y={20} stroke="#666" label="201106" />
      </BarChart>
    );
    expect(wrapper.find('.recharts-reference-dot-dot').length).to.equal(0);
    expect(wrapper.find('.recharts-label').length).to.equal(0);
  });

  it('Render 1 line and 1 label when alwaysShow is true in ReferenceDot', () => {
    const wrapper = render(
      <BarChart width={1100} height={250} barGap={2} barSize={6} data={data} margin={{ top: 20, right: 60, bottom: 0, left: 20 }}>
        <XAxis dataKey="name" />
        <YAxis tickCount={7} />
        <Bar dataKey="uv" />
        <ReferenceDot x="201106" y={20} stroke="#666" label="201106" alwaysShow />
      </BarChart>
    );
    expect(wrapper.find('.recharts-reference-dot-dot').length).to.equal(1);
    expect(wrapper.find('.recharts-label').length).to.equal(1);
  });

  it('Render custom lable when label is set to be a react element', () => {
    const Label = ({ text, ...props }) => <text className="customized-label" {...props} >{text}</text>;
    const wrapper = render(
      <BarChart width={1100} height={250} barGap={2} barSize={6} data={data} margin={{ top: 20, right: 60, bottom: 0, left: 20 }}>
        <XAxis dataKey="name" />
        <YAxis tickCount={7} />
        <Bar dataKey="uv" />
        <ReferenceDot x="201106" y={20} stroke="#666" label={<Label text="Custom Text" />} alwaysShow />
      </BarChart>
    );
    expect(wrapper.find('.customized-label').text()).to.equal('Custom Text');
  });

  it('Render custom lable when label is set to be a function', () => {
    const renderLabel = ({ text, ...props }) => <text className="customized-label" {...props} >Custom Text</text>;
    const wrapper = render(
      <BarChart width={1100} height={250} barGap={2} barSize={6} data={data} margin={{ top: 20, right: 60, bottom: 0, left: 20 }}>
        <XAxis dataKey="name" />
        <YAxis tickCount={7} />
        <Bar dataKey="uv" />
        <ReferenceDot x="201106" y={20} stroke="#666" label={renderLabel} alwaysShow />
      </BarChart>
    );
    expect(wrapper.find('.customized-label').text()).to.equal('Custom Text');
  });

  it("Don\'t render any label when label is a plain object", () => {
    const renderLabel = ({ text, ...props }) => <text className="customized-label" {...props} >Custom Text</text>;
    const wrapper = render(
      <BarChart width={1100} height={250} barGap={2} barSize={6} data={data} margin={{ top: 20, right: 60, bottom: 0, left: 20 }}>
        <XAxis dataKey="name" />
        <YAxis tickCount={7} />
        <Bar dataKey="uv" />
        <ReferenceDot x="201106" y={20} stroke="#666" label={{}} alwaysShow />
      </BarChart>
    );
    expect(wrapper.find('.recharts-label').length).to.equal(0);
  });

  it("Don\'t render any dot when x or y is not specified", () => {
    const renderLabel = ({ text, ...props }) => <text className="customized-label" {...props} >Custom Text</text>;
    const wrapper = render(
      <BarChart width={1100} height={250} barGap={2} barSize={6} data={data} margin={{ top: 20, right: 60, bottom: 0, left: 20 }}>
        <XAxis dataKey="name" />
        <YAxis tickCount={7} />
        <Bar dataKey="uv" />
        <ReferenceDot x="201106" stroke="#666" alwaysShow />
        <ReferenceDot y={20} stroke="#666" alwaysShow />
      </BarChart>
    );
    expect(wrapper.find('.recharts-reference-dot-dot').length).to.equal(0);
  });
});
