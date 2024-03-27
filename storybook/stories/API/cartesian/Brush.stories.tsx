import React from 'react';
import { fireEvent } from '@storybook/test';
import { Args } from '@storybook/react';
import { pageData } from '../../data';
import { Brush, ResponsiveContainer, ComposedChart, Line, Area, Bar, Scatter, ScatterChart } from '../../../../src';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';

const GeneralProps: Args = {
  ariaLabel: {
    description: 'The ARIA label of the brush.',
    table: { type: { summary: 'string' }, category: 'General' },
  },
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
  fill: {
    description: 'Fill color',
    table: { type: { summary: 'string' }, category: 'SVG properties' },
    defaultValue: '#ccc',
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
    table: { type: { summary: 'Function' }, category: 'Event handlers' },
  },
  onDragEnd: {
    description: 'The handler of ending the brush drag.',
    table: { type: { summary: 'Function' }, category: 'Event handlers' },
  },
  alwaysShowText: {
    control: { type: 'boolean' },
    table: { type: { summary: 'boolean' }, category: 'General' },
    defaultValue: false,
  },
};

export default {
  component: Brush,
  argTypes: GeneralProps,
};

export const API = {
  render: (args: Record<string, any>) => (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={pageData}>
        <Line dataKey="uv" />

        <Brush {...args} />
      </ComposedChart>
    </ResponsiveContainer>
  ),
  args: getStoryArgsFromArgsTypesObject(GeneralProps),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    setTimeout(() => {
      const leftBrushSlide = canvasElement.querySelector('.recharts-brush-traveller');

      fireEvent.mouseDown(leftBrushSlide);
      fireEvent.mouseMove(leftBrushSlide, { clientX: 200 });
      fireEvent.mouseUp(leftBrushSlide);
    }, 0);
  },
};

export const PanoramaWithLine = {
  render: (args: Record<string, any>) => (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={pageData}>
        <Line dataKey="uv" />

        <Brush {...args}>
          <ComposedChart data={pageData}>
            <Line dataKey="uv" />
          </ComposedChart>
        </Brush>
      </ComposedChart>
    </ResponsiveContainer>
  ),
  args: getStoryArgsFromArgsTypesObject(GeneralProps),
};

export const PanoramaWithArea = {
  render: (args: Record<string, any>) => (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={pageData}>
        <Area dataKey="uv" />

        <Brush {...args}>
          <ComposedChart data={pageData}>
            <Area dataKey="uv" />
          </ComposedChart>
        </Brush>
      </ComposedChart>
    </ResponsiveContainer>
  ),
  args: getStoryArgsFromArgsTypesObject(GeneralProps),
};

export const PanoramaWithBar = {
  render: (args: Record<string, any>) => (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={pageData}>
        <Bar dataKey="uv" />

        <Brush {...args}>
          <ComposedChart data={pageData}>
            <Bar dataKey="uv" />
          </ComposedChart>
        </Brush>
      </ComposedChart>
    </ResponsiveContainer>
  ),
  args: getStoryArgsFromArgsTypesObject(GeneralProps),
};

export const PanoramaWithScatter = {
  render: (args: Record<string, any>) => (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart data={pageData}>
        <Scatter dataKey="uv" />

        <Brush {...args}>
          <ScatterChart data={pageData}>
            <Scatter dataKey="uv" />
          </ScatterChart>
        </Brush>
      </ScatterChart>
    </ResponsiveContainer>
  ),
  args: getStoryArgsFromArgsTypesObject(GeneralProps),
};
