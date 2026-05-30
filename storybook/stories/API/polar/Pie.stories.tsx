import React from 'react';
import { Args } from '@storybook/react-vite';
import { pageData } from '../../data';
import { Pie, PieChart } from '../../../../src';
import { PieArgs } from '../arg-types/PieArgs';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';

export default {
  argTypes: PieArgs,
  component: Pie,
};

export const API = {
  render: (args: Args) => {
    return (
      <PieChart width={300} height={300}>
        <Pie dataKey="uv" {...args} />
      </PieChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(PieArgs),
    data: pageData,
    dataKey: 'uv',
    nameKey: 'name',
  },
};
