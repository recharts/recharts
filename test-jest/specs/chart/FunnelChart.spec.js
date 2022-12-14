/* eslint-disable import/no-useless-path-segments */
/* eslint-disable import/order */
/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { FunnelChart, Funnel, Tooltip } from '../../../src/';
import { render } from '@testing-library/react';

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
  test('Renders 1 funnel in simple FunnelChart', () => {
    const { container } = render(
      <FunnelChart width={500} height={300}>
        <Tooltip />
        <Funnel dataKey="value" data={data} isAnimationActive />
      </FunnelChart>,
    );
    expect(container.querySelectorAll('.recharts-trapezoids')).toHaveLength(1);
  });

  test('Renders 2 funnel in nest FunnelChart', () => {
    const { container } = render(
      <FunnelChart margin={{ top: 20, right: 50, left: 20, bottom: 0 }} width={500} height={300}>
        <Tooltip />
        <Funnel dataKey="value" data={data01} isAnimationActive />
        <Funnel dataKey="value" data={data02} isAnimationActive={false} width="80%" />
      </FunnelChart>,
    );
    expect(container.querySelectorAll('.recharts-trapezoids')).toHaveLength(2);
  });
});
