import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { fireEvent } from '@storybook/testing-library';
import { numberData, dateData } from '../../data';
import { Surface, Brush, ResponsiveContainer, LineChart, Line } from '../../../../src';

export default {
  component: Brush,
  tags: ['autodocs'],
};

const [surfaceWidth, surfaceHeight] = [600, 500];

export const Simple = {
  render: (args: Record<string, any>) => {
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
              data={args.data}
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
              data={args.data}
              gap={5}
              onChange={handleGapChange}
            />
          </Surface>
        </div>
      </ResponsiveContainer>
    );
  },

  args: {
    data: dateData,
  },
};

export const PlayBrushMove = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart {...args}>
          <Line dataKey="uv" />
          <Brush />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: numberData,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    setTimeout(() => {
      const leftBrushSlide = canvasElement.querySelector('.recharts-brush-traveller');

      fireEvent.mouseDown(leftBrushSlide);
      fireEvent.mouseMove(leftBrushSlide, { clientX: 200 });
      fireEvent.mouseUp(leftBrushSlide);
    }, 0);
  },
};
