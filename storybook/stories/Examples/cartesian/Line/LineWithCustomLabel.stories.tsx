import React from 'react';
import { Args, StoryObj } from '@storybook/react-vite';
import { within, expect } from 'storybook/test';
import { pageData } from '../../../data';
import { ComposedChart, Area, ResponsiveContainer } from '../../../../../src';
import { RechartsHookInspector } from '../../../../storybook-addon-recharts';
import type { RechartsStoryContext } from '../../../../storybook-addon-recharts/RechartsStoryContext';

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
  render: (args: Args, context: RechartsStoryContext) => {
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
          <RechartsHookInspector
            position={context.rechartsInspectorPosition}
            setPosition={context.rechartsSetInspectorPosition}
          />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },

  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const { findAllByText } = within(canvasElement);

    expect(await findAllByText('Customized Label', { exact: false })).toHaveLength(pageData.length);
  },
};
