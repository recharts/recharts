import React, { useState } from 'react';
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
            <Line dataKey="uv" />

            <Brush
              startIndex={startIndex}
              endIndex={endIndex}
              onChange={e => {
                setEndIndex(e.endIndex);
                setStartIndex(e.startIndex);
              }}
            />
          </ComposedChart>
        </ResponsiveContainer>
        <input
          type="number"
          aria-label="startIndex"
          value={startIndex}
          onChange={evt => setStartIndex(Number(evt.target.value))}
        />
        <input
          type="number"
          aria-label="endIndex"
          value={endIndex}
          onChange={evt => setEndIndex(Number(evt.target.value))}
        />
      </>
    );
  },
};
