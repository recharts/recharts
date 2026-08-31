import * as React from 'react';
import { Legend, Line, LineChart, CartesianGrid, XAxis, YAxis, CartesianPosition } from '../../src';
import { HorizontalAlignmentType, VerticalAlignmentType } from '../../src/component/DefaultLegendContent';

const data = [
  { name: 'Page A', uv: 4000, pv: 1 },
  { name: 'Page B', uv: 1, pv: 4000 },
];

const availablePositions: ReadonlyArray<CartesianPosition> = [
  'top',
  'left',
  'right',
  'bottom',
  'insideLeft',
  'insideRight',
  'insideTop',
  'insideBottom',
  'insideTopLeft',
  'insideBottomLeft',
  'insideTopRight',
  'insideBottomRight',
  'center',
  {
    x: '70%',
    y: '70%',
  },
  {
    x: 300,
    y: 100,
  },
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

export const LegendPositionVRTest = ({ offset }: { offset?: number }) => (
  <div style={wrapperStyle}>
    {availablePositions.map(position => (
      <LineChart
        key={JSON.stringify(position)}
        width={500}
        height={300}
        data={data}
        style={{ border: '1px solid red' }}
      >
        <Line type="monotone" dataKey="uv" stroke="purple" />
        <Line type="monotone" dataKey="pv" stroke="gold" />
        <CartesianGrid />
        <Legend
          position={position}
          offset={offset}
          // eslint-disable-next-line react/no-unstable-nested-components
          content={() => <div style={{ border: '1px dashed black' }}>Position: {JSON.stringify(position)}</div>}
        />
      </LineChart>
    ))}
  </div>
);

const veryLongText1 = 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit. '.repeat(3);
const veryLongText2 = 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '.repeat(3);

export const VeryLongLegendText = ({ position }: { position: CartesianPosition }) => {
  return (
    <LineChart key={JSON.stringify(position)} width={500} height={300} data={data} style={{ border: '1px solid red' }}>
      <Line type="monotone" dataKey="uv" stroke="purple" name={veryLongText1} />
      <Line type="monotone" dataKey="pv" stroke="gold" name={veryLongText2} />
      <CartesianGrid />
      <Legend position={position} />
    </LineChart>
  );
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

export const LegendAlignVRTest = () => (
  <div style={wrapperStyle}>
    {allAlignmentCombinations.map(([horizontalAlign, verticalAlign]) => (
      <React.Fragment key={`${horizontalAlign}-${verticalAlign}`}>
        <LineChart width={600} height={200} data={data} style={{ border: '1px solid red' }}>
          <XAxis dataKey="name" />
          <YAxis />
          <Line type="monotone" dataKey="uv" name={`Horizontal align: ${horizontalAlign}`} stroke="purple" />
          <Line type="monotone" dataKey="pv" name={`Vertical align: ${verticalAlign}`} stroke="gold" />
          <CartesianGrid />
          <Legend align={horizontalAlign} verticalAlign={verticalAlign} wrapperStyle={{ border: '1px dashed black' }} />
        </LineChart>
        <hr style={{ border: '1px dashed black', width: '100%' }} />
      </React.Fragment>
    ))}
  </div>
);

export const LegendPosition = (props: React.ComponentProps<typeof LegendPositionVRTest>) => (
  <LegendPositionVRTest {...props} />
);

export const LegendAlign = () => <LegendAlignVRTest />;

export const VeryLongLegendTextStory = (props: React.ComponentProps<typeof VeryLongLegendText>) => (
  <VeryLongLegendText {...props} />
);
