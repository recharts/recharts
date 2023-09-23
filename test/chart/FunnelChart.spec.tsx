import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { FunnelChart, Funnel, Tooltip, Trapezoid } from '../../src';
import { mockMouseEvent } from '../helper/mockMouseEvent';

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

  test('renders customized active shape when activeShape is set to be a function', () => {
    const { container } = render(
      <FunnelChart width={700} height={200}>
        <Funnel
          width={400}
          data={data}
          dataKey="value"
          isAnimationActive={false}
          activeShape={props => <Trapezoid {...props} />}
        />
        <Tooltip />
      </FunnelChart>,
    );

    const trapezoids = container.querySelectorAll('.recharts-funnel-trapezoid');
    const [shape] = Array.from(trapezoids);
    const mouseOverEvent = mockMouseEvent('mouseover', shape, {});

    mouseOverEvent.fire();

    const activeShape = container.querySelectorAll('.recharts-active-shape');
    expect(activeShape).toHaveLength(1);
  });

  test('renders customized active shape when activeShape is set to be an object', () => {
    const { container } = render(
      <FunnelChart width={700} height={200}>
        <Funnel
          width={400}
          data={data}
          dataKey="value"
          isAnimationActive={false}
          activeShape={{ fill: 'red', strokeWidth: 2 }}
        />
        <Tooltip />
      </FunnelChart>,
    );

    const trapezoids = container.querySelectorAll('.recharts-funnel-trapezoid');
    const [shape] = Array.from(trapezoids);
    const mouseOverEvent = mockMouseEvent('mouseover', shape, {});

    mouseOverEvent.fire();

    const activeShape = container.querySelectorAll('.recharts-active-shape');
    expect(activeShape).toHaveLength(1);
  });

  test('renders customized active shape when activeShape is set to be a ReactElement', () => {
    const { container } = render(
      <FunnelChart width={700} height={200}>
        <Funnel
          width={400}
          data={data}
          dataKey="value"
          isAnimationActive={false}
          activeShape={<Trapezoid fill="red" />}
        />
        <Tooltip />
      </FunnelChart>,
    );

    const trapezoids = container.querySelectorAll('.recharts-funnel-trapezoid');
    const [shape] = Array.from(trapezoids);
    const mouseOverEvent = mockMouseEvent('mouseover', shape, {});

    mouseOverEvent.fire();

    const activeShape = container.querySelectorAll('.recharts-active-shape');
    expect(activeShape).toHaveLength(1);
  });

  test('renders customized active shape when activeShape is set to be a truthy boolean', () => {
    const { container } = render(
      <FunnelChart width={700} height={200}>
        <Funnel width={400} data={data} dataKey="value" isAnimationActive={false} activeShape />
        <Tooltip />
      </FunnelChart>,
    );

    const trapezoids = container.querySelectorAll('.recharts-funnel-trapezoid');
    const [shape] = Array.from(trapezoids);
    const mouseOverEvent = mockMouseEvent('mouseover', shape, {});

    mouseOverEvent.fire();

    const activeShape = container.querySelectorAll('.recharts-active-shape');
    expect(activeShape).toHaveLength(1);
  });

  test('does not render customized active shape when activeShape is set to be a falsy boolean', () => {
    const { container } = render(
      <FunnelChart width={700} height={200}>
        <Funnel width={400} data={data} dataKey="value" isAnimationActive={false} activeShape={false} />
        <Tooltip />
      </FunnelChart>,
    );

    const trapezoids = container.querySelectorAll('.recharts-funnel-trapezoid');
    const [shape] = Array.from(trapezoids);
    const mouseOverEvent = mockMouseEvent('mouseover', shape, {});

    mouseOverEvent.fire();

    const activeShape = container.querySelectorAll('.recharts-active-shape');
    expect(activeShape).toHaveLength(0);
  });

  test('does not render customized active shape when activeShape is not set', () => {
    const { container } = render(
      <FunnelChart width={700} height={200}>
        <Funnel width={400} data={data} dataKey="value" isAnimationActive={false} />
        <Tooltip />
      </FunnelChart>,
    );

    const trapezoids = container.querySelectorAll('.recharts-funnel-trapezoid');
    const [shape] = Array.from(trapezoids);
    const mouseOverEvent = mockMouseEvent('mouseover', shape, {});

    mouseOverEvent.fire();

    const activeShape = container.querySelectorAll('.recharts-active-shape');
    expect(activeShape).toHaveLength(0);
  });
});
