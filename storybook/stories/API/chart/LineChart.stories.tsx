/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { fireEvent } from '@storybook/testing-library';
import { numberData, pageData } from '../../data';
import { Brush, Line, LineChart, ResponsiveContainer } from '../../../../src';

export default {
  component: LineChart,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart {...args}>
          <Line dataKey="uv" />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
  },
};

export const PlayMoveBrush = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart {...args}>
          <Line dataKey="uv" />
          <Brush />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: numberData,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    setTimeout(() => {
      const leftBrushSlide = canvasElement.querySelector('.recharts-brush-traveller');

      fireEvent.mouseDown(leftBrushSlide);
      fireEvent.mouseMove(leftBrushSlide, { clientX: 200 });
      fireEvent.mouseUp(leftBrushSlide);
    }, 0);
  },
};
