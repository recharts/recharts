import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { FunnelChart, Funnel } from '../../src';

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
  jest.useFakeTimers();

  test('Renders 1 funnel in simple FunnelChart', () => {
    const { container } = render(
      <FunnelChart width={500} height={300}>
        <Funnel dataKey="value" data={data} isAnimationActive={false} />
      </FunnelChart>,
    );
    expect(container.querySelectorAll('.recharts-trapezoids')).toHaveLength(1);
    expect(screen.getAllByRole('img')).toHaveLength(5);

    data.forEach(({ name }) => {
      expect(container.querySelectorAll(`[name="${name}"]`)).toHaveLength(1);
    });
  });

  test('Renders 1 funnel in FunnelChart with animation', () => {
    const { container } = render(
      <FunnelChart width={500} height={300}>
        <Funnel dataKey="value" data={data} isAnimationActive />
      </FunnelChart>,
    );

    expect(container.querySelectorAll('.recharts-funnel-trapezoid')).toHaveLength(5);
    // trapezoid are not rendered because the animation hasn't started
    expect(container.querySelectorAll('.recharts-trapezoid')).toHaveLength(0);

    // wait animation end
    jest.advanceTimersByTime(500);

    expect(container.querySelectorAll('.recharts-funnel-trapezoid')).toHaveLength(5);
    // all trapezoids are visible
    expect(container.querySelectorAll('.recharts-trapezoid')).toHaveLength(5);
  });

  test('Renders 2 funnel in nest FunnelChart', () => {
    const { container } = render(
      <FunnelChart margin={{ top: 20, right: 50, left: 20, bottom: 0 }} width={500} height={300}>
        <Funnel dataKey="value" data={data01} isAnimationActive={false} />
        <Funnel dataKey="value" data={data02} isAnimationActive={false} width="80%" />
      </FunnelChart>,
    );

    expect(container.querySelectorAll('.recharts-trapezoids')).toHaveLength(2);
    expect(container.querySelectorAll('.recharts-funnel-trapezoid')).toHaveLength(10);
  });

  (
    [
      { prop: 'onClick', event: 'click' },
      { prop: 'onMouseEnter', event: 'mouseEnter' },
      { prop: 'onMouseMove', event: 'mouseMove' },
      { prop: 'onMouseLeave', event: 'mouseLeave' },
    ] as const
  ).forEach(({ prop, event }) => {
    test(`should fire ${event} event`, () => {
      const onEventMock = jest.fn();

      const { container } = render(
        <FunnelChart
          margin={{ top: 20, right: 50, left: 20, bottom: 0 }}
          width={500}
          height={300}
          {...{ [prop]: onEventMock }}
        >
          <Funnel dataKey="value" data={data01} isAnimationActive={false} />
          <Funnel dataKey="value" data={data02} isAnimationActive={false} width="80%" />
        </FunnelChart>,
      );

      fireEvent[event](container.querySelectorAll('.recharts-funnel-trapezoid')[2]);

      expect(onEventMock).toHaveBeenCalled();
    });
  });
});
