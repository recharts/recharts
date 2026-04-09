import React from 'react';
import { fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Customized, Tooltip, Venn } from '../../src';
import { exampleVennData } from '../_data';
import { useAppSelector } from '../../src/state/hooks';
import { TooltipInteractionState } from '../../src/state/tooltipSlice';
import { assertNotNull } from '../helper/assertNotNull';
import { rechartsTestRender } from '../helper/createSelectorTestCase';
import { expectLastCalledWith } from '../helper/expectLastCalledWith';

describe('<Venn />', () => {
  it('renders circles and intersections', () => {
    const { container } = rechartsTestRender(<Venn width={500} height={300} data={exampleVennData} />);

    expect(container.querySelectorAll('.recharts-venn-set')).toHaveLength(2);
    expect(container.querySelectorAll('.recharts-venn-intersection')).toHaveLength(1);
  });

  it('fires callbacks on hover and click', () => {
    const onMouseEnter = vi.fn();
    const onMouseLeave = vi.fn();
    const onClick = vi.fn();
    const { container } = rechartsTestRender(
      <Venn
        width={500}
        height={300}
        data={exampleVennData}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      />,
    );

    const firstArea = container.querySelector('g[opacity]');
    assertNotNull(firstArea);

    fireEvent.mouseEnter(firstArea);
    expectLastCalledWith(onMouseEnter, exampleVennData[0], expect.any(Object));

    fireEvent.mouseLeave(firstArea);
    expectLastCalledWith(onMouseLeave, exampleVennData[0], expect.any(Object));

    fireEvent.click(firstArea);
    expectLastCalledWith(onClick, exampleVennData[0]);
  });

  it('should expose tooltip payload on hover', () => {
    const tooltipStateSpy =
      vi.fn<[(state: { click: TooltipInteractionState; hover: TooltipInteractionState } | undefined) => void]>();

    const Comp = (): null => {
      tooltipStateSpy(useAppSelector(state => state.tooltip.itemInteraction));
      return null;
    };

    const { container } = rechartsTestRender(
      <Venn width={500} height={300} data={exampleVennData}>
        <Tooltip />
        <Customized component={<Comp />} />
      </Venn>,
    );

    const firstArea = container.querySelector('g[opacity]');
    assertNotNull(firstArea);

    fireEvent.mouseEnter(firstArea);
    expectLastCalledWith(tooltipStateSpy, {
      click: {
        active: false,
        index: null,
        dataKey: undefined,
        coordinate: undefined,
        graphicalItemId: undefined,
      },
      hover: {
        active: true,
        index: '[0]',
        dataKey: 'size',
        coordinate: expect.objectContaining({ x: expect.any(Number), y: expect.any(Number) }),
        graphicalItemId: expect.stringMatching(/^recharts-venn-.+/),
      },
    });
  });
});
