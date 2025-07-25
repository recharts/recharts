import React, { useState } from 'react';
import { Args } from '@storybook/react-vite';
import { ComposedChart, Bar, ResponsiveContainer, Cell } from '../../../../../src';
import { pageData } from '../../../data';
import { RechartsHookInspector } from '../../../../storybook-addon-recharts';
import type { RechartsStoryContext } from '../../../../storybook-addon-recharts/RechartsStoryContext';

export default {
  title: 'Examples/cartesian/Bar/Customised Event',
};

export const CustomizedEvent = {
  render: (args: Args, context: RechartsStoryContext) => {
    const [activeIndex, setActiveIndex] = useState(1);
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return (
      <>
        <h2>Clicking a Bar triggers the event</h2>
        <ResponsiveContainer width="100%" height={surfaceHeight}>
          <ComposedChart
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
            <Bar onClick={(_data, index) => setActiveIndex(index)} dataKey="uv" isAnimationActive={false}>
              {pageData.map(({ name }, index: number) => (
                <Cell cursor="pointer" fill={index === activeIndex ? '#82ca9d' : '#8884d8'} key={`cell-${name}`} />
              ))}
            </Bar>
            <RechartsHookInspector
              position={context.rechartsInspectorPosition}
              setPosition={context.rechartsSetInspectorPosition}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </>
    );
  },
};
