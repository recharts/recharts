import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { expect, it, vi } from 'vitest';
import { cleanupMockAnimation, mockAnimation } from '../helper/animation-frame-helper';
import { Funnel, FunnelChart } from '../../src';
import { useChartHeight, useChartWidth, useViewBox } from '../../src/context/chartLayoutContext';

import { useClipPathId } from '../../src/container/ClipPathProvider';

const data = [
  { value: 100, name: '展现' },
  { value: 80, name: '点击' },
  { value: 50, name: '访问' },
  { value: 40, name: '咨询' },
  { value: 26, name: '订单' },
];

const data01 = [
  { value: 100, name: '展现' },
  { value: 80, name: '点击' },
  { value: 50, name: '访问' },
  { value: 40, name: '咨询' },
  { value: 26, name: '订单' },
];

const data02 = [
  { value: 60, name: '展现' },
  { value: 50, name: '点击' },
  { value: 30, name: '访问' },
  { value: 20, name: '咨询' },
  { value: 6, name: '订单' },
];

describe('<FunnelChart />', () => {
  test('Renders 1 funnel in simple FunnelChart', () => {
    const { container } = render(
      <FunnelChart width={500} height={300}>
        <Funnel dataKey="value" data={data} isAnimationActive={false} />
      </FunnelChart>,
    );
    expect(container.querySelectorAll('.recharts-trapezoids')).toHaveLength(1);
    expect(container.querySelectorAll('.recharts-funnel-trapezoid')).toHaveLength(5);

    data.forEach(({ name }) => {
      expect(container.querySelectorAll(`[name="${name}"]`)).toHaveLength(1);
    });
  });

  test('Renders 1 funnel in FunnelChart with animation', () => {
    mockAnimation();

    const { container } = render(
      <FunnelChart width={500} height={300}>
        <Funnel dataKey="value" data={data} isAnimationActive animationDuration={1} />
      </FunnelChart>,
    );

    expect(container.querySelectorAll('.recharts-funnel-trapezoid')).toHaveLength(5);
    // all trapezoids are visible
    expect(container.querySelectorAll('.recharts-trapezoid')).toHaveLength(5);

    cleanupMockAnimation();
  });

  test('Renders 2 funnel in nest FunnelChart', () => {
    const { container } = render(
      <FunnelChart margin={{ top: 20, right: 50, left: 20, bottom: 0 }} width={500} height={300}>
        <Funnel dataKey="value" data={data01} isAnimationActive={false} />
        <Funnel dataKey="value" data={data02} isAnimationActive={false} width="80%" />
      </FunnelChart>,
    );

    expect(container.querySelectorAll('.recharts-trapezoids')).toHaveLength(2);
    expect(container.querySelectorAll('.recharts-funnel-trapezoid')).toHaveLength(10);
  });

  (
    [
      { prop: 'onClick', event: 'click' },
      { prop: 'onMouseEnter', event: 'mouseEnter' },
      { prop: 'onMouseMove', event: 'mouseMove' },
      { prop: 'onMouseLeave', event: 'mouseLeave' },
    ] as const
  ).forEach(({ prop, event }) => {
    test(`should fire ${event} event`, () => {
      const onEventMock = vi.fn();

      const { container } = render(
        <FunnelChart
          margin={{ top: 20, right: 50, left: 20, bottom: 0 }}
          width={500}
          height={300}
          {...{ [prop]: onEventMock }}
        >
          <Funnel dataKey="value" data={data01} isAnimationActive={false} />
          <Funnel dataKey="value" data={data02} isAnimationActive={false} width="80%" />
        </FunnelChart>,
      );

      fireEvent[event](container.querySelectorAll('.recharts-funnel-trapezoid')[2]);

      expect(onEventMock).toHaveBeenCalled();
    });
  });

  describe('FunnelChart layout context', () => {
    it('should provide viewBox', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        spy(useViewBox());
        return null;
      };
      render(
        <FunnelChart width={100} height={50} barSize={20}>
          <Comp />
        </FunnelChart>,
      );

      expect(spy).toHaveBeenCalledWith({ height: 40, width: 90, x: 5, y: 5 });
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should provide clipPathId', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        spy(useClipPathId());
        return null;
      };
      render(
        <FunnelChart width={100} height={50} barSize={20}>
          <Comp />
        </FunnelChart>,
      );

      expect(spy).toHaveBeenCalledWith(expect.stringMatching(/recharts\d+-clip/));
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should provide width', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        spy(useChartWidth());
        return null;
      };
      render(
        <FunnelChart width={100} height={50} barSize={20}>
          <Comp />
        </FunnelChart>,
      );

      expect(spy).toHaveBeenCalledWith(100);
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should provide height', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        spy(useChartHeight());
        return null;
      };
      render(
        <FunnelChart width={100} height={50} barSize={20}>
          <Comp />
        </FunnelChart>,
      );

      expect(spy).toHaveBeenCalledWith(50);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
