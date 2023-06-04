import React from 'react';
import { Line, ResponsiveContainer, ComposedChart } from '../../../../../src';
import { coordinateData } from '../../../data';

export default {
  title: 'Examples/cartesian/Line/With Points',
};

export const WithPoints = {
  render: () => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return (
      <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight}>
          <Line isAnimationActive={false} points={coordinateData} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
};
