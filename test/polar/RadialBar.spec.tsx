import React from 'react';
import { render } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { Surface, RadialBar } from '../../src';

describe('<RadialBar />', () => {
  const data = [
    { cx: 250, cy: 250, innerRadius: 0, outerRadius: 0, startAngle: 0, endAngle: 60, value: 50 },
    { cx: 250, cy: 250, innerRadius: 30, outerRadius: 40, startAngle: 0, endAngle: 60, value: 50 },
    { cx: 250, cy: 250, innerRadius: 50, outerRadius: 60, startAngle: 0, endAngle: 60, value: 50 },
    { cx: 250, cy: 250, innerRadius: 70, outerRadius: 80, startAngle: 0, endAngle: 60, value: 50 },
  ];

  test('Render 5 sectors', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <RadialBar isAnimationActive={false} cx={250} cy={250} data={data} label dataKey="value" />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-radial-bar-sector')).toHaveLength(data.length);
  });

  test("Don't render any sector when data is empty", () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <RadialBar data={[]} dataKey="value" />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-pie')).toHaveLength(0);
  });

  test('Render 5 sectors', async () => {
    const onMouseEnter = vi.fn();
    const onMouseLeave = vi.fn();
    const onClick = vi.fn();

    const { container } = render(
      <Surface width={500} height={500}>
        <RadialBar
          isAnimationActive={false}
          cx={250}
          cy={250}
          data={data}
          dataKey="value"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
        />
      </Surface>,
    );

    const sector = container.querySelectorAll('.recharts-sector')[0];

    await userEvent.hover(sector);
    expect(onMouseEnter).toHaveBeenCalled();
    await userEvent.unhover(sector);
    expect(onMouseLeave).toHaveBeenCalled();
    await userEvent.click(sector);
    expect(onClick).toHaveBeenCalled();
  });
});
