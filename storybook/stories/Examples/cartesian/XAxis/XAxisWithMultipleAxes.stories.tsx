import React from 'react';
import { Args } from '@storybook/react-vite';
import { pageData } from '../../../data';
import { Line, LineChart, Tooltip, XAxis } from '../../../../../src';
import { XAxisProps } from '../../../API/props/XAxisProps';
import { getStoryArgsFromArgsTypesObject } from '../../../API/props/utils';
import { RechartsHookInspector } from '../../../../storybook-addon-recharts';
import type { RechartsStoryContext } from '../../../../storybook-addon-recharts/RechartsStoryContext';

export default {
  component: XAxis,
  argTypes: XAxisProps,
};

export const XAxisWithMultipleAxes = {
  render: (args: Args, context: RechartsStoryContext) => (
    <article style={{ display: 'flex', flexDirection: 'column' }}>
      <LineChart width={700} height={700} data={pageData}>
        <XAxis {...args} dataKey="name" xAxisId="a" orientation="top" height={40} />
        <XAxis {...args} mirror dataKey="uv" xAxisId="b" height={50} />
        <XAxis {...args} dataKey="pv" type="number" xAxisId="c" height={60} />
        <XAxis {...args} mirror dataKey="amt" type="number" orientation="top" xAxisId="d" height={20} />
        <Tooltip defaultIndex={2} axisId="a" />
        <Line dataKey="name" xAxisId="a" />
        <Line dataKey="uv" xAxisId="b" />
        <Line dataKey="pv" xAxisId="c" />
        <Line dataKey="amt" xAxisId="d" />
        <RechartsHookInspector
          position={context.rechartsInspectorPosition}
          setPosition={context.rechartsSetInspectorPosition}
        />
      </LineChart>
      <p>
        {`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`}
      </p>
    </article>
  ),
  args: getStoryArgsFromArgsTypesObject(XAxisProps),
};
