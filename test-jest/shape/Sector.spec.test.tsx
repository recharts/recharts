import React from 'react';
import { render, screen } from '@testing-library/react';
import { Surface, Sector } from '../../src';

describe('<Sector />', () => {
  test('Render 1 sector in simple Sector', () => {
    render(
      <Surface width={500} height={500}>
        <Sector fill="#ff7902" cx={200} cy={300} innerRadius={150} outerRadius={200} endAngle={90} />
      </Surface>,
    );
    const sector = screen.getByRole('img');
    expect(sector?.classList.contains('recharts-sector')).toBeTruthy();
  });

  test('Render 1 sector when cornerRadius > 0', () => {
    render(
      <Surface width={500} height={500}>
        <Sector fill="#ff7902" cx={200} cy={300} innerRadius={150} outerRadius={200} cornerRadius={10} endAngle={90} />
      </Surface>,
    );

    const sectors = screen.queryAllByRole('img');
    expect(sectors).toHaveLength(1);
    const path = sectors[0].getAttribute('d') as string;
    expect(path).not.toBeFalsy();
    expect(path.length - path.split('A').join('').length).toBe(6);
  });

  test("Don't render any sector when props is invalid", () => {
    render(
      <Surface width={500} height={500}>
        <Sector fill="#ff7902" cx={200} cy={300} innerRadius={200} outerRadius={150} endAngle={90} />
        <Sector fill="#ff7902" cx={200} cy={300} innerRadius={150} outerRadius={200} startAngle={90} endAngle={90} />
      </Surface>,
    );
    expect(screen.queryAllByRole('img')).toHaveLength(0);
  });
});
