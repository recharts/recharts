import React from 'react';
import { CartesianAxis, ResponsiveContainer, Surface } from '../../../../../src';
import { ticks } from '../../../data';

export default {
  title: 'Examples/cartesian/Cartesian Axis/Tick Positioning',
};

export const TickPositioning = {
  render: () => {
    const intervalOptions = ['preserveStart', 'preserveEnd', 'preserveStartEnd', 'equidistantPreserveStart', 0, 1, 2];

    const [surfaceWidth, surfaceHeight] = [600, 300];
    return (
      <ResponsiveContainer width={500} height={surfaceHeight}>
        <Surface
          width={surfaceWidth}
          height={surfaceHeight}
          viewBox={{
            x: 0,
            y: 0,
            width: surfaceWidth,
            height: surfaceHeight,
          }}
        >
          {intervalOptions.map((intervalOption, index) => (
            <CartesianAxis
              key={intervalOption}
              width={surfaceWidth}
              height={surfaceHeight}
              viewBox={{
                x: 0,
                y: 0,
                width: surfaceWidth,
                height: surfaceHeight,
              }}
              ticks={ticks}
              interval={intervalOption as any}
              y={index * 50}
            />
          ))}
        </Surface>
      </ResponsiveContainer>
    );
  },
};
