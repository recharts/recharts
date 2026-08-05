import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { PolarAngleAxis, PolarRadiusAxis, PolarScatter, PolarScatterChart, PolarScatterProps } from '../../src';
import { useAppSelector } from '../../src/state/hooks';
import { selectPolarItemsSettings } from '../../src/state/selectors/polarSelectors';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { expectLastCalledWith } from '../helper/expectLastCalledWith';
import { assertNotNull } from '../helper/assertNotNull';

const data = [
  { theta: 0, radius: 50, label: 'east' },
  { theta: 90, radius: 100, label: 'north' },
];

function renderPolarScatter(props?: Partial<PolarScatterProps>) {
  return render(
    <PolarScatterChart width={300} height={300} cx={150} cy={150} outerRadius={100} data={data}>
      <PolarAngleAxis dataKey="theta" type="number" domain={[0, 360]} tick={false} />
      <PolarRadiusAxis type="number" domain={[0, 100]} tick={false} />
      <PolarScatter dataKey="radius" isAnimationActive={false} {...props} />
    </PolarScatterChart>,
  );
}

describe('<PolarScatter />', () => {
  it('renders symbols at the correct polar coordinates', () => {
    const { container } = renderPolarScatter();

    const points = container.querySelectorAll('.recharts-symbols');
    expect(points).toHaveLength(2);
    expect(points[0].getAttribute('transform')).toBe('translate(200, 150)');
    expect(points[1].getAttribute('transform')).toBe('translate(150, 50)');
  });

  it('renders in a custom component', () => {
    const CustomPolarScatter = (props: PolarScatterProps) => <PolarScatter {...props} />;

    const { container } = render(
      <PolarScatterChart width={300} height={300} cx={150} cy={150} outerRadius={100} data={data}>
        <PolarAngleAxis dataKey="theta" type="number" domain={[0, 360]} tick={false} />
        <PolarRadiusAxis type="number" domain={[0, 100]} tick={false} />
        <CustomPolarScatter dataKey="radius" isAnimationActive={false} />
      </PolarScatterChart>,
    );

    expect(container.querySelectorAll('.recharts-symbols')).toHaveLength(2);
  });

  it('renders customized shapes when shape is a function', () => {
    renderPolarScatter({
      shape: ({ cx, cy }: { cx?: number; cy?: number }) => <circle cx={cx} cy={cy} r={5} data-testid="custom-shape" />,
    });

    expect(screen.getAllByTestId('custom-shape')).toHaveLength(data.length);
  });

  it('calls item event handlers', () => {
    const onClick = vi.fn();
    const onMouseEnter = vi.fn();
    const onMouseLeave = vi.fn();

    const { container } = renderPolarScatter({
      onClick,
      onMouseEnter,
      onMouseLeave,
    });

    const symbol = container.querySelectorAll('.recharts-symbols')[1];
    assertNotNull(symbol);

    fireEvent.mouseEnter(symbol);
    fireEvent.mouseLeave(symbol);
    fireEvent.click(symbol);

    expect(onMouseEnter).toHaveBeenCalledTimes(1);
    expect(onMouseLeave).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  describe('state integration', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <PolarScatterChart width={300} height={300} cx={150} cy={150} outerRadius={100} data={data}>
        <PolarAngleAxis dataKey="theta" type="number" domain={[0, 360]} tick={false} />
        <PolarRadiusAxis type="number" domain={[0, 100]} tick={false} />
        <PolarScatter dataKey="radius" isAnimationActive={false} />
        {children}
      </PolarScatterChart>
    ));

    it('registers itself as a polar graphical item', () => {
      const polarItemsSpy = vi.fn();

      renderTestCase(() => {
        polarItemsSpy(useAppSelector(state => selectPolarItemsSettings(state, 'angleAxis', 0)));
        return null;
      });

      expectLastCalledWith(polarItemsSpy, [
        expect.objectContaining({
          type: 'polarScatter',
          data: undefined,
          dataKey: 'radius',
          hide: false,
          angleAxisId: 0,
          radiusAxisId: 0,
          name: undefined,
          tooltipType: undefined,
          size: 64,
        }),
      ]);
    });
  });
});
