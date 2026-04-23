import React from 'react';
import { act, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Customized, Tooltip, WordCloud } from '../../src';
import { PageData } from '../_data';
import { useChartHeight, useChartWidth, useViewBox } from '../../src/context/chartLayoutContext';
import { assertNotNull } from '../helper/assertNotNull';
import { rechartsTestRender } from '../helper/createSelectorTestCase';
import { mockGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';
import { userEventSetup } from '../helper/userEventSetup';
import { getTooltip } from '../component/Tooltip/tooltipTestHelpers';

describe('<WordCloud />', () => {
  it('renders one text node per valid data point', () => {
    mockGetBoundingClientRect({ width: 12, height: 8 });

    const { container } = rechartsTestRender(<WordCloud width={500} height={300} data={PageData} dataKey="uv" />);

    expect(container.querySelectorAll('.recharts-word-cloud-text')).toHaveLength(PageData.length);
  });

  it('fires callbacks with the computed word payload', async () => {
    mockGetBoundingClientRect({ width: 12, height: 8 });

    const user = userEventSetup();
    const onMouseEnter = vi.fn();
    const onMouseLeave = vi.fn();
    const onClick = vi.fn();

    const { container } = rechartsTestRender(
      <WordCloud
        width={500}
        height={300}
        data={PageData}
        dataKey="uv"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      />,
    );

    const word = container.querySelector('.recharts-word-cloud-text');
    assertNotNull(word);

    await user.hover(word);
    expect(onMouseEnter).toHaveBeenCalledTimes(1);
    expect(onMouseEnter.mock.calls[0]?.[0]).toEqual(
      expect.objectContaining({
        payload: PageData[0],
        text: 'Page A',
        value: 400,
        tooltipIndex: '0',
      }),
    );
    expect(onMouseEnter.mock.calls[0]?.[1]).toBeInstanceOf(Object);

    await user.unhover(word);
    expect(onMouseLeave).toHaveBeenCalledTimes(1);
    expect(onMouseLeave.mock.calls[0]?.[0]).toEqual(
      expect.objectContaining({
        payload: PageData[0],
        text: 'Page A',
        value: 400,
        tooltipIndex: '0',
      }),
    );

    await user.click(word);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick.mock.calls[0]?.[0]).toEqual(
      expect.objectContaining({
        payload: PageData[0],
        text: 'Page A',
        value: 400,
        tooltipIndex: '0',
      }),
    );
  });

  it('shows and hides the tooltip on hover', () => {
    mockGetBoundingClientRect({ width: 12, height: 8 });

    const { container } = rechartsTestRender(
      <WordCloud width={500} height={300} data={PageData} dataKey="uv">
        <Tooltip trigger="hover" />
      </WordCloud>,
    );

    const tooltip = getTooltip(container);
    expect(tooltip).not.toBeVisible();

    const word = container.querySelector('.recharts-word-cloud-text');
    assertNotNull(word);

    fireEvent.mouseOver(word, { clientX: 200, clientY: 120 });
    act(() => {
      vi.runOnlyPendingTimers();
    });

    expect(tooltip).toBeVisible();

    fireEvent.mouseOut(word);
    act(() => {
      vi.runOnlyPendingTimers();
    });

    expect(tooltip).not.toBeVisible();
  });

  it('supports accessor-based styling props and seed', () => {
    mockGetBoundingClientRect({ width: 12, height: 8 });

    const data = [
      { label: 'Alpha', amount: 40 },
      { label: 'Beta', amount: 30 },
      { label: 'Gamma', amount: 20 },
    ];

    const { container, rerender } = rechartsTestRender(
      <WordCloud
        width={500}
        height={300}
        data={data}
        dataKey="amount"
        nameKey="label"
        fill={(_entry, index) => (index === 0 ? '#ff0000' : '#0000ff')}
        fontFamily={(_entry, index) => (index === 0 ? 'Georgia' : 'Verdana')}
        fontStyle={(_entry, index) => (index === 1 ? 'italic' : 'normal')}
        fontWeight={entry => (entry.amount >= 40 ? 700 : 400)}
        fontSize={entry => entry.amount}
        rotate={(_entry, index) => index * 15}
        padding={(_entry, index) => index + 2}
        seed={0}
      />,
    );

    const words = container.querySelectorAll('.recharts-word-cloud-text');
    expect(words).toHaveLength(3);
    expect(words[0]).toHaveAttribute('fill', '#ff0000');
    expect(words[0]).toHaveAttribute('font-family', 'Georgia');
    expect(words[0]).toHaveAttribute('font-weight', '700');
    expect(words[0]).toHaveAttribute('font-size', '40');
    expect(words[1]).toHaveAttribute('font-style', 'italic');
    expect(words[1]).toHaveAttribute('transform', expect.stringContaining('rotate(15'));

    const positionsWithSeed0 = Array.from(words).map(word => ({
      x: word.getAttribute('x'),
      y: word.getAttribute('y'),
    }));

    rerender(
      <WordCloud
        width={500}
        height={300}
        data={data}
        dataKey="amount"
        nameKey="label"
        fill={(_entry, index) => (index === 0 ? '#ff0000' : '#0000ff')}
        fontFamily={(_entry, index) => (index === 0 ? 'Georgia' : 'Verdana')}
        fontStyle={(_entry, index) => (index === 1 ? 'italic' : 'normal')}
        fontWeight={entry => (entry.amount >= 40 ? 700 : 400)}
        fontSize={entry => entry.amount}
        rotate={(_entry, index) => index * 15}
        padding={(_entry, index) => index + 2}
        seed={90}
      />,
    );

    const positionsWithSeed90 = Array.from(container.querySelectorAll('.recharts-word-cloud-text')).map(word => ({
      x: word.getAttribute('x'),
      y: word.getAttribute('y'),
    }));

    expect(positionsWithSeed90).not.toEqual(positionsWithSeed0);
  });

  it('lets a component-level fill override per-entry payload colors', () => {
    mockGetBoundingClientRect({ width: 12, height: 8 });

    const data = [
      { label: 'Alpha', amount: 40, fill: '#ff0000' },
      { label: 'Beta', amount: 30, fill: '#0000ff' },
    ];

    const { container } = rechartsTestRender(
      <WordCloud width={500} height={300} data={data} dataKey="amount" nameKey="label" fill="#2b2d42" />,
    );

    const words = container.querySelectorAll('.recharts-word-cloud-text');
    expect(words).toHaveLength(2);
    expect(words[0]).toHaveAttribute('fill', '#2b2d42');
    expect(words[1]).toHaveAttribute('fill', '#2b2d42');
  });

  it('provides chart dimensions and a viewBox to descendants', () => {
    mockGetBoundingClientRect({ width: 12, height: 8 });

    const widthSpy = vi.fn();
    const heightSpy = vi.fn();
    const viewBoxSpy = vi.fn();

    const Comp = (): null => {
      widthSpy(useChartWidth());
      heightSpy(useChartHeight());
      viewBoxSpy(useViewBox());
      return null;
    };

    rechartsTestRender(
      <WordCloud width={320} height={180} data={PageData} dataKey="uv">
        <Customized component={<Comp />} />
      </WordCloud>,
    );

    expect(widthSpy).toHaveBeenLastCalledWith(320);
    expect(heightSpy).toHaveBeenLastCalledWith(180);
    expect(viewBoxSpy).toHaveBeenLastCalledWith({ x: 0, y: 0, width: 320, height: 180 });
  });
});
