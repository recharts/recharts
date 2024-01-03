import { expect } from '@storybook/jest';
import React, { useState } from 'react';
import { within, userEvent } from '@storybook/testing-library';
import { ComposedChart, ResponsiveContainer, Line, Brush } from '../../../../../src';
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
