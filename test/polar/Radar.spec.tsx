import React from 'react';
import uniqueId from 'lodash/uniqueId';
import { render, screen } from '@testing-library/react';

import { expect, it, vi } from 'vitest';
import { Surface, Radar, Customized, RadarChart } from '../../src';
import { useAppSelector } from '../../src/state/hooks';
import { selectPolarItemsSettings } from '../../src/state/selectors/polarSelectors';
import { PolarGraphicalItemSettings } from '../../src/state/graphicalItemsSlice';

type point = { x: number; y: number };
const CustomizedShape = ({ points }: { points: point[] }) => {
  const d = (points || []).reduce(
    (result, entry, index) => result + (index ? `L${entry.x},${entry.y}` : `M${entry.x},${entry.y}`),
    '',
  );

  return <path d={d} key={uniqueId()} data-testid="customized-shape" />;
};

const CustomizedLabel = () => {
  return (
    <text key={uniqueId()} data-testid="customized-label">
      test
    </text>
  );
};

const CustomizedDot = ({ x, y }: point) => (
  <circle key={uniqueId()} cx={x} cy={y} r={10} data-testid="customized-dot" />
);

describe('<Radar />', () => {
  const data = [
    { x: 200, y: 230, cx: 250, cy: 250, angle: 30, radius: 60, value: 4 },
    { x: 300, y: 405, cx: 250, cy: 250, angle: 90, radius: 60, value: 4 },
    { x: 100, y: 600, cx: 250, cy: 250, angle: 150, radius: 60, value: 4 },
    { x: 90, y: 400, cx: 250, cy: 250, angle: 210, radius: 60, value: 4 },
  ];

  it('Render a polygon in a simple Radar', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <Radar dataKey="y" isAnimationActive={false} points={data} />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-radar-polygon')).toHaveLength(1);
  });

  it('Render customized shape when shape is set to be a function', () => {
    render(
      <Surface width={500} height={500}>
        <Radar dataKey="y" isAnimationActive={false} points={data} shape={CustomizedShape} />
      </Surface>,
    );

    expect(screen.getAllByTestId('customized-shape')).toHaveLength(1);
  });

  it('Render customized shape when shape is set to be a element', () => {
    render(
      <Surface width={500} height={500}>
        <Radar dataKey="y" isAnimationActive={false} points={data} shape={props => <CustomizedShape {...props} />} />
      </Surface>,
    );

    expect(screen.getAllByTestId('customized-shape')).toHaveLength(1);
  });

  it('Render customized label when label is set to be a function', () => {
    render(
      <Surface width={500} height={500}>
        <Radar dataKey="y" isAnimationActive={false} points={data} label={CustomizedLabel} />
      </Surface>,
    );

    expect(screen.getAllByTestId('customized-label')).toHaveLength(data.length);
  });

  it('Render customized label when label is set to be a react element', () => {
    render(
      <Surface width={500} height={500}>
        <Radar dataKey="y" isAnimationActive={false} points={data} label={<CustomizedLabel />} />
      </Surface>,
    );

    expect(screen.getAllByTestId('customized-label')).toHaveLength(data.length);
  });

  it('Render customized dot when dot is set to be a function', () => {
    render(
      <Surface width={500} height={500}>
        <Radar dataKey="y" isAnimationActive={false} points={data} dot={CustomizedDot} />
      </Surface>,
    );

    expect(screen.getAllByTestId('customized-dot')).toHaveLength(data.length);
  });

  it('Render customized dot when dot is set to be a react element', () => {
    render(
      <Surface width={500} height={500}>
        <Radar dataKey="y" isAnimationActive={false} points={data} dot={props => <CustomizedDot {...props} />} />
      </Surface>,
    );

    expect(screen.getAllByTestId('customized-dot')).toHaveLength(data.length);
  });

  it("Don't render polygon when points is empty", () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <Radar dataKey="y" isAnimationActive={false} points={[]} />
      </Surface>,
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
        <RadarChart width={100} height={100} data={data}>
          <Radar dataKey="value" />
          <Customized component={<Comp />} />
        </RadarChart>,
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
        <RadarChart width={100} height={100} data={data}>
          <Customized component={<Comp />} />
        </RadarChart>,
      );

      expect(polarItemsSpy).toHaveBeenLastCalledWith([]);
      expect(polarItemsSpy).toHaveBeenCalledTimes(5);
    });
  });
});
