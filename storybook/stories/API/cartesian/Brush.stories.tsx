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
import { BrushArgs } from '../arg-types/BrushArgs';

export default {
  component: Brush,
  argTypes: BrushArgs,
};

export const API = {
  render: (args: Args) => (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={pageData}>
        <Line dataKey="uv" />
        <Brush {...args} />
        <RechartsHookInspector />
      </ComposedChart>
    </ResponsiveContainer>
  ),
  args: getStoryArgsFromArgsTypesObject(BrushArgs),
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
  render: (args: Args) => (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={pageData}>
        <Line dataKey="uv" />
        <Tooltip />
        <Brush {...args}>
          <ComposedChart data={pageData}>
            <Line dataKey="uv" />
          </ComposedChart>
        </Brush>
        <RechartsHookInspector />
      </ComposedChart>
    </ResponsiveContainer>
  ),
  args: getStoryArgsFromArgsTypesObject(BrushArgs),
};

export const PanoramaWithArea = {
  render: (args: Args) => (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={pageData}>
        <Area dataKey="uv" />

        <Brush {...args}>
          <ComposedChart data={pageData}>
            <Area dataKey="uv" />
          </ComposedChart>
        </Brush>
        <RechartsHookInspector />
      </ComposedChart>
    </ResponsiveContainer>
  ),
  args: getStoryArgsFromArgsTypesObject(BrushArgs),
};

export const PanoramaWithBar = {
  render: (args: Args) => (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={pageData}>
        <Bar dataKey="uv" />

        <Brush {...args}>
          <ComposedChart data={pageData}>
            <Bar dataKey="uv" />
          </ComposedChart>
        </Brush>
        <RechartsHookInspector />
      </ComposedChart>
    </ResponsiveContainer>
  ),
  args: getStoryArgsFromArgsTypesObject(BrushArgs),
};

export const PanoramaWithScatter = {
  render: (args: Args) => (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart data={pageData}>
        <Scatter dataKey="uv" />

        <Brush {...args}>
          <ScatterChart data={pageData}>
            <Scatter dataKey="uv" />
          </ScatterChart>
        </Brush>
        <RechartsHookInspector />
      </ScatterChart>
    </ResponsiveContainer>
  ),
  args: getStoryArgsFromArgsTypesObject(BrushArgs),
};
