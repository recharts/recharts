import React from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip } from '../../../../src';
import { pageData } from '../../data';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { TooltipProps } from '../props/TooltipProps';

export default {
  argTypes: TooltipProps,
  component: Tooltip,
};

export const API = {
  render: (args: Record<string, any>) => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return (
      <ResponsiveContainer width="100%" height={surfaceHeight}>
        <LineChart
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
          <Line dataKey="uv" />
          {/* The target component */}
          <Tooltip {...args} />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    // This API story should have explicit values for all props
    ...getStoryArgsFromArgsTypesObject(TooltipProps),
    trigger: 'hover',
    shared: false,
    useTranslate3d: false,
  },
};
