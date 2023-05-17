import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { fireEvent } from '@storybook/testing-library';
import { Args } from '@storybook/react';
import { numberData, dateData } from '../../data';
import { Surface, Brush, ResponsiveContainer, LineChart, Line } from '../../../../src';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';

interface BrushStartEndIndex {
  startIndex?: number;
  endIndex?: number;
}

const GeneralProps: Args = {
  dataKey: {
    description: 'The key of data displayed in Brush.',
    table: { type: { summary: 'string | number | Function' }, category: 'General' },
  },
  x: {
    description: 'The x-coordinate of brush.',
    table: { type: { summary: 'number' }, category: 'General' },
    defaultValue: 0,
  },
  y: {
    description: 'The y-coordinate of brush.',
    table: { type: { summary: 'number' }, category: 'General' },
    defaultValue: 0,
  },
  width: {
    description: 'The width of brush.',
    table: { type: { summary: 'number' }, category: 'General' },
    defaultValue: 0,
  },
  height: {
    description: 'The height of brush.',
    table: { type: { summary: 'number' }, category: 'General' },
    defaultValue: 40,
  },
  travellerWidth: {
    description: 'The width of each traveller.',
    table: { type: { summary: 'number' }, category: 'General' },
    defaultValue: 5,
  },
  gap: {
    description: `The data with gap of refreshing chart. If the option is not set, 
    the chart will be refreshed every time.`,
    table: { type: { summary: 'number' }, category: 'General' },
    defaultValue: 1,
  },
  startIndex: {
    description: 'The default start index of brush. If the option is not set, the start index will be 0.',
    table: { type: { summary: 'number' }, category: 'General' },
  },
  endIndex: {
    description: `The default end index of brush. If the option is not set, 
    the end index will be calculated by the length of data`,
    table: { type: { summary: 'number' }, category: 'General' },
  },
  tickFormatter: {
    description: 'The formatter function of ticks.',
    table: { type: { summary: 'Function' }, category: 'General' },
  },
  onChange: {
    description: 'The handler of changing the active scope of brush.',
    table: { type: { summary: 'Function' }, category: 'General' },
  },
  alwaysShowText: {
    control: { type: 'boolean' },
    table: { type: { summary: 'boolean' }, category: 'General' },
    defaultValue: false,
  },
};

export default {
  argTypes: {
    ...GeneralProps,
  },
  component: Brush,
};

const [surfaceWidth, surfaceHeight] = [600, 500];

export const Simple = {
  render: (args: Record<string, any>) => {
    const [simple, setSimple] = React.useState<BrushStartEndIndex>({
      startIndex: 0,
      endIndex: args.data.length - 1,
    });

    const [gap, setGap] = React.useState<BrushStartEndIndex>({
      startIndex: 0,
      endIndex: args.data.length - 1,
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
              data={args.data}
              onChange={handleChange}
              traveller={renderTraveller}
              {...args}
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
              {...args}
            />
          </Surface>
        </div>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(GeneralProps),
    data: dateData,
  },
  parameters: {
    controls: { include: Object.keys(GeneralProps) },
  },
};

export const PlayBrushMove = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart {...args}>
          <Line dataKey="uv" />
          <Brush {...args} />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(GeneralProps),
    data: numberData,
  },
  parameters: {
    controls: { include: Object.keys(GeneralProps) },
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
