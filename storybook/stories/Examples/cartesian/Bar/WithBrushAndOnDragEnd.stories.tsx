import React from 'react';
import { Brush, ResponsiveContainer, Bar, BarChart, XAxis, YAxis } from '../../../../../src';
import { dateWithValueData } from '../../../data';

export default {
  title: 'Examples/cartesian/Bar/With Brush and onDragEnd',
};

interface BrushStartEndIndex {
  startIndex?: number;
  endIndex?: number;
}

export const WithBrushAndOnDragEnd = {
  render: () => {
    const [dragIndexes, setDragIndexes] = React.useState<BrushStartEndIndex>({
      startIndex: 0,
      endIndex: dateWithValueData.length - 1,
    });
    return (
      // Calc compensates for the text above the chart
      <div style={{ width: '100%', height: 'calc(100% - 84px)' }}>
        <div>
          Start index:
          {dragIndexes.startIndex}
        </div>
        <div>
          End index:
          {dragIndexes.endIndex}
        </div>
        <ResponsiveContainer>
          <BarChart data={dateWithValueData}>
            <XAxis dataKey="value" />
            <YAxis />
            <Brush
              dataKey="name"
              height={30}
              onDragEnd={indexes => {
                setDragIndexes(indexes as BrushStartEndIndex);
              }}
            />
            <Bar dataKey="value" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  },
};
