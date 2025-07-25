import React from 'react';
import { Args } from '@storybook/react-vite';
import { Cell, Pie, PieChart, ResponsiveContainer } from '../../../../src';
import { GeneralStyle } from '../props/Styles';
import { EventHandlers } from '../props/EventHandlers';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { pageData } from '../../data';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import type { RechartsStoryContext } from '../../../storybook-addon-recharts/RechartsStoryContext';

export default {
  argTypes: {
    ...GeneralStyle,
    ...EventHandlers,
    // Deprecated
    dangerouslySetInnerHTML: { table: { category: 'Deprecated', disable: true } },
  },
  component: Cell,
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'url(#pattern-checkers)'];

export const API = {
  render: (args: Args, context: RechartsStoryContext) => {
    const surfaceDimension = 400;
    return (
      <ResponsiveContainer width="100%" height={surfaceDimension}>
        <PieChart>
          <defs>
            <pattern id="pattern-checkers" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <rect x="0" width="5" height="5" y="0" />
              <rect x="100" width="5" height="5" y="100" />
            </pattern>
          </defs>
          <Pie data={pageData} dataKey="uv" label>
            {pageData.map((entry, index) => (
              <Cell key={`cell-pie-${entry.pv}-${entry.uv}`} fill={COLORS[index]} {...args} />
            ))}
          </Pie>
          <RechartsHookInspector
            position={context.rechartsInspectorPosition}
            setPosition={context.rechartsSetInspectorPosition}
          />
        </PieChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(GeneralStyle),
    ...getStoryArgsFromArgsTypesObject(EventHandlers),
  },
};
