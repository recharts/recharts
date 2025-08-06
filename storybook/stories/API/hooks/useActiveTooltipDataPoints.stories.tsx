import React from 'react';
import { Args } from '@storybook/react-vite';
import { Area, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from '../../../../src';
import { pageData } from '../../data';
import { PageData } from '../../../../test/_data';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import { TooltipProps } from '../props/TooltipProps';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';

export default {
  argTypes: TooltipProps,
  title: 'API/hooks/useActiveTooltipDataPoints',
  component: Tooltip,
};
const dataUv = PageData.map(p => ({ name: p.name, uv: p.uv }));
const dataPv = PageData.map(p => ({ name: p.name, pv: p.pv }));
const dataAmt = PageData.map(p => ({ name: p.name, amt: p.amt }));

export const UseActiveTooltipDataPoints = {
  name: 'useActiveTooltipDataPoints',
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={pageData}>
          <Area data={dataPv} dataKey="pv" />
          <Area data={dataUv} dataKey="uv" />
          <Line data={dataAmt} dataKey="amt" />
          <XAxis dataKey="name" allowDuplicatedCategory={false} />
          <YAxis />
          <Legend />
          <Tooltip {...args} />
          <RechartsHookInspector defaultOpened="useActiveTooltipDataPoints" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: getStoryArgsFromArgsTypesObject(TooltipProps),
};
