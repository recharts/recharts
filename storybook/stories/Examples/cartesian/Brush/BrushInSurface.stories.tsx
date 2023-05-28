import React from 'react';
import { Surface, Brush, ResponsiveContainer } from '../../../../../src';
import { dateData } from '../../../data';

export default {
  title: 'Examples/cartesian/Brush/In Surface',
};

export const InSurface = {
  render: () => {
    interface BrushStartEndIndex {
      startIndex?: number;
      endIndex?: number;
    }

    const [surfaceWidth, surfaceHeight] = [600, 500];
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

    // eslint-disable-next-line no-shadow
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
      <ResponsiveContainer width="100%" height={surfaceHeight}>
        <div style={{ margin: 'auto', width: surfaceWidth }}>
          <p>Simple Brush</p>
          <Surface
            width={surfaceWidth}
            height={200}
            viewBox={{
              x: 0,
              y: 0,
              width: surfaceWidth,
              height: 200,
            }}
          >
            <Brush
              startIndex={simple.startIndex}
              endIndex={simple.endIndex}
              x={100}
              y={50}
              width={400}
              height={40}
              data={dateData}
              onChange={handleChange}
              traveller={renderTraveller}
            />
          </Surface>
          <p>Brush has specified gap</p>
          <Surface width={surfaceWidth} height={200}>
            <Brush
              startIndex={gap.startIndex}
              endIndex={gap.endIndex}
              x={100}
              y={50}
              width={400}
              height={40}
              data={dateData}
              gap={5}
              onChange={handleGapChange}
            />
          </Surface>
        </div>
      </ResponsiveContainer>
    );
  },
};
