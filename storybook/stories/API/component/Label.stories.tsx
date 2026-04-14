import React from 'react';
import { Args, Meta } from '@storybook/react-vite';
import {
  CartesianGrid,
  Label,
  Line,
  LineChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Rectangle,
  ResponsiveContainer,
  XAxis,
  YAxis,
  usePlotArea,
} from '../../../../src';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import { pageData } from '../../data';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { LabelArgs } from '../arg-types/LabelArgs';

export default {
  argTypes: LabelArgs,
  component: Label,
} satisfies Meta<typeof Label>;

export const API = {
  name: 'CartesianPositions',
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={pageData}
          margin={{
            top: 100,
            bottom: 100,
            left: 100,
            right: 100,
          }}
        >
          <CartesianGrid />
          <Line type="monotone" dataKey="uv" stroke="#111" />
          <YAxis tick={false} />
          <XAxis dataKey="name" tick={false} />
          <Label value={`Position: ${args.position}`} {...args} />
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: { ...getStoryArgsFromArgsTypesObject(LabelArgs), position: 'center' },
};

export const PolarPositions = {
  render: (args: Args) => {
    return (
      <RadarChart
        width={800}
        height={800}
        data={pageData}
        margin={{
          top: 30,
          bottom: 30,
          left: 100,
          right: 100,
        }}
      >
        <Radar type="monotone" dataKey="uv" fill="rgba(0, 200, 200, 0.2)" />
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis tick={false} />
        <Label value={`Position: ${args.position}`} {...args} />
        <RechartsHookInspector />
      </RadarChart>
    );
  },
  args: { ...getStoryArgsFromArgsTypesObject(LabelArgs), position: 'center' },
};

/**
 * Helper component to draw a rectangle around the plot area so that
 * "inside" vs "outside" label positions are visually clear.
 */
const PlotAreaBorder = () => {
  const plotArea = usePlotArea();
  if (plotArea == null) {
    return null;
  }
  return (
    <Rectangle
      x={plotArea.x}
      y={plotArea.y}
      width={plotArea.width}
      height={plotArea.height}
      stroke="#aaa"
      strokeDasharray="4 2"
      fill="none"
    />
  );
};

const ALL_CARTESIAN_POSITIONS = [
  'top',
  'bottom',
  'left',
  'right',
  'center',
  'insideLeft',
  'insideRight',
  'insideTop',
  'insideBottom',
  'insideTopLeft',
  'insideTopRight',
  'insideBottomLeft',
  'insideBottomRight',
  'inside',
  'outside',
  'middle',
] as const;

/**
 * Shows all cartesian label positions at once inside a LineChart.
 * The dashed rectangle marks the plot area boundary, making it easy to
 * distinguish "inside*" positions from "outside" / "top" / "bottom" etc.
 */
export const AllCartesianPositions = {
  render: () => (
    <LineChart width={600} height={400} margin={{ top: 60, right: 80, bottom: 60, left: 80 }}>
      <PlotAreaBorder />
      {ALL_CARTESIAN_POSITIONS.map(pos => (
        <Label key={pos} position={pos} value={pos} fontSize={11} fill="#333" />
      ))}
    </LineChart>
  ),
};

const ALL_POLAR_POSITIONS = ['center', 'outside', 'insideStart', 'insideEnd', 'end'] as const;

/**
 * Shows all polar label positions at once inside a RadarChart.
 */
export const AllPolarPositions = {
  render: () => (
    <RadarChart width={600} height={600} data={pageData} margin={{ top: 30, right: 100, bottom: 30, left: 100 }}>
      <Radar dataKey="uv" fill="rgba(0,200,200,0.2)" stroke="teal" />
      <PolarGrid />
      <PolarAngleAxis dataKey="name" />
      <PolarRadiusAxis tick={false} />
      {ALL_POLAR_POSITIONS.map(pos => (
        <Label key={pos} position={pos} value={pos} fontSize={13} fill="#333" />
      ))}
    </RadarChart>
  ),
};

/**
 * Demonstrates the `formatter` prop, which transforms the raw `value`
 * before it is rendered. Useful for units, rounding, etc.
 */
export const WithFormatter = {
  render: (args: Args) => (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={pageData} margin={{ top: 80, right: 40, bottom: 40, left: 60 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <Label value={1234567} position="top" formatter={v => `${(Number(v) / 1000).toFixed(1)}k`} {...args} />
        <RechartsHookInspector />
      </LineChart>
    </ResponsiveContainer>
  ),
  args: { ...getStoryArgsFromArgsTypesObject(LabelArgs) },
};

/**
 * Demonstrates the `content` prop with a custom React element.
 * When `content` is set to a React element or render function,
 * it receives the full Label props and can render arbitrary SVG.
 */
export const WithCustomContent = {
  render: (args: Args) => {
    const CustomLabel = (props: any) => {
      const { viewBox } = props;
      if (!viewBox) return null;
      const { x = 0, y = 0, width = 0, height = 0 } = viewBox;
      const cx = Number(x) + Number(width) / 2;
      const cy = Number(y) + Number(height) / 2;
      return (
        <g>
          <circle cx={cx} cy={cy} r={18} fill="#8884d8" opacity={0.85} />
          <text x={cx} y={cy} textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize={11}>
            Label
          </text>
        </g>
      );
    };

    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={pageData} margin={{ top: 40, right: 40, bottom: 40, left: 60 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <Label content={<CustomLabel />} position="center" {...args} />
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: { ...getStoryArgsFromArgsTypesObject(LabelArgs) },
};

/**
 * Demonstrates the `angle` prop for rotating labels, which is useful for
 * vertical axis labels or other tilted annotations.
 */
export const WithAngle = {
  render: (args: Args) => (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={pageData} margin={{ top: 40, right: 60, bottom: 40, left: 80 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis>
          <Label angle={-90} value="UV Index" position="insideLeft" style={{ textAnchor: 'middle' }} {...args} />
        </YAxis>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <RechartsHookInspector />
      </LineChart>
    </ResponsiveContainer>
  ),
  args: { ...getStoryArgsFromArgsTypesObject(LabelArgs), angle: -90 },
};
