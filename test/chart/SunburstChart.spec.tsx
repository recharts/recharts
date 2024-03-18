import React from 'react';
import { render } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { SunburstChart } from '../../src';
import { exampleSunburstData as data } from '../_data';

describe('<Sunburst />', () => {
  it('renders each sector in order under the correct category', () => {
    const { container } = render(<SunburstChart data={data} />);

    const sectors = container.querySelectorAll('.recharts-sector');

    expect(sectors[0]).toHaveAttribute('fill', '#264653');
    expect(sectors[1]).toHaveAttribute('fill', '#264653');
    expect(sectors[2]).toHaveAttribute('fill', '#2a9d8f');
    expect(sectors[3]).toHaveAttribute('fill', '#2a9d8f');
    expect(sectors[4]).toHaveAttribute('fill', '#e9c46a');
  });

  it('fires callbacks upon hover and click events', async () => {
    const onMouseEnter = vi.fn();
    const onMouseLeave = vi.fn();
    const onClick = vi.fn();

    const { container } = render(
      <SunburstChart onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} data={data} />,
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
