import * as React from 'react';
import { Legend, Line, LineChart, CartesianGrid, XAxis, YAxis } from '../../src';
import { HorizontalAlignmentType, VerticalAlignmentType } from '../../src/component/DefaultLegendContent';

const data = [
  { name: 'Page A', uv: 4000, pv: 1, amt: 2400 },
  { name: 'Page B', uv: 1, pv: 3398, amt: 2210 },
];

const wrapperStyle: React.CSSProperties = {
  width: '600px',
  border: '1px solid blue',
  display: 'flex',
  padding: '30px',
  gap: '20px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

type Alignment = [HorizontalAlignmentType, VerticalAlignmentType];

const allAlignmentCombinations: ReadonlyArray<Alignment> = [
  ['left', 'top'],
  ['left', 'middle'],
  ['left', 'bottom'],
  ['center', 'top'],
  ['center', 'middle'],
  ['center', 'bottom'],
  ['right', 'top'],
  ['right', 'middle'],
  ['right', 'bottom'],
];

export const LegendAlignVRTest = ({ offset }: { offset?: number }) => (
  <div style={wrapperStyle}>
    {allAlignmentCombinations.map(([horizontalAlign, verticalAlign]) => (
      <React.Fragment key={`${horizontalAlign}-${verticalAlign}`}>
        <LineChart width={600} height={200} data={data} style={{ border: '1px solid red' }}>
          <XAxis dataKey="name" />
          <YAxis />
          <Line type="monotone" dataKey="uv" name={`Horizontal align: ${horizontalAlign}`} stroke="purple" />
          <Line type="monotone" dataKey="pv" name={`Vertical align: ${verticalAlign}`} stroke="gold" />
          <CartesianGrid />
          <Legend
            align={horizontalAlign}
            verticalAlign={verticalAlign}
            offset={offset}
            wrapperStyle={{ border: '1px dashed black' }}
          />
        </LineChart>
        <hr style={{ border: '1px dashed black', width: '100%' }} />
      </React.Fragment>
    ))}
  </div>
);
