import React from 'react';
import { render } from '@testing-library/react';

import { Surface, Sector } from '../../src';
import { SectorWithFocusIndicator } from '../../src/shape/Sector';
import { assertNotNull } from '../helper/assertNotNull';

describe('<Sector />', () => {
  test('Render 1 sector in simple Sector', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <Sector fill="#ff7902" cx={200} cy={300} innerRadius={150} outerRadius={200} endAngle={90} />
      </Surface>,
    );
    const sector = container.querySelector('.recharts-sector');
    expect(sector?.classList.contains('recharts-sector')).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  test('Render 1 sector when cornerRadius > 0', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <Sector fill="#ff7902" cx={200} cy={300} innerRadius={150} outerRadius={200} cornerRadius={10} endAngle={90} />
      </Surface>,
    );

    const sectors = container.querySelectorAll('.recharts-sector');
    expect(sectors).toHaveLength(1);
    const path = sectors[0].getAttribute('d') as string;
    expect(path).not.toBeFalsy();
    expect(path.length - path.split('A').join('').length).toBe(6);
    expect(container).toMatchSnapshot();
  });

  describe('when the sector is too narrow for the full cornerRadius', () => {
    /**
     * Renders a Sector centered at (200, 200) and returns its SVG path.
     */
    function renderSectorPath(props: React.ComponentProps<typeof Sector>): string {
      const { container } = render(
        <Surface width={500} height={500}>
          <Sector fill="#ff7902" cx={200} cy={200} {...props} />
        </Surface>,
      );
      return container.querySelector('.recharts-sector')?.getAttribute('d') ?? '';
    }

    /**
     * Returns the radius of every absolute arc command (`A`) in an SVG path, in order.
     */
    function getArcRadii(path: string): number[] {
      return Array.from(path.matchAll(/A\s*([\d.]+),/g), match => Number(match[1]));
    }

    test.each([
      { direction: 'counterclockwise', startAngle: 0, endAngle: 10 },
      { direction: 'clockwise', startAngle: 10, endAngle: 0 },
    ])('shrinks the corners so that they still fit when the sector goes $direction', ({ startAngle, endAngle }) => {
      // two corners with radius 20 need about 29 degrees, a 10 degree sector only fits corners with radius ~8
      const path = renderSectorPath({ outerRadius: 100, startAngle, endAngle, cornerRadius: 20 });

      expect(getArcRadii(path)).toEqual([8.0169, 100, 8.0169]);
    });

    test('shrinks the outer and inner corners separately', () => {
      const path = renderSectorPath({
        innerRadius: 50,
        outerRadius: 100,
        startAngle: 0,
        endAngle: 30,
        cornerRadius: 25,
      });

      expect(getArcRadii(path)).toEqual([20.5605, 100, 20.5605, 17.4599, 50, 17.4599]);
    });

    test('shrinks only the inner corners when the outer corners fit', () => {
      const path = renderSectorPath({
        innerRadius: 50,
        outerRadius: 100,
        startAngle: 0,
        endAngle: 18,
        cornerRadius: 10,
      });

      expect(getArcRadii(path)).toEqual([10, 100, 10, 9.2722, 50, 9.2722]);
    });

    test('renders a circle with the full cornerRadius when forceCornerRadius is true', () => {
      const path = renderSectorPath({
        outerRadius: 100,
        startAngle: 0,
        endAngle: 10,
        cornerRadius: 20,
        forceCornerRadius: true,
      });

      expect(getArcRadii(path)).toEqual([]);
      expect(path).toContain('a20,20,0,0,1,40,0');
      expect(path).toContain('a20,20,0,0,1,-40,0');
    });
  });

  test('the focus indicator follows a transform-box change on the slice style', () => {
    function renderSector(transformBox: 'view-box' | 'fill-box') {
      return (
        <Surface width={200} height={200}>
          <SectorWithFocusIndicator
            cx={100}
            cy={100}
            innerRadius={0}
            outerRadius={80}
            startAngle={0}
            endAngle={90}
            showFocusIndicator
            style={{ transform: 'scale(2)', transformBox, transformOrigin: '0px 0px' }}
          />
        </Surface>
      );
    }

    const { container, rerender } = render(renderSector('view-box'));
    const indicator = container.querySelector('.recharts-pie-focus-indicator');
    assertNotNull(indicator);
    expect(window.getComputedStyle(indicator).transformBox).toBe('view-box');

    rerender(renderSector('fill-box'));

    expect(container.querySelector('.recharts-pie-focus-indicator')).toBe(indicator);
    expect(window.getComputedStyle(indicator).transformBox).toBe('fill-box');
  });

  test("Don't render any sector when props is invalid", () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <Sector fill="#ff7902" cx={200} cy={300} innerRadius={200} outerRadius={150} endAngle={90} />
        <Sector fill="#ff7902" cx={200} cy={300} innerRadius={150} outerRadius={200} startAngle={90} endAngle={90} />
      </Surface>,
    );
    expect(container.querySelectorAll('.recharts-sector')).toHaveLength(0);
    expect(container).toMatchSnapshot();
  });
});
