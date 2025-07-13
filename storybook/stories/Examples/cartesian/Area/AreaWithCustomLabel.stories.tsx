import React from 'react';
import { Args } from '@storybook/react-webpack5';
import { ComposedChart, Area, ResponsiveContainer } from '../../../../../src';
import { coordinateWithValueData } from '../../../data';
import { RechartsHookInspector, RechartsStoryContext } from '../../../../storybook-addon-recharts';

export default {
  title: 'Examples/cartesian/Area/Customised Label',
};

const [surfaceWidth, surfaceHeight] = [600, 300];

const renderLabel = (props: { index: number; x: number; y: number }) => {
  const { index, x, y } = props;
  return (
    <text key={index} x={x} y={y} className="customized-label">
      {`${x}, ${y}`}
    </text>
  );
};

export const CustomizedLabel = {
  render: (args: Args, context: RechartsStoryContext) => {
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
          data={coordinateWithValueData}
        >
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
          <RechartsHookInspector
            position={context.rechartsInspectorPosition}
            setPosition={context.rechartsSetInspectorPosition}
          />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
};
