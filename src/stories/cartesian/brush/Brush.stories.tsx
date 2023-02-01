import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta } from '@storybook/react';
import { dateData } from '../../data';
import { Surface, Brush } from '../../..';

export default {
  title: 'Recharts/Cartesian/Brush',
  component: Brush,
} as ComponentMeta<typeof Brush>;

export const Simple = {
  render: (args: any) => {
    const [simple, setSimple] = React.useState({
      startIndex: 0,
      endIndex: args.data.length - 1,
    });

    const [gap, setGap] = React.useState({
      startIndex: 0,
      endIndex: args.data.length - 1,
    });

    const handleChange = (res: any) => {
      setSimple(res);
    };

    const handleGapChange = (res: any) => {
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
      <div>
        <p>Simple Brush</p>
        <Surface width={800} height={200}>
          <Brush
            startIndex={simple.startIndex}
            endIndex={simple.endIndex}
            x={100}
            y={50}
            width={400}
            height={40}
            data={args.data}
            onChange={handleChange}
            traveller={renderTraveller}
          />
        </Surface>
        <p>Brush has specified gap</p>
        <Surface width={800} height={200}>
          <Brush
            startIndex={gap.startIndex}
            endIndex={gap.endIndex}
            x={100}
            y={50}
            width={400}
            height={40}
            data={args.data}
            gap={5}
            onChange={handleGapChange}
          />
        </Surface>
      </div>
    );
  },

  args: {
    data: dateData,
  },
};
