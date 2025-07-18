import React from 'react';
import { fireEvent, within, expect } from 'storybook/test';
import { Args } from '@storybook/react-vite';
import { pageData } from '../../data';
import {
  Brush,
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  Scatter,
  ScatterChart,
  Tooltip,
} from '../../../../src';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import type { RechartsStoryContext } from '../../../storybook-addon-recharts/RechartsStoryContext';

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
  },
  y: {
    description: 'The y-coordinate of brush.',
    table: { type: { summary: 'number' }, category: 'General' },
  },
  dy: {
    description: 'Indicates a shift along the y-axis on the position of the Brush and its content.',
    table: { type: { summary: 'number' }, category: 'General' },
  },
  width: {
    description: 'The width of brush.',
    table: { type: { summary: 'number' }, category: 'General' },
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
  render: (args: Args, context: RechartsStoryContext) => (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={pageData}>
        <Line dataKey="uv" />
        <Brush {...args} />
        <RechartsHookInspector
          position={context.rechartsInspectorPosition}
          setPosition={context.rechartsSetInspectorPosition}
        />
      </ComposedChart>
    </ResponsiveContainer>
  ),
  args: getStoryArgsFromArgsTypesObject(GeneralProps),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const slider = await canvas.findAllByRole('slider');
    const leftSlider = slider[0];
    expect(leftSlider).toBeTruthy();

    fireEvent.mouseDown(leftSlider);
    fireEvent.mouseMove(leftSlider, { clientX: 200 });
    fireEvent.mouseUp(leftSlider);
  },
};

export const PanoramaWithLine = {
  render: (args: Args, context: RechartsStoryContext) => (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={pageData}>
        <Line dataKey="uv" />
        <Tooltip />
        <Brush {...args}>
          <ComposedChart data={pageData}>
            <Line dataKey="uv" />
          </ComposedChart>
        </Brush>
        <RechartsHookInspector
          position={context.rechartsInspectorPosition}
          setPosition={context.rechartsSetInspectorPosition}
        />
      </ComposedChart>
    </ResponsiveContainer>
  ),
  args: getStoryArgsFromArgsTypesObject(GeneralProps),
};

export const PanoramaWithArea = {
  render: (args: Args, context: RechartsStoryContext) => (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={pageData}>
        <Area dataKey="uv" />

        <Brush {...args}>
          <ComposedChart data={pageData}>
            <Area dataKey="uv" />
          </ComposedChart>
        </Brush>
        <RechartsHookInspector
          position={context.rechartsInspectorPosition}
          setPosition={context.rechartsSetInspectorPosition}
        />
      </ComposedChart>
    </ResponsiveContainer>
  ),
  args: getStoryArgsFromArgsTypesObject(GeneralProps),
};

export const PanoramaWithBar = {
  render: (args: Args, context: RechartsStoryContext) => (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={pageData}>
        <Bar dataKey="uv" />

        <Brush {...args}>
          <ComposedChart data={pageData}>
            <Bar dataKey="uv" />
          </ComposedChart>
        </Brush>
        <RechartsHookInspector
          position={context.rechartsInspectorPosition}
          setPosition={context.rechartsSetInspectorPosition}
        />
      </ComposedChart>
    </ResponsiveContainer>
  ),
  args: getStoryArgsFromArgsTypesObject(GeneralProps),
};

export const PanoramaWithScatter = {
  render: (args: Args, context: RechartsStoryContext) => (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart data={pageData}>
        <Scatter dataKey="uv" />

        <Brush {...args}>
          <ScatterChart data={pageData}>
            <Scatter dataKey="uv" />
          </ScatterChart>
        </Brush>
        <RechartsHookInspector
          position={context.rechartsInspectorPosition}
          setPosition={context.rechartsSetInspectorPosition}
        />
      </ScatterChart>
    </ResponsiveContainer>
  ),
  args: getStoryArgsFromArgsTypesObject(GeneralProps),
};
