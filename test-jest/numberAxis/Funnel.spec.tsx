import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import { Cell, Funnel, FunnelChart, LabelList } from '../../src';

const data = [
  { value: 100, name: '展现' },
  { value: 80, name: '点击' },
  { value: 50, name: '访问' },
  { value: 40, name: '咨询' },
  { value: 26, name: '订单' },
];

describe('<Funnel />', () => {
  it('Render 5 Trapezoid in a simple funnel', () => {
    const wrapper = render(
      <FunnelChart width={500} height={500}>
        <Funnel dataKey="value" data={data} />
      </FunnelChart>,
    );

    expect(wrapper.find('.recharts-funnel-trapezoid').length).to.equal(5);
  });

  it('Render 5 Trapezoid with animation in a simple funnel', () => {
    const wrapper = render(
      <FunnelChart width={500} height={500}>
        <Funnel dataKey="value" data={data} isAnimationActive />
      </FunnelChart>,
    );

    expect(wrapper.find('.recharts-funnel-trapezoid').length).to.equal(5);
  });

  it("Don't render any Trapezoid when data is empty", () => {
    const wrapper = render(
      <FunnelChart width={500} height={500}>
        <Funnel dataKey="value" data={[]} />
      </FunnelChart>,
    );

    expect(wrapper.find('.recharts-funnel-trapezoid').length).to.equal(0);
  });

  it("Don't render any Trapezoid when set hide", () => {
    const wrapper = render(
      <FunnelChart width={500} height={500}>
        <Funnel dataKey="value" data={data} hide />
      </FunnelChart>,
    );

    expect(wrapper.find('.recharts-funnel-trapezoid').length).to.equal(0);
  });

  it('active shape in simple funnel', () => {
    const wrapper = render(
      <FunnelChart width={500} height={500}>
        <Funnel
          dataKey="value"
          data={data}
          activeIndex={1}
          isAnimationActive={false}
          activeShape={payload => (
            <rect
              className="custom-active-shape"
              x={payload.x}
              y={payload.y}
              height={payload.height}
              width={payload.upperWidth}
              fill="red"
              strokeWidth="4"
              stroke="#fff"
            />
          )}
        >
          {data.map(entry => (
            <Cell key={entry.name} />
          ))}
        </Funnel>
      </FunnelChart>,
    );

    expect(wrapper.find('.custom-active-shape').length).to.equal(1);
  });

  it('Renders funnel custom cell in simple FunnelChart', () => {
    const wrapper = render(
      <FunnelChart width={500} height={300}>
        <Funnel dataKey="value" data={data} isAnimationActive={false}>
          {data.map(entry => (
            <Cell key={entry.name} className="custom-cell" />
          ))}
        </Funnel>
      </FunnelChart>,
    );
    expect(wrapper.find('.custom-cell').length).to.equal(5);
  });

  it('Renders funnel custom label in simple FunnelChart', () => {
    const wrapper = render(
      <FunnelChart width={500} height={300}>
        <Funnel dataKey="value" data={data} isAnimationActive={false}>
          {data.map(entry => (
            <Cell key={entry.name} className="custom-cell" />
          ))}
          <LabelList position="right" fill="#000" stroke="#000" dataKey="name" className="custom-label" />
        </Funnel>
      </FunnelChart>,
    );
    expect(wrapper.find('.custom-label').length).to.equal(5);
  });
});
