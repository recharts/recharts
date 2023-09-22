import React from 'react';
import { Line, LineChart, ResponsiveContainer, XAxis } from '../../../../../src';
import { ticks } from '../../../data';

export default {
  title: 'Examples/cartesian/Cartesian Axis/Tick Positioning',
};

export const TickPositioning = {
  render: () => {
    const intervalOptions = ['preserveStart', 'preserveEnd', 'preserveStartEnd', 'equidistantPreserveStart', 0];

    return (
      <ResponsiveContainer>
        <LineChart
          data={ticks}
          // Margins are neccessary to show ticks that extend beyond the chart (i.e. last and first tick).
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
              interval={intervalOption as any}
              xAxisId={index}
              label={intervalOption}
              height={70}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    );
  },
};
