import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, test, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { Customized, Surface, RadialBar, RadialBarChart } from '../../src';
import { useAppSelector } from '../../src/state/hooks';
import { selectPolarItemsSettings } from '../../src/state/selectors/polarSelectors';
import { PolarGraphicalItemSettings } from '../../src/state/graphicalItemsSlice';

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

  describe('state integration', () => {
    it('should reports its settings to Redux state, and remove it when removed from DOM', () => {
      const polarItemsSpy = vi.fn();
      const Comp = (): null => {
        polarItemsSpy(useAppSelector(state => selectPolarItemsSettings(state, 'angleAxis', 0)));
        return null;
      };
      const { rerender } = render(
        <RadialBarChart width={100} height={100} data={data}>
          <RadialBar dataKey="value" />
          <Customized component={<Comp />} />
        </RadialBarChart>,
      );

      const expectedPolarItemsSettings: PolarGraphicalItemSettings = {
        angleAxisId: 0,
        data: undefined,
        dataKey: 'value',
        hide: false,
        radiusAxisId: 0,
      };
      expect(polarItemsSpy).toHaveBeenLastCalledWith([expectedPolarItemsSettings]);
      expect(polarItemsSpy).toHaveBeenCalledTimes(3);

      rerender(
        <RadialBarChart width={100} height={100} data={data}>
          <Customized component={<Comp />} />
        </RadialBarChart>,
      );

      expect(polarItemsSpy).toHaveBeenLastCalledWith([]);
      expect(polarItemsSpy).toHaveBeenCalledTimes(5);
    });
  });
});
