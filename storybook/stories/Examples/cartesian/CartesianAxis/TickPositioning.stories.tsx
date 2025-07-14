import React from 'react';
import { Args } from '@storybook/react-webpack5';
import { Line, LineChart, ResponsiveContainer, XAxis } from '../../../../../src';
import { ticks } from '../../../data';
import { RechartsHookInspector, RechartsStoryContext } from '../../../../storybook-addon-recharts';

export default {
  title: 'Examples/cartesian/Cartesian Axis/Tick Positioning',
};

export const TickPositioning = {
  render: (args: Args, context: RechartsStoryContext) => {
    const intervalOptions = [
      'preserveStart',
      'preserveEnd',
      'preserveStartEnd',
      'equidistantPreserveStart',
      0,
    ] as const;

    return (
      <ResponsiveContainer>
        <LineChart
          data={ticks}
          // Margins are necessary to show ticks that extend beyond the chart (i.e. last and first tick).
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <Line dataKey="coordinate" />
          {intervalOptions.map((intervalOption, index) => (
            <XAxis
              dataKey="value"
              key={intervalOption}
              interval={intervalOption}
              xAxisId={index}
              label={intervalOption}
              height={70}
            />
          ))}
          <RechartsHookInspector
            position={context.rechartsInspectorPosition}
            setPosition={context.rechartsSetInspectorPosition}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  },
};
