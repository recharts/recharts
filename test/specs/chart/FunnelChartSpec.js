import React from 'react';
import { expect } from 'chai';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FunnelChart, Funnel, Tooltip } from 'recharts';
import { render } from 'enzyme';

/* eslint-disable max-len, react/prop-types */

const data = [
  { value: 100, name: '展现' },
  { value: 80, name: '点击' },
  { value: 50, name: '访问' },
  { value: 40, name: '咨询' },
  { value: 26, name: '订单' },
];

const data01 = [
  { value: 100, name: '展现' },
  { value: 80, name: '点击' },
  { value: 50, name: '访问' },
  { value: 40, name: '咨询' },
  { value: 26, name: '订单' },
];

const data02 = [
  { value: 60, name: '展现' },
  { value: 50, name: '点击' },
  { value: 30, name: '访问' },
  { value: 20, name: '咨询' },
  { value: 6, name: '订单' },
];

describe('<FunnelChart />', () => {

  it('Renders 1 funnel in simple FunnelChart', () => {
    const wrapper = render(
      <FunnelChart width={500} height={300}>
        <Tooltip />
        <Funnel
          dataKey="value"
          data={data}
          isAnimationActive
        />
      </FunnelChart>
    );
    expect(wrapper.find('.recharts-trapezoids').length).to.equal(1);
  });

  it('Renders 2 funnel in nest FunnelChart', () => {
    const wrapper = render(
      <FunnelChart margin={{ top: 20, right: 50, left: 20, bottom: 0 }} width={500} height={300}>
        <Tooltip />
        <Funnel
          dataKey="value"
          data={data01}
          isAnimationActive
        />
        <Funnel
          dataKey="value"
          data={data02}
          isAnimationActive={false}
          width="80%"
        />
      </FunnelChart>
    );
    expect(wrapper.find('.recharts-trapezoids').length).to.equal(2);
  });

});
