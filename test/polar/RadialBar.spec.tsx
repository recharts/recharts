import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, test, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { Customized, RadialBar, RadialBarChart } from '../../src';
import { useAppSelector } from '../../src/state/hooks';
import { selectPolarItemsSettings } from '../../src/state/selectors/polarSelectors';
import { PolarGraphicalItemSettings } from '../../src/state/graphicalItemsSlice';
import { PageData } from '../_data';
import { expectRadialBars } from '../helper/expectRadialBars';

describe('<RadialBar />', () => {
  test('Render 5 sectors', () => {
    const { container } = render(
      <RadialBarChart width={500} height={500} data={PageData}>
        <RadialBar isAnimationActive={false} label dataKey="pv" />
      </RadialBarChart>,
    );

    expectRadialBars(container, [
      {
        d: 'M 262.93333333333334,250 A 12.933333333333334,12.933333333333334,0, 0,0, 250.4145337365934,237.07331160380443 L 250,250 Z',
      },
      {
        d: 'M 295.6,250 A 45.599999999999994,45.599999999999994,0, 0,0, 205.43533428174044,240.3381901581649 L 230.8450121035551,245.84711682236912 A 19.599999999999998,19.599999999999998,0, 0,1, 269.6,250 Z',
      },
      {
        d: 'M 328.26666666666665,250 A 78.26666666666667,78.26666666666667,0, 0,0, 298.87689295503134,188.87127969461883 L 282.64010568717595,209.17809478754785 A 52.266666666666666,52.266666666666666,0, 0,1, 302.26666666666665,250 Z',
      },
      {
        d: 'M 360.93333333333334,250 A 110.93333333333334,110.93333333333334,0, 1,0, 360.93333331643726,250.00193615191677 L 334.93333332039725,250.00148236631128 A 84.93333333333334,84.93333333333334,0, 1,1, 334.93333333333334,250 Z',
      },
      {
        d: 'M 393.6,250 A 143.6,143.6,0, 0,0, 134.47798538955743,164.70273075681325 L 155.39422758921972,180.1465260236855 A 117.6,117.6,0, 0,1, 367.6,250 Z',
      },
      {
        d: 'M 426.26666666666665,250 A 176.26666666666665,176.26666666666665,0, 0,0, 74.09549210454074,238.7065558913996 L 100.04207231604948,240.37238161089817 A 150.26666666666665,150.26666666666665,0, 0,1, 400.26666666666665,250 Z',
      },
    ]);
  });

  test("Don't render any sector when data is empty", () => {
    const { container } = render(
      <RadialBarChart width={500} height={500} data={[]}>
        <RadialBar dataKey="uv" />
      </RadialBarChart>,
    );

    expectRadialBars(container, []);
  });

  test('calls mouse handler events', async () => {
    const onMouseEnter = vi.fn();
    const onMouseLeave = vi.fn();
    const onClick = vi.fn();

    const { container } = render(
      <RadialBarChart width={500} height={500} data={PageData}>
        <RadialBar
          isAnimationActive={false}
          cx={250}
          cy={250}
          dataKey="amt"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
        />
      </RadialBarChart>,
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
    it('should report its settings to Redux state, and remove it when removed from DOM', () => {
      const polarItemsSpy = vi.fn();
      const Comp = (): null => {
        polarItemsSpy(useAppSelector(state => selectPolarItemsSettings(state, 'angleAxis', 0)));
        return null;
      };
      const { rerender } = render(
        <RadialBarChart width={100} height={100} data={PageData}>
          <RadialBar dataKey="value" />
          <Customized component={<Comp />} />
        </RadialBarChart>,
      );

      const expectedPolarItemsSettings: PolarGraphicalItemSettings = {
        barSize: undefined,
        stackId: undefined,
        type: 'radialBar',
        angleAxisId: 0,
        data: undefined,
        dataKey: 'value',
        hide: false,
        radiusAxisId: 0,
      };
      expect(polarItemsSpy).toHaveBeenLastCalledWith([expectedPolarItemsSettings]);
      expect(polarItemsSpy).toHaveBeenCalledTimes(3);

      rerender(
        <RadialBarChart width={100} height={100} data={PageData}>
          <Customized component={<Comp />} />
        </RadialBarChart>,
      );

      expect(polarItemsSpy).toHaveBeenLastCalledWith([]);
      expect(polarItemsSpy).toHaveBeenCalledTimes(5);
    });
  });
});
