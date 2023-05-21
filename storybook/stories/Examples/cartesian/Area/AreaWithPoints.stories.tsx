import React from 'react';
import { Area, ResponsiveContainer, Surface } from '../../../../../src';
import { coordinateData } from '../../../data';

export default {
  title: 'Examples/cartesian/Area/With Points',
};

const [surfaceWidth, surfaceHeight] = [600, 300];

export const Points = {
  render: (args: Record<string, any>) => {
    const { points } = args;

    return (
      <ResponsiveContainer width="100%" height={surfaceHeight}>
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
          <Area dataKey={undefined} isAnimationActive={false} points={points} />
        </Surface>
      </ResponsiveContainer>
    );
  },
  args: {
    points: coordinateData,
  },
  parameters: {
    controls: { include: ['points'] },
    docs: {
      description: {
        story:
          'You can directly set the x and y coordinates of a Area via `points`. This overrides `dataKey` and `data`. ' +
          'The coordinate system of the `points` lies in the top right of the bounding box. ' +
          'Using `points`, an Area can even be used within only a Surface, without a Chart.',
      },
    },
  },
};
