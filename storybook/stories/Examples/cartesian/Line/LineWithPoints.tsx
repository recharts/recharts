import React from 'react';
import { Line, ResponsiveContainer, Surface } from '../../../../../src';
import { coordinateData } from '../../../data';

export default {
  title: 'Examples/cartesian/Line/With Points',
};

export const Points = {
  render: () => {
    const [surfaceWidth, surfaceHeight] = [600, 300];

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
          <Line isAnimationActive={false} points={coordinateData} />
        </Surface>
      </ResponsiveContainer>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'You can directly set the x and y coordinates of a Line via points. This overrides dataKey and data. ' +
          'The coordinate system of the points lies in the top right of the bounding box. ' +
          'Using points, a Line can even be used within only a Surface, without a Chart.',
      },
    },
  },
};
