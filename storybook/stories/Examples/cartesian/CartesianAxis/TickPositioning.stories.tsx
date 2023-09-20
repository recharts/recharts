import React from 'react';
import { Line, LineChart, ResponsiveContainer, XAxis } from '../../../../../src';
import { ticks } from '../../../data';

export default {
  title: 'Examples/cartesian/Cartesian Axis/Tick Positioning',
};

export const TickPositioning = {
  render: () => {
    const intervalOptions = [
      'preserveStart',
      'preserveEnd',
      'preserveStartEnd',
      'equidistantPreserveStart',
      'equidistant',
      0,
    ];

    return (
      <ResponsiveContainer>
        <LineChart data={ticks}>
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
