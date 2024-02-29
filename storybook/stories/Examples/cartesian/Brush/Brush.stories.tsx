import { expect } from '@storybook/jest';
import React, { useState } from 'react';
import { within, userEvent } from '@storybook/testing-library';
import {
  ComposedChart,
  ResponsiveContainer,
  Line,
  Brush,
  CartesianGrid,
  Legend,
  LineChart,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
} from '../../../../../src';
import { pageData } from '../../../data';

export default {
  component: Brush,
};

export const ControlledBrush = {
  render: () => {
    const [startIndex, setStartIndex] = useState<number | undefined>(3);
    const [endIndex, setEndIndex] = useState<number | undefined>(pageData.length - 1);

    return (
      <>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={pageData}>
            <Line dataKey="uv" isAnimationActive={false} />

            <Brush
              startIndex={startIndex}
              endIndex={endIndex}
              onChange={e => {
                setEndIndex(e.endIndex);
                setStartIndex(e.startIndex);
              }}
              alwaysShowText
            />
          </ComposedChart>
        </ResponsiveContainer>
        <input
          type="number"
          aria-label="startIndex"
          value={startIndex}
          onChange={evt => {
            const num = Number(evt.target.value);
            if (Number.isInteger(num)) setStartIndex(num);
          }}
        />
        <input
          aria-label="endIndex"
          value={endIndex}
          onChange={evt => {
            const num = Number(evt.target.value);
            if (Number.isInteger(num)) setEndIndex(num);
          }}
        />
      </>
    );
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const user = userEvent.setup();
    const { getByLabelText } = within(canvasElement);

    const startIndexInput = getByLabelText<HTMLInputElement>('startIndex');
    const endIndexInput = getByLabelText<HTMLInputElement>('endIndex');

    await user.clear(startIndexInput);
    await user.type(startIndexInput, '2');
    await user.clear(endIndexInput);
    await user.type(endIndexInput, '5');

    const brushTexts = document.getElementsByClassName('recharts-brush-texts').item(0).children;
    expect(brushTexts.item(0)).toBeInTheDocument();

    expect(brushTexts.item(0).textContent).toContain('2');
    expect(brushTexts.item(1).textContent).toContain('5');
  },
};

export const PanoramicBrush = {
  render: () => {
    return (
      <ComposedChart width={600} height={300} data={pageData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        <ReferenceLine stroke="red" strokeOpacity="red" strokeWidth={3} strokeLinecap="round" y={1000} />
        <Brush dataKey="name">
          <LineChart>
            <ReferenceLine key="test" stroke="red" strokeOpacity="red" strokeWidth={3} strokeLinecap="round" y={1000} />
            <CartesianGrid strokeDasharray="1 1" verticalPoints={[10, 20, 30]} horizontalPoints={[10, 20, 30]} />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </Brush>
      </ComposedChart>
    );
  },
};
