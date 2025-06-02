import React from 'react';
import { render, screen } from '@testing-library/react';

import { expect, it, vi } from 'vitest';
import { Radar, Customized, RadarChart, RadarProps } from '../../src';
import { useAppSelector } from '../../src/state/hooks';
import { selectPolarItemsSettings } from '../../src/state/selectors/polarSelectors';
import { PolarGraphicalItemSettings } from '../../src/state/graphicalItemsSlice';
import { exampleRadarData } from '../_data';
import { expectRadarPolygons } from '../helper/expectRadarPolygons';

type point = { x: number; y: number };
const CustomizedShape = ({ points }: { points: point[] }) => {
  const d = (points || []).reduce(
    (result, entry, index) => result + (index ? `L${entry.x},${entry.y}` : `M${entry.x},${entry.y}`),
    '',
  );

  return <path d={d} data-testid="customized-shape" />;
};

const CustomizedLabel = () => {
  return <text data-testid="customized-label">test</text>;
};

const CustomizedDot = ({ x, y }: point) => <circle cx={x} cy={y} r={10} data-testid="customized-dot" />;

describe('<Radar />', () => {
  it('should render a polygon in a simple Radar', () => {
    const { container } = render(
      <RadarChart width={500} height={500} data={exampleRadarData}>
        <Radar dataKey="value" isAnimationActive={false} />
      </RadarChart>,
    );

    expectRadarPolygons(container, [
      {
        d: 'M250,167.68L313.75274739177917,186.2472526082209L445.804,250L319.29646455628165,319.29646455628165L250,419.344L159.91459607683385,340.08540392316615L100.06,250.00000000000003L199.41358087391438,199.41358087391438L250,167.68Z',
        fill: null,
        fillOpacity: null,
      },
    ]);
  });

  it('should render Radar in a custom component', () => {
    const CustomRadar = (props: RadarProps) => {
      return <Radar {...props} />;
    };

    const { container } = render(
      <RadarChart width={500} height={500} data={exampleRadarData}>
        <CustomRadar dataKey="value" isAnimationActive={false} />
      </RadarChart>,
    );

    expectRadarPolygons(container, [
      {
        d: 'M250,167.68L313.75274739177917,186.2472526082209L445.804,250L319.29646455628165,319.29646455628165L250,419.344L159.91459607683385,340.08540392316615L100.06,250.00000000000003L199.41358087391438,199.41358087391438L250,167.68Z',
        fill: null,
        fillOpacity: null,
      },
    ]);
  });

  it('Render customized shape when shape is set to be a function', () => {
    render(
      <RadarChart width={500} height={500} data={exampleRadarData}>
        <Radar dataKey="value" isAnimationActive={false} shape={CustomizedShape} />
      </RadarChart>,
    );

    expect(screen.getAllByTestId('customized-shape')).toHaveLength(1);
  });

  it('Render customized shape when shape is set to be a element', () => {
    render(
      <RadarChart width={500} height={500} data={exampleRadarData}>
        <Radar dataKey="value" isAnimationActive={false} shape={props => <CustomizedShape {...props} />} />
      </RadarChart>,
    );

    expect(screen.getAllByTestId('customized-shape')).toHaveLength(1);
  });

  it('Render customized label when label is set to be a function', () => {
    render(
      <RadarChart width={500} height={500} data={exampleRadarData}>
        <Radar dataKey="value" isAnimationActive={false} label={CustomizedLabel} />
      </RadarChart>,
    );

    expect(screen.getAllByTestId('customized-label')).toHaveLength(exampleRadarData.length);
  });

  it('Render customized label when label is set to be a react element', () => {
    render(
      <RadarChart width={500} height={500} data={exampleRadarData}>
        <Radar dataKey="value" isAnimationActive={false} label={<CustomizedLabel />} />
      </RadarChart>,
    );

    expect(screen.getAllByTestId('customized-label')).toHaveLength(exampleRadarData.length);
  });

  it('Render customized dot when dot is set to be a function', () => {
    render(
      <RadarChart width={500} height={500} data={exampleRadarData}>
        <Radar dataKey="value" isAnimationActive={false} dot={CustomizedDot} />
      </RadarChart>,
    );

    expect(screen.getAllByTestId('customized-dot')).toHaveLength(exampleRadarData.length);
  });

  it('Render customized dot when dot is set to be a react element', () => {
    render(
      <RadarChart width={500} height={500} data={exampleRadarData}>
        <Radar dataKey="value" isAnimationActive={false} dot={props => <CustomizedDot {...props} />} />
      </RadarChart>,
    );

    expect(screen.getAllByTestId('customized-dot')).toHaveLength(exampleRadarData.length);
  });

  it("Don't render polygon when data is empty", () => {
    const { container } = render(
      <RadarChart width={500} height={500} data={[]}>
        <Radar dataKey="value" isAnimationActive={false} />
      </RadarChart>,
    );

    expect(container.querySelectorAll('.recharts-radar-polygon')).toHaveLength(0);
  });

  describe('state integration', () => {
    it('should report its settings to Redux state, and remove it when removed from DOM', () => {
      const polarItemsSpy = vi.fn();
      const Comp = (): null => {
        polarItemsSpy(useAppSelector(state => selectPolarItemsSettings(state, 'angleAxis', 0)));
        return null;
      };
      const { rerender } = render(
        <RadarChart width={100} height={100} data={exampleRadarData}>
          <Radar dataKey="value" />
          <Customized component={<Comp />} />
        </RadarChart>,
      );

      const expectedPolarItemsSettings: PolarGraphicalItemSettings = {
        barSize: undefined,
        stackId: undefined,
        type: 'radar',
        angleAxisId: 0,
        data: undefined,
        dataKey: 'value',
        hide: false,
        radiusAxisId: 0,
      };
      expect(polarItemsSpy).toHaveBeenLastCalledWith([expectedPolarItemsSettings]);
      expect(polarItemsSpy).toHaveBeenCalledTimes(2);

      rerender(
        <RadarChart width={100} height={100} data={exampleRadarData}>
          <Customized component={<Comp />} />
        </RadarChart>,
      );

      expect(polarItemsSpy).toHaveBeenLastCalledWith([]);
      expect(polarItemsSpy).toHaveBeenCalledTimes(4);
    });
  });
});
