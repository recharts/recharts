import React from 'react';
import { Brush, ResponsiveContainer, ComposedChart } from '../../../../../src';
import { dateData } from '../../../data';
import { RechartsHookInspector } from '../../../../storybook-addon-recharts';

export default {
  title: 'Examples/cartesian/Brush/In Surface',
};

export const InSurface = {
  render: () => {
    interface BrushStartEndIndex {
      startIndex?: number;
      endIndex?: number;
    }

    const [simple, setSimple] = React.useState<BrushStartEndIndex>({
      startIndex: 0,
      endIndex: dateData.length - 1,
    });

    const [gap, setGap] = React.useState<BrushStartEndIndex>({
      startIndex: 0,
      endIndex: dateData.length - 1,
    });

    const handleChange = (res: BrushStartEndIndex) => {
      setSimple(res);
    };

    const handleGapChange = (res: BrushStartEndIndex) => {
      setGap(res);
    };

    const renderTraveller = (props: { x: number; y: number; width: number; height: number }) => {
      const { x, y, width, height } = props;

      return (
        <path
          d={`M${x + width / 2},${y}L${x + width},${y + height / 2}L${x + width / 2},${y + height}L${x},${
            y + height / 2
          }Z`}
          fill="red"
          stroke="none"
        />
      );
    };

    return (
      <ResponsiveContainer width="100%" height={200}>
        <p>Simple Brush</p>
        <ComposedChart data={dateData}>
          <Brush
            startIndex={simple.startIndex}
            endIndex={simple.endIndex}
            x={100}
            y={50}
            width={400}
            height={40}
            onChange={handleChange}
            traveller={renderTraveller}
          />
        </ComposedChart>
        <p>Brush has specified gap</p>
        <ComposedChart data={dateData}>
          <Brush
            startIndex={gap.startIndex}
            endIndex={gap.endIndex}
            x={100}
            y={50}
            width={400}
            height={40}
            gap={5}
            onChange={handleGapChange}
          />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
};
