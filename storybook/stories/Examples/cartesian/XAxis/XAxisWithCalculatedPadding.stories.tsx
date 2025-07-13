import React from 'react';
import { Args } from '@storybook/react-webpack5';
import { ComposedChart, XAxis } from '../../../../../src';
import { RechartsHookInspector, RechartsStoryContext } from '../../../../storybook-addon-recharts';
import { XAxisProps } from '../../../API/props/XAxisProps';

export default {
  component: XAxis,
  argTypes: XAxisProps,
  title: 'Examples/cartesian/XAxis/WithCalculatedPadding',
};

const data = [0, 2, 4, 6, 8, 10].map(value => {
  return { x: value };
});

export const WithCalculatedPadding = {
  render: (args: Args, context: RechartsStoryContext) => {
    return (
      <div>
        <h4>default:</h4>
        <ComposedChart width={600} height={50} data={data}>
          <XAxis dataKey="x" type="number" />
          <RechartsHookInspector
            position={context.rechartsInspectorPosition}
            setPosition={context.rechartsSetInspectorPosition}
          />
        </ComposedChart>

        <h4>no-gap:</h4>
        <ComposedChart width={600} height={50} data={data}>
          <XAxis dataKey="x" type="number" padding="no-gap" />
        </ComposedChart>

        <h4>gap:</h4>
        <ComposedChart width={600} height={50} data={data}>
          <XAxis dataKey="x" type="number" padding="gap" />
        </ComposedChart>
      </div>
    );
  },
};
