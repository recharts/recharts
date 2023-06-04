import React from 'react';
import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { pageData } from '../../../data';
import { ComposedChart, Area, ResponsiveContainer } from '../../../../../src';

export default {
  title: 'Examples/cartesian/Line/Customised Label',
};

const renderLabel = (props: { index: number; x: number; y: number }) => {
  const { index, x, y } = props;

  return (
    <text key={index} x={x} y={y} className="customized-label">
      {`Customized Label: ${x}, ${y}`}
    </text>
  );
};

export const CustomizedLabel: StoryObj = {
  render: () => {
    const [surfaceWidth, surfaceHeight] = [600, 300];

    return (
      <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart
          width={surfaceWidth}
          height={surfaceHeight}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
          data={pageData}
        >
          <Area dataKey="uv" isAnimationActive={false} label={renderLabel} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },

  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const { getAllByText } = within(canvasElement);
    // to make getAllByText works
    await new Promise(r => setTimeout(r, 0));
    expect(getAllByText(/Customized Label/)).toHaveLength(pageData.length);
  },
};
