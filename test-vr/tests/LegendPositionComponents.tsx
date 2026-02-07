import * as React from 'react';
import { Legend, Line, LineChart, CartesianGrid } from '../../src';
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
      <LineChart
        key={`${horizontalAlign}-${verticalAlign}`}
        width={600}
        height={200}
        data={data}
        style={{ border: '1px solid red' }}
      >
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <CartesianGrid />
        <Legend
          align={horizontalAlign}
          verticalAlign={verticalAlign}
          offset={offset}
          // eslint-disable-next-line react/no-unstable-nested-components
          content={() => (
            <div style={{ border: '1px dashed black' }}>
              Horizontal align: {horizontalAlign}, vertical align: {verticalAlign}
            </div>
          )}
        />
      </LineChart>
    ))}
  </div>
);
