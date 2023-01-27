import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LineChart } from '../chart/LineChart';
import { Line } from '../cartesian/Line';
import { data } from './data';
import { ResponsiveContainer } from '../component/ResponsiveContainer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/LineChart',
  component: LineChart,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof LineChart>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LineChart> = args => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart {...args}>
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  data,
  width: 500,
  height: 500,
};
