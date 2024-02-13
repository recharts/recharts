import React from 'react';
import { render, screen } from '@testing-library/react';
import { Cell, Funnel, FunnelChart, FunnelProps, LabelList } from '../../src';

const data = [
  { value: 100, name: '展现' },
  { value: 80, name: '点击' },
  { value: 50, name: '访问' },
  { value: 40, name: '咨询' },
  { value: 26, name: '订单' },
];

describe('<Funnel />', () => {
  it('Render 5 Trapezoid in a simple funnel', () => {
    render(
      <FunnelChart width={500} height={500}>
        <Funnel dataKey="value" data={data} />
      </FunnelChart>,
    );

    expect(screen.queryAllByRole('img')).toHaveLength(data.length);
  });

  it('Render 5 Trapezoid with animation in a simple funnel', () => {
    render(
      <FunnelChart width={500} height={500}>
        <Funnel dataKey="value" data={data} isAnimationActive />
      </FunnelChart>,
    );

    expect(screen.queryAllByRole('img')).toHaveLength(data.length);
  });

  it("Don't render any Trapezoid when data is empty", () => {
    render(
      <FunnelChart width={500} height={500}>
        <Funnel dataKey="value" data={[]} />
      </FunnelChart>,
    );

    expect(screen.queryAllByRole('img')).toHaveLength(0);
  });

  it("Don't render any Trapezoid when set hide", () => {
    render(
      <FunnelChart width={500} height={500}>
        <Funnel dataKey="value" data={data} hide />
      </FunnelChart>,
    );

    expect(screen.queryAllByRole('img')).toHaveLength(0);
  });

  it('active shape in simple funnel', () => {
    const { container } = render(
      <FunnelChart width={500} height={500}>
        <Funnel
          dataKey="value"
          data={data}
          activeIndex={1}
          isAnimationActive={false}
          activeShape={(payload: FunnelProps) => (
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

    expect(container.querySelectorAll('.custom-active-shape').length).toBe(1);
  });

  it('Renders funnel custom cell in simple FunnelChart', () => {
    render(
      <FunnelChart width={500} height={300}>
        <Funnel dataKey="value" data={data} isAnimationActive={false}>
          {data.map(entry => (
            <Cell key={entry.name} className="custom-cell" />
          ))}
        </Funnel>
      </FunnelChart>,
    );

    expect(screen.queryAllByRole('img')).toHaveLength(data.length);
  });

  it('Renders funnel custom label in simple FunnelChart', () => {
    const { container } = render(
      <FunnelChart width={500} height={300}>
        <Funnel dataKey="value" data={data} isAnimationActive={false}>
          <LabelList position="right" fill="#000" stroke="#000" dataKey="name" className="custom-label" />
        </Funnel>
      </FunnelChart>,
    );

    expect(container.querySelectorAll('.custom-label')).toHaveLength(data.length);
  });
});
