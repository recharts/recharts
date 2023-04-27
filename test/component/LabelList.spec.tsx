import { render } from '@testing-library/react';
import React from 'react';

import { LabelList, Scatter, ScatterChart, XAxis, YAxis, ZAxis } from '../../src';

describe('<LabelList />', () => {
  it('Render labels in ScatterChart', () => {
    const data = [
      { x: 100, y: 200, z: 200 },
      { x: 120, y: 100, z: 260 },
      { x: 170, y: 300, z: 400 },
      { x: 140, y: 250, z: 280 },
      { x: 150, y: 400, z: 500 },
      { x: 110, y: 280, z: 200 },
    ];
    const { container } = render(
      <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20 }}>
        <XAxis dataKey="x" name="stature" unit="cm" />
        <YAxis dataKey="y" name="weight" unit="kg" />
        <ZAxis dataKey="z" range={[4, 20]} name="score" unit="km" />
        <Scatter name="A school" data={data} isAnimationActive={false}>
          <LabelList dataKey="x" />
        </Scatter>
      </ScatterChart>,
    );

    const label = container.querySelectorAll('.recharts-label');

    expect(label?.length).toEqual(data.length);
  });
});
