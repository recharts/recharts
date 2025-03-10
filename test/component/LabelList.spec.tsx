import { render } from '@testing-library/react';
import React from 'react';

import { Bar, BarChart, LabelList, Scatter, ScatterChart, XAxis, YAxis, ZAxis } from '../../src';
import { expectScatterPoints } from '../helper/expectScatterPoints';
import { expectLabels } from '../helper/expectLabel';

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
          {/* should be able to use dataKey as a function with LabelList */}
          <LabelList dataKey={d => d.x} />
        </Scatter>
      </ScatterChart>,
    );

    expectScatterPoints(container, [
      {
        cx: '86.66666666666667',
        cy: '185',
        d: 'M1.819,0A1.819,1.819,0,1,1,-1.819,0A1.819,1.819,0,1,1,1.819,0',
        height: '3.638913473173784',
        transform: 'translate(86.66666666666667, 185)',
        width: '3.638913473173784',
      },
      {
        cx: '140',
        cy: '267.5',
        d: 'M1.98,0A1.98,1.98,0,1,1,-1.98,0A1.98,1.98,0,1,1,1.98,0',
        height: '3.960594802695323',
        transform: 'translate(140, 267.5)',
        width: '3.960594802695323',
      },
      {
        cx: '193.33333333333334',
        cy: '102.5',
        d: 'M2.312,0A2.312,2.312,0,1,1,-2.312,0A2.312,2.312,0,1,1,2.312,0',
        height: '4.624978308224887',
        transform: 'translate(193.33333333333334, 102.5)',
        width: '4.624978308224887',
      },
      {
        cx: '246.66666666666666',
        cy: '143.75',
        d: 'M2.031,0A2.031,2.031,0,1,1,-2.031,0A2.031,2.031,0,1,1,2.031,0',
        height: '4.062165001543845',
        transform: 'translate(246.66666666666666, 143.75)',
        width: '4.062165001543845',
      },
      {
        cx: '300.00000000000006',
        cy: '20',
        d: 'M2.523,0A2.523,2.523,0,1,1,-2.523,0A2.523,2.523,0,1,1,2.523,0',
        height: '5.046265044040321',
        transform: 'translate(300.00000000000006, 20)',
        width: '5.046265044040321',
      },
      {
        cx: '353.33333333333337',
        cy: '119.00000000000001',
        d: 'M1.819,0A1.819,1.819,0,1,1,-1.819,0A1.819,1.819,0,1,1,1.819,0',
        height: '3.638913473173784',
        transform: 'translate(353.33333333333337, 119.00000000000001)',
        width: '3.638913473173784',
      },
    ]);

    expectLabels(container, [
      {
        height: '3.638913473173784',
        offset: '5',
        textContent: '100',
        width: '3.638913473173784',
        x: '86.66666666666667',
        y: '185',
      },
      {
        height: '3.960594802695323',
        offset: '5',
        textContent: '120',
        width: '3.960594802695323',
        x: '140',
        y: '267.5',
      },
      {
        height: '4.624978308224887',
        offset: '5',
        textContent: '170',
        width: '4.624978308224887',
        x: '193.33333333333334',
        y: '102.5',
      },
      {
        height: '4.062165001543845',
        offset: '5',
        textContent: '140',
        width: '4.062165001543845',
        x: '246.66666666666666',
        y: '143.75',
      },
      {
        height: '5.046265044040321',
        offset: '5',
        textContent: '150',
        width: '5.046265044040321',
        x: '300.00000000000006',
        y: '20',
      },
      {
        height: '3.638913473173784',
        offset: '5',
        textContent: '110',
        width: '3.638913473173784',
        x: '353.33333333333337',
        y: '119.00000000000001',
      },
    ]);
  });

  it('Render labels in BarChart with an offset', () => {
    const data = [
      { x: 100, y: '200' },
      { x: 120, y: '100' },
      { x: 170, y: '300' },
      { x: 140, y: '250' },
      { x: 150, y: '400' },
      { x: 110, y: '280' },
    ];
    const { container } = render(
      <BarChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20 }} data={data}>
        <XAxis dataKey="x" />
        <YAxis />

        <Bar dataKey="y" name="A school" isAnimationActive={false}>
          {/* offset only works with 'position' set */}
          <LabelList dataKey="x" offset={40} position="top" />
        </Bar>
      </BarChart>,
    );

    const label = container.querySelectorAll('.recharts-label');
    expect(label?.length).toEqual(data.length);

    const text = label[0].closest('text');
    expect(text).toBeInTheDocument();
    expect(text).toHaveAttribute('offset', '40');
  });
});
