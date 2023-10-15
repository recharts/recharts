import React from 'react';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { ResponsiveContainer, LabelList, LineChart, Line } from '../../../../src';
import { pageData } from '../../data';
import { LabelListProps } from '../props/LabelListProps';

export default {
  argTypes: {
    ...LabelListProps,
  },
  component: LabelList,
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
          {/* The target component */}
          <Line dataKey="uv">
            <LabelList {...args} />
          </Line>
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    // This API story should have explicit values for all props
    dataKey: 'uv',
    position: 'top',
    ...getStoryArgsFromArgsTypesObject(LabelListProps),
  },
};
