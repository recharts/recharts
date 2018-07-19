import React from 'react';
import { expect } from 'chai';
import { BarChart, ReferenceLine, Bar, XAxis, YAxis } from 'recharts';
import { mount, render } from 'enzyme';

describe('<ReferenceLine />', () => {
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

  it('Renders 1 line in ReferenceLine', () => {
    const wrapper = render(
      <BarChart width={1100} height={250} barGap={2} barSize={6} data={data} margin={{ top: 20, right: 60, bottom: 0, left: 20 }}>
        <XAxis dataKey="name" orientation="top" />
        <YAxis tickCount={7} orientation="right" />
        <Bar dataKey="uv" />
        <ReferenceLine x="201106" stroke="#666" label="201106" />
        <ReferenceLine y={0} stroke="#666" label="0" labelPosition="start" />
      </BarChart>
    );
    expect(wrapper.find('.recharts-reference-line-line').length).to.equal(2);
    expect(wrapper.find('.recharts-label').length).to.equal(2);
  });

  it('Renders 1 line in ReferenceLine in vertical barchart', () => {
    const wrapper = render(
      <BarChart layout="vertical" width={1100} height={250} barGap={2} barSize={6} data={data} margin={{ top: 20, right: 60, bottom: 0, left: 20 }}>
        <XAxis type="number" orientation="top" />
        <YAxis type="category" dataKey="name" tickCount={7} orientation="right" />
        <Bar dataKey="uv" />
        <ReferenceLine y="201106" stroke="#666" label="201106" />
        <ReferenceLine x={0} stroke="#666" label="0" labelPosition="start" />
      </BarChart>
    );
    expect(wrapper.find('.recharts-reference-line-line').length).to.equal(2);
    expect(wrapper.find('.recharts-label').length).to.equal(2);
  });
  it('Renders line segment in ReferenceLine when segment is set', () => {
    const wrapper = render(
      <BarChart width={1100} height={250} barGap={2} barSize={6} data={data} margin={{ top: 20, right: 60, bottom: 0, left: 20 }}>
        <XAxis dataKey="name" orientation="top" />
        <YAxis tickCount={7} orientation="right" />
        <Bar dataKey="uv" />
        <ReferenceLine x="201106" stroke="#666" label="201106" />
        <ReferenceLine y={0} stroke="#666" label="0" labelPosition="start" />
      </BarChart>
    );
    expect(wrapper.find('.recharts-reference-line-line').length).to.equal(2);
    expect(wrapper.find('.recharts-label').length).to.equal(2);
  });
  it('Don\'t renders 1 line in ReferenceLine when no x or y is set', () => {
    const wrapper = render(
      <BarChart width={1100} height={250} barGap={2} barSize={6} data={data} margin={{ top: 20, right: 60, bottom: 0, left: 20 }}>
        <XAxis dataKey="name" orientation="top" />
        <YAxis tickCount={7} orientation="right" />
        <Bar dataKey="uv" />
        <ReferenceLine stroke="#666" label="0" labelPosition="start" />
      </BarChart>
    );
    expect(wrapper.find('.recharts-reference-line-line').length).to.equal(0);
    expect(wrapper.find('.recharts-label').length).to.equal(0);
  });

  it("Don't render any line or label when reference line is outside domain in ReferenceLine", () => {
    const wrapper = render(
      <BarChart width={1100} height={250} barGap={2} barSize={6} data={data} margin={{ top: 20, right: 60, bottom: 0, left: 20 }}>
        <XAxis dataKey="name" orientation="bottom" />
        <YAxis tickCount={7} orientation="right" />
        <Bar dataKey="uv" />
        <ReferenceLine y={200} stroke="#666" />
        <ReferenceLine x="20150201" stroke="#666" />
      </BarChart>
    );
    expect(wrapper.find('.recharts-reference-line-line').length).to.equal(0);
    expect(wrapper.find('.recharts-label').length).to.equal(0);
  });

  it('Render line and label when ifOverflow is extendDomain in ReferenceLine', () => {
    const wrapper = render(
      <BarChart width={1100} height={250} barGap={2} barSize={6} data={data} margin={{ top: 20, right: 60, bottom: 0, left: 20 }}>
        <XAxis dataKey="name" />
        <YAxis tickCount={7} />
        <Bar dataKey="uv" />
        <ReferenceLine x="201102" label="test" stroke="#666" />
        <ReferenceLine y={20} stroke="#666" label="20" ifOverflow="extendDomain" labelPosition="start" />
      </BarChart>
    );
    expect(wrapper.find('.recharts-reference-line-line').length).to.equal(2);
    expect(wrapper.find('.recharts-label').length).to.equal(2);
  });
  it('Render line and label when (deprecated) alwaysShow is true in ReferenceLine', () => {
    const wrapper = render(
      <BarChart width={1100} height={250} barGap={2} barSize={6} data={data} margin={{ top: 20, right: 60, bottom: 0, left: 20 }}>
        <XAxis dataKey="name" />
        <YAxis tickCount={7} />
        <Bar dataKey="uv" />
        <ReferenceLine x="201102" label="test" stroke="#666" />
        <ReferenceLine y={20} stroke="#666" label="20" alwaysShow labelPosition="start" />
      </BarChart>
    );
    expect(wrapper.find('.recharts-reference-line-line').length).to.equal(2);
    expect(wrapper.find('.recharts-label').length).to.equal(2);
  });

  it('Render 1 line and 1 label when label is set to be a function in ReferenceLine', () => {
    const renderLabel = (props) => {
      const { x, y } = props;

      return <text className="customized-reference-line-label" x={x} y={y}>any</text>;
    };
    const wrapper = render(
      <BarChart
        width={1100} height={250} barGap={2} barSize={6} data={data}
        margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
      >
        <XAxis dataKey="name" />
        <YAxis tickCount={7} />
        <Bar dataKey="uv" />
        <ReferenceLine y={20} stroke="#666" label={renderLabel} ifOverflow="visible" labelPosition="start" />
      </BarChart>
    );
    expect(wrapper.find('.recharts-reference-line-line').length).to.equal(1);
    expect(wrapper.find('.customized-reference-line-label').length).to.equal(1);
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
        <ReferenceLine y={20} stroke="#666" label={{ a: 1 }} labelPosition="start" />
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
        <ReferenceLine y={20} stroke="#666" ifOverflow="visible" label={<Label text="Custom Text" />} />
      </BarChart>
    );
    expect(wrapper.find('.recharts-reference-line text').text()).to.equal('Custom Text');
  });
});
