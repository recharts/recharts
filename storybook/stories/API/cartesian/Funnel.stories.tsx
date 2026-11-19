import React from 'react';
import { Args } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { Funnel, FunnelChart, LabelList, Legend, ResponsiveContainer, Tooltip } from '../../../../src';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { FunnelArgs } from '../arg-types/FunnelArgs';

const textStyle = { color: '#242424' };

export default {
  argTypes: FunnelArgs,
  component: Funnel,
};

export const API = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={200}>
        <FunnelChart>
          <Funnel dataKey={args.dataKey} {...args}>
            <LabelList dataKey="name" fill="#000" position="middle" stroke="none" pointerEvents="none" />
          </Funnel>
          <Legend labelStyle={textStyle} />
          <Tooltip itemStyle={textStyle} />
        </FunnelChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(FunnelArgs),
    width: 400,
    dataKey: 'value',
    stroke: '#424242',
    isAnimationActive: false,
    lastShapeType: 'rectangle',
    taperDirection: 'horizontal',
    data: [
      {
        fill: '#EEEEEE',
        name: 'A',
        value: 1009,
      },
      {
        fill: '#E0E0E0',
        name: 'B',
        value: 903,
      },
      {
        fill: '#BDBDBD',
        name: 'C',
        value: 756,
      },
      {
        fill: '#9E9E9E',
        name: 'D',
        value: 622,
      },
      {
        fill: '#979797',
        name: 'E',
        value: 602,
      },
      {
        fill: '#909090',
        name: 'F',
        value: 580,
      },
    ],
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await expect(await canvas.findByText('A', { selector: '.recharts-legend-item-text' })).toBeVisible();

    const label = await canvas.findByText('A', { selector: 'tspan' });
    const transform = label.closest('text')?.getScreenCTM();
    expect(transform?.a).toBeGreaterThan(0);
    expect(transform?.b).toBeCloseTo(0);
    expect(transform?.c).toBeCloseTo(0);
    expect(transform?.d).toBeGreaterThan(0);

    const firstStage = canvasElement.querySelector('.recharts-funnel-trapezoid path');
    if (!firstStage) {
      throw new Error('Expected a stage to hover');
    }
    const bounds = label.getBoundingClientRect();
    const hit = canvasElement.ownerDocument.elementFromPoint(bounds.x + bounds.width / 2, bounds.y + bounds.height / 2);
    expect(hit).toBe(firstStage);
    await userEvent.hover(firstStage);
    const value = await canvas.findByText('1009', { selector: '.recharts-tooltip-item-value' });
    await expect(value.closest('li')).toHaveTextContent('A : 1009');
    await userEvent.unhover(firstStage);
  },
};
