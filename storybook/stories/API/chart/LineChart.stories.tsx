import React, { useCallback, useState } from 'react';
import { Args } from '@storybook/react-vite';
import { pageData } from '../../data';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from '../../../../src';
import { CategoricalChartProps } from '../props/ChartProps';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';

export default {
  argTypes: CategoricalChartProps,
  component: LineChart,
};

export const Simple = {
  render: (args: Args) => {
    const [isHovered, setIsHovered] = useState(false);

    const onMouseEnter = useCallback(() => {
      setIsHovered(true);
    }, [setIsHovered]);

    const onMouseLeave = useCallback(() => {
      setIsHovered(false);
    }, [setIsHovered]);

    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart {...args}>
          <Line
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            dataKey="uv"
            strokeWidth={isHovered ? 8 : 4}
            animationDuration={5000}
          />
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
  },
};

export const SynchronizedTooltip = {
  render: (args: Args) => {
    return (
      <div>
        <LineChart {...args} id="BookOne" className="BookOne">
          <Line isAnimationActive={false} name="BookOne" type="monotone" dataKey="uv" stroke="#111" />
          <XAxis dataKey="name" />
          <Tooltip active />
          <RechartsHookInspector />
        </LineChart>
        <LineChart {...args} id="BookTwo" className="BookTwo">
          <Line isAnimationActive={false} name="BookTwo" type="monotone" dataKey="uv" stroke="#ff7300" />
          <XAxis dataKey="name" />
          <Tooltip />
        </LineChart>
      </div>
    );
  },
  args: {
    data: pageData,
    syncId: 'example-syncId',
    width: 400,
    height: 400,
  },
};
