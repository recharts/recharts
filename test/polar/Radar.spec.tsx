import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { expect, it, vi } from 'vitest';
import { Radar, Customized, RadarChart, RadarProps } from '../../src';
import { useAppSelector } from '../../src/state/hooks';
import { selectPolarItemsSettings } from '../../src/state/selectors/polarSelectors';
import { exampleRadarData } from '../_data';
import { expectRadarPolygons } from '../helper/expectRadarPolygons';
import { RadarSettings } from '../../src/state/types/RadarSettings';
import { userEventSetup } from '../helper/userEventSetup';
import { assertNotNull } from '../helper/assertNotNull';
import { expectLastCalledWith } from '../helper/expectLastCalledWith';
import { DefaultZIndexes } from '../../src/zIndex/DefaultZIndexes';

type Point = { x?: number | string; y?: number | string };
const CustomizedShape = ({ points }: { points: Point[] }) => {
  const d = (points || []).reduce(
    (result, entry, index) => result + (index ? `L${entry.x},${entry.y}` : `M${entry.x},${entry.y}`),
    '',
  );

  return <path d={d} data-testid="customized-shape" />;
};

const CustomizedLabel = () => {
  return <text data-testid="customized-label">test</text>;
};

const CustomizedDot = ({ x, y }: Point) => <circle cx={x} cy={y} r={10} data-testid="customized-dot" />;

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

  describe('events', () => {
    const points = [
      {
        x: 250,
        y: 167.68,
        name: 0,
        value: 420,
        cx: 250,
        cy: 250,
        radius: 82.32,
        angle: 90,
        payload: {
          name: 'iPhone 3GS',
          value: 420,
          half: 210,
        },
      },
      {
        x: 313.75274739177917,
        y: 186.2472526082209,
        name: 1,
        value: 460,
        cx: 250,
        cy: 250,
        radius: 90.16000000000001,
        angle: 45,
        payload: {
          name: 'iPhone 4',
          value: 460,
          half: 230,
        },
      },
      {
        x: 445.804,
        y: 250,
        name: 2,
        value: 999,
        cx: 250,
        cy: 250,
        radius: 195.804,
        angle: 0,
        payload: {
          name: 'iPhone 4s',
          value: 999,
          half: 500,
        },
      },
      {
        x: 319.29646455628165,
        y: 319.29646455628165,
        name: 3,
        value: 500,
        cx: 250,
        cy: 250,
        radius: 98,
        angle: -45,
        payload: {
          name: 'iPhone 5',
          value: 500,
          half: 250,
        },
      },
      {
        x: 250,
        y: 419.344,
        name: 4,
        value: 864,
        cx: 250,
        cy: 250,
        radius: 169.344,
        angle: -90,
        payload: {
          name: 'iPhone 5s',
          value: 864,
          half: 432,
        },
      },
      {
        x: 159.91459607683385,
        y: 340.08540392316615,
        name: 5,
        value: 650,
        cx: 250,
        cy: 250,
        radius: 127.4,
        angle: -135,
        payload: {
          name: 'iPhone 6',
          value: 650,
          half: 325,
        },
      },
      {
        x: 100.06,
        y: 250.00000000000003,
        name: 6,
        value: 765,
        cx: 250,
        cy: 250,
        radius: 149.94,
        angle: -180,
        payload: {
          name: 'iPhone 6s',
          value: 765,
          half: 383,
        },
      },
      {
        x: 199.41358087391438,
        y: 199.41358087391438,
        name: 7,
        value: 365,
        cx: 250,
        cy: 250,
        radius: 71.53999999999999,
        angle: -225,
        payload: {
          name: 'iPhone 5se',
          value: 365,
          half: 183,
        },
      },
    ];
    it('should fire onClick event when clicking on the radar polygon', async () => {
      const user = userEventSetup();
      const handleClick = vi.fn();
      const { container } = render(
        <RadarChart width={500} height={500} data={exampleRadarData}>
          <Radar dataKey="value" isAnimationActive={false} onClick={handleClick} />
        </RadarChart>,
      );

      const polygon = container.querySelector('.recharts-polygon');
      assertNotNull(polygon);
      await user.click(polygon);
      expect(handleClick).toHaveBeenCalledTimes(1);
      // no special data here, just the original event
      expectLastCalledWith(handleClick, expect.any(Object));
    });

    it('should fire onMouseEnter and onMouseLeave events when mouse enters and leaves the radar polygon', async () => {
      const user = userEventSetup();
      const handleMouseEnter = vi.fn();
      const handleMouseLeave = vi.fn();

      const { container } = render(
        <RadarChart width={500} height={500} data={exampleRadarData}>
          <Radar
            dataKey="value"
            isAnimationActive={false}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </RadarChart>,
      );

      const polygon = container.querySelector('.recharts-polygon');
      assertNotNull(polygon);
      await user.hover(polygon);
      expect(handleMouseEnter).toHaveBeenCalledTimes(1);
      expectLastCalledWith(
        handleMouseEnter,
        {
          activeDot: true,
          angleAxisId: 0,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: 'ease',
          baseLinePoints: [],
          dataKey: 'value',
          dot: false,
          hide: false,
          id: expect.stringMatching(/recharts-radar-.*/),
          isAnimationActive: false,
          isRange: false,
          label: false,
          legendType: 'rect',
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
          points,
          radiusAxisId: 0,
          zIndex: DefaultZIndexes.area,
        },
        expect.any(Object),
      );

      await user.unhover(polygon);
      expect(handleMouseLeave).toHaveBeenCalledTimes(1);
      expectLastCalledWith(
        handleMouseLeave,
        {
          activeDot: true,
          angleAxisId: 0,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: 'ease',
          baseLinePoints: [],
          dataKey: 'value',
          dot: false,
          hide: false,
          id: expect.stringMatching(/recharts-radar-.*/),
          isAnimationActive: false,
          isRange: false,
          label: false,
          legendType: 'rect',
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
          points,
          radiusAxisId: 0,
          zIndex: DefaultZIndexes.area,
        },
        expect.any(Object),
      );
    });

    it('should fire onMouseOver and onMouseMove events', async () => {
      const user = userEventSetup();
      const handleMouseOver = vi.fn();
      const handleMouseMove = vi.fn();
      const handleMouseOut = vi.fn();

      const { container } = render(
        <RadarChart width={500} height={500} data={exampleRadarData}>
          <Radar
            dataKey="value"
            isAnimationActive={false}
            onMouseOver={handleMouseOver}
            onMouseMove={handleMouseMove}
            onMouseOut={handleMouseOut}
          />
        </RadarChart>,
      );

      const polygon = container.querySelector('.recharts-polygon');
      assertNotNull(polygon);
      await user.hover(polygon);
      expect(handleMouseOver).toHaveBeenCalledTimes(1);
      expect(handleMouseMove).toHaveBeenCalledTimes(1);

      fireEvent.mouseMove(polygon, { clientX: 200, clientY: 200 });
      expect(handleMouseMove).toHaveBeenCalledTimes(2);

      await user.unhover(polygon);
      expect(handleMouseOut).toHaveBeenCalledTimes(1);
    });

    it('should fire onTouchMove and onTouchEnd events when touching the radar polygon', async () => {
      const handleTouchMove = vi.fn();
      const handleTouchEnd = vi.fn();

      const { container } = render(
        <RadarChart width={500} height={500} data={exampleRadarData}>
          <Radar dataKey="value" isAnimationActive={false} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} />
        </RadarChart>,
      );

      const polygon = container.querySelector('.recharts-polygon');
      assertNotNull(polygon);
      fireEvent.touchMove(polygon, { touches: [{ clientX: 200, clientY: 200 }] });
      expect(handleTouchMove).toHaveBeenCalledTimes(1);
    });
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

      const expectedPolarItemsSettings: RadarSettings = {
        id: expect.stringMatching('radar-'),
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
