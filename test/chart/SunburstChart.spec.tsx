import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { Customized, SunburstChart } from '../../src';
import { exampleSunburstData } from '../_data';
import { useChartHeight, useChartWidth, useViewBox } from '../../src/context/chartLayoutContext';
import { useAppSelector } from '../../src/state/hooks';
import { sunburstChartMouseHoverTooltipSelector } from '../component/Tooltip/tooltipMouseHoverSelectors';
import { assertNotNull } from '../helper/assertNotNull';

import { useClipPathId } from '../../src/container/ClipPathProvider';

describe('<Sunburst />', () => {
  it('renders each sector in order under the correct category', () => {
    const { container } = render(<SunburstChart data={exampleSunburstData} />);

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
      <SunburstChart
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        data={exampleSunburstData}
      />,
    );
    const sector = container.querySelectorAll('.recharts-sector')[0];

    await userEvent.hover(sector);
    expect(onMouseEnter).toHaveBeenCalled();
    await userEvent.unhover(sector);
    expect(onMouseLeave).toHaveBeenCalled();
    await userEvent.click(sector);
    expect(onClick).toHaveBeenCalled();
  });

  describe('SunburstChart layout context', () => {
    it('should provide viewBox but not clipPathId', () => {
      const clipPathSpy = vi.fn();
      const viewBoxSpy = vi.fn();
      const Comp = (): null => {
        clipPathSpy(useClipPathId());
        viewBoxSpy(useViewBox());
        return null;
      };
      render(
        <SunburstChart width={100} height={50} data={exampleSunburstData}>
          <Customized component={<Comp />} />
        </SunburstChart>,
      );

      expect(clipPathSpy).toHaveBeenLastCalledWith(undefined);
      expect(viewBoxSpy).toHaveBeenLastCalledWith({ x: 0, y: 0, width: 100, height: 50 });
      expect(viewBoxSpy).toHaveBeenCalledTimes(3);
    });

    it('should set width and height in context', () => {
      const widthSpy = vi.fn();
      const heightSpy = vi.fn();
      const Comp = (): null => {
        widthSpy(useChartWidth());
        heightSpy(useChartHeight());
        return null;
      };
      render(
        <SunburstChart width={100} height={50} data={exampleSunburstData}>
          <Customized component={<Comp />} />
        </SunburstChart>,
      );
      expect(widthSpy).toHaveBeenLastCalledWith(100);
      expect(heightSpy).toHaveBeenLastCalledWith(50);
      expect(widthSpy).toHaveBeenCalledTimes(3);
      expect(heightSpy).toHaveBeenCalledTimes(3);
    });
  });

  describe('tooltip state', () => {
    it('should start with tooltip inactive, and activate it on hover and click on a link', () => {
      const tooltipStateSpy = vi.fn();
      const Comp = (): null => {
        tooltipStateSpy(useAppSelector(state => state.tooltip.itemInteraction));
        return null;
      };
      const { container } = render(
        <SunburstChart width={1000} height={500} data={exampleSunburstData}>
          <Customized component={<Comp />} />
        </SunburstChart>,
      );
      expect(tooltipStateSpy).toHaveBeenLastCalledWith({
        click: {
          active: false,
          index: null,
          dataKey: undefined,
          coordinate: undefined,
        },
        hover: {
          active: false,
          index: null,
          dataKey: undefined,
          coordinate: undefined,
        },
      });
      expect(tooltipStateSpy).toHaveBeenCalledTimes(1);

      const tooltipTriggerElement = container.querySelector(sunburstChartMouseHoverTooltipSelector);
      assertNotNull(tooltipTriggerElement);

      fireEvent.mouseOver(tooltipTriggerElement, { clientX: 200, clientY: 200 });

      expect(tooltipStateSpy).toHaveBeenLastCalledWith({
        click: {
          active: false,
          index: null,
          dataKey: undefined,
          coordinate: undefined,
        },
        hover: {
          active: true,
          index: '[0]',
          dataKey: 'value',
          coordinate: {
            x: 583.3333333333334,
            y: 250,
          },
        },
      });
      expect(tooltipStateSpy).toHaveBeenCalledTimes(2);

      fireEvent.click(tooltipTriggerElement);

      expect(tooltipStateSpy).toHaveBeenLastCalledWith({
        click: {
          active: true,
          coordinate: {
            x: 583.3333333333334,
            y: 250,
          },
          dataKey: 'value',
          index: '[0]',
        },
        hover: {
          active: true,
          coordinate: {
            x: 583.3333333333334,
            y: 250,
          },
          dataKey: 'value',
          index: '[0]',
        },
      });
      expect(tooltipStateSpy).toHaveBeenCalledTimes(3);

      fireEvent.mouseLeave(tooltipTriggerElement);

      expect(tooltipStateSpy).toHaveBeenLastCalledWith({
        click: {
          active: true,
          coordinate: {
            x: 583.3333333333334,
            y: 250,
          },
          dataKey: 'value',
          index: '[0]',
        },
        hover: {
          active: false,
          index: '[0]',
          dataKey: 'value',
          coordinate: {
            x: 583.3333333333334,
            y: 250,
          },
        },
      });
      expect(tooltipStateSpy).toHaveBeenCalledTimes(4);
    });
  });
});
