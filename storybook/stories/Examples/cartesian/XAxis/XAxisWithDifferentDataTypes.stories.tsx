import React from 'react';
import { Args } from '@storybook/react-webpack5';
import { ComposedChart, XAxis } from '../../../../../src';
import { coordinateWithValueData, dateWithValueData, pageData, timeData } from '../../../data';
import { RechartsHookInspector, RechartsStoryContext } from '../../../../storybook-addon-recharts';
import { getStoryArgsFromArgsTypesObject } from '../../../API/props/utils';
import { XAxisProps } from '../../../API/props/XAxisProps';

export default {
  component: XAxis,
  argTypes: XAxisProps,
  title: 'Examples/cartesian/XAxis/WithDifferentDataTypes',
};

export const WithDifferentDataTypes = {
  render: (args: Args, context: RechartsStoryContext) => {
    return (
      <div>
        <ComposedChart width={600} height={50} data={pageData}>
          <XAxis dataKey="name" />
          <RechartsHookInspector
            position={context.rechartsInspectorPosition}
            setPosition={context.rechartsSetInspectorPosition}
          />
        </ComposedChart>
        <ComposedChart width={600} height={50} data={coordinateWithValueData}>
          <XAxis {...args} dataKey="x" domain={['auto', 'auto']} type="number" />
        </ComposedChart>
        <ComposedChart width={600} height={50} data={dateWithValueData}>
          <XAxis {...args} dataKey="time" domain={['auto', 'auto']} type="number" scale="time" />
        </ComposedChart>
        <ComposedChart width={600} height={50} data={timeData}>
          <XAxis {...args} dataKey="x" />
        </ComposedChart>
      </div>
    );
  },
  args: getStoryArgsFromArgsTypesObject(XAxisProps),
};
